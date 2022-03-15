import {createContext, useState} from 'react'


const ElementsContext = createContext()

export const ElementProvider = ({children}) => {
    
    const [element, setElement] = useState({
        social: 0,
        services: 0,
        skills: 0,
        contact: 0
    })

    return <ElementsContext.Provider value={{element}}>
        {children}
    </ElementsContext.Provider>
}

export default ElementsContext