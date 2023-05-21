# Whatsapp-Venom

## How to Use
> Requirements: Node.js v18, Linux or Windows. Mac OS compatibility not guaranteed.

 1. Use `yarn` or `npm` to install dependencies.
 2. Run `yarn dev` to start the project in development mode without the need to build.
 3. Run `yarn build` to build the project into JavaScript files.
 4. Run `yarn run` to run the project after building.

## Project Description
This project is a Node.js application that utilizes the Venom library for interacting with WhatsApp. It allows you to send messages, images, and perform other actions programmatically on WhatsApp.

## Folder Structure
```
- src/        // Contains the source code files
- build/       // Contains the compiled JavaScript files (generated after running 'yarn build')
- node_modules/  // Contains the installed dependencies
- package.json   // Project configuration and dependencies
- .env.local     // Local environment variables (should be created by the user)
- README.md      // Project documentation (you are reading it now)
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the application in development mode. It allows you to test your changes without the need to build the project.

### `yarn build`

Builds the application into JavaScript files. The compiled files are stored in the `dist/` directory.

### `yarn run`

Runs the application after it has been built using `yarn build`. This command is used to start the project in a production environment.

## Environment Variables

You need to create a `.env.local` file in the project's root directory to set the required environment variables. Below is an example of the required variables:

```
// .env.local

QUANTITY=10
MESSAGE=Hello, world!
IMAGE=image.png
```

- `QUANTITY`: The quantity of messages to send.
- `MESSAGE`: The content of the message to be sent.
- `IMAGE`: The name of the image file to be sent (leave empty for no image).

Make sure to adjust the values of these variables according to your needs.

## Further Information

For more information about the project or specific functionalities, refer to the inline code comments and documentation within the source files.

Feel free to modify the code, add new features, or customize it to suit your requirements. Happy coding!