import { mailOptions, transporter } from "@/config/nodemailer"
import { NextApiRequest, NextApiResponse } from "next"

const CONTACT_MESSAGE_FIELDS: any = {
  name: "Nome",
  email: "Email",
  fone: "Whatsapp",
  subject: "Assunto",
  message: "Mensagem"
}

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce((str: any, [key, value]) => {
    return str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value}}\n\n` 
  }, "")

  const htmlData = Object.entries(data).reduce((str: any, [key, value]) => (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${value}</p>`), ""
  )

  return {
    text: stringData,
    html: htmlData
  }
}
const handle: any = async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST") {
    const data = req.body

    console.log(data.name)

    if(!data.name || !data.email || !data.fone || !data.subject) {
      res.status(400).json({ name: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject
      })
    } catch (err: any) {
      res.status(400).json({ message: err.message })
    }
  }

  res.status(400).json({ name: 'Bad request' })
}

export default handle