import { useRouter } from "next/router";

export default function farmers() {
  const router = useRouter();
  return <p>{JSON.stringify(router.query)}</p>;
}
