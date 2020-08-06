import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import createBrowserHistory from '../history'

// ClientId = '875323632285-p14k16q5p0c2m28iln3cltb6v1djk44q.apps.googleusercontent.com'

const App = () => {
  return (
    <div className="ui container">
      <Router history={createBrowserHistory}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
