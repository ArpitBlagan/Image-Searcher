import axios from "axios";
 export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID N6g7HSVXs6TMqPnTpqgz3pgB3Y7MnU0W7v0CE2VIUwI'
    }
 });