"use client" ;

import { OurFileRouter, ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
import { UploadButton } from "../lib/uploadthing";
// write import statement from uploadthing in lib folder

interface FileUploadProps {
    onChange : (url ?: string) => void ;
    endpoint : keyof typeof ourFileRouter ;
} ;

export const FileUpload = ({
    onChange , 
    endpoint
} : FileUploadProps) => {
    return (
        <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url) ;
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.message}`);
        }}
      />
    )
} ;