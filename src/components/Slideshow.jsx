import "../css/Slideshow.css";
import {useState} from "react";

// const Slideshow = () => {
//     const[slideIndex, setSlideIndex] = useState(0);

//     const importAll = (resource) => {
//         return resource.keys().map(resource);
//     };

//     const slideForward = () => {
//           setSlideIndex(slideIndex < images.length-1 ? slideIndex+1:0); 
//     };

//     const slideBackward = () => {
//             setSlideIndex(slideIndex > 0 ? slideIndex-1 : images.length-1);
//     };

//     const images = importAll(
//         require.context("../images/Slideshow", false, /\.(png|jpe?g|svg|webp)$/)
//     );

//     return(
//         <section id="slideshow">
//             <img src={images[slideIndex]} />
//             <a className="arrow" id="right-arrow" href="#" onClick={slideForward}>&gt;</a>
//             <a className="arrow" id="left-arrow" href="#" onClick={slideBackward}>&lt;</a>
//         </section>
//     );
// }


const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const slideForward = (e) => {
        e && e.preventDefault();
        setSlideIndex(s => (s < images.length - 1 ? s + 1 : 0));
    };

    const slideBackward = (e) => {
        e && e.preventDefault();
        setSlideIndex(s => (s > 0 ? s - 1 : images.length - 1));
    };

    const images = importAll(
        require.context("../images/Slideshow", false, /\.(png|jpe?g|svg|webp)$/)
    );

    const current = images[slideIndex];

    return (
        <header className="big-header slideshow" style={{ backgroundImage: `url(${current})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <a className="arrow" id="left-arrow" href="#" onClick={slideBackward} aria-label="Previous slide">&lt;</a>
            <a className="arrow" id="right-arrow" href="#" onClick={slideForward} aria-label="Next slide">&gt;</a>
            <div className="big-header__overlay">
                <div className="big-header__title">Bringing People Together</div>
                <div className ="big-header__subtitle">Remind the world that our differences connect us, shape us, and make us stronger together.</div>
            </div>
        </header>
    );
};

export default Slideshow;