import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/photo";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos: Photo[] = await res.json();

  return (
    <main className="p-4">
      <ul className="flex gap-4 flex-wrap lg:justify-start justify-center md:max-w-[62rem] mx-auto">
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
