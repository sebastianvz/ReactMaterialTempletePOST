import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(5, 0, 5)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

export default function Template(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Header */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            REACT
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="home"
              className={classes.link}
              component={RouterLink}
              to="/"
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="posts"
              className={classes.link}
              component={RouterLink}
              to="/posts"
            >
              Todos los post
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="newpost"
              className={classes.link}
              component={RouterLink}
              to="/newpost"
            >
              Nuevo post
            </Link>
          </nav>
          <Button
            href="#" 
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* end Header */}
      {/* Main conteiner */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}> 
        {props.children}
      </Container>
      {/* end Main conteiner */}
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={1} justify="flex-start">
          <Grid>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Footer
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  link1{" "}
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  link2{" "}
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  link3{" "}
                </Link>
              </li>
              <li>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  link4{" "}
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
