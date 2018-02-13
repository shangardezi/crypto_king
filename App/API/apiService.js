import axios from 'axios'

class apiService {

	getRequest(endpoint, params) {
		return axios.get(endpoint).then(res => {
			return res
		})
	}
}

export default apiService