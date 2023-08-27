import {ShipmentApi} from "./api";
import HomePage from "./homePage";

// SSR
const fetchShipments = async () => {
  const shipmentApi = new ShipmentApi();
  return await shipmentApi.getShipments();
};

export default async function Home() {
  const shipments = await fetchShipments();
  return (
    <div>
      <HomePage shipments={shipments} />
    </div>
  );
}
