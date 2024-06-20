
const Card = ({cardValue, Logo}: any) => {
  return (
    <div
    className="card ring-1 ring-white w-fit h-fit px-6 py-6 bg-zinc-950 rounded-lg text-center flex flex-col gap-3"
  >
    <div
      className="card__icon text-center flex justify-center items-center"
    >
     <Logo />

    </div>
    <h1 className="text-2xl">{cardValue}</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vero
      sit adipisci?
    </p>
  </div>
  )
}

export default Card