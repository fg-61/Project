import React from 'react'
import "../assets/css/list.css"

const List = ({ title, persons, setPersons }) => {
    const deletePerson = (id) => {
        const data = persons.filter(i => i.id !== id)
        setPersons(() => [...data]);
        console.log(persons)
    }

    return (
        <>
            <h3>{title}</h3>
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
                    {persons && persons.map((person, key) => {
                        return (
                            <tr key={key}>
                                <td>{person.id}</td>
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