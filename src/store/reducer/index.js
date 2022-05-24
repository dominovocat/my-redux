export const initialState={counter:0};

export const counterReducer = (oldState)=>{
  return {...oldState,counter:oldState.counter + 1};
};