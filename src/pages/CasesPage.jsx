import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import TableBodyCell from "../components/TableBodyCell";
import "../stylesheets/casePage.css";
import { getCaseFiles } from "../controller/apiController";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router";
import { AccountCircle, Search } from "@mui/icons-material";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import StatsAnalysisCard from "../components/StatsAnalysisCard";
import { filesImg } from "../assets/images";


const CasesPage = () => {
    const [cases, setCases] = useState([]);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser?.isAdmin) navigate("/");
        const onLoad = async () => {
            const files = await getCaseFiles();
            return setCases(files);
        }
        onLoad();
    }, []);

    const closedCases = cases.filter((file) => {
        return file.isClosed === true;
    })
    const percentClosedCases = Math.floor((closedCases.length / cases.length) * 100 );

    const percent = `${percentClosedCases}%`;
    const size = { "--closedCases": percent }

  return (
      <section className="overflow-hidden">
          <div className="cases_page">
              <div className="flex flex-wrap pt-5 m-1 sm:mx-3 table_title gap-y-4 items-start justify-evenly md:justify-between">
                  <div className="order-1">
                      <h1 className="text-3xl md:text-4xl">Case File Board</h1>
                      <p className="text-gray-600 text-sm">Overview of Company Peformance and Case Files </p>
                  </div>
                  
                  <div className="border order-3 md:order-2 rounded-md gap-2 text-gray-600 bg-white p-1 flex items-center w-auto lg:w-1/3">
                    <Search/>
                    <input type="text" className="w-full"  placeholder="Search anything..." />
                  </div>

                  <div className="hidden sm:flex order-2 md:order-3 items-center gap-x-1 sm:gap-x-3">
                      <CircleNotificationsOutlined sx={{ fontSize: 18 }} />
                      <div className="flex items-center gap-x-0 sm:gap-x-1">
                          <AccountCircle sx={{ fontSize: 35 }} />
                          <div className="text-xs">
                              <p>{currentUser.email}</p>
                              <p className="text-gray-600">{currentUser.id}</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <StatsAnalysisCard gridArea="content1">
                <div className="w-1/2">
                    <img src={filesImg} alt="a vector image of a hand holding a briefcase" />
                </div>
                <div className="w-1/2 flex justify-center items-center">
                      <div className="flex flex-col gap-y-2 text-2xl lg:text-3xl">
                        <h4>Total Users</h4>
                        <h4>2,000+</h4>
                        <p className="text-base md:text-lg"><span className="text-green-500">+2.4%</span> vs last month</p>
                    </div>
                </div>
              </StatsAnalysisCard>

              <StatsAnalysisCard gridArea="content2">
                  <div className="cases_analysis w-3/5 lg:w-1/2" style={size}>
                      <div className="pie_chart text-black flex items-center text-sm lg:text-base justify-center p-2 text-center">
                          <p>Closed <span className={`text-${percentClosedCases >= 50 ? "green-600" : "red-600"}`}>{percentClosedCases}%</span> of Cases</p>
                      </div>
                  </div>
                  <div className="flex flex-col gap-1">
                      <h4 className="text-lg md:text-xl lg:text-3xl">Submitted Cases</h4>
                      <h4 className="text-xl ps-2 lg:text-3xl">{cases.length}</h4>
                      <div className="text-xs sm:text-sm lg:text-lg">
                        <p className="ps-2">Keys</p>
                        <p className="ps-4 closed_case">{closedCases.length} Closed Cases</p>
                        <p className="ps-4 open_case">{cases.length - closedCases.length} Open Cases</p>
                      </div>
                  </div>
              </StatsAnalysisCard>
            <section className="table overflow-scroll">
                  <div className="w-screen overflow-scroll">
                <Table>
                    <thead>
                        <TableHeader/>
                    </thead>

                    <tbody>
                        {cases.map((caseFile) => (
                            <TableRow key={caseFile._id}>
                                <TableBodyCell>{caseFile.firstName}</TableBodyCell>
                                <TableBodyCell>{caseFile.lastName}</TableBodyCell>
                                <TableBodyCell>{caseFile.contactEmail}</TableBodyCell>
                                <TableBodyCell>{caseFile.lostAmount}</TableBodyCell>
                                <TableBodyCell>{caseFile.description.slice(0, 90)}...</TableBodyCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
                  </div>
            </section>
        </div>
    </section>
  )
}

export default CasesPage;