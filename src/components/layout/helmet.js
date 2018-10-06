import React from 'react'
import PropTypes from 'prop-types'

class Helmet extends React.Component{
    static propTypes = {
        title : PropTypes.string.isRequired,
        meta : PropTypes.arrayOf(PropTypes.object),
        script :  PropTypes.arrayOf(PropTypes.object),
        link :  PropTypes.arrayOf(PropTypes.object),
    }
    
    static defaultProps = {
        meta : [
            { name: 'description', content: 'Hosea Simanjuntak\'s website for testing Jubelio' },
            { name: 'keywords', content: 'jubelio, test' },
          ],
        script : [
            { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
          ],
        link : [
            {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
          ],
    }

    render(){
        return(
            <Helmet
                {...this.props}
            />
        )
    }
}

export default Helmet