import React, {Component} from 'react';
import {createPost} from '../../../api/posts'
import PropTypes from 'prop-types';
import styled from "styled-components";
import {withStyles} from '@material-ui/core/styles';
import {TextField, Button, InputLabel, Select, MenuItem} from "@material-ui/core";
import {green} from '@material-ui/core/colors';
import FileBase64 from 'react-file-base64';

const TitlePost = styled.h2`
  font-size: 2.5em;
  margin: 1%;
  color: #FFF;
  text-align: center;
  text-shadow: 1px 1px 2px black
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const styles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: 700,
		margin: '2% auto',
		padding: 10,
		background: '#2A2B32',
		boxShadow: '1px 1px 10px 1px #3E3F42',
		borderRadius: 5
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 700,
		marginBottom: 5,
		color: '#FFF',
	},
	button: {
		fontSize: 12,
		width: 200,
		margin: 5,
	},
	success: {
		color: green[500],
		margin: 20
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	error: {
		color: 'red'
	},
	labelStyle: {
		margin: 10
	},
	selectList: {
		width: '30%'
	}
});

class CreatePost extends Component {
	state = {
		title: '',
		body: '',
		author: '',
		category: 'first',
		date: new Date(),
		loading: false,
		success: false,
		error: false,
		categories: ['first', 'second', 'third'],
		files: []
	};

	handleChangeValue = (event) => {
		this.setState({title: event.target.value});
	};
	handleChangeCategory = (event) => {
		this.setState({category: event.target.value});
	};
	handleChangeBody = (event) => {
		this.setState({body: event.target.value});
	};
	handleChangeAuthor = (event) => {
		this.setState({author: event.target.value});
	};
	handleLoadFiles = (files) => {
		this.setState({ files: files })
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {title, body, author, date, category, files} = this.state;
		const form = {
			title,
			body,
			author,
			date,
			category,
			files
		};
		this.setState({
			loading: true
		});
		createPost(form)
			.then(res => {
				if (res.status === 201) {
					this.setState({
						success: true,
						loading: false,
						title: '',
						body: '',
						author: '',
					});
					setTimeout(() => {
						this.setState({
							success: false,
						});
					}, 2000);
				} else {
					this.setState({
						error: true
					});
					setTimeout(() => {
						this.setState({
							error: false,
						});
					}, 2000);
				}
			})
			.catch(err => console.log('err', err));
	};

	render () {
		const {classes} = this.props;
		return (
			<div className={'post-list__wrapper'}>
				<TitlePost>Create post</TitlePost>
				<form className={classes.container} onSubmit={this.handleSubmit}>
					<FileBase64
						className={classes.download}
						multiple={ false }
						onDone={ this.handleLoadFiles } />
					<div>
						<TextField
							id="title"
							label="Title"
							className={classes.textField}
							type="text"
							required={true}
							value={this.state.title}
							fullWidth
							onChange={this.handleChangeValue}/>
						<InputLabel
							htmlFor="age-simple"
							className={classes.labelStyle}>Category</InputLabel>
						<Select
							value={this.state.category}
							onChange={this.handleChangeCategory}
							className={classes.selectList}
							inputProps={{ name: 'category' }}>
							{
								this.state.categories.map(category => (
									<MenuItem value={category} key={category}>{category}</MenuItem>
								))
							}
						</Select>
					</div>
					<TextField
						id="post"
						label="Post"
						className={classes.textField}
						multiline={true}
						required={true}
						rows="10"
						value={this.state.body}
						fullWidth
						onChange={this.handleChangeBody}/>
					<TextField
						id="author"
						label="Author"
						className={classes.textField}
						type="text"
						value={this.state.author}
						required={true}
						fullWidth
						onChange={this.handleChangeAuthor}/>
					<ButtonWrapper>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							disabled={this.state.loading}
							onSubmit={this.handleSubmit}
							className={classes.button}>
							Create post
						</Button>
						{this.state.success && <span className={classes.success}>Success</span>}
						{this.state.error && <span className={classes.error}>Oops</span>}
					</ButtonWrapper>
				</form>
			</div>
		);
	}
}

CreatePost.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(CreatePost);
