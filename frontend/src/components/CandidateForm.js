import React, { useState } from 'react';
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 200
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialState = {
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    bloodGroup: '',
    address: '',
}

const CandidateForm = ({ classes, ...props }) => {
    const [inputText, setInputText] = useState(initialState);

    const inputTextHandler = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(inputText)
    }

    const resetHandler = e => {
        e.preventDefault();
        setInputText(initialState);
    }

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={submitHandler}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        label="Full Name"
                        variant="outlined"
                        value={inputText.fullName}
                        onChange={inputTextHandler}
                    />
                    <TextField
                        name="mobile"
                        label="Mobile"
                        variant="outlined"
                        value={inputText.mobile}
                        onChange={inputTextHandler}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={inputText.email}
                        onChange={inputTextHandler}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Blood Group</InputLabel>
                        <Select
                            name="bloodGroup"
                            value={inputText.bloodGroup}
                            onChange={inputTextHandler}
                        >
                            <MenuItem value="">Select Blood Group</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="0+">0+</MenuItem>
                            <MenuItem value="0-">0-</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        name="age"
                        label="Age"
                        variant="outlined"
                        value={inputText.age}
                        onChange={inputTextHandler}
                    />
                    <TextField
                        name="address"
                        label="Address"
                        variant="outlined"
                        value={inputText.address}
                        onChange={inputTextHandler}
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                            onClick={resetHandler}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
};

export default withStyles(styles)(CandidateForm);