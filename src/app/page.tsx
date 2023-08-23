import Header from "./components/header/Header";
import Shipment from "./components/shipment/Shipment";
import SideMenu from "./components/sideMenu/SideMenu";
import styles from "./page.module.css";

const getShipments = async () => {
  const response = await fetch(`${process.env.API_BASE_URL}/shipments.json`, {
    cache: "no-store",
  });
  return response.json();
};

export default async function Home() {
  const shipments = await getShipments();
  return (
    <div className={styles.header}>
      <Header />
      <div className={styles.body}>
        <SideMenu shipments={shipments} />
        <div className="content">
          <Shipment />
        </div>
      </div>
    </div>
  );
}
