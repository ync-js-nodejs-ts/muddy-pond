type TRulesFormPrayRequest = {
  prayRequest: {
    required: { value: true; message: string }
    maxLength: { value: number; message: string }
    minLength: { value: number; message: string }
  }
}

export const rules: TRulesFormPrayRequest = {
  prayRequest: {
    required: { value: true, message: 'Petición de oración obligatoria' },
    maxLength: { value: 400, message: 'Maximo 400 letras' },
    minLength: { value: 10, message: 'Minimo 10 letras' },
  },
}
