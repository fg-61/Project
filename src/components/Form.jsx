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
        <div className='form-style-6'>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <div style={{display:"flex"}}>
                    <h2>Ad</h2>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Adınızı giriniz" />
                </div>


                <label>
                    Soyad:
                    <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} placeholder="Soyadınızı giriniz" />
                </label>

                <label>
                    Yaş:
                    <input type="number" name="age" min="0" onChange={(e) => setAge(e.target.value)} placeholder="Yaşınızı giriniz" />
                </label>

                <label>
                    Adres:
                    <input type="text" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Adresinizi giriniz" />
                </label>

                <label>
                    İl:
                    <Dropdown isMulti placeHolder="Select..." options={options} onChange={(value) => setCities(value)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Form