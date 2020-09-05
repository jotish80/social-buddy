import React from 'react';
import { Avatar } from '@material-ui/core';

const Comments = (props) => {
 const {name, email, body}  = props.comment;  
  console.log(props,name)
    return (
        <div>
            
           <div>
             <Avatar src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}> </Avatar>
           </div>
            <div>
        <h3>Name: {name}</h3>
        <p>E-mail: {email}</p>
        <p>Comment: {body}</p>
            </div>
        </div>
    );
};

export default Comments;