import { Footer } from '@/components/footer'
import { ImageLayout } from '@/components/imageLayout'
import { Navbar } from '@/components/navbar'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Urnas = () => (
  <>
    <Head>
      <title>Funeriaria N. Sra. de Lourdes - Urnas e caixões</title>
    </Head>

    <Navbar />

    <ImageLayout image="/images/urna.jpg" title="" text="" button={false} />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/urna-2.jpg"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Primeiro é preciso entender, o que são urnas funerárias?
            </h1>

            <p className="text-xl my-4 text-gray-500">
              Primeiramente, urnas funerárias são o recipiente em que ficarão os
              restos mortais do falecido. Esses podem ser tanto as caixas em que
              ficarão as cinzas, após a cremação, ou o próprio caixão, para o
              sepultamento. Esses são os dois destinos mais utilizados. As urnas
              funerárias são um passo importante do luto, pois elas carregarão a
              última imagem do falecido, na memória de seus entes queridos.
              Assim como existem diversos destinos para o falecido,{' '}
              <strong>
                existem diversos tipos de urnas em que seus restos podem
                descansar
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-80 md:my-40 lg:my-40"></section>

    <div className="bg-gray-50 py-5 align-left">
      <div className="flex flex-col justify-center items-center container my-24 px-6 mx-auto">
        <section className="flex flex-col justify-center items-center mb-32 text-gray-800 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Urnas para cinzas:
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Se você tem a intenção de homenagear seu ente querido espargindo
              as cinzas em algum lugar especial ou até mesmo guardá-las em casa,
              o ideal é guardar as cinzas em um recipiente próprio para isso.
            </p>
            <p className="my-4">
              Existem vários modelos de <strong>urnas para cinzas,</strong>
              hoje em dia, há uma grande consciência ecológica em usar{' '}
              <strong>urnas biodegradáveis</strong>, algumas construídas com
              matérias-primas naturais, como folhas, areia, sementes e até
              tintas ecológicas.
            </p>
            <p className="my-4">
              Essas urnas vêm seguindo o mesmo conceito de cremação, até hoje é
              o método de sepultamento mais ecológico que existe, pois não polui
              o meio ambiente. Essas <strong>urnas para cinzas</strong> vem
              conquistando muitos adeptos pelo fato de ter consciência
              ecológica.
            </p>
            <p className="my-4">
              Mas também há quem prefere os modelos tradicionais, de madeira,
              aço, bronze, entre outros. Esses modelos são convencionais e nunca
              perdem totalmente a preferência. Mas o que realmente é necessário
              é guardar corretamente as cinzas do ente querido independente de
              sua intenção, para conservar as cinzas de modo correto, procure
              deixá-las em lugares secos, sem umidade.
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li className="my-2">
                <strong>biodegradável:&nbsp;</strong>
                trata-se do conceito de continuidade da vida. Aqui, as cinzas
                funcionam como adubo, em que, em um compartimento da urna, são
                colocadas sementes.{' '}
                <strong>
                  Após o plantio, as sementes se unem às cinzas e originam uma
                  nova árvore
                </strong>
                ;
              </li>
              <li className="my-2">
                <strong>hidrossolúveis:&nbsp;</strong>
                ideais para aqueles que desejam jogar as cinzas de seus entes
                queridos na água. Feito para almas que foram aventureiras, em
                vida. A urna é feita com materiais que não agridem a natureza e
                se dissolvem na água;
              </li>
              <li className="my-2">
                <strong>metal ou cerâmica:&nbsp;</strong>
                são as opções mais tradicionais. Elas podem ser revestidas
                internamente por outros materiais, como veludo. São perfeitas
                para quem deseja manter as cinzas no ambiente familiar.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Caixões. os tipos de caixões e sua diferenças
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-2xl">
            <p className="my-4">
              Para tomar a sua decisão de modo mais acertado, é importante
              conhecer quais são os tipos de caixões existentes e escolher
              aquele que está mais de acordo com o que espera para o seu rito
              funerário.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-3">Madeira</h3>

            <p className="my-4">
              Um primeiro ponto a ser considerado são os tipos de madeira que
              fazem parte da composição do caixão. Você pode contar com madeiras
              nobres, tais como:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li className="my-2">mogno;</li>
              <li className="my-2">carvalho;</li>
              <li className="my-2">cerejeira, entre outros.</li>
            </ul>

            <p>
              Além disso, você pode contar com materiais mais sustentáveis, tais
              como:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li className="my-2">madeira de reflorestamento;</li>
              <li className="my-2">MDF;</li>
              <li className="my-2">pinus.</li>
            </ul>

            <p className="my-4">
              Para escolher entre eles, pode-se pensar sobre as características,
              gostos pessoais ou remeter a lembrança à nobreza.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-3">Acabamento</h3>

            <p className="my-4">
              O acabamento é o que permite ver uma maior elegância no caixão. Há
              alguns detalhes que você pode analisar e pensar se acha mais
              interessante para sua escolha ou não. São eles:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li className="my-2">pintura com ou sem sombreamento;</li>
              <li className="my-2">
                para os caixões feitos com madeira nobre, você pode optar por
                aqueles sem pintura, contudo com verniz fosco, brilhante ou
                semibrilhante.
              </li>
            </ul>

            <p className="my-4">Na parte interna, podemos incluir também:</p>

            <ul className="mx-20 indent-1 list-disc">
              <li className="my-2">forro com TNT;</li>
              <li className="my-2">forro com cetim;</li>
              <li className="my-2">forro com demais tecidos;</li>
              <li className="my-2">
                acessórios que podem ser feitos com metal, plástico, banhados a
                ouro, cristais, entre outros.
              </li>
            </ul>

            <h3 className="text-2xl font-bold my-4 mt-8 mb-3">
              Tamanho e espessura
            </h3>

            <p className="my-4">
              A maioria dos caixões são de tamanho padrão, ou seja, com as
              seguintes medidas aproximadamente:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li className="my-2">2m de comprimento interno;</li>
              <li className="my-2">2,05m de comprimento externo;</li>
              <li className="my-2">0,70m largura interna;</li>
              <li className="my-2">0,89m largura externa;</li>
              <li className="my-2">0,395m altura interna;</li>
              <li className="my-2">0.435m altura externa.</li>
            </ul>

            <p>
              No entanto, para muitas pessoas, por suas condições físicas
              (altura, nanismo, caso de óbito infantil, sobrepeso, obesidade,
              entre outras), é preciso escolher modelos especiais.
            </p>

            <p>
              Nos caixões mais simples, é utilizada uma chapa de 12mm. Porém,
              você também pode escolher chapas de 15mm, 18mm ou 22mm. Isso é
              relevante quando há necessidade de um caixão mais resistente por
              causa das características físicas da pessoa.
            </p>
          </div>

          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="text-4xl font-bold text-gray-600 text-center mt-8 mb-3">
              Temos em nossa funerária várias opções
            </h1>

            <p className="text-xl text-gray-600 my-4 text-center">
              Esperamos que essas informações lhe ajudem nesse momento difícil,
              caso você precise de mais orientações, estamos à sua disposição!
            </p>

            <Link
              href="https://wa.me/+5581999458760"
              className="bg-whatsapp my-5 hover:bg-whatsapp-dark text-white font-semibold py-2 px-4 border border-white hover:border-transparent text-2xl rounded"
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

export default Urnas
