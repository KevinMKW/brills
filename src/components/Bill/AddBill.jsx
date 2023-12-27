import { Button } from "react-bootstrap";

const AddBill = () => {
    return (
        <div>
            <h1>New Bill</h1>

            <form>
                <label htmlFor="name" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Name</span>
                    <input type="text" id="name" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus"/>
                </label>

                <label htmlFor="description" className="form-label my-3" style={{ width: '100%' }} >
                    <span>Description</span>
                    <textarea name="description" id="description" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus">
                    </textarea>  
                </label>

                <label htmlFor="cost" className="form-label my-3" style={{ width:'100%' }} >
                    <span>Cost</span>
                    <input step="0.01" required="" type="number" id="cost" name="cost" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" />
                </label>

                <label htmlFor="color" className="form-label my-3" style={{ width:'100%' }}>
                    <span>Color</span>
                    <input type="color" name="color" id="color" className="form-control border-2 border-top-0 border-end-0 border-start-0 rounded-bottom-0 input-bg i-focus" />
                </label>
                
                <Button className="my-4" style={{width: '100%'}} >Add Bill</Button>
            </form>
        </div>
    );
}

export default AddBill;
