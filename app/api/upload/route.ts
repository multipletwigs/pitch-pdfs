import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer'; 

// Read blob data
const upload = multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  }),
});


export async function POST(request: Request) {

  const formData = await request.formData(); 
  
  // For each file in the form, do something with it
  for (const entry of formData.entries()) {
    upload.single('pdf')
  }
  

  return NextResponse.json({ message: `Hello world` });
}