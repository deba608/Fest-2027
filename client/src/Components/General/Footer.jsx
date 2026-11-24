import { useLocation } from "react-router-dom";
import ProfileTape from "../Home/ProfileTape";
import horseman1 from "../../assets/Home/horseman1.png";
import horseman2 from "../../assets/Home/horseman2.png";
function Footer() {
  const location = useLocation();
  const hiddenRoutes = [
    "/login",
    "/admin-panel",
    "/register",
    "/profile",
    "/outside-registration",
    "/registration",
    "/forget-password-token-verification",
    "/forget-password",
    "/verify-email",
    "/dashboard",
    "/aavahaneventpage",
    "/innovovateeventpage",
    "/outside-registration/payFee"
  ]; // Add routes where the footer should be hidden

  // Check if the current route matches any of the hidden routes
  const shouldHideFooter = hiddenRoutes.includes(location.pathname);

  if (shouldHideFooter) {
    return null; // Hide the footer
  }

  const isHome = location.pathname === "/";

  return (
    <>
      <div className="flex flex-col w-full sticky z-10  bottom-0">
        <ProfileTape />

        <div className={`flex bg-floral_white text-dark_secondary flex-col ${isHome ? "custom1200:p-0" : ""} pt-[5%] pb-[5%] md:pb-[2%] justify-center items-center`}>
          <div className="text-center text-[6vw] md:text-[4.5vw] lg:text-[3.3vw] font-bionix tracking-wide">
            AAVAHAN-INNOVOVATE
          </div>
          <div className="text-center text-[3.2vw] md:text-[2.3vw] lg:text-[1.5vw] font-normal font-bebas tracking-widest">
            Annual Techno-Cultural Fest at SUIIT
          </div>
          <div className="md:mt-[2%] text-center text-[2.5vw] mt-[3%] md:text-[1.5vw] lg:text-[1vw] font-normal font-['Bebas Neue'] tracking-wider">
            Sambalpur University Institute Of Information Technology, Jyoti Vihar, Burla, Sambalpur, Odisha 768019
          </div>
          <div className="relative w-[90%] flex justify-between items-end mt-[6%] md:mt-[2%]">
            <img
              src={horseman1}
              alt="Horseman"
              loading="lazy"
              className="w-[55px] xs:w-[65px] sm:w-[75px] md:w-[90px] lg:w-[110px] h-auto object-contain"
            />
            <img
              src={horseman2}
              alt="Horseman"
              loading="lazy"
              className="w-[55px] xs:w-[65px] sm:w-[75px] md:w-[90px] lg:w-[110px] h-auto object-contain"
            />
            <hr className="absolute bottom-0 left-0 hidden sm:block w-full border-[1px] border-dark_secondary" />
          </div>
          <div className="text-center text-dark_secondary mt-[4%] text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] md:mt-[1%] font-normal font-bebas tracking-widest">
            ©AAVAHAN-INNOVOVATE, SUIIT
          </div>
          <div className="text-center text-dark_secondary mt-[2%] text-[2.8vw] md:text-[1.2vw] lg:text-[0.95vw] font-normal font-bebas tracking-widest">
            Made with ❤️ by{" "}
            <a href="https://manas-ranjan-dikshit.netlify.app/" target="_blank" rel="noreferrer" className="underline hover:opacity-80">
              Manas
            </a>{" "}
            and{" "}
            <a href="https://github.com/deba608" target="_blank" rel="noreferrer" className="underline hover:opacity-80">
              Debashish
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer