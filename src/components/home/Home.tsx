import React, { useContext } from 'react';
import { IncomeContext } from "../Context/IncomeContext";

function Home() {
  const { incomes, setIncomes } = useContext(IncomeContext);

  console.log(incomes);

  return (
    <div>Home</div>
  );
}

export default Home;