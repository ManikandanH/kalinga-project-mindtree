const a={
    x:[]
}
export default  function(state=a,action)
{
    
    switch(action.type)
    {
   
        case "RECEIVE_PRODUCT_ADMIN":
        {
            return action.payload
            
        }
        default:
            return state;
        
    }
}