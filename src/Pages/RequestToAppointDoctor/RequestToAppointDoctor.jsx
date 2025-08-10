import { useContext, useState } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";
import usePostRequest from "../../Shared/usePostReq";
import SecondaryButton from "../../Shared/SecondaryButton";
import { useNavigate } from "react-router-dom";
import Error from "../../Shared/error/Error";
import uploadToCloudinary from "../../utils/uploadToCloudinary";

const RequestToAppointDoctor = () => {
  const { user } = useContext(authContext);
  const [imgUrl, setImgUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { data, error, loading, post } = usePostRequest();
  const navigate = useNavigate();

  // Handle successful submission
  if (data?.statusbar === 201) {
    toast.success(data.message);
    navigate("/patientAccount");
  }

  // Handle image file selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    try {
      setUploadingImage(true);
      const imageUrl = await uploadToCloudinary(file);
      if (imageUrl) {
        setImgUrl(imageUrl);
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Failed to upload image");
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    
    try {
      const doctorProfileDetails = {
        userId: user._id,
        LoginUserEmail: form.username.value,
        About: form.about.value,
        FirstName: form.firstName.value,
        LastName: form.lastName.value,
        Email: form.email.value,
        MobileNumber: form.mobileNumber.value,
        Country: form.country.value,
        StreetAddress: form.streetAddress.value,
        City: form.city.value,
        Region: form.region.value,
        PostalCode: form.postalCode.value,
        PushNotifications: form.pushNotifications.value,
        DoctorType: form.doctorType.value,
        WorkingHour: form.workingHour.value,
        PerHourCharge: form.hourPrice.value,
        DoctorProfileImage: imgUrl,
      };

      await post("api/v1/doctorProfile", doctorProfileDetails);
    } catch (error) {
      toast.error("Failed to submit form");
      console.error("Form submission error:", error);
    }
  };

  return (
    <section>
      <form onSubmit={handelSubmit} className="mx-20">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input
                      type="text"
                      name="username"
                      id="username"
                      disabled
                      className="block flex-1 font-bold border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      value={user?.email}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Profile Photo
                </label>
                <div className="mt-2">
                  <div className="flex flex-col items-center">
                    {/* Image Preview */}
                    <div className="w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                          <UserCircleIcon className="w-20 h-20 text-gray-300" />
                        </div>
                      )}
                    </div>

                    {/* Upload Section */}
                    <div className="flex flex-col items-center w-full max-w-md">
                      <div className="relative w-full">
                        <input
                          type="file"
                          id="file-upload"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          required={!imgUrl}
                        />
                        <label
                          htmlFor="file-upload"
                          className={`flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer
                            ${uploadingImage ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                        >
                          <PhotoIcon className="w-5 h-5 mr-2 text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">
                            {uploadingImage ? 'Uploading...' : 'Choose Photo'}
                          </span>
                        </label>
                      </div>

                      {uploadingImage && (
                        <div className="mt-2 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-blue-500 mr-2"></div>
                          <span className="text-sm text-gray-600">Uploading...</span>
                        </div>
                      )}

                      {imgUrl && !uploadingImage && (
                        <div className="mt-2 text-sm text-green-600">
                          ✓ Image uploaded successfully
                        </div>
                      )}

                      <p className="mt-2 text-xs text-gray-500">
                        PNG, JPG, or GIF up to 10MB. Professional headshot recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Which type of doctor do you select?
                </label>
                <div className="mt-2">
                  <select
                    id="doctorType"
                    name="doctorType"
                    autoComplete="country-name"
                    required
                    className="block w-full font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option disabled>United States</option>
                    <option>Outpatient Surgery</option>
                    <option>Cardiac Clinicy</option>
                    <option>pregnancy Doctor</option>
                    <option>Gynaecological Clinic</option>
                    <option>Ophthalmology Clinic</option>
                    <option>Laryngological Clinic</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select when you want to work on life sever
                </label>
                <div className="mt-2">
                  <select
                    id="workingHour"
                    name="workingHour"
                    autoComplete="country-name"
                    className="block w-full font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>8AM to 1PM</option>
                    <option>3PM to 8PM</option>
                    <option>9PM to 2AM</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  How much can be paid per hour? US/BDT
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="hourPrice"
                    id="street-address"
                    autoComplete="price"
                    required
                    className="block w-full uppercase ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile Number
                </label>
                <div className="mt-2">
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="number"
                    autoComplete="email"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetAddress"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalCode"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full ps-2 font-bold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Push Notifications
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="pushNotifications"
                      type="radio"
                      value="Everything"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="pushNotifications"
                      type="radio"
                      value="same as email"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="pushNotifications"
                      type="radio"
                      value="No push Notification"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        {/* error handler */}
        <div>{error && <Error>{error}</Error>}</div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <SecondaryButton>
            {loading ? <p>Loading..</p> : <p>submit</p>}
          </SecondaryButton>
        </div>
      </form>
    </section>
  );
};

export default RequestToAppointDoctor;
