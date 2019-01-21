import service from "../utils/request";

export const createComment = (data) => {
	console.log(data)
	return service({
		url: `comments`,
		method: 'post',
		data
	})
};
