import classes from "./PersonalTask.module.css"
import DetectButton from "../DetectButton/DetectButton";
import {useState} from "react";
import Modal from "../Modal/Modal";
import GiftSection from "../GiftSection/GiftSection";

function PersonalTask() {
    const [active, setActive] = useState(false);
    const [modalFirst, setModalFirst] = useState(false);
    const [modalSecond, setModalSecond] = useState(false);

    function onOpenModalFirst() {
        setModalFirst(true);
        setActive(false);
    }

    function onCloseModalFirst() {
        setModalFirst(false);
    }

    function onOpenModalSecond() {
        setModalSecond(true);
        setActive(false);
    }

    function onCloseModalSecond() {
        setModalSecond(false);
    }

    return <div className={classes.personalTask}>
        <div style={{paddingBottom:24}}>
            <div className={classes.wrapper}>
                <div className={classes.textWrapper}><h3 className={classes.title}>Personal Tasks</h3>
                    <p className={classes.description}>Claim rewards by completing tasks</p>
                </div>
                <DetectButton btnText="Download" className={classes.button}/>
            </div>
            <div className={classes.info}>
                <div className={classes.infoCard}>
                    <h4 className={classes.infoTitle}>During the Rewards Period you will be offered with your personal
                        tasks. They will require you to
                        deposit funds, trade or buy the specific tokens. You will be rewarded for...</h4>
                    <p onClick={onOpenModalFirst} className={classes.link}>More info</p>
                </div>
                <div className={classes.infoCard}>
                    <h4 className={classes.infoTitle}>The complexity of your tasks will increase with the new weekly
                        tasks. The rewards for completing more difficult tasks will increase proportionally. F.e., the
                        reward for completing the first week task...</h4>
                    <p onClick={onOpenModalSecond} className={classes.link}>More info</p>
                </div>
            </div>
        </div>
       <GiftSection/>
        {modalFirst && (
            <Modal
                className={classes.modal}
                title={"More info"}
                modalActive={modalFirst}
                setModalActive={setModalFirst}
                onClose={onCloseModalFirst}
            >
                <h3 className={classes.modalFirst}>
                    <span>During the Rewards Period you will be offered with your personal tasks. They will require you to deposit funds, trade or buy the specific tokens.
</span>
                    <span>You will be rewarded for completing each task separately which means that you don’t need to complete all tasks to claim weekly reward.</span>
                    <span>Moreover, the tasks of the next week will be available for you despite the unfulfilled tasks of the curent one</span>
                </h3>
            </Modal>
        )}
        {modalSecond && (
            <Modal
                className={classes.modal}
                title={"More info"}
                modalActive={modalSecond}
                setModalActive={setModalSecond}
                onClose={onCloseModalSecond}
            >
                <h3 className={classes.modalFirst}>
                    <span>The complexity of your tasks will increase with the new weekly tasks. The rewards for completing more difficult tasks will increase proportionally.

</span>
                    <span>F.e., the reward for completing the first week task «Deposit $100» will give you 1% to the total reward while the third week task «Deposit $10000» will give 6%. After the end of the Reward Period your rewards for completed tasks will be pinned down to the total percentage.</span>
                    <span>Then, during 3 days you will be credited with USDT reward which equals your total assets in the moment of the end the Rewards Period multiplied by the total percentage.</span>
                </h3>
            </Modal>
        )}
    </div>
}

export default PersonalTask