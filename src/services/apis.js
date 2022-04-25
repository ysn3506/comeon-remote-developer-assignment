import API from "./api-base";

export const userLogin=(user)=>API.post("/login", JSON.stringify({ username: user.username, password: user.password }))
export const userLogout=(username)=>API.post("/login", { username })
export const getCategories=()=> API.get("/categories")
export const getGames =async () => {
    const response =await API.get("/games")
    return response.data;
}



