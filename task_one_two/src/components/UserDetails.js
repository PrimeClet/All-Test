import React from 'react';
import useFetchUser from '../hooks/useFetchUser';

const UserDetails = ({ userId }) => {
    const { data, loading, error, refresh } = useFetchUser(userId);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>User Details</h1>
            {data ? (
                <div>
                    <p><strong>Name:</strong> {data.firstName}</p>
                    <p><strong>Email:</strong> {data.lastName}</p>
                    <button onClick={refresh}>Refresh</button>
                </div>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default UserDetails;