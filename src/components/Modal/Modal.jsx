import React, {useEffect, useRef} from "react";
import classNames from "classnames";
import classes from "./Modal.module.css";
import close from "../../icons/close.svg";


function Modal({
                   children,
                   className,
                   onClose,
                   modalActive,
                   setModalActive,
                   title,
                   closeStyle,
                   titleStyles,
               }) {
    const modalRef = useRef(null);

    const handleIconClick = (event) => {
        event.stopPropagation();
        onClose();
    };

    const handleModalClick = (event) => {
        if (event.target === modalRef.current) {
            setModalActive(!modalActive);
        }
    };

    useEffect(() => {
        if (modalActive) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [modalActive]);

    return (
        <div
            ref={modalRef}
            onClick={handleModalClick}
            className={classes.modalOverlay}
        >
            <div className={classNames(className, classes.modalContent)}>
                <div className={classNames(classes.container, titleStyles)}>
                    <h2 className={classes.title}>{title}</h2>
                    <img
                        onClick={handleIconClick}
                        className={classNames(classes.close, closeStyle)}
                        src={close}
                        alt=""
                    />
                </div>
                <div style={{overflow: "auto"}}>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
