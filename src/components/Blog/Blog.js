import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogs-container'>
            <div>
                <h1>React Router</h1>
                <p>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
            </div>


            <div>
                <h1>How Does Work Context API?</h1>
                <p>Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.</p>
            </div>


            <div>

                <h1>Uses Of useRef</h1>
                <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .es while preserving the right application view.</p>
            </div>
        </div>
    );
};

export default Blog;