export default (
	state = {
		loginResponse: {},
		isLoginFailed: false
	},
	action
) => {
	if (action.error) {
		return {
			loginResponse: {},
			isLoginFailed: true
		}
	}
	switch (action.type) {
		case 'CHECK_CREDENTIALS':
			if (action.payload.data) {
				sessionStorage.setItem('token', action.payload.data.access_token)
				console.log(action.payload.data)
			}
			return {
				isLoginFailed: false,
				loginResponse: action.payload.data
			}
		default:
			return state
	}
}
