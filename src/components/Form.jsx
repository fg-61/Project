import React, { useEffect, useState } from 'react';
import { options } from '../constant/options';
import Dropdown from './Dropdown';
import '../assets/css/form.css'

const Form = ({ addPerson, person, setPerson, isUpdate, isMulti, setIsUpdate, updatePerson}) => {

    const onSubmit = () => isUpdate ? update() : create();

    const update = () => updatePerson(person.id, person)

    const create = () => addPerson(person)

    const cancel = () => {
        setPerson(
            {
                name: '',
                surname: '',
                age: 0,
                address: '',
                cities: []
            });
        setIsUpdate(false)
    }

    return (
        <form className='form-container'>
            {isUpdate ? <h3>{person.name}</h3> : ""}
            <div className='form-item'>
                <span>Ad</span>
                <input type="text" value={person.name} name="name" onChange={(e) => setPerson(prev => ({ ...prev, name: e.target.value }))} placeholder="Adınızı giriniz" />
            </div>

            <div className='form-item'>
                <span>Soyad</span>
                <input type="text" value={person.surname} name="surname" onChange={(e) => setPerson(prev => ({ ...prev, surname: e.target.value }))} placeholder="Soyadınızı giriniz" />
            </div>

            <div className='form-item'>
                <span>Yaş</span>
                <input type="number" value={person.age} name="age" onChange={(e) => setPerson(prev => ({ ...prev, age: e.target.value }))} placeholder="Yaşınızı giriniz" />
            </div>

            <div className='form-item'>
                <span>İkamet Adresi</span>
                <input type="text" defaultValue={isUpdate ? person.address : ""} name="address" onChange={(e) => setPerson(prev => ({ ...prev, address: e.target.value }))} placeholder="Adresinizi giriniz" />
            </div>
            <div className='form-item'>
                <span>Yaşanılan İller</span>
                <Dropdown isMulti={isMulti} placeHolder="Select..." values={person.cities} person={person} options={options} onChange={(value) => setPerson(prev => ({ ...prev, cities: value }))} />
            </div>
            <div className='form-item form-submit'>
                {isUpdate ? <input type="button" className='btn-cancel' value="İptal" onClick={cancel} /> : null}
                <input type="button" value={isUpdate ? "Güncelle" : "Kaydet"} className="btn-submit" onClick={onSubmit} />
            </div>
        </form>
    )
}

export default Form