import '../styles/style.css';
import { useState } from 'react';

import { Modal } from 'react-bootstrap';

function Team() {

    const members = [
        {
            name: "Nagaraj Banaji",
            img: "Nagaraj Banaji.png",
            role: "Lead Consultant",
            specializations: "manufacturing strategies, maintenance strategies, facility management strategies, project management strategies (civil, electrical, mechanical) for projects",
            certificates: "Business excellence-CII Exim|PGDBA-General Management|Bosch Senior Management|Leadership program",
        },
        {
            name: "Srinivas N",
            img: "Srinivas N.png",
            role: "Principal Consultant Process Management",
            specializations: "process development, process optimisation, methods improvement, machine tool selection, lean manufacturing, cost reduction strategies, productivity improvement",
            certificates: "Six sigma blackbelt|Bosch leadership development (Bosch, IIM-B)|Bosch lean manufacturing|Diploma in statistical analysis|Business excellence-CII Exim",
        },
        {
            name: "Suresh Katti",
            img: "Suresh Katti.jpg",
            role: "Principal Consultant Production Management",
            specializations: "machine tool sales & marketing, business development, P&L of business, entrepreneurship, CNC program development & proving, customer relationship management, costing and budgeting",
            certificates: "MBA (Marketing)|HMT professional certifications|QMS",
        },
        {
            name: "Mohan K V",
            img: "Mohan K V (2).jpg",
            role: "Principal Consultant Automation",
            specializations: "industrial Automation (design and interface), maintenance strategies, manufacturing, cost reduction strategies, TPM, obsolescence management, continuous improvement, IoT applications, P&L of value streams",
            certificates: "Bosch leadership development (Bosch, IIM-B)|Bosch lean manufacturing|Fellow member|Institution of Engineers (FIE)|PGDBA-OpManagement|Senior Member|ISA",
        },
        {
            name: "Venu B V",
            img: "Venu B V.jpg",
            role: "Principal Consultant Quality Management",
            specializations: "statistical analysis, FMEA, problem solving through Q-Tools, 14Q basics trainining, business excellence assessing, shainin project expert",
            certificates: "Business excellence -CII|Quality System Auditor TS16949|Quality Certification for Automobile Industries|Qualified Shainin coach| Human error prevention|FMEA co-ordinator",
        },
        {
            name: "P C Kemkar",
            img: "P C Kemkar.jpg",
            role: "Principal Consultant EHS Management",
            specializations: "safety and environment expert, ISO 14001, ISO 45001, management of pollution control equipments & facilities, legal compliance, fire safety, workplace safety",
            certificates: "M.E(Enviromental Eng.)|Diploma in Indl. safety|ISO 14001 auditor|ISO 45001 auditor|Fire safety assessment and recommendations|Bosch professional certifications",
        },
    ]
    const [show, setShow] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (member) => {
        setSelectedMember(member);
        console.log(member.specializations.split(","))
        setShow(true);
    };

    return (
        <div>
            <section id="team" className="team grey-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Team</h2>
                        <h5>
                            Meet Sumadhwa's manufacturing mavens
                        </h5>
                    </div>

                    <div className="row justify-content-center">
                        {
                            members.map(member => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex"
                                        onClick={() => handleShow(member)}>
                                        <div className="member">
                                            <div className="pic">
                                                <img
                                                    src={require("../images/team/" + member.img)}
                                                    className="img-fluid"
                                                    alt={member.name}
                                                />
                                                <div className='view-details'>VIEW DETAILS</div>
                                            </div>
                                            <div className="member-info">
                                                <h4>{member.name}</h4>
                                                <span>{member.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <Modal show={show} onHide={() => handleClose()}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                selectedMember ? (
                                    <div className='row modal-member-info'>

                                        <div className='col-lg-3 col-md-5 col-sm-12 align-items-start center modal-col-1'>
                                            <div className='modal-member-img'>

                                                <img
                                                    src={require("../images/team/" + selectedMember.img)}
                                                    className='img-fluid'
                                                />

                                            </div>
                                            <div className='modal-member-info my-3'>
                                                <h5 >{selectedMember.name}</h5>
                                            </div>
                                            {/* <div className="social">
                                                <a href="" className='mx-1'><i className="bi bi-envelope"></i></a>
                                                <a href=""><i className="bi bi-linkedin mx-1"></i></a>
                                            </div> */}
                                        </div>
                                        <div className='col-lg-9 col-md-7 col-sm-12 modal-member-description my-4'>
                                            <div>
                                                {/* <h5>Specializations</h5> */}
                                                <p>{selectedMember.name} specializes in {selectedMember.specializations}.</p>
                                            </div>
                                            <div>
                                                <h5>Certificates</h5>
                                                <ul>

                                                    {
                                                        selectedMember.certificates.split("|").map(certificate => {
                                                            return (
                                                                <li>{certificate}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                ) : <></>
                            }

                            {selectedMember ? selectedMember.details : ''}
                        </Modal.Body>
                    </Modal>
                </div>
            </section>

        </div>
    );
}

export default Team;
