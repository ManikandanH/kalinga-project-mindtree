export default  function(state=[],action)
{
    
    switch(action.type)
    {
   

        case "RECEIVE_PRODUCT":
        {
            return action.payload
            
        }
        default:
        return state;
    }
}