import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function Imageslider({ url, page = 1, limit = 3 }) {

    const [images, setimages] = useState([])
    const [slide, setslide] = useState(0)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    async function Imageslider() {
        try {
            setloading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            console.log(data)

            if (data) {
                setimages(data)
                setloading(false)
            }
        } catch (e) {
            seterror(e.message);
            setloading(false);
        }

    }


    useEffect(() => { if (url) Imageslider() }, [])




    if (loading) { return <div>loading the data</div> }
    if (error !== null) { return <div>error occured {error}</div> }

    function prev() { setslide((prev) => prev === 0 ? images.length - 1 : prev - 1) }
    function next() { setslide((prev) => prev === images.length - 1 ? 0 : prev + 1) }


    return (
        <div className='flex justify-center mt-10 '>
            {images.length > 0 &&
                <div className=' flex flex-col items-center   '>
                    <div className='flex items-center align-middle gap-2 '>
                         
                    <div><BsArrowLeftCircleFill  size={40} onClick={prev}  className='   fill-red-700   ' /></div>
                    <img className='w-[50%]'   src={images[slide]?.download_url} alt={`image-${slide + 1}`} />
                    <div><BsArrowRightCircleFill size={40} onClick={next} className=' fill-green-700  '/></div>
                  
                    </div>
                    <div>
                        {
                            images && images.length ? images.map((_, index) => (<button className='bg-black rounded-full w-5 h-5' onClick={() => setslide(index)} key={index}></button>)) : null
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Imageslider