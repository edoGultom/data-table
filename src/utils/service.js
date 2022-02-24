import axios from "axios";

export function requestGetAxios({ url, params }) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((ress) => resolve(ress.data))
            .catch((err) => reject(err))
    })
}