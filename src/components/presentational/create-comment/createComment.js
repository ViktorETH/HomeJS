import React, {Component} from 'react';
import { createComment } from '../../../api/comment';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import green from '@material-ui/core/colors/green';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/CheckCircle';
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent/SnackbarContent";
import {TextField} from "@material-ui/core";

const variantIcon = {
	success: CheckCircleIcon,
	error: ErrorIcon,
};

const styles = theme => ({
	button: {
		margin: '2% 0'
	},
	success: {
		marginTop: '1%',
		backgroundColor: green[600],
	},
	error: {
		backgroundColor: theme.palette.error.dark,
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing.unit,
	},
	form: {
		marginLeft: '5%',
		width: '60%'
	}
});

const MySnackbarContent = (props) => {
	const { classes, className, message, onClose, variant, ...other } = props;
	const Icon = variantIcon[variant];

	return (
		<SnackbarContent
			className={classNames(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
					{message}
        </span>
			}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="inherit"
					className={classes.close}
					onClick={onClose}>
					<CloseIcon className={classes.icon} />
				</IconButton>,
			]}
			{...other}
		/>
	);
};

const MySnackbarContentWrapper = withStyles(styles)(MySnackbarContent);

class CreateComment extends Component {
	state = {
		postId: '',
		body: '',
		date: new Date(),
		openPopup: false,
	};

	componentDidMount () {
		this.setState(state => {
			return state.postId = +this.props.idPost;
		});
	}

	handleChangeBody = (event) => {
		this.setState({body: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		createComment(this.state)
			.then(() => this.handleOpenPopup())
			.catch(err => console.log(err));
		this.setState({
			body: ''
		});
	};

	handleOpenPopup = () => {
		this.setState({ openPopup: true });
	};

	handleClosePopup = () => {
		this.setState({ openPopup: false });
	};

	render () {
		const { classes } = this.props;
		return (
			<form className={classes.form} onSubmit={this.handleSubmit}>
				<Snackbar
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					open={this.state.openPopup}
					autoHideDuration={2000}
					onClose={this.handleClosePopup}>
					<MySnackbarContentWrapper
						onClose={this.handleClosePopup}
						variant="success"
						message="Success"/>
				</Snackbar>
				<TextField
					id="post"
					label="Post"
					className={classes.textField}
					multiline={true}
					required={true}
					rows="5"
					value={this.state.body}
					fullWidth
					onChange={this.handleChangeBody}/>
				<br/>
				<Button
					variant="outlined"
					color="primary"
					type="submit"
					className={classes.button}
					onSubmit={this.handleSubmit}>Send</Button>
			</form>
		);
	}
}

export default withStyles(styles)(CreateComment);
