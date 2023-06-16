import Card from '../category-card/category-card.component'
import './categories-container.styles.scss';

export default function Category({category}){ 
    const { id, title, imageUrl } =  category;
    return(   
            <Card title={title} imageUrl={imageUrl} key={id}/> 
    );

}