import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "1px solid purple",
    borderRadius: "20px",
    margin: "20px",
    boxShadow: "10px 10px 5px gray",
    backgroundColor: "lightCyan"


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

function Post(props) {
  const { title, body, id } = props.user;

  const classes = useStyles();


  return (

    <Card className={classes.root}>

      <CardContent>
        <Typography variant="h5" component="h2">
          Title: {title}
        </Typography>

        <Typography variant="body2" component="p">
          Body:{body}

        </Typography>
      </CardContent>

      <Link to={`/user/${id}`}>
        <Button variant="contained" color="primary">
          Show details of {id}
        </Button> </Link>

    </Card>

  );
}
export default Post;

