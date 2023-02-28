import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { ImageLayout } from '@/components/imageLayout'
import { Navbar } from '@/components/navbar'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <>
    <Head>
      <title>Funeriaria N. Sra. de Lourdes</title>
    </Head>

    <Navbar />

    <ImageLayout
      image="/images/cemetery-2.jpeg"
      title="Acolhimento familiar"
      text="No momento mais difícil precisamos contar com quem tem experiência de mercado."
      button
    />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/graveyard.jpg"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Assistência funeral completa
            </h1>

            <p className="text-2xl my-4 text-gray-500">
              Certidão de óbito, remoção, tanatopraxia, translado, higienização,
              urna/caixão, ornamentação do corpo, paramentação, coroa de flores,
              livro de presença.
            </p>

            <ul className="list-disc text-lg mx-4 text-gray-500">
              <li className="">Atendimento 24h</li>
              <li>
                Nossas consultoras estão disponíveis para ir até você mediante
                solicitação;
              </li>
              <li>
                Todos os nossos agentes funerários são capacitados para
                solucionar qualquer questão necessária, concentrando esforços
                para desempenhar seu trabalho com serenidade, dedicação e
                responsabilidade, dando assistência adequada às famílias.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="my-80 md:my-40 lg:my-40"></section>

    <div className="bg-gray-50 py-5">
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Conheça nossos serviços:
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card
              link="/urnas"
              text="Urna e caixão"
              image="/images/coffin.jpg"
              fontSize="text-4xl"
            />
            <Card
              link="/tanatopraxia"
              text="Tanatopraxia"
              image="/images/tanatopraxia.webp"
              fontSize="text-4xl"
            />
            <Card
              link="/translado"
              text="Translado"
              image="/images/translado.jpg"
              fontSize="text-4xl"
            />
            <Card
              link="/cremacao"
              text="Cremação"
              image="/images/urna.jpg"
              fontSize="text-4xl"
            />
            <Card
              link="/floricultura"
              text="Floricultura"
              image="/images/rosa.jpg"
              fontSize="text-4xl"
            />
            <Card
              link="/orientacoes"
              text="O que fazer?"
              image="/images/triste.jpg"
              fontSize="text-4xl"
            />
          </div>
        </section>
      </div>

      <section className="flex flex-col items-center justify-center my-4">
        <h1 className="text-2xl font-bold">Fale conosco pelo whatsapp</h1>
        <Link
          href="https://wa.me/+5581999458760"
          className="bg-whatsapp my-5 hover:bg-whatsapp-dark text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded text-2xl"
          target="_blank"
        >
          <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '.6rem' }} />
          Clique aqui
        </Link>
      </section>
    </div>

    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Solicite a rota e chegue com facilidade!
        </h2>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5317881441297!2d-34.88482258593483!3d-8.04710979420564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab188d64668a51%3A0xb8d502a7b4cffddd!2sR.%20Numa%20Pompilho%2C%20151%20-%20casa%20C%20-%20Santo%20Amaro%2C%20Recife%20-%20PE%2C%2050100-330!5e0!3m2!1spt-BR!2sbr!4v1675619339211!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
            style={{ width: '100%' }}
          />

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ENDEREÇO
              </h2>
              <p className="mt-1 text-indigo-400">
                R. Numa Pompilho, 151 - casa C - Santo Amaro, Recife - PE,
                50100-330
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed text-sm">
                funerarianossasenhoradelourdes@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                TELEFONE
              </h2>
              <p className="leading-relaxed text-indigo-400">
                +55 (81) 99945-8760
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </>
)

export default Home
