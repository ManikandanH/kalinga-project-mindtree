import React from 'react'
import ViewAllProduct from '../../Admin/AdminViewProduct/index1.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FetchProducts from '../../../Actions/FetchProducts'

class SellerProduct extends React.Component{
    componentWillMount = () => {
        
        this.props.FetchProducts(this.props.sellerName,this.props.id);
        
    }

    
    render()
    {
        return(
            <div>
            <ViewAllProduct/>
           
            </div>
        )
    }
}

function mapstatetoprops(state){
    return{
        sellerName:state.seller.sellerName,
        id:state.seller.sellerId
    }
}
function mapdispatchtoprops(dispatch)
{
    return bindActionCreators({FetchProducts},dispatch)
}
export default connect(mapstatetoprops,mapdispatchtoprops)(SellerProduct)