import{Link} from "react-router-dom";
import "./../css/BigHeader.css";

const BigHeader = ({ image, title, subtitle, children, position = 'center' }) => {
    const style = image ? { backgroundImage: `url(${image})`, backgroundPosition: position } : {};

    return (
        <header className="big-header" style={style} role="banner" aria-label={title || 'Hero'}>
            <div className="big-header__overlay">
                {title && <h1 className="big-header__title">{title}</h1>}
                {subtitle && <p className="big-header__subtitle">{subtitle}</p>}
                {children}
            </div>
        </header>
    );
};

export default BigHeader;