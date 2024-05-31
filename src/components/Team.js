import '../styles/style.css';
import TeamMemberCard from './TeamMemberCard';
import { useState, useEffect } from 'react';

import { Modal, Button } from 'react-bootstrap';

function Team() {

    const members = [
        {
            name: "Nagaraj Banaji",
            img: "Nagaraj Banaji.png",
            role: "Lead Consultant",
            specializations: "",
            certificates: "",
        },
        {
            name: "Srinivas N",
            img: "Srinivas N.png",
            role: "Principal Consultant Process Management",
            specializations: "",
            certificates: "",
        },
        {
            name: "Suresh Katti",
            img: "Suresh Katti.jpg",
            role: "Principal Consultant Production Management",
            specializations: "",
            certificates: "",
        },
        {
            name: "Mohan K V",
            img: "Mohan K V.jpg",
            role: "Principal Consultant Automation",
            specializations: "",
            certificates: "",
        },
        {
            name: "Venu B V",
            img: "Venu B V.jpg",
            role: "Principal Consultant Quality Management",
            specializations: "",
            certificates: "",
        },
        {
            name: "P C Kemkar",
            img: "P C Kemkar.jpg",
            role: "Principal Consultant EHS Management",
            specializations: "",
            certificates: "",
        },
    ]
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setSelectedItem(item);
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

                    <div className="row container justify-content-center">
                        {
                            members.map(member => {
                                return (
                                    <div className="col-lg-3 col-md-6 d-flex ">
                                        <div className="member" onClick={() => handleShow(member)}>
                                            <div className="pic">
                                                <img
                                                    src={require("../images/team/" + member.img)}
                                                    className="img-fluid"
                                                    alt={member.name}
                                                />
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

                    <div id='member-details-modal' className='p-5'>

                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>

                            </div>
                            <div className='col-lg-8 col-md-8 col-sm-12'>
                                description

                                <h4>Specializations</h4>
                                <h4>Certifications</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
