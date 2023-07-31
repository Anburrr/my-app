import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Contact from './Pages/contactPage/Contact';
import Resume from './Pages/Resume/Resume';
import Experience from './components/experience/Experience';


function App() {
  return (
    <>
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}  /> 
          <Route path='/projects' element ={<Experience />}/>
          <Route path="/resume" element={<Resume/>} /> 
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;