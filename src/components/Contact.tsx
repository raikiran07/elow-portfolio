import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
    const [state, handleSubmit] = useForm("yourFormspreeID");

    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }} className='p-4 md:px-16'>
            <h2 className='my-4 text-2xl font-semibold'>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        className='border border-gray-300 rounded-md'
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', height: '150px' }}
                        className='border border-gray-300 rounded-md'
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}
                className='border-none rounded-md'
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;