import React, { useContext, useState, useRef } from 'react';
import "./write.css";
import { ImageIcon,CodeIcon} from '@radix-ui/react-icons';
import Footer from '../footer/footer';
import NavMenu from '../menubar/menubar';
import axios from "axios";
import { Context } from "../context/Context";
import { toast } from 'react-toastify';

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [link, setLink] = useState("");
  const [sourceCode, setSourceCode] = useState(null);
  const { user } = useContext(Context);
  const [categories, setCategory] = useState("");
  
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const sourceCodeInputRef = useRef(null);

  const handleIconClick = (inputRef) => () => {
    inputRef.current.click();
  };

  const handleSourceCodeChange = (e) => {
    setSourceCode(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      file1,
      file2,
      link,
      categories,
      sourceCode, 
      username: user.username,
      ProfilePic: user.profilePic,
    };
    if (file1) {
      const data = new FormData();
      const filename = Date.now() + file1.name;
      data.append("name", filename);
      data.append("file", file1);
      newPost.photo1 = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
    if (file2) {
      const data = new FormData();
      const filename = Date.now() + file2.name;
      data.append("name", filename);
      data.append("file", file2);
      newPost.photo2 = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
    if (sourceCode) {
      const data = new FormData();
      const filename = Date.now() + sourceCode.name;
      data.append("name", filename);
      data.append("file", sourceCode);
      newPost.sourceCodeFile = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading source code file:", err);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
      toast.success('Post has been successfully uploaded');
    } catch (err) {
      console.error("Error creating post:", err);
      toast.error('Error creating Post');
    }
  };

  return (
    <div>
      <NavMenu />
      <div className="write">
        {file1 && <img className="writeImg" src={URL.createObjectURL(file1)} alt="" />}
        {file2 && <img className="writeImg" src={URL.createObjectURL(file2)} alt="" />}
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <input
              type="file"
              id="fileInput1"
              ref={fileInputRef1}
              style={{ display: "none" }}
              onChange={(e) => setFile1(e.target.files[0])}
            /><div className='img1'>
            <b>Choose the First Image</b>
          </div>
            <ImageIcon
              className="icon3"
              width="30"
              height="30"
              onClick={handleIconClick(fileInputRef1)}
            />
            <input
              type="file"
              id="fileInput2"
              ref={fileInputRef2}
              style={{ display: "none" }}
              onChange={(e) => setFile2(e.target.files[0])}
            /> <div className='img1'>
              <b>Choose the Second Image</b>
            </div>
            <ImageIcon
              className="icon3"
              width="30"
              height="30"
              onClick={handleIconClick(fileInputRef2)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              type="text"
              placeholder="Title"
              className="text2"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              type="text"
              placeholder="Enter link (optional)"
              className="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <input
              type="file"
              id="sourceCodeInput"
              ref={sourceCodeInputRef}
              style={{ display: "none" }}
              onChange={handleSourceCodeChange}
            /> <div className='code'>Upload your Source Code here</div>
            <CodeIcon
              className="icon3"
              width="30"
              height="30"
              onClick={handleIconClick(sourceCodeInputRef)}
            />
          </div>
          <div className="writeFormGroup">
            <select
              id="category"
              value={categories}
              onChange={handleCategoryChange}
              className="categorySelect">
                <option value="">Select a category</option>
                <option value="IOT">IOT</option>
                <option value="Web Development">Web Development</option>
                <option value="Business Technology">Business Technology</option>
                <option value="Mechatronic">Mechatronic</option>
                <option value="Engineering">Engineering</option>
            </select>
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Explain Your Project"
              type="text"
              className="writeinput writeText"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default Write;
