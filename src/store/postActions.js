import { ADD_POST } from "./actionsTypes";
import { SHOW_POST } from "./actionsTypes";
import { INCREMENTPOST } from "./actionsTypes";
import axios from "axios";

export function addPost(payload) {
  return { type: ADD_POST, payload };
}

export const incrementNumber = ()=>
{
  let algo = 1;
  return {
    type: INCREMENTPOST,
    payload: {
      number:algo
    },
  }
}


export const testPost = (data) => {
  return {
    type: SHOW_POST,
    payload: {
      posts:data
    },
  }

}

export const showPosts = () => (dispatch) => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      let data = res.data;
      console.log(res.data);
      dispatch(testPost(data))
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
