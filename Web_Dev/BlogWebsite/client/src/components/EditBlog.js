import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const EditBlog = (props) => {
    const [title, setTitle] = useState('')
    const [blog, setBlog] = useState('')
    const [author, setAuthor] = useState('')
    const [message, setMessage] = useState('')

    const clickOnChange = e =>{
        e.preventDefault()

        const blogs = {
            title,
            blog, 
            author
        }

        setAuthor('')
        setBlog('')
        setTitle('')

        axios.put(`/blogs/update/${props.match.params.id}`, blogs)
            .then(res => setMessage(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`/blogs/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setBlog(res.data.blog),
                setAuthor(res.data.author)
            ])
            .catch(error => console.log(error))
            
    }, [])

    return (
        <EditContainer >
            <h1 className = 'text-center mt-4'>Edit Blog</h1>
            <form className='d-flex flex-column p-4 ' encType='multipart/form-data' onSubmit={clickOnChange}>
                
                <div className="form-group ">
                    <label htmlFor="Author">Author Name</label>
                    <input value = {author} onChange={e => setAuthor(e.target.value)} type="text" className="form-control"  placeholder="Author Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Title">Title </label>
                    <input value = {title} onChange = {e => setTitle(e.target.value)} type="text" className="form-control" placeholder="Title" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Blog">Blog </label>
                    <textarea value = {blog} onChange = {e => setBlog(e.target.value)} className='form-control' rows='5' placeholder="Blog"required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
                <p className="text-center p-3 mt-4">{message}</p>
            </form>
        </EditContainer>
    )
}

export default EditBlog

const EditContainer = styled.div`
    margin: 3rem auto;
    width: 30rem;
    border: solid #b0c4de;
    border-width: 4px;
    border-radius: 20px;
    .btn{
        width: 70px;
        &:hover {
            background: var(--light-blue);
        }
    }
    font-family: 'Roboto', sans-serif;

    h1{
        color: #4a536b;
        font-family: 'Concert One', cursive;
    }

    p{
        color:tomato;
    }
    
`
