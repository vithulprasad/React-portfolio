import NavBar from "../components/navBar/NavBar";
import HomeComponent from "../components/Home/HomeComponent";
import AboutComponent from "../components/About.jsx/AboutComponent";
import WorkComponent from "../components/Work/WorkComponent";
import TouchComponent from "../components/Touch/TouchComponent";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className=" h-[1000px] w-full overflow-y-scroll">
          <section id="home" className="mt-10 bg-slate-50">
            <HomeComponent />
          </section>

          <section id="about" className="bg-slate-50 border border-top">
            <AboutComponent/>
          </section>

          <section id="work" className="">
            <WorkComponent/>
          </section>

          <section id="touch" className="border">
            <TouchComponent/>
          </section>
   
      </div>
    </>
  );
}

export default HomePage;
