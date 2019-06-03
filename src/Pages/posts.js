import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PostCard from "../Components/PostCard";

const Post = () => {
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
          {[0, 1, 2,3,4,5,6,7,8,9,10].map(value => (
            <Grid item key={value}>
              <PostCard key={value}/>
            </Grid>
          ))}
        </Grid>
    </Grid>
  );
};

export default Post;
