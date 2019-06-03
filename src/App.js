import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/home";
import Posts from "./Pages/posts";
import PostDeatil from "./Pages/detail";
import NewPost from "./Pages/newpost";
import Tempalte from "./Pages/template";
import Notfound from "./Pages/noFound";

const App = () => {
  return (
    <BrowserRouter>
      <Tempalte>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/posts" component={Posts} exact />
          <Route path="/post/:id" component={PostDeatil} exact />
          <Route path="/newpost" component={NewPost} exact />
          <Route component={Notfound} />
        </Switch>
      </Tempalte>
    </BrowserRouter>
  );
};

export default App;
