import React from 'react';
import { withRouter } from 'react-router-dom';

function UserList(props) {
    console.log(props);
    cosnt here = props.location.state.details;
    return (
        <div className="container">
            <h1> UserList Component </h1>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>S.No.</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Roles</th>
                            <th>Student Id</th>
                            <th>Student Name</th>
                            <th>Student Age</th>
                            <th>Address Type</th>
                            <th>Pincode</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>

                    <tbody>
                        {here.map((item, index) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{item.roles}</td>
                                <td>{item.studentResponse.id}</td>
                                <td>{item.studentResponse.name}</td>
                                <td>{item.studentResponse.age}</td>
                                <td>{item.studentResponse.addressResponseList[0].type}</td>
                                <td>{item.studentResponse.addressResponseList[0].pincode}</td>
                                <td>{item.studentResponse.addressResponseList[0].city}</td>
                                <td>{item.studentResponse.addressResponseList[0].state}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default withRouter(UserList);