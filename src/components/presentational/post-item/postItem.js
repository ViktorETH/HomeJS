import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {GridListTile, GridListTileBar} from '@material-ui/core';

const styles = theme => ({
	postItem: {
		width: 450,
		height: 300,
		margin: '3% 0',
		fontSize: 0,
		border: '1px solid black',
		boxShadow: ' 0 0 50px 0 black',
		transition: '1s',
		'&:hover': {
			transform: 'scale(1.05)',
			boxShadow: '0 0 2px 0 #46247D'
		},
	},
	postTitle: {
		width: '100%',
		height: 60,
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
});

class Post extends Component {
	render () {
		const {post, classes} = this.props;
		return (
			<Link to={`/posts/${post.id}`}>
			<GridListTile
			className={classes.postItem}>
				<img src={post.files.base64} alt={post.title} />
				<GridListTileBar
					className={classes.postTitle}
					title={post.title}
					subtitle={<span>by: {post.author}</span>}
				/>
			</GridListTile>
			</Link>
		)
	}
}

export default withStyles(styles)(Post);
