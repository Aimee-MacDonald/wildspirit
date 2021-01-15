import React from "react";

import "./APGallerySection.sass";

export default class APGallerySection extends React.Component{
  constructor(props){
    super(props);

    this.state = {};

    this.addImage = this.addImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  render(){
    return(
      <div id="APGallerySection">
        <form onSubmit={this.addImage}>
          <div>
            <label htmlFor="name">Image Name:</label>
            <input id="name" placeholder="Image Name" />
          </div>

          <div>
            <label htmlFor="description">Image Description:</label>
            <input id="description" placeholder="Image Description" />
          </div>

          <div>
            <label htmlFor="url">Image URL:</label>
            <input id="url" placeholder="Image URL" />
          </div>
          
          <button type="submit">Add Image</button>
        </form>

        {this.state.images && <ul>
          {this.state.images.map(image => (
            <li>
              <button onClick={this.removeImage}>Remove</button>
              <img src={image.imgURL} alt={image.imgAlt} />
              <p>{image.imgName}</p>
              <input value={image._id} hidden />
            </li>
          ))}
        </ul>}
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/gallery')
      .then(res => res.json())
      .then(result => {
        this.setState(() => ({images: result.images}))
      })
      .catch(error => console.log(error))
  }

  addImage(e){
    e.preventDefault();

    const form = e.target;
    const imgPac = {
      name: form.name.value,
      description: form.description.value,
      url: form.url.value
    };

    fetch("/api/addImage", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'image': imgPac})
    }).then(res => res.json())
      .then(result => {
        this.setState(prevState => {
          let images = prevState.images;
          
          images = images.concat({
            imgAlt: imgPac.description,
            imgName: imgPac.name,
            imgURL: imgPac.url
          });
          
          return {images: images};
        });
      })
      .catch(error => console.log(error))
  }

  removeImage(e){
    const imgID = e.target.parentElement.childNodes[3].value;
    
    fetch("/api/removeImage", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'imgID': imgID})
    }).then(res => res.json())
      .then(result => this.setState(prevState => ({images: prevState.images.filter(image => (image._id != imgID))})))
      .catch(error => console.log(error))
  }
}