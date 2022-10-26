import React, { useEffect, useState } from 'react';
import { options } from '../constant/options';
import Dropdown from './Dropdown';
import '../assets/css/form.css'

const Form = ({ addPerson, person, isUpdate, updatePerson, setPerson }) => {

    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('')

    useEffect(() => {
        setName(person.name)
        setSurname(person.surname)
        setAge(person.age)
        setAddress(person.address)
        setCity(person.city)
        return () => {

        }
    }, [person])


    const onSubmit = () => {
        return isUpdate ? update() : create()
    }

    const update = () => {
        const newPerson = {
            name,
            surname,
            age,
            address,
            city
        }
        updatePerson(person.id, newPerson)
    }

    const create = () => {
        const newPerson = {
            name,
            surname,
            age,
            address,
            city
        }
        addPerson(newPerson)
    }



    return (
        <form className='form-container'>
            {isUpdate ? <h3>{person.name}</h3> : ""}
            <div className='form-item'>
                <span>Ad</span>
                <input type="text" defaultValue={isUpdate ? person.name : ""} name="name" onChange={(e) => setName(e.target.value)} placeholder="Adınızı giriniz" />
            </div>

            <div className='form-item'>
                <span>Soyad</span>
                <input type="text" defaultValue={isUpdate ? person.surname : ""} name="surname" onChange={(e) => setSurname(e.target.value)} placeholder="Soyadınızı giriniz" />
            </div>

            <div className='form-item'>
                <span>Yaş</span>
                <input type="number" defaultValue={isUpdate ? person.age : ""} name="age" onChange={(e) => setAge(e.target.value)} placeholder="Yaşınızı giriniz" />
            </div>

            <div className='form-item'>
                <span>Adres</span>
                <input type="text" defaultValue={isUpdate ? person.address : ""} name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Adresinizi giriniz" />
            </div>

            <div className='form-item'>
                <span>İl</span>
                <Dropdown placeHolder="Select..." options={options} onChange={(value) => setCity(value.label)} />
            </div>
            <div className='form-item form-submit'>
                <input type="button" value={isUpdate ? "Güncelle" : "Kaydet"} onClick={onSubmit} />
            </div>
        </form>
    )
}

export default Form