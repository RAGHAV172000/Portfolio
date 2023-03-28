import React from 'react'
import './styles.scss';
import { Animate } from 'react-simple-animate';
import {FaLinkedin,FaInstagram} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
	<section className='home' id='home'>
	<div className='home__text-wrapper'>
		<h1>
			Hello,I'm Raghav 
			<br/>
			Front End Developer
		</h1>
	</div>
	<Animate
	play
	duration={1.5}
	delay={1}
	start={{
		transform:'translateY(600px)'
	}}
	end={{
		transform:'translateX(0px)'
	}}
	>
	<div className='contact-me'>
	<div className='contact-me__button_wrapper'>
		<Link className='link' to="/contact">Hire me</Link>
		<a href='https://drive.google.com/drive/folders/1brVJO0dOz_sR7FZb3zsxJgk2jGMFItwd'>Download Resume</a>
	</div>
	<div className='contact-me__socials-wrapper'>
		<a href='https://www.linkedin.com/in/raghav-gutgutia-1237731ab/'>
		<FaLinkedin size={32}/>
		</a>
		<a href='https://www.instagram.com/4_.raghav/'>
		<FaInstagram size={32}/>
		</a>
		<a href='https://github.com/RAGHAV172000'>
			<AiFillGithub size={32}/>
		</a>
	</div>
	</div>
	</Animate>
	
	</section>
	
  )
}

export default Home;