/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BillItem = ({ bill }) => {

    return (
        <tr key={bill.color}>
            <td>
                <div className=" rounded-circle" style={{ display: 'inline-block', width: '1em', height: '15px', padding: '5px', background: (bill.color) }}></div>
                 <span> {bill.name}</span>
            </td>
            <td>{bill.cost}</td>
            <td>{bill.description}</td>
            <td>
                <Link to={`/editbill/${bill.id}`} >
                    Edit
                </Link>
            </td>
        </tr>
    );
}

export default BillItem;



