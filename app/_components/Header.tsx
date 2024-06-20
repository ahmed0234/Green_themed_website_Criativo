
const Header = () => {
  return (
    <section className="header px-4 pb-4 bg-zinc-950 min-h-[90vh]">
    <div
      className="mx-auto max-w-[1300px] flex justify-between items-center gap-8 overflow-hidden max-lg:flex-col"
    >
      <div
        className="header_left pt-32 max-md:pt-16 flex flex-col gap-6 w-[100%]"
      >
        <h3 className="green_text font-semibold tracking-widest">
          CREATIVE AGENCY
        </h3>
        <h1
          className="font-semibold text-7xl max-xl:text-6xl max-md:text-5xl max-sm:text-[2rem]"
        >
          WE ARE <span className="green_text">CREATIVE</span> <br />DESIGN AGENCY
        </h1>
        <div className="h-1 rounded-full w-32 bg-[rgb(61,206,174)]"></div>
        <p
          className="w-[60ch] max-md:w-[85%] max-sm:w-[95%] leading-relaxed justify-normal"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          mollitia ut minus nesciunt ratione illo sunt voluptas ea similique!
          Animi? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Amet itaque illum impedit vel autem tenetur.
        </p>
        <div className="header_left_ending flex items-center justify-start gap-4">
          <div
            className="size-16 cursor-pointer bg-[rgb(61,206,174)] flex items-center justify-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </div>

          <div>
            <h3>About Us</h3>
            <h3 className="green_text">Phantom Relina</h3>
          </div>
        </div>
      </div>
      <div className="header_right w-[100%] flex items-center justify-center">
        <img
          src="/file.png"
          className="w-[480px] rounded-full max-xl:w-[400px]"
          alt="Portfolio Pic"
        />
      </div>
    </div>
  </section>
  )
}

export default Header