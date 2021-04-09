
export default  function(state=[],action)
{

    switch(action.type)
    {
   
        case "Individual":
                return action.payload
        default:
            return state;

    }
}