import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import { rgbToHex, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { width } from '@mui/system';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_n6h33ks', 'template_uh4o6mr', form.current, '5bXzoh8OhXzRuCg7O')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div className='section contact'>
        <h1 className='font-mont'>Contact Me</h1>
    <form className='contact_form' ref={form} onSubmit={sendEmail}>
        <div className='contact_top'>
            <label className='font-mont'>Name: </label>
            <TextField
          id="user_name"
          name='user_name'
          defaultValue="Name"
          size="small"
          sx={{
            marginRight:'95px',
            marginLeft:'10px',
            
            '& .MuiInputBase-root': {
                width:'400px',
                color:'white',
                fontFamily:"'Montserrat', sans-serif",
                background:"#266852"
            }
          }}
        />            
        <label className='font-mont'>Email: </label>
            <TextField
          id="user_email"
          name='user_email'
          defaultValue="Email"
          size="small"
          sx={{
            marginLeft:'10px',
            paddingRight:'5px',
            '& .MuiInputBase-root': {
                width:'400px',
                color:'white',
                fontFamily:"'Montserrat', sans-serif",
                background:"#266852"
            }
          }}
        />         </div>
        <div className='contact_msg'>
            <label className='font-mont'>Message: </label>
            <TextField
          id="message"
          name='message'
          defaultValue="Message"
          size="small"
          sx={{
            paddingLeft:'6px',
            '& .MuiInputBase-root': {
                width:'955px',
                height:'300px',
                color:'white',
                background:"#266852",
                fontFamily:"'Montserrat', sans-serif"
            }
          }}
        />           
        </div>
        <div className='contact_button'>
        <Button 
        variant="contained" 
        endIcon={<SendIcon />} 
        type="submit"
        sx ={{
            color:'#20AA7E',
            background:'white',
            width:'955px',
            marginLeft:'80px',
            height:'40px',
            '&:hover': {
                background: '#00ffca', // Set the desired color on hover
                color: 'black', // Set the text color on hover
              }
        }}
        
        >
        Send
      </Button>
        </div>

  </form>
    </div>

    )
}

export default Contact