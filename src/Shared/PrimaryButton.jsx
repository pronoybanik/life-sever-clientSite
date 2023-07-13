

const PrimaryButton = ({ children, handler }) => {
    return (
        <button onClick={handler} className="group relative uppercase  bg-cover bg-center  bg-no-repeat bg-gradient-to-r py-2 from-[#ee122f] to-[#e97f4e] mt-2 inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8  text-white focus:outline-none focus:ring active:bg-indigo-500"
        >
            <span className="text-sm font-medium transition-all">
               {children}
            </span>
        </button>
    );
};

export default PrimaryButton;