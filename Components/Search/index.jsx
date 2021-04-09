import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bindActionCreators } from 'redux';
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'
import searchResults from '../../NewActions/SearchProducts/searchResults.js'

library.add(faSearch) //to add Search Icon



class search extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search:""
        }}
 
    searchChange =  (event) => {
        this.setState({
            search:event.target.value
        })
    }

    onclick = () => {
        if(this.state.search === ""){
                this.props.showSnackBar({
                    message: "Enter Something to search",
                type: "warning"
                })
            }
             let x = false;
            for (let i = 0; i < this.state.search.length; i++)
                if (this.state.search[i] !== " ") {
                    x = true;
                    break;
                }
            if (!x) {
            
                this.props.showSnackBar({
                    message: "Enter Something to search",
                    type: "warning"
                    })}
           
            else{
                this.props.searchResults(this.state.search);
          }
}
    render() {
        return (
            <div className="input-group" style={{width:"100%"}}>
                <input type="text" className="form-control" id="search" onChange={this.searchChange}
                   value={ this.state.search } style={{ height: "40px", fontSize: "13px" }} placeholder={`Search for products,item & more`} />
                <div className="input-group-append">
                {this.state.search!=="" ?<NavLink to ={{ 
                    pathname:"/searchResults",
                        search:`?search=${this.state.search}`

                }} ><button className="btn" onClick={this.onclick} 
                 style={{ height: "40px", width: "38px" }} type="button">
                        <FontAwesomeIcon icon="search" style={{ color: "rgba(34, 7, 7,0.8)" }} size="1x" />
                    </button>
                    </NavLink>:<button className="btn" onClick={this.onclick} value=""
                 style={{ height: "40px", width: "38px" }} type="button">
                        <FontAwesomeIcon icon="search" style={{ color: "rgba(34, 7, 7,0.8)" }} size="1x" />
                    </button>}</div>
            </div>)
    }
}

function mapstatetoprops(state) {
    return {
        result: state.SearchProduct.searchResults,
        initial: state.SearchProduct
    }
}

function mapdispatchtoprops(dispatch) {
    return bindActionCreators({ searchResults, showSnackBar }, dispatch)
}
export default connect(mapstatetoprops, mapdispatchtoprops)(search);