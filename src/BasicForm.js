import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .required()
    .min(5, "Need a valid email"),
  password: yup
    .string()
    .required("Enter a valid password")
    .min(8, "Need a long password")
    .max(12, "Password is too long"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Onsubmit", values);
    },
  });
  return (
    <div>
      <h2>Basic Form</h2>
      <br></br>
      <form onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
          type="email"
          placeholder="email"
        ></input>
        <br></br>
        {formik.touched.email && formik.errors.email
          ? formik.errors.email
          : " "}
        <br></br>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="password"
          name="password"
          type="password"
          placeholder="password"
        ></input>
        <br></br>
        {formik.touched.password && formik.errors.password
          ? formik.errors.password
          : " "}
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
