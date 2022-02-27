import "./CompleteChallengeStyles.css";
import react from "react"
import paysage2 from '../images/paysage2.svg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import close from '../images/close.svg';

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
                            <div>
                                <span>78%</span>
                                <span>chance</span>
                            </div>
                            <span>for survival</span>
                        </div>
                    </div>
                    <span className="part-result">YOUR RESULTS</span>
                </div>
                <div className="part-picture-completed-challenge">
                    <div className="text-completed-challenge">
                        <span>SHARE YOUR RESULTS ON SOCIAL MEDIA</span>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur diam nonumy tempor.
                        </p>
                        <div>
                            <img src={close} />
                            <span>SEE RESULTS FROM YOUR FRIENDS</span>
                        </div>
                    </div>
                    <img className="img-challenge-completed" src={paysage2}></img>
                </div>
            </section>
        </>
    )
}

export default CompleteChallenge