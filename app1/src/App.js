import logo from './logo.svg';
import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles,ThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import{green} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles=makeStyles({
  root:{
    color:'white',
background:'black',
padding:'15px 32px',
margin:'10px'}
})
function ButtonCustom()
{
  return <Button className={useStyles().root}>Iftikhar Hanif</Button>
}
function CheckboxExample()
{ 
  const [checked,setChecked]=React.useState(false);
  const handleChange=(e)=>{
    setChecked(e.target.checked)
  }
  return(<FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}
 />}label="testing icons"/>
 
 )

}
const theme=createMuiTheme({ 
  typography:{h2:{fontSize:40}},
  palette: {
  primary: {
    main: orange[500]
  },

secondary:{
  main:green[600]
}
}})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
    <div className="App">
      
      <header className="App-header">
        <Typography variant="subtitle1" >welcome to MUI</Typography>
        <Typography variant="h2">learn to use MUI</Typography>
      <ButtonCustom/>  
        <TextField id="outlined-basic" label="Email" color="secondary" variant="filled" 
        placeholder='naila.shah26@gmail.com' type="email"/> 
        <CheckboxExample/>
        <ButtonGroup>

        
      <Button startIcon={<SaveIcon/>} size="large" variant="contained" color="primary">save</Button>
      <Button startIcon={<DeleteIcon/>} size="large" variant="contained" color="primary">discard</Button>
      </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
        
       
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Paper style={{width:80,height:100}}/>
         
        </Grid>
        <Grid item>
          <Paper style={{width:100,height:100}}/>
        </Grid>
      </Grid>
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
