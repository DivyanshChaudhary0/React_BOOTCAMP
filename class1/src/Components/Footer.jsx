import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white  pt-20">
      <div className="top px-16 flex items-center justify-between">

        <div className="text flex flex-col items-start gap-6">
          <h2 className="text-5xl font-[mySecondFont]">Let's turn some heads!</h2>
          <div className="border border-white text-white px-5 py-3 rounded-xl hover:rounded-full">
          <a href="" className="flex items-center gap-6">
            <span className="font-medium">Contact</span>
            <span>
              <i class="ri-arrow-right-line"></i>
            </span>
          </a>
        </div>
        </div>

        <div className="links flex gap-20">
            <div className="first flex flex-col gap-3">
                <p className="text-xl mb-4 font-serif">Socials</p>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Instagram</a>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Linkedein</a>
            </div>
            <div className="second flex flex-col gap-3">
                <p className="text-xl mb-4 font-serif">Sitemap</p>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Home</a>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Projecten</a>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Over</a>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Contact</a>
            </div>
            <div className="third flex flex-col gap-3">
                <p className="text-xl mb-4 font-serif">Info</p>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Algemene voorwaarden</a>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Privacybeleid</a>
                <a className="uppercase text-xs font-[myFifthFont] hover:border-b-[1px]" href="">Cookiebeleid</a>
            </div>
        </div>
      </div>

      <div className="bottom w-full mt-32">
        <img  className="w-full object-cover"  src="footer.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
