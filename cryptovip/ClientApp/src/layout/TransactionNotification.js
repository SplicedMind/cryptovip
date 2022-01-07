import React from "react";
import ProfileLayout from "./ProfileLayout";
import SnackbarContent from "components/Snackbar/SnackbarContent";

export default function TransactionsNotification({form:{form, tState, isValid, onChange, onClick}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Transaction Notification</h4>
            </div>        

                { 
                    tState.success && <SnackbarContent
                                message={
                                    <span>
                                        <b>Success:</b> {
                                        `${tState.message}`
                                        }
                                    </span>
                                }
                                close
                                color="success"
                                icon="info_outline" 
                            />
                }
                {
                    !tState.success && !!tState.message && <SnackbarContent
                                message={
                                    <span>
                                        <b>ERROR:</b> {`${tState.message}`}
                                    </span>
                                }
                                close
                                color="danger"
                                icon="info_outline"
                            />
                }

                <div className="row col-md-6 justify-content-start">
                    <form>
                        <div className="row mb-3">
                            <label htmlFor="currencyid" className="form-label col-md-4">Currency</label>
                            <select id="currencyid" className="form-control col-md-8" onChange={onChange} >
                                <option value={0}>Select Currency</option>
                                {form.Options?.map((opt, index) => {
                                    return (<option key={index} value={opt.id}>{opt.currency}</option>);
                                })}
                            </select>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="amount" className="form-label col-md-4">Amount</label>
                            <input type="number" id="amount" className="form-control col-md-8" autoComplete="off" onChange={onChange} />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="address" className="form-label col-md-4">Wallet Address</label>
                            <input type="text" id="address" className="form-control col-md-8" autoComplete="off" onChange={onChange} />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="date" className="form-label col-md-4">Date</label>
                            <input type="date" id="date" className="form-control col-md-8" autoComplete="off" onChange={onChange} />
                        </div>
                        <button type="submit" onClick={onClick} className="btn btn-success btn-sm offset-md-4" disabled={!isValid}>Submit</button>
                    </form>
                </div>
           
        </div>        
    </ProfileLayout>
    );
}