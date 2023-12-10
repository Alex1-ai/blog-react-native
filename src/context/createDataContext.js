import React, {useReducer, createContext} from 'react'


export default (reducer, actions, initialState) =>{
    const Context = createContext();

    const Provider = ({ children }) =>{
        const [state, dispatch] = useReducer(reducer, initialState)

        // actions == { add_post : (dispatch) =>{ return () => {} }}
        const boundAction = {};
        for (let key in actions){
            boundAction[key] = actions[key](dispatch)
        }
        return <Context.Provider value={{state, ...boundAction}}>
            {children}

        </Context.Provider>


    }

    return { Context, Provider}
}