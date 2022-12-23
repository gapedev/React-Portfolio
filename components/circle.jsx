import Image from "next/image";

const Circle = ({src, alt}) => {
    return (
        <div className="circle">
            <picture>
                <Image 
                src={src} 
                alt={alt}
                width={250}
                height={250}
                objectFit="cover" />
            </picture>
        </div>
    )
}

export default Circle;