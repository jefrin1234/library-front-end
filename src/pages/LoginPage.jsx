import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { changeLoginStatus } from "../features/login/loginSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, data, {
        withCredentials: true,
      });

      dispatch(changeLoginStatus({
        loggedIn: true,
        user: response.data,
      }));

      toast.success('Login success');
      navigate('/');
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.message || 'Invalid user information';
      toast.error(errorMessage);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Log In</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: true })} 
            />
            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: true })} 
            />
            {errors.password && <span className="text-red-600 text-sm">Password is required</span>}
          </div>
          <button 
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signin" className="text-indigo-600 hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  )
}
