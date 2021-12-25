import axios from "axios";

const Api_key = '24842544-c3aee8a5535c3e6fec69ecf8d';
const url = "https://pixabay.com/api/";

export const getImages = (text,count) => {
    try
    {
        const data= axios.get(`${url}/?key=${Api_key}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }
    catch(error)
    {
        console.log(error);
    }
}
