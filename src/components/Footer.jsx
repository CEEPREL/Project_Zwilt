import React from "react";
import arrow from "../assets/blackarrow.png";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div id="contactus" className="relative text-white ">
      <div className="absolute w-full h-[500px] -skew-y-2 bg-slate-950"></div>
      <section className=" flex items-center justify-center w-full py-20">
        <div className="absolute w-[80%] h-[150%] top-10 -skew-y-2 opacity-70 bg-indigo-500"></div>
        <div className="absolute top-24 flex-col flex items-center  text-center">
          <h1 className="text-4xl w-[70%] font-semibold mb-4">
            Need a job done, and done well? Get started
          </h1>
          <div className="block items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={arrow} alt="Logo" />
          </div>
        </div>
      </section>

      <footer className="absolute top-80 bg-slate-950 w-full h-[1500px] lg:h-[500px] p-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 md:px-0">
          <div className="col-span-2">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-28 mr-2" src={logo} alt="Logo" />
            </div>
            <p className="w-[80%] mb-6">
              We take complex hiring processes - and simplify them. Connecting
              you to the world's highly qualified talent pool.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row space-x-4">
              <button className="px-6 py-2 bg-gray-800 text-white rounded-full">
                Hire now
              </button>
              <button className="px-6 py-2 bg-gray-800 text-white rounded-full">
                Apply now
              </button>
            </div>
          </div>
          <div className="items-center relative  lg:left-40 flex flex-col">
            <h1 className="lg:text-4xl ml-5 lg:text-left text-center text-xl w-[250%] mb-10 font-semibold ">
              Connecting the right people to the right businesses.
            </h1>
            <div className="flex flex-col lg:flex-row gap-28">
              <div>
                <h2 className="text-xs mb-4">PLATFORM</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#findwork" className="hover:underline">
                      Find Work
                    </a>
                  </li>
                  <li>
                    <a href="#findtalent" className="hover:underline">
                      Find Talent
                    </a>
                  </li>
                  <li>
                    <a href="#categories" className="hover:underline">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href="#about-us" className="hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs mb-4">CATEGORIES</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#data-science" className="hover:underline">
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a href="#it-networking" className="hover:underline">
                      IT & Networking
                    </a>
                  </li>
                  <li>
                    <a href="#web-mobile" className="hover:underline">
                      Web & Mobile
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs w-full mb-4">HELP</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#faqs" className="hover:underline">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a href="#contact-us" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs mb-4">GET IN TOUCH @</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#instagram" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#linkedin" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#twitter" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
