import classes from "./Offer.module.css"
import Wrapper from "../../components/wrapper/Wrapper";
import DetectButton from "../../components/DetectButton/DetectButton";

function Offer() {
    return <div className={classes.offer}>
        <Wrapper className={classes.Container}>
            <div className={classes.wrapper}>
                <div className={classes.textWrapper}><h2 className={classes.title}>Download Now and start reaping the
                    rewards!</h2>
                    <p className={classes.description}>Experience the productivity boost that thousands of Traders have
                        already enjoyed</p></div>
            </div>
            <DetectButton className={classes.button}  btnText="Download"/>
        </Wrapper>
    </div>
}

export default Offer