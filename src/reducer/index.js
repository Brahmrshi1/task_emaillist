const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_Data':
        return { ...state };
      case 'DATA_RECEIVED':
        return { ...state, data: action.json }
      default:
        return state;
    }
  };
  
  export default reducer;
  