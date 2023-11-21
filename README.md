# Node.js Typeform Integration

This Node.js project demonstrates integration with the Typeform API. It includes functionality to create new forms and retrieve answers from existing forms.

## Features

- Create new forms on Typeform using a simple Node.js function.
- Retrieve responses for any given form.

## Getting Started

### Prerequisites

- Node.js installed on your system.
- A Typeform account with access to an API Key.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/adanzweig/nodejs-typeform.git
   ```
2. Navigate to the project directory:
   ```
   cd nodejs-typeform
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Environment Setup

- Rename `.env.example` to `.env`.
- Add your Typeform API Key to the `.env` file:
  ```
  TOKEN=Your_Typeform_API_Key
  ```

## Usage

### Creating a Form

Uncomment the `createForm` function call in `index.js` and run the script to create a new form.

```javascript
// Example usage
const form = await createForm('Your Form Title', [{ title: 'Your Question?', type: 'short_text' }]);
console.log(form);
```

### Retrieving Form Answers

Replace `'r1U3acxk'` with your form ID in the `getAnswers` function call to retrieve answers.

```javascript
const answers = await getAnswers('Your_Form_ID');
console.log(answers.items[0].answers);
```

### Running the Script

Execute the script using Node.js:

```
node index.js
```

## Contributing

Contributions to this project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b new-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin new-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).