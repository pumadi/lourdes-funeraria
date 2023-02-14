import {
  faFacebook,
  faInstagram,
  faPiedPiper,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Navbar = () => {
  const router = useRouter()
  const [isHidden, setIsHidden] = useState(true)
  const [isDropdown, setIsDropdown] = useState(true)

  return (
    <nav className="bg-transparent px-2 sm:px-4">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-x1 font-semibold whitespace-nowrap text-dark">
            <Image
              src="/images/logo-blue.svg"
              width={180}
              height={180}
              alt="logo"
            />
          </span>
        </Link>

        <button
          onClick={() => setIsHidden(c => !c)}
          type="button"
          className="inline-flex items-center p-2 ml-3 mr-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-dark-400 light:hover:bg-dark-700 light:focus:ring-dark-600"
        >
          <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} />
        </button>

        <div
          className={`${
            isHidden ? 'hidden' : ''
          } w-full md:block md:w-auto absolute md:relative inset-0 bg-white`}
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link href="/" className="flex items-center">
              <span className="md:hidden self-center text-x1 font-semibold whitespace-nowrap text-dark">
                <Image
                  src="/images/logo-blue.svg"
                  width={180}
                  height={180}
                  alt="logo"
                />
              </span>
            </Link>

            <button
              onClick={() => setIsHidden(c => !c)}
              type="button"
              className="inline-flex items-center p-2 ml-3 mr-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-dark-400 light:hover:bg-dark-700 light:focus:ring-dark-600 mr-5"
            >
              <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} />
            </button>
          </div>
          <ul className="flex items-center text-2xl flex-col p-4 mt-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0">
            <li>
              <Link
                href="/"
                className={`${
                  router.pathname == '/' ? 'text-blue' : ' text-gray-700'
                } block py-2 pl-3 pr-4  md:bg-transparent md:p-0`}
              >
                Início
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsDropdown(c => !c)}
                className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue rounded md:bg-transparent md:p-0"
                type="button"
              >
                Serviços
                <span className="font-bold text-base pl-1">▾</span>
              </button>

              <div
                className={` ${
                  isDropdown ? 'hidden' : ''
                } z-10 bg-white divide-y rounded-lg shadow w-44 text-center md:text-left md:absolute`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/translado"
                      className={`${
                        router.pathname == '/translado' ? 'text-blue' : ''
                      } block px-4 py-2 hover:bg-blue hover:text-white`}
                    >
                      Translado
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tanatopraxia"
                      className={`${
                        router.pathname == '/tanatopraxia' ? 'text-blue' : ''
                      } block px-4 py-2 hover:bg-blue hover:text-white`}
                    >
                      Tanatopraxia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/urnas"
                      className={`${
                        router.pathname == '/urnas' ? 'text-blue' : ''
                      } block px-4 py-2 hover:bg-blue hover:text-white`}
                    >
                      Urna e caixão
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cremacao"
                      className={`${
                        router.pathname == '/cremacao' ? 'text-blue' : ''
                      } block px-4 py-2 hover:bg-blue hover:text-white`}
                    >
                      Cremação
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/floricultura"
                      className={`${
                        router.pathname == '/floricultura' ? 'text-blue' : ''
                      } block px-4 py-2 hover:bg-blue hover:text-white`}
                    >
                      Floricultura
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/orientacoes"
                className={`${
                  router.pathname == '/orientacoes'
                    ? 'text-blue'
                    : 'text-gray-700'
                } block py-2 pl-3 pr-4 hover:text-blue rounded md:bg-transparent md:p-0`}
              >
                Orientações
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className={`${
                  router.pathname == '/contato' ? 'text-blue' : 'text-gray-700'
                } block py-2 pl-3 pr-4 hover:text-blue rounded md:bg-transparent md:p-0`}
              >
                Contato
              </Link>
            </li>
            <li className="my-6 md:my-0">
              <Link
                href="https://wa.me/+5581999458760"
                className="md:space-x-2 my-2 lg:my-2 md:my-2 text-4xl text-white md:text-2xl lg:text-2xl bg-whatsapp hover:bg-whatsapp-dark rounded lg:py-2 lg:px-4  py-2 px-4"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
