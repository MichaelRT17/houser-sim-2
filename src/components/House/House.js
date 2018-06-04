import React from 'react';
import './House.css';

function House(props) {
    return (
        <div className='parentdiv'>
            <div>
                <img width='200' src={props.house.img} alt='' />
            </div>
            <div>
                <p>Property Name: {props.house.name}</p>
                <p>Address: {props.house.address}</p>
                <p>City: {props.house.city}</p>
                <p>State: {props.house.state}</p>
                <p>Zip: {props.house.zip}</p>
            </div>
            <div>
                <p>Monthly Mortgage: {props.house.mortgage}</p>
                <p>Desired Rent: {props.house.rent}</p>
                <button onClick={() => props.deleteHouse(props.house.id)}>X</button>
            </div>
        </div>
    )
}

export default House;