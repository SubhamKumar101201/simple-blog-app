import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { Button, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Fileupload from '../components/Fileupload';
import { categories } from '../../public/category'
import { API } from '../services/api';

function Post() {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg")
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const onButtonClick = async (e) => {
    e.preventDefault();
    try {
      const userId = sessionStorage.getItem('userId');
      if (userId === null) {
        navigate('/login');
      } else if (title === '' && description === '' && category === '') {
        setError('all')
      } else if (title === '' && description === '') {
        setError('td')
      } else if (title === '' && category === '') {
        setError('tc')
      } else if (category === '' && description === '') {
        setError('cd')
      } else if (title === '') {
        setError('title')
      } else if (description === '') {
        setError('description')
      } else if (category === '') {
        setError('category')
      } else {
        let response = await API.createPost({ userId, category, imgUrl, title, description });

        if (response.isSuccess) {
          navigate('/home');
        } else {
          console.log('Something went wrong!');
        }
      }
    } catch (err) {
      console.log(err);
      console.log('Something went wrong!');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex items-center flex-col'>
        <div className='flex items-center flex-col px-10 shadow-2xl rounded-md mb-4'>
          {preview === true ? <Fileupload imgUrl={imgUrl} /> : null}
          <div className='flex gap-4 mt-10 w-[75vw]'>
            <Input fullWidth placeholder="Image URL"
              id="imageUrlInput"
            />
            <button className='py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-colors duration-300'
              onClick={() => {
                const inputFieldValue = document.getElementById('imageUrlInput').value;
                setImgUrl(inputFieldValue ? inputFieldValue : "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg");
                setPreview(true)
              }}
            > PREVIEW </button>
            <button className='py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-colors duration-300'
              onClick={() => {
                setPreview(false)
              }}
            > Hide </button>
          </div>
          <div className='flex gap-4 mt-10 w-[75vw]'>
            {
              ['all' || 'title' || 'tc' || 'td'].includes(error) ?
                <Input fullWidth error placeholder='Required!'
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
                :
                <Input fullWidth placeholder="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
            }
          </div>
          <div className='flex gap-4 mt-10 w-[75vw]'>
            <FormControl variant="standard" fullWidth>
              {
                ['all', 'category', 'tc', 'cd'].includes(error) ?
                  <Select
                    error
                    value={category}
                    onChange={handleChange}
                    label="Choose Category"
                    displayEmpty
                  >
                    <MenuItem value="">Category Required!</MenuItem>
                    {
                      categories.map(category => (
                        <MenuItem key={category.id} value={category.type}>{category.type}</MenuItem>
                      ))
                    }
                  </Select>
                  :
                  <Select
                    value={category}
                    onChange={handleChange}
                    label="Choose Category"
                    displayEmpty
                  >
                    <MenuItem value="">Choose Category</MenuItem>
                    {
                      categories.map(category => (
                        <MenuItem key={category.id} value={category.type}>{category.type}</MenuItem>
                      ))
                    }
                  </Select>
              }
            </FormControl>
          </div>
          {
            ['all', 'description', 'td', 'cd'].includes(error) ?
              <textarea className=" focus:border-none focus:outline-red-600 mt-16 mb-10 w-[75vw] border border-red-500 p-2 min-h-40" placeholder="Required!"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
              :
              <textarea className="hover:border-2 hover:border-gray-800 focus:border-none focus:outline-blue-600 mt-16 mb-10 w-[75vw] border border-gray-500 p-2 min-h-40" placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
          }
          <button className='py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded transition-colors duration-300 w-[75vw] h-[3rem] mb-12'
            onClick={onButtonClick}
          > PUBLISH </button>
        </div>
      </div>
    </div>
  )
}

export default Post