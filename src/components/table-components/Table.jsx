import React from 'react'

const Table = ({ data, remove, update }) => {
    return (
        <div className='container-table'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Yaş</th>
                        <th>İkamet Adresi</th>
                        <th colSpan={3}>Yaşanılan İller</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((person, key) => {
                        return (
                            <tr key={key}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.surname}</td>
                                <td>{person.age}</td>
                                <td>{person.address}</td>
                                <td>
                                    <div className='container-country-buttons'>
                                        <div>
                                            {person.cities.sort().join(", ")}
                                        </div>
                                        <div className='row-buttons'>
                                            <button className='btn btn-delete' onClick={() => remove(person.id)}>SİL</button>
                                            <button className='btn btn-update' onClick={() => update(person.id)}>GÜNCELLE</button>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default Table