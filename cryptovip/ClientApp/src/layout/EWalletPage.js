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
            <div>
                <p>
                    To add funds to your e-wallet:                   
                </p>
                    <ol>
                        <li>Buy crypto currency (Bitcoin, Tether, Litecoin, e.t.c.) from <a href="https://crypto.com" target="_blank">crypto.com</a> or any other crypto currency exchange website.</li>
                        <li>On your dashboard, click on "Add Funds" and fill in the currency (e.g. Tether) and the amount (e.g. 10,000).</li>
                        <li>Click on "Next button".</li>
                        <li>Copy the displayed crypto wallet address.</li>
                        <li>Transfer the desired amount from your wallet to the address.</li>
                        <li>Fill paymenty notification form after each succesful payment.</li>
                    </ol>
                {/* <p>
                    Note:
                    <ul>
                        <li>Before adding fund, you must generate an account number by clicking the email verification link sent to your email.</li>
                        <li>You can only withdraw funds to the wallet address the capital came from.</li>
                    </ul> 
                </p> */}
            </div>
        </div>        
    </ProfileLayout>
    );
}
