import { Grid } from "@material-ui/core";
import React, { useState } from "react";
//import { useSelector } from "react-redux";
import JobCardInfo from "../../molecules/JobCardInfo/JobCardInfo";
import JobCardSmall from "../../molecules/JobCardsmall/JobCardSmall";
// import { JobCardForPage3 } from "../../molecules/JobCard/JobCardForPage3";
import jobCardDetails from "./jobCardDetails"
import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';





export function RenderJobCardsForPage3(props){
    // const state = useSelector((state => state.jobs))
    // const jobsInFindJobs = state.jobsInFindJobs
    const jobsInFindJobs = jobCardDetails
    return(
            <Grid container spacing={8} direction="column"> 
            
            {jobsInFindJobs.map((item) => (
                // <JobCardForPage3 job = { item } />
                <Grid item>
                <JobCardSmall  logo = {item.logo} roleName = { item.roleName} companyName = {item.companyName} location = { item.location }  icons = {[<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon /> , <DirectionsBusOutlinedIcon /> , <MotorcycleOutlinedIcon />]} />
                </Grid>
            ))

            }
            </Grid> 
    );
}