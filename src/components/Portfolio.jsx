import React from 'react';
import data from './PortfolioCardData';
import PortfolioCard from './PortfolioCard';
const Portfolio =() =>{
    return(
        <>
        <section className="container portfolio bg-dark-gray" id="portfolio">
            <h3><span>P</span>ortfolio</h3>
            <div className="jumbotron content">
            <p style={{color:"black"}}>Below you can see some projects I've been working on lately.
             I divide each project into four follow-up areas: comprehensive 
             research,wireframing, design & development.This process allows 
             me to create great product with client goals in mind.</p>
            </div>
            <div className="row">
         <div className="col-10 mx-auto">
             <div className="row gy-4">
                 {
                     data.map((val,ind) => {
                         return <PortfolioCard key={ind} imgsrc={val.img} title={val.title} description={val.text} linkto={val.link}/>
                     })
            
                 }
             </div>
         </div>
     </div>
     
        </section>
        </>
    );
}

export default Portfolio;