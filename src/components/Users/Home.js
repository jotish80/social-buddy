import React, { useEffect, useState } from 'react';
import Post from './Post/Post';


const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    const styles = {
        textAlign: "center",
        color: "purple"
    }
    return (
        <div style={styles}>
            <h1>Social Buddy</h1>
            {
                users.map(user => <Post user={user}></Post>)
            }

        </div>
    );
};

export default Home;