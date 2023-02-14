import Image from 'next/image'
import Link from 'next/link'

interface Props {
  link: string
  text: string
  image: string
  fontSize: string
}

export const Card = (props: Props) => (
  <div className="flex shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-white bg-cover w-full">
    <Link
      href={props.link}
      className="flex items-center justify-center text-white w-screen hover:bg-black"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) )`
      }}
    >
      <Image
        src={props.image}
        width="4000"
        height="4000"
        alt=""
        className="block object-cover object-center w-full h-full rounded-lg"
        style={{
          opacity: '0.5'
        }}
      />
      <h5
        className={`${props.fontSize} text-center font-bold m-6 absolute hover:border-b hover:border-white hover:border-b-4`}
      >
        {props.text}
      </h5>
    </Link>
  </div>
)
