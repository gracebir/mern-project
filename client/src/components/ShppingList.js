import React, { Component } from 'react'


import { Container, 
    ListGroup, 
    ListGroupItem, 
    Button} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';


import { connect } from 'react-redux';
import { getItems, deleteItems } from '../actions/itemActions';
import PropTypes from 'prop-types';



export class ShppingList extends Component {
    
     static propTypes = {
         getItems: PropTypes.func.isRequired,
         items : PropTypes.object.isRequired,
         deleteItems: PropTypes.func.isRequired
         
    }


    componentDidMount(){
        this.props.getItems();
       
        
    }


    onDeleteClick=(id)=>{
        this.props.deleteItems(id)
    }

    render() {
        const { items } = this.props.items;
        return (
            <Container>
                     <ListGroup>
                         <TransitionGroup className="shopping-list">
                             {items.map(({_id, name})=>(
                                 <CSSTransition key={_id} timeout={500} classNames="fade">
                                     <ListGroupItem>
                                         <Button className="remove-btn"
                                         color="danger"
                                         size="sm"
                                         onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                         {name}
                                     </ListGroupItem>
                                 </CSSTransition>
                             ))}
                         </TransitionGroup>
                     </ListGroup>
            </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    items : state.items
})

export default connect(mapStateToProps, { getItems, deleteItems}) (ShppingList);
