import React,{useState} from 'react';

function ForgotACMD(){
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
        <div className='ForgotACMD'>
            <div className="modal fade" id="ForgotACMD" tabIndex="-1" role="dialog" aria-labelledby="ForgotACMDLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ForgotACMDLabel">Forgot Account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="EmailIPFG">Email address</label>
                                <input  autoComplete='off' type="email" className="form-control" id="EmailIPFG" aria-describedby="emailHelp" placeholder="Enter email" onChange={e=>{setEmail(e.target.value);checkEmail()}}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                <p id="emailWrong" className="form-text" style={{color:'#fc1100',display:visible}}>Email not type 'Your Name'@example.com</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lpasswordIPFG">Last Password</label>
                                <input  autoComplete='off' type="password" className="form-control" id="lpasswordIPFG" placeholder="Last Password you remember"/>
                            </div>
                            <div className="form-check">
                                <input  autoComplete='off' type="checkbox" className="form-check-input"  id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success" disabled={disbtn}>Get Password</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotACMD;