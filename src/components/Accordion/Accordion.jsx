import React, {useState, useRef, useEffect} from 'react';
import classNames from 'classnames';
import classes from './Accordion.module.css';
import plus from "../../icons/plus.svg"
import minus from "../../icons/minus.svg"

const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(contentRef.current.scrollHeight);
        } else {
            setMaxHeight(0);
        }
    }, [isOpen]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames(classes.accordion, {[classes.accordionOpen]: isOpen})}>
            <div className={classes.accordionHeader} onClick={toggleAccordion}>
                <h2 className={classes.accordionTitle}>{title}</h2>
                <img className={classes.icon} src={isOpen ? minus : plus} alt="123"/>
            </div>
            <div
                className={classNames(classes.accordionContent, {[classes.open]: isOpen, [classes.closed]: !isOpen})}
                ref={contentRef}
            >
                <div className={classes.accordionTextWrapper}>
                    <div className={classes.accordionText}>
                        <p className={classes.description}>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
