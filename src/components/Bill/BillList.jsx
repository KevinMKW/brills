import axios from 'axios'
import { useState, useEffect } from "react";
import BillItem from "../Bill/BillItem";

const BillList = () => {
    const [bills, setBills] = useState([])

    useEffect(() => {
        const fetchtData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/bills/')

                setBills(response.data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchtData();
    }, []);

    const totalCost = bills.reduce((total, bill) => total + parseFloat(bill.cost), 0);


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
                    <BillItem key={bill.id} bill={bill} />
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th className="tar">Total</th>
                    <th className="tar tnum">
                        {totalCost.toFixed(2)}
                    </th>
                    <td colSpan="2"></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default BillList;
