
import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const generateTooltipId = (chartId) =>
  `highcharts-custom-tooltip-${chartId}`;



export const Tooltip = ({ chart, children }) => {
  console.log({chart})
  const isInit = useRef(false);
  const [context, setContext] = useState(
    null
  );

  useEffect(() => {
    if (chart) {
      const formatter = function () {
        if (!isInit.current) {
          isInit.current = true;
          chart.tooltip.refresh.apply(chart.tooltip, [this.point]);
          chart.tooltip.hide(0);
        }

        setContext(this);

        return `<div id="${generateTooltipId(chart.index)}" class="px-3 w-full bg-[#00dd82] rounded py-[10px] mb-[5px]"></div>`;
      };

      chart.update({
        tooltip: {
          formatter,
          useHTML: true,
          enabled:true
        }
      });
    }
  }, [chart]);

  const node = chart && document.getElementById(generateTooltipId(chart.index));

  return node && context
    ? ReactDOM.createPortal(children(context), node)
    : null;
};
