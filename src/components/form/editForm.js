import React from 'react'
import PropTypes from 'prop-types'
import SimpleTextField from '../textfield/simple'
import SimpleTextArea from '../textfield/textarea'
import SimpleFileUpload from '../textfield/file'
import CurrencyField from '../textfield/currency'
import v from 'voca'

class EditForm extends React.Component{

    static propTypes = {
        product: PropTypes.object.isRequired,
        onFileUpload: PropTypes.func
    }

    render(){
        const { disabled, name, price, image, description } = this.props.product
        return(
            <React.Fragment>
                <div className="columns is-mobile is-centered">
                    <div className="column is-one-fifth">
                        <figure className="image is-square">
                            <img id='image' name='image' src={v.isEmpty(image) ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhMb4nSti_U1CL4gFi_r0SC2k_AB8aJGbDh_4-mfV0Z9kytOo8' : image} alt={name}/>
                        </figure>
                        <SimpleFileUpload inputClass='file is-info is-centered' {...this.props}/>
                    </div>
                    <div className="column is-half">
                        <form>
                            <SimpleTextField id='name' label='Name' inputClass='input' disabled={disabled} value={name} onChange={this.props.onValueChange}/>
                            <CurrencyField id='price' label='Price' inputClass='input' disabled={disabled}  value={price} onChange={this.props.onNumericChange}/>
                            <SimpleTextArea id='description' label='Description' inputClass='textarea' disabled={disabled}  value={description} onChange={this.props.onValueChange}/>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditForm