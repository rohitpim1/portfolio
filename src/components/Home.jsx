import React from 'react';
import man from '../images/roh.jpg';
const Home = () =>{
     
    
    return(
        <>
       <header className="container-fluid header" id="home">
               
          <div className="header_section">
            <h1>I'm Rohit Pimpalkar</h1>
             <p>I am a Full Stack Developer..i make your Web Life Eassy...</p>
              <div className="header_buttons">
               <a href="#portfolio" className="btn btn-outline">
                        My Portfolio
                </a>
                </div>
                    </div>
                       
                    <div className="home_img">
                        <img src={man} loading="lazy" alt="man"/>
                       </div>
            </header> 
        </>
    );
}

export default Home;