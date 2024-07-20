import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../firebaseconfig';
import NavigationBar from '../Navigation-bar';
import './admin.css';

const AdminPage = () => {
    const [members, setMembers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) return;

        // Fetch members
        const membersRef = ref(database, 'Membership');
        onValue(membersRef, (snapshot) => {
            const data = snapshot.val();
            const membersList = data ? Object.values(data) : [];
            setMembers(membersList);
        });

        // Fetch bookings
        const bookingsRef = ref(database, 'TrainerBooking');
        onValue(bookingsRef, (snapshot) => {
            const data = snapshot.val();
            const bookingsList = data ? Object.values(data) : [];
            setBookings(bookingsList);
        });

        // Cleanup subscription
        return () => {
            // Firebase does not provide an easy way to remove listeners directly,
            // but you can consider using another state to track listeners if needed.
        };
    }, [isAuthenticated]);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Simple password check
        if (password === 'password') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect password');
        }
    };

    if (!isAuthenticated) {
        return (
            <div>
                <NavigationBar />
                <h1 className="admin-title">Admin Login</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <label>
                        Password:
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="password-input"
                            s
                        />
                    
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <NavigationBar />
            <h1 className="admin-title">Admin Page</h1>

            <div className="section">
                <h2>Members</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index}>
                                <td>{member.firstName}</td>
                                <td>{member.lastName}</td>
                                <td>{member.email}</td>
                                <td>{member.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="section">
                <h2>Trainer Bookings</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Trainer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index}>
                                <td>{booking.firstName}</td>
                                <td>{booking.lastName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>{booking.trainer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
