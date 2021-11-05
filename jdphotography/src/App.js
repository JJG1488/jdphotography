// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/RenderHome/RenderHome';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NavTabs from './components/NavTabs/NavTabs';
import Footer from './components/Footer/Footer';

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
            {/* <Route exact path="/portfolio" component={Portfolio} /> */}
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />

        </Wrapper>
      </Router>

    </div>
  );
}

export default App;
