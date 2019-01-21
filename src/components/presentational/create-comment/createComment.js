import React, {Component} from 'react';
import { createComment } from '../../../api/comment';
import styled from "styled-components";
import {getPostById} from "../../../api/posts";

const TextAtea = styled.textarea`
	margin: 0 auto;
  width: 100%;
`;

const Form = styled.form`
	margin: 5%;
  width: 50%;
`;

const Button = styled.button`
	margin: 0 auto;
  width: 50%;
  display: inline-block;
  color: #40E0D0;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4682B4;
  border-radius: 3px;
  display: block;
`;

class CreateComment extends Component {
	state = {
		postId: '',
		body: '',
		date: new Date()
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
			.then(res => console.log(res))
			.then(() => getPostById(this.state.postId))
			.catch(err => console.log(err));
		this.setState({
			body: '',
		});
	};

	render () {
		return (
			<Form onSubmit={this.handleSubmit}>
				<label>
					New Comment:
					<TextAtea rows="10" type="text" value={this.state.body} onChange={this.handleChangeBody}/>
				</label>
				<br/>
				<Button type="submit" onSubmit={this.handleSubmit}>Send</Button>
			</Form>
		);
	}
}

export default CreateComment;
