import React,{useState} from 'react'
import PageHeaderContent from '../../components/Header';
import {AiFillProject} from 'react-icons/ai';
import { filterOptions, portfolioData } from './helper';
import './styles.scss'
const Portfolio = () => {
	const [filter,setFilter]=useState(1);
	const [hoveredIndex,setHoveredIndex]=useState(null);

	const handleFilter=(id)=>{
		setFilter(id);
	}
	const filteredPortfolio=filter===1?portfolioData:portfolioData.filter(item=>item.sectionId===filter);
	console.log(filteredPortfolio);
	
  return (
	<section id="portfolio" className='portfolio'>
		<PageHeaderContent
		headerText="Projects List"
		icon={<AiFillProject size={40}/>}/>
		<div className='portfolio__content'>
			<ul className='portfolio__content__filter'>
				{
					filterOptions.map(item=>(
						<li  className={item.id===filter?'active':''}onClick={()=>handleFilter(item.id)}key={`filter${item.id}`}>
							{item.label}
						</li>
					))
				}
			</ul>
			<div className='portfolio__content__cards' >
					{
						filteredPortfolio.map((item,key)=>(
							<div
							onMouseEnter={()=>setHoveredIndex(key)}
							onMouseLeave={()=>setHoveredIndex(key)}
							key={key} className="portfolio__content__cards__item">
							<div className='portfolio__content__cards__item__img-wrapper'>
								<a href={item.projectLink }>
									<img src={item.image}/>
								</a>
							</div>
							<div className='overlay'>
							{
								hoveredIndex===key&&(
									<div>
								<p>{item.projectName}</p>
								<br/>
									<a href={item.projectLink}>Visit</a>
								</div>
								)
							}
								
									
							</div>
							</div>
						))
					}
			</div>
		</div>
	</section>
  )
}

export default Portfolio;