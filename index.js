// Importing necessary modules
require('dotenv').config(); // Loads environment variables from a .env file into process.env
const axios = require('axios'); // Axios for making HTTP requests

// Function to create a new form
async function createForm(title, fields) {
    try {
        const url = 'https://api.typeform.com/forms'; // API endpoint for creating forms
        const data = {
            title, // Form title
            fields  // Fields of the form
        };
        // Making a POST request to create the form
        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}` // Using Bearer token for authorization
            }
        });
        return response.data; // Returning the response data
    } catch (error) {
        console.error('error', error.response.data); // Error handling
    }
}

// Function to get answers from a specific form
async function getAnswers(formId) {
    try {
        // Making a GET request to retrieve responses for a specific form
        const response = await axios.get(`https://api.typeform.com/forms/${formId}/responses`, {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}` // Using Bearer token for authorization
            }
        })
        return response.data; // Returning the response data
    } catch (error) {
        console.error('error', error); // Error handling
    }
}

// Self-invoking async function to execute the code
(async () => {
    // Example usage of createForm function - currently commented out
    const form = await createForm('Testing form', [{ title: 'What is your name?', type: 'short_text' }, { title: 'Any comments?', type: 'long_text' }]);
    console.log(form);

    // Getting answers for a specific form and logging them
    // const answers = await getAnswers(form.id); // Replace 'r1U3acxk' with the actual form ID
    // console.log(answers.items[0].answers); // Logging the first item's answers
})()
