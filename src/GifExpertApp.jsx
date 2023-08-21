import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


 export const GifExpertApp = () => {


  const [ categories, setCategories ] = useState([ 'One Punch' ]);


  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  //   // categories.push('Valorant') .push se usa para insertar en los arreglos, no usar de momento con reac
  //   // setCategories([ ...categories, 'Valorant' ]); una forma correcta
  //   // setCategories( cat => [ ...categories, 'Valorant' ]); otea forma pero es mejor la anterios

  //   // if ( categories.includes (newCategory) ) return;

  //   // console.log(newCategory)

  // }
 
 
  return (

        <>
            <h1>GifExpertApp</h1>



            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />



            {
                categories.map( ( category ) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }

        </>
   
    )
}
