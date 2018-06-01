import React from 'react';

function House(props) {
    return (
        <div>
            <h1>House</h1>
            <div>
                <p>Property Name: {props.house.name}</p>
                <p>Address: {props.house.address}</p>
                <p>City: {props.house.city}</p>
                <p>State: {props.house.state}</p>
                <p>Zip: {props.house.zip}</p>
                <button onClick={() => props.deleteHouse(props.house.id)}>X</button>
            </div>
        </div>
    )
}

export default House;