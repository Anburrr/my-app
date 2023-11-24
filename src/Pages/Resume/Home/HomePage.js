import './HomePage.scss';
import Navbar from '../../../components/navbar/Navbar'
import Intro from '../../../components/introPage/Intro'
import Discovery from '../../../components/disvoceryPage/Discovery';
import AnimCursor from '../../../components/cursor/AnimCursor';
import Footer from '../../../components/footer/Footer';




function HomePage() {
  return (
    <>
    <div className="HomePage">
     <Navbar/>
     <Intro/>
     <Discovery/>
     <AnimCursor/>
     <Footer/>
    </div>
    </>
  );
}

export default HomePage;