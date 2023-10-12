const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      className="relative text-black px-10 mx-4  py-2 my-1 bg-cover bg-center  bg-no-repeat bg-gradient-to-r hover:from-[#0074B7] hover:to-[#60A3D9] text-xl bg-[#a0c9f0] hover:text-white  font-serif rounded-lg "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
