import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

const TeacherProfileModal = (props) => {
  const [profile, setProfile] = useState([]);
  const [gender, setGender] = useState("Select Your Gender");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("City");
  const [state, setState] = useState("State");
  const [nationality, setNationality] = useState("Nationality");
  const [maritalStatus, setMaritalStatus] = useState("Marital Status");
  const [salary, setSalary] = useState("");
  const [doj, setDoj] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [btntext, setBtntext] = useState("Show Profile");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const teacher_id = props.teacher_id;

  useEffect(() => {
    const getSingleTchrProfileData = (teacher_id) => {
      fetch(`http://localhost:8080/getsingletchrpro/${teacher_id}`)
        .then((res) => res.json())
        .then((result) => {
          setProfile(result);
          if (result.length === 0) {
            setBtntext("Complete Profile");
          } else {
            setBtntext("Show Profile");
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    };

    getSingleTchrProfileData(props.teacher_id);
  }, [props.teacher_id]);

  useEffect(() => {
    if (nationality !== "Nationality") {
      const country = Country.getAllCountries().find(
        (c) => c.name === nationality
      );
      if (country) {
        setStates(State.getStatesOfCountry(country.isoCode));
        setCities([]); // Reset cities when nationality changes
      }
    }
  }, [nationality]);

  useEffect(() => {
    if (state !== "State") {
      const country = Country.getAllCountries().find(
        (c) => c.name === nationality
      );
      const stateObj = State.getStatesOfCountry(country.isoCode).find(
        (s) => s.name === state
      );
      if (stateObj) {
        setCities(City.getCitiesOfState(country.isoCode, stateObj.isoCode));
      }
    }
  }, [state, nationality]);

  const handleShowProfile = () => {
    if (profile.length === 0) {
      document.getElementById(`comp_${props.teacher_id}`).showModal();
    } else {
      document.getElementById(`modal_${props.teacher_id}`).showModal();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const postTchrProfile = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    const data = new FormData();
    data.append("teacher_id", teacher_id);
    data.append("email", email);
    data.append("gender", gender);
    data.append("dob", dob);
    data.append("address", address);
    data.append("city", city);
    data.append("state", state);
    data.append("profile_photo", profilePhoto);
    data.append("nationality", nationality);
    data.append("marital_status", maritalStatus);
    data.append("salary", salary);
    data.append("doj", doj);

    fetch("http://localhost:8080/posttchrpro", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log(result);
        // Close the modal after successful submission
        document.getElementById(`comp_${props.teacher_id}`).close();
        props.fetchTeacherData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <>
      <button className="btn btn-sm btn-accent" onClick={handleShowProfile}>
        {btntext}
      </button>

      <dialog id={`comp_${props.teacher_id}`} className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Please Complete Your Profile</h3>
          <form onSubmit={postTchrProfile}>
            <label className="flex items-center gap-2 mb-2 input input-bordered">
              Email
              <input
                type="email"
                className="grow"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <select
              className="w-full mb-2 select select-bordered"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option disabled>Select Your Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <label className="flex items-center gap-2 mb-2 input input-bordered">
              Date Of Birth
              <input
                type="date"
                className="grow"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </label>
            <label className="flex items-center gap-2 mb-2 font-sans input input-bordered">
              Address
              <input
                type="text"
                className="grow"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <select
              className="w-full mb-2 select select-bordered"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
            >
              <option disabled>Nationality</option>
              {Country.getAllCountries().map((currEle, index) => (
                <option key={index}>{currEle.name}</option>
              ))}
            </select>
            <select
              className="w-full mb-2 select select-bordered"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option disabled>State</option>
              {states.map((currEle, index) => (
                <option key={index}>{currEle.name}</option>
              ))}
            </select>
            <select
              className="w-full mb-2 select select-bordered"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option disabled>City</option>
              {cities.map((currEle, index) => (
                <option key={index}>{currEle.name}</option>
              ))}
            </select>
            <select
              className="w-full mb-2 select select-bordered"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              required
            >
              <option disabled>Marital Status</option>
              <option>Married</option>
              <option>Unmarried</option>
            </select>
            <label className="flex items-center gap-2 mb-2 font-sans input input-bordered">
              Salary
              <input
                type="number"
                className="grow"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
            </label>
            <label className="flex items-center gap-2 mb-2 font-sans input input-bordered">
              Joining Date
              <input
                type="date"
                className="grow"
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
                required
              />
            </label>
            <label className="flex items-center gap-4 mb-2 font-sans input input-bordered">
              Profile Photo
              <input
                type="file"
                className="w-full max-w-xs file-input file-input-sm"
                onChange={handleFileChange}
                required
              />
            </label>
            <button type="submit" className="mt-2 btn">
              Submit
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>

      {profile.map((currEle, index) => {
        const formattedDoj = new Date(currEle.doj).toLocaleString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        const formattedDob = new Date(currEle.dob).toLocaleString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        return (
          <div key={index}>
            <dialog id={`modal_${props.teacher_id}`} className="modal">
              <div className="max-w-md p-6 mx-auto rounded-lg shadow-lg modal-box">
                <div className="flex items-center mb-6 justify-evenly">
                  <div className="avatar">
                    <div className="w-24 h-24 overflow-hidden rounded-full">
                      <img
                        src={currEle.profile_photo}
                        alt="Profile Photo"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-center">
                    <h1 className="mb-2 text-2xl font-bold text-gray-400">
                      {props.teacher_name}
                    </h1>
                    <h1 className="mb-4 text-lg text-gray-500">
                      {currEle.email}
                    </h1>
                  </div>
                </div>
                <ul className="px-3 py-2 mt-3 text-gray-500 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3 text-sm">
                    <span>Gender</span>
                    <span className="ml-auto">{currEle.gender}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Date Of Birth</span>
                    <span className="ml-auto">{formattedDob}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Address</span>
                    <span className="ml-auto">{currEle.address}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>City</span>
                    <span className="ml-auto">{currEle.city}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>State</span>
                    <span className="ml-auto">{currEle.state}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Nationality</span>
                    <span className="ml-auto">{currEle.nationality}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Marital Status</span>
                    <span className="ml-auto">{currEle.marital_status}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Salary</span>
                    <span className="ml-auto">₹ {currEle.salary}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span>
                        {props.status === "active" ? (
                          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-200 rounded-full">
                            active
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-200 rounded-full">
                            inactive
                          </span>
                        )}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Joined On</span>
                    <span className="ml-auto">{formattedDoj}</span>
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button
                  onClick={() =>
                    document.getElementById(`modal_${props.teacher_id}`).close()
                  }
                >
                  Close
                </button>
              </form>
            </dialog>
          </div>
        );
      })}
    </>
  );
};

export default TeacherProfileModal;
