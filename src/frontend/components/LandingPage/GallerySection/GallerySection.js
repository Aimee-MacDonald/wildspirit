import React from "react";

import "./GallerySection.sass";

export default class GallerySection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page: 0
    };

    this.loadMoreImages = this.loadMoreImages.bind(this);
  }

  render(){
    return(
      <div id="GallerySection">
        <h1>Gallery</h1>
        <ul>
          {this.state.images && this.state.images.map((image, c) => (
            <li key={`galleryImage_${c}`}>
              <img src={image.imgURL} />
              <p>{image.imgName}</p>
            </li>
          ))}
        </ul>
        <button onClick={this.loadMoreImages}>See More</button>
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/gallery', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'skip': this.state.page, 'limit': 6})
    }).then(res => res.json())
      .then(result => {
        this.setState(() => ({images: result.images}));
      })
      .catch(error => console.log(error));
  }

  loadMoreImages(){
    let page = this.state.page + 1;

    fetch('/api/gallery', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'page': page})
    }).then(res => res.json())
      .then(result => {
        this.setState(prevState => ({
          page: page,
          images: prevState.images.concat(result.images)
        }));
      })
      .catch(error => console.log(error));
  }
}