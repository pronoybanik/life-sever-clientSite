import { Link } from 'react-router-dom';
import siteLogo from '../../imges/siteImage/340800268_560723189381106_5880403428875795146_n.png'
import bgImage from '../../imges/siteImage/pexels-skylar-kang-6207368.jpg'
import { useContext, useState } from 'react';
import { authContext } from '../../Components/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
    const { createAccount, googleLogin } = useContext(authContext);
    const [checkBox, setCheckBox] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState('');

    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target
        const fastName = from.firstName.value;
        const lastName = from.lastName.value;
        const email = from.email.value;
        const password = from.password.value;
        const passwordConfirmation = from.passwordConfirmation.value;
        const checkBoxValue = checkBox;
        const savePass = password === passwordConfirmation
        console.log(fastName, lastName, email, password, passwordConfirmation, checkBoxValue);
        console.log("save", savePass);

        {
            savePass && true ? createAccount(email, password)
                .then(data => {
                    const user = data.user
                    console.log(user);
                    setUser(user)
                    setError('')
                    from.reset('')
                })
                .catch(error => {
                    // const errorMessage = error
                    setError(error.message)
                    console.log(error.message);
                })
                :
                setError("Pass word are Match")
        }

    };





    return (
        <div className='max-w-screen-2xl mt-8  mx-auto'>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-4/5 xl:col-span-6"
                    >
                        <img
                            alt="Night"
                            src={bgImage}
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        <div className="hidden lg:relative lg:block lg:p-12">
                            <Link className="block text-white" >
                                <span className="sr-only">Home</span>

                                <img src={siteLogo} alt="" className='w-72 mr-10' />
                            </Link>

                            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome to Life Sever 😊
                            </h2>

                            <p className="mt-4 leading-relaxed text-white/90">
                                patient registration page! We are committed to providing you with the highest level of care and attention. Please fill out the following information to help us better understand your needs and provide you with the best possible care.
                            </p>
                        </div>
                    </section>


                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div>
                            {/* google register */}
                            <a onClick={handleGoogle}  className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg ">
                                <div className="px-4 py-2">
                                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>
                                </div>

                                <span className="w-5/6  py-3 font-bold text-center mr-4">Sign in with Google</span>
                            </a>
                            <p>gmail: {user?.email}</p>

                            {/* register filed */}
                            <div className="max-w-xl lg:max-w-3xl">
                                <div className="relative -mt-16 block lg:hidden">

                                    <Link className="block text-white" to='/'>
                                        <span className="sr-only">Home</span>

                                        <img src={siteLogo} alt="" className='w-40 mr-10 ' />
                                    </Link>

                                    <h1
                                        className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                    >
                                        Welcome to Squid 🦑
                                    </h1>

                                    <p className="mt-4 leading-relaxed text-gray-500">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                                        nam dolorum aliquam, quibusdam aperiam voluptatum.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-6  lg:mb-36 grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            id="FirstName"
                                            name="firstName"
                                            required
                                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label

                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            id="LastName"
                                            name="lastName"
                                            required
                                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            required
                                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                        />
                                    </div>


                                    <div className="col-span-6 sm:col-span-3">
                                        <label

                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="Password"
                                            name="password"
                                            required
                                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label

                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password Confirmation
                                        </label>

                                        <input
                                            type="password"
                                            id="PasswordConfirmation"
                                            name="passwordConfirmation"
                                            required
                                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                        />


                                    </div>


                                    <div className="col-span-6">
                                        <label className="flex gap-4">
                                            <input
                                                type="checkbox"
                                                id="MarketingAccept"
                                                name="marketingAccept"
                                                required
                                                className="h-5 w-5 bg-white border rounded-lg shadow-sm focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                                onClick={() => {
                                                    setCheckBox(!checkBox)
                                                }}

                                            />

                                            <span className="text-sm text-gray-700">
                                                I want to receive emails about events, product updates and
                                                company announcements.
                                            </span>
                                        </label>
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-gray-500">
                                            By creating an account, you agree to our
                                            <Link to='' className="text-gray-700 underline">
                                                terms and conditions
                                            </Link>
                                            and
                                            <Link to='' className="text-gray-700 underline">privacy policy</Link>.
                                        </p>
                                    </div>

                                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                        <button
                                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 text-xl py-3 pl-2text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        >
                                            Create an account
                                        </button>

                                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <Link to='/logIn' className="text-gray-700 ml-2 underline">Log in</Link>.
                                        </p>

                                    </div>
                                </form>
                                {/* error  */}


                                {error && <div role="alert" className="rounded border-s-4 -mt-32 w-full w border-red-500 bg-red-50 p-4">
                                    <div className="flex items-center gap-2 text-red-800">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>

                                        <strong className="block font-medium"> {error} </strong>
                                    </div>


                                </div>}
                            </div>
                        </div>




                    </main>
                </div>

            </section>


        </div>
    );
};

export default Register;