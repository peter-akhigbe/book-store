export default function Form() {
  return (
    <form action="">
      <input type="text" placeholder="Title" required id="title" name="title" />
      <select name="category" id="category">
        <option disabled selected value="">
          Category
        </option>
        <option value="Action">Action</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}
