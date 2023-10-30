import { useEffect } from 'react'
import './addCoffee.css'

export default function AddCoffee({setCoffees}) {
    const getCoffees = () => {
        fetch('https://first-deployed-api-aa.web.app/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
        .catch(alert)
    }

    useEffect(() => {
        getCoffees()
    }, []) //one time, after the component mounts, get the coffees

    const handleSubmit = (e) => {
    e.preventDefault()
    // gather form data
    // e.target is the form
    // e.target.name is the input "name"
    // e.target.name.value is the value of the input "name"
    const name = e.target.name.value
    const recipe = e.target.recipe.value
    const description = e.target.description.value
    //create a coffee object
    const newCoffee = { name, recipe, description }
    console.log(newCoffee)
    // POST the newCoffee object to the API
        fetch('https://first-deployed-api-aa.web.app/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
         .then(res => res.json())
         .then(data => //check if message is "Success!""
            {if (data.message === "Success!") {
                //our coffee was added successfully
                // let's clear the form
                e.target.name.value = ''
                e.target.recipe.value = ''
                e.target.description.value = ''
                // and the get an updated list of coffees...
                getCoffees()
            }
        })
         .catch(alert)
    }


    return (
        <section className="coffee-form">
            <h2>Add a coffee</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" />
                </label>

                <label htmlFor="recipe">
                    Recipe:
                    <input type="text" name="recipe" />
                </label>

                <label htmlFor="description">
                    Description:
                    <input type="text" name="description" />
                </label>

                <input type="submit" value="Add" className="add-btn" />

            </form>
        </section>
    )
}