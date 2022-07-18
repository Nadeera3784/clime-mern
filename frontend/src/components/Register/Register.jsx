import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import AlertError from '@/components/Shared/Alert/Error';
import AlertSuccess from '@/components/Shared/Alert/Success';

import httpService from '@/services/Http';

function Register() {


    const [loading, setLoading] = useState(false);
    const [serverErrors, setServerErrors] = useState(false);
    const [serverErrorMessages, setServerErrorMessages] = useState([]);
    const [acccountCreated, setAccountCreated] = useState(false);

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        } 
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } 
        if (!values.password_confirmation) {
            errors.password_confirmation = 'Confirm Password is required';
        } 
        if(values.password && values.password_confirmation){
            if(values.password !== values.password_confirmation){
                errors.password_confirmation = 'Confirm password does not match with password';
            }
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          password_confirmation: ''
        },
        validate,
        onSubmit: async function(payload, { resetForm }){
          setLoading(true);
          httpService.post('/auth/register', payload).then(async function (response) {
            setLoading(false);
            resetForm();
            setAccountCreated(true);
          }).catch(function (error) {
            if(error){
                if(error.response.status == 422){
                    setServerErrors(true);
                    setServerErrorMessages(error.response.data.data);
                }
             }
            setLoading(false);
          });
        },
    });

    return (
        <div className="flex flex-col mx-auto w-full min-h-screen bg-gray-100">
            <main  className="flex flex-auto flex-col max-w-full">  
                <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
                <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 w-32 h-32 lg:w-48 lg:h-48 transform translate-x-16 translate-y-16"></div>
                <div className="pattern-dots-md text-gray-300 absolute bottom-0 left-0 w-32 h-32 lg:w-48 lg:h-48 transform -translate-x-16 -translate-y-16"></div>
                <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12 relative">
                    <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                        <svg className="hi-solid hi-cube-transparent inline-block w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                        </svg>
                        <span>Clime</span>
                    </h1>
                    <p className="text-gray-500"> Create your own account in one single step </p>
                    </div>
                    <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                    <div className="p-5 lg:p-6 flex-grow w-full">
                        <div className="sm:p-5 lg:px-10 lg:py-8">
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            {
                                serverErrors  && serverErrorMessages.map((error, i) => (
                                    <AlertError message={error.msg} key={i}/>
                                ))
                            }  

                            {acccountCreated ? <AlertSuccess message="You have been successfully registered and logged in"/> : null}

                            <div className="space-y-1">
                                <label htmlFor="name" className="font-medium">Name</label>
                                <input 
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    type="text" 
                                    id="name" 
                                    name="name"  
                                    placeholder="Enter your first name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.errors.name ? <AlertError message={formik.errors.name}/> : null}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="email" className="font-medium">Email</label>
                                <input 
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Enter your email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} 
                                />
                                {formik.errors.email ? <AlertError message={formik.errors.email}/> : null}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password" className="font-medium">Password</label>
                                <input 
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    placeholder="Choose a strong password" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password} 
                                />
                                {formik.errors.password ? <AlertError message={formik.errors.password}/> : null}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="password_confirmation" className="font-medium">Confirm Password</label>
                                <input 
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" 
                                    type="password" 
                                    id="password_confirmation" 
                                    name="password_confirmation" 
                                    placeholder="Confirm your chosen password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password_confirmation}  
                                />
                                {formik.errors.password_confirmation ? <AlertError message={formik.errors.password_confirmation}/> : null}
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="border border-gray-200 rounded h-4 w-4 text-indigo-500 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" />
                                <span className="ml-2"> I accept <a href="www.google.com" className="underline text-gray-600 hover:text-gray-500">terms &amp; conditions</a>
                            </span>
                            </div>
                            <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"> 
                            {loading &&
                            <svg className="animate-spin mr-3 h-5 w-5 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            }
                             Create Account 
                            </button>
                        </form>
                        </div>
                    </div>
                    <div className="py-4 px-5 lg:px-6 w-full text-sm text-center bg-gray-50">
                        <Link className="font-medium text-indigo-600 hover:text-indigo-400" to="/login">Return to Sign In</Link>
                    </div>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}
export default Register;