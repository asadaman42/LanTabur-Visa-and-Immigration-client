import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UniversalContext } from '../ContexSupplier/ContexSupplier';

const LogIn = () => {

    const { googleLogInProvider, githubLogInProvider} = useContext(UniversalContext)

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const googleLogIn = () => {
        googleLogInProvider(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error)); 
    };

    const gitHubLogIn = () => {
        githubLogInProvider(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => console.error(error));
    };



    return (
        <div className='text-center mx-auto my-5'>
            <ButtonGroup vertical className='my-5'>
                <Link to='/loginemail'> <Button className='mb-3 mt-5'> <HiOutlineMail></HiOutlineMail>  Sign in with e-mail & password  </Button></Link>
                <Button onClick={googleLogIn} className='mb-3'> <FaGoogle></FaGoogle> sign in with Google </Button>
                <Button onClick={gitHubLogIn} className='mb-3'> <FaGithub /> Sign in with gitHub </Button>
                <p> No account yet ? <Link to='/register'> Sign up</Link> </p>
            </ButtonGroup>
        </div>
    );
};

export default LogIn;