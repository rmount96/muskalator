import React, {useState} from 'react'
import '../App.css';

const NameForm = (props) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <section>
            <div className="title-div">
            <h1 className="title">
                {props.title}
            </h1>
            </div>
            <form onSubmit = {(e) => {
                e.preventDefault();
                const personObject = {
                    name,
                    lastName
                }
                props.onSubmit(personObject);
                setName('')
                setLastName('Musk')
            }}>
            <div className="inputs">
            <label>What is your First Name?
            <br />
                <input className="firstname" 
                    value = {name}
                    placeholder = "Kyle" 
                    onChange = {(e) => {
                        console.log(e.target.value);
                        setName(e.target.value)
                    }}    
                />
            </label>
            {/* <br />
                <input className="lastname"
                    value = {lastName}
                    placeholder = "Last Name" 
                    onChange = {(e) => {
                        console.log(e.target.value);
                        setLastName(e.target.value)
                    }}    
                /> */}
            <br />
                <input className="button" type="submit" value="Translate" />
                </div>
            </form>
        </section>
    )
}

export default NameForm