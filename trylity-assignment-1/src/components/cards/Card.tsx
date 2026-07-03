import Button from "../elements/Button";
import "../../styles/card.css"
import type{ CardProps } from "../../types/global";

const Card : React.FC<CardProps> =({title,description})=>{
    return(
        <div className="card">
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <Button text={"Learn more"}  ></Button>
        </div>
    )
}

export default Card