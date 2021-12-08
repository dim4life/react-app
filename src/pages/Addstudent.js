import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

class Addstudent extends Component
{

    render() {
        return (
            <div className="container">
            <div className="row">   
            <div className="col-md-12">
            <div className="card">
            <div className="card-header">
            <h4>Add Students
                <Link to={'/'} className="btn btn-primary btn-sm foat-end">BACK</Link>
            </h4>
            </div>
            <div className="card-body">
                <form>
                   <div className="fform-group mb-3">
                       <label>Student Name</label>
                       <input type="text" name="" value="" className="form-control" />
                         </div> 
                </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Addstudent ;