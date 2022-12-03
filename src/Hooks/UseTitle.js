import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Nazma Jute`
    },[title])
}
 export default UseTitle