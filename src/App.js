import logo from './logo.svg';
import './App.css';
import './Components/Navbar.css';
import './Components/About.js'
import Navbar from './Components/Navbar.js';
import About from './Components/About.js';


const App = () => {
  return (
    <div>
      <Navbar />
      <About />
    </div>
  )
}

export default App;
