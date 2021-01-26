import React from "react";

import "./APGallerySection.sass";

export default class APGallerySection extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      images: []
    };

    this.addImage = this.addImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  render(){
    return(
      <div id="APGallerySection">
        <form onSubmit={this.addImage}>
          <input type='file' name='image' required />

          <label htmlFor='name'>Image name:</label>
          <input name='name' id='name' required />

          <label htmlFor='description'>Image description:</label>
          <textarea name='description' id='description' required />

          <button type='submit'>Upload</button>
        </form>

        {this.state.images && <ul>
          {this.state.images.map((image, index) => (
            <li key={`galleryImage_${index}`}>
              <button onClick={this.removeImage}>Remove</button>
              <img src={image.imgURL} alt={image.imgAlt} />
              <p>{image.imgName}</p>
              <input value={image._id} hidden readOnly />
              <input value={image.cloudID} hidden readOnly/>
            </li>
          ))}
        </ul>}
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/gallery', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({skip: 0, limit: 0})
    }).then(res => res.json())
      .then(result => {
        this.setState(() => ({images: result.images}))
      })
      .catch(error => console.log(error))
  }

  addImage(e){
    e.preventDefault();
    
    fetch('/api/addImage', {
      method: 'POST',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        if(this.state.images){
          this.setState(prevState => ({images: prevState.images.concat(result)}));
        } else {
          this.setState(() => ({images: [result]}));
        }
      })
      .catch(error => console.log(error))
  }

  removeImage(e){
    const imgID = e.target.parentElement.childNodes[3].value;
    const cloudID = e.target.parentElement.childNodes[4].value;

    fetch("/api/removeImage", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'imgID': imgID, 'cloudID': cloudID})
    }).then(res => res.json())
      .then(result => this.setState(prevState => ({images: prevState.images.filter(image => (image._id != imgID))})))
      .catch(error => console.log(error))
  }
}