import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const navigate = useNavigate()
    const {
        createUser,
        updateUserProfile,
        loading,
        logOut,
        setLoading,
    } = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.image.files[0]
        console.log(name, email, password, image)
        try {
            setLoading(true)
            const result = await createUser(email, password)
            await updateUserProfile(name)
            console.log(result)
            logOut()
            navigate('/login')
            toast.success('Signup Successful, please login')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
            setLoading(false)
        }
    }
    return (
        <div className='flex justify-center items-center min-h-[80vh] py-6'>
            <Helmet>
                <title>TechFinder | Register</title>
            </Helmet>
            <div className="flex flex-col md:min-w-[500px] p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>
                        Sign up with your email
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-2 ">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-md">Your name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            required
                            placeholder='Enter Your Name Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-400 bg-gray-200 text-gray-900'
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-md">Email address</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            required
                            placeholder='Enter Your Email Here'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-400 bg-gray-200 text-gray-900'
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-md">Password</label>
                        <input
                            type='password'
                            name='password'
                            autoComplete='current-password'
                            id='password'
                            required
                            placeholder='*******'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-400 bg-gray-200 text-gray-900'
                        />
                    </div>
                    <div>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                            // required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>
                    <button
                        disabled={loading}
                        type='submit'
                        className='btn btn-primary w-full rounded-md text-white'
                    >
                        Register
                    </button>
                </form>
                <p className='px-6 mt-3 text-sm text-center text-gray-400'>
                    Already have an account ?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-blue-400 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>

        </div>
    );
};

export default Register;