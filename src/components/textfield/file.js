import React from 'react'
import PropTypes from 'prop-types'
import FileBase64 from 'react-file-base64'
import v from 'voca'

class SimpleFileUpload extends React.Component{
    static propTypes = {
        onFileUpload : PropTypes.func
    }
    
    static defaultProps = {
        onFileUpload : (e) => console.log(e),

    }
    
    render(){
        const { inputClass, onFileUpload } = this.props
        return(
            <React.Fragment>
                <div className={inputClass}>
                    <FileBase64 name="image" onDone={onFileUpload}/>
                </div>
            </React.Fragment>
        )
    }
}

export default SimpleFileUpload