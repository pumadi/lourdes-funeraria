import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => (
  <footer className="p-4 bg-blue shadow md:px-6 text-white">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link href="/" className="flex items-center mb-4 sm:mb-0">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          <Image
            src="/images/logo-white.svg"
            width={200}
            height={200}
            alt="logo"
          />
        </span>
      </Link>

      <ul className="flex flex-wrap items-center mb-6 text-lg sm:mb-0">
        <li>
          <Link href="/orientacoes" className="mr-4 hover:underline md:mr-6">
            Orientações
          </Link>
        </li>
        <li>
          <Link href="/contato" className="mr-4 hover:underline md:mr-6 ">
            Contato
          </Link>
        </li>
      </ul>
    </div>

    <hr className="my-6 border-white sm:mx-auto lg:my-8" />

    <span className="block text-sm text-center">
      © Todos os direitos reservados a &nbsp;
      <span className="font-bold">Funeriaria N. Sra. de Lourdes</span>
      &nbsp;- Desenvolvido por &nbsp;
      <Link
        href="https://www.instagram.com/agenciapumadi/"
        className="font-bold"
      >
        Pumadi
      </Link>
      .
    </span>
  </footer>
)
