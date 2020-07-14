import React, { Component, Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavbarToggler
} from 'reactstrap';
//Modal imports
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import  Logout  from './auth/Logout';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';




export class AppNavBar extends Component{
  state = {
      isOpen : false
  }

  static propTypes = {
      auth: PropTypes.object.isRequired
  }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLink = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text ml-3">
        <strong>{ user ? `Welcome ${user.name}`: null}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        );
        const guestLink =(
            <Fragment>
                <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        );

        return (
           
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            ShoppingList
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen}>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLink : guestLink}
                            </Nav>   
                        </Collapse>
                    </Container>

                </Navbar>
            
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavBar);
