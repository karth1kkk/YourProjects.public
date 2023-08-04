import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Pencil2Icon, TrashIcon, MarginIcon,Link1Icon } from '@radix-ui/react-icons';
import axios from 'axios';
import { Context } from '../context/Context';
import { toast } from 'react-toastify';
import QRCode from 'react-qr-code';
import "./singlepost.css"

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PublicFlo = 'https://your-projects-com.vercel.app/images/';
  const {user} = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false); 
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [link, setLink] = useState(''); 
  const [photo1, setPhoto1] = useState('');
  const [photo2, setPhoto2] = useState(''); 
  const [categories, setCategories] = useState('')
  const [sourceCodeFile, setSourceCodeFile] = useState('');

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get('/posts/' + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setLink(res.data.link);
        setPhoto1(res.data.photo1);
        setPhoto2(res.data.photo2);
        setCategories(res.data.categories);
        setSourceCodeFile(res.data.sourceCodeFile);
      } catch (error) {
        console.error(error);
      }
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://your-projects-com.vercel.app/backend/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
      toast.success('Post has been Deleted');
    } catch (error) {
      console.error(error);
      toast.error('Error deleting Post: This function has some issues. It will be resolved in future updates');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://your-projects-com.vercel.app/backend/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        link,
        photo1,
        photo2,
        categories,
        sourceCodeFile,
      });
      setUpdateMode(false);
      toast.success('Post has been Sucessfully Updated');
    } catch (error) {
      console.error(error);
      toast.error('Error Updating Post');
    }
  };

  const qrCodeRef = useRef(null);

  const handleQRcode = async () => {
    setShowQRCode(true);
    toast.success(
      'QR code for your project has been generated. Use it in your resume or personal portfolios'
    );
  };

  const handleSaveQRCode = () => {
    if (qrCodeRef.current) {
      const qrCodeSvg = qrCodeRef.current;
      const svgData = new XMLSerializer().serializeToString(qrCodeSvg);
  
      const canvas = document.createElement("canvas");
      canvas.width = qrCodeSvg.clientWidth;
      canvas.height = qrCodeSvg.clientHeight;
  
      const img = new Image();
  
      img.onload = function () {
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
  
        const dataUrl = canvas.toDataURL("image/png");
  
        const link = document.createElement("a");
        link.download = "qr_code.png";
        link.href = dataUrl;
        link.click();
      };
  
      img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    }
  };
  
  
  
  

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo1 && (
          <img src={PublicFlo + post.photo1} alt="" className="singlePostImg" />
        )}
        {post.photo2 && (
          <img src={PublicFlo + post.photo2} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <Pencil2Icon
                  width="24"
                  height="24"
                  className="icon1"
                  onClick={() => setUpdateMode(true)}
                />
                <TrashIcon
                  width="24"
                  height="24"
                  className="icon2"
                  onClick={handleDeleteConfirmation} 
                />
                <MarginIcon
                  width="24"
                  height="24"
                  className="icon4"
                  onClick={handleQRcode}
                />
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            <Link to={`/user/${post.username}`} className="link">
            {post.ProfilePic && 
            <img className="AuthImg" src={PublicFlo + post.ProfilePic} alt="" />}<b> {post.username}</b>
            </Link>
          </span>
          <br />
          <span className="singlePostDate">
            {' '}
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
                {post.link && (
                <a
                  href={post.link.startsWith("http://") || post.link.startsWith("https://") ? post.link : `http://${post.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="singlePostLink"
                ><Link1Icon/>:
                <b>{post.link}</b>
                </a>
              )}

        {post.sourceCodeFile && (
          <div className="singlePostLink">
            Source Code File: <a href={PublicFlo + post.sourceCodeFile} target="_blank" rel="noreferrer">{post.sourceCodeFile}</a>
          </div>
        )}
        <br />
        <div className="writeFormGroup">
            <label className='singlePostDescIn' htmlFor="category">Category:</label>
            {updateMode ? (
              <select
                id="category"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                className="singlePostDescIn"
              >
                <option value="">Select a category</option>
                <option value="IOT">IOT</option>
                <option value="Web Development">Web Development</option>
                <option value="Business Technology">Business Technology</option>
                <option value="Mechatronic">Mechatronic</option>
                <option value="Engineering">Engineering</option>
              </select>
            ) : (
              <p className="singlePostcat">{categories}</p>
            )}
          </div>
          {showQRCode && (
          <div>
            <QRCode ref={qrCodeRef} value={window.location.href} />
          </div>
        )}
        {showQRCode && (
          <button className="singlePostButton" onClick={handleSaveQRCode}>
            Save QR Code as Image
          </button>
        )}
        <br />
        <br />
        {showDeleteConfirmation && (
          <div className="confirmationModal">
            <div className="confirmationModalContent">
              <p>Are you sure you want to delete this post?</p>
              <div className="confirmationButtons">
                <button className='delete' onClick={handleDelete}>Confirm</button>
                <button className='cancel' onClick={handleCancelDelete}>Cancel</button>
              </div>
            </div>
          </div>
        )}
        <br />
        <br />
        <br />
        <br />
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default SinglePost;
