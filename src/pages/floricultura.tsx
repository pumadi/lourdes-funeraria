import { Footer } from '@/components/footer'
import { ImageLayout } from '@/components/imageLayout'
import { Navbar } from '@/components/navbar'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Floricultura = () => (
  <>
    <Head>
      <title>Funeriaria N. Sra. de Lourdes - Floricultura</title>
    </Head>
    <Navbar />

    <ImageLayout image="/images/rosa.jpg" title="" text="" button={false} />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/flores.jpg"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Flores para o velório e seus significados
            </h1>

            <p className="text-xl my-4 text-gray-500">
              A <strong>coroa de flores para o funeral</strong> pode contar com
              apenas um tipo de flor ou ser feita com uma mescla de tipos de
              flores, dependendo do gosto de quem faz encomenda. As flores
              escolhidas também podem lembrar a pessoa falecida, sendo de algum
              tipo que ela mais gostava em vida ou com cores que lembram alguma
              característica de quem se foi: alegria, delicadeza, carinho,
              força, elegância, entre outras.
            </p>
            <p className="text-xl my-4 text-gray-500">
              As <strong>coroas para velório</strong> podem ser enviadas tanto
              em cerimônias funerais - como velórios, enterros e cremações -
              quanto para homenagear entes queridos em datas como o dia de
              finados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-80 md:my-40 lg:my-40"></section>

    <div className="bg-gray-50 py-5">
      <div className="flex flex-col items-center container my-24 px-6 mx-auto">
        <section className="flex flex-col items-center mb-32 text-gray-800 max-w-4xl">
          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              As <strong>coroas de flores para velório</strong> são uma
              excelente alternativa para mesclar flores com cores variadas,
              tornando o arranjo de flor ainda mais rico em significado e
              beleza, como pede um momento tão delicado.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8">
            Veja os significados de cada flor para velório.
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <h3 className="text-xl font-bold mb-6 mt-5">1) Crisântemo</h3>
            <p className="my-4 ml-6 sm:ml-12">
              Um dos tipos de flores mais utilizadas em homenagens fúnebres é o
              crisântemo.
            </p>
            <p className="my-4 ml-6 sm:ml-12">
              Apesar de ter origem asiática, seu nome vem do grego e significa
              "flor de ouro". Nos velórios, é mais comum encontrarmos
              crisântemos brancos ou amarelos. Porém, é possível encontrá-los em
              diferentes cores na natureza.
            </p>
            <p className="my-4 ml-6 sm:ml-12 font-bold">
              O crisântemo representa a vida completa, sinceridade, simplicidade
              e perfeição.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">2) Rosa branca</h3>

            <p className="my-4 ml-6 sm:ml-12">
              A rosa branca tem um significado puro devido à sua coloração. Por
              ser mais clara, lhe é atribuída a{' '}
              <strong>representação da paz e da harmonia</strong>. Outros
              significados genuínos, como esperança, pureza, amor eterno,
              lealdade e inocência, também são relacionados à rosa branca.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">3) Margarida</h3>

            <p className="my-4 ml-6 sm:ml-12">
              Não tão comum em velórios, mas ainda assim muito bonita e
              especial.{' '}
              <strong>
                A margarida é um dos tipos de flores que exprimem o sentimento
                de amor associado às boas lembranças
              </strong>
              . Além disso, representa certa inocência e pureza, sendo muito
              indicada para compor as cores de flores dedicadas às crianças e
              jovens.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">4) Copo-de-leite</h3>

            <p className="my-4 ml-6 sm:ml-12">
              Um dos tipos de flores mais delicados é o{' '}
              <strong>
                <Link
                  href="https://www.vivadecora.com.br/revista/copo-de-leite/"
                  target="_blank"
                  className="text-red-400"
                >
                  copo-de-leite
                </Link>
              </strong>
              . Suas principais características são a beleza rústica, elegância,
              delicadeza e aroma suave. Assim como a rosa branca,{' '}
              <strong>
                o copo-de-leite está associado diretamente à inocência, paz,
                calma e pureza
              </strong>
              . Aliás, a espádice amarela que fica no centro da flor é
              considerada, por muitos, um elo de ligação com a iluminação
              espiritual.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">5) Rosa vermelha</h3>

            <p className="my-4 ml-6 sm:ml-12">
              Diferentemente da rosa branca,{' '}
              <strong>
                a rosa vermelha representa os sentimentos mais passionais, como
                paixão e amor profundo
              </strong>
              . Por conta disso, é muito usada nas homenagens para cônjuges e
              pessoas amadas.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">6) Lírio</h3>

            <p className="my-4 ml-6 sm:ml-12">
              O lírio é um dos tipos de flores bem antigas. Seu nome tem origem
              latina e significa "portador de bulbos". Possui diversos
              significados que variam de acordo com as culturas. Mas, em geral,{' '}
              <strong>
                o lírio simboliza: amor eterno, zelo, nobreza e discrição
              </strong>
              . É bastante utilizado em velórios de crianças e senhoras.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">7) Gérbera</h3>

            <p className="my-4 ml-6 sm:ml-12">
              A gérbera faz parte dos tipos de flores mais utilizados em
              velórios infantis. Isso se deve ao fato da associação que fazem
              dela à imagem da pureza, sensibilidade, simplicidade e inocência.
              A gérbera amarela é a mais usada, mas também é possível
              encontrá-la em diferentes tonalidades.
            </p>

            <h3 className="text-xl font-bold mb-6 mt-5">Conte conosco</h3>

            <p className="my-4 ml-6 sm:ml-12">
              Agora que você conhece os tipos de flores para velórios, deixa que
              nós organizamos todos os detalhes da cerimônia fúnebre. A{' '}
              <strong>Funerária N. Sra. de Lourdes</strong> 24h oferece
              assistência funerária completa à família.
            </p>
            <p className="my-4 ml-6 sm:ml-12">
              Cuidamos de todos os trâmites para você, sem complicações. Nossos
              serviços incluem coroa de flores, ornamentação da capela,
              liberação de documentos, etc.
            </p>
          </div>

          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="text-4xl font-bold text-gray-600 text-center mt-8 mb-3">
              O que você precisar pode contar conosco 24hrs
            </h1>

            <p className="text-xl text-gray-600 my-4 text-center">
              Esperamos que essas informações lhe ajudem nesse momento difícil,
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

export default Floricultura
