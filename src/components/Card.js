import React, { Component } from 'react'
import styled from 'styled-components'

export default class Card extends Component {
    render() {
        const { fName, username, email, city, index } = this.props
        return (
            <CardUser>
                <img src={`https://robohash.org/${index}`} alt="" srcset="" />
                <h1>{fName}</h1>
                <h5>{username}</h5>
                <span>{email}</span>
                <p>{city}</p>
            </CardUser>
        )
    }
}
const CardUser = styled.div`
    box-shadow:2px 2px 2px 2px white;
    width:32%;
    margin:15px 0;
    padding-bottom:10px;
    border-radius:10px;
    text-align:center;
    color:white;
    h5{
        margin:10px 0;
    }
    `
