import axios from "axios";


export default (history = null) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    let headers = { 'Content-Type': 'application/json' };

    if (sessionStorage.token) {
        headers.Authorization = `Bearer ${sessionStorage.token}`;
    }

    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers,
    });

    axiosInstance.interceptors.response.use((response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
        (error) => {
            return new Promise((resolve, reject) => {
                reject(error);
            })
        }
    )

    return axiosInstance;
}

//export default axiosInstance;

// {
//   const axiosInstance = axios.create({
//     baseURL: baseUrl,
//     headers,
//   });
//   axiosInstance.interceptors.response.use(
//     (response) =>
//       new Promise((resolve, reject) => {
//         resolve(response);
//       }),
//     (error) => {
//       debugger;
//       if (!error.response) {
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }

//       if (error.response.status === 401) {
//         sessionStorage.removeItem("token");
//         if ("history") {
//           //history.push("/login-page");
//         } else {
//           window.location = "/login-page";
//         }
//       } else {
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }
//     }
//   );

//   return axiosInstance;
// };
