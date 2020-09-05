import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    function handleClick() {
        history.push('/posts')
      }
    return (
        <div className="header">
            <h1 className="logo">FakeBook</h1>
            <div className="posts-btn"><Button onClick={handleClick} variant="contained" color="primary">Posts</Button></div>
        </div>
    );
};

export default Header;