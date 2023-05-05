import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        
    }

    return (
        <form className='px-8' onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
                name="firstName"
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className='bg-gray-100'
            ></input>

            <button type="submit">
                {!loading ? "Submit" : "Loading"}
            </button>
        </form>
    )
}


export default Form;