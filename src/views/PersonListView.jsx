import React, { useEffect, useState } from 'react';
import Form from "../components/Form";
import List from "../components/List";
import "../assets/css/view.css";
import { baseManager } from "../request/baseManager";

const PersonListView = () => {
    const [persons, setPersons] = useState([])
    const [person, setPerson] = useState({
        name: '',
        surname: '',
        age: 0,
        address: '',
        cities: []
    })
    const [loading, setLoading] = useState(true)
    const [isUpdate, setIsUpdate] = useState(false)

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

    const getPersonById = (id) => {
        setPerson(persons.find(x => x.id == id));
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
                setPerson({
                    name: '',
                    surname: '',
                    age: 0,
                    address: '',
                    cities: []
                })
            })
    }

    const updatePerson = (id, value) => {
        setLoading(true)
        baseManager.update("/persons/" + id, value)
            .then(() => {
                getPersons();
                setPerson({
                    name: '',
                    surname: '',
                    age: 0,
                    address: '',
                    cities: []
                })
                setIsUpdate(false);
            })
    }
    const update = (id) => {
        getPersonById(id);
        setIsUpdate(true);
    }

    return (
        <>
            {
                loading ? <h2>Yükleniyor . . .</h2> : (
                    <div className='container'>
                        <div className='card'>
                            <List persons={persons} remove={removePerson} update={update}></List>
                        </div>

                        <div className='card'>
                            <Form person={person} setPerson={setPerson} addPerson={addPerson} updatePerson={updatePerson} setIsUpdate={setIsUpdate} isUpdate={isUpdate} isMulti />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PersonListView