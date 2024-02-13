import { Link } from "react-router-dom";
import { supabase } from "../../lib/helper/supabaseClient";
import { p, colors } from "../../constant";

const Home = () => {
    const user = supabase.auth.user();

    return (
        <div className="mt-5">
            {!user ? (
                <Link className="btn btn-primary" to="/dashboard">
                    Go to Dashboard →
                </Link>
            ) : console.log(null)}

            <h1 className="mt-3 text-h" style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#000205'}}>
                Brills is an app made to help you <mark>quickly calculate your disposable income.</mark>
            </h1>
            <p style={{ fontSize: p.fontsize, color: p.gray}}>
                You tell it how much money you earn each month, along with how much you spend—and on what—and it tells you how much you have left.
            </p>
            <p style={{ fontSize: p.fontsize, color: colors.gray}}>
                It tells you nice and clearly whether you’re <span className="balanced safe">safe</span>, <span  className="balanced risk">at risk</span>, or spending <span  className="balanced unsafe">too much</span>.
            </p>

            <p>
                Brills doesn’t connect to any financial institutions, and your data never leaves Brills servers.
            </p>

            <Link  className="btn btn-primary bg-dark border-0" to='/signup'>Log In or Sign Up</Link>
        </div>
    );
}

export default Home;
