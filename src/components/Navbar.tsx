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
    <div className="">
      <div className="w-screen h-[64px] px-6 flex items-center bg-white text-[16px] chosenFont font-bold">
        <div className="w-full max-w-7xl flex justify-between items-center mx-auto text-center">
          <img src={volvoLogo} className="w-[104px] cursor-pointer" />
          <span className="flex flex-row gap-4">
            {Items.map((item, index) => (
              <p
                key={index}
                className="p-2 hover:bg-[#8080802b] rounded-md cursor-pointer"
              >
                {item.name}
              </p>
            ))}
          </span>
          <span className="w-[104px] flex justify-end">
            <div className="p-2 hover:bg-[#80808012] rounded-full cursor-pointer">
              <img src={profileIcon} className="w-5 h-5" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
