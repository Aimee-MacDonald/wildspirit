import React from "react";

import "./GallerySection.sass";

export default class GallerySection extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
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
        <button>See More</button>
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/gallery')
      .then(res => res.json())
      .then(result => {
        this.setState(() => ({images: result.images}));
      })
      .catch(error => console.log(error));
  }
}