import React from "react";

const Auth = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comment: ''
    })

    const fieldChangeHandler = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <form className="feedback-form">
            <label htmlFor="firstName">Имя: </label>
        </form>
    );
};

export default Auth;