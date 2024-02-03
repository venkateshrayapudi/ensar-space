import React, { useState } from 'react';
import { Button } from "@fluentui/react-components";
import {
  Field,
  Input,
} from "@fluentui/react-components";
import { PersonRegular, PhoneAddRegular, PersonTagRegular, AppTitleRegular, GlobeLocationRegular, MailEditRegular } from "@fluentui/react-icons";


function AddEmployee() {

  const initialFormData = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userId: '',
    jobTitle: '',
    fullName: '',
    empCode: '',
    region: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const initialFormErrors = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userId: '',
    jobTitle: '',
    fullName: '',
    empCode: '',
    region: '',
  };

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    }

    if (!formData.userId) {
      errors.userId = 'User ID is required';
    }

    if (!formData.jobTitle) {
      errors.jobTitle = 'Job title is required';
    }

    if (!formData.fullName) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.empCode) {
      errors.empCode = 'Employee code is required';
    }

    if (!formData.region) {
      errors.region = 'Region is required';
    }



    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {

      const employeeData = {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        userId: formData.userId,
        jobTitle: formData.jobTitle,
        fullName: formData.fullName,
        empCode: formData.empCode,
        region: formData.region,
      };

      console.log("Employee Data:", employeeData);
      setFormData(initialFormData);
      alert('Form submitted successfully');
    }
  };


  return (
    <div className="container">
      <div className="employee-container">
        <div className="form-wrap">
          <h1>Employee Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <Field
                label='Email Address'
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className={formErrors.email ? 'error-input' : ''}
                validationMessage={formErrors.email}
              >
                <Input
                  placeholder="Enter your email"
                  contentBefore={<MailEditRegular />} />
              </Field>

              <Field
                label='First Name'
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={formErrors.firstName ? 'error-input' : ''}
                validationMessage={formErrors.firstName}
              >
                <Input
                  placeholder="Enter your first name"
                  contentBefore={<PersonRegular />} />
              </Field>
            </div>
            <div className="form-row">
              <Field
                label='Last Name'
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={formErrors.lastName ? 'error-input' : ''}
                validationMessage={formErrors.lastName}
              >
                <Input
                  placeholder="Enter your last name"
                  contentBefore={<PersonRegular />} />
              </Field>
              <Field
                label='Phone Number'
                type="number"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={formErrors.phoneNumber ? 'error-input' : ''}
                validationMessage={formErrors.phoneNumber}
              >
                <Input
                  placeholder="Enter your phone number"
                  contentBefore={<PhoneAddRegular />} />
              </Field>
            </div>

            <div className="form-row">
              <Field
                label='User ID'
                type="text"
                id="userId"
                value={formData.userId}
                onChange={handleInputChange}
                className={formErrors.userId ? 'error-input' : ''}
                validationMessage={formErrors.userId}
              >
                <Input
                  placeholder="Enter your user ID"
                  contentBefore={<PersonTagRegular />} />
              </Field>

              <Field
                label='Job Title'
                type="text"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className={formErrors.jobTitle ? 'error-input' : ''}
                validationMessage={formErrors.jobTitle}
              >
                <Input
                  placeholder="Enter your job title"
                  contentBefore={<AppTitleRegular />} />
              </Field>
            </div>

            <div className="form-row">
              <Field
                label='Full Name'
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={formErrors.fullName ? 'error-input' : ''}
                validationMessage={formErrors.fullName}
              >
                <Input
                  placeholder="Enter your full name"
                  contentBefore={<PersonRegular />} />
              </Field>
              <Field
                label='Employee Code'
                type="text"
                id="empCode"
                value={formData.empCode}
                onChange={handleInputChange}
                className={formErrors.empCode ? 'error-input' : ''}
                validationMessage={formErrors.empCode}
              >
                <Input
                  placeholder="Enter employee code"
                  contentBefore={<PersonRegular />} />
              </Field>
            </div>

            <div className="form-row">
              <Field
                label='Region'
                type="text"
                id="region"
                value={formData.region}
                onChange={handleInputChange}
                className={formErrors.region ? 'error-input' : ''}
                validationMessage={formErrors.region}
              >
                <Input
                  placeholder="Enter your region"
                  contentBefore={<GlobeLocationRegular />} />
              </Field>
            </div>
            <Button type="submit" appearance='primary'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
