import React from 'react';
import { useDispatch } from 'react-redux';
import { createCharacter } from '../../redux/actions';
import style from "../../styles/CreateCharacter.module.css";

const CreateCharacter = () => {

  const [input, setInput] = React.useState({
    name: "",
    birthday: "",
    occupation: "",
    img: "",
    status: "",
    nickname: "",
    portrayed: "",
    category: "",
  })

  let handleChange = (e) => { // handleChange = manejar el cambio
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value})
  }

  const dispatch = useDispatch()

  let handleSubmit = (e) => { // handleSubmit = manejar el envio
    e.preventDefault()
    dispatch(createCharacter(input))
  }

  return (
    <div onSubmit={(e) => handleSubmit(e)} className={style.form}>
      <h1>Create Character</h1>
      <form>
        <label>Name: </label>
        <input type='text' name='name' value={input.name} onChange={(e) => handleChange(e)} />

        <label>Birthday: </label>
        <input type='text' name='birthday' value={input.birthday} onChange={(e) => handleChange(e)} />

        <label>Occupation: </label>
        <input type='text' name='occupation' value={input.occupation} onChange={(e) => handleChange(e)} />

        <label>Status: </label>
        <input type='text' name='status' value={input.status} onChange={(e) => handleChange(e)} />

        <label>Nickname: </label>
        <input type='text' name='nickname' value={input.nickname} onChange={(e) => handleChange(e)} />

        <label>Appearance: </label>
        <input type='text' name='appearance' value={input.appearance} onChange={(e) => handleChange(e)} />

        <label>Portrayed: </label>
        <input type='text' name='portrayed' value={input.portrayed} onChange={(e) => handleChange(e)} />

        <label>Category: </label>
        <input type='text' name='category' value={input.category} onChange={(e) => handleChange(e)} />

        <button className={style.submitButton} type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateCharacter;