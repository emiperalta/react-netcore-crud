import React, { useState, useEffect } from 'react';
import CandidateForm from './CandidateForm';
import { connect } from 'react-redux';
import * as actions from '../actions/CandidateActions';
import { Grid, Paper } from '@material-ui/core';

const Candidates = props => {
    useEffect(() => {
        props.getAllCandidates()
    }, []);

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <CandidateForm />
                </Grid>
                <Grid item xs={6}>
                    <div>List of candidates</div>
                </Grid>
            </Grid>
        </Paper>
    );
};

const mapStateToProps = state => ({ CandidateList: state.CandidateReducer.list });

const mapActionToProps = { getAllCandidates: actions.getAll }

export default connect(mapStateToProps, mapActionToProps)(Candidates);