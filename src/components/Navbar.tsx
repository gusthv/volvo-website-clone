import { volvoLogo, profileIcon } from "../assets";

const Items = [
  {
    name: "Våra bilar",
  },
  {
    name: "Köpa",
  },
  {
    name: "Äga",
  },
  {
    name: "Om oss",
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-[64px] flex items-center px-6 ChosenFont font-bold">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto text-[16px] text-center">
        <img
          src={volvoLogo}
          onClick={() => (window.location.href = "https://www.volvocars.com")}
          className="w-[104px] cursor-pointer"
        />
        <span className="flex flex-row gap-4">
          {Items.map((item, index) => (
            <p
              key={index}
              className="p-2 hover:bg-[#80808013] rounded-md cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </span>
        <span className="w-[104px] flex justify-end">
          <div className="p-2 hover:bg-[#80808013] rounded-full cursor-pointer">
            <img src={profileIcon} className="w-5 h-5" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
