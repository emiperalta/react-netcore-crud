import React, { useEffect } from 'react';
import CandidateForm from './CandidateForm';
import { connect } from 'react-redux';
import * as actions from '../actions/CandidateActions';
import { Grid, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = theme => ({
	root: {
		"& .MuiTableCell-head": {
			fontSize: "0.9rem"
		}	
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2)
	}
});

const Candidates = ({ classes, ...props }) => {
	useEffect(() => {
		props.getAllCandidates()
	}, []);

	return (
		<Paper className={classes.paper} elevation={3}>
			<Grid container >
				<Grid item xs={12} sm={12}>
					<CandidateForm />
				</Grid>
				<Grid item xs={12}>
					<TableContainer>
						<Table>
							<TableHead className={classes.root}>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Mobile</TableCell>
									<TableCell>Blood Group</TableCell>
									<TableCell>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									props.CandidateList.map((candidate) => {
										return (
											<TableRow key={candidate.id} hover>
												<TableCell>{candidate.fullName}</TableCell>
												<TableCell>{candidate.mobile}</TableCell>
												<TableCell>{candidate.bloodGroup}</TableCell>
												<TableCell>edit | delete</TableCell>
											</TableRow>
										)
									})
								}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Paper>
	);
};

const mapStateToProps = state => ({ CandidateList: state.CandidateReducer.list });

const mapActionToProps = { getAllCandidates: actions.getAll }

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Candidates));