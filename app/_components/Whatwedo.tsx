import Card from "./small_components/Card"
import Svg1 from "./small_components/svgs/Svg1";
import Svg2 from "./small_components/svgs/Svg2";
import Svg3 from "./small_components/svgs/Svg3";
import Svg4 from "./small_components/svgs/Svg4";






const Whatwedo = () => {
  return (
    <section id="services" className="what_we_do px-4 bg-stone-900">
    <div
      className="mx-auto max-w-[1300px] h-fit py-16 pt-32 flex justify-between gap-[10rem]  max-xl:flex-col max-xl:gap-14"
    >
      <div className="header_left flex flex-col gap-6 w-[40%] max-xl:w-[100%]">
        <h3 className="green_text font-semibold tracking-widest">Our Services</h3>
        <h1
          className="font-semibold text-7xl max-xl:text-6xl max-md:text-5xl max-sm:text-[2rem]"
        >
          What We <span className="green_text">Do</span>
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
        <p
          className="w-[60ch] max-md:w-[85%] max-sm:w-[95%] leading-relaxed justify-normal"
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

      <div className="right grid grid-cols-2 gap-6 w-[60%] max-xl:grid-cols-3 max-xl:w-[100%] max-lg:grid-cols-2 max-[600px]:grid-cols-1">
        <Card cardValue={`Brand Identity`} Logo={Svg1}/>
        <Card cardValue={`Landing Pages`} Logo={Svg2}/>
        <Card cardValue={`Animations`} Logo={Svg3}/>
        <Card cardValue={`Cool Web Design`} Logo={Svg4}/>
      </div>

      
    </div>
  </section>
  )
}

export default Whatwedo


