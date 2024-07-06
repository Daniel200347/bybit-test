import classes from "./HeaderAnchor.module.css"

function HeaderAnchor() {
    return <nav>
        <ul className={classes.titleWrapper}>
            <div className={classes.line}></div>
            <li className={classes.li}><a className={classes.link} href="#rewards-hub"><span
                className={classes.title}>Rewards</span></a></li>
            <li className={classes.li}><a className={classes.link} href="#rewards-hub"><span
                className={classes.title}>Task</span></a>
            </li>
            <li className={classes.li}><a className={classes.link} href="#bonus"><span
                className={classes.title}>Bonus</span></a></li>
            <li className={classes.li}><a className={classes.link} href="#faq"><span
                className={classes.title}>FAQ</span></a></li>
        </ul>
    </nav>
}


export default HeaderAnchor