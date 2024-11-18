import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import CampaignPage from "./page";

export async function generateStaticParams() {
  const campaignsCollection = collection(db, "campaigns");
  const snapshot = await getDocs(campaignsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
  }));
}

export default function CampaignPageWrapper({ params }) {
  return <CampaignPage params={params} />;
}
