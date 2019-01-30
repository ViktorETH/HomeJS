import {
	FETCH_ALL_POSTS_ERROR,
	FETCH_ALL_POSTS_START,
	FETCH_ALL_POSTS_SUCCESS, SEARCH_POSTS,
} from '../helpers/constantTypes';
import {getAllPosts} from '../api/posts';

export function fetchAllPosts () {
	return dispatch => {
		dispatch({
			type: FETCH_ALL_POSTS_START,
		});
		getAllPosts()
			.then(response => {
					dispatch({
						type: FETCH_ALL_POSTS_SUCCESS,
						payload: response.data
					})
				}
			)
			.catch(error => {
				dispatch({
					type: FETCH_ALL_POSTS_ERROR,
					error: true,
					payload: error.config
				})
			});
	}
}

export const searchPosts = value => dispatch => {
	dispatch({
		type: SEARCH_POSTS,
		payload: value
	})
};
