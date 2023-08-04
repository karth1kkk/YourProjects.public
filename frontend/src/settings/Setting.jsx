import React,{ useContext, useState } from 'react'
import "./setting.css"
import { PersonIcon } from '@radix-ui/react-icons'
import Footer from '../footer/footer'
import NavMenu from '../menubar/menubar'
import { Context } from "../context/Context";
import axios from "axios";
import { toast } from 'react-toastify';

function Setting() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { user, dispatch } = useContext(Context);
    const PF = "https://your-projects-com.vercel.app/images/"
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "UPDATE_START" });
      const updatedUser = {
        userId: user._id,
        username,
        email,
        password,
      };
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {
          console.log(err)
        }
      }
      try {
        const res = await axios.put("https://your-projects-com.vercel.app/backend/users/" + user._id, updatedUser);
        dispatch({ type: "UPDATE_SUCC", payload: res.data });
        toast.success('User Info has been updated')
      } catch (err) {
        dispatch({ type: "UPDATE_FAILED" });
      }
    };

    const handleDeleteAccount = async () => {
      const confirmed = window.confirm("Are you sure you want to delete your account?");
      if (confirmed) {
        try {
          await axios.delete('https://your-projects-com.vercel.app/backend/users/'+ user._id);
          dispatch({ type: "LOGOUT" }); 
          toast.success('Your account has been deleted successfully');
        } catch (err) {
          toast.error('Error deleting the account: This function is will be resolved in a future update');
        }
      }
    };

    return (
        <div>
        <NavMenu/>
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Account</span>
                    <span className="settingDeleteTitle" onClick={handleDeleteAccount}>Delete Account</span>
                </div>
                <form className="settingForm" onSubmit={handleSubmit}>
                    <label className='PP'>Profile Picture</label>
                    <div className="settingPP">
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt=""/>
                        <label className='id' htmlFor="fileInput">
                            <PersonIcon/>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <label className='user'><b>Username</b></label>
                    <input type="text" required placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
                    <label className='email'><b>Email</b></label>
                    <input type="email" required placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
                    <label className='password'><b>Password</b></label>
                    <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                    <button className='settingSubmit' type="submit">Update</button>
                    </form>
            </div>
        </div>
        <br/><br/><br/><br/><br/>
        <Footer/>
        </div>
    )
}

export default Setting
