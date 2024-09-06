import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Down = () => {
    const textContainerRef = useRef(null);
    // State for managing which tab is active
    const [activeTab, setActiveTab] = useState('about');
    const [ih,setih]=useState("")

    const [imageCards, setImageCards] = useState(["https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg", "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg", "https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-simple-natural-green-leaf-h5-illustration-image_132970.jpg","https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg","https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478039.jpg"]);

    const [arr,setArr]=useState([])

  // Reference to the scroll container
  const scrollContainerRef = useRef(null);
  const handleBannerUpload=async(e)=>{
    try{
      // console.log(e)
      let image=e.target.files[0]
      // setImage(image)
      // console.log(image)
      // let imageUploadurl= await uploadImage(image)
      // console.log(imageUploadurl)
      // setUrl(imageUploadurl)
      // banner=imageUploadurl
      
      // if(imageUploadurl){
      //   toast.success("Image uploaded ")
      //   // console.log(banner)
      //   setBlog({...blog,banner:imageUploadurl})
      // }
      setih(image)
      setArr([...arr,image]);
      // console.log(image)
      // console.log(URL.createObjectURL(ih))
    }
    catch(err){
     toast.error("Error while uploading image")
    }
  }

  // Function to scroll the cards container

  // Function to add a new image card
  // const addImageCard = () => {
  //   setImageCards([...imageCards, ]);
  // };
    
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
          const scrollAmount = scrollContainerRef.current.clientWidth / 3; // Adjust the scroll amount to fit 3 cards
          scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
          });
        }
      };
  return (
    <div className=' w-full flex flex-col justify-center items-center'>
        <nav className=' w-full flex  justify-between items-center'>
            <div className=' bg-gray-600 py-[8px] rounded-full text-white'>
            <span className='px-4'>Gallery</span>
            </div>
            <div className=' flex justify-center items-center'>
                <div className='bg-gray-600 rounded-full text-white p-[8px] md:mr-2 lg:mr-20 '>
              <label htmlFor='uploadBanner' className=' text-center'>
                <span className=' cursor-pointer px-1'>Add Image</span> 
                <input id='uploadBanner' type="file"  accept='.png,.jpg,.jpeg' onChange={handleBannerUpload}  hidden  />
              </label>

                </div>
              <div className=' flex justify-center items-center gap-2 md:mr-4 lg:mr8'>
              <button className="text-gray-600 text-2xl rounded-full p-[10px] bg-gray-500 hover:text-white" onClick={() => scroll('left')}>
              <FaArrowLeft />
            </button>
            <button className="text-gray-600 text-2xl rounded-full p-[10px] bg-gray-500 hover:text-white" onClick={() => scroll('right')}>
              <FaArrowRight />
            </button>
              </div>
            </div>
        </nav>
        <div className=' w-full h-full'>
        <div ref={scrollContainerRef} className="flex space-x-8 overflow-x-auto mt-3 h-full">
            {imageCards.map((card, index) => (
              <div key={index} className="  bg-gray-300 rounded-lg flex items-center justify-center h-full">
               <img src={card} className=' w-[140px] max-w-[180px] sm:h-[120px] md:max-h-[130px] xl:h-[150px] rounded-md' alt="" />
              </div>
            ))}

            {arr.length ?
            arr.map((card, index) => (
              <div key={index} className="  bg-gray-300 rounded-lg flex items-center justify-center">
               <img src={URL.createObjectURL(card)} className=' w-[140px] max-w-[180px] sm:h-[120px] md:max-h-[130px] xl:h-[150px] rounded-md' alt="" />
              </div>
            )):""}
          </div>
        </div>
    </div>
  )
}

export default Down