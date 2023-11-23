import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Box } from "@mui/material";
import "./App.css";
import MenuBar from "./components/Layout/MenuBar";
import Home from "./pages/Home";
import { ProductDetails } from "./pages/product/ProductDetails";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { UpdateProductDetails } from "./pages/product/updateproductdetails/UpdateProductDetails";
import { Login } from "./pages/login/Login";import { ProductDetails } from "./pages/product/ProductDetails";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { UpdateProductDetails } from "./pages/product/updateproductdetails/UpdateProductDetails";
import { Login } from "./pages/login/Login";
import { action as authAction } from "./actions/authAction";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Login />,
        },
        {
            path: "/home",
            element: (
            <Box component="main" sx={{ p: 3 }}>
                        <MenuBar />
                        <Home />
                    </Box>
            ),
            action: authAction,
        },
        {
            path: "/add-product",
            element: (
                <Box component="main" sx={{ p: 3 }}>
                    <MenuBar />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <ProductDetails />
                    </LocalizationProvider>
                </Box>
            ),
            action: authAction,
        }
    ]);
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    )
}


export default App;
