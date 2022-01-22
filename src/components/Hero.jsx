import "./HeroStyles.css";
import react from "react"
import paysage from '../images/paysage.svg';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const Hero = () => {
    return (
        <>
            <section>
                <div className="header-text">
                    <div className="social-icon-part">
                        <h2 className="sub-title">Find out if you can</h2>
                        <div className="social-icon-svg">
                            <FaYoutube size="1.5rem"></FaYoutube>
                            <FaFacebook size="1.5rem"></FaFacebook>
                            <FaTwitter size="1.5rem"></FaTwitter>
                        </div>
                    </div>
                    <div className="part-survive">
                        <h1 className="title-part">SU RVI VE</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor.</p>
                    </div>
                </div>
                <div className="part-paysage">
                    <img className="paysage-carrousel" src={paysage}></img>
                    <div>
                        <button className="previous-picture">
                            <BsArrowLeft size="1.7rem"></BsArrowLeft>
                        </button>
                        <button className="next-picture">
                            <BsArrowRight size="1.7rem"></BsArrowRight>
                        </button>
                    </div>
                </div>
                <div className="dot-carrousel">
                    <span className="dot-select">01</span>
                    <div className="border-dot"></div>
                    <span className="dot-noselect">02</span>
                    <span className="dot-noselect">03</span>
                </div>
            </section>
        </>
    )
}

export default Hero