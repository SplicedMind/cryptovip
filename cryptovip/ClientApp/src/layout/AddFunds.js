import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function AddFundsPage({form:{form, loading, error, data, onChange, onSubmit}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Add Funds</h4>
            </div>
            <div className="row col-md-6 justify-content-start">
                <form>
                    <div className="row mb-3">
                        <label for="currency" className="form-label col-md-4">Currency</label>
                        <select id="currency" className="form-control col-md-8">
                        {form.Options?.map((opt) => {
                            return(<option value={opt.id}>{opt.channel}</option>); 
                        })}
                        </select>
                    </div>
                    <div className="row mb-3">
                        <label for="amount" className="form-label col-md-4">Amont</label>
                        <input type="number" id="amount" className="form-control col-md-8"/>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm offset-md-4">Next</button>
                </form>
            </div>
            
        </div>        
    </ProfileLayout>
    );
}
