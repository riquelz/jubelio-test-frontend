import React from 'react'
import PropTypes from 'prop-types'
import Card from './card'

class CardList extends React.Component{
    
    chunkArray = (myArray, chunk_size) => {
        var results = []
        
        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size))
        }
        
        return results
    }

    renderList = () => {
        const { list } = this.props
        const chunkedList = this.chunkArray(list,5)

        return chunkedList.map((item) => {
            return (this.renderSubList(item))
        })
    }

    renderSubList = (array) =>{
        const group = array.map((item) =>{
            return(
                <div className="column" tyle={{display: 'flex'}}>
                    <Card data={item} 
                        onView={() => this.props.viewButtonClick(item.id)}
                        onEdit={() => this.props.editButtonClick(item.id)}
                        onDelete={() => this.props.deleteButtonClick(item.id)}/>
                </div>
            )
        })
        
        if(group.length < 5){
            for(let i=group.length;i<5;i++){
                group.push(<div className="column"></div>)
            }
        }
        
        return(
            <div className="columns is-mobile" style={{display: 'flex'}}>{group}</div>
        )
    }

    render(){
        return(
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        )
    }
}

export default CardList