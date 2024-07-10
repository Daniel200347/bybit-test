import classes from "./Footer.module.css"
import HeaderAnchor from "../../components/HeaderAnchor/HeaderAnchor";
import logo from "../../icons/logoFooter.svg";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import linkedin from "../../icons/linkedin.svg";
import xTwitter from "../../icons/xTwitter.svg";
import Wrapper from "../../components/wrapper/Wrapper";
import classNames from "classnames";

function Footer() {
    return <>
        <div>
            <div className={classNames(classes.footerDesktop, classes.footer)}>
                <Wrapper>
                    <div className={classes.wrapper}>
                        <div className={classes.logoWrapper}>
                            <a href="#"><img className={classes.logo} src={logo}/></a>
                        </div>
                        <nav className={classes.Anchor}>
                            <ul className={classes.anchorWrapper}>
                                <a href="https://www.bybit.com/en/promo/global/aboutus/" target="_blank"
                                   rel="noopener noreferrer">
                                    <li className={classes.text}>About</li>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://learn.bybit.com/">
                                    <li className={classes.text}>Blog</li>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://announcements.bybit.com/en/">
                                    <li className={classes.text}>Announcements</li>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.bybit.com/en/promo/global/careers/">
                                    <li className={classes.text}>Careers</li>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.bybit.com/app/user/proof-of-reserve">
                                    <li className={classes.text}>Audit</li>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.bybit.com/en/help-center/?language=en">
                                    <li className={classes.text}>Help Center</li>
                                </a>
                            </ul>
                        </nav>
                        <div className={classes.social}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Bybit"><img
                                className={classes.icon} src={facebook}/></a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.instagram.com/bybit_official/"><img className={classes.icon}
                                                                                     src={instagram}/></a>
                            <a href="https://twitter.com/Bybit_Official" target="_blank" rel="noopener noreferrer"><img
                                className={classes.icon}
                                src={xTwitter}/></a>
                            <a href="https://www.linkedin.com/company/bybitexchange/
" target="_blank" rel="noopener noreferrer"><img className={classes.icon} src={linkedin}/></a>

                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>


        <div>
            <div className={classNames(classes.footerMobile, classes.footer)}>
                <Wrapper>
                    <div className={classes.wrapper}>
                        <div className={classes.section}>
                            <div className={classes.logoWrapper}>
                                <a href="#"><img className={classes.logo} src={logo}/></a>
                            </div>
                            <nav className={classes.Anchor}>
                                <ul className={classes.anchorWrapper}>
                                    <a href="https://www.bybit.com/en/promo/global/aboutus/" target="_blank"
                                       rel="noopener noreferrer">
                                        <li className={classes.text}>About</li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://learn.bybit.com/">
                                        <li className={classes.text}>Blog</li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://announcements.bybit.com/en/">
                                        <li className={classes.text}>Announcements</li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://www.bybit.com/en/promo/global/careers/">
                                        <li className={classes.text}>Careers</li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://www.bybit.com/app/user/proof-of-reserve">
                                        <li className={classes.text}>Audit</li>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href="https://www.bybit.com/en/help-center/?language=en">
                                        <li className={classes.text}>Help Center</li>
                                    </a>
                                </ul>
                            </nav>
                        </div>
                        <div className={classes.social}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Bybit"><img
                                className={classes.icon} src={facebook}/></a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.instagram.com/bybit_official/"><img className={classes.icon}
                                                                                     src={instagram}/></a>
                            <a href="https://twitter.com/Bybit_Official" target="_blank" rel="noopener noreferrer"><img
                                className={classes.icon}
                                src={xTwitter}/></a>
                            <a href="https://www.linkedin.com/company/bybitexchange/
" target="_blank" rel="noopener noreferrer"><img className={classes.icon} src={linkedin}/></a>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <nav className={classes.container}>
                <Wrapper>
                    <ul className={classes.confidentialityWrapper}>
                        <li className={classes.confidentiality}>© 2018-2024 Bybit.com. All rights reserved.</li>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://www.bybit.com/app/terms-service/information">
                            <li className={classes.description}>Terms of Service</li>
                        </a>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://www.bybit.com/app/terms-service/privacyPolicy">
                            <li className={classes.description}>Privacy Terms</li>
                        </a>
                    </ul>
                </Wrapper>

            </nav>
        </div>
    </>
}

export default Footer