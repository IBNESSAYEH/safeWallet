import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function Transaction() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/transactions',{} , {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const formattedTransactions = response.data.transactions.map(transaction => ({
                    ...transaction,
                    created_at: moment(transaction.created_at).format('YYYY-MM-DD'),
                }));

                setTransactions(formattedTransactions);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []); 

    return (
        <div className=" mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Transaction History</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Montant</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map(transaction => (
                                            <tr key={transaction.id}>
                                                <th scope="row">{transaction.id}</th>
                                                <td>{transaction.amount}</td>
                                                <td>{transaction.type}</td>
                                                <td className='col-md-3'>{transaction.created_at}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
