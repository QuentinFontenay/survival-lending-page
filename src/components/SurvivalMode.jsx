import "./HeroStyles.css";
import react from "react"
import paysage from '../images/paysage3.svg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const SurvivalMode = () => {
    return (
        <>
            <section>
                <h1 className="title-part">SU RVI VE</h1>
                <div className="part-picture-survival-mode">
                    <img className="paysage3-carrousel" src={paysage}></img>
                    <div>
                        <button className="previous-picture">
                            <BsArrowLeft size="1.7rem"></BsArrowLeft>
                        </button>
                        <button className="next-picture">
                            <BsArrowRight size="1.7rem"></BsArrowRight>
                        </button>
                    </div>
                    <div className="dot-carrousel">
                    <span className="dot-select">01</span>
                    <div className="border-dot"></div>
                    <span className="dot-noselect">03</span>
                </div>
                </div>
            </section>
        </>
    )
}

export default SurvivalMode