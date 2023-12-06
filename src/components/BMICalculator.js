import React, { useState } from 'react'
import "../App.css";
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';
import { BMIoptions, fetchData } from '../utils/fetchData';
import HeroBannerImage from '../assets/images/banner.png';

const BMICalculator = () => {
    const [name,SetName]=useState("");
    const [height,SetHeight]=useState("");
    const [weight,SetWeight]=useState("");
    const [age,SetAge]=useState("");
    const [gender,SetGender]=useState("");
    const [waist,SetWaist]=useState("");
    const[hip,SetHip]=useState("");
    const [obj,Setobj]=useState({});
    const [flag,setFlag]=useState(false);

    

    const handelClick=async()=>{
      Setobj({});
      setFlag(true);
        if(name && height && weight && age && gender && waist && hip)
        {

            // console.log(name,height,weight,age,gender,waist,hip);

        const BMIurl =   `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`;
          const responseBMI = await  fetchData(BMIurl, BMIoptions);
          const{bmi, health , healthy_bmi_range}=responseBMI.info;
          console.log(bmi,health,healthy_bmi_range);
          

          const BMRurl=`https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`;
          const responseBMR = await  fetchData(BMRurl, BMIoptions);
          console.log(responseBMR);
          const{bmr}=responseBMR.info;


          const BFPurl=`https://mega-fitness-calculator1.p.rapidapi.com/bfp?weight=${weight}&height=${height}&age=${age}&gender=${gender}`;
          const responseBFP = await  fetchData(BFPurl, BMIoptions);
          console.log(responseBFP);
          const{bfp, fat_mass, lean_mass}=responseBFP.info;

          const TDEEurl=`https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=${weight}&height=${height}&activitylevel=ma&age=${age}&gender=${gender}`;
          const responseTDEE = await  fetchData(TDEEurl, BMIoptions);
          console.log(responseTDEE);
          const{tdee}=responseTDEE.info;

          const WHRurl=`https://mega-fitness-calculator1.p.rapidapi.com/whr?waist=${waist}&hip=${hip}&gender=${gender}`;
          const responseWHR = await  fetchData(WHRurl, BMIoptions);
          console.log(responseWHR);
          const{whr, bodyShape, riskLevel}=responseWHR.info;

          const tempobj={
            name,
            age,
            bmi,
            health,
            healthy_bmi_range,
            bmr,
            bfp, fat_mass, lean_mass,
            tdee,
            whr, bodyShape, riskLevel
          }


          Setobj(tempobj);
          
        }
        else
        {
          alert("Please Fill The Complete Information for Fitness Test");
          setFlag(false);
        }
    }

    console.log("from-----");
    console.log(obj);
  return (
    <>
    <Box sx={{ xs: '70px' , ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625"  sx={{ fontSize: { lg: '44px', xs: '40px' } }} fontWeight={700}>Fitness Calculator</Typography>
    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Name : <br/> <input type='text' placeholder='Enter your Name' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }} onChange={(e)=>{SetName(e.target.value)}} /> 
    </Typography>

    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Height: <br/> <input type='number' placeholder='Enter your Height' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }} onChange={(e)=>{SetHeight(e.target.value)}}/> 
    </Typography>


    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Weight : <br/> <input type='number' placeholder='Enter your  Weight' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }}
      
      onChange={(e)=>{SetWeight(e.target.value)}} /> 
    </Typography>
  
    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Age : <br/> <input type='number' placeholder='Enter your  Age' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }} onChange={(e)=>{SetAge(e.target.value)}} /> 
    </Typography>

    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Gender: <br/> <input type='text' placeholder='Enter your Gender' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }} onChange={(e)=>{SetGender(e.target.value)}} /> 
    </Typography>

    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Waist: <br/> <input type='number' placeholder='Enter your Waist' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }} onChange={(e)=>{SetWaist(e.target.value)}} /> 
    </Typography>

    <Typography fontWeight={400} sx={{ fontSize: { lg: '24px', xs: '20px' } }} mb="23px" mt="15px">
      Hip: <br/> <input type='number' placeholder='Enter your  Hip' style={{
        width: '330px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '10px',
        
      }} onChange={(e)=>{SetHip(e.target.value)}} /> 
    </Typography>


    <Stack>
      <button type='button' onClick={handelClick} style={{ marginTop: '30px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px',position:'relative',bottom:'30px',cursor:'pointer' }}>Calculate</button>
    </Stack>
  </Box >
  <Box style={{float:"left"}}>
  <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" borderRadius='5px' style={{ marginTop: '1px'}} />
  </Box>


      {flag && obj.whr ? <Box>
         <Typography color="#FF2625"  sx={{ fontSize: { lg: '44px', xs: '40px' } }} fontWeight={700}>
            Fitness Test Report-
            </Typography>
            <table  style={{ 

              margin: 'auto',
              height: '600px',
              border: '3px solid black',
              fontSize:"19px"
              }}
              
              sx={{ml:{
                lg:"0px",
                md:"0px",
                sm:"4px",
                xs:"2px"
              }}}

              >
                <tbody>

                <tr>
                    <th>Name-</th>
                    <td>{obj.name}</td>
                </tr>
                <tr>
                    <th>Age-</th>
                    <td>{obj.age}</td>
                </tr>
                <tr>
                    <th>Body Mass Index (BMI)-</th>
                    <td>{obj.bmi}</td>
                </tr>
                <tr>
                    <th>Health-</th>
                    <td>{obj.health}</td>
                </tr>
                <tr>
                    <th>Healthy Bmi Range-</th>
                    <td>{obj.healthy_bmi_range}</td>
                </tr>
                <tr>
                    <th>Body Mass Ratio (BMR)-</th>
                    <td>{Math.floor(obj.bmr)}</td>
                </tr>
                <tr>
                    <th>Body Fat Percentage (BFP)-</th>
                    <td>{ Math.floor(obj.bfp)}%</td>
                </tr>
                <tr>
                    <th>Fat Mass -</th>
                    <td>{Math.floor(obj.fat_mass)}</td>
                </tr>
                <tr>
                    <th>Lean Mass </th>
                    <td>{Math.floor(obj.lean_mass)}</td>
                </tr>
                <tr>
                    <th>Total Daily Energy Expenditure (TDEE)-</th>
                    <td>{Math.floor(obj.tdee) } Calories</td>
                </tr>
                <tr>
                    <th>Waist-Hip ratio (WHR)-</th>
                    <td>{obj.whr}</td>
                </tr>
                <tr>
                    <th>Body Shape-</th>
                    <td>{obj.bodyShape}</td>
                </tr>
                <tr>
                    <th>Risk Level</th>
                    <td>{obj.riskLevel}</td>
                </tr>
                </tbody>
            </table>

    </Box>
  : flag?<Loader/>:""}


      </>
  )
}

export default BMICalculator