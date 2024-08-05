import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, title, description,description2,description3,description4, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                description2={description2}
                description3={description3}
                description4={description4}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName= {titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid