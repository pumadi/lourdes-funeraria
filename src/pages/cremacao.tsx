import { Footer } from '@/components/footer'
import { ImageLayout } from '@/components/imageLayout'
import { Navbar } from '@/components/navbar'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Cremacao = () => (
  <>
    <Head>
      <title>Funeriaria N. Sra. de Lourdes - Cremação</title>
    </Head>
    <Navbar />

    <ImageLayout image="/images/dead.jpg" title="" text="" button={false} />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/urna.jpg"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Entenda como funciona a Cremação
            </h1>

            <p className="text-xl my-4 text-gray-500">
              A cremação consiste em um processo de incineração do corpo, que o
              reduz a cinzas. Apesar de ser uma prática muito antiga, ainda
              causa muitas dúvidas.
            </p>
            <p className="text-xl my-4 text-gray-500">
              Por isso, é interessante conhecer um pouco melhor o assunto e
              conversar com as pessoas mais próximas para saber se essa é a
              melhor opção para a família.
            </p>
            <p className="text-xl my-4 text-gray-500">
              Para compreender o que é cremação, como ela acontece, qual o
              melhor destino para as cinzas e quais são os seus reais impactos
              no meio ambiente, continue a leitura!
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
              A cremação é um procedimento de redução do corpo humano após o{' '}
              <strong>
                <Link
                  href="https://blog.primaveras.com.br/o-que-fazer-quando-morre-uma-pessoa/"
                  target="_blank"
                  className="text-red-400"
                >
                  falecimento
                </Link>{' '}
              </strong>
              que, por meio de altas temperaturas, se transforma em cinzas. Ela
              surgiu há milhares de anos; as civilizações grega e romana já
              optavam pela cremação como uma forma nobre de destino após a{' '}
              <strong>
                <Link
                  href="https://blog.primaveras.com.br/morte/"
                  target="_blank"
                  className="text-red-400"
                >
                  morte
                </Link>
              </strong>
              . Apesar de se associar essa prática aos anos de 1000 a.C. para os
              gregos e 750 a.C para os romanos, não se sabe ao certo a data da
              sua origem.
            </p>
            <p className="my-4">
              Uma das ressalvas comuns que as pessoas têm em relação à cremação:
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Como a cremação acontece?
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              É importante saber que existem algumas regras para o processo, que
              variam de acordo com o estado. Porém, em geral, ela só pode
              acontecer depois do tempo mínimo de 24 horas após a emissão da
              declaração de óbito.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Preparação
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              O corpo passa por uma preparação, em que são retirados os objetos
              metálicos e os implantes, como marca-passo, para garantir a
              segurança. Ele fica por algum tempo em câmara fria, antes de ser
              submetido ao calor.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Incineração
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Na sequência, o corpo, que está em um recipiente adequado -
              produzido em material ecológico, sem química, vidros, metais e
              verniz -, é introduzido em uma câmara. Lá, é exposta a uma
              temperatura de aproximadamente 800ºC, responsável pela
              desintegração. A temperatura se eleva e é preciso que um
              profissional responsável monitore todo o procedimento, que dura
              entre 2 e 3 horas.
            </p>
            <p className="my-4">
              A cremação sempre deve ser feita individualmente. No Brasil, é
              ilegal fazer cremações simultâneas, além de as câmaras não serem
              capazes de comportar mais de um corpo.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Fragmentação
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Após o processo com o calor, o corpo cremado precisa repousar em
              uma superfície metálica, onde são removidos quaisquer resíduos
              metálicos. Em seguida, passa-se pelo cremulador, uma máquina que
              faz com que os resíduos se tornem fragmentos muito pequenos.
            </p>
            <p className="my-4">
              Por fim, eles passam por outra máquina para a pulverização, até
              que se tornem um pó fino. Ele é lacrado e pode ser transferido
              para uma urna adequada, para que seja entregue à família.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Há casos em que a cremação não pode ser realizada
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Por mais que seja um desejo do ente querido falecido, há
              circunstâncias nas quais não é possível realizar a cremação. Ter
              ciência disso é fundamental para encontrar outras formas de
              homenagear a pessoa.
            </p>
            <p className="my-4">
              Legalmente, em caso de morte violenta, a pessoa não poderia ser
              cremada. Isso porque, em caso de reabertura da investigação, por
              meio de exumação, é preciso ter acesso ao corpo para realizar
              laudos adicionais. A exceção é quando há uma autorização judicial
              para isso.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            A cremação é um processo mais econômico
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Muitas pessoas desistem dessa opção por acreditarem que é um
              processo mais caro do que o sepultamento. Curiosamente, não é.
              Essa é uma opção mais barata, já que não envolve alguns custos,
              como:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li>terreno;</li>
              <li>locação do espaço;</li>
              <li>compra do jazigo;</li>
              <li>manutenção do jazigo.</li>
            </ul>

            <p className="my-4">
              No caso da cremação, não há essas questões, o que torna tudo mais
              barato. Além disso, se for vontade da família e do ente querido, é
              mais prático. Isso não impede, por exemplo, de deixar as cinzas no
              cemitério para que os ritos de homenagem possam ser feitos ali —
              no caso, a urna ficará no local. Ali, serão depositadas as cinzas
              da pessoa, que poderão ser visitadas sempre que familiares e
              amigos queridos quiserem.
            </p>
          </div>

          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="text-4xl font-bold text-gray-600 text-center mt-8 mb-3">
              Temos parcerias com os principais crematórios
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

export default Cremacao
