import {useState, useEffect} from 'react'
import {Box,  Typography} from '@mui/material'
import Videos from './Videos';
import {fetchFromAPI} from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm}=useParams();// lấy được id của video

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`) // Tham số part=snippet cho biết rằng phản hồi phải bao gồm một đoạn thông tin về kết quả.
      .then((data)=>setVideos(data.items))              //Tham số q=${searchTerm} bao gồm searchTerm giá trị biến trong truy vấn tìm kiếm, có thể là từ khóa hoặc cụm từ tìm kiếm do người dùng nhập.
  },[searchTerm])

  return (
    <Box p={2} sx={{overflow:'auto', height:'90vh',flex:2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          Search result for : 
        <span style={{color:'#F31503'}}>{searchTerm}</span>
        videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed