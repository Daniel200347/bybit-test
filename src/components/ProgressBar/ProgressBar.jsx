import classes from "./ProgressBar.module.css";

function ProgressBar() {
    return (
        <div className={classes.progressBar}>
            <div className={classes.wrapper}>
                <div className={classes.percentWrapper}>
                    <h4 className={`${classes.text} ${classes.firstText}`}>1 WEEK</h4>
                    <span className={classes.firstPercent}>3.5%</span>
                    <span className={`${classes.percent} ${classes.week1Percent}`}>6%</span>
                </div>
                <div className={classes.percentWrapper}>
                    <h4 className={classes.text}>2 WEEK</h4>
                    <span className={`${classes.percent} ${classes.week2Percent}`}>15%</span>
                </div>
                <div className={classes.percentWrapper}>
                    <h4 className={classes.text}>3 WEEK</h4>
                    <span className={`${classes.percent} ${classes.week3Percent}`}>28%</span>
                </div>
                <div className={classes.percentWrapper}>
                    <h4 className={classes.text}>4 WEEK</h4>
                    <span className={`${classes.percent} ${classes.week4Percent}`}>50%</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
