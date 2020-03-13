import React,{useState} from 'react';

function SigninACMD(){

    const [email,setEmail]=useState('');
    const [visible,setVisible]=useState('none');
    const [disbtn,setDisbtn]=useState(true);

    const checkEmail = (e)=>{
        let regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(email)){
            setVisible('none');
            setDisbtn(false);
        }else{
            setVisible();
            setDisbtn(true);
        }
    }

    return(
        <div className='SigninACMD'>
            <div className="modal fade" id="SigninACMD" tabIndex="-1" role="dialog" aria-labelledby="SigninACMDLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="SigninACMDLabel">Signin</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="EmailIPGSG">Email address</label>
                            <input type="email" className="form-control" id="EmailIPGSG" aria-describedby="emailHelp" placeholder="Enter email" autoComplete='off' onChange={e=>{setEmail(e.target.value);checkEmail()}} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            <p id="emailWrong" className="form-text" style={{color:'#fc1100',display:visible}}>Email not type 'Your Name'@example.com</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordIPGSG">Password</label>
                            <input type="password" className="form-control" id="passwordIPGSG" autoComplete='off' placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="SigninCheck"/>
                            <label className="form-check-label" htmlFor="SigninCheck">Check me out</label>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success" disabled={disbtn}>Sigin</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninACMD;