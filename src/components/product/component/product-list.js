import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-spinkit'
import Layout from '../../layout/layout'

class ProductList extends React.Component{

    static propTypes = {
        renderProducts: PropTypes.any.isRequired,
        addButtonOnclick: PropTypes.func.isRequired
    }

    render(){
        return(
            <Layout {...this.props} title='Product Search'>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h2 className="subtitle">Product Search</h2>
                        </div>
                    </div>
                    <div className="level-right">
                        <p className="level-item"><a href="javascript:;" onClick={this.props.addButtonOnclick} className="button is-success">Add Product</a></p>
                    </div>
                </div>
                <hr/>
                {this.props.loading? <div className="columns is-mobile is-centered"><div className="column is-narrow"><Spinner name="chasing-dots" color="green"/></div></div> : this.props.renderProducts}
            </Layout>
        )
    }
}

export default ProductList