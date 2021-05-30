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
        <div>
            <h1 className="text-5xl my-10 font-bold">File upload component</h1>
            <form encType="multipart/form-data">
            <input 
                type='file' name="file" ref={fileRef} onChange={displayImages} multiple/>
            <br/>
            <br/>
            <button
                className='btn btn-sm btn-outline-danger'
                onClick={clearInput}
                >clear</button>
                { ' ' }
            <button className="btn-primary" onClick={upload}>upload</button>
            </form>
        </div>
    )
}
export default FileUploader