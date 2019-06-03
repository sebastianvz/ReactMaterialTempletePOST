import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    link: {
      backgroundColor: theme.palette.common.white
    }
  }
}));

const NewPost = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Nuevo Post
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="tittle"
            name="tittle"
            label="Tutilo"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            name="body"
            label="Contenido"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            href="#"
            color="primary"
            variant="contained"
            className={classes.link}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewPost;
