import mongoose, { Schema, models } from 'mongoose';

// aqui, já utilizo termos em português
const userSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      unique: true,
      required: true,
    },
    celular: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Usuario = models.Usuario || mongoose.model('Usuario', userSchema);
export default Usuario;
