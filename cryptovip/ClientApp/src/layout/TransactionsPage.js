import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function TransactionsPage({form:{form, loading, error, isCopied, isValid, onChange, onClick, onCopyText}}) {
    
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
                        <tr>
                            <td>SN</td>
                            <td>Created</td>
                            <td>Approved</td>                            
                            <td>Debit</td>                            
                            <td>Credit</td>
                            <td>Fee</td>
                            <td>Currency</td>
                            <td>Status</td>                            
                        </tr>
                        <tr>
                            <td>SN</td>
                            <td>Created</td>
                            <td>Approved</td>                            
                            <td>Debit</td>                            
                            <td>Credit</td>
                            <td>Fee</td>
                            <td>Currency</td>
                            <td>Status</td>                            
                        </tr>
                    </tbody>
                </table>                
            </div>
           
        </div>        
    </ProfileLayout>
    );
}
