import React from 'react'

type itemsProps = {
  id: number,
  img: string,
  text?: string
}

const Hero = () => {
  const items : itemsProps[] =  [
    { id: 1, img: "/models/pic1.jpg", text: "Top 10 ideas for your profile" },
    { id: 2, img: "/models/pic2.jpg", text: "Top 10 ideas for your profile" },
    { id: 3, img: "/models/pic3.jpg", text: "Small acts of kindness..." },
    { id: 4, img: "/models/pic4.jpg", text: "Top 10 ideas for your profile" },
    { id: 5, img: "/models/pic5.jpg", text: "Top 10 ideas for your profile" },
    { id: 6, img: "/models/pic6.jpg", text: "Top 10 ideas for your profile" },
  ];
  return (
    <section className="p-6 lg:px-20">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-full break-inside-avoid overflow-hidden rounded-xl shadow-md bg-white"
          >
            <img
              src={item.img}
              alt={item.text || "card"}
              className="w-full h-auto object-cover"
            />
            {item.text && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4  cursor-pointer">
                <p className="text-white text-lg font-semibold text-center">
                  {item.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
