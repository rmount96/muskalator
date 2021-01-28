import React, {useState} from 'react'

const NameForm = (props) => {

    const [name, setName] = useState('')

    return (
        <section>
            <h1>{props.title}</h1>
            <form onSubmit = {(e) => {
                e.preventDefault();
                const personObject = {
                    name
                }
                props.onSubmit(personObject);
                setName('')
            }}>
                <input 
                    value = {name}
                    placeholder = "Kyle" 
                    onChange = {(e) => {
                        console.log(e.target.value);
                        setName(e.target.value)
                    }}    
                />
                <br />
                <input type="submit" value="Translate" />
            </form>
        </section>
    )
}

export default NameForm