import "./Home.css"
import Card from "../components/cards/Card"



const Home = ()=>{
    return(
        <div className="home">
          
            <div className="content">
                <h1>Home</h1>
                <Card title={"Trility"} description={"welcome to TriLity"}/>
            </div>
            
         
        </div>
    )
}

export default Home