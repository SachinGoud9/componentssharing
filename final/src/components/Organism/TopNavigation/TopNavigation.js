import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProfileItem from '../../molecules/ProfileItem/ProfileItem';
import LocationListItem from '../../molecules/LocationListItem/LocationListItem';
const TopNavigation = (  { locationName} )  => {

    const useStyles = makeStyles((theme) => ({
       
      }));
  console.log(locationName);
  const classes = useStyles();
  
    return (
      <div data-testid = "topNavigation">
            <LocationListItem locationName={locationName} />
        
          <ProfileItem ></ProfileItem>
        
     </div>
    );
  }
  
  export default TopNavigation;