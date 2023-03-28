import React,{useState} from 'react'
import PageHeaderContent from '../../components/Header';
import {RiContactsBook2Fill} from 'react-icons/ri'
import { toast } from 'react-hot-toast';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase';

import './styles.scss'
// import { useState } from 'react';
const Contact = () => {
	const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        description
      });
      setName("");
      setEmail("");
      setDescription("");
      toast.success("Message Sent");
      
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
}
  return (
	<section id="contact" className='contact'>
		<PageHeaderContent headerText="Contact Me" icon={<RiContactsBook2Fill size={40}/>}/>
		<div className='contact__content'>
			<h3 className='contact__content__header-text'>Lets's Talk</h3>

			<form className='contact__content__form' onSubmit={submitHandler}>
			<div className='contact__content__form__controlsWrapper'>
			<div className='nameWrapper'>
				<input
            type="text"
			className='inputName'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
		   <label htmlFor="name" className='namelabel'>Name</label>
				</div>
				<div className='emailWrapper'>
				<input
            type="email"
			className='inputEmail'
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
		   <label htmlFor="email" className='emaillabel'>Email</label>
				</div>
				<div className='descriptionWrapper'>
				<textarea
            type="text"
			className='inputDescription'
            placeholder="Your Message"
            required
            value={description}
            onChange={(e) => setDescription   (e.target.value)}
			rows={5}
			style={{resize:"none"}}
          />
		  <label htmlFor="description" className='descriptionlabel'>Description</label>
				</div>
				
				
			</div>
			<button type="submit">Send</button>
				
			</form>

		</div>
	</section>
  )
}



export default Contact;
