import React from "react";

const Table = (props) => {
    return (
        <div className="col-md-7">
            <div className="card shadow border-0">
                <div className="card-body">
                    <div className="table-responsive-sm">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>

                            <tbody>

                            {props.data.length > 0 && props.data != null && props.data.map((value, key) => (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.mobile}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-info m-1"
                                                onClick={() => props.onUpdateHaldler(value)}>Edit
                                        </button>
                                        <button type="button" className="btn btn-outline-danger"
                                                onClick={() => props.onRemove(value)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Table;