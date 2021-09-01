import React from 'react';

import classes from './Loader.module.css';
import { Container } from "./Container";

export const  Loader = ({ isLoading = true, children }) => {
    if (isLoading) {
        return (
            <Container>
                <div className={classes.ldsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Container>
        )
    }

    return children;
}
