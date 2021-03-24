import React from 'react';
import '../../index.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4}
];

export default function News() {
  return (
    <>
      <div className="App">



      <Carousel breakPoints={breakPoints}>

        <Item className = "backgroundImage backgroundColor">
         <p>2021-03-23</p>
          <h3>"Nu kör jag – jag har inget att förlora!"</h3>
          <h5>"Eja går sista terminen på utbildningen Byggproduktionsledare.."</h5>
         <a className ="button" target='_blank' href={'https://kyh.se/inspiration/nu-kor-jag-jag-har-inget-att-forlora/'}>Intervjuer</a>
        </Item>
        
        <Item className = "backgroundImage">
        <p>2021-03-15</p>
        <h3>Utbildningsledare med IT-kompetens sökes i Malmö</h3>
        <h5>Vi söker en Vikarierande Utbildningsledare på 100% för läsåret 2021-2022.</h5>
         <a className ="button" target='_blank' href={'https://kyh.se/inspiration/utbildningsledare-med-it-kompetens-sokes-i-malmo/'}>Information</a>
        </Item>

        <Item className = "backgroundImage">
        <p>2021-03-09</p>
          <h3>"Jag vill vara ute på plats med platsledningen.."</h3>
          <h5>"Cecilia är 33 år med familj och hus. Innan hon sökte till KYHs utbildning.."</h5>
         <a className ="button" target='_blank' href={'https://kyh.se/inspiration/jag-vill-vara-ute-pa-plats-med-platsledningen-och-sta-i-betongen/'}>Intervjuer</a>
        </Item>
        
        <Item className = "backgroundImage">
        <p>2021-03-03</p>
        <h3>"Det är intressant att kunna göra något så här mitt i livet"</h3>
        <h5>Patrik är 57 år och går på sin sista termin på utbildningen Energispecialist byggnader.</h5>
         <a className ="button" target='_blank' href={'https://kyh.se/inspiration/det-ar-intressant-att-kunna-gora-nagot-sa-har-mitt-i-livet/'}>Intervjuer</a>
        </Item>

        <Item className = "backgroundImage">
        <p>2021-02-26</p>
        
        <h3>"Utbildningsledare med IT-kompetens sökes i Malmö"</h3>
        <h5>Vi söker en karriär- och studiesamordnare på 100% till KYH i Malmö.</h5>
         <a  className ="button" target='_blank' href={'https://kyh.se/inspiration/karriar-och-studiesamordnare-i-malmo-sokes/'}>Information</a>

        </Item>

        
      </Carousel>



    </div>

    

    </>
  );


  
}
