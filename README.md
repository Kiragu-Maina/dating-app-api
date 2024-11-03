
# Dating App API with NestJS, Prisma, and Docker

This repository contains the codebase for a backend API of a dating app, built using **NestJS**, **Prisma**, and **Docker**. The API supports full CRUD operations, database integration, data seeding, and Swagger documentation for easy testing and exploration.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **NestJS Framework**: Provides a scalable, modular server-side application architecture.
- **Prisma ORM**: Manages PostgreSQL database models, migrations, and data seeding.
- **Docker**: Containerizes the database for easy setup and deployment.
- **Swagger**: Generates interactive API documentation.
- **CRUD Operations**: Includes basic CRUD functionalities with input validation.

## Prerequisites
- [Node.js and npm](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Kiragu-Maina/dating-app-api.git
   cd dating-app-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Update the `.env` file with your database details. Here’s an example configuration:
     ```env
     DATABASE_URL="postgresql://user:password@localhost:5444/dating_db"
     ```

4. **Run Docker Compose to Start PostgreSQL:**
   ```bash
   docker-compose up -d
   ```

5. **Apply Database Migrations:**
   ```bash
   npx prisma migrate dev
   ```

6. **Seed the Database (Optional):**
   ```bash
   npx prisma db seed
   ```

## Usage

1. **Start the Development Server:**
   ```bash
   npm run start:dev
   ```

2. **Access API Documentation:**
   - Swagger documentation is available at [http://localhost:3000/api](http://localhost:3000/api).

3. **Testing Endpoints:**
   - Use Swagger or tools like Postman to interact with the API.

## API Documentation

The API is documented using Swagger. After starting the server, you can access the documentation to explore available endpoints and test requests.

- **Swagger URL**: [http://localhost:3000/api](http://localhost:3000/api)

## Project Structure

```
dating-app-api/
├── src/
│   ├── prisma/            # Prisma configuration and schema
│   ├── dating-app/        # Core app logic (module, controller, service)
│   ├── main.ts            # App entry point
├── docker-compose.yml     # Docker configuration for PostgreSQL
├── .env                   # Environment configuration
└── README.md
```

## Contributing

1. **Fork the repository**
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Create a Pull Request**

## License

This project is licensed under the MIT License.
```

Feel free to update the GitHub link to your actual repository URL. This `README.md` provides clear steps for getting started, usage instructions, project structure, and contribution guidelines, ideal for a GitHub repository.