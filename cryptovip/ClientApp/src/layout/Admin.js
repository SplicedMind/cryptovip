import React from "react";
import ProfileLayout from "./ProfileLayout";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';

export default function AdminPage({form:{loading, profiles, deposits, withdrawals, notifications, error, profilesCols, fundsCols, noteCols, onClick, saveWithdrawals, saveAddFunds, saveProfiles, saveNotifications}}) {
    
    return (
    <ProfileLayout>
        <div className="my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Admin Page</h4>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mb-2">
                    <Col>
                        <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                                <Nav.Link onClick={onClick} eventKey="profiles">User Profiles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  eventKey="addfunds">Add Funds</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  eventKey="withdrawfunds">Withdraw Funds</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link  eventKey="transactionnotification">Tranaction Notification</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>                    
                </Row>
                <Row>
                        <Tab.Content className="container">
                            <Tab.Pane eventKey="profiles" className="table-responsive">
                               <BootstrapTable className="table table-fluid table-sm"
                               keyField='id'
                                data={profiles}
                                columns= {profilesCols} 
                                bootstrap4={true} 
                                striped
                                hover
                                condensed 
                                cellEdit={ cellEditFactory({
                                    mode: 'dbclick',
                                    blurToSave: true,
                                    afterSaveCell: saveProfiles
                                }) }
                                filter={ filterFactory() }
                                //pagination={ paginationFactory() }
                            />
                            </Tab.Pane>
                            <Tab.Pane eventKey="addfunds">
                                <BootstrapTable 
                                    keyField='id' 
                                    data={deposits} 
                                    columns= {fundsCols} 
                                    bootstrap4={true} 
                                striped
                                hover
                                condensed 
                                cellEdit={ cellEditFactory({
                                    mode: 'dbclick',
                                    blurToSave: true,
                                    afterSaveCell: saveAddFunds
                                }) }
                                filter={ filterFactory() }
                            />
                            </Tab.Pane>
                            <Tab.Pane eventKey="withdrawfunds">
                                <BootstrapTable 
                                    keyField='id' 
                                    data={withdrawals} 
                                    columns= {fundsCols} 
                                    bootstrap4={true} 
                                    striped
                                    hover
                                    condensed 
                                    cellEdit={ cellEditFactory({
                                        mode: 'dbclick',
                                        blurToSave: true,
                                        afterSaveCell: saveWithdrawals
                                    }) }
                                    filter={ filterFactory() }
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="transactionnotification">
                                <BootstrapTable 
                                    keyField='id' 
                                    data={notifications} 
                                    columns= {noteCols} 
                                    bootstrap4={true} 
                                    striped
                                    hover
                                    condensed 
                                    cellEdit={ cellEditFactory({
                                        mode: 'dbclick',
                                        blurToSave: true,
                                        afterSaveCell: saveNotifications
                                    }) }
                                    filter={ filterFactory() }
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    
                </Row>
            </Tab.Container>
        </div>        
    </ProfileLayout>
    );
}
