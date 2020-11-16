import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/CandidateActions';

const Candidates = props => {
    useEffect(() => {
        props.getAllCandidates()
    }, []);

    return(
        <div>
            <h1>Candidates</h1>
        </div>
    );
};

const mapStateToProps = state => ({ CandidateList: state.CandidateReducer.list });

const mapActionToProps = { getAllCandidates: actions.getAll }

export default connect(mapStateToProps, mapActionToProps)(Candidates);