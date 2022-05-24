export const initialState={counter:0};
export const increaseReducer = (oldState)=>{
  return {...oldState,counter:oldState.counter + 1};
};