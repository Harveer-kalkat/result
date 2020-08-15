import React, { Component } from 'react'

export class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            errors:{
                name:'',
                lastname:'',
                class:'',
                year:'',
                marks:''
            }
        }
    }
    handleChange=(event)=>
    {
        event.preventDefault();
        const {name,value}=event.target;
        let errors=this.state.errors;
        switch(name)
        {
            case 'name': 
            errors.name=value.length<20 ? 'Name must be 20 chanacter long':'';
            break;
            case 'lastname': 
            errors.name=value.length<20 ? 'LastName must be 20 chanacter long':'';
            break;
        }
        this.setState({errors,[name]:value});
    }
    render() {
        return (
            <div className="bdr">
                <h2 id="h2">Students Submission Form</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" onChange={this.handleChange}/>
                        {this.state.errors.name.length>0 && 
                        <span className="alert text-danger">{this.state.errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastname" className="form-control" onChange={this.handleChange}/>
                        {this.state.errors.lastname.length>0 && 
                        <span className="alert text-danger">{this.state.errors.lastname}</span>}
                    </div>
                    <div className="form-group">
                        <label>Class</label>
                        <input type="text" name="class" className="form-control" onChange={this.handleChange}/>
                        {this.state.errors.class.length>0 && 
                        <span className="alert text-danger">{this.state.errors.class}</span>}
                    </div>
                    <div className="form-group">
                        <label>Year Of Passing</label>
                        <input type="number" name="year" min="0" max="2017" className="form-control" onChange={this.handleChange}/>
                        {this.state.errors.year.length>0 && 
                        <span className="alert text-danger">{this.state.errors.year}</span>}
                    </div>
                    <div className="form-group">
                        <label>Percentage of marks</label>
                        <input type="number" name="marks" className="form-control" onChange={this.handleChange}/>
                        {this.state.errors.marks.length>0 && 
                        <span className="alert text-danger">{this.state.errors.marks}</span>}
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success"/>
                </form>
            </div>
        )
    }
}

export default Form
