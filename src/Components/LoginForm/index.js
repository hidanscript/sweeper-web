import React , { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router-dom';

import './index.css';

const useStyles = makeStyles(theme => ({
    marginButton: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
    marginText: {
        margin: theme.spacing(1),
    }
}));

function LoginForm() {

    const classes = useStyles();
    const [ isLogged , setLogged ] = useState(false);

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        if(username) {
            setLogged(true);
        }
    }, []);

    const handleSubmit = form => {
        const username = form.target.username.value;

        if(username.length < 22) {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('user_id', Math.floor(Math.random() * 10000));
        } else {
            alert("Username can not contain more than 21 characters");
        }
    }

    if(!isLogged) {
        return (
            <form onSubmit={ handleSubmit } className="login-form">
                <label className="label-title">Sweeper</label>
                <TextField maxlength="22" required name="username" id="outlined-basic" label="Username" variant="outlined" spellCheck="false" className={classes.marginText} />
                <Button type="submit" variant="contained" size="large" color="primary" className={classes.marginButton}>
                    Continue
                </Button>
            </form>
        );
    } else {
        return <Redirect to="/chat" />;
    }
}

export default LoginForm;
