export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      return {
        facilities: action.payload.data,
      };

    default:
      return state;
  }
};
