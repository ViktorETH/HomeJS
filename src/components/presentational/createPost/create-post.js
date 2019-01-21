import React, {Component} from 'react';
import {createPost} from '../../../api/posts'
import styled from "styled-components";

const TitlePost = styled.h2`
  font-size: 2.5em;
  margin: 2%;
  color: #3a3a3a;
  text-align: center;
`;

const Input = styled.input`
	margin: 0 auto;
	width: 100%;
	height: 30px;
	font-size: 20px;
	border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px 1px #cecece;
  padding-left: 2%
`;

const TextAtea = styled.textarea`
	margin: 0 auto;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px 1px #cecece;

`;

const Form = styled.form`
	margin: 0 auto;
  width: 50%;
`;

const Button = styled.button`
	margin: 0 auto;
  width: 50%;
  display: inline-block;
  color: #40E0D0;
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4682B4;
  border-radius: 3px;
  display: block;
`;

class CreatePost extends Component {
	state = {
		title: '',
		body: '',
		author: '',
		date: new Date()
	};

	handleChangeValue = (event) => {
		this.setState({title: event.target.value});
	};
	handleChangeBody = (event) => {
		this.setState({body: event.target.value});
	};
	handleChangeAuthor = (event) => {
		this.setState({author: event.target.value});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		createPost(this.state).then(res => console.log(res)).catch(err => console.log(err))
		this.setState({
			title: '',
			body: '',
			author: '',
		})
	};

	render () {
		return (
			<div className={'post-list__wrapper'}>
				<Form onSubmit={this.handleSubmit}>
					<TitlePost>Create post</TitlePost>
					<label>
						Title:
						<Input type="text" value={this.state.title} onChange={this.handleChangeValue}/>
					</label>
					<br/>
					<label>
						Body:
						<TextAtea rows="10" type="text" value={this.state.body} onChange={this.handleChangeBody}/>
					</label>
					<br/>
					<label>
						Author:
						<Input type="text" value={this.state.author} onChange={this.handleChangeAuthor}/>
					</label>
					<br/>
					<Button type="submit" value="Submit" onSubmit={this.handleSubmit}>Create post</Button>
				</Form>
			</div>
		);
	}
}

export default CreatePost;
