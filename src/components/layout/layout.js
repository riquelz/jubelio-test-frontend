import React from 'react'
import PropTypes from 'prop-types'
import Helmet from './helmet'
import Site from './site'
import Header from './header'
import Content from './content'
import Footer from './footer'

class Layout extends React.Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        meta : PropTypes.arrayOf(PropTypes.object)
    }
    
    static defaultProps = {
        meta : [],
    }

    render(){
        return(
            <Site>
                <Header />
                <Content>
                    <div className="container is-fluid" style={{ marginTop: '25px' }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer />
            </Site>
        )
    }
}

export default Layout