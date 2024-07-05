import classes from "./Footer.module.css"
import HeaderAnchor from "../../components/HeaderAnchor/HeaderAnchor";
import logo from "../../icons/logoFooter.svg";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import linkedin from "../../icons/linkedin.svg";
import xTwitter from "../../icons/xTwitter.svg";
import Wrapper from "../../components/wrapper/Wrapper";

function Footer() {
    return <div>
        <div className={classes.footer}>
            <Wrapper>
                <div className={classes.wrapper}>
                    <div className={classes.logoWrapper}>
                        <a href="#"><img className={classes.logo} src={logo}/></a>
                    </div>
                    <nav className={classes.Anchor}>
                        <ul className={classes.anchorWrapper}>
                            <li className={classes.text}>About</li>
                            <li className={classes.text}>Blog</li>
                            <li className={classes.text}>Announcements</li>
                            <li className={classes.text}>Careers</li>
                            <li className={classes.text}>Audit</li>
                            <li className={classes.text}>Help Center</li>
                        </ul>
                    </nav>
                    <div className={classes.social}>
                        <img className={classes.icon} src={facebook}/>
                        <img className={classes.icon} src={instagram}/>
                        <img className={classes.icon} src={linkedin}/>
                        <img className={classes.icon} src={xTwitter}/>
                    </div>
                </div>
            </Wrapper>
        </div>
        <nav className={classes.container}>
            <ul className={classes.confidentialityWrapper}>
                <li className={classes.confidentiality}>© 2018-2024 Bybit.com. All rights reserved.</li>
                <li className={classes.description}>Terms of Service</li>
                <li className={classes.description}>Privacy Terms</li>
            </ul>
        </nav>
    </div>
}

export default Footer