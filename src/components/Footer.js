// Footer.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Link, TextField, Button, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import './Style/Footer.css'; // Import the CSS file

const quotes = [
    "The only bad workout is the one that didn't happen.",
    "Sweat is just fat crying.",
    "Success starts with self-discipline.",
    "Push yourself, because no one else is going to do it for you.",
    "Don't limit your challenges. Challenge your limits."
];

const Footer = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [currentQuote, setCurrentQuote] = useState('');
    const [textFieldFocused, setTextFieldFocused] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }, []);

    const handleSubscription = (e) => {
        e.preventDefault();
        // Add subscription logic here (e.g., API call)
        setSubmitted(true);
    };

    return (
        <footer style={{ backgroundColor: '#FFF5E0', padding: '10px 0', marginTop:'50px' }}>
            <Container maxWidth="lg" className="footer-container">
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} className="footer-grid-item">
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We provide a wide range of exercises to help you stay fit and healthy.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="footer-grid-item">
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Typography variant="body2">
                            <Link href="#" id="footer-link">Home</Link><br />
                            <Link href="#exercises" id="footer-link">Exercises</Link><br />
                            <Link href='#' id="footer-link">Contact</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="footer-grid-item">
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            Email: fitjourney@gmail.com<br />
                            Phone: +91 4846549846
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="footer-grid-item">
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <Link href="#" id="footer-link" style={{ marginRight: '8px' }}>
                                <Facebook />
                            </Link>
                            <Link href="#" id="footer-link" style={{ marginRight: '8px' }}>
                                <Twitter />
                            </Link>
                            <Link href="#" id="footer-link">
                                <Instagram />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" className="footer-subscription">
                    <Grid item xs={12} sm={8} md={6}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Subscribe to our Newsletter
                        </Typography>
                        <form onSubmit={handleSubscription} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <TextField
                                variant="outlined"
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setTextFieldFocused(true)}
                                onBlur={() => setTextFieldFocused(false)}
                                className={textFieldFocused ? 'text-field-white' : ''}
                                style={{ marginBottom: '10px', width: '100%' }}
                            />
                            <Button type="submit" variant="contained" color="secondary">
                                Subscribe
                            </Button>
                        </form>
                        {submitted && <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>Thank you for subscribing!</Typography>}
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" className="quote" style={{ marginTop: '10px' }}>
                    {currentQuote}
                </Typography>
                <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
                    © 2024 Exercise Website. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
