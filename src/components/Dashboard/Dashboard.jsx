import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { p } from "../../constant";

const Dashboard = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className=" text-bold">Dashboard</h1>
                <Button className="align-self-center"><Link className='nav-link' to="/addbill">Add Bill</Link></Button>    
            </div> 
            <p style={{ fontSize: p.fontsize, color: p.color }}>It looks like you still need to add your income. <Link style={{ color: p.color }} to="/profile">Edit your account</Link> to complete setup.</p>
            <div className="card">
                <div className="card-body text-center">
                    <h2>No bills to show</h2>
                    <p style={{ fontSize: p.fontsize, color: p.color }}>You&apos;ve got  no bills to pay at the moment. <Link style={{ color: p.color }} to="/addbill">Add One</Link> if you need to!</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
