import './style.css';

import picasso from 'picasso.js';
import picassoQ from 'picasso-plugin-q';

picasso.use(picassoQ);

const layout = {
  qHyperCube: {
    qSize: {
      qcx: 3,
      qcy: 12
    },
    qDimensionInfo: [
      {
        qFallbackTitle: "Месяц",
        qApprMaxGlyphCount: 8,
        qCardinal: 12,
        qSortIndicator: "A",
        qGroupFallbackTitles: ["Месяц"],
        qGroupPos: 0,
        qStateCounts: {
          qLocked: 0,
          qSelected: 0,
          qOption: 12,
          qDeselected: 0,
          qAlternative: 0,
          qExcluded: 0,
          qSelectedExcluded: 0,
          qLockedExcluded: 0
        },
        qTags: ["$text", "$keypart"],
        qDimensionType: "D",
        qGrouping: "N",
        qNumFormat: {
          qType: "R",
          qnDec: 14,
          qUseThou: 1,
          qFmt: "##############",
          qDec: ","
        },
        qIsAutoFormat: true,
        qGroupFieldDefs: ["Месяц"],
        qMin: "NaN",
        qMax: "NaN",
        qAttrExprInfo: [],
        qAttrDimInfo: [],
        qCardinalities: {
          qCardinal: 12,
          qHypercubeCardinal: 12
        },
        autoSort: false,
        cId: "QTSeaT",
        othersLabel: "Others"
      }
    ],
    qMeasureInfo: [
      {
        qFallbackTitle: "Количество работников",
        qApprMaxGlyphCount: 7,
        qCardinal: 0,
        qSortIndicator: "D",
        qNumFormat: {
          qType: "F",
          qnDec: 2,
          qUseThou: 0,
          qFmt: "# ##0",
          qDec: ",",
          qThou: " "
        },
        qMin: 49370,
        qMax: 123354,
        qAttrExprInfo: [],
        qAttrDimInfo: [],
        autoSort: true,
        cId: "GJpES",
        numFormatFromTemplate: true,
        series: {
          type: "bar",
          axis: 0,
          marker: "circle",
          markerFill: true
        },
        isCustomFormatted: false
      },
      {
        qFallbackTitle: "Количество МО",
        qApprMaxGlyphCount: 5,
        qCardinal: 0,
        qSortIndicator: "D",
        qNumFormat: {
          qType: "F",
          qnDec: 2,
          qUseThou: 0,
          qFmt: "# ##0",
          qDec: ",",
          qThou: " "
        },
        qMin: 296,
        qMax: 522,
        qAttrExprInfo: [],
        qAttrDimInfo: [],
        autoSort: true,
        cId: "dCqwpu",
        numFormatFromTemplate: true,
        series: {
          axis: 1,
          type: "line"
        },
        isCustomFormatted: false
      }
    ],
    qEffectiveInterColumnSortOrder: [0, 1, 2],
    qGrandTotalRow: [
      {
        qText: "992 013",
        qNum: 992013,
        qElemNumber: -1,
        qState: "X",
        qIsTotalCell: true
      },
      {
        qText: "5 898",
        qNum: 5898,
        qElemNumber: -1,
        qState: "X",
        qIsTotalCell: true
      }
    ],
    qDataPages: [
      {
        qMatrix: [
          [
            {
              qText: "январь",
              qNum: "NaN",
              qElemNumber: 10,
              qState: "O"
            },
            {
              qText: "80 201",
              qNum: 80201,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "519",
              qNum: 519,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "февраль",
              qNum: "NaN",
              qElemNumber: 9,
              qState: "O"
            },
            {
              qText: "67 148",
              qNum: 67148,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "514",
              qNum: 514,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "март",
              qNum: "NaN",
              qElemNumber: 5,
              qState: "O"
            },
            {
              qText: "106 192",
              qNum: 106192,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "512",
              qNum: 512,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "апрель",
              qNum: "NaN",
              qElemNumber: 1,
              qState: "O"
            },
            {
              qText: "80 236",
              qNum: 80236,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "520",
              qNum: 520,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "май",
              qNum: "NaN",
              qElemNumber: 4,
              qState: "O"
            },
            {
              qText: "123 354",
              qNum: 123354,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "522",
              qNum: 522,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "июнь",
              qNum: "NaN",
              qElemNumber: 3,
              qState: "O"
            },
            {
              qText: "106 836",
              qNum: 106836,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "520",
              qNum: 520,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "июль",
              qNum: "NaN",
              qElemNumber: 2,
              qState: "O"
            },
            {
              qText: "106 548",
              qNum: 106548,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "514",
              qNum: 514,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "август",
              qNum: "NaN",
              qElemNumber: 0,
              qState: "O"
            },
            {
              qText: "75 688",
              qNum: 75688,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "499",
              qNum: 499,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "сентябрь",
              qNum: "NaN",
              qElemNumber: 8,
              qState: "O"
            },
            {
              qText: "55 910",
              qNum: 55910,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "504",
              qNum: 504,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "октябрь",
              qNum: "NaN",
              qElemNumber: 7,
              qState: "O"
            },
            {
              qText: "64 784",
              qNum: 64784,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "492",
              qNum: 492,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "ноябрь",
              qNum: "NaN",
              qElemNumber: 6,
              qState: "O"
            },
            {
              qText: "75 746",
              qNum: 75746,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "486",
              qNum: 486,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "декабрь",
              qNum: "NaN",
              qElemNumber: 11,
              qState: "O"
            },
            {
              qText: "49 370",
              qNum: 49370,
              qElemNumber: 0,
              qState: "L"
            },
            {
              qText: "296",
              qNum: 296,
              qElemNumber: 0,
              qState: "L"
            }
          ]
        ],
        qTails: [
          {
            qUp: 0,
            qDown: 0
          }
        ],
        qArea: {
          qLeft: 0,
          qTop: 0,
          qWidth: 3,
          qHeight: 12
        }
      }
    ],
    qPivotDataPages: [],
    qStackedDataPages: [],
    qMode: "S",
    qNoOfLeftDims: -1,
    qTreeNodesOnDim: [],
    qColumnOrder: []
  }
};

const data = [
  {
    type: 'q',
    key: 'qHyperCube',
    data: layout.qHyperCube
  }
];

const settings = {
  scales: {
    x: {
      data: { field: 'qMeasureInfo/0' },
      expand: 0.1
    }
  },
  components: [
    {
      type: 'axis',
      dock: 'bottom',
      scale: 'x'
    },
    {
      key: 'points',
      type: 'point',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            fill: {
              field: 'qDimensionInfo/1/qAttrExprInfo/0',
              value: v => v.qText
            },
            end: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        x: { scale: 'x', ref: 'end' },
        fill: { ref: 'fill' }
      }
    }
  ]
};

const chart = picasso.chart({
  element: document.querySelector('#container'),
  data: data,
  settings
});

function onresize() {
  chart.update();
}

window.onresize = onresize;
