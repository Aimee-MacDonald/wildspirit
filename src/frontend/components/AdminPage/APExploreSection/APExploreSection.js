import React, {useState, useEffect} from 'react'

import './APExploreSection.sass'

import CategoriesList from './CategoriesList/CategoriesList'
import OptionsList from './OptionsList/OptionsList'
import OptionEditor from './OptionEditor/OptionEditor'
import CategoryEditor from './CategoryEditor/CategoryEditor'

const APExploreSection = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, selectCategory] = useState()
  const [selectedOption, selectOption] = useState()

  useEffect(() => {
    fetch('/api/exploreCategories')
      .then(res => res.json())
      .then(result => {
        if(result !== 'Not Found'){
          setCategories([
            ...categories,
            ...result
          ])
        }
      })
      .catch(error => console.log(error))
  }, [])

  return(
    <div id='APExploreSection'>
      <h1>Explore Section</h1>

      <CategoriesList
        categories={categories}
        selectCategory={selectCategory}
      />

      {/*   filter categories by id   */}
      {selectedCategory &&
        <CategoryEditor
          categoryDetails={categories}
        />
      }
{/* 
      {selectedCategory &&
        <OptionsList
          options={
            categories.filter(category => (
              category._id === selectedCategory
            ))[0].options
          }
          selectOption={selectOption}
        />
      }

      {selectedCategory && selectedOption &&
        <OptionEditor
          optionDetails={
            categories.filter(category => (
              category._id === selectedCategory
            ))[0].options.filter(option => (
              option.imageID === selectedOption
            ))[0]
          }
        />
      }
       */}
    </div>
  )
}

export default APExploreSection



























/*
import React from 'react';

import './APExploreSection.sass';

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
      <div id='APExploreSection'>
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
          <form className='exploreOptions' onSubmit={this.addOption}>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' />

            <label htmlFor='description'>Description</label>
            <input id='description' name='description' />

            <label htmlFor='image'>Image</label>
            <input type='file' id='image' name='image' />

            <label htmlFor='linkOneTitle'>Link 1 Title</label>
            <input id='linkOneTitle' name='linkOneTitle' />
      
            <label htmlFor='linkOneURL'>Link 1 URL</label>
            <input id='linkOneURL' name='linkOneURL' />

            <label htmlFor='linkTwoTitle'>Link 2 Title</label>
            <input id='linkTwoTitle' name='linkTwoTitle' />
      
            <label htmlFor='linkTwoURL'>Link 2 URL</label>
            <input id='linkTwoURL' name='linkTwoURL' />

            <label htmlFor='linkThreeTitle'>Link 3 Title</label>
            <input id='linkThreeTitle' name='linkThreeTitle' />
      
            <label htmlFor='linkThreeURL'>Link 3 URL</label>
            <input id='linkThreeURL' name='linkThreeURL' />
            
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
*/