const yup = require("yup");


const carSchema = yup.object({
  body: yup.object({
    marca: yup.string().required(),
    modelo: yup.string().min(8).max(255).required(),
    ano: yup.number().min(1950).max(2023).required(),
    cor: yup.string().min(4).max(16).required(),
    qtd_passageiros: yup.number().min(4).max(7).required(),
    placa: yup.string().max(7).min(7).required(),
  }),
  params: yup.object({
    id: yup.string(),
  }),
});



module.exports = carSchema;