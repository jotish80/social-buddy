import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
 

const Home = () => {
const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setUsers(data))
         
    },[])
const styles ={
    textAlign: "center",
     
}
    return (
        <div style = {styles}>
            <h1>Social Buddy</h1>
            {
               users.map(user => <Cart user = {user}></Cart>)
            }
            
        </div>
    );
};

export default Home;