import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'; 

function App() {
  const [url,setUrl]=useState('');
  const [shortUrl,setShortUrl]=useState('');
   async function handle(){
    const res=await axios.post(`http://localhost:5000/newUrl`,{
      url:url
    })
    console.log(res.data);
    setShortUrl(res.data.link);
  }
  return (
    <div className="app-container">
      <div className="form-container">
        <h1>URL Shortener</h1>
        <p>Enter a URL to shorten:</p>
        <input type="text" placeholder="Paste your URL here..." value={url} onChange={(e)=>setUrl(e.target.value)} />
        <button onClick={handle}>Shorten</button>
        {url.length>0&&<a href={shortUrl} target='_blank'>{shortUrl}</a>}
      </div>
    </div>
  );
}

export default App;
