import './HomePage.scss';
import Navbar from '../../components/navbar/BiggerNav'
import Intro from '../../components/introPage/Intro'
import Discovery from '../../components/disvoceryPage/Discovery';
import AnimCursor from '../../components/cursor/AnimCursor';
import Footer from '../../components/footer/Footer';
import LayeredImage from '../../assets/images/layered-peaks-haikei.png';



function HomePage() {
  return (
    <>
    <div className="HomePage" style={{backgroundImage: `url(${LayeredImage})`}}>
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