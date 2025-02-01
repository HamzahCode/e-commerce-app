import Header from "./component/header";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">I&apos;m Working on it!</h1>
      <br />
      <br />
      <br />
      <Link href={"/product"}>
        <h1 className="text-3xl font-bold underline">
          Please Go To Product Page
        </h1>
      </Link>
    </div>
  );
}
