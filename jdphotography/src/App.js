// import logo from './logo.svg';
import './App.css';
// import Wrapper from './components/Wrapper/Wrapper';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
// import About from './components/pages/About/About';s
// import Contact from './components/pages/Contact/Contact';
import NavTabs from './components/NavTabs/NavTabs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Router basename="/"> */}
        {/* <Wrapper> */}
          {/* <Switch>
            <NavTabs />
            <Route path="/" component={Home} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact } />
            <Route path="home" element={Home} />
          </Switch> */}

          <NavTabs />
          <Home/>
          <Footer />
        {/* </Wrapper> */}
      {/* </Router> */}

    </div>
  );
}

export default App;
