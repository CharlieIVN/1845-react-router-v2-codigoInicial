import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setDat) => {
    const respuesta = await api.get(url)
    setDat.Data(respuesta.data)
}
