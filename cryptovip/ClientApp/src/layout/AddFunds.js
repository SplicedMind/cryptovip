import { addfunds } from "context/actions/addfunds";
import React from "react";
import ProfileLayout from "./ProfileLayout";
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from "react-icons/md";

export default function AddFundsPage({form:{form, loading, error, isCopied, isValid, onChange, onClick, onCopyText}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Add Funds</h4>
            </div>
            <div className="row col-md-6 justify-content-start">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="currencyid" className="form-label col-md-4">Currency</label>
                        <select id="currencyid" className="form-control col-md-8"  onChange={onChange} disabled={form.fundsData}>
                            <option value={0}>Select Currency</option>
                            {form.Options?.map((opt, index) => {
                                return(<option key={index} value={opt.id}>{opt.currency}</option>); 
                            })}
                        </select>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="amount" className="form-label col-md-4">Amount</label>
                        <input type="number" id="amount" className="form-control col-md-8" autoComplete="off" onChange={onChange} disabled={form.fundsData}/>
                    </div>
                    <button type="submit" onClick={onClick} className="btn btn-success btn-sm offset-md-4" disabled={form.fundsData ||(!form.fundsData && !isValid)}>Next</button>
                </form>
            </div>
            {form.fundsData && (
                
                <div className="container my-4">
                    <h3>Payment Information</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-md-8">
                            <p>Send the desired amount to the address below. </p>
                            <div className="form-group">
                                <label className="form-label">Address</label>
                                <div className="form-control">
                                        <input style={{border:'0px', width:'90%', textOverflow: 'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}} value={form.fundsData.address} readOnly/>
                                    
                                    <CopyToClipboard text={form.fundsData.address} onCopy={onCopyText}>
                                        <span style={{float:'right'}}>{isCopied ? <small style={{fontSize:'0.7rem', color:'green'}}>Copied!</small> : <MdContentCopy />}</span>
                                    </CopyToClipboard>                       
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Network</label>
                                <span className="form-control">{form.fundsData.network}</span>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <QRCode value={form.fundsData.address}/>
                            <p>Minimum confirmations required: {form.fundsData.minimumConfirmation}</p>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>        
    </ProfileLayout>
    );
}
