import React, { useState } from 'react';
import './index.css';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    department: '',
    dob: '',
    couponid: '',
    password: '',
    confirmPassword: '',
  });

  const [selectedOption, setSelectedOption] = useState('');
  const [options] = useState([
    { value: 'Wac', label: 'Wealth and Craftsmanship (WAC)' },
    { value: 'ddp', label: 'Doctrinal Dialects and Polemics (DDP)' },
    { value: 'gaa', label: 'Governance and Administration (GAA)' },
    { value: 'pap', label: 'Pneumatology and Proseuche (PAP)' },
    { value: 'eae', label: 'Ecclesiology and Ecumenism (EAE)' },
    { value: 'wpl', label: 'Witnessing and Purposeful Living (WPL)' },
    { value: 'ka', label: 'Kingdom Artistry (KA)' },
    { value: 'cr', label: 'Covenant Relationship (CR)' },
  ]);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
    setFormData({ ...formData, department: event.target.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Submitting form data:', formData); // Debug log

      const response = await fetch('/api/selected-option', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      console.log('Response status:', response.status); // Debug log

      if (!response.ok) {
        throw new Error('Failed to send selected option to backend');
      }

      // Redirect to home page on success
      window.location.href = '/';
    } catch (error) {
      console.error('Error sending selected option to backend:', error);

      toast.error('Submission failed. Please try again and fill in all required fields.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const [formStep, setFormStep] = useState(0);

  const updateFormSteps = (step) => {
    setFormStep(step);
  };

  const updateProgressBar = () => {
    return ((formStep) / 4) * 100 + "%";  // Update progress bar calculation
  };

  const nextStep = () => {
    if (formStep < 4) {  // Update max step value
      updateFormSteps(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 0) {
      updateFormSteps(formStep - 1);
    }
  };

  return (
      <div className='py-32 px-[10vw]'>
          {/* heading */}
          <div className='bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-14 text-center'>
                     <p className='font-bold text-accent'> SOD REGISTRATION</p>
                    <h1 className='text-3xl py-2 font-bold text-secondary'>Proceed to Register</h1>
             
            </div>

          <div className=" flex items-center justify-center">
          
             

          <form className="form w-full max-w-lg p-8 bg-gray-100 rounded shadow-md" onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center mb-4">Registration Form</h1>
            {/* Progress bar */}
            <div className="progressbar flex justify-between mb-8 relative z-0">
              <div className="progress absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-gray-300 z-0" style={{ width: updateProgressBar() }} />
              <div className={`progress-step ${formStep >= 0 && 'progress-step-active'} relative z-10 w-8 h-8 bg-accent text-wrap rounded-full flex items-center justify-center`} data-title="Intro"></div>
              <div className={`progress-step ${formStep >= 1 && 'progress-step-active'} relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`} data-title="Contact"></div>
              <div className={`progress-step ${formStep >= 2 && 'progress-step-active'} relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`} data-title="ID"></div>
              <div className={`progress-step ${formStep >= 3 && 'progress-step-active'} relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`} data-title="Password"></div>
              <div className={`progress-step ${formStep >= 4 && 'progress-step-active'} relative z-10 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center`} data-title="Complete"></div> {/* New step */}
            </div>
    
            {/* Steps */}
            {formStep === 0 && (
                      <div className="form-step form-step-active">
                          <div>
                          <p className='font-bold text-accent text-center pb-4'>Personal Details</p>
                          </div>
                <div className="input-group mb-4">
                  <label htmlFor="firstname" className="block text-sm font-medium mb-2">Firstname</label>
                  <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="input-group mb-4">
                  <label htmlFor="surname" className="block text-sm font-medium mb-2">Surname</label>
                  <input type="text" name="surname" id="surname" value={formData.surname} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="text-right">
                  <button type="button" className="btn bg-accent text-white py-2 px-4 rounded ml-auto" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}
            {formStep === 1 && (
                      <div className="form-step">
                          <div>
                          <p className='font-bold text-accent text-center pb-4'>Personal Details</p>
                          </div>
                <div className="input-group mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full " />
                </div>
                <div className="input-group mb-4">
                  <label htmlFor="department" className="block text-sm font-medium mb-2">Department</label>
                  <select
                    value={selectedOption}
                    onChange={handleOptionSelect}
                    className="block appearance-none border w-full  border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                  >
                    <option value="">Select an option</option>
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <button type="button" className="btn bg-gray-500 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>
                  <button type="button" className="btn bg-accent text-white py-2 px-4 rounded" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}
            {formStep === 2 && (
            <div className="form-step">
              <div className='Ben'>

              </div>
                          <div>
                          <p className='  font-bold text-accent text-center pb-4'>Payment</p>
                          </div>
                <div className="input-group mb-4">
                  <label htmlFor="dob" className="block text-sm font-medium mb-2">Paystack</label>
                  <input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="input-group mb-4">
                  <label htmlFor="couponid" className="block text-sm font-medium mb-2">*Use coupon </label>
                  <input type="number" name="couponid" id="couponid" value={formData.couponid} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="flex justify-between">
                  <button type="button" className="btn bg-gray-500 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>
                  <button type="button" className="btn bg-accent text-white py-2 px-4 rounded" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}
            {formStep === 3 && (
              <div className="form-step">
                <div className="input-group mb-4">
                  <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                  <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="input-group mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" />
                </div>
                <div className="flex justify-between">
                  <button type="button" className="btn bg-gray-500 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>
                  <button type="button" className="btn bg-accent text-white py-2 px-4 rounded" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}
            {formStep === 4 && (
              <div className="form-step ">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-accent">Confirmation</h2>
                  <p className='text-secondary font-semibold'>Please confirm your details before submitting:</p>
                </div>
                <div className="mb-4">
                  <strong>Firstname:</strong> {formData.firstname}
                </div>
                <div className="mb-4">
                  <strong>Surname:</strong> {formData.surname}
                </div>
                <div className="mb-4">
                  <strong>Email:</strong> {formData.email}
                </div>
                <div className="mb-4">
                  <strong>Department:</strong> {options.find(option => option.value === formData.department)?.label}
                </div>
                <div className="mb-4">
                  <strong>Date of Birth:</strong> {formData.dob}
                </div>
                <div className="mb-4">
                  <strong>Coupon ID:</strong> {formData.couponid}
                </div>
                <div className="mb-4">
                  <strong>Password:</strong> {formData.password ? '******' : ''}
                </div>
                <div className="flex justify-between">
                  <button type="button" className="btn bg-gray-500 text-white py-2 px-4 rounded" onClick={prevStep}>Previous</button>
                  <input type="submit" value="Submit" className="btn bg-accent text-white py-2 px-4 rounded" />
                </div>
                <ToastContainer 
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition={Bounce}
                />
              </div>
            )}
          </form>
        </div>
      </div>
  );
}

export default App;
