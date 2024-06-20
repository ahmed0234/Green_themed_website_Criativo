
const Card = () => {
  return (
    <div
    className="card ring-1 ring-white w-fit h-fit px-6 py-6 bg-zinc-950 rounded-lg text-center flex flex-col gap-3"
  >
    <div
      className="card__icon text-center flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill=""
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="rgb(61,206,174)"
        className="size-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
        />
      </svg>
    </div>
    <h1 className="text-2xl">Brand Identity</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vero
      sit adipisci?
    </p>
  </div>
  )
}

export default Card