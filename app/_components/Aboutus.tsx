
const Aboutus = () => {
  return (
    <section id="aboutus" className="bg-zinc-950 h-fit pb-24 w-full px-4">
        <div className=" mx-auto max-w-[1300px]  flex gap-8 items-center max-lg:flex-col">
              <div className="left w-[40%] max-lg:w-[100%] self-end " >
                  <img src="/hair.png" className="rounded-2xl object-cover object-center" alt="Pic" />
              </div>

              <div className="flex-1  max-lg:w-[100%]">
              <div
        className="header_left pt-32 max-md:pt-16 flex flex-col gap-6 w-[100%]"
      >
        <h3 className="green_text text-xl font-semibold tracking-widest">
          About Us
        </h3>
        <h1
          className="font-semibold text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-[1.7rem]"
        >
          We Use <span className="text-[#00ff99]">Creativity</span> to Get Our Clients
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

        <div className="about us ending flex max-md:flex-col max-md:gap-8">
          <div className="flex gap-4">
              <div>
              <svg className="size-12" xmlns="http://www.w3.org/2000/svg" stroke="rgb(61,206,174)" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12 .5a1.746 1.746 0 0 0-1 3.18v1.4c-.9.13-1.74.42-2.5.86L7.39 4.35c.19-.52.14-1.12-.2-1.6C6.84 2.26 6.3 2 5.75 2c-.35 0-.7.1-1 .32c-.79.55-.99 1.64-.43 2.43c.34.49.88.75 1.43.75l1.18 1.68c-.43.43-.77.91-1.06 1.44c-.2-.08-.41-.12-.62-.12c-.45 0-.9.17-1.25.5c-.67.7-.67 1.8 0 2.5c.29.27.64.42 1 .5c0 .54.07 1.06.18 1.56l-1.31.35c-.31-.26-.71-.41-1.12-.41c-.15 0-.31 0-.46.06a1.75 1.75 0 0 0-1.23 2.15C1.27 16.5 2 17 2.75 17c.15 0 .3 0 .46-.06c.57-.16 1-.58 1.18-1.1l1.51-.41c.45.79 1.05 1.49 1.75 2.07l-1.1 2c-.55.08-1.05.39-1.34.92a1.749 1.749 0 1 0 3.08 1.66c.28-.52.27-1.12.02-1.61l1.07-1.97c.81.32 1.69.5 2.62.5h.18c-.13.26-.18.56-.18.88c.08.92.84 1.62 1.75 1.62h.13c.97-.08 1.69-.92 1.62-1.88c-.04-.5-.29-.94-.65-1.23c.47-.21.92-.48 1.34-.79l2.34 2.34c-.1.56.06 1.13.47 1.56c.35.33.8.5 1.25.5s.9-.17 1.25-.5c.67-.7.67-1.8 0-2.5c-.35-.33-.8-.5-1.25-.5c-.1 0-.2 0-.31.03l-2.34-2.34c.49-.65.87-1.39 1.11-2.19h1.11A1.746 1.746 0 0 0 23 13a1.746 1.746 0 0 0-3.18-1H19c0-1.57-.5-3-1.4-4.19l1.34-1.34c.11.03.21.03.31.03c.45 0 .9-.17 1.25-.5c.67-.69.67-1.8 0-2.5c-.35-.33-.8-.5-1.25-.5s-.9.17-1.25.5c-.41.43-.57 1-.47 1.56L16.19 6.4c-.92-.69-2-1.15-3.19-1.32v-1.4A1.746 1.746 0 0 0 12 .5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m-1.5-8C9.67 9 9 9.67 9 10.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S11.33 9 10.5 9m3.5 4c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></path>
</svg>
              </div>
              <div> 
                <h1 className="font-semibold text-3xl">Clean Code</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
              </div>
          </div>
          <div className="flex gap-4">
              <div>
              <svg  className="size-12" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<g fill="none" stroke="rgb(61,206,174)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
		<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
		<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
	</g>
</svg>
              </div>
              <div> 
                <h1 className="font-semibold text-3xl">Modern Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
              </div>
          </div>
        </div>
      
      </div>
              </div>
        </div>
    </section>
  )
}

export default Aboutus