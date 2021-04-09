export default  function(state=[],action)
{
    
    switch(action.type)
    {
         case "RECEIVE_USERS":
        {
            return action.payload
            
        
        }
        
        default:
        return state;

    }
}