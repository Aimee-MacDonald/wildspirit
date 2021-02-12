import React from 'react';

export default class extends React.Component{
  constructor(){
    super();

    this.state = {
      categories: []
    }
  }

  render(){
    return(
      <div>
        {this.state.categories.map(category => <p>{category.name}</p>)}
        
        <form>
          <input />
          <button>Add Category</button>
        </form>
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/exploreCategories')
      .then(res => res.json())
      .then(result => {
        this.setState(() => ({categories: result}))
      })
      .catch(error => console.log(error))
  }
}