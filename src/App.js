import { Chart } from './components/chart';
import Dropdown from './components/dropdown';
import LeftPanel from './components/leftPanel';
import { Context } from './context/context';

function App() {

  return (
    <Context>
      <div className="p-[50px]">
      <Dropdown />
      <div className='flex mt-[50px] gap-[50px]'>
      <LeftPanel/>
      <Chart/>
      </div>
      </div>
    </Context>
  );
}

export default App;
