import React, { useEffect, useState } from 'react';
import Form from "../components/Form";
import List from "../components/List";
import "../assets/css/view.css";
import { baseManager } from "../request/baseManager";

const PersonListView = () => {
    const title = "Kişi Listesi";
    const [persons, setPersons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPersons();
    }, []);

    const getPersons = () => {
        baseManager.getAll('/persons')
            .then((data) => {
                setLoading(false);
                setPersons(data);
            })
    }

    const removePerson = (id) => {
        setLoading(true)
        baseManager.delete("/persons/" + id)
            .then((res) => {
                getPersons();
            }).finally(() => {
                getPersons();
            })
    }

    const addPerson = (values) => {
        setLoading(true)
        baseManager.add("/persons", values)
            .then(() => {
                getPersons();
            })
    }

    return (
        <>
            {
                loading ? <h2>Yükleniyor . . .</h2> : (
                    <div className='container'>
                        <div className='card'>
                            <List persons={persons} title={title} remove={removePerson}></List>
                        </div>

                        <div className='card'>
                            <Form addPerson={addPerson}></Form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PersonListView