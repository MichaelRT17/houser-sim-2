import React from 'react';

function House(props) {
    return (
        <div>
            <div>
                <div>
                    <img width='400' src={props.house.img} alt='' />
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
        </div>
    )
}

export default House;