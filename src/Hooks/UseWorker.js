import { useEffect, useState } from "react"

const UseWorker = email =>{
    const [isWorker, setIsWorker] = useState(false);
    const [isWorkerLoading, setIsWorkerLoading] = useState(true);
    useEffect(() =>{
         if (email) {
            fetch(`http://localhost:5000/usersList/worker/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.isWorker);
                setIsWorker(data.isWorker);
                setIsWorkerLoading(false);
            })
         }
    }, [email])
    return [isWorker , isWorkerLoading]

}
export default UseWorker;