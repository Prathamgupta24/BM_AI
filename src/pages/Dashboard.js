import React, { useState, useEffect } from 'react';
import axios from '../api/axiosInstance';
import ExternalWebsiteEmbed from './ExternalWebsiteEmbed';
import './Dashboard.css';

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome to BookChainNova Dashboard</h1>

      {/* Book Section */}
      <div className="book-section">
        <h2>Book List</h2>
        <div className="book-list">
          {books.map((book) => (
            <div key={book._id} className="book-item">
              <div className="book-content">
                <div className="book-image">
                  <img src={book.image} alt={book.title} />
                  {book.buyLink && (
                    <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="buy-link">Buy Now</a>
                  )}
                </div>
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Genre:</strong> {book.genre}</p>
                  <p><strong>Description:</strong> {book.description}</p>
                  <p><strong>Price:</strong> Rs.{book.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div>
        <h1>Chat with Document</h1>
        <ExternalWebsiteEmbed url="http://localhost:3000/chatpdf" />
      </div>

      {/* Smaller Sections below Book Section */}
      <div className="smaller-sections">
        <div className="card">
          <h3>AI Recommendations</h3>
          <p>Get book suggestions based on your interests.</p>
        </div>
        <div className="card">
          <h3>User Profile</h3>
          <p>View and update your profile details.</p>
        </div>
        <div className="card">
          <h3>Blockchain Activity</h3>
          <p>Monitor your blockchain transactions related to book management.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} BookChainNova. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
