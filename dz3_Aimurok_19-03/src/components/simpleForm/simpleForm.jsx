import style from './simpleForm.module.css'
import { useState } from 'react'

function SimpleForm() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('1')
    const [checked, setChecked] = useState(false)
    const [submit, setSubmit] = useState(false)

    const putSubmit = (e) => {
        e.preventDefault
    }
    return (
        <div className="container">
            <div className={style.register}>
                <form action="" className={style.simpleForm} onSubmit={putSubmit}>
                    <h2>Регистрация</h2>
                    <label>Фамилия:
                        <input
                            className={style.name}
                            type="text"
                            name='firstname'
                            placeholder='Введите фамилию'
                            onChange={(e) => setSurname(e.target)}

                        />
                    </label>
                    <label >Имя:
                        <input
                            className={style.name}
                            type="text"
                            name='firstname'
                            placeholder='Введите имя'
                            onChange={(e) => setName(e.target)}

                        />
                    </label>
                    <label> Возраст:
                        <input
                            className={style.age}
                            type="number"
                            name="age" min={1} max={120}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <label>

                        <input
                            className={style.checkbox}
                            id="checkbox"
                            type="checkbox"
                            name="checkbox"
                            onChange={(e) => setChecked(!checked)} />

                        <div>Настоящим подтверждаю, что я согласен(-сна):{checked ? setSubmit : setSubmit}</div>
                        {checked ?
                            < input
                                type="submit"
                                name="submit"
                                value="Отправить"
                            />
                            : <input
                                type="submit"
                                name="submit"
                                disabled
                                value="Отправить" />}
                    </label>
                </form>

            </div>
        </div>
    )
}
export default SimpleForm