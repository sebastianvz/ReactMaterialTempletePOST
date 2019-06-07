import { ADD_POST } from "./actionsTypes";
import { SHOW_POST } from "./actionsTypes";
import { INCREMENTPOST } from "./actionsTypes";

//Array donde voy almacer todos los post que llegan del API.
const ArrayPostsReducer = []
const number =0;

const reducerPosts = (state = ArrayPostsReducer, action) => {
  debugger;
  switch (action.type) {
    case ADD_POST: {
      state.ArrayPostsReducer.push(action.payload);
      return {
        state
      };
    }
    case SHOW_POST: {
      // return action.payload.posts
      state.ArrayPostsReducer =action.payload.posts;
      return {
        ...state,
        ArrayPostsReducer
      };
    }
    case INCREMENTPOST: {
      state.number = action.payload.number + 1;
      return action.payload.number
    }
    default: {
      return state;
    }
  }
};

export default reducerPosts;
