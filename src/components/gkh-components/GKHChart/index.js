import React  from 'react';
import { Chart, Axis, Tooltip, Geom, Legend } from 'bizcharts';
import moment from "moment"
import difference from 'lodash/difference'
import pick from 'lodash/pick'
import DataSet from "@antv/data-set"

const renderTooltip = (cType, type) => {
  return (
    <Tooltip
      cType={cType}
      crosshairs={{
         type,
      }}
      containerTpl={
      '<div class="g2-tooltip">'
      + '<ul class="g2-tooltip-list"></ul>'
      + '<div class="g2-tooltip-title" style="margin-bottom: 0"></div>'
      + '</div>'
      }
      g2-tooltip={{
        textAlign: 'center',
        backgroundColor: 'white',
        color: '#000',
        borderRadius: '4px',
        boxShadow: '0px 1px 10px rgba(51, 51, 51, 0.2)',
        overflow: 'hidden',
        padding: '10px 15px',
      }}
      g2-tooltip-list-item={{
        fontWeight: 500,
        fontSize: '15px',
        marginBottom: '5px',
      }}
      g2-tooltip-title={{
        marginBottom: '0px',
        color: 'rgba(51, 51, 51, 0.5)',
        fontWeight: 500,
        fontSize: '13px',
      }}
      g2-tooltip-marker={{display: 'none'}}
    />
  )
}

DataSet.registerTransform('T1T2Fold', (dataView, options) => {
  const {units, key, value, fields} = options
  let {retains=[]} = options
  const columns = dataView.getColumnNames();
  // const fields = [
  //   {
  //     key: "volumeT1",
  //     alias: "Потребление Т1 "+units
  //   },
  //   {
  //     key: "volumeT2",
  //     alias: "Потребление Т2 "+units
  //   }
  // ]
  if (retains.length === 0) {
    retains = difference(columns, fields);
  }
  const resultRows = [];
  dataView.rows.forEach(row => {
    fields.forEach(fieldObj => {
      const resultRow = pick(row, retains);
      resultRow[key] = fieldObj.alias;
      resultRow[value] = row[fieldObj.key];
      resultRows.push(resultRow);
    });
  });
  dataView.rows = resultRows;
})

const chooseColor = (options) => {
  const {T1T2Fold, isTSRV, color, colorT2} = options
  if (T1T2Fold) {
    return ["key", [color, colorT2]]
  }
  if (isTSRV) {
    return ["key", `${color}-${colorT2}`]
  }
  return color
}

export const GKHChart = ({titleOffset, T1T2Fold=false, isTSRV=false, tsrvFields=[], height=292, axisData, data: renderData,  color='#000000', colorT2, cType='bar', units,  ...rest}) => {

  colorT2 = colorT2 || color

  const titleX = {
    offset: titleOffset,
    textStyle: {
        fill:color,
        fontSize: 14,
        textBaseline: 'top',
      },
  }

  const titleY = {
    offset: titleOffset,
    textStyle: {
        fill:color,
        fontSize: 14,
      },
  }

  const ds = new DataSet();
  const dv = ds.createView().source(renderData);
  if (isTSRV) {
    dv.transform({
      type: "T1T2Fold",
      value: axisData.y.key,
      units,
      key: "key",
      fields: tsrvFields.map(item => ({
        key: item.serverFieldName,
        alias: item.title,
      }))
    });
  }
  if (T1T2Fold) {
    dv.transform({
      type: "T1T2Fold",
      value: axisData.y.key,
      units,
      key: "key",
      fields: [
        {
          key: "volumeT1",
          alias: "Потребление Т1 "+units
        },
        {
          key: "volumeT2",
          alias: "Потребление Т2 "+units
        }
      ]
    });
  }
// const axisInterval = data.length > 10 ? Math.ceil(data.length/10) : 100;


  const scaleNoInterval = {
    [axisData.x.key]: {
      type: 'cat',
      alias: axisData.x.alias || "x",
    },
    [axisData.y.key]: {
      min: 0,
      alias: axisData.y.alias || "y",
      range: [0, 1]
    },
  };

  const scaleWithInterval = {
    [axisData.x.key]: {
      type: 'cat',
      alias: axisData.x.alias || "x",
      // tickCount: 5,
      tickCount: 10,
    },
    [axisData.y.key]: {
      min: 0,
      alias: axisData.y.alias || "y",
      range: [0, 1]
    },
  };

  const scale = renderData.length > 10 ?  scaleWithInterval : scaleNoInterval

  if (cType === 'bar') {
    return (
      <Chart
        scale={scale}
        height={height}
        forceFit
        padding="auto"
        data={dv}
      >
        <Legend />
        <Axis
          title={titleX}
          name={axisData.x.key}
        />
        <Axis
          title={titleY}
          name={axisData.y.key}
        />
        { renderTooltip(cType, axisData.y.key) }
        <Geom
          type="interval" 
          position={axisData.x.key+"*"+axisData.y.key} 
          color={chooseColor({isTSRV, T1T2Fold, color, colorT2})}
          adjust={[
            {
              type: "dodge",
              marginRatio: 1 / 32
            }
          ]}
            /*tooltip={tooltip}*/ 
        />
      </Chart>
    )
  }
  return (
    <Chart 
      scale={scale} 
      height={height} 
      forceFit
      padding="auto"
      data={dv}
    >
    <Legend />
      <Axis
        title={titleX}
        name={axisData.x.key}
      />
      <Axis
        title={titleY}
        name={axisData.y.key}
      />
      { renderTooltip(cType, axisData.y.key) }
      <Geom
        type="line"
        position={axisData.x.key+"*"+axisData.y.key}
        size={2}
        color={chooseColor({isTSRV, T1T2Fold, color, colorT2})}
      // shape={"smooth"}
      />
      <Geom
        type="point"
        position={axisData.x.key+"*"+axisData.y.key}
        size={4}
        shape={"circle"}
        color={chooseColor({isTSRV, T1T2Fold, color, colorT2})}
        style={{
          stroke: "#fff",
          lineWidth: 1,
        }}
      />
    </Chart>
  )
}