import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../services/axiosInstance';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Enter a valid email address';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post('/accounts/password_reset/', { email });
      toast.success('Password reset link sent to your email.', { position: 'top-right', autoClose: 3000 });
    } catch (error) {
      toast.error(
        error.response?.data?.email?.[0] || 'An error occurred. Please try again later.',
        { position: 'top-right', autoClose: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <ToastContainer />
      <div className="w-full max-w-md space-y-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">Reset Password</h2>
        <form className="mt-8 space-y-6" onSubmit={handleResetPassword}>
          <InputField
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
