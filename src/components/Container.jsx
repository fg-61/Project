import { useEffect, useState } from "react"
import "../assets/css/style.css"
import Form from "./form-components/Form"
import SearchBar from "./table-components/SearchBar"
import Table from "./table-components/Table"
import { baseManager } from "../request/baseManager";

const Body = () => {

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
    const [searchText, setSearchText] = useState("");

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
    };

    const filteredData = persons.filter((person) => {
        if (searchText === '') {
            return person;
        }
        else {
            return Object.keys(person).some(key => {
                return person[key].toString().toLowerCase().includes(searchText)
            })
        }
    })

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
        <div className='container'>
            <div className="container-search-bar">
                <SearchBar inputHandler={inputHandler} />
            </div>
            <div className="container-table-form">
                {
                    loading
                        ? (<div className="container-loading-text">
                            <h2>Yükleniyor . . .</h2>
                        </div>)
                        : (
                            <Table data={filteredData} remove={removePerson} update={update} style={{ flexGrow: "2" }} />
                        )
                }
                <Form person={person} setPerson={setPerson} addPerson={addPerson} updatePerson={updatePerson} setIsUpdate={setIsUpdate} isUpdate={isUpdate} isMulti />
            </div>


        </div>
    )
}

export default Body