import "./CompleteChallengeStyles.css";
import react from "react"
import paysage2 from '../images/paysage2.svg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const CompleteChallenge = () => {
    return (
        <>
            <section>
                <div className="header-text">
                    <div className="part-survive">
                        <span>COMPLETED CHALLENGES</span>
                        <h1 className="title-part">13</h1>
                        <span>You have 78% chance for survival</span>
                    </div>
                    <div className="part-result">
                        <span>YOUR RESULTS</span>
                    </div>
                </div>
                <div >
                    <img className="paysage-carrousel" src={paysage2}></img>
                </div>
            </section>
        </>
    )
}

export default CompleteChallenge