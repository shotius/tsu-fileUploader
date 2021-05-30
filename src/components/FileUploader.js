import React, { useRef } from 'react'

const FileUploader = () => {
    const fileRef = useRef()

    const upload = () => {
        fileRef.current.value = null
        alert("data was sent")
        
    }
    const clearInput = () => {
        fileRef.current.value = null
    }
    const displayImages = () => {
        console.log(fileRef.current.files)
        // for (let file in fileRef.current.files){
        //     console.log(file)
        // }
        // URL.createObjectURL(fileRef.current.files[0])
    }

    return (
        <div className="flex flex-col">
            <h1 className="flex-1 text-5xl my-10 font-bold">File upload component</h1>
            <form encType="multipart/form-data">
            {/* <label>
            <input 
                className="w-full mb-10 "
                type='file' 
                ref={fileRef} 
                onChange={displayImages} 
                accept="image/png, image/gif, image/jpeg"
                multiple />
                Attach
            </label> */}
            <div className="flex flex-col items-center justify-center bg-grey-lighter">
                <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
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
                        />
                </label>
                <div className="my-6">
                    <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-4 rounded-md'
                        onClick={clearInput}
                        >clear</button>
                    <button 
                        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                        onClick={upload}
                        >upload</button>
                </div>
            </div>
            </form>
        </div>
    )
}
export default FileUploader