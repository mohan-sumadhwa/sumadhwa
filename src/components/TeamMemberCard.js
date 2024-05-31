import '../styles/style.css';

const TeamMemberCard = ({ member }) => {

    return (
        <div className="col-lg-3 col-md-6 d-flex ">
            <div className="member">
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
}

export default TeamMemberCard;