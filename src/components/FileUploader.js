import React, { useEffect, useRef, useState } from 'react'
import close from './close.svg'

const FileUploader = () => {
    const [isFileUploaded, setIsFileUploaded] = useState(false)
    const [paths, setPath] = useState([])
    const fileRef = useRef()

    const upload = () => {
        alert("data was sent")
        clearInput()
        
    }
    const clearInput = () => {
        setPath([])
        fileRef.current.value = null
    }

    const displayImages = () => {
        let arr = []
        for (let key in fileRef.current.files){
            if (!isNaN(key)) {
                arr = arr.concat(URL.createObjectURL(fileRef.current.files[key]))
            }
        }
        setIsFileUploaded(true)
        setPath(arr)
    }

    const removeImg = (index) => {
        // create array from files object
        let fileBuffer = Array.from(fileRef.current.files);
        fileBuffer.splice(index, 1);

        const dT = new ClipboardEvent('').clipboardData || // Firefox < 62 workaround exploiting https://bugzilla.mozilla.org/show_bug.cgi?id=1422655
            new DataTransfer(); // specs compliant (as of March 2018 only Chrome)

        for (let file of fileBuffer) { dT.items.add(file); }
        fileRef.current.files = dT.files;
        displayImages()
    }

    return (
        <div className="flex flex-col">
            <h1 className="flex-1 text-5xl my-10 font-bold">File upload component</h1>
            {/* file upload */}
            <div className="flex flex-col items-center justify-center bg-grey-lighter">
                <label className="transform duration-100 w-2/4 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <input 
                        ref={fileRef}
                        type='file' 
                        className="hidden"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={displayImages} 
                        multiple
                        />
                </label>
                {/* display uploaded pictures */}
                <div className="flex justify-start flex-wrap w-2/4 flex-row my-2 px-1">
                    {isFileUploaded 
                    && 
                    paths.map((path, i) =>(
                        <div  key={i} className="w-20 h-20 m-px relative">
                            <button 
                                onClick={() => removeImg(i)}
                                className="w-5 h-5 absolute top-1 right-1 focus:outline-none transform hover:scale-125 duration-100">
                                <img src={close} alt="pic" className="w-full h-full"/>
                            </button>


                            <img src={path} className="w-full h-full"/>
                        </div>
                    ))
                
                    }
                </div>
                {/* buttons */}
                <div className="my-6">
                    <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded-md focus:outline-none'
                        onClick={clearInput}
                        >clear all</button>
                    <button 
                        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md outline-none focus:outline-none"
                        onClick={upload}
                        >upload</button>
                </div>
            </div>
        </div>
    )
}
export default FileUploader