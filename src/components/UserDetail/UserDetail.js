import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import fakeData from '../../FakeData/FakeData';
const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  const [postComment, setPostComment] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
      .then(res => res.json())
      .then(data => setPostComment(data))
  }, [])

  const friendStyles = {
    border: "1px solid purple",
    borderRadius: "20px",
    boxShadow: "10px 10px 5px gray",
    backgroundColor: "lightCyan",
    textAlign: "center",
    fontWeight: "bold",

  }


  return (
    <div style={friendStyles}>
      <div className="user">
        <h3>User Detail: {userId}</h3>
        <p>Title: {user.title}</p>
        <p>Body: {user.body}</p><hr />
      </div>
      <div>
        {
          postComment.map((comment, i) => <Comments comment={comment} profile={fakeData[i]}></Comments>)
        }

      </div>
    </div>

  );
};

export default UserDetail;