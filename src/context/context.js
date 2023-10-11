import { createContext, useState } from "react";
import { cardData } from "../mockData/chartData";


export const MESSAGE_COMPONENT = createContext(null);
export function Context({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState({ name: 'Cell Phones Charging Stations 1', value: 1 });
  const [selectedGraphData, setSelectedGraphData] = useState([
    [
      200,
      2000
    ],
    [
      250,
      2002
    ],
    [
      280,
      2004
    ],
    [
      350,
      2006
    ],
    [
      480,
      2008
    ]
  ]);
  const[tooltipData,setTooltipData]=useState( [{ type: "text", title: "Title Change", desc: "2 in 1 Portable Wireless Charging Station for iPhone", date: "Jun-10-2023", price: '20.43' },
  { type: "title", title: "Circle", desc: "3 in 1 Portable Wireless Charging Station for iPhones", date: "Dec-12-2022", price: '22.43' },
  { type: "gallery", title: "Gallery", desc: "3 in 1 Portable Wireless Charging Station for iPhone", date: "Jul-10-2023", price: '29.43' },
  { type: "copy", title: "Copy", desc: "3 in 1 Portable Wireless Charging Station for iPhone", date: "Aug-10-2023", price: '50.43' },
  { type: "menu", title: "Menu Humburger", desc: "3 in 1 Portable Wireless Charging Station for iPhone", date: "Feb-10-2023", price: '25.43' },
  { type: "file", title: "File", desc: "3 in 1 Portable Wireless Charging Station for iPhone", date: "Sep-12-2023", price: '19.43' },
  { type: "video", title: "Video", desc: "2 in 1 Portable Wireless Charging Station for iPhone", date: "Oct-10-2023", price: '20.43' }
  ])

  const [chart, setChart] = useState(null);

  const handleGraphData = (data) => {
    let mainArr = [];
    data.map((i,index) => {
      let arr = [];
      arr.push(i.price);
      arr.push(i.year);
      mainArr.push(arr);

    });
    setSelectedGraphData(mainArr);
  }


  const handleGroup = (data) => {
    setSelectedGroup(data);
    cardData.map((card) => {
      if (data.value === card.groupID) {
        handleGraphData(card.productData[0].graphData);
      }
    })
  }

  const handleToolTip=(data)=>{
    setTooltipData(data)
  }

  return (
    <MESSAGE_COMPONENT.Provider value={{ isOpen, setIsOpen, selectedGroup, setSelectedGroup, selectedGraphData, setSelectedGraphData, chart, setChart, handleGroup,handleGraphData ,handleToolTip,tooltipData}}>
      {children}
    </MESSAGE_COMPONENT.Provider>
  );
}