

import { useLoaderData } from 'react-router-dom';

const DonationDescription = () => {
    const donation = useLoaderData()
    const {id,title,bg_img,text_color,price,description} = donation
    // const [donate,setDonate] = 

   
    return (
      <div className="mb-32">
        <div className="flex flex-col justify-center items-center">
          <div className="w-8/12">
            <div className="relative">
              <img src={bg_img} className="w-full" alt="" />
              <div className="mx-h-full bottom-0 absolute w-full">
                <div className="bg-black bg-opacity-70 py-3 flex flex-col  w-full">
                  <button
                    style={{ background: `${text_color}` }}
                    className="btn w-36 text-base ml-10 text-white border-none"
                  >
                    Donate {price}$
                  </button>
                </div>
              </div>
            </div>
            <div className="my-10 space-y-5">
              <h2 className="text-4xl font-semibold">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
};



export default DonationDescription;