/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../../../api.json'

const EditBill = () => {  
    const navigate = useNavigate();
    const [bill, setBill] = useState({
        name: "",
        description: "", 
        cost: "", 
        color: "",
    });
    const { id } = useParams()

    useEffect(() => {
        const fetchtData = async () => {
            try {
                const response = await axios.get(`${url}/bill-details/${id}`)

                setBill(response.data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchtData();
    }, []);

    const handleUpdate = e => {
        e.preventDefault();

        const editData = async () => {
            try {
                const response = await axios.put(`${url}/bill-update/${id}/`, bill)

                setBill(response.data);
                navigate('/dashboard')
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        editData();
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`${url}/bill-delete/${id}/`)

            navigate('/dashboard')
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    }

    const handleCancel = () => {
        navigate('/dashboard')
    }
 
    return (
        <div>
            <h1>Edit Bill</h1>

            <form onSubmit={handleUpdate}>
                <label htmlFor="name" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Name</span>
                    <input type="text" name="name" id='name' className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={bill.name} onChange={e => setBill({...bill, name: e.target.value})}/>
                </label>
                
                <label htmlFor="name" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Cost</span>
                    <input type="text" name="cost" id='cost' className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={bill.cost} onChange={e => setBill({...bill, cost: e.target.value})}/>
                </label>
                
                <label htmlFor="description" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Description</span>
                    <textarea name="description" id="description" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={bill.description} onChange={e => setBill({...bill, description: e.target.value})}/>
                </label>

                <label htmlFor="color" className="form-label my-3" style={{ width:'100%' }}>
                    <span>Color</span>
                    <input type="color" name="color" id="color" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={bill.color} onChange={e => setBill({...bill, color: e.target.value})}/>
                </label>
                
                <Button type="submit" className="my-4" style={{width: '100%'}} >Update Bill</Button>
            </form>

            <details className="alert alert-danger">
                <summary color='alert-heading'>
                    <strong>Delete Bill</strong>
                </summary>
                <p>Are you sure you want to delete this bill? This action cannot be undone.</p>
                <div className="d-flex justify-content-between ">
                    <Button className="btn btn-danger" onClick={handleDelete} type='button'>Delete Bill</Button>
                    <Button className="btn btn-secondary" onClick={handleCancel} type='button'>Cancel</Button>
                </div>
            </details>
        </div>
    );
};

export default EditBill;
