import React from 'react';
import { Avatar } from '@material-ui/core';


const Comments = (props) => {
  const { name, email, body } = props.comment;
  const commentStyle = {
    backgroundColor: "whitesmoke",
    padding: "15px"
  }

  return (
    <div style={commentStyle}>
      <div>
        <Avatar src={props.profile}></Avatar>

      </div>
      <div>
        <h3>Name: {name}</h3>
        <p>E-mail: {email}</p>
        <p>Comment: {body}</p>
        <hr />
      </div>
    </div>
  );
};

export default Comments;