import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function WithdrawFundsPage({form:{form, loading, error, isValid, onChange, onClick}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-12 justify-content-start">
                <h4>Withdraw Funds</h4>
            </div>
            <div className="row col-md-12 justify-content-start">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="currencyid" className="form-label col-md-4">Currency</label>
                        <select id="currencyid" className="form-control col-md-8"  onChange={onChange} disabled={form.withdrawInfo}>
                            <option value={0}>Select Currency</option>
                            {form.Options?.map((opt, index) => {
                                return(<option key={index} value={opt.id}>{opt.currency}</option>); 
                            })}
                        </select>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="amount" className="form-label col-md-4">Amount</label>
                        <input type="number" id="amount" className="form-control col-md-8" autoComplete="off" onChange={onChange} disabled={form.withdrawInfo}/>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="address" className="form-label col-md-4">Address</label>
                        <input id="address" type="text" className="form-control col-md-8" autoComplete="off" onChange={onChange} disabled={form.withdrawInfo}/>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="network" className="form-label col-md-4">Network</label>
                        <input id="network" type="text" className="form-control col-md-8" autoComplete="off" onChange={onChange} disabled={form.withdrawInfo}/>
                    </div>
                    <button type="submit" onClick={onClick} className="btn btn-success btn-sm offset-md-4" disabled={!isValid || (isValid && form.withdrawInfo)}>Withdraw</button>
                </form>
            </div>
        </div>        
    </ProfileLayout>
    );
}
