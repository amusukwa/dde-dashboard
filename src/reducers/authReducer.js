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
				console.log('called')
				sessionStorage.setItem('access_token', action.payload.data.access_token)
			}
			return {
				isLoginFailed: false,
				loginResponse: action.payload.data
			}
		default:
			return state
	}
}
