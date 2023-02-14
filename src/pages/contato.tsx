import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { sendContactForm } from '@/lib/api'
import Head from 'next/head'
import { useState } from 'react'

const initValues = {
  name: '',
  email: '',
  fone: '',
  subject: '',
  message: ''
}

const initState = { values: initValues }
let message: string
let color: string

const Contato = () => {
  const [state, setState] = useState(initState)

  const { values } = state

  const handleChange = ({ target }: any) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))

  const onSubmit = async () => {
    setState(prev => ({
      ...prev
    }))

    try {
      if (values.name && values.email && values.fone && values.subject) {
        message = 'Enviado com sucesso!'
        color = 'green'
        await sendContactForm(values)
      }

      message = 'preencha os campos obrigatorios'
      color = 'red'
    } catch (err: any) {
      setState(prev => ({
        ...prev
      }))
    }
  }

  return (
    <>
      <Head>
        <title>Funeriaria N. Sra. de Lourdes - Cremação</title>
      </Head>
      <Navbar />

      <section className="flex flex-wrap justify-center md:justify-between lg:justify-between gap-x-4 mx-10 py-10">
        <h2 className="text-4xl font-bold text-center my-12 md:my-0">
          Estamos à sua disposição
        </h2>
        <div className="mx-6 text-center my-4 md:my-0">
          <h2 className="text-xl font-bold">Horário de atendimento</h2>
          <p className="text-gray-600 my-2">
            De segunda a segunda 24 horas por dia
          </p>
        </div>
        <div className="text-center my-4 md:my-0">
          <h2 className="text-xl font-bold ">Telefone</h2>
          <p className="text-gray-600 my-2">+55 (81) 99945-8760</p>
          <p className="text-gray-600 my-2">+55 (81) 98884-4480</p>
        </div>
      </section>

      <div className="flex justify-center md:justify-center lg:justify-between flex-wrap items-center bg-gray-50 py-5">
        <div className=" my-24 px-4 py-4 mx-auto mx-4">
          <h2 className="text-xl font-bold mb-5">
            Mande sua mensagem, responderemos em até 24hs
          </h2>
          <form className="w-full px-4 py-4 max-w-lg" method="post">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Nome e Sobrenome <span className="text-red-400">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
                  htmlFor="grid-email"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  name="email"
                  type="email"
                  placeholder="exemplo@exemplo.com"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
                  htmlFor="grid-whatsapp"
                >
                  Whatsapp <span className="text-red-400">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-whatsapp"
                  type="tel"
                  placeholder="(XX) X-XXXX-XXXX"
                  name="fone"
                  value={values.fone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
                  htmlFor="grid-assunto"
                >
                  Assunto <span className="text-red-400">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-assunto"
                  type="text"
                  placeholder="Assunto..."
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
                  htmlFor="grid-email"
                >
                  Mensagem <small className="text-gray-500">(opcional)</small>
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  style={{ height: '8rem' }}
                  name="message"
                  defaultValue={values.message}
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
                {message && (
                  <span className={`text-center text-${color}-400`}>
                    {message}
                  </span>
                )}
              </div>
            </div>

            <input
              className="flex-shrink-0 bg-blue border-blue text-sm border-4 text-white py-1 px-2 rounded cursor-pointer py-2 px-4 text-base font-bold disabled hover:border-blue-light hover:bg-blue-light"
              type="button"
              value="Enviar"
              onClick={onSubmit}
            />
          </form>
        </div>

        <div className="md:mr-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5317881441297!2d-34.88482258593483!3d-8.04710979420564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab188d64668a51%3A0xb8d502a7b4cffddd!2sR.%20Numa%20Pompilho%2C%20151%20-%20casa%20C%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050100-330!5e0!3m2!1spt-BR!2sbr!4v1675619339211!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
            style={{ width: '100%' }}
          />

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className=" px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1 text-indigo-400">
                R. Numa Pompilho, 151 - casa C - Santo Amaro, Recife - PE,
                50100-330
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contato
