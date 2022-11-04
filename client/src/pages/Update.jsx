import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
	const [book, setBook] = useState({
		title: '',
		desc: '',
		cover: '',
	});

	const handleChange = (e) => {
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const navigate = useNavigate();
	const location = useLocation();
	const bookId = location.pathname.split('/')[2];

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:8800/books/${bookId}`, book);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='form'>
			<h1>Update the Book</h1>
			<input
				type='text'
				placeholder='title'
				name='title'
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='desc'
				name='desc'
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='cover'
				name='cover'
				onChange={handleChange}
			/>
			<button className='formButton' onClick={handleClick}>
				Update
			</button>
		</div>
	);
};

export default Update;
