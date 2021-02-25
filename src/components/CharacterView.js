import {useEffect,useState} from 'react'

const CharacterView = ({setCurrentChar, currentChar}) => {
    const [appearsIn, setAppearsIn] = useState([])
    useEffect(()=>{
        let prommisArr = currentChar.films.map(film => {
            return fetch(film)
                .then(res => res.json())
        })
        Promise.all(prommisArr).then(
            res => setAppearsIn(res)
        )
    }, [])

    return (
        <> 
            <div>Char View!</div>
            {currentChar.name}
            {currentChar.age}
            {appearsIn?.map(film => {
                return (
                <div>
                    {film.title}
                    {film.description}
                </div>)
            })}
            <button onClick={() => setCurrentChar()}>Go Back</button>
        </> 
    )
}

export default CharacterView