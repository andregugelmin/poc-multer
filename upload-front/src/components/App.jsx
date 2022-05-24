import axios from 'axios';
import { useState } from 'react';

function App() {
    const [file, setFile] = useState({});

    function submitFile(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        const promisse = axios.post('http://localhost:5000/upload', formData);
        promisse.then((response) => {
            console.log(response);
        });
        promisse.catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <form onSubmit={submitFile}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                    }}
                />
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
