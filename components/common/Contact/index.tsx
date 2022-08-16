import { EmailContact, WhatsappContact } from 'components/pages/contactanos/FormContact'
import { Tabs } from '../Tabs'

export const Contact = () => {
  return (
    <div className='w-full max-w-md mx-auto mt-10 text-center flex items-center flex-col'>
      <h3 className='text-3xl font-semibold text-lcpYellow-500'>Contáctanos</h3>
      <Tabs>
        <div itemProp='Correo'>
          <EmailContact />
        </div>

        <div itemProp='Whatsapp'>
          <WhatsappContact />
        </div>
      </Tabs>
    </div>
  )
}
