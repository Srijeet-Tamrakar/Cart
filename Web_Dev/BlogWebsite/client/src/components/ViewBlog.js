import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import spinner from '../spinner.gif'
import {Link} from 'react-router-dom';


const ViewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [blog, setBlog] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(() => {
        axios.get(`/blogs/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setBlog(res.data.blog),
                setAuthor(res.data.author)
            ])
            .catch(error => console.log(error))
            
    }, [props])

    return(
        <MainContainer className='container'>
            {!title || !blog || !author ? <img src={spinner} alt='Loading...'/>:
                <>
                <h2>{title}</h2>
                <p>{blog}</p>
                <p className='badge badge-secondary'>{author}</p>
                <p>
                <Link to ='/' className = 'btn btn-info mt-4'>
                    Back To Home
                </Link>
                </p>
                </>
            }
        </MainContainer>
    )
}

export default ViewBlog

const MainContainer = styled.div`

    h2{
        font-weight:1200;
        text-align:center;
        margin-bottom: 4rem;
        margin-top: 2rem;
    }

    img{
        width: 2rem;
        display: block;
        margin: 0 auto;
    }
`