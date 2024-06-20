
const Work = () => {
  return (
    <section className="w-full bg-stone-900 h-fit py-10 px-20 max-md:px-4">
        <div className="max-w-[1300px] mx-auto flex gap-20 max-lg:gap-8 max-lg:flex-col">
            <div className="header_left flex flex-col gap-6 w-[55%] max-lg:w-full pt-24 ">
            <h3 className="green_text font-semibold tracking-widest">Latest Projects</h3>
            <h1
            className="font-semibold text-5xl max-xl:text-6xl max-md:text-5xl max-sm:text-[2rem]"
            >
            Our <span className="text-[#00ff99]">Latest </span> Cases
            </h1>
            <div className="h-1 rounded-full w-32 bg-[rgb(61,206,174)]"></div>
            <p
            className="max-w-[60ch] max-md:w-[85%] max-sm:w-[95%] leading-relaxed justify-normal"
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            mollitia ut minus nesciunt ratione illo sunt voluptas ea similique!
            Animi? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Amet itaque illum impedit vel autem tenetur.
            </p>
            <p
            className="max-w-[60ch]  max-md:w-[85%] max-sm:w-[95%] leading-relaxed justify-normal"
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            mollitia ut minus nesciunt ratione illo sunt voluptas ea similique!
            </p>
            <div className="header_left_ending">
            <button className="View All bg-[rgb(61,206,174)] px-6 py-3 rounded-md">
                View More
            </button>
            </div>
            </div>

            <div className="header_right w-[45%] h-[650px] flex items-center justify-center max-lg:w-[80%] max-sm:w-[90%] mx-auto">
                <img src="/greenanime.webp" className="h-full rounded-2xl w-full object-cover object-center" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Work