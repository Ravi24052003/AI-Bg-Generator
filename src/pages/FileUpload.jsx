import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const FileUpload = () => {
  const [formData, setFormData] = useState(new FormData());
  const [fileName, setFileName] = useState("");
  const [pending, setPending] = useState(false);
  const [fileSelected, setFileSelected] = useState(false); 
  const [error, setError] = useState("");
  const [fulfilledResult, setFulfilledResult] = useState([]);
  const fileInputRef = useRef(null);

  const onFileSelection = function(e) {
    const file = e.target.files[0];
    console.log("e.target.files[0]", e.target.files[0]);
    setFileName(e.target.files[0].name);
    formData.append("avatar", file);
    setFileSelected(true); 
    setFormData(formData);
  }

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  const fileUpload = async function() {
    if (!fileSelected) {
      console.log("Please select a file");
      setError("Please select a file");
      return;
    }

    try {
      setPending(true);

      const response = await axios.post("http://localhost:8080/image", formData);

      console.log("File uploaded successfully", response);
      console.log("File uploaded successfully", response.data.imageUrl);

      setFulfilledResult((preVal)=> [...preVal, response.data]); // response.data should be an array of image urls or single image url inside an array
      setPending(false);
      setFileSelected(false);
      setFormData(new FormData());
      setFileName("");
      setError("");
      
      console.log("fileName ", fileName);
    } catch (error) {
      setPending(false);
      console.log("Oops! Something went wrong:", error);
    }
  }


  useEffect(()=>{
    setPending(true)
  axios.get("http://localhost:8080/images")
  .then((response)=>{
    setPending(false)
   console.log("response in the useEeft", response);

   setFulfilledResult(response.data?.imagesArray);

  })
  .catch(()=>{
    setPending(false)
  })

  }, [])

  return (
    <div>
 {
pending?  

<Box className=" flex items-center justify-center h-[50vh]">
<CircularProgress />
</Box>


:


    
<div >

<div  className=' flex flex-col items-center mt-10 font-semibold text-lg'>
<p>{fileName}</p>
      <input type="file" ref={fileInputRef} onChange={onFileSelection} className=' hidden' />
      <button onClick={handleButtonClick} className={ ` ${fileSelected? "bg-indigo-700" : "bg-indigo-400" } text-white px-4 py-1 rounded mb-5` } >{fileSelected? <span>File Selected</span>  : <span>Select File</span> }</button>
      <button onClick={fileUpload} className={` ${fileSelected? "bg-green-600" : "bg-green-500"} px-4 text-white py-1 rounded ` }>Upload the image</button>
      <p className=' text-red-500'>{error}</p>
</div>


    <div className=' mt-3 flex justify-start items-start md:gap-5 gap-2 mx-2 flex-wrap'>
    {(fulfilledResult?.length > 0) && fulfilledResult?.map((imageObj, i)=><div key={i}> <img src={imageObj?.imageUrl} alt="" width={250} /> </div> )}
    </div>

    
</div>


 }
 
    
    </div>
  )
}

export default FileUpload;
