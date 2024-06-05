import './components.css';
import greenBook from '../assets/images/green_book.png';
import Shelf_Object from './Shelf_Object.js';
import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import polaroid from "../assets/images/polaroid.png";
import bottle from "../assets/images/bottle.svg";
import blank from "../assets/images/blank_object.png";


function Bookshelf() {

  const objects = [
    {
        name: "Journal 1",
        obj_type: "Journal",
        imgUrl: book1,
    },
    {
        name: "Journal 2",
        obj_type: "Journal",
        imgUrl: book2,
    },
    {
      name: "Journal 3",
      obj_type: "Journal",
      imgUrl: book3,
    },
    {
      name: "Bottle 1",
      obj_type: "Object",
      imgUrl: bottle,
  },
  {
      name: "Polaroid 1",
      obj_type: "Polaroid",
      imgUrl: polaroid,
  },
];
  const blankObject = {
    name: "Add",
    obj_type: "Add",
    imgUrl: blank,
  }
  let rows = [];
  for (let i = 0; i < objects.length; i += 3) {
    const rowobjects = objects.slice(i, i + 3);
    rows.push(rowobjects);
  }
  rows[rows.length - 1].push(blankObject);
  // make a list of objects and function to add items
  return (
    <div className="bookshelf">
      {rows.map((row, index) => (
        <div key={index} className="shelfRow">
          {row.map((item, idx) => (
            <div key={idx}>
              <Shelf_Object 
                key={idx} 
                name={item.name} 
                obj_type={item.obj_type}
                imgUrl={item.imgUrl} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Bookshelf;
