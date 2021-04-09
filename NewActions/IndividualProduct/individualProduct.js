import * as actionsTypes from '../index'

const IndividualProducts = (user) =>
{

  return{
        type:actionsTypes.INDIVIDUAL_PRODUCT,
        payload:user
  }

}

export default IndividualProducts;