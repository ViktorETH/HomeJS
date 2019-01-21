import service from '../utils/request';

export const getAllPosts = () => {
	return service({
		url: `posts`,
		method: 'get'
	})
};

export const getPostById = id => {
	return service({
		url: `posts/${id}`,
		method: 'get',
		params: {_embed: 'comments'}
	})
};

export const deletePostById = id => {
	return service({
		url: `posts/${id}`,
		method: 'delete',
	})
};

export const createPost = (data) => {
	return service({
		url: `posts`,
		method: 'post',
		data
	})
};


