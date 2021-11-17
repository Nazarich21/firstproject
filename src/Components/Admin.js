import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import mydata from "../data.json";
import {Modal} from "@mui/material";
import ModalHeader from "react-bootstrap/ModalHeader";
import {ModalBody, ModalFooter} from "react-bootstrap";

export default function Admin() {

    const [data, setData] = useState(mydata);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pairSelect, setPairSelect] = useState({
        id: '',
        FullName: '',
        Address: '',
        PhoneNumber: '',
        Email: ''
    });
    const selectPair=(element, key)=>{
        setPairSelect(element);
        (key==='Edit')?setModalEdit(true):setModalDelete(true)
    }
    const handleChange=e=>{
        const {name, value}=e.target;
        setPairSelect((prevState)=>({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="Mytable">
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>FullName</td>
                    <td>Adress</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {data.map(element =>(
                    <tr>
                        <td>{element.id}</td>
                        <td>{element.fullName}</td>
                        <td>{element.address}</td>
                        <td>{element.phoneNumber}</td>
                        <td>{element.email}</td>
                        <td><button className=" btn btn-primary me-2" onClick={()=>selectPair(element, 'Edit')}>Edit</button>
                            <button className=" btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    )
                )}
                </tbody>
            </table>

            <Modal isOpen={modalDelete}>
                <div>
                <ModalHeader>
                    <div>
                        <h3>Edit</h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            name="id"
                            value={pairSelect && pairSelect.id}
                        />
                        <br />

                        <label>FullName</label>
                        <input
                            className="form-control"
                            type="text"
                            name="FullName"
                            value={pairSelect && pairSelect.fullName}
                            onChange={handleChange}
                        />
                        <br />

                        <label>Address</label>
                        <input
                            className="form-control"
                            type="text"
                            name="Address"
                            value={pairSelect && pairSelect.address}
                            onChange={handleChange}
                        />
                        <br />
                        <label>PhoneNumber</label>
                        <input
                            className="form-control"
                            type="text"
                            name="PhoneNumber"
                            value={pairSelect && pairSelect.phoneNumber}
                            onChange={handleChange}
                        />
                        <br />
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="Email"
                            value={pairSelect && pairSelect.email}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div>
                        <h1>csdcsd</h1>
                    </div>
                </ModalFooter>
                </div>
            </Modal>

        </div>
    );
}

