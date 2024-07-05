import classes from "./CardSlide.module.css";

function CardSlide({title, description, bonus}) {
    return (
        <article className={classes.card}>
            <div className={classes.wrapper}>
                <header className={classes.textWrapper}>
                    <h4 className={classes.title}>{title}</h4>
                    <p className={classes.description}>{description}</p>
                </header>
                <div>
                    <footer className={classes.bonus}>{bonus}</footer>
                </div>
            </div>
        </article>
    );
}

export default CardSlide;
