import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExport from "highcharts/modules/exporting";
import HighchartsMore from "highcharts/highcharts-more";
import * as React from "react";
import { MdFavorite } from 'react-icons/md';
import { GrGallery } from 'react-icons/gr';
import { FaRegCopy } from 'react-icons/fa';
import { PiTextTBold } from 'react-icons/pi';
import { BsFileText } from 'react-icons/bs';
import { AiFillCaretDown } from 'react-icons/ai';
import { CiVideoOn } from 'react-icons/ci';
import { AiFillCopyrightCircle } from 'react-icons/ai';

import { Tooltip as CustomTooltip } from "./tooltip";
import { MESSAGE_COMPONENT } from "../context/context";

if (typeof Highcharts === "object") {
  HighchartsExport(Highcharts);
  HighchartsMore(Highcharts);
}

export const Chart = () => {
  const { selectedGraphData, chart, setChart, tooltipData } = React.useContext(MESSAGE_COMPONENT);

  let [over, setOver] = React.useState({ title: false, copy: false, gallery: false, text: false, file: false, video: false, menuHamburger: false });
  const chartOptions = {
    chart: {
      type: "line"
    },
    title: {
      text: ""
    },

    series: {
      name: "series1",
      id: "series1",
      type: "line",
      data: selectedGraphData,
      lineWidth: 2,

    },
    tooltip: {
      style: {
        pointerEvents: "auto",
        cursor: "pointer"
      },
      snap: 0,
      followPointer: false,
      followTouchMove: false,
      valueDecimals: 2,
      stickOnContact: true
    },
    plotOptions: {
      series: {
        stickyTracking: false
      }
    },
  };


  const callback = React.useCallback((chart) => {
    setChart(chart);
  }, []);


  const handleHover = (type, value) => {
    setOver({ [type]: value })
  }
  return (
    <div>
      <div className="mt-5 chart-box">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          callback={callback}
        />


        {chart !== null && <CustomTooltip chart={chart}>
          {(formatterContext) => {
            let textData = tooltipData.filter((data) =>
              over.text && data.type === 'text'
            );
            let titleData = tooltipData.filter((data) =>
              over.title && data.type === 'title'
            );
            let galleryData = tooltipData.filter((data) =>
              over.gallery && data.type === "gallery"
            );
            let copyData = tooltipData.filter((data) =>
              over.copy && data.type === "copy"
            );
            let menuData = tooltipData.filter((data) =>
              over.menu && data.type === "menu"
            );
            let fileData = tooltipData.filter((data) =>
              over.file && data.type === "file"
            );
            let videoData = tooltipData.filter((data) =>
              over.video && data.type === 'video'
            )
            let tooltipDataCopy = [
              {
                  "type": "title",
                  "title": "Circle",
                  "desc": "3 in 1 Portable Wireless Charging Station for iPhone",
                  "date": "Jun-10-2023",
                  "price": "20.43"
              }
          ]
            if (textData.length > 0) {
              tooltipDataCopy = textData
            }
            if (titleData.length > 0) {
              tooltipDataCopy = titleData
            }
            if (galleryData.length > 0) {
              tooltipDataCopy = galleryData
            }
            if (copyData.length > 0) {
              tooltipDataCopy = copyData
            }
            if (menuData.length > 0) {
              tooltipDataCopy = menuData
            }
            if (fileData.length > 0) {
              tooltipDataCopy = fileData
            }
            if (videoData.length > 0) {
              tooltipDataCopy = videoData
            }
            console.log({tooltipDataCopy})
            return (
              <>
                <div className="flex gap-[10px] tool-icons">
                  <AiFillCopyrightCircle className="text-sm cursor-pointer" onMouseOver={() => handleHover('title', true)}
                    onMouseOut={() => handleHover('title', false)}
                  />
                  <GrGallery
                    className="text-sm cursor-pointer"
                    onMouseOver={() => handleHover('gallery', true)}
                    onMouseOut={() => handleHover('gallery', false)}
                  />
                  <FaRegCopy className="text-sm cursor-pointer" onMouseOver={() => handleHover('copy', true)}
                    onMouseOut={() => handleHover('copy', false)} />
                  <PiTextTBold
                    className="text-sm cursor-pointer"
                    onMouseOver={() => handleHover('text', true)}
                    onMouseOut={() => handleHover('text', false)}
                  />
                  <MdFavorite
                    className="icon text-sm cursor-pointer"
                    onMouseOver={() => handleHover('menu', true)}
                    onMouseOut={() => handleHover('menu', false)} />
                  <BsFileText
                    className="text-sm cursor-pointer"
                    onMouseOver={() => handleHover('file', true)}
                    onMouseOut={() => handleHover('file', false)}

                  />
                  <CiVideoOn
                    className="text-sm cursor-pointer"
                    onMouseOver={() => handleHover('video', true)}
                    onMouseOut={() => handleHover('video', false)}

                  />
                  <AiFillCaretDown className="arrow-icon" />
                </div>

                {tooltipDataCopy.length > 0 && <div className="upper-toolbox"> {tooltipDataCopy.map((i) => <div><p className="text-start text-[#00dd82] font-bold mb-1">{i.title}</p><p className="text-start text-[#00dd82] font-bold mb-1">{i.date}</p><p className="text-start text-[#00dd82] font-bold mb-1 break-normal">{i.desc}</p></div>)}  <AiFillCaretDown className="arrow-icon-second" /> </div>}


              </>
            );
          }}
        </CustomTooltip>}


      </div>
    </div>
  );
};
