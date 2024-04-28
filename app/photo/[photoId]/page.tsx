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
    <main className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{photo.title}</h2>
      </div>
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
    </main>
  );
}
