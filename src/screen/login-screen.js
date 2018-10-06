import React from 'react'
import { connect } from 'react-redux'
import LoginBox from '../components/auth/component/loginbox'
import { authenticate } from '../components/auth/store/actions'
import { navigate } from './../commons/actions/navigate-action'
import v from 'voca'

class LoginScren extends React.Component{

    state = {
        email : '',
        password : '',
        errors : []
    }

    componentDidMount(){
        const errors = []
        if(!v.isEmpty(this.props.message)){
            errors.push(this.props.message)
            this.setState({errors})
        }

        if(this.props.isAuthenticate){
            this.props.navigate('/')
        }
    }

    onValueChange = (e) => {
        if(e.target.id === 'email')
            this.setState({email:e.target.value})
        if(e.target.id === 'password')
            this.setState({password:e.target.value})
    }

    onSave = () =>{
        const { email, password } = this.state
        const errors = []
        if(!v.isEmpty(email) && !v.isEmpty(password)){
            this.props.authenticate(email,password)
        }else{
            if(v.isEmpty(email))
                errors.push(<li>Email is required</li>)
            if(v.isEmpty(password))
                errors.push(<li>Password is required</li>)
            this.setState({errors})
        }
    }

    render(){
        return(
            <React.Fragment>
                <LoginBox {...this.props} 
                    errors={this.state.errors}
                    onSave={this.onSave}
                    renderNotification={this.renderNotification} 
                    onValueChange={this.onValueChange} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.auth
})

const mapDispatchToProps = (dispatch => ({
    authenticate : authenticate,
    navigate : navigate
}))()
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScren)