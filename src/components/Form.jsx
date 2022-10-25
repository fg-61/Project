import React, { useEffect, useState } from 'react';
import { options } from '../constant/options';
import Dropdown from './Dropdown';
import '../assets/css/form.css'

const Form = () => {

    const [cities, setCities] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('')

    return (
        <div className='container'>
            <form className='form-container'>
                <div className='form-item'>
                    <span>Ad</span>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Adınızı giriniz" />
                </div>

                <div className='form-item'>
                    <span>Soyad</span>
                    <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} placeholder="Soyadınızı giriniz" />
                </div>

                <div className='form-item'>
                    <span>Yaş</span>
                    <input type="number" name="age" min="0" onChange={(e) => setAge(e.target.value)} placeholder="Yaşınızı giriniz" />
                </div>

                <div className='form-item'>
                    <span>Adres</span>
                    <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Adresinizi giriniz" />
                </div>

                <div className='form-item'>
                    <span>İl</span>
                    <Dropdown isMulti placeHolder="Select..." options={options} onChange={(value) => setCities(value)} />
                </div>

                <div className='form-item form-submit'>
                    <input type="submit" value="Kaydet" />
                </div>

            </form>
        </div>

    )
}

export default Form