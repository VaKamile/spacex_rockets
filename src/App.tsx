import RocketsTable from './components/molecules/RocketsTable';
import SearchFilter from './components/molecules/SearchFilter';

function App() {
  return (
    <div>
      <SearchFilter data={ISearchFilterData} />
      <h1>Rocket Data</h1>
      <RocketsTable />
    </div>
  );
}

export default App;
