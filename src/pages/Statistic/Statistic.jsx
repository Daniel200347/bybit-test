import classes from "./Statistic.module.css"
import Wrapper from "../../components/wrapper/Wrapper";

function Statistic() {
    return <div className={classes.statistic}>
        <Wrapper>
            <div className={classes.cardWrapper}>
                <div className={classes.card}>
                    <h4 className={classes.title}>34.4 B</h4>
                    <p className={classes.description}>24H Trading Volume (USD)</p>
                </div>
                <div className={classes.card}>
                    <h4 className={classes.title}>1000+</h4>
                    <p className={classes.description}>Cryptocurrencies Listed</p>
                </div>
                <div className={classes.card}>
                    <h4 className={classes.title}>27.7M</h4>
                    <p className={classes.description}>Registered Users</p>
                </div>
                <div className={classes.card}>
                    <h4 className={classes.title}>160</h4>
                    <p className={classes.description}>Supported Countries</p>
                </div>
            </div>
        </Wrapper>
    </div>
}

export default Statistic