import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const UserDetail = () => {
    const{userId} = useParams();
    const [user, setUsers] = useState([]);
    
    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    const [postComment, setPostComment] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then(res => res.json())
        .then(data => setPostComment(data))
    },[])
    
    const friendStyles={
       border: "1px solid purple",
       borderRadius: "20px",
       boxShadow: "10px 10px 5px gray",
       backgroundColor: "aquamarine",
       textAlign: "center",
       marginBottom: "10px"
       }
    return (
        <div style = {friendStyles}>
          <div className="user">
          <h3>User Detail: {userId}</h3>
            <p>Title: {user.title}</p>
            <p>Body: {user.body}</p>
          </div>
          <div>
        
             
            {
             postComment.map(comment => <Comments comment={comment}></Comments> )
            }
          </div>
        </div>
        
    );
};

export default UserDetail;