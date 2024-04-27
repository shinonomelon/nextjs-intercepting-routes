import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/photo";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos: Photo[] = await res.json();

  return (
    <main className="mx-auto w-full p-4">
      <ul className="flex gap-4 flex-wrap justify-start mx-auto">
        {photos.slice(0, 20).map((photo) => (
          <li key={photo.id}>
            <Link href={`/photo/${photo.id}`} prefetch>
              <Image
                src={photo.thumbnailUrl}
                alt={photo.title}
                width={160}
                height={160}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
