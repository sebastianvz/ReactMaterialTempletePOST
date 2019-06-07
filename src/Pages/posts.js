import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PostCard from "../Components/PostCard";
import { showPosts, incrementNumber } from "../store/postActions";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Post extends React.PureComponent {

  componentDidMount() {
    debugger;
    this.props.showPosts();
  }

  clickHandler = () => {
    console.log('IN');
    this.props.incrementNumber();
  }

  render() {
    const { posts } = this.props;
    return (
      <Grid>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Post's
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.clickHandler}>
          Incrementar
        </Button>
        <div>
          {
            posts && posts.map((post, idx) => (
              <Grid item key={idx}>
                <PostCard {...post} key={idx} />
              </Grid>
            ))
          }
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.PostReducerName,
    number : state.PostReducerName
  };
};

const mapDispatchToProps = {
  showPosts,
  incrementNumber
};

// const mapDispatchToProps = dispatch => {
//   getPosts: dispatch(showPosts)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Post);
