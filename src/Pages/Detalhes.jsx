import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import './Detalhes.css'
import { blue } from "@mui/material/colors";

const Detalhes = () => {
    const { id } = useParams()
    const [personagem, setPersonagem] = useState([])
    useEffect(() => {
        onFetch()
    }, [])
    const onFetch = async () => {
        try {

            const { data } = await axios.get(`https://api.disneyapi.dev/character/${id}`)
            console.log(data.data)
            setPersonagem(data.data)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Header text={'Disney'} />
            <body>
                <div className="container">
                    <h1 style={{color:"black"}}>{personagem.name}</h1>
                    <div className="grid">
                            <div >
                                <img src={personagem.imageUrl} alt="" srcset="" />
                            </div>
                            <div className="detalhes">
                                 <h2>Detalhes</h2>
                                 <p>Nome :<strong>{personagem.name}</strong></p>
                                 <p>CreatedAt :<strong>{personagem.createdAt}</strong></p>
                                 <p>UpdatedAt :<strong>{personagem.updatedAt}</strong></p>
                                 <p>SourceUrl :<strong>{personagem.sourceUrl}</strong></p>
                                 <p>Url :<strong>{personagem.url}</strong></p>
                                 <p>__v :<strong>{personagem.__v}</strong></p>                   
                            </div>
                    </div>
                </div>
            </body>
            <Footer />
        </>

    );
}

export default Detalhes;