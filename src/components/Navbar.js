import React, { Component } from 'react'
import { GiVintageRobot } from "react-icons/gi";
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <Nav>
                <GiVintageRobot className='logo' />
                <form action="">
                    <input type="search" value={this.props.search} name="" placeholder='Search' id="" onChange={this.props.handleValue} />
                </form>
            </Nav>
        )
    }
}
const Nav = styled.div`
display:flex;
justify-content: center;
padding:20px 0;
color:white;
align-items: center;

.logo{
    font-size:50px;
    margin-right:40%;
}
input{
    padding:10px;
    border-radius:10px;
}
`