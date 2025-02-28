"use client";

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
  StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import '../../../App.css'
import getData from "./data";
import { AgChartsEnterpriseModule } from "ag-charts-enterprise";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
  createGrid,
} from "ag-grid-community";
import {
  ColumnMenuModule,
  ContextMenuModule,
  IntegratedChartsModule,
  RowGroupingModule,
} from "ag-grid-enterprise";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  IntegratedChartsModule.with(AgChartsEnterpriseModule),
  ColumnMenuModule,
  ContextMenuModule,
  RowGroupingModule,
  ValidationModule /* Development Only */,
]);

let chartRef;

const GridExample = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "period",
      chartDataType: "category",
      headerName: "Financial Period",
      width: 150,
    },
    {
      field: "recurring",
      chartDataType: "series",
      headerName: "Recurring revenue",
    },
    {
      field: "individual",
      chartDataType: "series",
      headerName: "Individual sales",
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);
  const popupParent = useMemo(() => {
    return document.body;
  }, []);
  const chartToolPanelsDef = useMemo(() => {
    return {
      defaultToolPanel: "settings",
    };
  }, []);

  const onGridReady = useCallback((params) => {
    getData().then((rowData) => params.api.setGridOption("rowData", rowData));
  }, []);
  

  const onFirstDataRendered = useCallback((params) => {
    chartRef = params.api.createRangeChart({
      chartContainer: document.querySelector("#myChart"),
      cellRange: {
        columns: ["period", "recurring", "individual"],
      },
      chartType: "groupedColumn",
    });
  }, []);

  const updateChart = useCallback(
    (chartType) => {
      gridRef.current.api.updateChart({
        type: "rangeChartUpdate",
        chartId: `${chartRef.chartId}`,
        chartType: chartType,
      });
    },
    [chartRef],
  );

  return (
    <div style={containerStyle}>
      <div className="wrapper">
        <div className="flex flex-wrap gap-2 m-4">
  {[
    { label: "Grouped Column", type: "groupedColumn" },
    { label: "Stacked Column", type: "stackedColumn" },
    { label: "Normalized Column", type: "normalizedColumn" },
    { label: "Grouped Bar", type: "groupedBar" },
    { label: "Stacked Bar", type: "stackedBar" },
    { label: "Normalized Bar", type: "normalizedBar" },
  ]?.map((button) => (
    <button
      key={button.type}
      className="text-gray-900 bg-white border border-gray-300 rounded-lg text-sm px-5 py-2.5 font-medium transition-all duration-200 
                 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100
                 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
                 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      onClick={() => updateChart(button.type)}
    >
      {button.label}
    </button>
  ))}
</div>


        <div style={gridStyle}>
          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            popupParent={popupParent}
            cellSelection={true}
            enableCharts={true}
            chartToolPanelsDef={chartToolPanelsDef}
            onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
          />
        </div>
        <div id="myChart"></div>
      </div>
    </div>
  );
};

export default GridExample;
