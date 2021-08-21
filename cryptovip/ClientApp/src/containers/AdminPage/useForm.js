import { useHistory } from "react-router";
import axiosInstance from "helpers/axiosInstance";
import { GlobalContext } from "context/Provider";
import React,{ useContext, useEffect, useState } from "react";
import {Type} from 'react-bootstrap-table2-editor';
import { textFilter, numberFilter, selectFilter } from 'react-bootstrap-table2-filter';

export default () => {
    const { authDispatch,
        authState: {
            auth: { loading, error }
        }
    } = useContext(GlobalContext)

    const dateFormatter = (cell) => {
        let dateObj = cell;
        if (typeof cell !== 'object') {
          dateObj = new Date(cell);
        }
        return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
    };

    const textFormater = (cell, row) =>{
        return(
            <div title={cell} style={truncate}>{cell}</div>
        );
    };
    
    const truncate = {
        width: 'inherit',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }

    const fundsColsMapper = (d, i)=>{
        ;
        return {
            'id': i+1,
            'accountno': d.accountNo,
            'currency': d.currency,
            'amount': d.amount,
            'date': new Date(d.date).toLocaleDateString('en-GB'),
            'fee': d.fee,
            'status': d.status,
            'approved': d.approved,
            'tid': d.tid
        }
    };

    const [profiles, setProfiles] = useState([]);
    const [deposits, setDeposits] = useState([]);
    const [withdrawals, setWithdrawals] = useState([]);

    let [editedProfile, setEditedProfile] = useState({});
    let [edtd, setEditedDeposit] = useState({});
    let [edtw, setEditedWithdrawal] = useState({});

    let [err, setError] = useState("");
    let [success, setSuccess] = useState("");

    const profilesCols = [
        {
            text: "ID",
            dataField: "id",
            sort: true
        },
        {
            text: "Account Number",
            dataField: "accountno",
            editable: false,
            filter: textFilter()
        },
        {
            text: "Last Name",
            dataField: "lastname",
            sort: true,
            filter: textFilter()
        },
        {
            text: "First Name",
            dataField: "firstname",
            sort: true,
            filter: textFilter()
        },
        {
            text: "Date Of Birth",
            dataField: "dob",
            //filter: dateFilter(),
            sort: true,
            formatter: dateFormatter,
            editor: {
                type: Type.DATE
            }
        },
        {
            text: "Phone",
            dataField: "phone",
            sort: true,
            filter: textFilter()
        },
        {
            text: "Address",
            dataField: "address",
            sort: true,
            filter: textFilter(),
            formatter: textFormater
        },
        {
            text: "User Name",
            dataField: "username",
            editable: false,
            sort: true,
            filter: textFilter(),
            formatter: textFormater
        },
        {
            text: "Referral User Name",
            dataField: "rusername",
            sort: true,
            filter: textFilter(),
            formatter: textFormater
        },
        {
            text: "Enabled",
            dataField: "enabled",
            sort: true,
            type: 'bool',
            editor: {
                type: Type.CHECKBOX,
                value: 'true:false'
            }
        },
    ];

    const fundsCols = [
        {
            text: "ID",
            dataField: "id",
            sort: true
        },
        {
            text: "Account Number",
            dataField: "accountno",
            editable: false,
            sort: true,
            filter: textFilter()
        },
        {
            text: "Currency",
            dataField: "currency",
            editable: false,
            sort: true,
            filter: textFilter(),
            formatter: textFormater
        },        
        {
            text: "Amount",
            dataField: "amount",
            editable: false,
            sort: true,
            filter: numberFilter()
        },
        {
            text: "Date",
            dataField: "date",
            sort: true,
            editable: false,
            //filter: dateFilter(),
            formatter: dateFormatter,
            editor: {
                type: Type.DATE
            }
        },
        {
            text: "Fee",
            dataField: "fee",
            sort: true,
            filter: numberFilter()
        },
        {
            text: "Status",
            dataField: "status",
            sort: true,
            filter: selectFilter({
                options: {
                    'Processing': 'Processing',
                    'Completed': 'Completed',
                    'Rejected':'Rejected',
                    'Canceled':'Canceled'
                }
            }),
            editor: {
                type: Type.SELECT,
                options: [{
                  value: 'Processing',
                  label: 'Processing'
                }, {
                  value: 'Completed',
                  label: 'Completed'
                }, {
                  value: 'Rejected',
                  label: 'Rejected'
                }, {
                  value: 'Canceled',
                  label: 'Canceled'
                }]
              }
        },
        {
            text: "Approved",
            dataField: "approved",
            sort: true,   
            type: 'bool',
            editor: {
                type: Type.CHECKBOX,
                value: 'true:false'
            }
        },
    ];

    useEffect(() => {
        axiosInstance()
            .get(`/admin/profiles`)
            .then((res) => {
                if (res.data.success) {
                    setProfiles(res.data.value.map((p, i)=>{
                        return {
                            'id': i+1,
                            'accountno': p.vipAccountNumber,
                            'lastname': p.lastName,
                            'firstname': p.firstName,
                            'middlename': p.middleName,
                            'phone': p.phone,
                            'enabled': p.enabled,
                            'dob': p.dateOfBirth == null ? "" : new Date(p.dateOfBirth).toLocaleDateString('en-GB'),
                            'address': p.homeAddress,
                            'username': p.userName,
                            'rusername': p.referralUserName
                        };
                    }));
                }
                else {
                    console.log(res.data.error)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axiosInstance()
            .get(`/admin/deposits`)
            .then((res) => {
                if (res.data.success) {
                    setDeposits(res.data.value.map(fundsColsMapper));
                }
                else {
                    console.log(res.data.error)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axiosInstance()
            .get(`/admin/withdrawals`)
            .then((res) => {
                if (res.data.success) {
                    setWithdrawals(res.data.value.map(fundsColsMapper));
                }
                else {
                    console.log(res.data.error)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(()=>{
        ;
        if(editedProfile.hasOwnProperty('id')){
            axiosInstance()
        .post('/admin/profile', editedProfile)
        .then((res) => {
            console.log('res', res);            
                     
        })
        .catch((err) => {
            console.log('err',err)
            
        });
        setEditedProfile({});
        }        
    },[editedProfile]);

    useEffect(()=>{
        ;
        if(edtd.hasOwnProperty('id')){
            axiosInstance()
        .post('/admin/deposit', {tid: edtd.tid, status: edtd.status, fee:edtd.fee, approved:edtd.approved})
        .then((res) => {
            console.log('res', res);            
                     
        })
        .catch((err) => {
            console.log('err',err)
            
        });
        setEditedDeposit({});
        }        
    },[edtd]);

    useEffect(()=>{
        ;
        if(edtw.hasOwnProperty('id')){
            axiosInstance()
        .post('/admin/withdrawal', {tid: edtw.tid, status: edtw.status, fee:edtw.fee, approved:edtw.approved})
        .then((res) => {
            console.log('res', res);            
                     
        })
        .catch((err) => {
            console.log('err',err)
            
        });
        setEditedWithdrawal({});
        }        
    },[edtw]);

    


    const onClick = (e, val) => {
        //setForm({ ...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    const saveWithdrawals = (oldValue, newValue, row, column) =>{
        
        setEditedWithdrawal(row);
    }

    const saveAddFunds = (oldValue, newValue, row, column) =>{
        
        setEditedDeposit(row);
    }

    const saveProfiles = (oldValue, newValue, row, column) =>{
        setEditedProfile(row);
    }

    return { profiles, deposits, withdrawals, loading, error, profilesCols, fundsCols, onClick, saveWithdrawals, saveAddFunds, saveProfiles };
};