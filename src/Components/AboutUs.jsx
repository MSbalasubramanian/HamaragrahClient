import AboutUsStyle from "../Styles/AboutUs.styles";
import Messy from '../images/messy.svg'

const Card = ({name}) => (
  <section>
    <div>
      <span>.</span>
      <p>{name}</p>
    </div>
  </section>
);

const AboutUs = () => (
  <AboutUsStyle  id="au">
    <img src={Messy} alt="" />
    <section>
      <p>About Us</p>
      <p>We Are Here To Construct A New World</p>
      <section>
        <Card name={'Architectural Design'} />
        <Card name={'Construction Works'} />
        <Card name={'Finish UnFinish'} />
      </section>
    </section>
  </AboutUsStyle>
);

export default AboutUs;