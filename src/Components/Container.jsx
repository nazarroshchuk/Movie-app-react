import React from "react";
import classes from './Container.module.css';

export const Container = ({ children }) => {
    return (
        <div className={classes.container}>{children}</div>
    )
}
