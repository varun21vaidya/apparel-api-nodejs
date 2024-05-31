# Apparel API

This repository contains a REST API for managing apparel inventory and orders for a vendor.
The API is implemented using Node.js in TypeScript.

## Business Knowledge

- A vendor can manage stock quality and prices for different apparel items.
- Each piece of apparel has a unique code and can come in multiple sizes.
- Users can check stock availability and pricing for specific apparel items and sizes.
- Users can place orders for multiple apparel items and sizes.

## Technical Design

- Data is stored in a local JSON file to persist between server restarts.
- TypeScript is used for type safety and better code organization.
- The API endpoints are designed to fulfill the business requirements mentioned above.
- Unit tests are included to ensure the reliability of the API.

## Installation and Setup

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd apparel-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The server should now be running. You can test the API using tools like Postman or curl.

## API Endpoints

- **POST /vendor/update - Update stock and price for one apparel code and size.
- **POST /vendor/update-multiple - Update stock and price for multiple apparel codes and sizes.
- **GET /order/check - Check if an order can be fulfilled.
- **GET /order/lowest-cost - Get the lowest cost for fulfilling an order.

## Unit Tests

To run unit tests, use the following command:

```bash
npm test
```

## Here are Results from Postman:

### vendor/update
![image](https://github.com/varun21vaidya/apparel-api-nodejs/assets/65745841/60b6312c-38d8-4b0f-86cd-ccfdc4271a10)

## vendor/update-multiple
![image](https://github.com/varun21vaidya/apparel-api-nodejs/assets/65745841/cb2aa1c0-e98c-449a-9cba-29b2410721ef)

## Result
![image](https://github.com/varun21vaidya/apparel-api-nodejs/assets/65745841/0464b883-906e-4e54-9479-fe01c99e4423)

## order/check
![image](https://github.com/varun21vaidya/apparel-api-nodejs/assets/65745841/00b69f98-494e-42c7-be39-807ab2e26752)

## order/lowest-cost
![image](https://github.com/varun21vaidya/apparel-api-nodejs/assets/65745841/c1462386-fd08-4ba9-b349-00e55f34f41b)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to customize it further according to your project's specific details and requirements.
