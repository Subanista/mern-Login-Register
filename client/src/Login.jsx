import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Login(){
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate = useNavigate()
    


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:3001/login', { email, password })
            if (result.data === 'Success') {
              navigate('/home')
            } else {
              alert('Password is incorrect. Please try again.')
            }
          } catch (error) {
            console.error(error)
            alert('An unexpected error occurred. Please try again later.')
          }
        }
    return(
      <div className="d-flex justify-content-center align-items-center bg-gradient-to-r from-[#ffe599] to-[#ffab40] vh-100">
      <div className="bg-white p-3 rounded shadow-lg w-25">
        <h2 className="text-center text-3xl font-bold text-[#ffab40] mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="text-lg font-semibold text-[#ffab40]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-lg px-3 py-2 border border-[#ffab40] focus:outline-none focus:shadow-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-lg font-semibold text-[#ffab40]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-lg px-3 py-2 border border-[#ffab40] focus:outline-none focus:shadow-lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-lg bg-[#ffab40] text-white py-2 px-3 shadow-lg hover:bg-[#ff8f33]">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Do not Have an account?
          <Link to="/register" className="text-[#ffab40] font-semibold underline ml-2">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    )
}

export default Login;