export const Spinner = ({ message }: { message?: string }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center text-center'>
      <div className='lds-dual-ring'></div>
      <p style={{ textShadow: '1px 1px 5px rgba(0, 0, 0, 0.466)' }} className='text-sm text-white font-semibold'>
        {message ? message : 'Cargando Reservaciones Disponibles'}
      </p>
    </div>
  )
}
