import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function TransactionsPage({form:{form, loading, error, isValid, onChange, onClick}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Transactions</h4>
            </div>
            <div className="row">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Created</th>
                            <th>Approved</th>                            
                            <th>Debit</th>                            
                            <th>Credit</th>
                            <th>Fee</th>
                            <th>Currency</th>
                            <th>Status</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {form.Transaction?.map((opt, index) => {
                            return(<tr key={index}>
                                <td>{index+1}</td>
                                <td>{opt.created}</td>
                                <td>{opt.approved}</td>                            
                                <td>{opt.debit}</td>                            
                                <td>{opt.credit}</td>
                                <td>{opt.fee}</td>
                                <td>{opt.currency}</td>
                                <td>{opt.status}</td>                            
                            </tr>);
                        })}
                    </tbody>
                </table>                
            </div>
           
        </div>        
    </ProfileLayout>
    );
}
