import React from 'react';

interface HomeProps {
    post: {
        title: string, 
        content: string
    }[]   
}



const Home: React.FC<HomeProps> = ({post}): JSX.Element => {
    return (
        <div>
            <h1>Welcome to My Blog</h1>
            <p>Check out my latest posts below:</p>
            {/* Add your blog post components here */}
            {post.map((post, index) => (
                <div key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
