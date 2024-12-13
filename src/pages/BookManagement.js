// src/pages/BookManagement.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import './BookManagement.css';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    image: '',
    price: '',
    description: '',
    buyLink: ''
  });
  const [error, setError] = useState('');

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  // Handle add book form submission
  const handleAddBook = async (e) => {
    e.preventDefault();
    if (!Object.values(newBook).every(field => field)) {
      setError('All fields are required!');
      return;
    }
    try {
      const response = await axiosInstance.post('/books', newBook);
      setBooks([...books, response.data]);
      setNewBook({
        title: '', author: '', genre: '', image: '', price: '', description: '', buyLink: ''
      });
      setError('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Handle remove book
  const handleRemoveBook = async (id) => {
    const confirmRemove = window.confirm('Are you sure you want to remove this book?');
    if (confirmRemove) {
      try {
        await axiosInstance.delete(`/books/${id}`);  // Ensure this matches your backend route
        setBooks(books.filter((book) => book._id !== id));
      } catch (error) {
        console.error('Error removing book:', error);
      }
    }
  };
  

  return (
    <div className="book-management-container">
      <h1>Book Management</h1>
      
      <div className="book-form-container">
        <h2>Add New Book</h2>
        <form className="book-form" onSubmit={handleAddBook}>
          {['title', 'author', 'genre', 'image', 'price', 'description', 'buyLink'].map((field) => (
            <div className="form-group" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type="text"
                value={newBook[field]}
                onChange={(e) => setNewBook({ ...newBook, [field]: e.target.value })}
                required
              />
            </div>
          ))}
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="add-button">Add Book</button>
        </form>
      </div>

      <div className="book-list-container">
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books available. Add a new book!</p>
        ) : (
          <ul className="book-list">
            {books.map((book) => (
              <li key={book._id} className="book-item">
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p><strong>Genre:</strong> {book.genre}</p>
                  <p><strong>Description:</strong> {book.description}</p>
                  <p><strong>Price:</strong> Rs.{book.price}</p>
                  {/* <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="buy-link">Buy Now</a> */}
                  <button onClick={() => handleRemoveBook(book._id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookManagement;
