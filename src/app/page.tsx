import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import Subtitle from "./components/subtitle";
// import Letter from "./components/letter";
import Card from "./(templates)/card";
import Link from "next/link";
import IssuuButton from "./components/issuuButton";

export default function Home() {
        return (
        <>
            <div className="notice">
                Hi there! Our website is currently undergoing maintenance.
                <IssuuButton link="https://issuu.com/gtagora/docs/agora_f24" />
            </div>
        </>
)}
    
