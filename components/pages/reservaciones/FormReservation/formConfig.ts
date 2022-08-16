import { IFormReservationRules, TReservationOptions } from 'types'

export const rules: IFormReservationRules = {
  name: {
    required: { value: true, message: 'Nombre obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Nombre no permitido' },
  },

  lastname: {
    required: { value: true, message: 'Apellido obligatorio' },
    maxLength: { value: 50, message: 'Maximo 50 letras' },
    minLength: { value: 3, message: 'Minimo 3 letras' },
    pattern: { value: /^[a-zA-ZÀ-ÿ0-9 ()-.]*$/, message: 'Apellido no permitido' },
  },

  phone: {
    required: { value: true, message: 'Telefono obligatorio' },
    maxLength: { value: 15, message: 'Maximo 15 numeros' },
    minLength: { value: 10, message: 'Minimo 10 numeros' },
    pattern: { value: /^[0-9]*$/i, message: 'Solo Numeros' },
  },

  email: {
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Coloque un correo valido',
    },
  },

  totalReservations: {
    required: { value: true, message: 'Elija el numero de reservaciones' },
  },

  worshipShedule: {
    required: { value: true, message: 'Elija un horario' },
  },
}

export const reservationOptions: TReservationOptions = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 },
]
