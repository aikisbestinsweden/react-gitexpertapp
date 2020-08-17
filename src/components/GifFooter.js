import React from 'react'

const GifFooter = () => {
     return (
          <footer>
               <div className="copyright">
                    <p>© 2020 - Tomas Santana</p>
               </div>
               
               <div className="social">
                    <a href="mailto:lutosesa@gmail.com" className="support">Contact Us</a>
                    <a target="_blank" rel="noopener noreferrer" className="face" 
                         href="https://www.facebook.com/" >f</a>
                    <a target="_blank" rel="noopener noreferrer" className="tweet"  
                         href="https://twitter.com/">t</a>
                    <a target="_blank" rel="noopener noreferrer" className="linked" 
                         href="https://www.linkedin.com/">in</a>
               </div>
          </footer>
     )
}

export default GifFooter
