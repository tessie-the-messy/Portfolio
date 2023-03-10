import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ReachOut = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "website_contact",
        "contact_form",
        form.current,
        "ED2qYjYNBsRYpxyEP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="card col-8">
      <div className="card-header">
        <h3 className="card-title mb-4 mb-lg-1 fs-4">Or, Reach out here!</h3>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="card-body d-flex flex-column justify-content-between"
      >
        <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="firstname" className="card-text mr-3">
            First Name:
          </label>
          <input
            id="firstname"
            type="text"
            name="user_name"
            className="form-control w-75"
          />
        </div>
        <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="lastname" className="card-text mr-3">
            Last Name:
          </label>
          <input
            id="lastname"
            type="text"
            name="user_surname"
            className="form-control w-75"
          />
        </div>
        <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="email" className="card-text mr-3">
            E-mail:
          </label>
          <input
            id="email"
            type="text"
            name="user_email"
            className="form-control w-75"
          />
        </div>
        <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="company" className="card-text mr-3">
            Company (optional):
          </label>
          <input
            id="company"
            type="text"
            name="user_company"
            className="form-control w-75"
          />
        </div>
        <div className="form-group d-flex align-items-center justify-content-between">
          <label htmlFor="reason" className="card-text mr-3">
            Reason for reaching out:
          </label>
          <select className="form-control w-75" name="user_reason">
            <option selected>Choose a reason:</option>
            <option value="employment">Employment opportunity</option>
            <option value="contract">Contract/Freelance inquiry</option>
            <option value="collab">Interest in Collaboration</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group d-flex justify-content-between">
          <label htmlFor="message" className="card-text mr-3">
            Message:
          </label>
          <textarea
            className="form-control w-75"
            name="message"
            id="message"
            rows="5"
          ></textarea>
        </div>
        <div className="align-self-end mt-1">
          <button
            type="submit"
            value="Send"
            className="btn mr-2 border-dark"
          >
            <span className="btn-text">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReachOut;
