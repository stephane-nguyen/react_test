import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import MissingPage from './MissingPage'
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
    return (
        <DataProvider>
            <Routes>
                {/* the layout is used to gather the disposition of the page */}
                <Route path="/" element={<Layout
                //props in commentary due to the file DataContext & deleted of the other routes
                // search={search}
                // setSearch={setSearch}
                // width={width}
                />}>
                    {/* index element is used to say that it is in the outlet from the Layout.js */}
                    <Route index element={<Home />} />
    
                    <Route path="post">
                        <Route index element={<NewPost />} />
                        {/* post/:id <=> :id, :id is sufficient*/}
                        <Route path=":id" element={<PostPage />} />
                    </Route>
    
                    <Route path="edit/:id">
                        <Route index element={<EditPost />} />
                    </Route>
    
                    {/* we think no props will be applied on these two components */}
                    <Route path="about" element={<About />} />
                    {/*   * = catch all: if none of the components above worked, redirect to MissingPage */}
                    <Route path="*" element={<MissingPage />} />
                </Route>
            </Routes>
        </DataProvider>
    );
    
    //thanks to DataContext
    
    // import { useState, useEffect } from 'react';
    // import { format } from 'date-fns';
    // import api from './api/posts';
    // import useWindowSize from './hooks/useWindowSize';
    // import useAxiosFetch from './hooks/useAxiosFetch';
    
    // const [posts, setPosts] = useState([])
    // const [search, setSearch] = useState('')
    // const [searchResults, setSearchResults] = useState([])
    // const [postTitle, setPostTitle] = useState('')
    // const [postBody, setPostBody] = useState('')
    // const [editTitle, setEditTitle] = useState('')
    // const [editBody, setEditBody] = useState('')
    // const navigate = useNavigate()
    // const { width } = useWindowSize()
    // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    // useEffect(() => {
    //     setPosts(data);
    // }, [data]) //useEffect is activated when the dep is changing : here data 

    //this block is in commentary to avoid redundancy with the custom hook useAxiosFetch

    // //use axios 
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await api.get('/posts')
    //             //axios catches anything outside http200(error), don't need to check is reponse.ok
    //             setPosts(response.data)
    //         } catch (err) { // from axios documentation
    //             if (err.response) {
    //                 //not in the 200 response range 
    //                 console.log(err.response.data)
    //                 console.log(err.response.status)
    //                 console.log(err.response.headers)
    //             } else { // no response, 404 or something else 
    //                 console.log(`Error: ${err.message}`)
    //             }
    //         }
    //     }
    //     fetchPosts()
    // }, [])

    // useEffect(() => {
    //     const filteredResults = posts.filter(post =>
    //         ((post.body).toLowerCase()).includes(search.toLowerCase())
    //         || ((post.title).toLowerCase()).includes(search.toLowerCase())
    //     )
    //     setSearchResults(filteredResults.reverse())
    // }, [posts, search])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    //     const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    //     const newPost = { id, title: postTitle, datetime, body: postBody }
    //     try {
    //         const response = await api.post('/posts', newPost)
    //         const allPosts = [...posts, response.data]
    //         setPosts(allPosts)
    //         //reset title and body after creating the array
    //         setPostTitle('')
    //         setPostBody('')
    //         //go back to the main page
    //         navigate('/')
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`)
    //     }
    // }

    // const handleEdit = async (id) => {
    //     const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    //     const updatedPost = { id, title: editTitle, datetime, body: editBody }
    //     try {
    //         const response = await api.put(`/posts/${id}`, updatedPost)
    //         //map to eliminate the old posts by creating a new array
    //         setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
    //         setEditTitle('')
    //         setEditBody('')
    //         navigate('/')
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`)
    //     }
    // }

    // const handleDelete = async (id) => {
    //     try {
    //         await api.delete(`/posts/${id}`)
    //         const postsList = posts.filter(post => post.id !== id)
    //         setPosts(postsList)
    //         navigate('/')
    //     } catch (err) {
    //         console.log(`Error: ${err.message}`)
    //     }
    // }

}

export default App;


