import React from 'react';

const Footer = () =>{
    
    return(
        <section className="container-fluid mb4 footer" id="footer">
        <div className="footerContent">
            <h3>LET'S CREATE SOMETHING GREAT</h3>
            <br></br>
            <p>If you have an idea, let's put those ideas
                on real patform.</p>
                </div>
            
                
      <div className="row">
      
        <div className="col-md-6 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mailto:pimrohit33@gmail.com?subject=subject&message=message" method="POST">

                
                <div className="row">

                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" placeholder="Name"/>
                            <br></br>
                        </div>
                    </div>
                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" placeholder="email-id"/>
                            <br></br>
                        </div>
                    </div>
                    </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="subject"/>
                             <br></br>
                        </div>
                    </div>
                </div>
                 
                 <div className="row">
                 <div className="col-md-12">
                 <div className="md-form">
                 <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="message"></textarea>
                       <br></br>
                        </div>
                        </div>
                </div>
              </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onClick={()=>{document.getElementById('contact-form').submit();}}>Send</a>
            </div>
            <div className="status"></div>
        </div>

        </div>

                <div className="copyRight">
                    <p>	&copy; Rohit Pimpalkar. all right reseved.</p>
                </div>
                </section>
    );
}

export default Footer;