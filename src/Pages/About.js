import React from 'react'
import Container from 'react-bootstrap/Container'
import { useRecoilValue } from 'recoil'
import { dataUser } from '../Store'
const About = () => {
    const user = useRecoilValue(dataUser)
    return (
        <Container>
             <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh', flexDirection:'column'}}>
                <h1>About User</h1>
                <p>Nama: {user.name}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </Container>
    )
}

export default About
