import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
const Formulario = () => {
  // estado
  // funcion para el submit
  // funcion para los onchange

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: { name: "", email: "", phoneNumber: "" },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("campo requerido")
        .min(5, "minimo 5 caracteres"),
      email: Yup.string()
        .required("campo requerido")
        .email("el email no es valido"),
      phoneNumber: Yup.string()
        .required("campo requerido")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,20}$/, "Formato inválido"),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <TextField
          label="nombre"
          name="name"
          error={errors.name ? true : false}
          helperText={errors.name}
          onChange={handleChange}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <span style={{ color: "crimson" }}>{errors.email}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="telefono"
            name="phoneNumber"
            onChange={handleChange}
          />
          <span style={{ color: "crimson" }}>{errors.phoneNumber}</span>
        </div>

        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
