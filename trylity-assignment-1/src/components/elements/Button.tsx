import "../../styles/button.css"

import type { ButtonProps } from "../../types/global"

const Button : React.FC<ButtonProps> =({text})=>{
    return(
        <div className="button-container">
            <button className="btn">{text}</button>
        </div>
    )
}

export default Button