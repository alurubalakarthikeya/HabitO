# Habita Backend Documentation

## Overview
The Habita backend is built using Spring Boot and serves as the server-side component of the Habit Tracker application. It handles business logic, data management, and provides RESTful APIs for the frontend.

## Project Structure
```
backend
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── habittracker
│   │   │           └── HabitaApplication.java
│   │   └── resources
│   │       └── application.properties
│   └── test
│       ├── java
│       │   └── com
│       │       └── habittracker
│       │           └── HabitaApplicationTests.java
│       └── resources
├── pom.xml
└── README.md
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Habita/backend
   ```

2. **Build the Project**
   Ensure you have Maven installed, then run:
   ```bash
   mvn clean install
   ```

3. **Run the Application**
   You can run the application using:
   ```bash
   mvn spring-boot:run
   ```

## Configuration
The application properties can be configured in `src/main/resources/application.properties`. This file includes settings such as database connection details and other application-specific configurations.

## Testing
Test cases for the application can be found in `src/test/java/com/habittracker/HabitaApplicationTests.java`. You can run the tests using:
```bash
mvn test
```

## Dependencies
The project dependencies are managed in the `pom.xml` file. Make sure to review this file for any additional libraries or frameworks used in the project.

## Usage
Once the application is running, you can access the RESTful APIs provided by the backend. Refer to the frontend documentation for details on how to interact with these APIs.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.