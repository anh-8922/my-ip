import { useState, useEffect } from "react"


export default function useFetch (url) {
    const [data, setData] =useState(null)
    const [error, setError] = useState (null)

    useEffect (() => {
        const getData = async () => {
            try{
                const response = await fetch (url)
                const data = await response.json()
                console.log("Data received:", data);
                setData(data)
            } catch (error){
                setError(error)
                console.log("Error occurred:", error);
            }
            
        }
        getData()
    }, [url])

    return {data, error}
}