import {
	FETCH_POST_ERROR,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
} from '../helpers/constantTypes';
import { getPostById } from '../api/posts';

export function fetchPostItem (id) {
	return dispatch => {
		dispatch({
			type: FETCH_POST_START,
		});
		getPostById(id)
			.then(response => {
					dispatch({
						type: FETCH_POST_SUCCESS,
						payload: response.data
					})
				}
			)
			.catch(error => {
				dispatch({
					type: FETCH_POST_ERROR,
					error: true,
					payload: error.config
				})
			});
	}
}
