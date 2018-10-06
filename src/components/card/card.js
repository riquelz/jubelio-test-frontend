import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component{
    render(){
        const { onView, onEdit, onDelete } = this.props
        const { name, price, date_added, image, description } = this.props.data
        return(
            <React.Fragment>
                <div className="card" style={{alignItems: 'stretch'}}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                        <img src={image} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{name}</p>
                                <p className="subtitle is-6">Rp. {price}</p>
                            </div>
                        </div>

                        <div className="content">
                            {description}
                            <br/>
                            <time dateTime="2016-1-1">{date_added}</time>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="javascript:;" onClick={onView} className="card-footer-item">View</a>
                        <a href="javascript:;" onClick={onEdit} className="card-footer-item">Edit</a>
                        <a href="javascript:;" onClick={onDelete} className="card-footer-item">Delete</a>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}

export default Card