import { ADD_POST } from "./actionsTypes";
import { SHOW_POST } from "./actionsTypes";

const posts = []

const reducerPosts = (state = posts, action) => {
  switch (action.type) {
    case ADD_POST: {
      state.posts.push(action.payload);
      return {
        state
      };
    }
    case SHOW_POST: {
      return action.payload.posts
    }
    default: {
      return state;
    }
  }
};

export default reducerPosts;
