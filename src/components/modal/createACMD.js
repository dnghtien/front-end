import React from 'react';

function createACMD(){
    return(
        <div className='createACMD'>
            <div className="modal fade" id="CreateACMD" tabIndex="-1" role="dialog" aria-labelledby="createACMDLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="createACMDLabel">Create Account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="userIP">User Name</label>
                            <input type="txt" className="form-control" id="userIP" placeholder="User Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="EmailIP">Email address</label>
                            <input type="email" className="form-control" id="EmailIP" placeholder="name@.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordIP">Password</label>
                            <input type="email" className="form-control" id="passwordIP" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="repasswordIP">Repassword</label>
                            <input type="email" className="form-control" id="repasswordIP" placeholder="Repassword"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FormControlSelect1"> select</label>
                            <select className="form-control" id="FormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FormControlSelect2"> multiple select</label>
                            <select multiple className="form-control" id="FormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FormControlTextarea1"> textarea</label>
                            <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success">Create</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default createACMD;