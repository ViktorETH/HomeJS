import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllPosts} from '../../../actions/allPosts';
import PostItem from '../../presentational/post-item/postItem';
import {getAllPosts} from "../../../helpers/selectors";
import {Grid} from '@material-ui/core';

const styles = {
	'backgroundImage': 'linear-gradient(to right, black, #2A3340, black)',
	'minHeight': '100vh'
};

const PostsList = ({posts}) => {
	const list = posts.map((post) =>
		<PostItem post={post} key={post.id}/>
	);
	return (
		<Grid
			container
			direction="row"
			justify="space-evenly"
			style={styles}
			alignItems="flex-start">
			{list}
		</Grid>
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
		posts: getAllPosts(state)
	}
};

const mapDispatchToProps = {
	fetchAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
