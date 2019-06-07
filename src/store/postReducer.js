import { ADD_POST } from "./actionsTypes";
import { SHOW_POST } from "./actionsTypes";
import { INCREMENTPOST } from "./actionsTypes";

//Array donde voy almacer todos los post que llegan del API.
const initialStateReducerPost = {
  ArrayPostsReducer: [],
  number: 0
};

const reducerPosts = (state = initialStateReducerPost, action) => {
  switch (action.type) {
    case ADD_POST: {
      state.ArrayPostsReducer.push(action.payload);
      return {
        ...state
      };
    }
    case SHOW_POST: {
      const {ArrayPostsReducer} = state;
      const postArray = Object.keys(action.payload.posts).map(
        i => action.payload.posts[i]
      );
      return {
        ...state,
        ArrayPostsReducer: postArray
      };
    }
    case INCREMENTPOST: {
      const { number } = state;
      console.log(number);
      let newNumber = number + action.payload.number;
      return {
        ...state,
        number: newNumber
      };
    }
    default: {
      return state;
    }
  }
};

export default reducerPosts;
