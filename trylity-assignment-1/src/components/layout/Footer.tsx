import "../../styles/footer.css"
import type{ FooterProps } from "../../types/global"

const Footer : React.FC<FooterProps> = ({title,year})=>{
    return(
        <footer className="footer">
            <h2 className="title">{title}</h2>
            <span>{"@"}</span>
            <p>{year}</p>
        </footer>
       
    )
}

export default Footer