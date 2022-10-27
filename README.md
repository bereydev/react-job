# Bereyziat Development Next.js React developer recruitment task

To start the task use this repository as a TEMPLATE. Click the green button "Use this template" and create a **PRIVATE** repository from it. Add "bereydev" user as a collaborator to allow us to review your work.

During this task you will translate a mock-up (link received by email) to code using Next.js and MUI community components. Any other tool/library is allowed, as soon as it is open-source or free to use. Any additional UI kits and any components from the MUI premium plans are forbiden in this build.

**SPECIFICALLY DO NOT USE THE [DataGridPro](https://mui.com/x/react-data-grid/) MUIX COMPONENT**

Once finished you will have the opportunity to show your work and discuss your thinking process with our CEO. Please take an appointment using the Calendly link in the email you received.

**Even if there is timing constraint for this task try to not spend more than 1 day on the task. The main part of this code should take you about half a day to figure out.**

## Material and documentation

- A starting template (this repository) including the necessary code to authenticate your requests (no login logout to implement)
- A gist documentation of the endpoints you will have to use (see email)
- A high fidelity animated mock-up (see gist)

## Features to implement during the task

- Display objects in the list (one load for the whole list)
- Add new objects to the list
- Modify an object
- Remove/Delete objects from the list
- Select elements in the list
- Remove multiple selected objects from the list
- Search through the list on every column
- Display more information about the object in a card (click the first element of the mock-up to take a look at the design)
- Display the count of elements in the header of the list
- Navigation bar is UI only no interaction

## Bonus features

- Pagination or lazy-loading of the elements in the list
- Proper error handling
- Responsive design (mobile, tablet -> some compromises can be done on the elements to display or not)
- Add useful filters to the list
- Search through the list by selecting a column
- Click on the 3 dots on the right of the list header to chose de columns to display
- NextJS hydration optimisations like use of ISR

**Be creative. The aim is for you to respect the mock-up at 80 to 90%. You are highly encouraged to take initiatives and tradeoff to optimise your delivery time while providing the best result with a maximum of implemented features.**

# How to run

Two posibility to run the project. Chose the one you feel the most at ease with

## Docker file (Ready out of the box)

Make sure your docker is up to date.
In the root directory run the following docker-compose command. Hot reload is functionnal out of the box:

```
docker compose up -d
```

Keep in mind that if you add some libraries to your project you will have to rebuild the docker container.

## Local run (installation of Node and npm required)

Make sure you have [npm and node.js (>=16.15.1)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.

```
npm install
```

Run the project on your localhost

```
npm run dev
```

# Guidelines and tips

## General

- Read all the documentation and instructions carefully ;)
- Try to use as much MUI as possible and to avoid having separated CSS files. You can use Tailwind CSS if need but MUI components should be sufficient to finish the task.
- The final build should not have any debugging prints in the console
- Feel free to comment your code to make it even more readable
- Privilege clean code over quantity - it will be valued more (prefer making 2 features clean coded instead of 10 features with a messy code)
- If you feel the need of using a state management library try to use Recoil or Redux even if it should not be necessary for the current build.
- **Whatever the state of your work make sure the project is building before booking a meeting.**

## Development environnement

- If you use VScode as your IDE you will have a bunch of extension automatically proposed to accelerate your workflow
- You will notice that the components of MUI are already set up for this project if you need to modify a component style globaly you can do so in the theme.tsx file

## Use Fontawesome icons

If you need icons you can use any free icons from Fontawesome.

To integrate icons the React libraries are already set up. Import the icons you want to use and create React component in your JSX. In this example we import the 'gear' icon from the [solid icon pack](https://fontawesome.com/search?s=solid)

```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
```

And use this in your JSX

```
<FontAwesomeIcon icon={ faGear} />
```

# Techstack

- [Next.js](https://nextjs.org/): Frontend/Backend JS framework based on React and Node.js
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
- [MUI](https://mui.com/): React UIkit
- [Axios](https://axios-http.com/): Promise based HTTP client for the browser
- [Fontawesome](https://fontawesome.com/): Icon library

# Aditional notes

The initial code was based on the Next.js template ["Next.js + Tailwind CSS Example"](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss)
