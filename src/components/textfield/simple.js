import React from 'react'
import PropTypes from 'prop-types'
import v from 'voca'

class SimpleTextField extends React.Component{
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
        const { type, id, readOnly, value, label, onChange, inputClass, helpClass, helpText, disabled } = this.props
        return(
            <React.Fragment>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">{label}</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <input id={id} name={id} type={type} disabled={disabled} className={inputClass} value={value} onChange={onChange} readOnly={readOnly}/>
                            </div>
                            {v.isEmpty(helpClass)? '' : <p className={helpClass}>{helpText}</p>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SimpleTextField