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
      <Router basename="#">
        <Wrapper>

          <NavTabs/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="#/home" element={<Home/>} />
            <Route path="#/about" element={<About/>} />
            <Route path="#/contact" element={<Contact/>} />
            <Route path="/#hoodies" element={<Hoodies/>} />
            <Route path="/#hats" element={<Hats/>} />
            <Route path="/#/shirts" element={<Shirts/>} />
            <Route path="#lilpeeps" element={<LilPeeps/>} />

          </Routes>
          <Footer />

        </Wrapper>
      </Router>

    </div>
  );
}

export default App;
