import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = (props) => {
    return (
        <div className="col-md-5">
            <div className="card shadow border-0">

                <div className="card-header">
                    {props.stateData.id != null ? 'Edit User Info' : 'Add New User'}
                </div>

                <div className="card-body">

                    <form onSubmit={props.onSubmit} id={props.stateData.id != null ? 'update' : 'create'}>
                        <InputField onChange={props.onChange} value={props.stateData.name} placeholder="Full Name"
                                    name="name"
                                    required={true}/>
                        <InputField onChange={props.onChange} value={props.stateData.email} type='email'
                                    placeholder="Email" name="email"
                                    required={true}/>
                        <InputField onChange={props.onChange} value={props.stateData.mobile} type='tel'
                                    placeholder="Mobile Number" name="mobile"
                                    required={true}/>

                        <Button className="btn btn-primary mt-1" label={props.stateData.id != null ? 'Save Changes' : 'Save'}/>
                    </form>

                </div>
            </div>
        </div>
    )
};

export default Form;