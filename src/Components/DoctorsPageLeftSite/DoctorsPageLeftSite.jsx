import React from 'react';

const DoctorsPageLeftSite = () => {
    return (
        <section>
            {/* search dockers (start) */}
            <div className='flex mt-2 mx-2'>
                <div className='  justify-between lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                    <label
                        for="UserEmail"
                        className="block mr-2 overflow-hidden rounded-md border border-gray-200 px-10 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <span className="text-xs  font-bold text-gray-700"> search </span>

                        <input
                            type="type"
                            id="UserEmail"
                            placeholder="searching..."
                            className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                    </label>
                </div>
                <button
                    className="group  relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                    href="/download"
                >
                    <span
                        className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                    ></span>

                    <span
                        className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                    >
                        search
                    </span>
                </button>
            </div>
            {/* search dockers (end) */}

            <div className='border-2 mt-4 mx-2 px-2 py-4'>


                <div>
                    <label for="UserEmail" className="block   text-lg font-medium text-gray-700">
                        speciality
                    </label>

                    <input
                        type="email"
                        id="UserEmail"
                        placeholder="search...."
                        className="mt-1 w-full py-4 ml-2 rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                </div>

                {/* <div>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label uppercase">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Hard" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div> */}
                <div>
                    <fieldset className="space-y-4">
                        <legend className="sr-only">Delivery</legend>

                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="peer hidden [&:checked_+_label_svg]:block"
                                checked
                            />

                            <label
                                for="DeliveryStandard"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Standard</p>
                                </div>

                                <p className="text-gray-900">Free</p>
                            </label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryPriority"
                                id="DeliveryPriority"
                                className="peer hidden [&:checked_+_label_svg]:block"
                            />

                            <label
                                for="DeliveryPriority"
                                className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                            >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="hidden h-5 w-5 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <p className="text-gray-700">Next Day</p>
                                </div>

                                <p className="text-gray-900">£9.99</p>
                            </label>
                        </div>
                    </fieldset>

                </div>

            </div>

        </section>
    );
};

export default DoctorsPageLeftSite;