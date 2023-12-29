/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();

        onUpdate(editedBill);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={editedBill.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Cost:
                <input type="text" name="cost" value={editedBill.cost} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Description:
                <input type="text" name="description" value={editedBill.description} onChange={handleInputChange} />
            </label>
            <br />
            <button type="submit">Update Bill</button>
        </form>
    );
};

export default EditBill;
