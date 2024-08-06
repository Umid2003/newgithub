import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components'

export default class Cards extends Component {
    render() {
        return (
            <CardContainer>
                {this.props.users.map((user, index) => (
                    <Card fName={user.name} username={user.username} email={user.email} city={user.address.city} index={index} />
                ))}
            </CardContainer>
        )
    }
}
const CardContainer = styled.div`

display:flex;
justify-content: space-between;
flex-wrap:wrap;
width:90%;
margin:0 auto;
`