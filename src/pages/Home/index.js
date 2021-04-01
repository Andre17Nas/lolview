import React, { useState, useEffect } from  'react'
import './home.css'
import { MdSearch } from 'react-icons/md'
import api from '../../services/api'


export default function Home(){

    const [summonerName, setSummonerName] = useState('')
    const [dados, setDados] = useState([])


    function handleInputChange(e){
        setSummonerName(e.target.value)
    }


    async function handleSubmit(e){
        e.preventDefault();

        console.log(summonerName)
        
        const response = await api.get(`${summonerName}?api_key=?`)
        
        console.log('essa e a resposta:'+response.data)

    }

    return(
        <div className="container">
            <side>
                <h1>MY NICKNAME</h1>
                <div className="elo-container">
                    <div id="ranked-emblema">
                    </div>
                    <div id="ranked-text">
                        <h5>Bronze 3</h5>
                        Soloqueue<br/>
                        <span>Wins:</span> 21<span>Losses:</span>35
                    </div>
                    <div id="flex-emblema">
                        
                    </div>
                    <div id="flex-text">
                        <h5>Prata 4</h5>
                        Flex 5X5<br/>
                        <span>Wins:</span> 21<span>Losses:</span>35
                    </div>
                </div>
            </side>
            <div className="container-right">
                <div className="search">
                      <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="NOME DE INVOCADOR" id="input" onChange={handleInputChange}/>
                        <button type="submit"><MdSearch size={40} id="icon-search"/></button>
                      </form>
                </div>
                <section>
                    <div className="stats-history">
                        <img id="match-my-champion">

                        </img>
                        <div id="match-stats">
                            VITÓRIA
                        </div>
                        <table>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                        </table>
                    </div>

                    <div className="stats-history">
                        <img id="match-my-champion">

                        </img>
                        <div id="match-stats">
                            VITÓRIA
                        </div>
                        <table>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                        </table>
                    </div>

                    <div className="stats-history">
                        <img id="match-my-champion">

                        </img>
                        <div id="match-stats">
                            VITÓRIA
                        </div>
                        <table>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                        </table>
                    </div>

                    <div className="stats-history">
                        <img id="match-my-champion">

                        </img>
                        <div id="match-stats">
                            VITÓRIA
                        </div>
                        <table>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                        </table>
                    </div>

                    <div className="stats-history">
                        <img id="match-my-champion">

                        </img>
                        <div id="match-stats">
                            VITÓRIA
                        </div>
                        <table>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                        </table>
                    </div>

                    <div className="stats-history">
                        <img id="match-my-champion">

                        </img>
                        <div id="match-stats">
                            VITÓRIA
                        </div>
                        <table>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                            <tr>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}