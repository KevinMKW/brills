import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const AddBill = () => {
    const navigate = useNavigate();
    const [newBill, setNewBill] = useState({
        name: "",
        description: "", 
        cost: "", 
        color: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBill((prevNewBill) => ({
            ...prevNewBill,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/dashboard", { state: { newBillData: newBill }})

        setNewBill({
            name: "",
            description: "",
            cost: "",
            color: "",
          });
    };

    return (
        <div>
            <h1>New Bill</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Name</span>
                    <input type="text" name="name" id="name" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" onChange={handleInputChange} value={newBill.name}/>
                </label>

                <label htmlFor="description" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Description</span>
                    <textarea name="description" id="description" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" onChange={handleInputChange} value={newBill.description}>
                    </textarea>  
                </label>

                <label htmlFor="cost" className="form-label my-3" style={{ width:'100%' }} >
                    <span>Cost</span>
                    <input step="0.01" required="" type="number" id="cost" name="cost" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" onChange={handleInputChange} value={newBill.cost}/>
                </label>

                <label htmlFor="color" className="form-label my-3" style={{ width:'100%' }}>
                    <span>Color</span>
                    <input type="color" name="color" id="color" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" onChange={handleInputChange} value={newBill.color}/>
                </label>
                
                <Button type="submit" className="my-4" style={{width: '100%'}} >Add Bill</Button>
            </form>
        </div>
    );
}

export default AddBill;
