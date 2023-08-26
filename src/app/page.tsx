import Shipment from "./components/shipment/Shipment";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div>
      <div className={styles.body}>
        <Shipment />
      </div>
    </div>
  );
}
