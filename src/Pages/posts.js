import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PostCard from "../Components/PostCard";
import { showPosts } from "../store/postActions";
import { connect } from 'react-redux'

class Post extends React.PureComponent {
  componentDidMount() {
    this.props.showPosts();
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
    posts: state.posts
  };
};

const mapDispatchToProps = {
  showPosts,
};

// const mapDispatchToProps = dispatch => {
//   getPosts: dispatch(showPosts)
// }

export default connect(mapStateToProps, mapDispatchToProps)(Post);
