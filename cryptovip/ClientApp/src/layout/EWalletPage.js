import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function EWalletPage({form:{form, loading, error, isCopied, isValid, onChange, onClick, onCopyText}}) {
    
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
                        <tr>
                            <td>BTC</td>
                            <td>10</td>
                            <td>1</td>                            
                            <td>0.2</td>                           
                        </tr>
                        <tr>
                            <td>LTC</td>
                            <td>40</td>
                            <td>3</td>                            
                            <td>0.5</td>                           
                        </tr>
                    </tbody>
                </table>                
            </div>
           
           
        </div>        
    </ProfileLayout>
    );
}
