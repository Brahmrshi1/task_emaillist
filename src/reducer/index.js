const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_Data':
        return { ...state ,data:action.json};
      case 'DATA_RECEIVED':
        return { ...state, data: action.payload }
     default:
        return state;
    }
  };
  
  export default reducer;
  