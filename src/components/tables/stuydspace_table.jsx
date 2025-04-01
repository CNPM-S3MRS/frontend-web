import { useEffect, useState } from "react";
import { getStudySpaces } from "../../services/dashboardService";

const StudySpaceTable = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    getStudySpaces().then(setSpaces);
  }, []);

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Tên phòng</th>
          <th className="border p-2">Sức chứa</th>
          <th className="border p-2">Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        {spaces.map((space) => (
          <tr key={space.id}>
            <td className="border p-2">{space.name}</td>
            <td className="border p-2">{space.capacity}</td>
            <td className={`border p-2 ${space.status === 'Trống' ? 'text-green-500' : 'text-red-500'}`}>
              {space.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudySpaceTable;
