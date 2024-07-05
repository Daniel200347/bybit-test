import Wrapper from "../../components/wrapper/Wrapper";
import classes from "./RewardsHub.module.css"
import CardSlider from "../../components/CardSlider/CardSlider";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import PersonalTask from "../../components/PersonalTask/PersonalTask";

function RewardsHub() {
    return <div className={classes.color}>
        <Wrapper className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.textWrapper}>
                    <h1 className={classes.title}>Introducing the Rewards Hub for Bybit Desktop</h1>
                    <p className={classes.description}>Celebrate the release of Bybit Desktop Application with us and
                        get
                        your reward. Complete your personal tasks to reach the biggest bonus</p>
                </div>
                <section className={classes.stepRewards}>
                    <div className={classes.visible}><ProgressBar/></div>
                    <CardSlider/></section>
            </div>
            <PersonalTask/>
        </Wrapper>
    </div>
}

export default RewardsHub
