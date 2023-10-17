import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
} from "@mui/material";

export const Promote = () => {
  return (
    <Container sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Promote Your Product
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Product Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Product URL" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginLeft: "auto" }}
          >
            Promote
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
