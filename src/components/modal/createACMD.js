import React,{useState} from 'react';
import Axios from 'axios';

function CreateACMD(){

    const [email,setEmail]=useState('');
    const [visible,setVisible]=useState('none');
    const [disbtn,setDisbtn]=useState(true);
    const [pass,setPass]=useState('');
    const [repass,setRepass]=useState('');
    const [visiblepss,setVisiblepss]=useState('none');
    const [user,setUser]=useState('');
    const [select,setSelect]=useState('');
    const [mltselect,setMltelect]=useState('');
    const [area,setArea]=useState('');

    const checkEmail = (e)=>{
        let regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(email)){
            setVisible('none');
        }else{
            setVisible();
        }
    }

    const checkPass = ()=>{
        if(pass.toString===repass.toString && pass.length-1===repass.length && pass.length>=8 && repass.length>=8){
            setVisiblepss('none');
            if(visible==='none'){
                setDisbtn(false);
            }else{
                setDisbtn(true);
            }
        }else{
            setVisiblepss();
        }
    }

    const CreateAC = () =>{
        Axios.post('https://calm-beyond-75097.herokuapp.com/add-account',{
            user,
            pass,
            email,
            select,
            mltselect,
            area
        }).then(console.log('OK'))
    };

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
                            <label htmlFor="userIPCR">User Name</label>
                            <input  autoComplete='off' type="text" className="form-control" id="userIPCR" placeholder="User Name" onChange={event=>setUser(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="EmailIPCR">Email address</label>
                            <input  autoComplete='off' type="email" className="form-control" id="EmailIPCR" placeholder="name@.com" onChange={e=>{setEmail(e.target.value);checkEmail()}} />
                            <p id="emailWrong" className="form-text" style={{color:'#fc1100',display:visible}}>Email not type 'Your Name'@example.com</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordIPCR">Password</label>
                            <input  autoComplete='off' type="email" className="form-control" id="passwordIPCR" placeholder="Password >= 8  character" onChange={e=>{setPass(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="repasswordIPCR">Repassword</label>
                            <input  autoComplete='off' type="email" className="form-control" id="repasswordIPCR" placeholder="Repassword" onChange={e=>{setRepass(e.target.value);checkPass()}}/>
                            <p id="repassWrong" className="form-text" style={{color:'#fc1100',display:visiblepss}}>Password and repassword not match</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FormControlSelect1"> select</label>
                            <select className="form-control" id="FormControlSelect1" onChange={event=>setSelect(event.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FormControlSelect2"> multiple select</label>
                            <select multiple className="form-control" id="FormControlSelect2" onChange={event=>setMltelect(event.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="FormControlTextarea1"> textarea</label>
                            <textarea className="form-control" id="FormControlTextarea1" rows="3" onChange={event=>setArea(event.target.value)}></textarea>
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-outline-success" disabled={disbtn} onClick={CreateAC}>Create</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateACMD;