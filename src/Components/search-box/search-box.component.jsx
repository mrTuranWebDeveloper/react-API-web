import "./search-box.style.css"

const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <div>
    <input type="search" placeholder={placeholder} className={`search-box ${className}`} onChange={onChangeHandler}/>
    </div>

)
   


export default SearchBox