import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getuploadbook")
      .then((res) => res.json())
      .then((data) => {
        setbook(data);
      });
    console.log(book);
  }, []);
  return (
    <div>
      <h2 className="my-20 text-3xl font-bold text-center">Book On Sells</h2>
      <div className="flex flex-wrap gap-4 justify-center items-center">
      {book.map((b, index) => (
        <div key={index}>
          <Card sx={{ maxWidth: 345 }}>
          <div className="flex justify-center">
          <img src={b.imageurl} alt="" className="h-[220px] w-[180px] text-center flex justify-center"/>
          </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {b.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
               {b.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" >Buy Now</Button>
              <Button size="small" sx={{backgroundColor:'blue', color:'#fff', borderRadius:"10px", padding:'5px'}}>Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default Blog;
