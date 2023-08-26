import App from "./components/app/app";

const getShipments = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/shipments.json`, {
    cache: "no-store",
  });
  return response.json();
};

export default async function Home() {
  const shipments = await getShipments();
  return <App shipments={shipments} />;
}
