import React from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/product/component/product-list'
import { navigate } from './../commons/actions/navigate-action'
import { getProducts, deleteProduct } from '../components/product/store/actions'
import { giveErrorMessage } from '../components/auth/store/actions'
import CardList from './../components/card/card-list'

class ProductSearchScreen extends React.Component{

    addButtonOnclick = () => {
        if(!this.props.isAuthenticate){
            this.props.giveErrorMessage()
        }else{
            this.props.navigate('/products/add/')
        }
        
    }
    
    viewButtonClick = (id) => {
        if(!this.props.isAuthenticate){
            this.props.giveErrorMessage()
        }else{
            this.props.navigate('/products/view/' + id)
        }
    }
    editButtonClick = (id) => {
        if(!this.props.isAuthenticate){
            this.props.giveErrorMessage()
        }else{
            this.props.navigate('/products/edit/' + id)
        }
    }
    deleteButtonClick = (id) => {
        if(!this.props.isAuthenticate){
            this.props.giveErrorMessage()
        }else{
            this.props.deleteProduct(this.props.token,id)
        }
    }

    componentDidMount(){
        this.props.getProducts()
    }
    
    renderProducts = () =>{
        if(this.props.products.length !== 0){
            return(<CardList list={this.props.products} 
                key='id' 
                viewButtonClick={this.viewButtonClick} 
                editButtonClick={this.editButtonClick} 
                deleteButtonClick={this.deleteButtonClick} />)
        }else{
            return(<h2 className="subtitle">We don't have any products. Please add.</h2>)
        }
    }

    render(){
        return(
            <React.Fragment>
                <ProductList {...this.props} 
                    renderProducts={this.renderProducts()}
                    addButtonOnclick={this.addButtonOnclick}
                    viewButtonClick={this.viewButtonClick}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.product, ...state.auth,
  })
  
  const mapDispatchToProps = (dispatch => ({
    getProducts : getProducts,
    deleteProduct : deleteProduct,
    giveErrorMessage: giveErrorMessage,
    navigate : navigate
  }))()
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductSearchScreen)