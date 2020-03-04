import React from 'react';

function ForgotACMD(){
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
                            <div class="form-group">
                                <label for="EmailIP">Email address</label>
                                <input type="email" class="form-control" id="EmailIP" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="lpasswordIP">Last Password</label>
                                <input type="password" class="form-control" id="lpasswordIP" placeholder="Last Password you remember"/>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success">Get Password</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotACMD;