import { Footer } from '@/components/footer'
import { ImageLayout } from '@/components/imageLayout'
import { Navbar } from '@/components/navbar'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Tanatopraxia = () => (
  <>
    <Head>
      <title>Funeriaria N. Sra. de Lourdes - Tanatopraxia</title>
    </Head>
    <Navbar />

    <ImageLayout
      image="/images/tanatopraxia.webp"
      title=""
      text=""
      button={false}
    />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/tanato.png"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Entenda como funciona a técnica de Tanatopraxia
            </h1>

            <p className="text-xl my-4 text-gray-500">
              Quando passamos pelo processo de perda de um ente querido, a
              última aparência é aquela que fica para sempre na nossa memória. A
              realização da <strong>tanatopraxia</strong> se constitui num gesto
              de amor e carinho, pois além de amenizar as transformações
              próprias do corpo, contribui no processo do luto.
            </p>
            <p className="text-xl my-4 text-gray-500">
              Fale com um dos nossos colaboradores e tenha mais informações.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-80 md:my-40 lg:my-40"></section>

    <div className="bg-gray-50 py-5">
      <div className="container my-24 px-6 mx-auto">
        <section className="flex flex-col items-center mb-32 text-gray-800">
          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              <strong>
                tanatopraxia é uma técnica de preparação de cadáver
              </strong>
              , que garante uma aparência mais tranquila ao falecido e promove a
              serenidade no momento do velório. Além disso, ela garante a
              segurança e a conservação do corpo durante todo o sepultamento:
            </p>
            <p className="my-4">
              A prática consiste na higienização e conservação dos corpos, por
              meio de injeção de líquidos, a fim de garantir uma boa última
              apresentação. Hoje, a técnica já está consolidada no mercado
              funerário.
            </p>
            <p className="my-4">
              Um profissional responsável pela tanatopraxia é conhecido como
              tanatopractor e a profissão exige curso técnico avançado na área.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Níveis de tanatopraxia
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Para cada caso é necessário um procedimento diferente. Assim, é
              possível afirmar que a tanatopraxia está dividida em{' '}
              <strong>três níveis de recomendações</strong>, são eles:
            </p>
            <ul className="mx-20 indent-1 list-disc">
              <li>
                <strong>nível 1:</strong>&nbsp; corpos que serão velados por um
                período de até 12 horas;
              </li>
              <li>
                <strong>nível 2:</strong>&nbsp; corpos que serão velados por até
                24 horas e translados intermunicipais;
              </li>
              <li>
                <strong>nível 3:</strong>&nbsp; corpos necropsiados (IML ou SVO)
                e para translados interestaduais ou internacionais.
              </li>
            </ul>

            <p className="my-4">
              Diante dessa determinação, é preciso avaliar quais as necessidades
              de cada atendimento para oferecer o melhor serviço,{' '}
              <strong>de forma responsável e empática</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Como a tanatopraxia ajuda a família?
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              O impacto da tanatopraxia é muito grande na família. Como já
              destacamos, essa prática{' '}
              <strong>previne situações desagradáveis durante o velório</strong>
              , como odores, inchaço e liberação de fluidos. Além disso, a{' '}
              <strong>aparência mais serena e natural</strong> proporcionada à
              pessoa que faleceu ajuda a minimizar o impacto provocado pelo
              velório e evita uma situação que pode ser traumática.
            </p>

            <p className="my-4">
              É uma forma de{' '}
              <strong>
                trazer maior conforto e tranquilidade ao momento do adeus
              </strong>
              , pois confere uma <strong>aparência de paz</strong> à pessoa que
              se foi, o que pode aliviar o luto. Além disso, desfigurações que
              podem acontecer ou de precisar realizar o sepultamento com caixão
              fechado.
            </p>

            <p className="my-4">
              Quando são seguidos todos os procedimentos éticos e legais, é
              possível oferecer{' '}
              <strong>
                uma despedida mais digna, com respeito à história da pessoa que
                se foi
              </strong>
              . Isso permite também maior tempo para que seja feita a cerimônia.
              É um amparo importante para amenizar as dores provocadas pela
              perda e evitar que se guarde uma imagem desagradável de quem
              faleceu.
            </p>

            <p className="my-4">
              Como vimos, a tanatopraxia é um procedimento importante para os
              óbitos, pois previne uma série de problemas que podem acontecer
              aparência à pessoa que se foi. Assim, é um serviço que precisa ser
              conhecido, para que a família compreenda a sua contribuição para o
              processo funerário e os prejuízos de não fazê-lo.
            </p>

            <p className="my-4">
              A tanatopraxia também pode ser imprtante em situações de morte
              violenta, em que haja a necessidade da reconstrução facial ou que
              seja aplicada alguma técnica específica de preservação.
            </p>
          </div>

          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="text-4xl font-bold text-gray-600 text-center mt-8 mb-3">
              Temos os melhores profissionais de tanatopraxia
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

export default Tanatopraxia
