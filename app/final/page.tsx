export default function Page (){
    return (
        <>
        <h1 className= "text-3xl"> Final Exam</h1>
        <form>
            <label htmlFor="product">Product Description </label>
            <input type="text" name="product" id="product" className="text-yellow bg-red-700"/>
            <button type="submit">Save</button>
        </form>
        </>
    );
}