import React, {useState} from 'react'
import Info from './Info'

const Countries = ({data}) => {
    const [show, setShow] = useState('')

    if (data.length === 0) return 'No matches'

    if (data.length > 10) return 'Too many matches, specify more.'

    if (data.length === 1 && data[0].alpha2Code !== '0') {
        return <Info country={data[0]} />
    } else if (show !== '') {
        return (
            <div>
                <button onClick={() => setShow('')}>Back</button>
                <Info country={show} />
            </div>
        )
    } else {
        return (
            <div>  
                {data.map(x => 
                <div key={x.alpha2Code}>
                <p><button onClick={() => setShow(x)}>
                    Show
                </button>
                {x.name}</p>
                </div>
                )}
            </div>
        )
    }

        
}

export default Countries