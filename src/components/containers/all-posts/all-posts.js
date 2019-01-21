import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllPosts} from '../../../actions/allPosts';
import PostItem from '../../presentational/post-item/postItem';

const PostsList = ({ posts }) => {
	const list = posts.map((post) =>
			<PostItem post={post}  key={post.id}/>
	);
	return (
		<div className={'post-list__wrapper'}>{list}</div>
	);
};

class Posts extends Component {
	componentDidMount () {
		this.props.fetchAllPosts();
	}

	render () {
		return (
			<div>
				<PostsList posts={this.props.posts}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	}
};

const mapDispatchToProps = {
	fetchAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
