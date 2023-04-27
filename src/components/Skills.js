import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider arrow.left arrow.right">
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="Javascript Icon"/>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Icon"/>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">       
                               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Icon"/>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>ReactJS</h5>
                            </div>
                            {/* <div className="item"> */}

            {/* <i class="devicon-html5-plain"></i> */}
          
                                {/* <img src={meter1} alt="Image" /> */}
                                {/* <h5>Web Development</h5>
                            </div> */}
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind Icon"/>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>TailwindCSS</h5>
                            </div>
                            {/* <div className="item">
            <i class="devicon-html5-plain"></i>
                                {/* <img src={meter1} alt="Image" /> */}
                                {/* <h5>Web Development</h5> */}
                            {/* </div> */} 
                            <div className="item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="webpack Icon"/>                    
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Webpack</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node Icon" />
                                {/* <img src={meter2} alt="Image" /> */}
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="ExpressJS Icon"/>
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="ReactJS Icon"/>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" alt="MongoDB"/>
                                {/* <img src={meter1} alt="Image" /> */}
                                <h5>MongoDB</h5>
                                </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" alt="Babel Icon" />         
                                {/* <img src={meter3} alt="Image" /> */}
                                <h5>Babel</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
