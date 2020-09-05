import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Posts.css'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: 500,
    width: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = () => {
    
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    const shuffle = a => {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
  }
  shuffle(posts);
    const history = useHistory();
    function handleClickPost(id) {
      history.push(`/post/${id}`)
    }
    return (
        <div>
            <h1 className="timeline">Timeline</h1>
            <div>
                {posts.map(post => <div className="posts"><Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
      </CardContent>
      <img className="posts-img" src={`https://picsum.photos/id/${post.id}/300`} alt=""/>
      <CardActions>
        <Button onClick={()=>handleClickPost(post.id)} size="small">Learn More</Button>
      </CardActions>
    </Card></div>)}
            </div>
        </div>
    );
};

export default Posts;