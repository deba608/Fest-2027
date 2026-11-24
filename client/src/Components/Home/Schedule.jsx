import BlackRoller from "./BlackRoller";
import ScheduleCard from "./ScheduleCard";
// assets Import 
import girlLeft from "../../assets/Home/girlLeft.png";
import girlRight from "../../assets/Home/girlRight.png";
import Radio from "../../assets/Home/radio.png";
import Scrubble1 from "../../assets/Home/scrubble1.png";
import Scrubble2 from "../../assets/Home/scrubble2.png";
import culrav from "../../assets/Home/aavahan.webp";
import avishkar from "../../assets/Home/innovovate.webp";
import grid from "../../assets/Home/grid.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import scheduleData from "../../data/Event/Schedule/data";

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-auto overflow-hidden flex flex-col bg-[#202020]/100"
      style={{ backgroundImage: `url(${grid})` }}
    >
      <div className="h-auto md:h-auto pb-5 relative">
        <div className="md:pt-36 pt-14 md:px-12 px-4 flex md:h-auto h-full flex-col gap-16 items-center">
          <div className="md:w-[78vw] md:h-[22vh] w-[90%] flex items-center justify-center">
            <p className="w-full text-center flex items-center justify-center font-bebas leading-5 text-white md:w-[60vw] md:text-2xl md:leading-normal">
              AAVAHAN-INNOVOVATE 2027, Annual Techno-Cultural Fest at SUIIT, Sambalpur, is an electrifying extravaganza that seamlessly merges technology with cultural diversity. Featuring dynamic competitions, captivating performances, and insightful workshops, it serves as a melting pot of innovation and expression.
            </p>
          </div>
          <div className="flex flex-wrap  items-center justify-center gap-[7vw] p-6">
            <div className="md:w-96  md:h-72 h-60 w-60 items-center justify-center animate-float"
              style={{
                animation: 'float 3s ease-in-out infinite',
                backgroundRepeat: 'no-repeat',
              }}>
              <img
                src={culrav}
                alt="Logo 1"
                onClick={() => navigate("/aavahan-landing")}
                className="object-cover  w-full h-full scale-[100%] md:scale-[100%] lg:scale-[120%] hover:cursor-pointer"
                style={{ filter: 'drop-shadow(0 0 0.75rem rgb(255, 255, 255))' }}
              />
            </div>

            <div className="md:w-96 md:h-72 h-60 w-60 flex items-center justify-center animate-float"
              style={{
                animation: 'float 3s ease-in-out infinite',
                backgroundRepeat: 'no-repeat',
              }}>
              <img
                src={avishkar}
                onClick={() => navigate("/innovovate-landing")}
                alt="Logo 2"
                className="object-cover   w-full h-full scale-[100%] md:scale-[130%] lg:scale-[150%] lg:w-full  hover:cursor-pointer"
                style={{ filter: 'drop-shadow(0 0 0.75rem rgb(255, 217, 0))' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden  md:block md:h-[50vh] lg:h-[60vh] relative w-full">
        <div className="w-full  h-full relative flex items-center justify-center gap-[4vw]">
          <div className="w-[25vw] absolute left-0  transform   z-[1]">
            <img className="w-full h-full" src={Scrubble1} alt="" />
          </div>
          <div className="w-[32vw] h-[26vw] transform top-[-5vw] z-[1] relative md:top-[-5vw] custom1560:left-[6%] lg:top-[-5vw] custom1110:top-[-5vw] custom1560:top-[-5vw] custom1840:top-[-5vw] custom1980:top-[-5vw] custom1980:scale-[1.2]
              custom1980:left-[8rem]">
            <img src={Radio} alt="" />
          </div>
          <div className="w-[28vw]  absolute right-0  transform  z-[1]">
            <img className="w-full h-full" src={Scrubble2} alt="" />
          </div>
        </div>
        <div
          className="hidden md:block  h-[65vh] bg-scheduleOrange z-20 w-[109vw] absolute -bottom-[1px]"
          style={{
            clipPath: "polygon(18% 63%, 70% 63%, 100% 100%, 0% 100%)",
          }}
        >
        </div>
        <div
          className="hidden md:block  h-[65vh] w-[109vw]  bg-white z-10 absolute bottom-[8px]"
          style={{
            clipPath: "polygon(18% 63%, 70% 63%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>

      <div className="h-auto relative z-20 ">
        <div className=" h-full flex flex-col bg-scheduleOrange items-center justify-center  z-20  relative md:flex md:flex-col md:justify-center md:items-center">
          <div className="hidden md:block z-10 absolute -bottom-[9rem] -left-[4.4rem] md:left-[-2.7rem] md:bottom-[-5.5rem] scale-[0.6] md:scale-75 custom1560:left-[0rem] custom1560:scale-100 custom1980:scale-[1.2] custom1980:left-[-4px]">
            <img className="relative z-10 custom1980:bottom-28 custom1980:left-8" src={girlLeft} alt="Girl Left" />
          </div>
          <div className="hidden md:block absolute z-10 -right-[4.2rem] -bottom-[9rem] md:right-[-2.7rem] md:bottom-[-5.5rem] scale-[0.6] custom1560:scale-100 custom1560:right-[0rem] md:scale-75 custom1980:scale-[1.2] custom1980:right-[-4px]">
            <img className="relative custom1980:bottom-28 custom1980:right-8" src={girlRight} alt="Girl Right" />
          </div>
          <div className="h-[15%] md:absolute top-[-10%] z-50 flex  justify-center items-center">
            <h1 className="text-[35px] text-white md:text-4xl font-bionix">SCHEDULE</h1>
          </div>

          <div className="py-10 px-4 mt-10 md:h-auto w-full md:w-[78%] mb-[10%] lg:min-h-[50vh] custom1110:min-h-[30vh] flex flex-col items-center">
            <div className="hidden md:flex md:flex-wrap gap-4 md:justify-center">
              <div className="flex flex-wrap gap-5 justify-center w-full">
                {Object.values(scheduleData).map(({ day, date }) => (
                  <ScheduleCard key={day} day={day} date={new Date(date).getDate()} />
                ))}
              </div>
            </div>

            <div className="relative -top-8 flex flex-wrap gap-3 justify-center md:hidden">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {Object.values(scheduleData).map(({ day, date }) => (
                  <ScheduleCard key={day} day={day} date={new Date(date).getDate()} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[40vh] relative md:hidden w-full">
            <div className=" z-10 absolute bottom-0 left-0 md:left-[-2.7rem] md:bottom-[-5.5rem] scale-[0.6] md:scale-75 custom1560:left-[0rem] custom1560:scale-100 custom1980:scale-[1.2] custom1980:left-[-4px]">
              <img className="relative z-10 custom1980:bottom-28 custom1980:left-8" src={girlLeft} alt="Girl Left" />
            </div>
            <div className="absolute z-10 right-0 bottom-0 md:right-[-2.7rem] md:bottom-[-5.5rem] scale-[0.6] custom1560:scale-100 custom1560:right-[0rem] md:scale-75 custom1980:scale-[1.2] custom1980:right-[-4px]">
              <img className="relative custom1980:bottom-28 custom1980:right-8" src={girlRight} alt="Girl Right" />
            </div>
          </div>
        </div>
      </div>
      <BlackRoller />
    </div>
  );
};

export default Schedule;