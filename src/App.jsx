import './App.css';
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import Aboutme from './components/AboutMe'
import Portofolio from './components/Portofolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Home id='home'/>
      <Aboutme id='about-me'/>
      <Portofolio id='porto'/>
      <Contact id='contact'/>
      <footer></footer>
    </div>
  );
}

export default App;
