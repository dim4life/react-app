import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Addstudent extends Component
{
    state = {
        name: '',
        course: '',
        email: '',
        phone: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveStudent = async (e) => {
        e.preventDefault();

        const res = axios.post('/api/add-student', this.state);
    }

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
                <form onSubmit={this.savveStudent} >

                   <div className="form-group mb-3">
                       <label>Student Name</label>
                       <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                   </div> 
                   <div className="form-group mb-3">
                       <label>Student Course</label>
                       <input type="text" name="course" onChange={this.handleInput} value={this.state.course} className="form-control" />
                   </div>  
                   <div className="form-group mb-3">
                       <label>Student Email</label>
                       <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                   </div>  
                   <div className="form-group mb-3">
                       <label>Student Phone</label>
                       <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control" />
                   </div>  
                   

                   <div className="form-group mb-3">
                       <button type="submit" className="btn btn-primary" >Save Student</button>
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