import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { p, colors } from "../../constant";

const Home = () => {
    return (
        <div className="mt-5">
            <Button><Link className='nav-link' to="/dashboard">Go to Dashboard</Link></Button>
            <h1 className="mt-5 text-h" style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#000205'}}>
                Brills is an app made to help you quickly calculate your disposable income.
            </h1>
            <p style={{ fontSize: p.fontsize, color: p.gray}}>
                You tell it how much money you earn each month, along with how much you spend—and on what—and it tells you how much you have left.
            </p>
            <p style={{ fontSize: p.fontsize, color: colors.gray}}>
                It tells you nice and clearly whether you’re <span style={{ color: colors.success }}>safe</span>, <span style={{ color: colors.warning }}>at risk</span>, or spending <span style={{ color: colors.danger }}>too much</span>.
            </p>
        </div>
    );
}

export default Home;
