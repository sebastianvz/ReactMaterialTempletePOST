import { ADD_POST } from "./actionsTypes";
import { SHOW_POST } from "./actionsTypes";
import axios from "axios";

export function addPost(payload) {
  return { type: ADD_POST, payload };
}


export const testPost = (posts) => {
  debugger;
  return {
    type: SHOW_POST,
    payload: {
      posts
    },
  }

}

export const showPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      debugger;
      let posts = res.data;
      console.log(res.data);
      dispatch(testPost(posts))
    })
    .catch((err) => {

    })
}

// export const showPosts = () => dispatch => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//       debugger;
//       let posts = res.data;
//       console.log(res.data);
//       dispatch(testPost(posts))
//     })
//     .catch(function(error) {
//       debugger;
//       console.log(error);
//     });
// };
