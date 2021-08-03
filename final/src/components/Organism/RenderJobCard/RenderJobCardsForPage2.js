import { Grid, Typography } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
import JobCard from "../../molecules/JobCard/JobCard";
// import { JobCardForPage2 } from "../../molecules/JobCard/JobCardForPage2";
import jobCardDetails from "./jobCardDetails";
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';




export function RenderJobCardsForPage2(props){
    // console.log(jobCardDetails[0].roleName)
    // const state = useSelector((state => state.jobs))
    // const jobsInFindJobs = state.jobsInFindJobs
    const jobsInFindJobs = jobCardDetails
    return(
            <Grid container direction="row">
            {/* {jobCardDetails && jobCardDetails.map(
                jobCardContent => (
                    <JobCardForPage2 
                        id = { [jobCardContent.id, console.log(jobCardContent.location)]}
                        logo = { jobCardContent.logo }
                        location = { jobCardContent.location }
                        roleName = { jobCardContent.roleName }
                        companyName = { jobCardContent.companyName } 
                        icons = { jobCardContent.icons } />
                        
            ))} */}
                                        
            {jobsInFindJobs.map((item) => (
                // <JobCardForPage2 job = { item } />
                <JobCard logo = {item.logo} roleName = { item.roleName} companyName = {item.companyName} location = { item.location }  icons = {[<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon /> , <DirectionsBusOutlinedIcon /> , <MotorcycleOutlinedIcon />]}/>
            ))
            }
            </Grid>
    );
}