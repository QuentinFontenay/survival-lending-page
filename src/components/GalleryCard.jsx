import react from "react"
import "./GalleryCardStyles.css";
import cards1 from '../images/cards1.svg';
import cards2 from '../images/cards2.svg';

const GalleryCard = () => {
    return (
        <>
            <section>
                <article className="gallery">
                    <article className="day-forecast">
                        <img src={cards1} />
                    </article>
                    <article className="day-forecast">
                        <img src={cards2} />
                    </article>
                    <article className="day-forecast">
                        <img src={cards2} />
                    </article>
                </article>
            </section>
        </>
    )
}

export default GalleryCard