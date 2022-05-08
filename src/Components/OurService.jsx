import OurServiceStyle from "../Styles/OurService.styles";
import Building from '../images/building.svg';
import Machine from '../images/machine.svg';
import Flag from '../images/flag.svg';

const CardService = ({cName ,type, title , content}) => (
  <>
    <div className={cName}>
      <img src={type} alt="" />
      <p>{title}</p>
      <span>{content}</span>
    </div>
  </>
);
const OurService = _ => (
  <OurServiceStyle id="os">
    <p>Our Services</p>
    <section>
      <CardService cName={'building'} type={Building} title={'Architectural Design'} content={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} />
      <CardService cName={'cw'} type={Machine} title={'Construction Work'} content={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} />
      <CardService cName={'fuf'} type={Flag} title={'Finish UnFinish'} content={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'} />
      
    </section>
  </OurServiceStyle>
);

export default OurService;