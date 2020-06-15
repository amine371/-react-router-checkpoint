import React from 'react'
import { Redirect } from 'react-router-dom'

const Admin = ({auth}) => {
    console.log({auth});
    return (
        ({auth}) ? <h1>Welcome Admin</h1> : <Redirect to="/login"/>
    )
}

export default Admin