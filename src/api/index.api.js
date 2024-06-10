import axios from "axios"

export const getInfo = async (prod) => {
    const resp = await axios(`https://jsonplaceholder.typicode.com/${prod}`)
    console.log(resp.data);
    return resp.data
}