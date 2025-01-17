import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = 'https://talentchat.online/api'

// export const postRequest = async (route,data) => {
//     let url = process.env.REACT_APP_API_BASE_URL + route
//     const token = Cookies.get("token");
//     return await axios.post(url, data
//         , {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }
// );
// }

// export const putRequest = async (route,data) => {
//     let url = process.env.REACT_APP_API_BASE_URL + route
//     const token = Cookies.get("token");
//     return await axios.put(url, data
//         , {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }
// );
// }

export const getRequest = async (route: string, params?: any) => {
    // let url = process.env.REACT_APP_API_BASE_URL + route;
    let url = baseURL + route
    const token = Cookies.get("token");
    
    return await axios.get(url, {
        params,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

