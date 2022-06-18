import React, { useState, createContext } from "react";

interface propsChildren {
  children: JSX.Element;
}

type ContextType = {
  logado: boolean;
  setLogado: React.Dispatch<React.SetStateAction<boolean>>;
};

const modeloLogado = {
  logado: false,
  setLogado: () => false
};

export const MeuContexto = createContext<ContextType>(modeloLogado);

export const MeusDados = ({ children }: propsChildren) => {
  const [logado, setLogado] = useState<boolean>(false);

  return (
    <MeuContexto.Provider value={{ logado, setLogado }}>
      {children}
    </MeuContexto.Provider>
  );
};
