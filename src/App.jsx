import {Routes, Route, Link } from 'react-router-dom';
import '../src/App.css';
import Home from './Pages/Home';
import Datascience from './Pages/DataScience';
import Cybersecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import Fullstack from './Pages/Fullstack';
import Header from './Components/Header';

function App() {
  

  return (
     <div className="App">
      <Header/>
      <nav className="navbar text-center navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/full-stack-development">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-science">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cyber-security">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">
                CAREER
              </Link>
            </li>
          </ul>
        
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/full-stack-development' element={<Fullstack />} />
        <Route path='/data-science' element={<Datascience />} />
        <Route path='/cyber-security' element={<Cybersecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;