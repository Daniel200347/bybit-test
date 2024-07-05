import React, {useState, useEffect, useRef} from 'react';
import arrowNext from '../../icons/arrowNext.svg';
import arrowPre from '../../icons/arrowPre.svg';
import classes from "./CardSlider.module.css";
import classNames from "classnames";
import CardSlide from "../CardSlide/CardSlide";

function CardSlider() {
    const data = [{
        title: "Start",
        description: "All you need is to download Bybit Desktop and make at least one transaction per week during the Rewards Period",
        bonus: "Get 3.5% bonus"
    }, {
        title: "1 Week ",
        description: "Complete the tasks of the first week to reach 7% reward. The required deposit for completing all tasks is ≥ 100 USDT",
        bonus: "Increase the bonus up to 7%"
    }, {
        title: "2 Week ",
        description: "Complete the tasks of the first week to reach 15% reward. The required deposit for completing all tasks is ≥ 1000 USDT",
        bonus: "Increase the bonus up to 15%"
    }, {
        title: "3 Week ",
        description: "Complete the tasks of the first week to reach 28% reward. The required deposit for completing all tasks is ≥ 10000 USDT",
        bonus: "Increase the bonus up to 28%"
    }, {
        title: "4 Week ",
        description: "Complete the tasks of the first week to reach 50% reward. The required deposit for completing all tasks is ≥ 50000 USDT",
        bonus: "Increase the bonus up to 50%"
    },];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRightButton, setShowRightButton] = useState(true);
    const [visibleSlides, setVisibleSlides] = useState(3);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (sliderRef.current) {
                const slideWidth = sliderRef.current.offsetWidth / 3;
                const visibleSlidesCount = Math.floor(sliderRef.current.offsetWidth / slideWidth);
                setVisibleSlides(visibleSlidesCount);
            }
        };

        window.addEventListener('resize', updateVisibleSlides);
        updateVisibleSlides();

        return () => {
            window.removeEventListener('resize', updateVisibleSlides);
        };
    }, []);

    const handleNext = () => {
        if (currentIndex < data.length - visibleSlides) {
            setCurrentIndex(currentIndex + 1.73);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1.73);
        }
    };

    const handleRightClick = () => {
        setShowRightButton(false);
    };

    const handleLeftClick = () => {
        setShowRightButton(true);
    };

    const clickRight = () => {
        handleRightClick();
        handleNext()
    }
    const clickLeft = () => {
        handleLeftClick();
        handlePrev()

    }

    return (
        <div className={classes.cardSlider} ref={sliderRef}>
            <button className={classNames(
                classes.arrowWrapper,
                classes.right,
                {
                    [classes.isActive]: showRightButton,
                    [classes.hide]: currentIndex >= data.length - visibleSlides
                }
            )}
                    onClick={clickLeft}>
                <img src={arrowPre} alt="Previous"/>
            </button>
            <div className={classes.pop}>
                {!showRightButton && <div className={classes.gradientleft}></div>}
                <div className={classes.cardSlideWrapper}
                     style={{transform: `translateX(-${currentIndex * (100 / visibleSlides + 14 / visibleSlides)}%)`}}>
                    {data.map((item, index) => (<CardSlide
                        key={index}
                        title={item.title}
                        description={item.description}
                        bonus={item.bonus}
                    />))}
                </div>
            </div>
            <button
                className={classNames(
                    classes.arrowWrapper,
                    classes.right,
                    {
                        [classes.isActive]: !showRightButton,
                        [classes.hide]: currentIndex >= data.length - visibleSlides
                    }
                )}
                onClick={clickRight}
            >
                <img src={arrowNext} alt="Next"/>
            </button>
            {showRightButton && <div className={classes.gradientright}></div>}

        </div>
    );
}

export default CardSlider;
