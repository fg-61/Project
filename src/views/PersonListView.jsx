import React from 'react'
import Form from "../components/Form";
import List from "../components/List";
import { useState } from 'react';
import "../assets/css/view.css"


const PersonListView = () => {

    const title = "Kişi Listesi";
    const [persons, setPersons] = useState([])
        
    // const removePerson = (id) => {
        
    // }
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <List setPersons={setPersons} persons={persons} title={title} ></List>
                </div>

                <div className='card'>
                    <Form setPersons={setPersons} persons={persons}></Form>
                </div>
            </div>
        </>
    )
}

export default PersonListView