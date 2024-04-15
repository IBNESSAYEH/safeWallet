import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Accounts() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/showUsers',{}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setAccounts(response.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []); 

    const handleSendMoney = async (walletId) => {
        try {
            const amount = document.getElementById('amount').value;
            axios.post('http://127.0.0.1:8000/api/transfer', {
                amount,
                recipient_id: walletId,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        }catch (error) {
            console.error('Error sending money:', error);
        }   

    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Accounts</h2>
            <div className="row">
                {accounts.map(account => (
                    <div className="col-md-4 mb-3" key={account.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{account.name}</h5> 
                               <label>amount</label>
                               <input type="number" className="form-control mb-2 mt-4" id="amount" />
                                <button className="btn btn-primary" onClick={() => handleSendMoney(account.wallet.id)}>Send Money</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
