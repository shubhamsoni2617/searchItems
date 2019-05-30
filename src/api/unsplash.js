import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
headers:{
    Authorization: 'Client-ID 211d4367ed2908297da3f36c79df54f3c55641da4fda7aa718c1f3573fefc6f7'
}

})