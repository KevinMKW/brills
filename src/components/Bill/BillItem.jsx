/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import EditBill from "./EditBill";

const BillItem = ({ bill, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleUpdate = (updateBill) => {
        onUpdate(updateBill);
        setIsEditing(false);
    };

    return (
        <tr key={bill.color}>
            <td>
                <span className=" rounded-circle" style={{ width: '1em', height: '15px', padding: '5px', background: (bill.color) }}></span> {bill.name}
            </td>
            <td>{bill.cost}</td>
            <td>{bill.description}</td>
            <td>
                {isEditing ? (
                    <EditBill bill={bill} onUpdate={handleUpdate} />
                ) : (
                    <Link to='/editbill' onClick={handleEditClick}>
                        Edit
                    </Link>
                )}
            </td>
        </tr>
    );
}

export default BillItem;
