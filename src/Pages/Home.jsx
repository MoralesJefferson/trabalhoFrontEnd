import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './Home.css'
import DisneyCard from "../Components/Card/DisneyCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Grid } from "@mui/material";
import PaginationOutlined from "../Components/PaginationOutlined";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [pokemon, setPokemon] = useState([])
    let pagina = [1,2,3,4,5,6,7,8,9,10]
    const navigate = useNavigate()
    useEffect(() => {
        onFetch()
    }, [])

    const onFetch = async (num = 1) => {
        try {

            const { data } = await axios.get(`https://api.disneyapi.dev/character?page=${num}&pageSize=72`)
            console.log(data.data)
            setPokemon(data.data)
        } catch (error) {

        }
    }
    const clicou=(id)=>{
            console.log('clicou')
            navigate(`/detalhes/${id}`)
    }

    return (
        <div>
            <Header text={'Disney'}/>
            <body>
                <div className="container">
                        <div className="box">
                        {   
                            pokemon.map((poke,key)=>(
                                <div key={key}><DisneyCard name={poke.name} image={poke.imageUrl} detalhes={()=>clicou(poke._id)}/></div>
                                    
                        ))}
                        </div>
                        <div className="pagination">
                        {
                            pagina.map(pag=>(
                                <p className="page" onClick={()=>onFetch(pag)}>{pag}</p>

                            ))

                        }
                        
                                
                        </div>

                </div>
            </body>
                <Footer />
        </div>
    );
}

export default Home;