import React, { useEffect, useState } from 'react';
import Form from "../components/Form";
import List from "../components/List";
import "../assets/css/view.css";
import { baseManager } from "../request/baseManager";

const PersonListView = () => {
    const i = 0;
    const title = "Kişi Listesi";
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPersons();
    }, []);

    const getPersons = () => {
        baseManager.getAll('/persons')
            .then((data) => {
                setPersons(data);
            })
    }

    const removePerson = (id) => {
        baseManager.delete("/persons/" + id)
            .then((res) => {
                getPersons();
            }).finally(() => {
                getPersons();
            })
    }

    const addPerson = (values) => {
        baseManager.add("/persons", values)
            .then(() => {
                getPersons();
            })
    }

    return (
        <>
            <div className='container'>
                <div className='card'>
                    <List persons={persons} title={title} remove={removePerson}></List>
                </div>

                <div className='card'>
                    <Form addPerson={addPerson}></Form>
                </div>
            </div>
        </>
    )
}

export default PersonListView