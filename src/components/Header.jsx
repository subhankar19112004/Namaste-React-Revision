import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className=" flex justify-between items-center border border-black m-2">
      <div>
        <img
          className="w-20 h-20"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex mr-5 font-sans text-[20px]">
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;