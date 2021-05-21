const userReducer=(state=[],action)=>{
    switch( state,action.type)
    {
        case 'SET_POST':{
            return state.concat(action.payload)
        }
       default:{
           return [...state]
       }
    }
}
export default userReducer