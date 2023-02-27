import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { ImageLayout } from '@/components/imageLayout'
import { Navbar } from '@/components/navbar'
import { TextCard } from '@/components/textCard'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Orientacoes = () => (
  <>
    <Head>
      <title>Funerária N. Sra. de Lourdes - Orientações</title>
    </Head>
    <Navbar />

    <ImageLayout
      image="/images/cemetery-3.jpeg"
      title="Passo a passo"
      text="Do que fazer quando um ente querido falece!"
      button={false}
    />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/luto.jpg"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Entendemos que esse é um momento de muita dor que nos deixa um
              pouco desorientados
            </h1>

            <p className="text-xl my-4 text-gray-500">
              Quando um ente querido se vai, uma parte de nós também se perde.
              Seja uma avó, avô, pai, mãe, irmão, tio… Dá sempre aquela sensação
              de que a pessoa foi cedo demais e nesses momentos encontrar
              serenidade para tratar do funeral é muito doloroso, por isso
              estamos listando o que você deve fazer quando esse dia chegar,
              pois ele vem para todos nós.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-80 md:my-40 lg:my-40"></section>

    <div className="bg-gray-50 py-5">
      <div className="container my-24 px-6 mx-auto">
        <section className="flex flex-col items-center mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-6">
            Listamos alguns passos para lhe ajudar
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <TextCard text="Mantenha a calma" number="1º" />
            <TextCard text="Ligue para a funerária" number="2º" />
            <TextCard text="Agora tudo é com a funerária" number="3º" />
            <TextCard
              text="Escolha da urna/caixão conforme decisão da família"
              number="4º"
            />
            <TextCard text="Solicitar declaração de óbito" number="5º" />
            <TextCard text="Efetivar a liberação do corpo" number="6º" />
            <TextCard text="Translado do corpo" number="7º" />
            <TextCard text="Paramentação e ornamentação" number="8º" />
            <TextCard text="Liberação para o sepultamento" number="9º" />
            <TextCard
              text="Em caso de viagem, liberação junto a polícia civil"
              number="10º"
            />
            <TextCard
              text="Organizar a despedida e fechar a urna funerária"
              number="11º"
            />
            <TextCard text="Assistência aos familiares" number="12º" />
          </div>

          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="text-4xl font-bold text-gray-600 text-center mt-20 mb-3">
              Esses são alguns passos que ocorre em todo funeral
            </h1>

            <p className="text-xl text-gray-600 my-4 text-center">
              Esperamos que essas informações lhe ajude nesse momento difícil,
              caso você precise de mais orientações, estamos à sua disposição!
            </p>

            <Link
              href="https://wa.me/+5581999458760"
              className="bg-whatsapp my-5 hover:bg-whatsapp-dark text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded text-2xl"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ marginRight: '.6rem' }}
              />
              Fale conosco
            </Link>
          </section>
        </section>
      </div>
    </div>
    <Footer />
  </>
)

export default Orientacoes
