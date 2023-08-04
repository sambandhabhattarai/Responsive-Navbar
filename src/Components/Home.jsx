import React, { useState } from 'react';
import axios from 'axios';
const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
    <h1>File Upload Page</h1>
    <input type="file" onChange={handleFileInputChange} />
    <button onClick={handleFileUpload}>Upload</button>
  </div>
  )
}

export default Home