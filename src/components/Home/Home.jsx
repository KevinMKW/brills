import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
    const colors = {
        success: 'green',
        warning: 'yellow',
        danger: 'red'
    }

    return (
        <div className="mt-5">
            <Button><Link className='nav-link' to="/dashboard">Go to Dashboard</Link></Button>
            <h1>
                Brills is an app made to help you quickly calculate your disposable income.
            </h1>
            <p>
                You tell it how much money you earn each month, along with how much you spend—and on what—and it tells you how much you have left.
            </p>
            <p>
                It tells you nice and clearly whether you’re <span style={{ color: colors.success }}>safe</span>, <span style={{ color: 'yellow' }}>at risk</span>, or spending <span style={{ color: 'red' }}>too much</span>.
            </p>
        </div>
    );
}

export default Home;
