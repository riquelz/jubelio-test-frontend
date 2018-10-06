import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { navigate } from './../../commons/actions/navigate-action'
import { logout } from './../auth/store/actions'

class Header extends React.Component{
    
    homeClick = () => {
        this.props.navigate('/')
    }

    loginClick = () => {
        this.props.navigate('/login')
    }

    logoutClick = () => {
        this.props.logout()
    }

    renderButton = () => {
        if(this.props.isAuthenticate){
            return(<a href="javascript:;" className="button is-light" onClick={this.logoutClick}>
                {this.props.email}
            </a>)
        }

        return(<a href="javascript:;" className="button is-light" onClick={this.loginClick}>
            Log in
        </a>)
    }
    
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{borderBottom: 'solid 1px #dddddd',}}>
                <div className="navbar-brand">
                    <a className="navbar-item" href="javascript:;" onClick={this.homeClick}>
                        <img src="https://www.jubelio.com/images/logo_dark.png" alt="Jubelio Test Frontend" width="112" height="28"/>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="javascript:;" className="navbar-item" onClick={this.homeClick}>
                            Home
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {this.renderButton()}
                            </div>
                        </div>
                    </div>
                </div>
                </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.auth,
  })
  
  const mapDispatchToProps = (dispatch => ({
    navigate : navigate,
    logout : logout
  }))()

export default connect(mapStateToProps, mapDispatchToProps)(Header)