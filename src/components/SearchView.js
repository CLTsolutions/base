import { useEffect, useState } from 'react'
const SearchView = ({setCurrentChar}) => {
    const [results, setResults] = useState([])

    const [query, setQuery] = useState()
    const [displayedResults, setDisplayedResults] = useState([])

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(json => setResults(json))
    },[])

    useEffect(() => {
        let filtered = results.filter((res) => res.films.length > 1 && res.name)
        console.log(filtered)
        setDisplayedResults(results)
    }, [results])

    useEffect(() => {
        let filteredDisplay = results.filter(res => res.name.includes(query) )
        setDisplayedResults(filteredDisplay)
    }, [query])

    return (
        <> 
            <h1>Search <input onChange={e => {setQuery(e.target.value)}} /></h1>
            {displayedResults?.map(result => {
                    return (
                        <>
                            <h3 key={result.id}>{result.name} <button onClick={() => {setCurrentChar(result)}}>Details</button> </h3>
                        </>
                    )
                })
            }
        </> 
    )
}

export default SearchView