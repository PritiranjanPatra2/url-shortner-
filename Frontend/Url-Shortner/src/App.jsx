import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false); 

  async function handle() {
    if (!url) return;
    setLoading(true); 
    try {
      const res = await axios.post(`https://url-shortner-vcg8.onrender.com/newUrl`, {
        url: url
      });
      setShortUrl(res.data.link);
    } catch (error) {
      console.error('Error shortening URL:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>URL Shortener</h1>
        <p>Enter a URL to shorten:</p>
        <input 
          type="text" 
          placeholder="Paste your URL here..." 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
        />
        <button onClick={handle} disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten'} 
        </button>
        {loading && <p className="loading-message">Loading...</p>} 
        {shortUrl && (
          <a href={shortUrl} target='_blank' rel="noopener noreferrer">
            {shortUrl}
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
