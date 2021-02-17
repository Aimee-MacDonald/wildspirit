import React from 'react';

export default class extends React.Component{
  constructor(){
    super();

    this.state = {
      categories: [],
      selectedCategory: -1
    }

    this.addCategory = this.addCategory.bind(this);
    this.addOption = this.addOption.bind(this);
  }

  render(){
    return(
      <div>
        <ul>
          {this.state.categories.map((category, index) => (
            <li key={`category_${index}`}>
              <button onClick={() => this.selectCategory(index)}>{category.name}</button>
            </li>
          ))}
        </ul>
        
        <form onSubmit={this.addCategory}>
          <label htmlFor='categoryName'>Category Name</label>
          <input id='categoryName' name='categoryName' />

          <button type='submit'>Add Category</button>
        </form>

        {this.state.selectedCategory !== -1 &&
          <form onSubmit={this.addOption}>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' />

            <label htmlFor='description'>Description</label>
            <input id='description' name='description' />

            <label htmlFor='image'>Image</label>
            <input type='file' id='image' name='image' />

            <input hidden readOnly name='category' value={this.state.categories[this.state.selectedCategory].name}></input>

            <button type='submit'>Add Option</button>
          </form>
        }
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/exploreCategories')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          this.setState(() => ({categories: result}));
        }
      })
      .catch(error => console.log(error))
  }

  selectCategory(index){
    this.setState(() => ({selectedCategory: index}))
  }

  addCategory(e){
    e.preventDefault();
    const newCategory = {
      name: e.target.categoryName.value,
      options: []
    };
    
    fetch('/api/addExploreCategory', {
      method: 'POST',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => {
        if(result === 'Created'){
          this.setState(() => {
            let categories = this.state.categories;
            categories.push(newCategory);
            return ({categories});
          });
        }
      })
      .catch(error => console.log(error))
  }

  addOption(e){
    e.preventDefault();

    fetch('/api/addExploreOption', {
      method: 'POST',
      body: new FormData(e.target)
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
}