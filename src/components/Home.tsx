import { volvoBackground } from "../assets";

const Home = () => {
  return (
    <>
      <div className="w-screen h-[46px] flex justify-center items-center bg-black text-[14px] text-white">
        <span className="flex flex-row gap-4">
          <p>C40 & XC40 Recharge har bytt namn</p>
          <span className="flex flex-row items-center gap-2 cursor-pointer">
            <p>LÄS MER</p>
            <p>{" >"}</p>
          </span>
        </span>
      </div>
      <div className="w-min-content h-min-content">
        <div className="relative w-screen h-screen">
          <img
            src={volvoBackground}
            className="absolute w-full h-full inset-0 object-cover z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0000004d] to-transparent z-20"></div>
        </div>
        <span className="absolute w-full top-[30%] flex flex-col items-center justify-center text-[40px] text-white z-30">
          <p className="text-[18px] font-medium">Välkommen in på provkörning</p>
          <p className="font-semibold">EX30 är äntligen här</p>
          <button
            className="w-[188px] h-[48px] mt-[14px] rounded-md bg-[white] hover:bg-white/50 text-[16px] text-black font-bold border-[1px] border-translucent hover:border-[white] transition duration-300 ease-in-out"
            onClick={() =>
              (window.location.href = "https://www.volvocars.com/se/l/premiar/")
            }
          >
            Upptäck mer
          </button>
        </span>
      </div>
    </>
  );
};

export default Home;
