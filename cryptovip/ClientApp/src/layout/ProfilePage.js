import React from "react";
import ProfileLayout from "./ProfileLayout";

export default function ProfilePage({form:{form, loading, error, onChange, onClick}}) {
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Profile</h4>
            </div>
            <div className="row">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="lastname" className="form-label col-md-4">Last Name</label>
                        <input id="lastname" className="form-control col-md-8"  value={form?.lastName} disabled={true}/>                       
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="firstname" className="form-label col-md-4">First Name</label>
                        <input id="firstname" className="form-control col-md-8"  value={form?.firstName} disabled={true}/>                       
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="dateOfBirth" className="form-label col-md-4">Date of Birth</label>
                        <input id="dateOfBirth" type="date" className="form-control col-md-8" value={form?.dateOfBirth?.split("T")[0]}  onChange={onChange} />                       
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phone" className="form-label col-md-4">Phone</label>
                        <input id="phone" type="phone" className="form-control col-md-8"  value={form?.phone}  onChange={onChange} />                       
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="username" className="form-label col-md-4">E-mail</label>
                        <input id="username" type="email" className="form-control col-md-8"  value={form?.userName} disabled={true}/>                       
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="homeaddress" className="form-label col-md-4">Home Address</label>
                        <input id="homeaddress" className="form-control col-md-8" value={form?.homeAddress}  onChange={onChange}/>                       
                    </div>
                    
                    <button type="submit" onClick={onClick} className="btn btn-success btn-sm offset-md-4" >Save</button>
                </form>
            </div>
           
        </div>        
    </ProfileLayout>
    );
}
