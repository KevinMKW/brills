/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import axios from 'axios';

const EditBill = ({ bill, onUpdate }) => {
    const [editedBill, setEditedBill] = useState({ ...bill });

    useEffect(() => {
        setEditedBill(bill);
    }, [bill]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBill((prevBill) => ({
            ...prevBill,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateBill = async () => {
            try {
                const response = await axios.put(`http://127.0.0.1:8000/api/bill-update/${editedBill.id}`, editedBill);

                if (response.status === 200) {
                    console.log('Bill updated successfully:', response.data);
                    onUpdate(response.data);
                } else {
                    console.error('Failed to update bill:', response.data);
                }
            } catch (error) {
                console.error('Error updating bill:', error);
            }
        };

        updateBill();
    }

    return (
        <div>
            <h1>Edit Bill</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Name</span>
                    <input type="text" name="name" id='name' className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={editedBill && editedBill.name ? editedBill.name : ''}
                    onChange={handleInputChange}/>
                </label>
                
                <label htmlFor="name" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Cost</span>
                    <input type="text" name="cost" id='cost' className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={editedBill && editedBill.cost ? editedBill.cost : ''} onChange={handleInputChange} />
                </label>
                
                <label htmlFor="description" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Description</span>
                    <textarea name="description" id="description" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" value={editedBill && editedBill.description? editedBill.description : ''} onChange={handleInputChange} />
                </label>

                <label htmlFor="color" className="form-label my-3" style={{ width:'100%' }}>
                    <span>Color</span>
                    <input type="color" name="color" id="color" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" onChange={handleInputChange} value={editedBill && editedBill.color? editedBill.color : ''}/>
                </label>
                
                <Button type="submit" className="my-4" style={{width: '100%'}} >Update Bill</Button>
            </form>
        </div>
    );
};

export default EditBill;
