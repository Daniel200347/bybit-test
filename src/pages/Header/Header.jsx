import HeaderAnchor from "../../components/HeaderAnchor/HeaderAnchor";
import Logotype from "../../components/Logotype/Logotype";
import classes from "./header.module.css"
import Wrapper from "../../components/wrapper/Wrapper";
import Button from "../../components/DetectButton/DetectButton";
import DetectButton from "../../components/DetectButton/DetectButton";

function Header() {

    return <div className={classes.color}>
        <div className={classes.headerWrapper}>
            <div className={classes.left}>
                <Logotype/>
                <HeaderAnchor/>
            </div>
            <DetectButton btnText="Download" buttonSize={classes.sizeButton}/>
        </div>
    </div>

}

export default Header