import Image from "next/image";
import { Modal } from "./modal";
import { API_URL } from "@/constant";

export default async function Page({
  params: { photoId },
}: {
  params: { photoId: number };
}) {
  const res = await fetch(`${API_URL}/${photoId}`);
  const photo = await res.json();
  return (
    <Modal>
      <div className="relative">
        <figure className="relative border-4 border-slate-100 bg-slate-50 transition-all md:aspect-square md:w-auto w-[calc(100svw-2rem)] h-[80svh] md:h-[calc(100vmin-4rem)]">
          <Image
            src={photo.url}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-700/50 text-gray-200 p-2">
            <h2 className="text-sm mb-2 font-bold">{photo.title}</h2>
          </div>
        </figure>
      </div>
    </Modal>
  );
}
