function receiveProducts(Products) {
    return {
        type: "UPDATE_RECEIVE_PRODUCT_ADMIN",
        payload: Products
    }
  
}


export default receiveProducts;