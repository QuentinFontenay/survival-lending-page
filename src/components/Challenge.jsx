import react from "react"
import paysage from '../images/paysage.svg';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import "./ChallengeStyles.css";
import article1 from '../images/article1.svg';
import article2 from '../images/article2.svg';
import article3 from '../images/article3.svg';
import close from '../images/close.svg';
import shoes from '../images/shoes.svg';

const Challenge = () => {
    return (
        <>
            <section>
                <article className="forecast">
                    <h2 className="title-challenge">Popular challenges</h2>
                    <article className="day-forecast">
                        <img src={article1} />
                        <div>
                            <h1>KEY SKILLS</h1>
                            <h2>Friction-Based Fire Making</h2>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                            <div className="close-article">
                                <img src={close} />
                                <span>FIND OUT MORE</span>
                            </div>
                        </div>
                    </article>
                    <article className="day-forecast">
                        <img src={article2} />
                        <div>
                            <h1>KEY SKILLS</h1>
                            <h2>Make your own shelter</h2>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                            <div className="close-article">
                                <img src={close} />
                                <span>FIND OUT MORE</span>
                            </div>
                        </div>
                    </article>
                    <article className="day-forecast">
                        <img src={article3} />
                        <div>
                            <h1>KEY SKILLS</h1>
                            <h2>Prepare a meal in the forest</h2>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.</p>
                            <div className="close-article">
                                <img src={close} />
                                <span>FIND OUT MORE</span>
                            </div>
                        </div>
                    </article>
                </article>
                <div className="part-shoes">
                    <img src={shoes} />
                    <span className="title-shoes">Mission</span>
                    <span className="description-shoes">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor.</span>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
            </section>
        </>
    )
}

export default Challenge