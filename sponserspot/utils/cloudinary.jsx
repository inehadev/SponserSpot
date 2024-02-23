import axios from "axios";



 export const UploadImageOnCloudinary = async (imageData) =>{
    let Imagedata = '';
    let formdata = new FormData();
      formdata.append("file" , imageData[0]);
      formdata.append("upload_preset" , "imagepreset");
     await axios.post("https://api.cloudinary.com/v1_1/drd0h8ihm/upload" , formdata , {
          onDownloadProgress:(ProgressEvent)=>{
            console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
          }
      }).then(response=>{
          Imagedata = response.data.url;
      });

    return Imagedata;

}




// const formNow  = new FormData();

// console.log("all good ")
// formNow.append("file" , image)
// formNow.append("upload_preset" , "imagepreset")
// formNow.append("cloud_name" ,"drd0h8ihm")
//  console.log("working")
// fetch("https://api.cloudinary.com/v1_1/drd0h8ihm/image/upload" , ({
//     method:"post",
//     body:formNow
// })).then((res)=>res.json())
// // console.log("fine") 
// .then((data)=>{
//     console.log("data geted");
//     console.log(data.url);
//     responseUrl = data;
// }).catch((error)=>{
//     console.log(error)
// })

