export default function Page (){
    return (
        <>
        <h1 className= "text-3xl ml-5"> Final Exam</h1>
        <form>
            <label htmlFor="product">Product Description </label>
            <input type="text" name="product" id="product" className=" m-5 text-yellow bg-red-700"/>
            <br />
            <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
            <button className=" ml-10 focus: outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-1g text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark: hover: bg-green-700 dark: focus:ring-green-800" type="submit">Save</button>
        </form>
        </>
    );
}