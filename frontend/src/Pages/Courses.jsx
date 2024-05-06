import React from 'react'
import List from "../Assets/List.json";
import { Link } from "react-router-dom";
import Card from "../component/Card";

const Courses = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 my-14'>
      <div className='items-center justify-center text-center space-y-5'>

        <h1 className='text-4xl font-bold '>We are delighted to have you here! <span className='text-pink-500'> :) </span> </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora a delectus nesciunt nostrum recusandae nobis exercitationem in quis ipsa ipsam est, magni voluptates. Nostrum fugit error iste rem reprehenderit sequi labore. Commodi nostrum adipisci fugiat, iure itaque sunt. Ab quaerat, itaque suscipit tenetur ipsam facilis ullam magni fugiat quis, ad consectetur consequuntur eveniet iste possimus quae? Quisquam modi totam natus. Neque recusandae ipsum impedit enim quia earum quidem ex corrupti porro doloremque eius, exercitationem veniam deserunt molestias voluptas dicta quam. Quasi quam alias molestiae facere consectetur dolores numquam ratione rerum sed, vel reprehenderit vero? Est aliquid atque quos dolorem aperiam dolore. Ad natus at obcaecati, ratione corrupti, neque, similique laboriosam error exercitationem veniam itaque suscipit unde cupiditate optio inventore ullam beatae dolorem odio sequi? Eveniet nihil accusantium quae consequuntur, eaque dolorem saepe adipisci officiis nemo fuga illo magnam quibusdam laboriosam aliquam quisquam rerum non expedita deleniti, suscipit illum nulla!</p>
        <Link to='/'>
        <button className="btn btn-secondary mt-6">Back</button>
        </Link>
        </div>
      <div className=' mt-6 grid grid-cols-1 space-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {List.map((item) =>(
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Courses
