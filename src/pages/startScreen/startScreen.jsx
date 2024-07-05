import classes from "./startScreen.module.css"
import Wrapper from "../../components/wrapper/Wrapper";
import classNames from "classnames";
import DetectButton from "../../components/DetectButton/DetectButton";

function StartScreen() {
    return <div className={classes.color}>
        <Wrapper className={classes.wrapper}>
            <div className={classes.left}>
                <div className={classes.container}><h1 className={classes.title}>
                    Trade with Bybit{" "}
                    <span className={classNames(classes.colorTitle, classes.title)}>
                            Desktop for Rewards
                        </span>
                </h1>
                    <p className={classes.description}>
                        Download the Official Bybit Desktop App, complete your personal tasks and get up to 50% to your
                        deposit
                    </p></div>
                <DetectButton btnText="Download" className={classes.button}/>
            </div>
        </Wrapper>
    </div>
}

export default StartScreen;