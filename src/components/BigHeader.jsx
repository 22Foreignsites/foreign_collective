import{Link} from "react-router-dom";
import "./../css/BigHeader.css";

const BigHeader = ({ image, title, subtitle, children, position = 'center', isVideo = false, showOverlay = true, imageFit = 'cover' }) => {
    const isMp4 = isVideo || (typeof image === 'string' && image.toLowerCase().endsWith('.mp4'));
    // Use background image only when not rendering a contained <img>
    const useBackground = !isMp4 && image && imageFit !== 'contain';
    const style = useBackground ? { backgroundImage: `url(${image})`, backgroundPosition: position, backgroundSize: imageFit, backgroundRepeat: 'no-repeat' } : {};

    return (
        <header className="big-header" style={style} role="banner" aria-label={title || 'Hero'}>
            {isMp4 && image && (
                <video className="big-header__video" src={image} autoPlay muted loop playsInline aria-hidden="true" />
            )}
            {/* if imageFit is 'contain' render an <img> so the browser scales it without tiling */}
            {!isMp4 && image && imageFit === 'contain' && (
                <img className="big-header__img" src={image} alt="" aria-hidden="true" />
            )}

            {showOverlay && (
                <div className="big-header__overlay">
                    {title && <h1 className="big-header__title">{title}</h1>}
                    {subtitle && <p className="big-header__subtitle">{subtitle}</p>}
                    {children}
                </div>
            )}
        </header>
    );
};

export default BigHeader;