import React from "react"
import {WrapperImg, Img} from "./style"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'


class ListImg extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			allPhotos: '',
		};
	}

	async componentDidMount() {
		const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=57f198356d2cef9345235fe1865b7da2&format=json&nojsoncallback=true'
		await fetch(url)
		.then(response => response.json())
		.then(data => this.setState({ allPhotos: data.photos.photo}));
	}

	render() {
	
		if (this.state.allPhotos.length > 0) {
			return (
				<>
					<Link to ='/Cat'>Cats</Link>
					<Link to ='/Dog'>Dogs</Link>
					<Link to ='/Bird'>Birds</Link>
					<WrapperImg>
						{
							this.state.allPhotos.map((photo, i) => {
								return <Img key={i} src={'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg'} alt="Logo"></Img>;
							})
						}
					</WrapperImg>
				</>
			)
		} else {
			return (
				<div>Loading</div>
			)
		}
	  
	}
}


export default withRouter(ListImg)