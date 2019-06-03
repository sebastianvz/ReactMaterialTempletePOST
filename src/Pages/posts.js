import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PostCard from "../Components/PostCard";
import { showPosts } from "../store/postActions";
import { connect } from 'react-redux'

class Post extends React.PureComponent {
  state = {
    posts: []
  };

  componentDidMount() {
    debugger;
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
        <br />
        <Grid container spacing={2} alignItems="flex-end">
          {/* {
            posts.map((post, idx) => (
            <Grid item key={idx}>
              <PostCard {...post} key={idx} />
            </Grid>
          ))
          } */}
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
