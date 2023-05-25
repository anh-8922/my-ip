
import useFetch from "../CustomHooks/useFetch";

export default function IpAddress(props) {


  const {data} = useFetch('https://api.ipify.org?format=json');

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      fontFamily: "Trebuchet MS",
      fontWeight: "800",
      }}>

      IPv4: {data.ip}
    </div>
  );
}

