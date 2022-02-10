import "./SurvivalModeStyles.css";
import react from "react"
import paysage from '../images/paysage3.svg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import close from '../images/close.svg';

const SurvivalMode = () => {
    return (
        <>
            <section>
                <div className="part-survival-mode">
                    <span className="title-survival-mode">ADVICE</span>
                    <div className="part-picture-survival-mode">
                        <div className="dot-survival-mode">
                            <span className="dot-select">01</span>
                            <div className="border-dot"></div>
                            <span className="dot-noselect">02</span>
                            <span className="dot-noselect">03</span>
                        </div>
                        <div className="button-survival-mode">
                            <button>
                                <BsArrowLeft size="1.7rem"></BsArrowLeft>
                            </button>
                        </div>
                        <div className="text-survival-mode">
                            <span>SURVIVAL MODE</span>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                            <div>
                                <img src={close} />
                                <span>MORE</span>
                            </div>
                        </div>
                        <img className="paysage3-carrousel" src={paysage}></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SurvivalMode