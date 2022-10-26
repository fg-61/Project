import React, { useState } from 'react'
import "../assets/css/list.css"
import SearchBar from './SearchBar'

const List = ({ title, persons, remove, update }) => {

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
                        <th>Id</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Yaş</th>
                        <th>Adres</th>
                        <th>İl</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData && filteredData.map((person, key) => {
                        return (
                            <tr key={key}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.surname}</td>
                                <td>{person.age}</td>
                                <td>{person.address}</td>
                                <td>{person.city}</td>
                                <td><button className='btn-delete' onClick={() => remove(person.id)}>Sil</button></td>
                                <td><button className='btn-delete' onClick={() => update(person.id)}>Güncelle</button></td>
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