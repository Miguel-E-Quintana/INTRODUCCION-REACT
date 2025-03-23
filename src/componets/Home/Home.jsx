import CardPizza from "../CardPizza/CardPizza"
import Header from "../Header/Header"
import { pizzas } from "./pizzas"

const Home = () => {
    return (
        <>
        <section>
            <Header />
            <CardPizza pizzas={pizzas} />
        </section> 
        </>
    )
}

export default Home