import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles({
  contianer:{
    width:350,
    padding:25,
    height:'100%',
    display:'flex',
    flexDirection:'column',
    fontFamily:'monospace'
  }
});

export default function UserSideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  
  const {user} = CryptoState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
          style={{height:35,width:35,marginLeft: 15 , cursor:"pointer", backgroundColor:'#eebc1d'}}
          onClick={toggleDrawer(anchor, true)}
           src={user.photoURL}
           alt={user.displayName || user.email}
           >
           
          </Avatar>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
         <div className={classes.contianer}>

         </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

// export default UserSideBar
