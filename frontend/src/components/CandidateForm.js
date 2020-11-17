/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/CandidateActions';
import { Grid, TextField, withStyles, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@material-ui/core';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            marginLeft: 0,
            minWidth: "100%"
        }
    },
    formControl: {
        margin: theme.spacing(1),
        marginLeft: 0,
        minWidth: "100%"
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

    useEffect(() => {
        if (props.currentId != 0) {
            setInputText({
                ...props.CandidateList.find(x => x.id == props.currentId)
            });

            setErrors({});
        }
    }, [props.currentId]);

    const inputTextHandler = e => {
        const { name, value } = e.target;
        const fieldValue = { [name]: value };

        setInputText({
            ...inputText,
            ...fieldValue
        })

        validate(fieldValue); //real time validation
    }

    const submitHandler = e => {
        e.preventDefault();

        if (validate()) {
            if (props.currentId == 0)
                props.createCandidate(inputText);
            else
                props.updateCandidate(props.currentId, inputText);
        }

        resetHandler();
    }

    const resetHandler = () => {
        setInputText({
            ...initialState
        });

        setErrors({});

        props.setCurrentId(0);
    }

    const validate = (fieldValues = inputText) => {
        let temp = {...errors};

        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? '' : 'This field is required.';
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile ? '' : 'This field is required.';
        if ('bloodGroup' in fieldValues)
            temp.bloodGroup = fieldValues.bloodGroup ? '' : 'This field is required.';
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? '' : 'Email is not valid';

        setErrors({ ...temp });

        if (fieldValues === inputText)
            return Object.values(temp).every(x => x === '');
    }

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={submitHandler}>
            <Grid container spacing={2}>
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
                        name="email"
                        label="Email"
                        variant="outlined"
                        value={inputText.email}
                        onChange={inputTextHandler}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />

                    <TextField
                        name="mobile"
                        label="Mobile"
                        variant="outlined"
                        value={inputText.mobile}
                        onChange={inputTextHandler}
                        {...(errors.mobile && { error: true, helperText: errors.mobile })}
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

                </Grid>
            </Grid>
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
        </form>
    );
};

const mapStateToProps = state => ({ CandidateList: state.CandidateReducer.list });

const mapActionToProps = {
    createCandidate: actions.create,
    updateCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CandidateForm));