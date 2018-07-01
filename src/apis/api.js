import querystring from 'query-string';

function buildHeaders(headers){
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
}

function request(props){
  const {
    url,
    init, 
    query,
    option,
    endPoint,
  } = props;

  let strQuery = query ? `?${querystring.stringify(query)}` : '',
      fetchUrl = `${endPoint}/${url}${strQuery}`;
  
  return fetch(fetchUrl, {
      method: init.method,
      headers: buildHeaders(init.headers),
    })
    .then(handleErrorResponse)
}

function handleErrorResponse(response) {
  return response.json()
    .then(result => {
      if (result.error) return Promise.reject(result.error)
      return result;
    })
}

const Api = {
	get: (endPoint, url, option) => {
		return request({
      endPoint,
      url,
			init: {
        method: 'GET',
      },
      option,
    })
  },

  post: (endPoint, url, option) => {
		return request({
      endPoint,
      url,
			init: {
        method: 'POST',
      },
      option,
    })
  },
  
  boardGet : (endPoint, url, option) => {
    return request({
      endPoint,
      url,
      init: {
        method: 'GET',
      },
      option,
    })
  }
}

export default Api;
