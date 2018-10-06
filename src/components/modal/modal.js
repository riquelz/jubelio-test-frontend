import React from 'react'
import PropTypes from 'prop-types'

class Modal extends React.Component{
    render(){
        const { children, title, open, onCancel, modalType } = this.props
        return(
            <React.Fragment>
                <div className={open? 'modal is-active' : 'modal'}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{title}</p>
                            <button className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            {children}
                        </section>
                        <footer className="modal-card-foot">
                            {modalType !== 'view' ? <button className="button is-success">Save changes</button> : ''}
                            <button  onClick={onCancel} className="button">Cancel</button>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal