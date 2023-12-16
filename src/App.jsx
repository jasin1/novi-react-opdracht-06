import './App.css'
// import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Posts from './pages/posts/Posts.jsx';
import PostMaken from './pages/postsmaken/PostMaken.jsx';
import NotFound from './pages/notFound/NotFound.jsx';
import Navigation from "./pages/navigation/Navigation.jsx";
import BlogPage from "./pages/blogpage/BlogPage.jsx";


function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/postmaken" element={<PostMaken/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/blogpost/:id" element={<BlogPage/>}></Route>
            </Routes>
        </>
    )
}

export default App
