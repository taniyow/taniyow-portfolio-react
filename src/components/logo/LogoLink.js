import React from "react";
import { Link, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";
import Logo from "../../assets/Logo.png";

const useStyles = makeStyles((theme) => ({
  svg: {
    position: "fixed",
    width: "50px",
    height: "50px",
    top: theme.spacing(6),
    left: theme.spacing(6),
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
}));

export const LogoLink = () => {
  const classes = useStyles();

  return (
    <Tooltip
      title={Resume.basics.name}
      placement="right"
      TransitionComponent={Zoom}
    >
      <Link
        variant="h6"
        href={Resume.basics.url}
        underline="none"
        color="inherit"
        noWrap
        className={classes.svg}
      >
        <img src={Logo} alt="Logo" className={classes.img} />
      </Link>
    </Tooltip>
  );
};
