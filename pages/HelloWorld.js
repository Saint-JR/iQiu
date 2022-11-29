import { useEffect, useState } from "react"
import { View ,Text} from "react-native"

const HelloWorld = () => {
    let [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(1)
    },[])

    return(
        <Text>
            {count}123
        </Text>
    )

}

export default HelloWorld;