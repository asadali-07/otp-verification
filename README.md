# Email OTP Verification with Node.js and Nodemailer

## Introduction
This project implements OTP (One-Time Password) verification via email using **Node.js** and **Nodemailer**. It allows users to receive a verification code on their email and validate it within a specific time frame.

## Features
- Generate and send OTP to the user's email.
- Store OTP temporarily for verification.
- Validate OTP within an expiry period.
- Secure implementation with environment variables.

## Technologies Used
- Node.js
- Express.js
- Nodemailer
- dotenv

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/asadali-07/otp-verification.git
   cd otp-verification
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your email credentials:
   ```env
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password //your app password not email
   ```

## Usage
1. Start the server:
   ```sh
   node server.js
   ```
2. Send an OTP to an email:
   ```http
   POST /send-otp
   Content-Type: application/json
   {
     "email": "user@example.com"
   }
   ```
3. Verify the OTP:
   ```http
   POST /verify-otp
   Content-Type: application/json
   {
     "email": "user@example.com",
     "otp": "123456"
   }
   ```

## API Endpoints
### 1. `POST /send-otp`
- **Description:** Sends an OTP to the provided email.
- **Request Body:**
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "message": "OTP sent successfully"
  }
  ```

### 2. `POST /verify-otp`
- **Description:** Verifies the provided OTP.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "otp": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "message": "OTP verified successfully"
  }
  ```

## License
This project is licensed under the MIT License.
