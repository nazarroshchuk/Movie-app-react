import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import  Pagination  from '@material-ui/lab/Pagination';
import './PaginationMenu.css';

interface PropsType {
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
    disabled: boolean;
    totalPages: number;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
                padding: "20px 0 40px 0",
            },
        },
        "ul": {justifyContent: 'center'},
    }),

);

export const PaginationMenu = ({ onChange, disabled, totalPages } : PropsType) => {
    const classes = useStyles();
    return (
          <div className={classes.root}>
              <Pagination classes={{ul: 'list'}} count={totalPages} color="secondary" disabled={disabled} onChange={onChange}/>
          </div>
    );
}
