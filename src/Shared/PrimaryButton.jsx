const PrimaryButton = ({ children, handler }) => {
  return (
    <button
      onClick={handler}
      className="text-white font-sans border py-2 rounded-sm lg:px-6 md:px-4 px-2 uppercase"
    >
      <span className="text-sm font-medium transition-all">{children}</span>
    </button>
  );
};

export default PrimaryButton;
