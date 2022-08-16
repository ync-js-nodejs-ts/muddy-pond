export const normalizeMessageContact = async (fullname, email, messageContact) => {
  const message = {
    to: 'lcpcaracas@gmail.com',
    from: 'script.kev@gmail.com',
    subject: `Contacto - ${fullname}`,
    html: `<b>Nombre:</b> ${fullname} - <b>Email:</b> ${email}
      <br/>
      <p>${messageContact}</p>`,
  }

  return message
}

export const normalizePrayRequest = async (prayRequest: string) => {
  const message = {
    to: 'lcpcaracas@gmail.com',
    from: 'script.kev@gmail.com',
    subject: `Peticion de Oración`,
    html: `<b><h2>Peticion de Oración</h2></b>
      <br/>
      <p>${prayRequest}</p>`,
  }

  return message
}
