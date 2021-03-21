import React, {useState,useContext} from 'react';
import {AppContext} from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);
	const expenseTotal = expenses.reduce((total,item)=> {
		return (total += item.cost);
	},0);
	return (
		<div className='alert alert-primary'>
			<span>Spent so far: £{expenseTotal}</span>
		</div>
	);
};

export default ExpenseTotal;