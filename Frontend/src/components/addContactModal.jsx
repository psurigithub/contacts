/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const AddContactModal = ({ onClose, onAddContact }) => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const isValid = () => {
    let validationErrors = {};

    // Validate first name
    if (!contactData.firstName) {
      validationErrors.firstName = "First name field is required*";
    }

    // Validate last name
    if (!contactData.lastName) {
      validationErrors.lastName = "Last name field is required*";
    }

    // Validate email
    if (!contactData.email) {
      validationErrors.email = "Email field is required*";
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(contactData.email)) {
        validationErrors.email = "Please enter a valid email address*";
      }
    }

    // Validate phone number
    if (!contactData.phone) {
      validationErrors.phone = "Phone number field is required*";
    } else {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(contactData.phone)) {
        validationErrors.phone = "Invalid phone number, must be 10 digits*";
      }
    }

    // Validate address
    if (!contactData.address) {
      validationErrors.address = "Address field is required*";
    }

    // Set validation errors
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError(""); // Clear previous general errors
    if (isValid()) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${import.meta.env.VITE_APP_BACKEND_URL}/create/contact`,
          contactData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        onAddContact(response.data);
        onClose();
      } catch (err) {
        setGeneralError("Failed to add contact.");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Contact</h2>
        {generalError && <p className="text-red-500 mb-4">{generalError}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={contactData.firstName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
      {errors.firstName && <p className="text-red-500 mb-5" style={{ fontSize: '15px' }}>{errors.firstName}</p>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={contactData.lastName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.lastName && <p className="text-red-500 mb-5">{errors.lastName}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactData.email}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 mb-5">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={contactData.phone}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          {errors.phone && <p className="text-red-500 mb-5">{errors.phone}</p>}

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={contactData.address}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          {errors.address && <p className="text-red-500 mb-5">{errors.address}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add Contact
          </button>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-600 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;
