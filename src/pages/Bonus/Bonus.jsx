import classes from "./Bonus.module.css"
import Wrapper from "../../components/wrapper/Wrapper";
import DetectButton from "../../components/DetectButton/DetectButton";
function Bonus() {
    return <div className={classes.bonus}>
<Wrapper className={classes.Container}>
    <div className={classes.wrapper}>
        <div><span className={classes.bage}>
            Additional Bonus
        </span></div>
        <div className={classes.textWrapper}><h2 className={classes.title}>0% Fees on All Transactions</h2>
            <p className={classes.description}>To make your Reward Period even more pleasant we provide you with 0% fees
                on all transactions</p></div>
    </div>
    <DetectButton className={classes.button} btnText="Download"/>
</Wrapper>
    </div>
}
export default Bonus