import { useState } from "react"
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("")

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim()
    if (input.length <= 1) return
    // setCategories(x => [inputValue, ...x])
    onNewCategory(input)
    setInputValue("")
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}