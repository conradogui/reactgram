export const api = "http://localhost:5000/api"
export const uploads = "http://localhost:5000/uploads"

export const requestConfig = (method, data, token = null, image = null) => {
    let config //essa variável muda baseado na requisição

    if(image) {
        config = { //essas requisições não vão usar o meio json, pois vem somente a imagem
            method,
            body: data,
            headers: {}
        }
    } else if (method === "DELETE" || data === null) {
        config = {
            method,
            headers: {},
        }
    } else { //quando vem dados para o sistema
        config = { //essas requisições vão usar o meio json
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
    }

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}