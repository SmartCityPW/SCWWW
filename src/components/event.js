// object to represent an event in timeline

const useStyles = makeStyles(teamStyle);

function Event(props) {
    const classes = useStyles();
    return (
          <GridItem md={3} sm={3} style={{maxWidth:'215px'}}>
            <Card profile plain style={{marginBottom: "30px",
              marginTop: "30px",}}>
              <CardAvatar profile plain>
                  <img src={EventGallery} alt="event-pic" className={classes.img} />
              </CardAvatar>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{props.name}</h4>
                <h6 className={classes.textMuted}>{props.description}</h6>
              </CardBody>
            </Card>
          </GridItem>
    );
  }
  
  export default Event;