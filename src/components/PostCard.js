import React from 'react';
import '../App.css';
const PostCard = ({item}) => {
    return (
        <div className={"cards"}>
            <h1>{item.title}</h1>
            <h3>{item.body}</h3>
        </div>
    );
};

export default PostCard;