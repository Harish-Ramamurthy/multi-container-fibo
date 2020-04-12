import React from 'react'
import axios from 'axios'

const Fib: React.FC = (): React.ReactElement => {
    const [seenIndexes, setSeenIndexes] = React.useState([])
    const [values, setValues] = React.useState<Record<string, string>>({})
    const [index, setIndex] = React.useState('')

    React.useEffect(() => {
        const fetchValues = async (): Promise<void> => {
            const values = await axios.get('/api/values/current')
            setValues(values.data)
        }

        fetchValues()

        const fetchIndexes = async (): Promise<void> => {
            const seenIndexes = await axios.get('/api/values/all')
            setSeenIndexes(seenIndexes.data)
        }

        fetchIndexes()

    }, [])

    const renderSeenIndexes = (): React.ReactElement => {
        return <React.Fragment>
            {seenIndexes.map(({ number }) => number).join(', ')}
        </React.Fragment>
    }

    const renderCalculatedValues = (): React.ReactElement => {
        return <React.Fragment>
            {
                Object.entries(values).map(([key, value]) => {
                    return <React.Fragment>For index {key}, I calculated {values[key]}</React.Fragment>
                })
            }
        </React.Fragment>
    }

    const handleSubmit = async (event: any): Promise<void> => {
        event.preventDefault()
        await axios.post('/api/values', { index })
        setIndex('')
    }

    return <React.Fragment>
        <form onSubmit={handleSubmit}>
            <label style={{ margin: '0 10px'}}>Enter your Index: </label>
            <input style={{ marginRight: '10px'}} value={index} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIndex(event.target.value)} />
            <button>Submit</button>
            <h3>Indexes seen</h3>
            {renderSeenIndexes()}
            <h3>Calculated Values</h3>
            {renderCalculatedValues()}
        </form>
    </React.Fragment>
}

export default Fib