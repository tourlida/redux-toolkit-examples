import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";

export default function LoadingSkeleton() {
 return <Grid container spacing={2} style={{ padding: "48px 0px" }}>
    {Array(4)
      .fill(0)
      .map((_, idx) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                }
                action={null}
                title={
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                }
                subheader={
                  <Skeleton animation="wave" height={10} width="40%" />
                }
              />
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />

              <CardContent>
                <>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
  </Grid>;
}
