"use client"

import Head from '@/components/Head'
import React from 'react'
import Navbar from '@components/Navbar'
import styles from "@styles/Contactus.module.scss";
import {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    emailAddress: "",
    subject: ""
  })

  const handleChange = (e) => {
    e.preventDefault();

    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })

  }
  //view payload
  console.log("Contacts Info:", formData);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      const contactForm = new FormData();

      for (var key in formData) {
        contactForm.append(key, formData[key])
      };

      const response = await fetch("/api/contact-us/", {
        method: "POST",
        body: contactForm
      });

      if(response.ok) {
        alert("Hurray!!! Message Sent");

        //Reset the form...
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          message: "",
          emailAddress: "",
          subject: ""
        })

      }
    }  catch (err) {
      console.log("Error encountered while sending message", err.message);
    }
   
    finally{}
  }


  return (
    <>
      <Head title='Cara Arts | Contact Us' />
      <Navbar />
      <main className='container'>
        <section>
          <div className={styles.profileBody}>
            <div className={styles.profileBody__form}>
              <div className={styles.profileBody__form_inputs}>
                <div className={styles.formBody}>
                  <span><b>Contact Us</b></span>
                    {/* <button>Edit Profile{' '}<EditIcon width={20} height={20} /></button> */}
                </div>
                <form action="" method="post" onSubmit={handleSubmit}>                                    
                  <div className={styles.formBody__form_input}>
                    <div className={styles.inputLabel}>
                      <label htmlFor="firstName">First Name<span style={{color:'red'}}>*</span></label>
                      <input 
                        placeholder="First Name" 
                        name="firstName" 
                        type='text'
                        value={formData.firstName}
                        onChange={handleChange}  
                        required
                      />
                    </div>
                    <div className={styles.inputLabel}>
                      <label htmlFor="lastName">Last Name<span style={{color:'red'}}>*</span></label>
                      <input 
                        placeholder="Last Name" 
                        name="lastName" 
                        type='text'
                        value={formData.lastName}
                        onChange={handleChange}  
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formBody__form_}>
                    <label htmlFor="emailAddress">Email Address<span style={{color:'red'}}>*</span></label>
                    <input 
                        placeholder="Emial Address" 
                        name="emailAddress" 
                        type='email'
                        value={formData.emailAddress}
                        onChange={handleChange}  
                        required
                      />
                  </div>
                  <div className={styles.formBody__form_}>
                  <label htmlFor="phoneNumber">Phone Number<span style={{color:'red'}}>*</span></label>
                  <input 
                        placeholder="Phone Number" 
                        name="phoneNumber" 
                        type='number'
                        value={formData.phoneNumber}
                        onChange={handleChange}  
                        required
                      />
                  </div>
                  <div className={styles.formBody__form_}>
                    <label htmlFor="subject">Subject<span style={{color:'red'}}>*</span></label>
                    <input 
                        placeholder="Subject" 
                        name="subject" 
                        type='text'
                        value={formData.subject}
                        onChange={handleChange}  
                        required
                      />
                  </div>
                  <div className={styles.formBody__form_}>
                    <label htmlFor="message">Message<span style={{color:'red'}}>*</span></label>
                    <textarea 
                        name="message" 
                        type='text'
                        value={formData.message}
                        rows="4" 
                        cols="50"
                        onChange={handleChange}  
                        required
                      ></textarea>
                  </div>
                  
                  <div className={styles.formBody__form_btn}>
                    <button type='submit'>Send Message</button>
                  </div>
                </form>    
              </div>
            </div>
           
          </div>
        </section>

      </main>
    </>
  )
}

export default ContactUs