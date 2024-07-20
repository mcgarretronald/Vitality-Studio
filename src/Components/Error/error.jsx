import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export default function ErrorPage() {
    return (
        <div className="error-page">
            <div className="error-container">
                <h1 className="error-code">404</h1>
                <p className="error-message">Oops! The page you are looking for does not exist.</p>
                <div className="button-container">
                    <Link to="/" className="error-button">
                        Go Home
                    </Link>
                    <button className="error-button" onClick={() => window.history.back()}>
                        Go Back
                    </button>
                </div>
                <div className="error-animation">
                    <div className="ball"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        </div>
    );
}
