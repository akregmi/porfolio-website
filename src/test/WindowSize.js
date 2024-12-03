import { useEffect, useState } from "react"

const WindowSize = () => {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    },[])

    return (
        <p>{size}</p>
    )
}

export default WindowSize;