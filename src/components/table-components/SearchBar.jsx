import IconSearch from "../../assets/images/IconSearch.svg"

const SearchBar = ({ inputHandler }) => {
    return (
        <div className='search-bar'>
            <img src={IconSearch} className='search-icon' />
            <input type="text" className="search-text" placeholder="Search.." onChange={inputHandler} />
        </div>
    )
}

export default SearchBar