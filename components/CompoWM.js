import Image from "next/image"

const CompoWM = () => {
  return (
    <div className="container mx-auto flex-center my-">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-blue-800  ">
        <Image
          className="relative self-center  sm:m-20 sm:pt-32"
          src="/Img/3.png"
          alt="imagen cool"
          width="800"
          height="300"
        />
      </div>
    </div>
  </div>
  )
}

export default CompoWM