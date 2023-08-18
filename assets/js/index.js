console.log("Sesión js09 NPM y Axios");

const apiFetch = document.getElementById("apiFetch");
const apiAxios = document.getElementById("apiAxios");

apiFetch.onclick = async () => {
    const responseJson = await fetch("https://fakestoreapi.com/products");
    const response = await responseJson.json();
    console.log(response);
}

/**
 * Solicitud HTTP usando Axios
 */
apiAxios.onclick = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
}