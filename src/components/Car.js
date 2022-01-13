import React from 'react'
import cars from '../cars.json'
import { Card, CardContent } from '@material-ui/core'

const Car = (props) => {
    let id = Number(props.match.params.id)
    const selectedCar = cars.find(car => car.id === id)
    console.log("selected car---.",selectedCar)
    return (
        <div>
        <h1>A specific car</h1>
        <div className="card-container">
            <Card className="card">
                <CardContent className="text-gray">
                    <span>{selectedCar.Name.toUpperCase()}</span>
                    <ul>
                        {Object.entries(selectedCar).map(([key,value])=>{
                            return <li>{key} : {value}</li>
                        })}
                    </ul>
                    </CardContent>
                    </Card>
            
        </div>
        
        </div>
    )
}

export default Car