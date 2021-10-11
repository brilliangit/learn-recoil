import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filter, listFilm } from '../Store'

function Film() {
    const [state, setState] = useRecoilState(filter)
    const {Search} = useRecoilValue(listFilm)
    return (
        <div>
            <select value={state} onChange={(e)=> setState(e.target.value)} >
                <option value="batman">Batman</option>
                <option value="superman">Superman</option>
            </select>
            <ul>
                {
                    Search.map((v, i) => <li key={i}>{v.Title}</li>)
                }
            </ul>
        </div>
    )
}

export default Film
