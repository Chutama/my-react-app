import React, { useState } from 'react';
import './css/App.css';
import './css/index.css';
import { Grid,
         Typography,
         FormControl, 
         TextField,
         Checkbox,
         FormGroup,
         Card,
         CardContent,
          } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



const BpIcon = styled('span')(({ theme }) => ({
borderRadius: '50%',
width: 16,
height: 16,
boxShadow:
  theme.palette.mode === 'dark'
    ? '0 0 0 1px rgb(16 22 26 / 40%)'
    : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
backgroundImage:
  theme.palette.mode === 'dark'
    ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
    : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
'.Mui-focusVisible &': {
  outline: '2px auto rgba(19,124,189,.6)',
  outlineOffset: 2,
},
'input:hover ~ &': {
  backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
},
'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
},
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});


function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}


function App() {

  const [formData, setFormData] = useState({
    fname: '',
    topic: '',
    Option: '',
    // Add other form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <>
      <Grid className='container-header-start'container spacing={1} style={{padding:"20px 5px 0 5px"}}>
        <Card style={{ maxWidth: 800, margin:'0 auto'}} >
          <Typography variant='h4' color={"#4169e1"} 
          style={{ 
            marginTop: '30px', 
            textAlign:'center' ,
            fontFamily: 'Noto sans Thai'}}
            >
              เสนอโครงการ</Typography>
          <form style={{ marginLeft: '45px' , marginRight: '45px' , marginTop: '30px'}} >
            <CardContent>
              <Grid item xs={12} sx={{ marginTop:'10px'}} >
                <Typography 
                sx={{   
                  fontSize: '14px', background: '#f4f0ec', 
                  borderRadius: '3px', 
                  color: 'black', 
                  paddingLeft: '20px',
                  fontFamily: 'Noto sans Thai',
                  marginBottom: '10px' 
                   }} 
                  >
                  ประเภทของโครงการ/กิจกรรม
                </Typography>
              </Grid> 
              <RadioGroup
                name="topic"
                value={formData.topic1}
                onChange={handleChange}
                sx={{marginBottom:'30px'}}
              >
                <FormControlLabel sx={{marginLeft:'10px'}} value="option1" control={<BpRadio/>} label="งานประจําตามโครงสร้าง" />
                <FormControlLabel sx={{marginLeft:'10px' , marginBottom:'30px'}} value="option2" control={<BpRadio/>} label="งานพัฒนาตามกลยุทธ์" />

                  <Grid item xs={12} sx={{ marginTop:'10px' }}>
                    <Typography variant="h6" 
                    sx={{   
                      fontSize: '14px', background: '#f4f0ec', 
                      borderRadius: '3px', 
                      color: 'black', 
                      paddingLeft: '20px',
                      fontFamily: 'Noto sans Thai',
                      marginBottom: '10px' 
                       }}
                      >
                      ความสอดคล้อง
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6} sx={{ marginTop:'10px', justifyContent:'space-between', textAlign:'left'}}>
                    <label htmlFor='text'>ยุทธศาสตร์ประเทศ</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    >
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>ยุทธศาสตร์ที่ 1</MenuItem>
                        <MenuItem value={20}>ยุทธศาสตร์ที่ 2</MenuItem>
                        <MenuItem value={30}>ยุทธศาสตร์ที่ 3</MenuItem>
                      </Select>                 
                    </FormControl>
                    </RadioGroup>
                   </Grid> 

                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>ยุทธศาสตร์ สพฐ.ยุทธศาสตร์ที่</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>ยุทธศาสตร์ที่ 1</MenuItem>
                        <MenuItem value={20}>ยุทธศาสตร์ที่ 2</MenuItem>
                        <MenuItem value={30}>ยุทธศาสตร์ที่ 3</MenuItem>
                      </Select>                     
                    </FormControl>
                    </RadioGroup>
                   </Grid>
                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>มาตรฐานการศึกษาโรงเรียน มาตรฐานที่</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic1}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>มาตรฐานที่ 1</MenuItem>
                        <MenuItem value={20}>มาตรฐานที่ 2</MenuItem>
                        <MenuItem value={30}>มาตรฐานที่ 3</MenuItem>
                      </Select>      
                    </FormControl>
                    </RadioGroup>
                   </Grid>
                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>กลยุทธ์ของโรงเรียน กลยุทธ์ที่ </label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>กลยุทธ์ที่ 1</MenuItem>
                        <MenuItem value={20}>กลยุทธ์ที่ 2</MenuItem>
                        <MenuItem value={30}>กลยุทธ์ที่ 3</MenuItem>
                      </Select>      
                    </FormControl>
                    </RadioGroup>
                   </Grid>
                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>โครงการหลักที่</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>โครงการหลักที่ 1</MenuItem>
                        <MenuItem value={20}>โครงการหลักที่ 2</MenuItem>
                        <MenuItem value={30}>โครงการหลักที่ 3</MenuItem>
                      </Select>      
                    </FormControl>
                    </RadioGroup>
                   </Grid>
                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>กิจกรรมหลักที่</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>กิจกรรมหลักที่ 1</MenuItem>
                        <MenuItem value={20}>กิจกรรมหลักที่ 2</MenuItem>
                        <MenuItem value={30}>กิจกรรมหลักที่ 3</MenuItem>
                      </Select>      
                    </FormControl>
                    </RadioGroup>
                   </Grid>   
                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>วัตถุประสงค์โครงการที่</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic1}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>วัตถุประสงค์โครงการที่ 1</MenuItem>
                        <MenuItem value={20}>วัตถุประสงค์โครงการที่ 2</MenuItem>
                        <MenuItem value={30}>วัตถุประสงค์โครงการที่ 3</MenuItem>
                      </Select>      
                    </FormControl>
                    </RadioGroup>
                   </Grid>   
                   <Grid item xs={12} sm={6} sx={{ marginTop:'10px'}}>
                    <label htmlFor='text'>ตัวชี้วัดความสําเร็จที่</label>
                    <RadioGroup
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}>
                    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                      <InputLabel id="demo-select-small-label">เลือก</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={formData.topic1}
                        label="เลือก"
                        onChange={handleChange}
                      >       
                        <MenuItem value={10}>ตัวชี้วัดความสําเร็จที่ 1</MenuItem>
                        <MenuItem value={20}>ตัวชี้วัดความสําเร็จที่ 2</MenuItem>
                        <MenuItem value={30}>ตัวชี้วัดความสําเร็จที่ 3</MenuItem>
                      </Select>      
                    </FormControl>
                    </RadioGroup>
                   </Grid>
              </RadioGroup>
            </CardContent>

            <Grid container spacing={1} className='md-2'>
              <Grid Grid item xs={12} sx={{ marginTop:'10px'}}>
                <Typography variant="h6" 
                sx={{   
                  fontSize: '14px', background: '#f4f0ec', 
                  borderRadius: '3px', 
                  color: 'black', 
                  paddingLeft: '20px',
                  fontFamily: 'Noto sans Thai',
                  marginBottom: '10px' 
                   }}
                  >
                  ประเภทงบประมาณ
                </Typography>
                </Grid>
                <RadioGroup
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  sx={{ marginBottom: '20px'}}
                >
                <FormControlLabel sx={{marginLeft:'10px'}} value="topic1" control={<BpRadio />} label="งบด้านวิชาการ" />
                <FormControlLabel sx={{marginLeft:'10px'}} value="topic2" control={<BpRadio />} label="งบบริหารทั่วไป" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} sx={{marginTop:'10px'}}>
              <Grid Grid item xs={12} >
                <Typography variant="h6" 
                sx={{   
                  fontSize: '14px', background: '#f4f0ec', 
                  borderRadius: '3px', 
                  color: 'black', 
                  paddingLeft: '20px',
                  fontFamily: 'Noto sans Thai',
                  marginBottom: '10px' 
                   }}
                  >
                    ลักษณะของโครงการ
                </Typography>
             <RadioGroup
              name="option"
              value={formData.topic}
              onChange={handleChange}
              sx={{ marginBottom: '30px'}}
              >
                <FormControlLabel sx={{marginLeft:'10px'}} value="option1" control={<BpRadio />} label="ใหม่" />
                <FormControlLabel sx={{marginLeft:'10px'}} value="option2" control={<BpRadio />} label="เก่า" />
                <FormControlLabel sx={{marginLeft:'10px'}} value="option3" control={<BpRadio />} label="ต่อเนื่อง" />
              </RadioGroup>
              </Grid>
              <Grid item xs={12} >
              <Typography variant="h6"
              sx={{   
                fontSize: '14px', background: '#f4f0ec', 
                borderRadius: '3px', 
                color: 'black', 
                paddingLeft: '20px',
                fontFamily: 'Noto sans Thai',
                marginBottom: '10px' 
                 }}
              >
                  ชื่อโครงการ/กิจกรรม
                </Typography>
                <TextField sx={{ marginTop: '5px', marginBottom:'30px' }} size='small' fullWidth placeholder='กรอกชื่อโครงการ/กิจกรรม'></TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" 
                sx={{   
                  fontSize: '14px', background: '#f4f0ec', 
                  borderRadius: '3px', 
                  color: 'black', 
                  paddingLeft: '20px',
                  fontFamily: 'Noto sans Thai',
                  marginBottom: '10px' 
                   }}
                  >
                    รายละเอียดโครงการ
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}  sx={{ marginTop:'10px'}}  >  
                <label htmlFor='text'>จุดมุ่งหมาย (Goal)</label>
                <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='สาระสำคัญ'></TextField>
                <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='ตัวชี้วัดความสำเร็จ/เป้าหมาย'></TextField>
                <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เงื่อนไขความสำเร็จ'></TextField>
              </Grid>
              <Grid item xs={12}  md={6} sx={{ marginTop:'10px'}} >
                  <label htmlFor='text'>วัตถุประสงค์ (Purpose)</label>
                    <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='สาระสำคัญ'></TextField>
                    <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='ตัวชี้วัดความสำเร็จ/เป้าหมาย'></TextField>
                    <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เงื่อนไขความสำเร็จ'></TextField>
              </Grid>

              <Grid item xs={12}  md={6} sx={{ marginTop:'10px'}}>
                 <label htmlFor='text'>ผลผลิต/ผลงาน (Output)</label>
                   <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='สาระสำคัญ'></TextField>
                   <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='ตัวชี้วัดความสำเร็จ/เป้าหมาย'></TextField>
                   <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เงื่อนไขความสำเร็จ'></TextField>
              </Grid>

              <Grid item xs={12}  md={6}  sx={{ marginTop:'10px'}}>                               
                  <label htmlFor='text'>กิจกรรม (Activities)</label>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='สาระสำคัญ'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='ตัวชี้วัดความสำเร็จ/เป้าหมาย'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เงื่อนไขความสำเร็จ'></TextField>
              </Grid>

              <Grid item xs={12}  md={6} sx={{ marginTop:'10px'}}>
                  <label htmlFor='text'>ปัจจัย (Input)</label>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='สาระสำคัญ'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='ตัวชี้วัดความสำเร็จ/เป้าหมาย'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เงื่อนไขความสำเร็จ'></TextField>
              </Grid>

              <Grid item xs={12} sx={{ marginTop:'10px'}} >
                <Typography variant="h6" 
                sx={{   
                  fontSize: '14px', background: '#f4f0ec', 
                  borderRadius: '3px', 
                  color: 'black', 
                  paddingLeft: '20px',
                  fontFamily: 'Noto sans Thai',
                  marginBottom: '10px' 
                   }} 
                  >
                    หลักฐานแหล่งพิสูจน์
                </Typography>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='แหล่งข้อมูล'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='วิธีการประเมิน'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เครื่องมือ'></TextField>
              </Grid>

              <Grid item xs={12} sx={{marginTop:'10px'}}>
                <label htmlFor='text'>ระยะเวลาดำเนินการ</label>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='เริ่มต้น'></TextField>
                  <TextField sx={{ marginTop: '5px' }} size='small' fullWidth placeholder='สิ้นสุด'></TextField>
              </Grid>

              <Grid item xs={12} md={12} sx={{marginTop:'10px'}}>
                <label htmlFor='text'>ผู้รับผิดชอบ</label>
                <Select size='small' sx={{ background: '#fff', marginTop: '10px' }} fullWidth value={'เลือกผู้รับผิดชอบ'}>
                    <MenuItem value="เลือกผู้รับผิดชอบ">เลือกผู้รับผิดชอบ</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={12} align='left' sx={{marginTop:'10px'}}>
                <Typography variant="h6" 
                sx={{   
                  fontSize: '14px', background: '#f4f0ec', 
                  borderRadius: '3px', 
                  color: 'black', 
                  paddingLeft: '20px',
                  fontFamily: 'Noto sans Thai',
                  marginBottom: '10px' 
                   }} 
                  >
                    งบประมาณ
                </Typography>
                <FormControl component="fieldset" sx={{ marginLeft: '10px', fontSize: '16px' }}>
                    <FormGroup >
                        <FormControlLabel
                            value="เงินอุดหนุนเงินค่าเล่าเรียน"
                            control={<Checkbox />}
                            label="เงินอุดหนุนเงินค่าเล่าเรียน"
                        />
                        <FormControlLabel
                            value="เงินอุดหนุนกิจกรรมพัฒนาผู้เรียน"
                            control={<Checkbox />}
                            label="เงินอุดหนุนกิจกรรมพัฒนาผู้เรียน"
                        />
                        <FormControlLabel
                            value="เงินรายได้สถานศึกษา"
                            control={<Checkbox />}
                            label="เงินรายได้สถานศึกษา"
                        />
                        <FormControlLabel
                            value="เงินอื่นๆ"
                            control={<Checkbox />}
                            label="เงินอื่นๆ"
                        />
                    </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </>
  );
}

export default App;
