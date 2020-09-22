import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from "../components/Form";
import Table from "../components/Table";

const Index = () => {
    const [formData, setFormData] = useState('');
    const [users, setUsers] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);

    const onChangeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let action = e.target.id;

        if (action === 'create') {
            setUsers([...users, formData]);

            axios.post('http://localhost:3001/users', formData)
                .then(res => {
                    if (res.status === 201) {
                        setFormData({});
                        console.log('ok');
                    } else {
                        setUsers(prevstatre => prevstatre.filter(item => item.mobile !== formData.mobile && item.email !== formData.email));
                        alert('Something Wrong!Please Try Again')
                    }
                })
                .catch(err => {
                    setUsers(prevstatre => prevstatre.filter(item => item.mobile !== formData.mobile && item.email !== formData.email));
                    //alert(err.response.data.error);
                })

        } else if (action === 'update') {

            axios.put(`http://localhost:3001/users/${formData.id}`, formData)
                .then(res => {
                    console.log(res)
                    if (res) {
                        for (const [i, user] of users.entries()) {
                            if (user.id === res.data.id) {
                                users[i] = res.data;
                                break
                            }
                        }
                        setUsers([...users]);

                        setFormData({});
                    } else {
                        setUsers(prevstatre => prevstatre.filter(item => item.mobile !== formData.mobile && item.email !== formData.email));
                        alert('Something Wrong!Please Try Again')
                    }

                })
                .catch(err => alert(err.response.data.error));

        }
    };

    const onRemoveHandler = (data) => {

        let id = data.id;
        let tmpData = data;
        setUsers(prevstatre => prevstatre.filter(item => item.id !== id));

        axios.delete(`http://localhost:3001/users/${id}`)
            .then(res => {
                if (res.status === 200) {
                    setFormData({});
                } else {
                    setUsers({...users, tmpData});
                    alert('Something Wrong!Please Try Again')
                }
            })
            .catch(err => {
                setUsers({...users, tmpData});
                //alert(err.response.data.error);
            })
    };

    const onUpdateHaldler = (data) => {
        setFormData(data);
    };

    return (
        <>
            <div className="container">
                <div className="row content-center">
                    <Form onChange={onChangeHandler} onSubmit={onSubmitHandler} stateData={formData}/>

                    <Table data={users} onRemove={onRemoveHandler} onUpdateHaldler={onUpdateHaldler}/>
                </div>
            </div>
        </>
    )
};

export default Index;