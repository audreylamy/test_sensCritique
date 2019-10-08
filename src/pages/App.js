import React            from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListImg          from "../components/listImg"
import Dog              from "../components/dog"
import Cat              from "../components/cat"
import Bird             from "../components/bird"

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ListImg} />
        <Route path="/dog"component={Dog} />
        <Route path="/cat" component={Cat} />
        <Route path="/bird" component={Bird} />
      </div>
    </Router>
  );
}

export default App;
