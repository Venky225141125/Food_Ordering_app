import { useContext } from "react";
import UserDetails from "./utils/UserDetails";

const About = () => {
  const { project, description } = useContext(UserDetails);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-left">
        <h1 className="text-2xl font-bold mb-6 text-center">{project}</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Project Overview:</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Technologies Used:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React for front-end development</li>
            <li>Tailwind CSS for styling</li>
            <li>Swiggy API to fetch restaurant and menu data</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">App Features:</h2>
          <p className="text-gray-700">
            This is a food ordering application where users can browse
            restaurant information retrieved from the Swiggy API. Upon selecting
            a restaurant, the app fetches and displays the available food items,
            organized into multiple categories. Users can add items from
            different categories to their cart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
