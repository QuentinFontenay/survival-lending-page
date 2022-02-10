import "./CompleteChallengeStyles.css";
import react from "react"
import paysage2 from '../images/paysage2.svg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const CompleteChallenge = () => {
    return (
        <>
            <section>
                <div className="header-complete-challenge">
                    <div className="part-complete-challenge">
                        <span className="title-complete-challenge">COMPLETED CHALLENGES</span>
                        <h1 className="title-part">13</h1>
                        <div className="text-pourcent-survival">
                            <span>You have</span>
                            <span>78% chance</span>
                            <span>for survival</span>
                        </div>

                    </div>
                    <div className="part-result">
                        <span>YOUR RESULTS</span>
                    </div>
                </div>
                <div >
                    <img className="img-challenge-completed" src={paysage2}></img>
                </div>
            </section>
        </>
    )
}

export default CompleteChallenge