import React, { useState } from 'react';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.AddBlog(title, body);
        setTitle('');
        setBody('');
    };
    return (
        <div className='flex flex-col items-center'>
           <form onSubmit={handleSubmit}>
            <h2 className=' text-[red] text-center'>Add New Blog</h2>
            <div className="input-container flex flex-col">
                <label htmlFor="title">Title</label>
                <input 
                className='w-[120px] h-[30px] border-2 border-indigo-600'
                type="text" 
                name='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                
                />
            </div>
            <div className="input-container flex flex-col">
                <label htmlFor="body">Body</label>
                <textarea
                className='w-[400px] h-[100px] border-2 border-indigo-600'
                 name="body"
                 value={body}
                 onChange={(e)=> setBody(e.target.value)}
                
                ></textarea>
            </div>
            <button type='submit'className='text-white bg-indigo-600 rounded-sm w-[120px] mt-2 '>Add Blog</button>
            </form> 
        </div>
    );
}

export default AddBlog;
