import React from "react";
import { Container } from "./Container";
import { ErrorData } from "../types/types";
import classes from './ErrorPage.module.css';

interface PropsType {
    error: ErrorData;
}

export const ErrorPage = ({ error }: PropsType) => {
    return (
        <Container>
            {error.message && <p className={classes.textMessage}>Ups, Error has occurred: {error.message}</p>}
        </Container>
    )
}
