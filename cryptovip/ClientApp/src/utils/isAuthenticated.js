export default () => {
    const token = sessionStorage.token;
    let val = token !== undefined && token !== null && token != "" && token !== "null" && token !== "undefined";
    return val;
};