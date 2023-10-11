import { useContext } from "react";
import { cardData } from "../mockData/chartData";
import { MESSAGE_COMPONENT } from "../context/context";
function LeftPanel() {
  const { selectedGroup, handleGraphData, handleToolTip } = useContext(MESSAGE_COMPONENT);

  return (
    <div className="w-[400px]">  
    <p className="font-bold text-[#00dd82] mb-1">Asins</p>
      {cardData.map((card) => {
        return selectedGroup.value === card.groupID &&
          card.productData.map((data,index) =>
            <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex gap-[10px] border rounded mb-2 overflow-hidden rounded p-[5px] cursor-pointer" onClick={() => { handleGraphData(data.graphData); handleToolTip(data.tooltipTitle) }}>

              <div className="w-[100px] h-[100px] flex-none bg-cover rounded text-center overflow-hidden" style={{ backgroundImage: `url(${data.image})` }} title="Woman holding a mug">
              </div>
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                  <div className="text-gray-900 font-bold text-sm">{data.name}</div>
                </div>
                <div className="flex items-center gap-[5px]">
                  <img className="w-[20px] h-[20px] rounded-full" src={data.image} alt="Avatar of Jonathan Reinink" />
                  <div className="text-sm">
                    <p className="text-gray-600">USD{data.price}</p>
                  </div>
                </div>
              </div>
            </div>
          )
      }
      )}

    </div>

  );
}

export default LeftPanel;
