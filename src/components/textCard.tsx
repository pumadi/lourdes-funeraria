import Link from 'next/link'

interface Props {
  text: string
  number: string
}

export const TextCard = (props: Props) => (
  <div className="flex shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-white bg-cover w-full">
    <div className="block object-cover object-center w-full h-full rounded-lg hover:bg-black hover:text-white hover:font-bold">
      <h3 className="text-3xl text-center font-bold mt-6">{props.number}</h3>
      <h5 className={`text-sm text-center text-xl m-6`}>{props.text}</h5>
    </div>
  </div>
)
