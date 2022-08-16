export const rules = {
  identifier: {
    required: { value: true, message: 'Campo Obligatorio' },
    min: { value: 2, message: 'Minimo 2 letras' },
    max: { value: 50, message: 'Maximo 50 letras' },
  },

  email: {
    required: { value: true, message: 'Correo obligatorio' },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Coloque un correo valido',
    },
  },

  password: {
    required: { value: true, message: 'Contraseña obligatoria' },
    minLength: { value: 4, message: 'Minimo 4 letras' },
  },
}
