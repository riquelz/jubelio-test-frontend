import React from 'react'
import { connect } from 'react-redux'
import ProductView from '../components/product/component/product-view'
import { getProduct, setProduct, submitServer, deleteProductView } from '../components/product/store/actions'
import { navigate } from './../commons/actions/navigate-action'
import { giveErrorMessage } from '../components/auth/store/actions'
import v from 'voca'

class ProductViewScreen extends React.Component{

    state = {
        disabled : false,
        id : null,
        name : '',
        description : '',
        price : null,
        image : '',
        errors : [],
    }

    componentDidMount(){
        if(!this.props.isAuthenticate){
            this.props.giveErrorMessage()
        }else{
            if(this.props.match.params.id !== undefined && this.props.match.params.id !== null){
                this.props.getProduct(this.props.match.params.id, () => {
                    const { product } = this.props
                    this.setState({name:product.name,
                        id:product.id, 
                        description:product.description, 
                        price:product.price, 
                        image:product.image})
                })
            }
            
        }
    }

    onCancel = () => {
        this.props.navigate('/')
    }

    onFileUpload = (files) => {
        this.setState({image:files.base64})
    }

    onValueChange = (e) => {
        if(e.target.id === 'name')
            this.setState({name:e.target.value})
        if(e.target.id === 'description')
            this.setState({description:e.target.value})
    }

    onNumericChange = (values) => {
        this.setState({price: values.value})
    }

    onSave = () =>{
        const { id, name, description, price, image } = this.state
        const errors = []

        if(!v.isEmpty(name) && !v.isEmpty(description) && price !== 0 && !v.isEmpty(image)){
            if(id !== null){
                this.props.submitServer(this.props.token, {name:name,description:description,price:price,image:image},'edit',id)
            }else{
                this.props.submitServer(this.props.token, {name:name,description:description,price:price,image:image},'add')
            }
        }else{
            if(v.isEmpty(name))
                errors.push(<li>Name is required</li>)
            if(v.isEmpty(description))
                errors.push(<li>Description is required</li>)
            if(v.isEmpty(image))
                errors.push(<li>Image is required</li>)
            if(price === undefined || price === null || price === 0)
                errors.push(<li>Price is required and cannot be zero</li>)
            this.setState({errors})
        }
    }

    onDelete = () => {
        if(!this.props.isAuthenticate){
            this.props.giveErrorMessage()
        }else{
            this.props.deleteProductView(this.props.token,this.state.id)
        }
    }
    render(){
        return(
            <React.Fragment>
                <ProductView {...this.props}
                    product={
                        {
                            name: this.state.name,
                            price: this.state.price,
                            image: this.state.image,
                            description: this.state.description,
                        }
                    }
                    disabled={this.state.disabled}
                    type={this.props.match.params.type}
                    errors={this.state.errors} 
                    onCancel={this.onCancel}
                    onSave={this.onSave}
                    onDelete={this.onDelete}
                    onNumericChange={this.onNumericChange}
                    onValueChange={this.onValueChange}
                    onFileUpload={this.onFileUpload}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.product,  ...state.auth,
  })
  
  const mapDispatchToProps = (dispatch => ({
    getProduct : getProduct,
    setProduct : setProduct,
    submitServer : submitServer,
    giveErrorMessage: giveErrorMessage,
    deleteProductView: deleteProductView,
    navigate : navigate,
  }))()
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductViewScreen)