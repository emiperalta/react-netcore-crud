import React, { useEffect, useState } from 'react';
import CandidateForm from './CandidateForm';
import { connect } from 'react-redux';
import * as actions from '../actions/CandidateActions';
import { Grid, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, withStyles, ButtonGroup, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
	root: {
		"& .MuiTableCell-head": {
			fontSize: "0.95rem"
		}
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2)
	},
	paperList: {
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(2),
			padding: theme.spacing(2),
		}
	}
});

const Candidates = ({ classes, ...props }) => {
	useEffect(() => {
		props.getAllCandidates()
	}, []);

	const [currentId, setCurrentId] = useState(0);

	const deleteHandler = id => {
		if (id != 0)
			props.deleteCandidate(id);		
	}
 
	return (
		<div>
			<Paper className={classes.paper} elevation={3}>
				<p style={{textAlign:'center',fontStyle:'italic',fontWeight:'bolder',fontSize:24}}>Candidates for Donation</p>
			</Paper>
			<Paper className={classes.paper} elevation={3}>
				<Grid container >
					<Grid item xs={12}>
						<CandidateForm
							currentId={currentId}
							setCurrentId={setCurrentId}
						/>
					</Grid>
				</Grid>
			</Paper>
			<Paper className={classes.paperList} elevation={3}>
				<Grid item xs={12}>
					<TableContainer>
						<Table>
							<TableHead className={classes.root}>
								<TableRow>
									<TableCell style={{ textAlign: 'center' }}>Name</TableCell>
									<TableCell style={{ textAlign: 'center' }}>Mobile</TableCell>
									<TableCell style={{ textAlign: 'center' }}>Blood Group</TableCell>
									<TableCell style={{ textAlign: 'center' }}>Actions</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{
									props.CandidateList.map((candidate) => {
										return (
											<TableRow key={candidate.id} hover >
												<TableCell style={{ textAlign: 'center' }}>{candidate.fullName}</TableCell>
												<TableCell style={{ textAlign: 'center' }}>{candidate.mobile}</TableCell>
												<TableCell style={{ textAlign: 'center' }}>{candidate.bloodGroup}</TableCell>
												<TableCell style={{ textAlign: 'center' }}>
													<ButtonGroup variant="text">
														<Button>
															<EditIcon
																color="primary"
																onClick={ () => { setCurrentId(candidate.id) } }
															/>
														</Button>
														<Button>
															<DeleteIcon 
																color="secondary" 
																onClick={ () => { deleteHandler(candidate.id) } }
															/>
														</Button>
													</ButtonGroup>
												</TableCell>
											</TableRow>
										)
									})
								}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Paper>
		</div>
	);
};

const mapStateToProps = state => ({ CandidateList: state.CandidateReducer.list });

const mapActionToProps = { 
	getAllCandidates: actions.getAll,
	deleteCandidate: actions.Delete
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Candidates));