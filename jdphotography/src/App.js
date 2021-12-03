// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
    <div className="background">
      <Router basename="/">
        <Wrapper>
          <NavTabs/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path="home" element={<Home/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="contact" element={<Contact/>} />
            <Route exact path="hoodies" element={<Hoodies/>} />
            <Route exact path="hats" element={<Hats/>} />
            <Route exact path="shirts" element={<Shirts/>} />
            <Route exact path="lilpeeps" element={<LilPeeps/>} />
          </Routes>
          <Footer />

        </Wrapper>
      </Router>
      </div>

    </div>
  );
}

export default App;
