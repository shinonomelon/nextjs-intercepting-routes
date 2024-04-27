import Image from "next/image";
import { Modal } from "@/components/modal";
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
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
    </Modal>
  );
}
