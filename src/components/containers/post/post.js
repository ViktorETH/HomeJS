import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostItem} from '../../../actions/postItem';
import Comment from '../../presentational/comment/comment';
import CreateComment from '../../presentational/create-comment/createComment';
import styled from "styled-components";

const PostWrapper = styled.div`
	width: 80%;
	min-height: 100vh;
	background-color: #fff;
	margin: 2%;
	box-shadow: 1px 1px 50px 10px #cecece;
`;

const TitlePost = styled.h2`
  font-size: 2.5em;
  margin: 2%;
  color: #3a3a3a;
  text-align: center;
`;

const TitleComments = styled.div`
  font-size: 2em;
  margin-left: 5%;
  color: #3a3a3a;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 1% 5%;
  font-size: 1.5em;
  overflow: hidden;
`;

const AuthorTitle = styled.h4`
	margin-left: 5%;
  padding: 0 5%;
  width: 100%;
`;

const Title = ({title}) => {
	return (<TitlePost>{title}</TitlePost>)
};

const Body = ({body}) => {
	return (<Paragraph>{body}</Paragraph>)
};

const Author = ({author}) => {
	return (<AuthorTitle>Author: {author}</AuthorTitle>)
};

const CommentList = ({comments}) => {
	const list = comments.map((comment) =>
		<Comment comment={comment} key={comment.id}/>
	);
	return (
		<div>
			<TitleComments>Comments</TitleComments>
			<div>{list}</div>
		</div>

	);
};

class Post extends Component {

	componentDidMount () {
		this.props.fetchPostItem(this.props.match.params.id);
	}

	render () {
		return (
			<div className={'post-list__wrapper '}>
				<PostWrapper>
				<Title title={this.props.post.title}/>
				<Body body={this.props.post.body}/>
				<Author author={this.props.post.author}/>
				<div>
					{
						this.props.comments && <CommentList comments={this.props.comments}/>
					}
				</div>
				<CreateComment idPost={this.props.match.params.id}/>
				</PostWrapper>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		post: state.post.post,
		comments: state.post.post.comments
	}
};

const mapDispatchToProps = {
	fetchPostItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
