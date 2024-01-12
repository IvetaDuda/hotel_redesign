import * as yup from "yup";
import { regexPhone } from "@/helpers/regularExspression";

export const YupFormSchema = yup.object({
    userName: yup
        .string()
        .required("Username is required"),
    tel: yup
        .string()
        .required("Phone is required")
        .matches(regexPhone, "+380123456789"),
    email: yup
        .string()
        .email("Email format is not valid")
        .required("Email is required"),
    message: yup
        .string()
        .required("Comment is required"),
});