import cart from '../../images/cart.jpg';
import Crypto from '../../images/Crypto.jpg';
import ecomm from '../../images/ecomm.jpg';
import github from '../../images/github.jpg';
import weather from '../../images/weather.jpg'
export const portfolioData=[
	{
		sectionId:2,
		projectName:'Shopping Cart',
		projectLink:'https://github.com/RAGHAV172000/Shopping-Cart',
		image:cart
	},
	{
		sectionId:2,
		projectName:'Crypto App',
		projectLink:'https://github.com/RAGHAV172000/Crypto-App',
		image:Crypto
	},
	{
		sectionId:2,
		projectName:'Weather App',
		projectLink:'https://github.com/RAGHAV172000/WeatherApp',
		image:weather
	},
	{
		sectionId:3,
		projectName:'Github Users',
		projectLink:'https://github.com/RAGHAV172000/github-user',
		image:github
	},
	{
		sectionId:3,
		projectName:'Ecommerce App',
		projectLink:'https://github.com/RAGHAV172000/Ecommerce-App',
		image:ecomm
	}

	

]

export const filterOptions=[
	{
		label:'All',
		id:1
	},
	{
		label:'Medium Scale Projects',
		id:2
	},
	{
		label:'Large Scale Projects',
		id:3
	}
]