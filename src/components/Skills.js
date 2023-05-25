import clogo from "../assets/img/clogo.svg";
import bash from "../assets/img/bash.svg";
import bs from "../assets/img/bs.svg";
import cpp from "../assets/img/cpp.svg";
import css3 from "../assets/img/css3.svg";
import git from "../assets/img/git.svg";
import hdl from "../assets/img/hdl.svg";
import html5 from "../assets/img/html5.svg";
import js from "../assets/img/js.svg";
import jupyter from "../assets/img/jupyter.svg";
import latex from "../assets/img/latex.svg";
import python from "../assets/img/python.svg";
import react from "../assets/img/react.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { auto } from "@popperjs/core";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
                        <p>Navigating the coding realm, I've discovered the power of languages beyond words.<br></br> Venture below and you'll find a tapestry of skills I've woven through my coding journey:)</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={clogo} alt="Image" />
                                <h5>C Programming</h5>
                            </div>

                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++ Programming</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={bs} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={bash} alt="Image" />
                                <h5>Bash Scripting</h5>
                            </div>
                            <div className="item">
                                <img src={hdl} alt="Image" />
                                <h5>Verilog HDL</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git & GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={latex} alt="Image" />
                                <h5>Latex</h5>
                            </div>
                            <div className="item">
                                <img src={jupyter} alt="Image" />
                                <h5>Jupyter Notebook</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
