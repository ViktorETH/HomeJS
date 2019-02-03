import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostItem} from '../../../actions/postItem';
import Comment from '../../presentational/comment/comment';
import CreateComment from '../../presentational/create-comment/createComment';
import styled from "styled-components";
import ListItemText from '@material-ui/core/ListItemText';

const PostWrapper = styled.div`
	width: 70%;
	min-height: 100vh;
	background-color: #fff;
	margin: 2% 5%;
`;

const TitlePost = styled.h2`
  font-size: 2.5em;
  margin: 2%;
  color: #3a3a3a;
  text-align: center;
`;

const TitleComments = styled.div`
  font-size: 1.5em;
  margin-left: 5%;
  color: #3a3a3a;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 0 5%;
  font-size: 1.5em;
  margin-bottom: 0
`;

const Image = styled.img`
  padding: 0 5%;
  width: 100%;
  box-sizing: border-box;
`;

const PostInfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 5%;
	margin-bottom: 2%;
	width: 100%;
	:last-child: {
		background-color: red;
	}
`;

const PostInfo = ({info}) => {
	return (
		<PostInfoWrapper>
			<ListItemText primary={`by: ${info.author}`}/>
			<ListItemText primary={`category: ${info.category}`}/>
			<ListItemText primary={`${new Date(info.date).toDateString()}`}/>
		</PostInfoWrapper>
	)
};

const CommentList = ({comments}) => {
	const list = comments.map((comment) =>
		<Comment comment={comment} key={comment.id}/>
	);
	return (
		<div>
			<TitleComments>Comments:</TitleComments>
			<div>{list}</div>
		</div>

	);
};

class Post extends Component {

	componentDidMount () {
		this.props.fetchPostItem(this.props.match.params.id);
	}

	render () {
		const {title, files, body, author, category, date} = this.props.post;
		return (
			<div className={'post-list__wrapper '}>
				<PostWrapper>
					<TitlePost>{title}</TitlePost>
					{
						files && <Image src={files.base64}/>
					}
					<Paragraph>{body}</Paragraph>
					<PostInfo info={{author, category, date}}/>
					<div>
						{
							this.props.comments && <CommentList comments={this.props.comments}/>
						}
					</div>
					<CreateComment idPost={this.props.match.params.id}/>
				</PostWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		post: state.post.post,
		comments: state.post.post.comments
	};
};

const mapDispatchToProps = {
	fetchPostItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
