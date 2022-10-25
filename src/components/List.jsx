import React, { useState } from 'react'
import "../assets/css/list.css"
import SearchBar from './SearchBar'

const List = ({ title, persons, setPersons }) => {
    const deletePerson = (id) => {
        const data = persons.filter(i => i.id !== id)
        setPersons(() => [...data]);
    }

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

    return (
        <>
            <h3>{title}</h3>
            <SearchBar inputHandler={inputHandler}></SearchBar>
            <table>
                <thead>
                    <tr>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Yaş</th>
                        <th>Adres</th>
                        <th>İl</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData && filteredData.map((person, key) => {
                        return (
                            <tr key={key}>
                                <td>{person.name}</td>
                                <td>{person.surname}</td>
                                <td>{person.age}</td>
                                <td>{person.address}</td>
                                <td>{person.city}</td>
                                <td><button className='btn-delete' onClick={() => deletePerson(person.id)}>Sil</button></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </>
    )
}

export default List