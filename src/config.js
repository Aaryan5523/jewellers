// Basic configuration for the app
// Change 'localhost' to your computer's IP address (e.g., 192.168.1.5) to test on mobile

const CONFIG = {
    // Check if we are in production or development
    // For local mobile testing, replace 'localhost' with your IPv4 address
    API_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000/api'
        : `http://${window.location.hostname}:5000/api`,

    // Base URL for images
    IMAGE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : `http://${window.location.hostname}:5000`
};

export default CONFIG;
