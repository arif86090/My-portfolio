import { fa4, faB, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InboxIcon, LinkIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { useForm } from 'react-hook-form';


const Contact = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit =async data => {
        console.log(data);
    }


    return (
        <div className='py-5   px-5 mt-10'>
            <div className='container mx-auto md:px-10'>
            <div className='text-center mt-10'>
                <h2 className='text-3xl font-bold uppercase heading-text'>Contact</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 mt-20'>
                <div>
                <div class="card  bg-base-100 shadow-xl py-5">
                    <div class="card-body">
                     
                     <div className='flex'>
                         <div className='contact-icon bg-primary text-white font-bold'>
                             <LocationMarkerIcon className='LocationMarkerIcon'></LocationMarkerIcon>
                         </div>
                         <div className='ml-5'>
                             <h4 className='text-1xl font-bold text-primary'>Address</h4>
                             <p className='contact-text'>Dinajpur,Bangladesh</p>
                         </div>
                     </div>
                     <div className='flex mt-5'>
                         <div className='contact-icon bg-primary text-white font-bold'>
                             <InboxIcon className='LocationMarkerIcon'></InboxIcon>
                        
                             
                         </div>
                         <div className='ml-5'>
                             <h4 className='text-1xl font-bold text-primary'>Email</h4>
                             <p className='contact-text'>arifhossain68122@gmail.com</p>
                         </div>
                     </div>

                     <div className='flex mt-5'>
                         <div className='contact-icon bg-primary text-white font-bold'>
                             
                             <PhoneIcon className='LocationMarkerIcon'></PhoneIcon>
                             
                         </div>
                         <div className='ml-5'>
                             <h4 className='text-1xl font-bold text-primary'>Phone</h4>
                             <p className='contact-text'>+8801762931601</p>
                         </div>
                     </div>
                       
                    {/* social icons */}
                    <div className='mt-10'>
                        <h2 className='font-bold text-primary mb-4'>Social-Link</h2>
                       <div className='flex '>
                        <div className='social-icon-body border-solid border-2 border-primary hover:bg-primary ease-in duration-300'>
                        
                            <a href=''><i class="fa-brands fa-facebook"></i></a>
                        </div>
                        <div className='ml-3 social-icon-body border-solid border-2 border-primary hover:bg-primary ease-in duration-300'>
                            <a href=''><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className='ml-3 social-icon-body border-solid border-2 border-primary hover:bg-primary ease-in duration-300'>
                            <a href=''><i class="fa-brands fa-skype"></i></a>
                        </div>
                        <div className='ml-3 social-icon-body border-solid border-2 border-primary hover:bg-primary ease-in duration-300'>
                            <a href=''><i class="fa-brands fa-twitter-square"></i></a>
                        </div>
                       </div>
                    </div>
                    </div>
                 </div>
                </div>
                {/* from */}
            <div className='flex justify-center'>
                <div className='card w-96  bg-base-100 shadow-xl'> 
                    <div className=' card-body  '>
                    <form onSubmit={handleSubmit(onSubmit)}>
            
<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text font-bold text-primary">Name</span></label>
    <input type="text" 
    class="input input-bordered w-full max-w-xs" 
    {...register("name", {
        required:{
            value:true,
            message:'Name is required'
        }
      })}
    />
     <label class="label">
     {errors.name?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.name.message}</span> }
     </label>
</div>

<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text font-bold text-primary">Email</span></label>
    <input type="email" 
    class="input input-bordered w-full max-w-xs" 
    {...register("email", {
        required:{
            value:true,
            message:'Email is required'
        },
       pattern:{
           value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
           message:'provide vaild Email '
       }
      })}
    />
     <label class="label">
     {errors.email?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.email.message}</span> }
     {errors.email?.type === 'pattern' &&  <span className="label-text-alt  text-red-500">{errors.email.message}</span> }
        
     </label>
</div>

<div class="form-control w-full max-w-xs">
    <label className="label"><span class="label-text font-bold text-primary">Descripation</span></label>
    <textarea type="text" 
   className="textarea textarea-bordered w-full max-w-xs" placeholder="Discripation"
    {...register("descripation", {
        required:{
            value:true,
            message:'descripation is required'
        }
      })}
    />
     <label class="label">
     {errors.descripation?.type === 'required' &&  <span className="label-text-alt  text-red-500">{errors.descripation.message}</span> }
     </label>
</div>



  
<button type="submit" class="btn btn-primary form-control w-full max-w-xs"  value='Submit' >Submit</button>

</form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;