import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const GlobalContext = createContext(undefined);

const newTheme = {
  dark: {
      t: false,   
  },
  
  light: {
      t: true,   
  }
}

const InitialState = newTheme.light ;
const InitialApiState = []

function newReducer(state, action) {
  switch (action.type) {
      case 'SWITCH_DARK':
          return newTheme.dark
      case 'SWITCH_LIGHT':
          return newTheme.light
      default:
          throw new Error()
  }
}

const apiReducer = (state, action) =>{
  switch(action.type){
    case 'GET_API':
    return action.payload
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {

  const [stateTheme, dispatchTheme] = useReducer(newReducer, InitialState)
  const [apiState, dispatchApi] = useReducer(apiReducer , InitialApiState)

  const [arr, setArr] = useState([]);
  let arrayExists =  localStorage.getItem("arr") ? true :
  localStorage.setItem("arr", JSON.stringify(arr))

  useEffect(() => {
    const data = JSON.parse(arrayExists) || [];
    setArr(data);
  }, [arrayExists]);

  const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatchApi({type : 'GET_API', payload: data}))
    }, [])


  return (
    <GlobalContext.Provider value={{apiState, arr, setArr, stateTheme, dispatchTheme}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};