
# Express MongoDB Tours API

This is a simple API built using Express and MongoDB to manage tours.

## Installation

To install and run the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your MongoDB connection string with password.
4. Run the server using `npm start`.

## Usage

Once the server is running, you can use Postman to interact with the API. Here are the available routes:

- GET `/tours`: Get all tours
- GET `/tours/:id`: Get a specific tour by ID
- POST `/tours`: Create a new tour
- PUT `/tours/:id`: Update a tour by ID
- DELETE `/tours/:id`: Delete a tour by ID

For example, to create a new tour, send a POST request to `http://localhost:3000/tours` with the following JSON body:

```
{
    "name": "New Tour",
    "rating": 4.6,
    "price": 100
}
```

## Credits

This project was built by [dev-ajithkumar](https://github.com/dev-ajithkumar).
