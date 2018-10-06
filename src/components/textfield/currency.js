import React from 'react'
import PropTypes from 'prop-types'
import v from 'voca'
import NumberFormat from 'react-number-format'

class CurrencyField extends React.Component{
    static propTypes = {
        label : PropTypes.string.isRequired,
        onChange : PropTypes.func,
        value : PropTypes.string,
        readonly : PropTypes.bool
    }
    
    static defaultProps = {
        onChange : (e) => console.log(e),

    }
    
    render(){
        const { id, readOnly, value, label, onChange, inputClass, helpClass, helpText, disabled } = this.props
        return(
            <React.Fragment>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">{label}</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                {readOnly? <input id={id} name={id} className={inputClass} value={value} readOnly/>: <NumberFormat className={inputClass} ref={id} id={id} name={id} value={value} onValueChange={onChange} disabled={disabled} thousandSeparator={true} prefix="Rp. "/>}     
                            </div>
                            {v.isEmpty(helpClass)? '' : <p className={helpClass}>{helpText}</p>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CurrencyField