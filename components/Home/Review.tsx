import Image from "next/image";

export default function Review() {
  return (
    <aside className="bg-white hidden lg:block lg:w-80 hue-rotate-180 shadow-3xlr rounded-tl-xl rounded-bl-xl p-4 ">
      <Image
        src="/images/plants.jpg"
        width={400}
        height={300}
        className="object-cover"
      />
      <p className="mt-4 border-t pt-4">
        Plant Name,
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor at
        consectetur debitis soluta exercitationem incidunt commodi nulla, ea
        nesciunt ratione voluptatem possimus, quia maxime, earum non veritatis
        odio minima autem.
      </p>
    </aside>
  );
}
