import React, { useEffect } from 'react';
import { useState } from 'react';
import {ImCog} from 'react-icons/im';
import { setTheme } from '../../helper';
import './styles.scss';
const colorsArray=[{
	id:'yellow',
	bgColor:"#ffdd40"
},
{
id:'red',
bgColor:'#e82A2A'
},
{
	id:'green',
	bgColor:'#6ac045'
},
{
	id:'blue',
	bgColor: '#5078ff'
}]
const Theme=()=>{
	const [currentTheme,setCurrentTheme]=useState('');
	const [toggle,setToggle]=useState('false'); 
	const handleToggle=(currentId)=>{
		setCurrentTheme(currentId);
		setToggle(false);
	}
	useEffect(()=>{
		setTheme(currentTheme)
	},[currentTheme])
	return(
		<div className={`theme-wrapper ${toggle?"active":""}`} >
			<div className='theme-wrapper__toggle-icon'>
				<ImCog  onClick={()=>{setToggle(!toggle)}}size={40}/>
			</div>
			<div className='theme-wrapper__menu'>
				<h4>Choose Theme</h4>
				<ul>
					{
						colorsArray.map((item,key)=>{

							return(
							<li onClick={()=>{handleToggle(item.id)}} key={key} style={{backgroundColor:item.bgColor}}/>

							)
						})
					}
				</ul>
			</div>
		</div>
	)
}

export default Theme;