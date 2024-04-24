import { volvoBackground } from "../assets";

const Home = () => {
  return (
    <>
      <div className="fixed top-[64px] z-30">
        <div className="w-screen h-[46px] flex justify-center items-center bg-black text-[14px] chosenFont text-white z-30">
          <span className="flex flex-row gap-4">
            <p>C40 & XC40 Recharge har bytt namn</p>
            <span className="flex flex-row items-center gap-2 cursor-pointer">
              <p>LÄS MER</p>
              <p>{" >"}</p>
            </span>
          </span>
        </div>
      </div>
      <div className="z-20">
        <img
          src={volvoBackground}
          className="absolute w-full h-full inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0000004d] to-transparent"></div>
        <span className="absolute w-full top-[30%] flex flex-col justify-center items-center text-[40px] text-white">
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
