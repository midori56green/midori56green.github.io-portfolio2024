const endPoint = 'http://api.skilljapan.info/api/';

const requestResponse = async (uri, method, postData = false) => {
	try {
		const headers = {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		};
		let json = {
			method: method,
			headers: headers
		};
		if(postData) {
			json.body = JSON.stringify(postData);
		}

		return await fetch(endPoint + uri, json);
	}catch(error) {
		return error;
	}
}

const getJson = async (uri, postData = false) => {
	return requestResponse(uri, 'get', postData);
}
const postJson = async (uri, postData = false) => {
	return requestResponse(uri, 'post', postData);
}

export {getJson, postJson};