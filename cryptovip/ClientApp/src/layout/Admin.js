import React from "react";
import { Link } from "react-router-dom";
import ProfileLayout from "./ProfileLayout";
import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";
import DataTable from "react-data-table-component"

export default function AdminPage() {//{form:{form, loading, error, isValid, onChange, onClick}}
    
    return (
    <ProfileLayout>
        <div className="container my-4">
            <div className="row col-md-6 justify-content-start">
                <h4>Admin Page</h4>
            </div>
            {/* <div className="row"> */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="profiles">User Profiles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="addfunds">Add Funds</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="withdrawfunds">Withdraw Funds</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="profiles">
                                <DataTable></DataTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="addfunds">
                                <DataTable></DataTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="withdrawfunds">
                                <DataTable></DataTable>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

                
            {/* </div>            */}
        </div>        
    </ProfileLayout>
    );
}
