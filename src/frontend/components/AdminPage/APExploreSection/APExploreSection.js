import React, {useState, useEffect} from 'react'

import './APExploreSection.sass'

import CategoriesList from './CategoriesList/CategoriesList'
import CategoryEditor from './CategoryEditor/CategoryEditor'
import OptionEditor from './OptionEditor/OptionEditor'

const APExploreSection = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, selectCategory] = useState()
  const [selectedOption, selectOption] = useState()

  useEffect(() => {
    fetch('/api/exploreCategories')
      .then(res => res.json())
      .then(result => {if(result !== 'Not Found') setCategories(result)})
      .catch(error => console.log(error))
  }, [])

  const createNewCategory = () => {
    setCategories([
      ...categories,
      {
        _id: 'new',
        name: '',
        options: []
      }
    ])

    selectCategory('new')
  }

  const createNewOption = () => {
    setCategories(categories.map(category => (
      category._id !== selectedCategory ? category : {
        ...category,
        options: [
          ...category.options,
          {
            name: '',
            description: '',
            imageID: 'new',
            imageURL: '',
            links: []
          }
        ]
      }
    )))

    selectOption('new')
  }

  const deleteOption = (categoryID, optionID) => {
    fetch('/api/deleteExploreOption', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({categoryID, optionID})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  const deleteExploreCategory = categoryID => {
    fetch('/api/deleteExploreCategory', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({categoryID})
    }).then(res => res.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return(
    <div id='APExploreSection'>
      <h1>Explore Section</h1>

      <CategoriesList
        categories={categories}
        selectCategory={selectCategory}
        createNewCategory={createNewCategory}
        deleteExploreCategory={deleteExploreCategory}
      />

      {
        selectedCategory &&
          <CategoryEditor
            categoryDetails={categories.filter(category => category._id === selectedCategory)[0]}
            setCategoryDetails={cd => setCategories(categories.map(category => category._id === selectedCategory ? cd : category))}
            selectOption={selectOption}
            createNewOption={createNewOption}
            deleteOption={deleteOption}
          />
      }

      {selectedOption &&
        <OptionEditor
          optionDetails={
            categories.filter(category => (
              category._id === selectedCategory
            ))[0].options.filter(option => (
              option.imageID === selectedOption
            ))[0]
          }

          setOptionDetails={od => {
            setCategories(categories.map(category => (
              category._id !== selectedCategory ? category : {
                ...category,
                options: category.options.map(option => (
                  option.imageID !== selectedOption ? option : od
                ))
              }
            )))
          }}
            
          categoryDetails={{
            _id: selectedCategory,
            name: categories.filter(category => category._id === selectedCategory)[0].name
          }}
        />
      }
    </div>
  )
}

export default APExploreSection