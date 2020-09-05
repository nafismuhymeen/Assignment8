import React from 'react';
import './Post.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Post = () => {
    const { post } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${post}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, []);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${post}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    return (
        <>
            <div className="post-detail">
                <br /><br />
                <img className="post-img" src={`https://picsum.photos/id/${post}/400/300`} alt="" />
                <h1 className="post-title">{postDetail.title}</h1>
                <p className="post-body">{postDetail.body}</p>
            </div>
            <div className="comments">
                <h1 className="comments-head">Comments</h1>
                <div>
                    {
                        comments.map(comment => <div className="all-comments">
                            <img className="profile-pic" src={`https://api.adorable.io/avatars/150/${comment.id}.png`} alt=""/>
                            <div className="comment-section">
                        <h4>Name: {comment.name}</h4>
                        <h5>email: {comment.email}</h5>
                        <p>Comment: {comment.body}</p>
                    </div></div>
                        )
                    }
                </div>

            </div>
        </>
    );
};

export default Post;