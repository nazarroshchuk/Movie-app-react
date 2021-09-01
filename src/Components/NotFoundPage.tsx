import React from "react";
import { Container } from "./Container";
import classes from './ErrorPage.module.css';

interface PropsType {
    defaultMessage: string;
}

export const NotFoundPage = ({ defaultMessage = '' }: PropsType) => {
    return (
        <Container>
            { <p className={classes.textMessage}>{defaultMessage}</p>}
        </Container>
    )
}
