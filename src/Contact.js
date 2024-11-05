import { useContext } from "react";
import UserDetails from "./utils/UserDetails";
const Contact = () => {
  const { userName, project, description, phone, address } =
    useContext(UserDetails);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-left">
        <h1 className="text-2xl font-bold mb-6 text-center">About User</h1>

        <div className="mb-4">
          <p className="text-lg font-semibold">
            Name: <span className="font-normal text-gray-700">{userName}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">
            Phone: <span className="font-normal text-gray-700">{phone}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">
            Address:{" "}
            <span className="font-normal text-gray-700">{address}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">
            Project:{" "}
            <span className="font-normal text-gray-700">{project}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
