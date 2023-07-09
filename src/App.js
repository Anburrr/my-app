import './App.scss';
import Navbar from './components/navbar/BiggerNav'
import Intro from './components/introPage/Intro'
import Discovery from './components/disvoceryPage/Discovery';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Discovery/>
    </div>
  );
}

export default App;