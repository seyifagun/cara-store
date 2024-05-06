"use client"

import "@styles/Register.scss"
import {FcGoogle} from "react-icons/fc"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Register = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: null
    })

    const handleChange = (e) => {
        e.preventDefault()

        const {name, value, files} = e.target;

        setFormData({
            ...formData, //spread operator is made to get a copy of the payload...
            [name] :value, //map names with their respective values...
            [name] : name === "profileImage" ? files[0] : value //if name of input is profileImage, asign to bufferArray else return value...
        })
    }

    //view payload in console
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const registerForm = new FormData();
    
            for (var key in formData) {
              registerForm.append(key, formData[key]);
            }
          
            const response = await fetch("/api/register/", {
              method: "POST",
              body: registerForm,
            });
          
            if (response.ok) {
              router.push("/");
            }
        }   catch (err) {
                console.log("Registration failed", err.message);
        }
    };

    const [passwordMatch, setPasswordMatch] = useState(true);

    useEffect(() => {
      setPasswordMatch(formData.password === formData.confirmPassword);
    });    

    const loginWithGoogle = () => {
        signIn("google", {callbackUrl: "/"})
    };

  return (
    <section className="registerMain">
        <div className="register">
            <img src="/Afro_art/friends.jpg" alt="register-img" className="register_decor" />
            <div className="register_content">
                <form className="register_content_form" onSubmit={handleSubmit}>
                    <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    <input name="email" type='email' placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                    {!passwordMatch && <small style={{color: "red"}}>Passwords do not match!</small>}
                    <input 
                        id="image" 
                        type="file"  
                        name="profileImage" 
                        accept="image/*" 
                        onChange={handleChange} 
                        style={{display:"none"}} 
                        required
                    />
                    <label htmlFor="image">
                        <img src="/assets/addImage.png" alt="add profile"/>
                        <p>Upload Profile Photo</p>
                    </label>
                    {formData.profileImage && 
                        <img src={URL.createObjectURL(formData.profileImage)} 
                        alt="profile-img" 
                        style={{maxWidth:"80px", maxHeight:"100px"}} />
                    }
                    <button type="submit" >Register</button>
                </form>
                <button 
                    type="button" 
                    disabled={!passwordMatch} 
                    onClick={loginWithGoogle} 
                    className="google"
                >
                    <p>Log In with Google</p>
                    <FcGoogle />
                </button>
                <a href="/login">Already have an account? Log In Here</a>
            </div>
        </div>
    </section>
  )
}

export default Register;