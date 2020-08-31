import React, { useState, useEffect, useMemo, useRef } from "react"

const UsuarioContext = React.createContext()

export const UsuarioProvider = props => {
  const [VALOR, useValor] = useState(false)

  const myREF = useRef()
  const handle = () => {
    console.log("work")
    window.scrollTo(
      0,
      myREF.current.getBoundingClientRect().top - myREF.current.offsetTop
    )
    console.log(myREF.current)
  }
  const value = useMemo(() => {
    return {
      VALOR,
      myREF,
      handle,
    }
  }, [VALOR, myREF])
  return <UsuarioContext.Provider value={value} {...props} />
}

export const useUsuario = () => {
  const context = React.useContext(UsuarioContext)
  if (!context) {
    throw new Error("NOT WORK")
  }
  return context
}
