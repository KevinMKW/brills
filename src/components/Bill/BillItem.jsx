const BillItem = ({ bill }) => {
    return (
        <div className="d-flex">
            <p>Name: {bill.name}</p>
            <p>Description: {bill.description}</p>
            <p>Cost: {bill.cost}</p>
            <p>Color: {bill.color}</p>
        </div>
    );
}

export default BillItem;
