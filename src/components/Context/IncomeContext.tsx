import React, { createContext, useState } from 'react';


interface PropsChildren {
    children: JSX.Element;
}

type Income = {
    type: string,
    NfNumber: string,
    IssueDate: string,
    supplierId: {
        clientSupplier: string,
        type: string,
        name: string,
        fantasyName: string,
        inscription: string,
    },
    freight: string,
    depenses: string,
    paymentConditions: string,
    dueDate: string,
    paymentMethod: string,
};

type Incomes = {
    type: string,
    NfNumber: string,
    IssueDate: string,
    supplierId: {
        clientSupplier: string,
        type: string,
        name: string,
        fantasyName: string,
        inscription: string,
    },
    freight: string,
    depenses: string,
    paymentConditions: string,
    dueDate: string,
    paymentMethod: string,
};

type IncomeContextData = {
    incomes: Income[];
    setIncomes: React.Dispatch<React.SetStateAction<Income[]>>;
};

export const IncomeContext = createContext({} as IncomeContextData);

export const MyIncomes = ({ children }: PropsChildren) => {
    const [incomes, setIncomes] = useState<Income[]>([]);



    return (
        <IncomeContext.Provider value={{ incomes, setIncomes }}>
            {children}
        </IncomeContext.Provider>
    );
};







