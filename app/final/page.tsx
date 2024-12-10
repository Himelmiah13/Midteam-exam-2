export default function Page (){
    return (
        <>
        <h1 className= "text-3xl ml-5 text-red-800 font-bold text-center"> FINAL EXAM FOR 343</h1>
        <form>
            <label htmlFor="product" >Customer Rating Based on the Quality of the food in terms of taste and qunatity</label>
            <input 
            type="text" name="product" id="product" className=" m-5 text-3xl text-black bg-orange-700 border-solid"/>
            <br />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg 
  className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>SAVE</span>
</button>
<br />
<select className="select select-accent w-full max-w-xs mt-10 mb-5">
  <option disabled selected>Pick one item from the Select box after clicking?</option>
  <option>FOOD</option>
  <option>RESTAURANT</option>
  <option>FOOD BLOCKER</option>
</select>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-2xl font-medium text-purple-900 dark:text-white-300">First Menu is Difference Biryani</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-2xl font-medium text-purple-900 dark:text-white-300">Second Menu is Difference Appetizer</label>
</div>
<div className="flex">
    <div className="flex items-center me-4">
        <input id="inline-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-checkbox" className="ms-2 text-3xl font-medium text-yellow-900 dark:text-yellow-300"> Desi Biryani</label>
    </div>
    <div className="flex items-center me-4">
        <input id="inline-2-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label  htmlFor="inline-2-checkbox" className="ms-2 text-3xl font-medium text-blue-900 dark:text-blue-300">Top NYC Culture Food</label>
    </div>
    <div className="flex items-center me-4">
    <input id="inline-2-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  htmlFor="inline-2-checkbox" className="ms-2 text-3xl font-medium text-red-500 dark:text-red-500">Top 10 listed </label>
    </div>
    <div className="flex items-center">
    <input id="inline-2-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  htmlFor="inline-2-checkbox" className="ms-2 text-3xl font-medium text-pink-900 dark:text-pink-300">Food Item</label>
    </div>
</div>
</form>
        </>
    );
}