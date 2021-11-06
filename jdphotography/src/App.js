// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/RenderHome/RenderHome';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NavTabs from './components/NavTabs/NavTabs';
import Footer from './components/Footer/Footer';
import Hoodies from './components/pages/Hoodies/Hoodies';
import Hats from './components/pages/Hats/Hats';
import Shirts from './components/pages/Shirts/Shirts';
import LilPeeps from './components/pages/LilPeeps/LilPeeps';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Wrapper>

          <NavTabs />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/hoodies" component={Hoodies} />
            <Route exact path="/hats" component={Hats} />
            <Route exact path="/shirts" component={Shirts} />
            <Route exact path="/lilpeeps" component={LilPeeps} />

          </Switch>
          <Footer />

        </Wrapper>
      </Router>

    </div>
  );
}

export default App;
