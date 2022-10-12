const yup = require("yup");


const addressSchema = yup.object({
  body: yup.object({
    foto_url: yup.string().url(),
    endereco: yup.string().min(8).max(255).required(),
    nome_endereco: yup.string().min(5).max(32).required(),
    numero: yup.number().required(),
    telefone: yup.number().required(),
    cep: yup.string().max(12).required(),
  }),
  params: yup.object({
    id: yup.string(),
  }),
});



module.exports = addressSchema;