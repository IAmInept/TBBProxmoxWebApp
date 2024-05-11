import { get_data } from "./my_api";
import { useQuery } from "@tanstack/react-query";
import "./RenderNode.css";

function RenderNode() {
  // @ts-ignore
  const { status, data, error } = useQuery({
    queryKey: ["test"],
    queryFn: get_data,
  });
  
  if (status == "success")
  return (
      <>
      <table>            
        <tr id="ServerTable">
            <th>Server Name</th>
            <th>Server ID</th>
            <th>Server Status</th>
        </tr>
    </table>

        {data.map((node)=> {
          return (<table>
            <tr id="ServerTable">
                <th>{node.name}</th>
                <th>{node.vmid}</th>
                <th>{node.status}</th>
            </tr>
            </table>)
        })}
      </>
    );
}

export default RenderNode;
