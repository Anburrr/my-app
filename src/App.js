import './App.scss';
import Navbar from './components/navbar/BiggerNav'
import Intro from './components/introPage/Intro'
import Discovery from './components/disvoceryPage/Discovery';
import AnimCursor from './components/cursor/AnimCursor';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className="App">
     <Navbar/>
     <Intro/>
     <Discovery/>
     <AnimCursor/>
     <Footer/>
    </div>
    </>
  );
}

export default App;