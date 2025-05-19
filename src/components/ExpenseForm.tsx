import { useState } from "react";
import type { DraftExpense } from "../types";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        amount: 0,
        expenseName: '',
        category: '',
        date:new Date()
    })

  return (
    <form className="space-y-5" action="">
      <legend className="uppercase font-black text-2xl text-center border-b-4 border-blue-500 py-2">
        Nuevo Gasto:
      </legend>
      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Nombre Gasto
        </label>
        <input
          type="text"
          className="bg-slate-100 p-2"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          name="expenseName"
          value={expense.expenseName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          className="bg-slate-100 p-2"
          id="amount"
          placeholder="Añade la cantidad del gasto: ej. $300"
          name="amount"
          value={expense.amount}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria:
        </label>
        <select className="bg-slate-100 p-2" id="category" name="category" value={expense.category}>
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Fecha Gasto:
        </label>
        <DatePicker className="bg-slate-100 p-2 border-0" value={expense.date}/>
      </div>
      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 uppercase rounded-lg font-bold text-white"
        value="Registrar Gasto"
      />
    </form>
  );
}
