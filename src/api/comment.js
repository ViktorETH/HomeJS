import service from "../utils/request";

export const createComment = (data) => {
	return service({
		url: `comments`,
		method: 'post',
		data
	})
};
