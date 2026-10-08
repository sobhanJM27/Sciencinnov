import Image from "next/image";

export function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative aspect-square overflow-hidden md:aspect-auto">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
    </div>
  );
}
