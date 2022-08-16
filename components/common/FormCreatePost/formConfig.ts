export const rules = {
  title: {
    required: { value: true, message: 'Titulo obligatorio' },
    maxLength: { value: 20, message: 'Maximo 20 letras' },
    minLength: { value: 5, message: 'Minimo 5 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Titulo no permitido, use caracteres validos' },
  },

  description: {
    required: { value: true, message: 'Descripcción obligatoria' },
    maxLength: { value: 125, message: 'Maximo 125 letras' },
    minLength: { value: 5, message: 'Minimo 5 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Descripcción no permitida, use caracteres validos' },
  },
}
