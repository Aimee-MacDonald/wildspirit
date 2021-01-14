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
    this.setState(() => ({images: [
      {
        imgName: "Image 1",
        imgURL: "https://s27389.pcdn.co/wp-content/uploads/2018/01/AdobeStock_171462504-1024x576.jpeg"
      }
    ]}));
  }
}