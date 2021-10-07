import React from 'react'
import Container from 'react-bootstrap/Container'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { theme } from '../Store'

const Home = () => {
    const [currenTheme, setCurrentTheme] = useRecoilState(theme)
    const resetTheme = useResetRecoilState(theme);
    return (
        <Container>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh', flexDirection:'column'}}>
                <h1>Home Page</h1>
                <select value={currenTheme} onChange={(e) => setCurrentTheme(e.target.value)} className="form-control" style={{maxWidth: 200}}>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
                <button style={{marginTop: 10}} className="btn btn-primary" onClick={resetTheme}>Reset to default</button>
            </div>
        </Container>
    )
}

export default Home
