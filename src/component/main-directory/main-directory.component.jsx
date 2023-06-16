import Category from '../categories/categories-container/categories-container.component';
import './main-directory.styles.scss';


export default function MainDirectory({categories}){ 
    return(
        <div className='categories-container'> 
            {categories.map((category) =>
                <Category category={category} key={category.id} />
            )}   
        </div> 
    ); 
}

