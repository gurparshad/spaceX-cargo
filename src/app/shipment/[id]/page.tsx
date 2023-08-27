import {ShipmentApi} from "@/app/api";
import Shipment from "@/app/components/shipment/Shipment";
import styles from "./shipment.module.css";

const shipmentApi = new ShipmentApi();

// this is for SSG.
export async function generateStaticParams() {
  const shipments = await shipmentApi.getShipments();
  return shipments.map((post: any) => ({
    id: String(post.id),
  }));
}

const ShipmentDetailPage = async ({params}: any) => {
  const shipment = await shipmentApi.getShipment(params.id);

  return (
    <div>
      <div className={styles.body}>
        <Shipment shipment={shipment} />
      </div>
    </div>
  );
};

export default ShipmentDetailPage;
