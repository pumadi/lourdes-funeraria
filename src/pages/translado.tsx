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
      <title>Funeriaria N. Sra. de Lourdes - Translado</title>
    </Head>

    <Navbar />

    <ImageLayout image="/images/carro.jpeg" title="" text="" button={false} />

    <section className="h-screen my-9">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <Image
              src="/images/translado.jpg"
              className="w-full"
              width={4000}
              height={4000}
              style={{ objectFit: 'cover', borderBottomLeftRadius: '20%' }}
              alt="Sample image"
            />
          </div>

          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold my-5">
              Entenda como funciona a logística de transporte funerário
            </h1>

            <p className="text-xl my-4 text-gray-500">
              Você já deve ter visto nos noticiários casos de pessoas que vêm a
              óbito em uma localidade e precisam ser transportadas para outro
              lugar. Em geral, isso ocorre quando o falecido reside longe da
              família, sofre um acidente em outra região ou, até mesmo, quando
              há a necessidade de mover o corpo de um cemitério para outro, por
              exemplo.
            </p>
            <p className="text-xl my-4 text-gray-500">
              Quanto maior a distância entre o local de falecimento e o destino
              final, maior é a burocracia para a{' '}
              <strong>liberação do corpo</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-80 md:my-40 lg:my-40"></section>

    <div className="bg-gray-50 py-5">
      <div className="container my-24 px-6 mx-auto">
        <section className="flex flex-col items-center mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center">
            O translado via aérea ou terrestre
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-3xl break-all">
            <p className="my-4">
              O translado de corpos pode ser realizado{' '}
              <strong>via aérea</strong> ou <strong>terreste</strong>, a
              depender da distância e das condições de acesso ao local.
            </p>
            <p className="my-4">
              O <strong>transporte funerário rodoviário</strong> é mais comum
              entre cidades e estados mais próximos, ou quando não há aeroportos
              no destino do funeral. Esse serviço pode ser executado apenas por
              empresas funerárias, de acordo com as regras municipais e
              estaduais.
            </p>
            <p className="my-4 hyphen">
              Por outro lado, o <strong>transporte funerário aéreo</strong>{' '}
              trata-se de uma operação logística bem mais complexa que, mesmo em
              vôos nacionais, deve seguir uma série de normais exigidas pelas
              aut&shy;oridades brasileiras e regulamentadas pela Agência
              Nacional de Vigilância Sanitária (Anvisa), por meio da &nbsp;
              <Link
                href="https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2011/res0033_08_07_2011.html"
                target="_blank"
                className="text-red-400"
              >
                RDC nº33, de 8 de julho de 2011
              </Link>
              .
            </p>
            <p className="my-4">
              Neste caso, a primeira etapa do processo consiste na liberação da
              documentação básica necessária para qualquer tipo de translado:
              registro de identificação do requerente, termo de sepultamento,
              atestado de óbito e autorização da Polícia Civil e Secretaria de
              Saúde. No entanto, os trâmites podem variar conforme a modalidade
              (nacional ou internacional).
            </p>
            <p className="my-4">
              Confira quais são as normas a serem seguidas pelas companhias
              aéreas:
            </p>
            <ol className="mx-20 indent-1 list-decimal">
              <li>
                A urna deve ser impermeável e ter uma espessura de, no mínimo,
                300 milímetros;
              </li>
              <li>
                O caixão precisa estar vedado durante todo o trajeto, com
                material plástico ou metal fundido;
              </li>
              <li>
                O embarque do corpo é feito exclusivamente por agentes
                funerários, levado em carro fechado até o avião;
              </li>
              <li>
                Toda a logística ocorre antes dos passageiros e das bagagens.
              </li>
            </ol>
            <p className="my-4">
              Caso as regras não sejam cumpridas, o transporte pode ser recusado
              pelo operador aéreo.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Conheça as três modalidades de translado: Translado intermunicipal
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Consiste no transporte dentro do mesmo estado, mas{' '}
              <strong>entre diferentes municípios</strong>. Nesse caso, devem
              ser consideradas a legislação e relamentação próprias das cidade
              de origem e providenciar os seguintes documentos:
            </p>
            <ul className="mx-20 indent-1 list-disc">
              <li>Cópia autenticada da certidão de óbito;</li>
              <li>Cópia autenticada da identidade do requerente;</li>
              <li>
                Cópia autenticada do proprietário do jazigo onde ocorrerá o
                sepultamento;
              </li>
              <li>Alvará judicial</li>
              <li>Autorização da Vigilância em Sáude Ambiental;</li>
              <li>Requerimento de transferência.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Translado interestadual
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              Para transferência entre estados federados, são as normas
              estaduais que devem ser seguidas. Em geral, a documentação
              solicitada é a mesma utilizada no translado intermunicipal,
              necessitando apenas da <strong>ata de embalsamento</strong>, em
              casos de transporte aéreo.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center mt-8 mb-3">
            Translado internacional
          </h2>

          <div className="text-lg indent-7 my-4 text-gray-500 max-w-4xl">
            <p className="my-4">
              O translado entre países é o mais burocrático e custoso para as
              famílias, pois exige-se o registro de óbito em Repartição Consular
              para a liberação do corpo, dentre outros documentos obrigatórios.
              De acordo com o{' '}
              <Link href="">Ministério das Relações Exteriores (MRE)</Link>, no
              ato do <strong>registro consular de óbito</strong> devem ser
              apresentados:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li>Formulário de Registro de Óbito, preenchido e assinado;</li>
              <li>Certidão americana de óbito;</li>
              <li>Certidão de cremação, quando for o caso;</li>
              <li>
                Documento de identidade do falecido, preferencialmente com foto
                (no caso de passaporte, poderá estar vencido);
              </li>
              <li>
                Do declarante, deverá ser apresentado passaporte ou outro
                documento válido de identidade com foto.
              </li>
            </ul>

            <p className="my-4">
              Além da documentação acima, há outras exigências que estão nos
              termos da legislação e precisam ser seguidas à risca. Por exemplo,
              o transporte só é realizado após autorização da Administração do
              aeroporto de embarque, sendo obrigatórios os seguintes
              procedimentos:
            </p>

            <ul className="mx-20 indent-1 list-disc">
              <li>Atestado de óbito original;</li>
              <li>Laudo médico de embalsamento ou conservação;</li>
              <li>
                Autorização para remoção do corpo, disponibilizada pela
                autoridade policial onde ocorreu o óbito;
              </li>
              <li>
                Atestado médico confirmando que o óbito não foi provocado por
                doença infectocontagiosa;
              </li>
              <li>
                Os restos mortais de corpos cremados devem estar em urnas
                impermeáveis e lacradas;
              </li>
            </ul>
            <p className="my-4">
              Importante ressaltar que todas as despesas envolvendo o translado
              internacional são totalmente arcadas pela família, sem auxílio
              financeiro do MRE. Se a família não tiver condições de custear o
              transporte, o falecido será sepultado no país estrangeiro.
            </p>
          </div>
          <section className="flex flex-col items-center justify-center my-4">
            <h1 className="text-4xl font-bold text-gray-600 text-center mt-8 mb-3">
              Tabalhamos com todo tipo de translado!
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

export default Home
