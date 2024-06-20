

export default function Navbar() {
  return (
  
  <section id="home" className="navbar px-4 bg-zinc-900">
  <nav
    className="nav mx-auto max-w-[1300px] h-[9vh] flex justify-between items-center"
  >
    <h1
      className="logo text-5xl max-xl:text-4xl max-md:text-3xl text-[rgb(61,206,174)] font-semibold tracking-wide green_shadow"
    >
      Criativo
    </h1>
    <div className="nav-rght mr-40 max-xl:mr-6 max-lg:hidden">
      <ul className="flex gap-8">
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonial">Portfolio</a></li>
        <li><a href="#footer">Contact Us</a></li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-[rgb(61,206,174)] cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </li>
      </ul>
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  </nav>
</section>

)
}
