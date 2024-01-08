import React from 'react'
import useInput from '../hooks/useInput'
import api from '../apis/api'


function CreateAccount() {
    const [id, HendlerIdInput] = useInput()
    const [pw, HendlerPwInput] = useInput()



    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                아이디:
                <input type="text"
                    value={id}
                    onChange={HendlerIdInput}
                />
                비밀번호:
                <input type="password"
                    value={pw}
                    onChange={HendlerPwInput}
                />
                <button>완료</button>
            </form>
        </>
    )
}

export default CreateAccount