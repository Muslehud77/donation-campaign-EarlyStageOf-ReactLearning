
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from '@uidotdev/usehooks';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const DonationDescription = () => {
    const donation = useLoaderData()
    const {id,title,bg_img,text_color,price,description} = donation
    const [donate,setDonate] = useLocalStorage('donationRecords',[])

    const handleDonations = () => {
        const isExist = donate.find(d => d == id)
        if(!isExist) {
             const record = [...donate, id];
             setDonate(record);
             success();
        }else{
            error()
        }
       
    }

    const success = () =>{
        toast.success(`Successfully donated for ${title}!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    } 

    const error = () => {
        toast.error(`Already Donated for ${title}!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    }
   
    return (
      <div className="mb-32">
        <Helmet>
          <title>Donation Campaign | {title}</title>
        </Helmet>
        <div className="flex flex-col justify-center items-center">
          <div className="w-8/12">
            <div className="relative">
              <img src={bg_img} className="w-full" alt="" />
              <div className="mx-h-full bottom-0 absolute w-full">
                <div className="bg-black bg-opacity-70 py-3 flex flex-col  w-full">
                  <button
                    style={{ background: `${text_color}` }}
                    className="btn w-36 text-base ml-10 text-white border-none"
                    onClick={handleDonations}
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
};



export default DonationDescription;