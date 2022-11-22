import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function Create() {
    const [form, setForm] = useState( {
        
        name: "",

    });

    <BrowserRouter>const navigate = useNavigate();</BrowserRouter>

    //updating state properties
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }
    //handling submission
    async function onSubmit(e) {
        e.preventDefault();

        //when post req is sent to url, we'll add new rec to db
        const newItem = { ...form };

        await fetch("http://localhost:8000/routes/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm( {name: ""});
        <BrowserRouter>navigate("/");</BrowserRouter>
    }
    //displaying form that takes input from user
    return(
        <div data-testid = "comp">
            <h3> Your Name</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({name: e.target.value})}
                        />
                </div>
                

     <div className="form-group">
        
         <input
           type="submit"
           value="Create user"
           className="btn btn-primary"
         />
       </div>
            </form>
        </div>
    );
}