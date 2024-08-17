
import axios from 'axios'

export const axiosCommon = axios.create({
    baseURL: 'https://tech-finder-server.vercel.app',
})
const useAxiosCommon = () => {
    return axiosCommon
}

export default useAxiosCommon
