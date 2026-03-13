import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <CardPanel />
    </main>
  );
}