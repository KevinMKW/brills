import { useState } from 'react';
import { Button } from "react-bootstrap";
import { supabase } from '../../lib/helper/supabaseClient';
import { useNavigate } from 'react-router-dom';
// import { Auth } from '@supabase/auth-ui-react'

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOtp({
                email: email,
                options: {
                    shouldCreateUser: true,
                    emailRedirectTo: () => navigate('/dashboard')
                }
            });
    
            if (error) {
                console.error('Error sending magic link:', error.message);
            } else {
                console.log('Magic link sent successfully');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <h1>Log In</h1>

            <p>Log in or create a new account by entering your email address. A link will be sent to your email to complete login or signup.</p>

            <form onSubmit={handleLogin}>
                <label htmlFor="email" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Email address</span>
                    <input type="email" name="email" id='email' value={email} className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <Button type="submit" className="my-4" style={{width: '100%'}} >Log in or create account</Button>
                <span>or</span>
                <Button type="submit" className="my-4" style={{width: '100%'}} >Sign in with Apple</Button>
            </form>
        </div>
    );
}

export default SignUp;
