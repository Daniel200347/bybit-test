import React, {useState} from "react";
import Logotype from "../../components/Logotype/Logotype";
import classes from "./header.module.css";
import menu from "../../icons/burgerMenu.svg"
import close from "../../icons/closeBurger.svg"
import DetectButton from "../../components/DetectButton/DetectButton";
import classNames from "classnames";

function Header() {
    const [isOverflowHidden, setIsOverflowHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleOverflow = () => {
        setIsOverflowHidden(prevState => !prevState);
        document.body.style.overflow = isOverflowHidden ? 'visible' : 'hidden';
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleButton = () => {
        toggleMenu();
        toggleOverflow()
    }

    return (
        <div className={classes.color}>
            <div className={classes.headerWrapper}>
                <div className={classes.left}>
                    <Logotype/>
                    <nav className={` ${menuOpen ? classes.isActive : ''}`}>
                        <ul className={` ${classes.titleWrapper} ${menuOpen ? classes.isActive : ''}`}>
                            <div className={classNames(classes.line, classes.isActive)}></div>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link} href="#rewards">
                                    <span className={classes.title}>Rewards</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link} href="#task">
                                    <span className={classes.title}>Task</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link} href="#bonus">
                                    <span className={classes.title}>Bonus</span>
                                </a>
                            </li>
                            <li onClick={toggleButton} className={classes.li}>
                                <a className={classes.link} href="#faq">
                                    <span className={classes.title}>FAQ</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.isActiveWrapper}><DetectButton btnText="Download"
                                                                       buttonSize={classes.sizeButton}/>
                    <img src={!menuOpen ? menu : close} className={classes.burgerButton} onClick={toggleButton}></img>
                </div>
            </div>
        </div>
    );
}

export default Header;
