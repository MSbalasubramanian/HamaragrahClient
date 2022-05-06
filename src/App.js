// Components
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import SideBarFloat from './Components/SideBarFloat';
import OurService from './Components/OurService';
import OurWorks from './Components/OurWorks';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// Styles
import Container from './Styles/Container.styles'


function App() {
  return (
    <Container>
      <Header  />
      <AboutUs/>
      <OurService  />
      <OurWorks />
      <Contact />
      <Footer />
      <SideBarFloat />
    </Container>
  );
}

export default App;
