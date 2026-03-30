function SearchEmployee({ setSearch}){
  return (
    <input placeholder = "Search Employee.." onChange={(e) => setSearch(e.target.value)} style ={{padding:" 8px",width:"250px"}}
    />

  );
}
export default SearchEmployee;