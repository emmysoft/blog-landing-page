import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { BiBookmark } from 'react-icons/bi';

const useStyles = makeStyles((theme) => ({ 
 appBar: {
   backgroundColor: "#fff"
 },
 hero: {
   backgroundImage: `url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
   height: "500px",
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   position: "relative",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   color: "#000000",
   fontSize: "4rem",
   fontWeight: "bold",
   [theme.breakpoints.down("sm")] : {
     height: 300,
     fontSize: "3em"
   }
 },
 blogsContainer: {
   paddingBottom: theme.spacing(3)
 },
 blogTitle: {
  fontWeight: 800,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(5)
 },
 card: {
   maxWidth: "100%",
 },
 media: {
   height: 300
 },
 cardActions: {
   display: "flex",
   margin: "0 10px",
   justifyContent: "space-between"
 },
 author: {
   display: "flex",
 }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Pauma Blog
          </Typography>
        </Toolbar>
      </AppBar>   
      <Box className={classes.hero}>
        <Box>Pauma's Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles &#x1F4DD;
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image= "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Welcome to Pauma Blog &#x1F44F;
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    We are sure you'd love it here &#x1F49F;
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1572679079418-de9c4361425d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Bella Ruus
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 14th, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BiBookmark/>
                </Box>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image= "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    I Love Programming! ❤️
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Programming has become so easy with the React.js 👩‍💻
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://image.shutterstock.com/image-photo/white-blooming-flowers-near-beautiful-600w-1718430529.jpg"/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Diana Green
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 14th, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BiBookmark/>
                </Box>
            </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image= "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   I love this Blog! &#x1F49F;
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    It's so cool to post your stuffs here! &#x1F44D;
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aGFuZHNvbWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      George Blake
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 14th, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BiBookmark/>
                </Box>
            </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
   </div>
  );
}

export default App;
