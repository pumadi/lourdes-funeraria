import Link from 'next/link'

interface Props {
  image: string
  title: string
  text: string
  button: boolean
}

export const ImageLayout = (props: Props) => (
  <section
    className="flex items-end"
    style={{
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${props.image})`,
      height: '70vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: `no-repeat`
    }}
  >
    <div className="mx-9 my-9 up-effect">
      <h1 className="lg:text-8xl text-5xl text-white font-bold">
        {props.title}
      </h1>
      <p className="lg:text-2xl my-4 text-lg text-white">{props.text}</p>
      <Link
        href="https://wa.me/+5581999458760"
        className={` ${
          props.button ? '' : 'hidden'
        } bg-transparent hover:bg-blue text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded`}
      >
        Fale conosco
      </Link>
    </div>
  </section>
)
