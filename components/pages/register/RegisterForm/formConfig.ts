export const rules = {
  username: {
    required: { value: true, message: 'Nombre de usuario obligatorio' },
    maxLength: { value: 25, message: 'Maximo 25 letras' },
    minLength: { value: 2, message: 'Minimo 2 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre de usuario no permitido' },
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
