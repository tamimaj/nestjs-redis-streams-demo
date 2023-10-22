# Demo: Using Redis Streams as a Message Broker for NestJS in a Microservice Architecture

In this demo, we will explore how to leverage the [@tamimaj/nestjs-redis-streams](https://www.npmjs.com/package/@tamimaj/nestjs-redis-streams) package to use Redis Streams as a message broker within a NestJS-based microservice architecture. To illustrate the capabilities of this library, we will set up a simple scenario involving three components: an API Gateway, a Users Microservice, and a Notification Microservice.

### Components Overview:

- **API Gateway:** This component exposes a REST endpoint that simulates the creation of a new user.
- **Users Microservice:** It listens to a Redis Stream for incoming commands related to user creation. When a new user creation command is received, this microservice emulates the process of creating a user and publishes a response to a designated stream.
- **Notification Microservice:** This service is also interested in user creation responses. It listens to the user-created response stream and, upon receiving a response, simulates the action of sending a welcome email to the user.

# Running the Demo Locally

Follow these steps to run the demo on your local machine:

## Step 1: Clone the Repository

Clone the demo repository from GitHub using the following command:

```bash
git clone https://github.com/tamimaj/nestjs-redis-streams-demo.git
```

## Step 2: Install Dependencies

Navigate to each of the services (API Gateway, Users Microservice, and Notification Microservice) and install the required dependencies using the following commands:

### API Gateway

```bash
cd api-gateway
npm install
cd ..
```

### Users Microservice

```bash
cd users
npm install
cd ..
```

### Notification Microservice

```bash
cd notification
npm install
cd ..
```
