// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { AuthContext } from '../../context/AuthContext';

// const Login = () => {
//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     username: '', // Change from email to username
//     password: ''
//   });

//   // State to manage loading and success/error messages
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const navigate = useNavigate(); // Initialize navigate
//   const {updateUser} = useContext(AuthContext);

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       // Replace this URL with your actual API endpoint
//       const response = await axios.post('http://localhost:8800/auth/login', formData, { withCredentials: true });

//       // If successful, handle success message
//       setSuccess('Login successful!');
//       console.log('Response:', response.data);

//       updateUser(response.data)

//       // Redirect to home page immediately after successful login
//       navigate('/');
//     } catch (err) {
//       // Handle error
//       setError('Login failed. Please try again.');
//       console.error('Error:', err.response || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto flex justify-between items-center md:h-[calc(100vh-6rem)] px-4 mb-10">
//       {/* Left Side Content */}
//       <div className="flex flex-col gap-5 md:w-3/5 md:flex-[3] md:justify-between">
//         <h2 className="text-4xl font-extrabold text-gray-900">Login to your account</h2>
//         <p className="text-lg text-gray-500">
//           Enter your username and password below to sign in to your account.
//         </p>

//         <form
//           className="flex flex-col gap-6 max-w-full md:max-w-lg bg-white shadow-md p-8 rounded-lg"
//           onSubmit={handleSubmit}
//         >
//           {/* Username */}
//           <div className="relative">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               name="username" // Changed from email to username
//               value={formData.username} // Update value accordingly
//               onChange={handleInputChange}
//               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={loading}
//           >
//             {loading ? 'Logging In...' : 'Login'}
//           </button>

//           {/* Success or Error Messages */}
//           {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//           {success && <p className="text-green-500 text-center mt-4">{success}</p>}

//           {/* Don't have an account */}
//           <p className=" text-center text-gray-500">
//             Don't have an account?{' '}
//             <a href="/register" className="text-blue-500 font-semibold hover:underline">
//               Sign up here
//             </a>
//           </p>
//         </form>
//       </div>

//       {/* Right Side Image */}
//       <div className="hidden lg:block flex-[2] bg-gray-300 h-full relative overflow-visible md:w-2/5">
//         <img
//           src="/bg.png"
//           alt="Background"
//           className="absolute top-0 -left-8 scale-110 h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State to manage loading and success/error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // State to manage individual input errors
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize navigate
  const { updateUser } = useContext(AuthContext);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error message for the respective field when user types
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = 'Username is required.';
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      // Check if password is less than 6 characters
      errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validate the form
    const errors = validateForm();
    setFormErrors(errors);

    // If there are validation errors, stop the form submission
    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      // Replace this URL with your actual API endpoint
      const response = await axios.post('http://localhost:8800/auth/login', formData, { withCredentials: true });

      // If successful, handle success message
      setSuccess('Login successful!');
      console.log('Response:', response.data);

      updateUser(response.data);

      // Redirect to home page immediately after successful login
      navigate('/');
    } catch (err) {
      // Handle error
      setError('Login failed. Please try again.');
      console.error('Error:', err.response || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex justify-between items-center md:h-[calc(100vh-6rem)] px-4 mb-10">
      {/* Left Side Content */}
      <div className="flex flex-col gap-5 md:w-3/5 md:flex-[3] md:justify-between">
        <h2 className="text-4xl font-extrabold text-gray-900">Login to your account</h2>
        <p className="text-lg text-gray-500">
          Enter your username and password below to sign in to your account.
        </p>

        <form
          className="flex flex-col gap-6 max-w-full md:max-w-lg bg-white shadow-md p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          {/* Username */}
          <div className="relative">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your username"
              
            />
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              placeholder="Enter your password"
              
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>

          {/* Success or Error Messages */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}

          {/* Don't have an account */}
          <p className="text-center text-gray-500">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 font-semibold hover:underline">
              Sign up here
            </a>
          </p>
        </form>
      </div>

      {/* Right Side Image */}
      <div className="hidden lg:block flex-[2] bg-gray-300 h-full relative overflow-visible md:w-2/5">
        <img
          src="/bg.png"
          alt="Background"
          className="absolute top-0 -left-8 scale-110 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
