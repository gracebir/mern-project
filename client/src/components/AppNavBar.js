import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavbarToggler
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import  Logout  from './auth/Logout';
export class AppNavBar extends Component {
  state = {
      isOpen : false
  }

    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            ShoppingList
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen}>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <RegisterModal/>
                                </NavItem>
                                <NavItem>
                                    <Logout/>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>

                </Navbar>
            </div>
        )
    }
}

export default AppNavBar
