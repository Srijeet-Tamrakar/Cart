import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Route} from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import ViewBlog from './components/ViewBlog'
import EditBlog from './components/EditBlog'
import Images from './components/Images'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/blogs')
    .then(res => setPosts(res.data))
    .catch(error => console.log(error))
    
  })

 

  return (
    <div>
      <Header/>
      <NavBar/>
      <Images/>
      <Route exact path='/' render= {() => <Blogs posts = {posts}/>}/>
      <Route path = '/blogs/:id' render = {props => <ViewBlog {...props} posts = {posts}/>}/>
      <Route path = '/update/:id' render = {props => <EditBlog {...props} posts = {posts}/>}/>
      <Route path = '/addblog' component = {AddBlog}/>
      <Footer/>
    </div>
  );
}

export default App;
