# Notes App

A full-stack Notes App with Flask backend and React frontend.

## Backend (Flask)

### Requirements
- Python 3.7+
- Flask
- Flask-SQLAlchemy
- Flask-CORS

### Installation
1. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

2. Run the application:
   ```
   python app.py
   ```
   The backend will run on http://127.0.0.1:5000/

## Frontend (React)

### Requirements
- Node.js
- npm

### Installation
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on http://localhost:5173/

## API Endpoints
- GET /notes - Get all notes
- POST /notes - Create a new note (JSON: {title, content})
- DELETE /notes/<id> - Delete a note by ID

## Database
The app uses SQLite database 'notes.db' created automatically.