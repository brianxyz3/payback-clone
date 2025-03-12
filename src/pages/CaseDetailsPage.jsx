import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getFileData, updateCaseFile } from "../controller/apiController";
import { ArrowBack } from "@mui/icons-material";
import { useAuth } from "../authContext";
import { toast } from "react-toastify";


const CaseDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    const [fileData, setFileData] = useState([]);

    useEffect(() => {        
        if(!currentUser?.isAdmin) navigate("/");
        const getFile = async () => {
            const res = await getFileData(id);
            return setFileData(res);
        }
        getFile();
    }, []);
    
    const openInvestigation = async () => {
        const res = await updateCaseFile(id, {isActiveInvestigation: true}).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        toast.success("Case is now an active investigation");
        setTimeout(() => navigate(0), 2500);
    }
    
    const closeCase = async () => {
        const res = await updateCaseFile(id, {isActiveInvestigation: false, isClosed: true}).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        toast.success("Another Case Closed, Great Work");
        setTimeout(() => navigate(0), 2500);
    }
    
    const reOpenCase = async () => {
        const res = await updateCaseFile(id, {isActiveInvestigation: true, isClosed: false}).catch((err) => console.log(err));
        if(!res.status == 200) toast.error("Something went wrong. Try again.");
        toast.success("Case ReOpen, Getting it right is what matters most");
        setTimeout(() => navigate(0), 2500);
    }
    
  return (
    <main>
      <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/cases"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center hover:scale-105 duration-200"
                    >
                      <ArrowBack className="mr-2" /> Back to All Case Files
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-7 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <div>
                      <div
                          className="bg-white p-3 md:p-6 rounded-lg shadow-md"
                       >
                            <h1 className="text-xl md:text-2xl text-[#0f3bc0] font-bold mb-4">
                                Client's Personal Details
                            </h1>
                            <div className="text-gray-500 text-sm md:text-base mb-2">First Name: <span className="text-black inline-block text-base md:text-lg">{fileData.firstName}</span></div>
                              <div className="text-gray-500 text-sm md:text-base mb-2">Last Name: <span className="text-black inline-block text-base md:text-lg">{fileData.lastName}</span></div>
                              <div className="text-gray-500 text-sm md:text-base mb-2">Contact Email: <span className="text-black inline-block text-base text-wrap md:text-lg">{fileData.contactEmail}</span></div>
                              <div className="text-gray-500 text-sm md:text-base mb-2">Contact Phone: <span className="text-black inline-block text-base md:text-lg">{fileData.contactPhone || "Nil"}</span></div>
                      </div>

                      <div className="bg-white p-3 md:p-6 rounded-lg shadow-md mt-6">
                              <h3 className="text-[#0f3bc0] text-lg font-bold mb-6">
                              Case Description
                          </h3>

                          <p className="mb-4">
                              {fileData.description || "None"}
                          </p>

                              <h3 className="text-[#0f3bc0] text-lg font-bold mb-2">Amount Lost</h3>

                          <p className="mb-4">{fileData.lostAmount}</p>
                      </div>
                      </div>
                        {/* Sidebar */}
                      <aside className="p-6 bg-gray-200 rounded-lg">
                          <div className="flex text-white font-bold gap-1 xl:gap-2 md:flex-wrap lg:flex-nowrap">
                              {!fileData.isActiveInvestigation && !fileData.isClosed && <button className="bg-green-500 w-1/2 md:w-full p-2 rounded-lg" onClick={openInvestigation}>Activate Case</button>}
                              {fileData.isActiveInvestigation && !fileData.isClosed &&  <p className="text-black text-sm bg-yellow-400 rounded-sm flex items-center justify-center p-0.5 w-full">Ongoing Investigation</p>}
                            {fileData.isClosed ?
                                  <button className="bg-green-500 w-1/2 md:w-full p-1.5 rounded-lg" onClick={reOpenCase}>ReOpen Case</button>
                                : <button className="bg-red-600 w-1/2 md:w-full p-1.5 rounded-lg" onClick={closeCase}>Close Case</button>
                            }
                        </div>
                            
                        </aside>
                    </div>
                </div>
            </section>
      </main>
  )
}

export default CaseDetailsPage;