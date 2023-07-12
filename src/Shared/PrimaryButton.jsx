

const PrimaryButton = ({ children }) => {
    return (
        <div>


            <button
                className="inline-block uppercase font-serif  rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/download"
            >
                <span
                    className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                >
                    {children}
                </span>
            </button>




        </div>
    );
};

export default PrimaryButton;