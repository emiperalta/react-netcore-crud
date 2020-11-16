import React, { useState } from 'react';
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@material-ui/core';

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
    const [errors, setErrors] = useState({});


    const inputTextHandler = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        if (validate()) {
            console.log('Success')
        } else {
            console.log('Error!')
        }
    }

    const resetHandler = e => {
        e.preventDefault();
        setInputText(initialState);
    }

    const validate = () => { 
        let temp = {};
        temp.fullName = inputText.fullName ? '' : 'This field is required.';
        temp.mobile = inputText.mobile ? '' : 'This field is required.';
        temp.bloodGroup = inputText.bloodGroup ? '' : 'This field is required.';
        temp.email = (/^$|.+@.+..+/).test(inputText.email) ? '' : 'Email is not valid';
        setErrors({ ...temp });

        return Object.values(temp).every(x => x === '');
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
                        {...(errors.fullName && { error: true, helperText: errors.fullName })}
                    />
                    <TextField
                        name="mobile"
                        label="Mobile"
                        variant="outlined"
                        value={inputText.mobile}
                        onChange={inputTextHandler}
                        {...(errors.mobile && { error: true, helperText: errors.mobile })}
                    />
                    <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={inputText.email}
                        onChange={inputTextHandler}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl 
                        variant="outlined" 
                        className={classes.formControl}
                        {...(errors.bloodGroup && { error: true })}
                    >
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
                        {{ error: true } && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
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