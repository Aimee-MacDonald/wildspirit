import React from "react";

import "./APGallerySection.sass";

const APGallerySection = props => (
  <div id="APGallerySection">
    <form onSubmit={props.addImage}>
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
  </div>
);

export default APGallerySection;