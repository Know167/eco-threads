import React from 'react';
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify"
import { ValidationErrorMessage } from '../../components/ValidationErrorMessage';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button } from '@mui/material';
import { Input } from '@mui/material';
import "./ProductDetails.css"
export const ProductDetails = () => {

    const [productDetail, setproductDetail] = useState([]);
    const ValidationSchema = Yup.object().shape({

        productTitle: Yup.string().required("Title is required"),
        productStartDate: Yup.string().required("Date is required"),
        productEndDate: Yup.string().required("Date is required"),
        productDescription: Yup.string().required("Product Description is required"),
        productImage: Yup.string().required("Image is required"),
    })
    const onSelectFile = (e, setFieldValue, setFieldError) => {
        const files = e.target.files;
        if (files?.length) {
            const fileSelected = e.target.files[0];
            const fileNameArray = fileSelected.name.split(".");
            const extension = fileNameArray.pop();
            if (["png", "jpg", "jpeg"].includes(extension?.toLowerCase())) {
                const reader = new FileReader();
                reader.readAsDataURL(fileSelected);
                reader.onload = function () {
                    setFieldValue("productImage", reader.result);
                };
                reader.onerror = function (error) {
                    throw error;
                };
            } else {
                toast.error("only jpg,jpeg and png files are allowed");
            }
        } else {
            setFieldValue("productImage", "");
        }
    };
    return (
        <>
            <div className='product-details-page'>
            <div className='product-detail-header'><h3>ProductDetails</h3></div>
            
            <div className='product-details-form'>
                <Formik initialValues={{
                    productTitle: "",
                    productStartDate: null,
                    productEndDate: null,
                    productDescription: "",
                    productImage: "",
                }}
                    validationSchema={ValidationSchema}
                    onSubmit={data => {

                    }}>

                    {({ values, handleChange, handleBlur, errors, handleSubmit, touched, setFieldValue, setFieldError }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="product-form-input-field">
                                <TextField
                                    label="Title"
                                    name="productTitle"
                                    type="productTitle"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    variant="outlined"
                                    sx={{ width: 100 + "%" }}
                                />
                                <ValidationErrorMessage message={errors.productTitle} touched={touched.productTitle} />
                            </div>
                            <div className='product-form-row'>
                            <div className='product-form-input-field'>

                                <DemoContainer required components={["DatePicker", "DatePicker"]}>
                                    <DatePicker
                                        label="Start Date"
                                        value={values.productStartDate}
                                        required
                                        format="DD-MM-YYYY"
                                        sx={{ width: 100 + "%" }}
                                        onChange={(newValue) => setFieldValue("productStartDate", newValue)}
                                        disablePast
                                    />
                                </DemoContainer>

                                <ValidationErrorMessage message={errors.productStartDate} touched={touched.productStartDate} />
                            </div>
                            
                            <div className='product-form-input-field'>
                                <DemoContainer required components={["DatePicker", "DatePicker"]}>
                                    <DatePicker
                                        label="End Date"
                                        value={values.productEndDate}
                                        required
                                        format="DD-MM-YYYY"
                                        sx={{ width: 100 + "%" }}
                                        onChange={(newValue) => setFieldValue("productEndDate", newValue)}
                                        disablePast
                                    />
                                </DemoContainer>

                                <ValidationErrorMessage message={errors.productStartDate} touched={touched.productStartDate} />
                            </div>
                            </div>
                            <div className="product-form-input-field">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    name="productDescription"
                                    type="productDescription"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{ width: 100 + "%" }}
                                />
                                <ValidationErrorMessage message={errors.productDescription} touched={touched.productDescription} />
                            </div>
                            <div className="product-form-input-field">
                                {!values.productImage && (
                                    <>
                                        {" "}
                                        <label
                                            htmlFor="contained-button-file"
                                            className="file-upload-btn"
                                        >
                                            <Input
                                                id="contained-button-file"
                                                type="file"
                                                name="productImage"
                                                inputProps={{ className: "small" }}
                                                onBlur={handleBlur}
                                                onChange={(e) => {
                                                    onSelectFile(e, setFieldValue, setFieldError);
                                                }}
                                            />
                                            <Button
                                                variant="contained"
                                                component="span"
                                                className="btn pink-btn"
                                            >
                                                Upload
                                            </Button>
                                        </label>
                                        <ValidationErrorMessage
                                            message={errors.productImage}
                                            touched={touched.productImage}
                                        />
                                    </>
                                )}
                                {values.productImage && (
                                    <div className="uploaded-file-name">
                                        <em>
                                            <img src={values.productImage} className="img-upload" width="30%" height="30%" alt="" />
                                        </em>
                                        <Button
                                            style={{ marginLeft: 2 + "rem" }}
                                            variant="contained"
                                            component="span"
                                            color="error"
                                            onClick={() => {
                                                setFieldValue("productImage", "");
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )}

                            </div>
                            <div className="product-form-input-field">
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            </div>
        </>
    )
}
