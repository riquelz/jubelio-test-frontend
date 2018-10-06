import React from 'react'
import Spinner from 'react-spinkit'
import ReadOnlyForm from '../../form/readOnlyForm'
import EditForm from '../../form/editForm'
import Layout from '../../layout/layout'

class ProductView extends React.Component{

    renderTitle = () => {
        if(this.props.type === 'view')
            return 'Product View'
        
        return 'Product Form'
    }
    renderButtons = () => {
       if(this.props.type === 'view'){
           return (
                <div className="level-right">
                    <p className="level-item"><a onClick={this.props.onDelete} className="button is-danger">Delete Product</a></p>
                    <p className="level-item"><a onClick={this.props.onCancel} className="button is-light">Back</a></p>
                </div>
           )
       }

       return (
        <div className="level-right">
            <p className="level-item"><a onClick={this.props.onSave} className="button is-success">Save Product</a></p>
            <p className="level-item"><a onClick={this.props.onCancel} className="button is-light">Back</a></p>
        </div>
       )
    }

    renderContent = () =>{
        if(this.props.type === 'view')
            return(<ReadOnlyForm {...this.props}/>)
        else if(this.props.type === 'edit')
            return(<EditForm {...this.props}/>)

        return(<EditForm {...this.props} product={{}}/>)
    }

    renderNotification = () =>{
        if(this.props.errors.length !== 0){
            return(<div class="notification is-danger">
                <ul>{this.props.errors}</ul>
            </div>)
        }

        return ''
    }

    render(){
        return(
            <Layout {...this.props} title={this.renderTitle()}>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h2 className="subtitle">Product Search</h2>
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
                <hr/>
                {this.renderNotification()}
                {this.props.loading? <div className="columns is-mobile is-centered"><div className="column is-narrow"><Spinner name="chasing-dots" color="green"/></div></div> : this.renderContent()}
            </Layout>
        )
    }
}

export default ProductView