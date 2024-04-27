import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/constant";

export default async function PhotoDetailPage({
  params: { photoId },
}: {
  params: { photoId: number };
}) {
  const res = await fetch(`${API_URL}/${photoId}`);
  const photo = await res.json();
  return (
    <main>
      <div>
        <div>photo detail information</div>
      </div>
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
      <Link href="/">back to top</Link>
    </main>
  );
}
