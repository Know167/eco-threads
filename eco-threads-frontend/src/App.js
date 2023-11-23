import './App.css';
import { ProductDetails } from './pages/product/ProductDetails';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UpdateProductDetails } from './pages/product/updateproductdetails/UpdateProductDetails';
function App() {
  return (

    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <UpdateProductDetails />
      </LocalizationProvider>
    </>

  );
}

export default App;
