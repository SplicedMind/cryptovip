import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function EWalletPage({form:{form, loading, error, isValid, onChange, onClick}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>E-Wallet</h4>
            </div>
            <div className="row">
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>CAP</th>                            
                            <th>ROI</th>                            
                            <th>Com.</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        {form.Wallets?.map((opt, index) => {
                            return(<tr key={index}>
                                <td>{opt.currency}</td>
                                <td>{opt.capital}</td>                            
                                <td>{opt.roi}</td>                            
                                <td>{opt.commission}</td>                    
                            </tr>);
                        })}
                    </tbody>
                </table>                
            </div>
        </div>        
    </ProfileLayout>
    );
}
