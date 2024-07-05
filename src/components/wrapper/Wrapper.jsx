import classes from "./Wrapper.module.css"
import classNames from 'classnames';

function Wrapper({children, className}) {
    return <div className={classNames(classes.wrapper, className)}>{children}</div>
}

export default Wrapper