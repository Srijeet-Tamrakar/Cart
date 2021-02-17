import React, { useState } from 'react';
import styled from 'styled-components';
import spinner from '../spinner.gif';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Blogs = ({posts}) => {
    const [blog, setBlog] = useState([])

    const deleteBlog = (id) =>{
        axios.delete(`/blogs/${id}`)
            .then(res => alert(res.data))
            setBlog(blog.filter(post => post._id !== id))
    }

    return(
        <MainContainer className='container mt-4'>
            <h2 className='p-3'>Total Blogs : {posts.length}</h2>
            {!posts.length ? <img src={spinner} alt = "Loading..." className='mt-4'/> :
            
            posts.map((blog, key) => (
                <div className=' border border-info rounded mb-4 mt-4 p-3 text-white' key={key}>
                    <h3>{blog.title}</h3>
                    <p className='my-4'>{blog.blog}</p>
                    <span className = 'badge badge-secondary p-2 '>{blog.author}</span>
                    <div className ='d-flex my-3 justify-content-end'>
                        <Link to = {{
                            pathname:`/blogs/${blog._id}`}} 
                            className = 'btn btn-outline-success mr-3'>
                                View
                        </Link>
                        <Link to = {`/update/${blog._id}`} className = 'btn btn-outline-info mr-3'>Edit</Link>
                        <button onClick = {() => deleteBlog(blog._id)}  className = 'btn btn-outline-danger'>Delete</button>
                    </div>
                </div>
            ))
            }
            
        </MainContainer>
    )
}

export default Blogs

const MainContainer = styled.div `
    img{
        width: 2rem;
        display: block;
        margin: 0 auto;
    }

    .border{
        background: #020202;
    }
    
    .d-flex{
        font-family: 'Concert One', cursive;
    }

`