import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignupForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/signup`, data);
      navigate('/login');
    } catch (error) {
      console.error(error);
      toast.error("Error signing up. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
        </div>

        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              id="name"
              {...register('name', { required: true, maxLength: 15 })}
            />
            {errors.name && <ErrorMessage type={errors.name.type} field={'name'} />}
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && <ErrorMessage field={'email'} type={errors.email.type} />}
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              type="password"
              id="password"
              {...register('password', {
                required: true,
                pattern: /^.{6,}$/, // Minimum 6 characters
              })}
            />
            {errors.password && <ErrorMessage field={'password'} type={errors.password.type} />}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: true,
                validate: value => value === password || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <ErrorMessage field={'confirmPassword'} type={errors.confirmPassword.type} message={errors.confirmPassword.message} />}
          </div>

          <button 
            className='w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200'
            type="submit"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}
