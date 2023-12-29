import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { h1, p, colors } from "../../constant";
import BillList from "../Bill/BillList";

const Dashboard = () => {

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 style={{ fontSize: h1.fontsize, fontWeight: h1.fontweight, color: colors.gray }}className="text-bold">Dashboard</h1>
                <Button className="align-self-center">
                    <Link 
                    className='nav-link' 
                    to='/addBill'
                    >Add Bill</Link></Button>    
            </div> 
            <p style={{ fontSize: p.fontsize, color: colors.gray }}>It looks like you still need to add your income. <Link style={{ color: colors.gray }} to="/profile">Edit your account</Link> to complete setup.</p>
            <div className="card" style={{ backgroundColor: colors.bg }}>
                <div className="card-body text-center">
                    <h2 style={{ fontSize: '2rem', color: colors.gray }}>No bills to show</h2>
                    <p style={{ fontSize: p.fontsize, color: colors.gray }}>You&apos;ve got  no bills to pay at the moment. <Link style={{ color: colors.gray }} to="/addbill">Add One</Link> if you need to!</p>
                </div>
                <div>
                    <BillList />
                </div>

            </div>
        </div>
    );
}

export default Dashboard;