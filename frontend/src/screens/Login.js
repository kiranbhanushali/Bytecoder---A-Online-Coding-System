import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchSubmission } from '../actions/fetchSubmission'
import { clearAuthError } from '../actions/generic'
import { loginF } from '../actions/loginAction'

import './log.css'
import './theme.css'
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function Login() {
    let history = useHistory()
    const dispatch = useDispatch()
    const classes = useStyles()
    const [user, setUser] = useState({ username: '', password: '' })
    const handleInputChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const auth = useSelector((state) => state.auth)
    const handleSubmit = async (event) => {
        event.preventDefault()
        await loginF(dispatch, user)
        console.log('handleSubmit', auth)
    }
    if (auth.isLoggedIn) {
        history.push('/');
    }
    const error_message = auth?.error?.login

    return (
        <div className="full-page">
            <div className="mycontainer">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className="logst" >
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                    </Typography>
                        <div>
                            {error_message && (
                                <div class="alert alert-danger" role="alert">
                                    {error_message}
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => dispatch(clearAuthError())}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                onChange={handleInputChange}
                                value={user.username}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handleInputChange}
                                value={user.password}
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                        </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <login />
                    </Box>
                </Container>
            </div>
        </div>
    )
}
