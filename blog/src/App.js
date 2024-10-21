import React, { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [articles, setArticles] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Fetch articles from the backend
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:5000/articles');
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setInquirySubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='complete'>
      <div className='articles'>


      
      <h1>Career Guidance Blog</h1>
      <h2>Articles</h2>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}

          </div>

      <div className='contact'>  
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {inquirySubmitted && <p>Your inquiry has been submitted!</p>}


      </div>
    </div>
  );
};

export default App;
