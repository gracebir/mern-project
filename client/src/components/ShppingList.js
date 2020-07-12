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
import { getItems } from '../actions/itemActions';

import uuid from 'react-uuid';
import PropTypes from 'prop-types';

export class ShppingList extends Component {
    
     static propTypes = {
         getItems: PropTypes.func.isRequired,
         items : PropTypes.object.isRequired
    }
    componentDidMount(){
        this.props.getItems();
    }

    render() {
        const { items } = this.props.items;
        return (
            <Container>
                <Button color="dark"
                style={{ marginBottom: '2rem'}}
                onClick={
                    ()=>{
                        const name = prompt('entrer item');
                        if(name){
                            this.setState(state=>({
                                items: [...state.items, {id: uuid(), name}]
                            }));
                        }
                    }
                }
                >
                     Add item</Button>
                     <ListGroup>
                         <TransitionGroup className="shopping-list">
                             {items.map(({id, name})=>(
                                 <CSSTransition key={id} timeout={500} classNames="fade">
                                     <ListGroupItem>
                                         <Button className="remove-btn"
                                         color="danger"
                                         size="sm"
                                         onClick={()=>{
                                             this.setState(state=>({
                                                 items: state.items.filter(item => item.id !== id)
                                             }))
                                         }}>&times;</Button>
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

export default connect(mapStateToProps, { getItems}) (ShppingList);
