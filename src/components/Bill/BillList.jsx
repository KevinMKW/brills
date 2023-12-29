import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BillItem from "../Bill/BillItem";

const BillList = () => {
    const location = useLocation();
    const addNewBill = location.state && location.state.newBillData;
    const [bills, setBills] = useState([])

    useEffect(() => {
        if (addNewBill) {
            setBills((prevBills) => [...prevBills, addNewBill]);
        }
    }, [addNewBill]);

    const handleUpdate = (updatedBill) => {
        setBills((prevBills) => {
            prevBills.map((bill) => {(
                bill.id === updatedBill.id ? updatedBill : bill)
            });
        });
    };

    return (
        <table className="table table-sm table-borderless">
            <thead>
                <tr className="border-2 border-top-0 border-end-0 border-start-0">
                    <th scope="col" className="border-2 border-top-0 border-bottom-0 border-start-0">Name</th>
                    <th>↓Cost</th>
                    <th>Description</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {bills.map((bill) => (
                    <BillItem key={bill.color} bill={bill} onUpdate={handleUpdate} />
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th className="tar">Total</th>
                    <th className="tar tnum">£244.00</th>
                    <td colSpan="2"></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default BillList;
