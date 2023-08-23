import React, { useState } from 'react';
import './HomePage.css'; // Import your custom styles

function HomePage() {
  const [title, setTitle] = useState('');
  const [paragraphs, setParagraphs] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  //function to handle changes in title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleParagraphsChange = (e) => {
    setParagraphs(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setSelectedFileName(file.name); // Update the selected file name
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, including sending the video details and file to the server
  };

  return (
    <div className="HomePage">
      <h1>Admin Home Page</h1>
      <form className="video-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label">
          Video Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        </div>
        <div className="input-container">
          <label className="label">
          Paragraphs (one per line):
          <textarea value={paragraphs} onChange={handleParagraphsChange} rows="12" />
        </label>
          </div>
        
         <div className="button-container">
          <label className="label" htmlFor="file">
            Choose Video File
          </label>
          <div className="file-input-container">
            <input
              type="file"
              id="file"
              accept="video/*"
              onChange={handleFileChange}
              className="upload-button"
            />
            <span className="selected-file-name">{selectedFileName}</span>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Upload Video
        </button>
      </form>
    </div>
  );
}

export default HomePage;
