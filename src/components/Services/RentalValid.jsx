import * as Yup from "yup";

const validationSchema=
    Yup.object({
        returnDate: Yup.date().min(new Date(),"bugunen").required('Required'),
    });

export default validationSchema;