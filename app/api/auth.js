// import { useContext } from "react";
// import jwtDecode from "jwt-decode";

import client from "./client"
// import AuthContext from "./context";
// import authStorage from "./storage";

// export default useAuth = () => {
//     const { user, setUser } = useContext(AuthContext);

const login = (email, password) => client.post("/auth", { email, password })

export default {
    login
}

//     const logOut = () => {
//         setUser(null);
//         authStorage.removeToken();
//     };

//     return { user, logIn, logOut };
// };