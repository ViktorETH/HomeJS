import * as R from 'ramda';

export const getAllPosts = state => {
	console.log(state)
	const applySearch = item => R.contains(
		state.posts.search,
		R.prop('title', item)
	);

	return R.compose(
		R.filter(applySearch),
	)(state.posts.posts)
};
