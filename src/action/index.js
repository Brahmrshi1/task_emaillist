// import Emaildata from "../contaner/Emaildata";

export const getData = (data) => ({
    type: 'GET_Data',
    payload: data
  });
  export const dataRecived=(data)=>({
    type:'DATA_RECEIVED',
    payload: data
  
    // posts: Emaildata.data.map(emil=>emil.data)
  });
  // export const sucess =()=>({
  //   type:'sucess'
  // })
  // export const failed =()=>({
  //   type:'failed'
  // })