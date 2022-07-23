import React, { useState } from 'react'

const Modal = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [tables, setTables] = useState([]);

    const [userValue, setUserValue] = useState({
        number: '',
        title: '',
        description: ''
    })

    const { number, title, description } = userValue

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleInputChange = (e) => {
        setUserValue({ ...userValue, [e.target.name]: e.target.value })
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleOverlay = () => {
        setOpenDialog(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTables([...tables, userValue]);
        // let data = tables;
        // data.push(userValue);
        // setTables([...data])

        setUserValue(userValue)
        if (e.key === "Enter") {
            setTables([...tables, userValue]);
        }
    }

    return (
        <div>
            <button onClick={handleOpenDialog}>Open Dialog</button>
            <div className={openDialog ? 'overlay active-dialog' : 'overlay'} onClick={handleOverlay}></div>
            <div className={openDialog ? 'dialog active-dialog' : 'dialog'}>
                <div className="dialog-header">
                    <h3>Modal Header</h3>
                    <button onClick={handleCloseDialog} className="dialog-close">
                        <span className="material-icons">
                            close
                        </span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="dialog-content">
                        <div className="form-row">
                            <label>Number</label>
                            <input name="number" value={number} type="text" placeholder="Enter Number" className="form-field" onChange={handleInputChange} />
                        </div>
                        <div className="form-row">
                            <label>Title</label>
                            <input name="title" value={title} type="text" placeholder="Enter Title" className="form-field" onChange={handleInputChange} />
                        </div>
                        <div className="form-row">
                            <label>Description</label>
                            <input name="description" value={description} type="text" placeholder="Enter Description" className="form-field" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="dialog-footer">
                        <button onClick={handleCloseDialog} className="btn btn-cancel">
                            Cancel
                        </button>
                        <button className="btn btn-submit">
                            Submit
                        </button>
                    </div>
                </form>

            </div>

            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tables.map((tableValue, index) => (
                            <tr key={index}>
                                <td>{tableValue.number}</td>
                                <td>{tableValue.title}</td>
                                <td>{tableValue.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Modal