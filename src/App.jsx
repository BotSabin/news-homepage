import { useState } from "react";

import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto font-inter relative">
      <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div
        className={`${
          menuOpen ? "contrast-50 transition-all duration-500" : ""
        }`}
      >
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

        <main className={`flex flex-col px-4 lg:px-28`}>
          <div className="flex flex-col lg:flex-row gap-x-8 gap-y-16">
            <div className="flex flex-col flex-[1.5] gap-y-6">
              <div>
                <picture>
                  <source
                    srcSet="image-web-3-mobile.jpg"
                    media="(max-width: 767px)"
                  />
                  <img src="image-web-3-desktop.jpg" alt="desktop-image" />
                </picture>
              </div>

              <div className="flex flex-col lg:flex-row justify-between gap-y-5">
                <h1 className="text-4xl md:text-6xl font-extrabold pr-10">
                  The Bright Future of Web 3.0?
                </h1>
                <div className="flex flex-col gap-y-8 w-fit lg:pl-10">
                  <p className="text-darkgrayish">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button
                    className="w-fit mt-auto uppercase font-medium bg-softred hover:bg-verydark transition-colors duration-300
            text-offwhite px-8 py-3 text-sm md:text-base tracking-[4px]"
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>

            <article className="flex-[.55] bg-verydark p-8">
              <h2 className="capitalize text-softorange font-bold text-4xl">
                new
              </h2>
              <div className="divide-y flex flex-col">
                <div className="py-8 flex flex-col gap-y-3">
                  <h3 className="font-semibold text-xl text-offwhite hover:text-softorange cursor-pointer transition-colors duration-300">
                    Hydrogren VS Electric Cars
                  </h3>
                  <p className="text-grayish">
                    Will hydrogren-fueled cars ever catch up to EVs?
                  </p>
                </div>

                <div className="py-8 flex flex-col gap-y-3">
                  <h3 className="font-semibold text-xl text-offwhite hover:text-softorange cursor-pointer transition-colors duration-300">
                    The Downssides of AI Artistry
                  </h3>
                  <p className="text-grayish">
                    What are the possible advers effecrs of on-demand AI image
                    generation?
                  </p>
                </div>

                <div className="pt-8 flex flex-col gap-y-3">
                  <h3 className="font-semibold text-xl text-offwhite hover:text-softorange cursor-pointer transition-colors duration-300">
                    Is VC Funding Drying Up?
                  </h3>
                  <p className="text-grayish">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col lg:flex-row my-16 gap-y-8">
            <div className="flex gap-x-6 px-2">
              <img
                src="image-retro-pcs.jpg"
                alt=""
                width={100}
                className="object-cover bg-center"
              />
              <div className="flex flex-col gap-y-2">
                <span className="t text-grayish font-semibold text-3xl">
                  01
                </span>
                <h4 className="text-lg font-bold text-verydark hover:text-softred transition-colors duration-300 cursor-pointer">
                  Reviving Retro PCs
                </h4>
                <p className="text-darkgrayish">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>

            <div className="flex gap-x-6 px-2">
              <img
                src="image-top-laptops.jpg"
                alt=""
                width={100}
                className="object-cover bg-center"
              />
              <div className="flex flex-col gap-y-2">
                <span className="text-grayish font-semibold text-3xl">02</span>
                <h4 className="text-lg font-bold text-verydark hover:text-softred transition-colors duration-300 cursor-pointer">
                  Top 10 Laptops of 2022
                </h4>
                <p className="text-darkgrayish">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </div>

            <div className="flex gap-x-6 px-2">
              <img
                src="image-gaming-growth.jpg"
                alt="gaming-image"
                width={100}
                className="object-cover bg-center"
              />
              <div className="flex flex-col gap-y-2">
                <span className="text text-grayish font-semibold text-3xl">
                  03
                </span>
                <h4 className="text-lg font-bold text-verydark hover:text-softred transition-colors duration-300 cursor-pointer">
                  The Growth of Gaming
                </h4>
                <p>How the pandimec has sparked fresh opportunities.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
