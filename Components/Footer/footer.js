import React from 'react'
import './footer.css'

class Footer extends React.Component
{
    render()
    {
        return (
            < footer className="page-footer font-small blue" >
                    <div >
                        <div className="row" style={{backgroundColor:"#100201",height:"200px"}}>
                            <div className="col-md-2 col-xs-0"/>
                            <div className="col-md-2 col-xs-2 " style={{width:"80px",marginLeft:"10px"}}>
                            <br/>
                        <h5 style={{fontFamily:"Sofia",color:"#878787"}}>ABOUT</h5>
                          <br/>
                       <div className="navlink">About Us</div>
                        
                       <div className="navlink">Contact Us</div>
                       <div className="navlink">Services</div>
                            </div>

          <div className="col-md-2 col-xs-2" style={{width:"80px",margiLeft:"10px"}}>
              <br/>
              <h5 style={{color:"#878787",fontFamily:"Sofia"}}>Social</h5>
              <br/>
              <div className="navlink" >Mindtree</div>
              </div>
          <div className="col-md-2 col-xs-2" style={{width:"100px"}}>
            
                       <h5 style={{color:"#878787",marginTop:"24px",fontFamily:"Sofia"}}>ADDRESS</h5>
                       <div style={{marginTop:"34px"}}>
                       <p style={{color:"white",fontSize:"15px",fontFamily:"Sofia"}}>Plot No.1, Chandrasekharpur, Bhubaneswar, Odisha 751024</p>
                       </div>

              </div>
        
            </div>

          </div>
         


  </footer>
            
        )
    }
}

export default Footer;