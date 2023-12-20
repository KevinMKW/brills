import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1>Dashboard</h1>
                <Button><Link className='nav-link' to="/addbill">Add Bill</Link></Button>    
            </div> 

        </div>
    );
}

export default Dashboard;
