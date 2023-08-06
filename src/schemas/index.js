import * as yup from "yup";

export const basicSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(3)
        .required("Required"),
    lastName: yup
        .string()
        .min(3)
        .required("Required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Required"),
    rating: yup
        .string()
        .max(50)
        .required("Required")

})