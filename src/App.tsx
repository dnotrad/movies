import Header from './components/header/Header';
import Search from './components/search/Search';
import Saved from './components/saved/Saved';
import Trends from './components/trends/Trends';
import About from './components/about/About';
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/saved" component={Saved} />
          <Route path="/trends" component={Trends} />
          <Route path="/about/:filmId" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
