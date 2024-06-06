import { useEffect, useState } from "react";
import "./Register.css";
import logo from "../../assets/Logo.png";
import UseFetch from "../FetchData/UseFetch";

const Register = () => {
  const [submitSuccess, setSubmitSuccess] = useState("false");

  const [userDataForm, setUserDataForm] = useState({
    username: "",
    birth: "",
    gender: "",
    email: "",
    phone: "",
    role: "Student",
    knowleadge: "Uninformed",
    purpose: "",
  });

  const url = "https://httpbin.org/post";

  const fetchData = async (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDataForm({
      ...userDataForm,
      [name]: value,
    });
  };

  const handleOnFocus = (e) => {};

  const hanldeSubmit = (e) => {
    setUserDataForm({
      ...userDataForm,
    });

    // Send Data to db
    if (
      (userDataForm.username !== "") &
      (userDataForm.username !== undefined) &
      ((userDataForm.email !== "") & (userDataForm.email !== undefined)) &
      ((userDataForm.birth !== "") & (userDataForm.birth !== undefined)) &
      ((userDataForm.gender !== "") & (userDataForm.gender !== undefined)) &
      ((userDataForm.phone !== "") & (userDataForm.phone !== undefined)) &
      ((userDataForm.role !== "") & (userDataForm.role !== undefined)) &
      ((userDataForm.knowleadge !== "") &
        (userDataForm.knowleadge !== undefined)) &
      ((userDataForm.purpose !== "") & (userDataForm.purpose !== undefined))
    ) {
      setSubmitSuccess("true");
      let data = {
        username: userDataForm.username,
        birth: userDataForm.birth,
        email: userDataForm.email,
        gender: userDataForm.gender,
        phone: userDataForm.phone,
        role: userDataForm.role,
        knowleadge: userDataForm.knowleadge,
        purpose: userDataForm.purpose
      };
      fetchData(url, data);
    }

    var error = document.getElementsByClassName("error");
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }

    // Handle error for username
    if (
      (userDataForm.username === "") |
      (userDataForm.username === undefined)
    ) {
      let errorItem = document.getElementById("error_username");
      errorItem.innerHTML = "Username is required.";
      setSubmitSuccess("false");
    }

    // Handle error for email (sai dinh dang)
    const emailInput = userDataForm.email;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
      let errorItem = document.getElementById("error_email");
      errorItem.innerHTML = "Email is not in the correct format.";
      setSubmitSuccess("false")
    }

    if ((userDataForm.email === "") | (userDataForm.email === undefined)) {
      let errorItem = document.getElementById("error_email");
      errorItem.innerHTML = "Email is required.";
      setSubmitSuccess("false");
    }

    // Handle error for date of birth
    if ((userDataForm.birth === "") | (userDataForm.birth === undefined)) {
      let errorItem = document.getElementById("error_birth");
      errorItem.innerHTML = "Birth is required.";
      setSubmitSuccess("false");
    }

    // Handle error for gender
    if ((userDataForm.gender === "") | (userDataForm.gender === undefined)) {
      let errorItem = document.getElementById("error_gender");
      errorItem.innerHTML = "Gender is required.";
      setSubmitSuccess("false");
    }

    // Handle error for phone
    const phoneInput = userDataForm.phone;
    const phonePattern = /[0-9]{10,11}/;

    if (!phonePattern.test(phoneInput)) {
      let errorItem = document.getElementById("error_phone");
      errorItem.innerHTML = "Phone number is not in the correct format.";
      setSubmitSuccess("false")
    }

    if ((userDataForm.phone === "") | (userDataForm.phone === undefined)) {
      let errorItem = document.getElementById("error_phone");
      errorItem.innerHTML = "Phone is required.";
      setSubmitSuccess("false");
    }

    // Handle error for role
    if ((userDataForm.role === "") | (userDataForm.role === undefined)) {
      let errorItem = document.getElementById("error_role");
      errorItem.innerHTML = "Role is required.";
      setSubmitSuccess("false");
    }

    // Handle error for knowleadge
    if (
      (userDataForm.knowleadge === "") |
      (userDataForm.knowleadge === undefined)
    ) {
      let errorItem = document.getElementById("error_knowleadge");
      errorItem.innerHTML = "Knowleadge is required.";
      setSubmitSuccess("false");
    }

    // Handle error for purpose
    if ((userDataForm.purpose === "") | (userDataForm.purpose === undefined)) {
      let errorItem = document.getElementById("error_purpose");
      errorItem.innerHTML = "Purpose is required.";
      setSubmitSuccess("false");
    }

    // console.log(submitSuccess)
  };

  return (
    <div className="khung">
      {submitSuccess === "false" && (
        <div className="Register-form">
          <div className="register-container">
            <div className="register-header">
              <img src={logo} className="logo-img"></img>
            </div>

            <div className="register-title">Connect with us!</div>

            <div className="register-welcome">
              Join the course, open the future!
            </div>

            <div className="register-form">
              <div id="name-of-user">
                <label>Your name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your name"
                  onChange={(e) => handleChange(e)}
                  required
                ></input>
                <div id="error_username" className="error"></div>
              </div>

              <div>
                <label>Date of birth</label>
                <input
                  type="date"
                  name="birth"
                  onChange={(e) => handleChange(e)}
                  required
                ></input>
                <div id="error_birth" className="error"></div>
              </div>

              <div>
                <label>Gender</label>

                <label for="male" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={(e) => handleChange(e)}
                    required
                  ></input>
                  Male
                </label>

                <label for="female" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  Female
                </label>

                <label for="other" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  Other
                </label>

                <div id="error_gender" className="error"></div>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  onChange={(e) => handleChange(e)}
                ></input>
                <div id="error_email" className="error"></div>
              </div>

              <div>
                <label>Phone number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  onChange={(e) => handleChange(e)}
                ></input>
                <div id="error_phone" className="error"></div>
              </div>

              <div className="select-role">
                <label>You are </label>
                <select
                  name="role"
                  onChange={(e) => handleChange(e)}
                  className="role"
                >
                  <option>Student</option>
                  <option>Employee</option>
                  <option>Other</option>
                </select>

                <div id="error_role" className="error"></div>
              </div>

              <div className="select-knowledge">
                <label>Knowledge about AI </label>
                <select
                  name="knowleadge"
                  onChange={(e) => handleChange(e)}
                  className="knowleadge"
                >
                  <option>Uninformed</option>
                  <option>Basic understanding</option>
                  <option>Knowledgeable</option>
                  <option>Expert</option>
                </select>

                <div id="error_knowleadge" className="error"></div>
              </div>

              <div>
                <label>Your goals</label>
                <input
                  type="text"
                  className="purpose"
                  name="purpose"
                  onChange={(e) => handleChange(e)}
                ></input>

                <div id="error_purpose" className="error"></div>
              </div>

              <div className="submit-form">
                <button
                  className="form-submit-btn"
                  onClick={() => hanldeSubmit(Event)}
                >
                  Register now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitSuccess === "true" && (
        <div className="submit-success">
          <div className="submit-success-notify">
            <div className="notification"> Register successfully.</div>
            <div className="home_back">
              <a href="/">&#60;&#60; Go to Homepage</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
