import axios from 'axios'

const api = axios.create({
    baseURL: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name'
    
})

export default api;