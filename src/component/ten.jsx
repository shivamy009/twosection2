import React, { useState, useRef } from 'react';
// Import icons from a library like Font Awesome or Heroicons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Using react-icons library for arrows
import Down from './down';
// import TextSlider from './ten';
// import ScrollableText from './ten';
const Ten = () => {
  const textContainerRef = useRef(null);
  // State for managing which tab is active
  const [activeTab, setActiveTab] = useState('about');
  const [ih,setih]=useState("")
  
  // State for managing image cards
  const [imageCards, setImageCards] = useState(["https://pics.jjgirls.com/pictures/myfriendshotmom/johnny-castle-kendra-lust/brazer-milf-bucket/hd-johnny-castle-kendra-lust-10.jpg", "https://pics.jjgirls.com/pictures/bigtitcreampie/mia-khalifa-sean-lawless/facesitting-kissing-girlfriend/hd-mia-khalifa-sean-lawless-17.jpg", "https://pics.jjgirls.com/pictures/bangbrosnetwork/mia-khalifa-mia-callista/view-teen-imagination/hd-mia-khalifa-mia-callista-15.jpg", "https://pics.jjgirls.com/pictures/scoreland/mia-khalifa-mia-callista-mia-khalifia/terrific-arab-xxxhub/hd-mia-khalifa-mia-callista-mia-khalifia-9.jpg","https://pics.jjgirls.com/pictures/fantasyhd/johnny-castle-kendra-lust/logan-close-up-tubeporn/hd-johnny-castle-kendra-lust-17.jpg","https://pics.jjgirls.com/pictures/myfirstsexteacher/daniel-hunter-gracie-glam-kendra-lust/siffredi-cumshot-emotional/hd-daniel-hunter-gracie-glam-kendra-lust-1.jpg"]); // Initial cards for demonstration

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
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 3; // Adjust the scroll amount to fit 3 cards
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Function to add a new image card
  // const addImageCard = () => {
  //   setImageCards([...imageCards, ]);
  // };
console.log(arr)
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#373434] " >
      {/* Left Section */}

      <div className="md:w-1/2 p-4 flex flex-col">
        {/* Content for the right section */}
        <div className="flex-grow border border-gray-300 rounded-xl p-4 bg-slate-400">
          {/* <p>Right section content goes here.</p> */}
          {/* <ScrollableText/> */}
          {/* {
            ih ? 
            <img src={URL.createObjectURL(ih)} alt="" />
            :
            <img src="https://pics.jjgirls.com/pictures/myfriendshotmom/johnny-castle-kendra-lust/brazer-milf-bucket/hd-johnny-castle-kendra-lust-10.jpg" alt="" />
          } */}
          {/* src={URL.createObjectURL(ih)} */}
        </div>
      </div>


      <div className="md:w-1/2 max-h-1/2 p-4 border-r border-gray-300 flex flex-col">
        {/* Upper Half with Tabs */}
        <div className="flex-grow h-1/2 mb-4 border border-gray-300 rounded-xl p-4  bg-[#363C43]">
          <div className="border-b md:justify-between lg:ml-4 lg:mr-4 lg:gap-5 sm:flex border-gray-300 mb-2 bg-black rounded-2xl">
            <button
              className={`px-4 rounded-2xl my-[1px] lg:ml-8 transition-all text-white duration-1000 py-2 ${activeTab === 'about' ? ' text-slate-300  bg-[#363C43] ' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`px-4 rounded-2xl my-[1px]  transition-all text-white duration-1000 py-2 ${activeTab === 'experience' ? 'text-slate-300  bg-[#363C43] ' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              className={`px-4 rounded-2xl my-[1px] lg:mr-8 transition-all text-white duration-1000 py-2 ${activeTab === 'recommend' ? 'text-slate-300  bg-[#363C43]  ' : ''}`}
              onClick={() => setActiveTab('recommend')}
            >
              Recommend
            </button>
          </div>
          <div className="pt-2 pl-2 pr-2 pb-0 max-h-[201px]  ">
            {activeTab === 'about' && <p  className=' max-h-[200px] whitespace-pre-wrap overflow-auto' ref={textContainerRef}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nobis sint, iste omnis voluptate quo doloremque dolorum, praesentium ea ut aliquid beatae. Aperiam dolorem nisi dicta, dignissimos provident nulla necessitatibus numquam facilis at aut deserunt accusantium quasi laboriosam saepe labore dolor aliquid asperiores doloremque quo!</p>}
            {activeTab === 'experience' && <p  className='max-h-[200px] whitespace-pre-wrap overflow-auto' ref={textContainerRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rerum quisquam provident cupiditate id eum, veniam molestias consequatur, quo eligendi dicta et, labore hic quod asperiores! Aliquid ad totam neque repudiandae molestias possimus? Quisquam, autem dolores! Quaerat animi nisi in iure autem mollitia aliquam ipsa?</p>}
            {activeTab === 'recommend' && <p  className='max-h-[200px] whitespace-pre-wrap overflow-auto' ref={textContainerRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem incidunt accusamus voluptatibus, nihil laborum iste voluptatem nam ad fugit qui autem quidem sunt, nulla a tempora natus optio molestias saepe ut, similique eos veniam! Nihil aut voluptas explicabo, totam sapiente officiis quod ex! Minima.</p>}
          </div>
        </div>

        {/* Line between the containers */}
        <div className="border-t-2 border-gray-300 my-2"></div>

        {/* Lower Half */}
        <div className=" h-1/3 w-full flex-grow border border-gray-300 rounded-xl p-4 bg-[#363C43] ">
          <Down/>
        </div>
      </div>

      {/* Right Section */}
       
    </div>
  );
};

export default Ten;
