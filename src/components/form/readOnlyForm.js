import React from 'react'
import PropTypes from 'prop-types'
import SimpleTextField from '../textfield/simple'
import SimpleTextArea from '../textfield/textarea'

class ReadOnlyForm extends React.Component{

    static propTypes = {
        product: PropTypes.object.isRequired
    }

    render(){
        const { name, price, image, description } = this.props.product
        return(
            <React.Fragment>
                <div className="columns is-mobile is-centered">
                    <div className="column is-one-fifth">
                        <figure className="image is-square">
                            <img src={image} alt={name}/>
                        </figure>
                    </div>
                    <div className="column is-half">
                        <form>
                            <SimpleTextField label='Name' inputClass='input' value={name} readOnly={true}/>
                            <SimpleTextField label='Price' inputClass='input' value={'Rp. '+ price} readOnly={true}/>
                            <SimpleTextArea label='Description' inputClass='textarea' value={description} readOnly={true}/>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ReadOnlyForm