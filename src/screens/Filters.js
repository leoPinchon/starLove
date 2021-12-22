import Cards from "../components/Cards"
import Header from "../components/Header"
import Galaxy from "../assets/galaxy01.png"
import Filtre from "../components/Filtre"
import ChatPage from "./ChatPage"
import Timer from "../components/Timer"

import {useState} from "react"



import "../styles/Filter.css"

export default function Filters()  {
 const [charactersTabFiltered, setCharactersTabFiltered] = useState([]);
  


        return (
            <div className="filters">
                <Header />
                <img className="filters-galaxy" src={Galaxy} alt="galaxy"></img>
                <img className="filters-galaxy2" src={Galaxy} alt="galaxy"></img> 
                <div className="filter-box">
                <div className="title-filter"><h2>Bienvenue :</h2></div>
                <div className="title-filter"><h2>Choisissez vos filtres :</h2></div> 
                    <div className="holder-filter-container">
                        <div className="filter-container">
                            <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="gender" nameDisplay="Genre" /></div>
                            <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="species" nameDisplay="Espèces"/></div>
                            {/* <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="height" nameDisplay="Taille"/></div>
                            <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="mass" nameDisplay="Poids"/></div> */}
                          
                        </div>
                    </div>
                       <Cards charactersTabFiltered={charactersTabFiltered}/>
                </div> 
                <div className="filters-Chat">
<<<<<<< HEAD
                    <ChatPage  />
=======
                    <ChatPage /> 
                    <Timer></Timer>
>>>>>>> c60ea518570d5f3b6adeeb5c74938691aa53e48a
               
                </div>

            </div>
        )
}

