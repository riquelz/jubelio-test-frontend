import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-spinkit'

class LoginBox extends React.Component{

    static propTypes = {
        onValueChange: PropTypes.func
    }

    renderNotification = () =>{
        if(this.props.errors.length !== 0){
            return(<div className="notification is-danger">
                <ul>{this.props.errors}</ul>
            </div>)
        }

        return ''
    }

    renderContent = () => {
        if(this.props.loading){
            return(
                <div className="columns is-mobile is-centered">
                    <div className="column is-narrow">
                        <Spinner name="chasing-dots" color="green"/>
                    </div>
                </div>
            )
        }

        return(
            <div className="card-content">
                <h1 className="title">           
                    <img src="https://www.jubelio.com/images/logo_dark.png" alt="logo" width="200"/>
                </h1>
                {this.renderNotification()}
                <div className="field">
                    <div className="control ">
                        <input id="email" name="email" className="input" type="email" placeholder="Email" onChange={this.props.onValueChange}/>
                    </div>
                </div>
                <div className="field">
                    <p className="control ">
                        <input id="password" name="password" className="input" type="password" placeholder="Password" onChange={this.props.onValueChange}/>
                    </p>
                </div>
                <div className="field">
                    <div className="control">
                        <a onClick={this.props.onSave} className="button is-primary is-fullwidth">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    render(){

        return(
            <React.Fragment>
                <section className="hero is-fullheight is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                        <div className="columns is-centered">
                            <article className="card is-rounded">
                                {this.renderContent()}
                            </article>
                        </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default LoginBox