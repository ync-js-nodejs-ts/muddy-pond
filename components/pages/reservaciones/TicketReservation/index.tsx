type TTicketReservationProps = {
  user: {
    fullname: string
    reservations: number
    scheduleWorship: string
  }
  isActive: boolean
}

export const TicketReservation = ({ user, isActive }: TTicketReservationProps) => {
  return <div className={`${!isActive && 'hidden'} IsActive`}>Modal</div>
}
