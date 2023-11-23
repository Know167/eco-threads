import { Box } from "@mui/material";
import "./App.css";
import MenuBar from "./components/Layout/MenuBar";
import Home from "./pages/Home";
import { ProductDetails } from './pages/product/ProductDetails';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UpdateProductDetails } from './pages/product/updateproductdetails/UpdateProductDetails';
function App() {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <MenuBar />
            <Home />
        </Box>
    );
}

export default App;
