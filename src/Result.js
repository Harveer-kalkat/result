import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Result extends Component {
    state={'Result' :[]}
    componentDidMount()
    {
        let url='Result.json';
        fetch(url)
        .then(res=>res.json())
        .then(result=>
            {
                console.log(result)
                this.setState({Result:result});
            })
        }
        render() {
            return (
                <div>
                             <table className="tb">
                                 <th>Students Result Board</th>
                                <tr id="rw1">
                                   <th>Student Name</th>
                                   <th>Roll Number</th>
                                   <th>Total Marks</th>
                                   <th>Status</th>
                                   </tr>
                                   {this.state.Result.map(Students=>
                                   <tr>
                                   <td>{Students.name}</td>
                                   <td>{Students.rollNumber}</td>
                                   <td>{Students.marks}</td>
                                   <td>{Students.status}</td>
                                   </tr>
            )}
            </table>
            <div className="btn">
            <Link to='./Form'>
                <button type="button" className="btn btn-info">School Admission Form</button>
            </Link>
        </div>
        </div>
            )
            }
        }
export default Result

