import { redirect } from "react-router-dom";

export const action = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        redirect("/login");
    }

    return null;
};
