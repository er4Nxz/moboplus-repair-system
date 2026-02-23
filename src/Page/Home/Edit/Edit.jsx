import { data, useParams } from "react-router-dom";
import Update from "./Update";
import useFetch from "../../../Hooks/UseFetch/useFetch";

const Edit = () => {
  const { id } = useParams();
  const {data} = useFetch(`http://localhost:3001/Devices/${id}`);
  return <>{data && <Update data={data}/>}</>;
};

export default Edit;
