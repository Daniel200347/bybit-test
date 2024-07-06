import React, {useState} from "react";
import Logotype from "../../components/Logotype/Logotype";
import classes from "./header.module.css";
import menu from "../../icons/burgerMenu.svg"
import close from "../../icons/closeBurger.svg"
import DetectButton from "../../components/DetectButton/DetectButton";
import classNames from "classnames";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={classes.color}>
            <div className={classes.headerWrapper}>
                <div className={classes.left}>
                    <Logotype/>
                    <nav className={` ${menuOpen ? classes.isActive : ''}`}>
                        <ul className={` ${classes.titleWrapper} ${menuOpen ? classes.isActive : ''}`}>
                            <div className={classNames(classes.line, classes.isActive)}></div>
                            <li className={classes.li}>
                                <a className={classes.link} href="#rewards-hub">
                                    <span className={classes.title}>Rewards</span>
                                </a>
                            </li>
                            <li className={classes.li}>
                                <a className={classes.link} href="#rewards-hub">
                                    <span className={classes.title}>Task</span>
                                </a>
                            </li>
                            <li className={classes.li}>
                                <a className={classes.link} href="#bonus">
                                    <span className={classes.title}>Bonus</span>
                                </a>
                            </li>
                            <li className={classes.li}>
                                <a className={classes.link} href="#faq">
                                    <span className={classes.title}>FAQ</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.isActiveWrapper}><DetectButton btnText="Download"
                                                                       buttonSize={classes.sizeButton}/>
                    <img src={!menuOpen ? menu : close} className={classes.burgerButton} onClick={toggleMenu}></img>
                </div>
            </div>
        </div>
    );
}

export default Header;
