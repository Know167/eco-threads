import { Box } from "@mui/material";
import "./App.css";
import MenuBar from "./components/Layout/MenuBar";
import Home from "./pages/Home";

function App() {
    return (
        <Box component="main" sx={{ p: 3 }}>
            <MenuBar />
            <Home />
        </Box>
    );
}

export default App;
