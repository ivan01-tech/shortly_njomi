import "./App.css";
import Banner from "./components/layout/Banner";
import Footer from "./components/layout/Footer";
import Headers from "./components/layout/Headers";
import UrlShortenForm from "./components/layout/UrlShortenForm";

function App() {
  return (
    <>
      <Headers />
      <Banner />
      <div className="max_width relative">
        <UrlShortenForm />
      </div>
      <div className="max_width ">
        <div className="mt-[120px]">
          <section className="flex gap-4 flex-col space-x-6 max-w-[700px] m-auto">
            <h2 className="text-3xl font-bold my-4 ">Advanced Statistics</h2>
            <p className="text-gray">
              Tracks how your link are perfoming accross the web with our
              Advanced statitics dasbord.
            </p>
          </section>
        </div>
        <div className="">
          <div className="my-20 flex flex-col gap-24 items-center relative after:absolute  after:border-4 after:block after:h-full md:after:w-full md:after:h-0 after:border-primary-cyan md:flex-row  md:gap-5 md:justify-between ">
            {/* card */}
            <div className="bg-white rounded-[10px] p-4 relative z-50 w-full max-w-[350px] md:max-w-[300px]">
              <div
                className="absolute w-[80px] h-[80px] -top-[32%] translate-y-[50%] 
              left-[50%] translate-x-[-50%]
              rounded-full   bg-primary-dark-violet flex justify-center items-center md:left-16"
              >
                <img src="/public/images/icon-detailed-records.svg" alt="" />
              </div>
              <section className="pt-10">
                <h3 className="text-xl my-3 font-bold">Detailed Records</h3>
                <p className="text-gray">
                  Gain insights into who is clicking your links, Knowing when
                  and where people engage with your content helps inform better
                  decision
                </p>
              </section>
            </div>
            {/* card */}
            <div className="bg-white rounded-[10px] p-4 relative z-50 w-full max-w-[350px] md:max-w-[300px] mt-16">
              <div
                className="absolute w-[80px] h-[80px] -top-[32%] translate-y-[50%] 
              left-[50%] translate-x-[-50%]
              rounded-full   bg-primary-dark-violet flex justify-center items-center md:left-16"
              >
                <img src="/public/images/icon-detailed-records.svg" alt="" />
              </div>
              <section className="pt-10">
                <h3 className="text-xl my-3 font-bold">Detailed Records</h3>
                <p className="text-gray">
                  Gain insights into who is clicking your links, Knowing when
                  and where people engage with your content helps inform better
                  decision
                </p>
              </section>
            </div>{" "}
            {/* card */}
            <div className="bg-white rounded-[10px] p-4 relative z-50 w-full max-w-[350px] md:max-w-[300px] mt-28">
              <div
                className="absolute w-[80px] h-[80px] -top-[32%] translate-y-[50%] 
              left-[50%] translate-x-[-50%]
              rounded-full   bg-primary-dark-violet flex justify-center items-center md:left-16"
              >
                <img src="/public/images/icon-detailed-records.svg" alt="" />
              </div>
              <section className="pt-10">
                <h3 className="text-xl my-3 font-bold">Detailed Records</h3>
                <p className="text-gray">
                  Gain insights into who is clicking your links, Knowing when
                  and where people engage with your content helps inform better
                  decision
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="boast_section">
        <div
          className="max_width  
      flex justify-center items-center flex-col !gap-4 !py-20"
        >
          <h2 className="text-3xl font-bold text-white">
            Boost your link today
          </h2>

          <div className="text-gray-600 w-full  font-bold md:flex justify-center  md:justify-start">
            <a
              className="hover:opacity-70 block font-bold text-white   text-center bg-primary-cyan  rounded-full py-2 px-6 max-w-[250px] m-auto "
              href={"/"}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
