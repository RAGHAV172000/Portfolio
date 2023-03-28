import React from 'react'
import PageHeaderContent from '../../components/Header';
import {BsInfoCircleFill} from 'react-icons/bs';
import { FaHtml5 } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { Animate } from 'react-simple-animate';

import { info } from './utils';
import './styles.scss';
const About = () => {
  return (
	<section className='about' id="about">
		<PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40}/>}/>
		<div className='about__content'>
			<div className='about__content__personalWrapper'>
			<Animate
			play
			duration={1}
			delay={0}
			start={{
				transform:'translateX(-800px)'
			}}
			end={{
				transform:'translateX(0px)'
			}}>
				<h3 className='developerContent'>Front End Developer</h3>
				<p>
				Proficient in Front End and Backened tech like Javascript,React.js,Node.js,MongoDB,Express.js. Passionate about implementing it
				and creating unique projects. Strong in problem-solving skills
				</p>
				</Animate> 
				<h3 className='personalContent'>Personal Info</h3>
			<Animate
			play
			duration={1}
			delay={0}
			start={{
				transform:'translateX(500px)'
			}}
			end={{
				transform:'translateX(0px)'

			}}>
			<ul>
			{
						info.map((item,key)=>{
							return(
								<li key={key}>
								<span>
									<span className='title'>
										{item.label}
									</span>
									<span className='value'>
										{item.value}
									</span>
								</span>
							</li>

								)
						})
					
					}
			</ul>
			</Animate>
			
			
					
			</div>

			<div className='about__content__servicesWrapper'>
			<Animate
			play
			duration={1}
			delay={0}
			start={{
				transform:'translateX(500px)'
			}}
			end={{
				transform:'translateX(0px)'

			}}> 
			<div className='about__content__servicesWrapper__innerContent'>
			
			<div>
				<FaHtml5 color='var(--selected-theme-main-color)' size={60}/>
			</div>
			<div>
			<SiCss3 color='var(--selected-theme-main-color)' size={60}/>
				
			</div>
			<div>
				<FaReact color='var(--selected-theme-main-color)' size={60}/>
			</div>
			<div>
				<SiJavascript color='var(--selected-theme-main-color)' size={60}/>

			</div>
			
			
			</div>
			</Animate>
			</div>
	
			
		</div>
	</section>
  )
}

export default About;