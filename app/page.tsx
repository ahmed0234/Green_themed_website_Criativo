import Aboutus from "./_components/Aboutus";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import { Testimonial } from "./_components/Testimonial";
import Whatwedo from "./_components/Whatwedo";
import Work from "./_components/Work";


export default function Home() {
  return (
  <>
   <Navbar />
   <Header />
   <Whatwedo />
   <Aboutus />
   <Testimonial />
   <Work />
   <Footer />
  </>
  );
}
