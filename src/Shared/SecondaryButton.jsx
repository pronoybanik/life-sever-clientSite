const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      className="relative text-black px-10  py-2 my-1 bg-cover bg-center  bg-no-repeat bg-gradient-to-r hover:from-[#ee122f] hover:to-[#e97f4e] text-xl bg-red-200 hover:text-white  font-serif rounded-lg "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
