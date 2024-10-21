import React, { useState, useEffect } from 'react';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('http://localhost:5000/courses');
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  // Handle inquiry submission
  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    const inquiry = { name, email, message };

    const response = await fetch('http://localhost:5000/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiry),
    });

    if (response.ok) {
      setInquirySubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Online Course Catalog</h1>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>

      <h2>Contact Us</h2>
      <form onSubmit={handleInquirySubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit Inquiry</button>
      </form>

      {inquirySubmitted && <p>Thank you for your inquiry! We will get back to you soon.</p>}
    </div>
  );
};

export default App;
