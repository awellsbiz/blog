import NavBar from './layouts/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'  

interface BlogPost {
  title: string;
  content: string;
}

function App() {
  const [getBlogContent, setBlogContent] = useState<BlogPost[]>([
    {
      title: "Blog Post 1",
      content: "This is my first blog post"
    },
    {
      title: "Blog Post 2",
      content: "This is my second blog post"
    },
    {
      title: "Blog Post 3",
      content: "This is my third blog post"
    }
  ])

  return (
    
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<Home post={getBlogContent} />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/services" element={<h1>Services</h1>} />
          </Routes>
        </div>
      </div>
    
  )
}

export default App
