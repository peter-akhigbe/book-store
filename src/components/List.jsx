export default function List() {
 const books = [
   { id: 1, title: 'Book 1', category: 'Action' },
   { id: 2, title: 'Book 2', category: 'Romance' },
   { id: 3, title: 'Book 3', category: 'Horror' },
 ];
 return (
   <div>
     <h2>Books</h2>
     <ul>
       {books.map((book) => (
         <div>
           <li>{book.title}</li>
           <li>{book.category}</li>
           <button type="button">Remove</button>
         </div>
       ))}
     </ul>
   </div>
 );
};
