import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import InputField from '../../components/InputField';
import Dropdown from '../../components/Dropdown';
import axiosInstance from '../../services/axiosInstance';

const GeneralSettings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    language: 'English',
    companyName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    vatNumber: '',
    billingEmail: '',
    photo: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('accounts/info/', {
          headers: {
            'X-CSRFToken': 'muyVvZIfzrrCYXM6rez8dCZdCmseFvHMcJ6XKR3cf6OmC46nzLNcan84W7jGszqW', 
          },
        });

        if (response && response.data) {
          const user = response.data;

          setFormData({
            firstName: user.first_name || '',
            lastName: user.last_name || '',
            email: user.email || '',
            language: user.language || 'English',
            companyName: user.company_name || '',
            address: user.address || '',
            city: user.city || '',
            postalCode: user.postalCode || '',
            country: user.country || '',
            vatNumber: user.vatNumber || '',
            billingEmail: user.billingEmail || '',
            photo: user.picture || null,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64 overflow-y-auto">
        <Header />
        <main className="p-6 bg-gray-50">
          <form className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">User</h2>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="First Name"
                  type="text"
                  value={formData.firstName}
                  disabled
                />
                <InputField
                  label="Last Name"
                  type="text"
                  value={formData.lastName}
                  disabled
                />
                <InputField
                  label="Email"
                  type="email"
                  value={formData.email}
                  disabled
                />
                <Dropdown
                  label="Language"
                  options={[
                    { label: 'English', value: 'English' },
                    { label: 'French', value: 'French' },
                  ]}
                  value={formData.language}
                  disabled
                />
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Photo</label>
                  {formData.photo && (
                    <img
                      src={formData.photo}
                      alt="User photo"
                      className="mt-2 w-32 h-32 rounded-full object-cover"
                    />
                  )}
                  <input
                    type="file"
                    disabled
                    className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Company</h2>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Company Name"
                  type="text"
                  value={formData.companyName}
                  disabled
                />
                <InputField
                  label="Address"
                  type="text"
                  value={formData.address}
                  disabled
                />
                <InputField
                  label="City"
                  type="text"
                  value={formData.city}
                  disabled
                />
                <InputField
                  label="Postal Code"
                  type="text"
                  value={formData.postalCode}
                  disabled
                />
                <Dropdown
                  label="Country"
                  options={[
                    { label: 'United States', value: 'United States' },
                    { label: 'France', value: 'France' },
                    { label: 'Pakistan', value: 'Pakistan' },
                  ]}
                  value={formData.country}
                  disabled
                />
                <InputField
                  label="VAT Number"
                  type="text"
                  value={formData.vatNumber}
                  disabled
                />
                <InputField
                  label="Billing Email Address"
                  type="email"
                  value={formData.billingEmail}
                  disabled
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Preferences</h2>
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Number of Decimal Places"
                  type="number"
                  value={2}
                  disabled
                />
                <Dropdown
                  label="Thousands Separator"
                  options={[
                    { label: 'Space', value: ' ' },
                    { label: 'Comma (,)', value: ',' },
                  ]}
                  value=" "
                  disabled
                />
                <Dropdown
                  label="Decimal Separator"
                  options={[
                    { label: 'Dot (.)', value: '.' },
                    { label: 'Comma (,)', value: ',' },
                  ]}
                  value="."
                  disabled
                />
                <InputField
                  label="Date Format"
                  type="text"
                  value="YYYY-MM-DD"
                  disabled
                  placeholder="e.g., YYYY-MM-DD"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                disabled
              >
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default GeneralSettings;

