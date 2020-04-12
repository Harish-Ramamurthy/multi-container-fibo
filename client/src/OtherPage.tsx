import React from 'react'
import { Link } from 'react-router-dom'

const OtherPage: React.FC = (): React.ReactElement => {
    return <React.Fragment>
        In some other page !
        <Link to="/">Go back home</Link>
    </React.Fragment>

}

export default OtherPage