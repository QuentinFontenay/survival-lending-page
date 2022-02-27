import "./FooterStyles.css";
import react from "react"
import footer from '../images/footer.svg';

const Footer = () => {
    return (
        <>
            <section>
                <div className="background-footer">
                    <img src={footer}></img>
                </div>
            </section>
        </>
    )
}

export default Footer