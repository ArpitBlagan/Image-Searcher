import React from 'react';
import ImageCard from './ImageCard';
function Image(props){
    const f=
       props.imm.map((image)=>{
        return <ImageCard 
            key={image.id}
            image={image}
        />;
       });
    return <div className='imagelist'>{f}</div>;
}
export default Image;