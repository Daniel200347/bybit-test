import classes from "./GiftSection.module.css";
import gift from "../../icons/gift.svg";
import DetectButton from "../DetectButton/DetectButton";
import Button from "../Button/Button";
import classNames from "classnames";

function Card({bonusPercent, bonusDescription, imgSrc, depositTitle, progress, isClaimed, progressText}) {
    return (
        <>
            <div className={classNames(classes.desctopCard, classes.desctopCardInActive)}>
                <div className={classes.bonus}>
                    <h3 className={classes.bonusPercent}>{bonusPercent}</h3>
                    <p className={classes.bonusDescription}>{bonusDescription}</p>
                </div>
                <img className={classes.img} src={imgSrc}/>
                <div className={classes.contentWrapper}>
                    <div className={classes.content}>
                        <div>
                            <h4 className={classes.contentTitle}>{depositTitle}</h4>
                            <div className={classes.inputWrapper}></div>
                        </div>
                        <div className={classes.lineWrapper}>
                            <div className={classes.line}>
                                <div className={classes.orangeLine} style={{width: `${progress}%`}}></div>
                                <div className={classes.grayLine}></div>
                            </div>
                            <p className={classes.progress}>{progressText}</p>
                        </div>
                    </div>
                    <Button forceActive={isClaimed} btnText="Claim" buttonSize={classes.buttonSize}/>
                </div>
            </div>


            <div className={classNames(classes.mobileCard, classes.mobileCardInActive)}>
                <div className={classes.bonusMobile}>
                    <div>
                        <h3 className={classes.bonusPercent}>{bonusPercent}</h3>
                        <p className={classes.bonusDescription}>{bonusDescription}</p>
                    </div>
                    <img src={imgSrc}/></div>
                <div className={classes.contentWrapper}>
                    <div className={classes.content}>
                        <div>
                            <h4 className={classes.contentTitle}>{depositTitle}</h4>
                            <div className={classes.inputWrapper}></div>
                        </div>
                        <div className={classes.lineWrapper}>
                            <div className={classes.lineMobile}>
                                <div className={classes.orangeLine} style={{width: `${progress}%`}}></div>
                                <div className={classes.grayLine}></div>
                            </div>
                            <p className={classes.progress}>{progressText}</p>
                        </div>
                    </div>
                </div>
                <Button className={classes.buttonMobile} forceActive={isClaimed} btnText="Claim" buttonSize={classes.buttonSize}/>
            </div>
        </>
    );
}

function GiftSection() {
    const cardData = [
        {
            bonusPercent: "4%",
            bonusDescription: "Bonus",
            imgSrc: gift,
            depositTitle: "Deposit ≥ 1000 USDT",
            progress: 63,
            isClaimed: false,
            progressText: "630 / 1000"
        },
        {
            bonusPercent: "2%",
            bonusDescription: "Bonus",
            imgSrc: gift,
            depositTitle: "Deposit ≥ 1000 USDT",
            progress: 100,
            isClaimed: true,
            progressText: "1000 / 1000"
        },
        {
            bonusPercent: "2%",
            bonusDescription: "Bonus",
            imgSrc: gift,
            depositTitle: "Trade 5000 USDT",
            progress: 25,
            isClaimed: false,
            progressText: "1258 / 5000"
        }
    ];

    return (
        <div className={classes.giftSection}>
            <h3 className={classes.title}>2 week</h3>
            <div className={classes.cardWrapper}>
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        bonusPercent={data.bonusPercent}
                        bonusDescription={data.bonusDescription}
                        imgSrc={data.imgSrc}
                        depositTitle={data.depositTitle}
                        progress={data.progress}
                        isClaimed={data.isClaimed}
                        progressText={data.progressText}
                    />
                ))}
            </div>
        </div>
    );
}

export default GiftSection;
