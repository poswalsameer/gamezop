# gamezop

### Project Overview:
This project aims to make a web application similar to Gamezop, by following the best industry practices and the latest web technologies and tools like Next.js, TypeScript, Tailwind CSS, and ShadCN.

### Development Process:
The development process comprises the best development practices in frontend development. Throughout the code, some of the things which are taken care of are mentioned below:
1. Component-based architecture for code reusability and sticking to the DRY principle of programming.
2. Proper usage of TypeScript and interfaces for efficient type declaration and minimal errors in the codebase.
3. Using a `.env` file to keep the secret API keys in one single place and not expose them publicly.
4. Using component libraries like ShadCN for styling purposes and faster development.
5. Having a fallback UI, and conditionally rendering it using proper loading states.

### Mindset during development:
The mindset while developing this application was very clear, here is how I broke down the whole application into different bits:
1. Since the whole webpage consisted of similarly structured divs that were getting populated through the data incoming from an API, so I went towards making a separate component and reusing it every time.
2. The Navbar is a very important entity of any web application, so kept it separate too.
3. The category filters inside the navbar were similar, so also built a separate component for them, and used the map function to iterate and render them at once.
4. Since the API key can be a very sensitive thing in terms of business logic, so kept it inside a `.env` file.

### Few improvements over the original web application:
1. Improved the UX by proper hover states on the game images.
2. Improved the Navbar to give it a more dynamic look.

### Project setup:
1. Clone this repository.
2. `cd` into the right folder.
3. Run `npm i` to download the `node_modules` folder.
4. Run `npm run dev` to start the project on your localhost.
