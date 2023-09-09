import { useEffect, useState } from "react";
import UseGetRequest from "../../Shared/UseGetRequest";
import PrimaryButton from "../../Shared/PrimaryButton";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminSettings = () => {
  const [doctors, setDoctors] = useState([]);
  const [getData] = UseGetRequest("api/v1/doctorProfile");
  console.log(getData);

  // get all doctors
  useEffect(() => {
    setDoctors(getData);
  }, [getData]);

  // Delete user
  const deleteUserHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/doctorProfile/details/${id}`, {
        method: "DELETE",
      })
      // .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          alert(`Delete user`);
          const remaining = doctors.filter((doctor) => doctor._id !== id);
          setDoctors(remaining);
        }
      });
  };

  // admin role set
  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/api/v1/doctorProfile/details/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusbar === 200) {
          window.location.reload();
        }
        console.log(data);

        // if (data.status === 200) {
        // alert(``)
        // const remaining = doctors.filter((doctor) => doctor.Role !== 'admin');
        // setDoctors(remaining);
        // }
      });
  };

  return (
    <section className="flex justify-center">
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date of Birth
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Salary
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y mx-20 divide-gray-200">
            {doctors?.map((doctor) => (
              <>
                <tr className="max-w-lg" key={doctor._id}>
                  <td className="whitespace-nowrap  px-4 py-2 font-medium text-gray-900">
                    {doctor?.FirstName} {doctor?.LastName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {doctor?.updatedAt.slice(0, 10)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {doctor?.DoctorType}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {doctor?.PerHourCharge}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {doctor?.Role === "admin" ? (
                      <button className="disabled bg-slate-400 text-white px-8 py-2">
                        Role set
                      </button>
                    ) : (
                      <div onClick={() => handleAdmin(doctor._id)}>
                        <PrimaryButton>select by doctor</PrimaryButton>
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      to={`/DoctorDetails/${doctor?._id}`}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View details
                    </Link>
                  </td>
                  <td
                    onClick={() => deleteUserHandler(doctor._id)}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      delete user
                    </button>
                  </td>
                </tr>
              </>
            ))}
            {/* <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            test
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                        <td className="whitespace-nowrap px-4 py-2">
                            <a
                                href="#"
                                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                View
                            </a>
                        </td>
                    </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminSettings;
