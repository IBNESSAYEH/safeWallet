

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Recharge() {
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const number = e.target.elements.number.value;
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/deposit', {
                amount: number,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log(response.data.message);
            navigate('/');
        }
        catch (error) {
            console.error('Recharge failed:', error);
        }
    }



    return (
        <div className="container mt-4">
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Recharge</h2>
                            
                            <form onSubmit={handleSubmit}>
                                
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">Montant</label>
                                    <input type="number" className="form-control" id="number" />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Recharger</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}