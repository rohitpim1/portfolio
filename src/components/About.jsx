import React from 'react';

const About =() =>{
    
    
    return(
       <>
       <section className="container-fluid about" id="about">
       <h3><span>A</span>bout Me</h3>
           <div className="jumbotron content">
           <div>
               <p>
                  <span>"</span>I'm front-end developer with 2 years of professional experience. 
                  I'm interested in all kinds of visual comunication, but my major 
                  focus is on desiging web, mobile and tablet interfaces.I also have skills in other fields like branding,Icon design.
                  <span>"</span>
               </p>

           </div>

           <div className="skillSet">
           <table className="table-dark table-striped">
           <tr>
               <th colSpan="2">SkillSet</th>
           </tr>
  
  <tr>
    <th rowspan="6">FrontEnd Technology</th>
    <td>Html5</td>
  </tr>
  <tr>
    <td>Css,Scss</td>
  </tr>
  <tr>
      <td>Javascript</td>
  </tr>
  <tr>
      <td>Bootstrap</td>
  </tr>
  <tr>
      <td>
          Material-Ui
      </td>

  </tr>
  <tr>
      <td>React-js</td>
  </tr>
</table>

                   
           </div>
           </div>
       </section>
       
       </>
    );
}

export default About;