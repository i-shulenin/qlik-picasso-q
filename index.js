import "./style.css";

import picasso from "picasso.js";
import picassoQ from "picasso-plugin-q";

picasso.use(picassoQ); // register q plugin in order to handle hypercube format

// ------- DATA -------
// 2 dimension, the 2nd dimension contains an attribute expression for color encoding
// 1 measure
var layout = {
  qHyperCube: {
    qSize: {
      qcx: 3,
      qcy: 12
    },
    qDimensionInfo: [
      {
        qFallbackTitle: "Product Group",
        qApprMaxGlyphCount: 19,
        qCardinal: 17,
        qSortIndicator: "A",
        qGroupFallbackTitles: ["Product Group"],
        qGroupPos: 0,
        qStateCounts: {
          qLocked: 0,
          qSelected: 3,
          qOption: 0,
          qDeselected: 0,
          qAlternative: 14,
          qExcluded: 0,
          qSelectedExcluded: 0,
          qLockedExcluded: 0
        },
        qTags: ["$ascii", "$text"],
        qDimensionType: "D",
        qGrouping: "N",
        qNumFormat: {
          qType: "R",
          qnDec: 14,
          qUseThou: 1,
          qFmt: "##############",
          qDec: ".",
          qThou: ","
        },
        qIsAutoFormat: true,
        qGroupFieldDefs: ["Product Group Desc"],
        qMin: "NaN",
        qMax: "NaN",
        qAttrExprInfo: [],
        qAttrDimInfo: [],
        qCardinalities: {
          qCardinal: 17,
          qHypercubeCardinal: 3
        },
        title: "Product Group"
      },
      {
        qFallbackTitle: "Product Sub Group Desc",
        qApprMaxGlyphCount: 17,
        qCardinal: 70,
        qSortIndicator: "A",
        qGroupFallbackTitles: ["Product Sub Group Desc"],
        qGroupPos: 0,
        qStateCounts: {
          qLocked: 0,
          qSelected: 0,
          qOption: 6,
          qDeselected: 0,
          qAlternative: 0,
          qExcluded: 64,
          qSelectedExcluded: 0,
          qLockedExcluded: 0
        },
        qTags: ["$ascii", "$text"],
        qDimensionType: "D",
        qGrouping: "N",
        qNumFormat: {
          qType: "R",
          qnDec: 14,
          qUseThou: 1,
          qFmt: "##############",
          qDec: ".",
          qThou: ","
        },
        qIsAutoFormat: true,
        qGroupFieldDefs: ["Product Sub Group Desc"],
        qMin: "NaN",
        qMax: "NaN",
        qAttrExprInfo: [
          {
            qMin: 4278190208,
            qMax: 4278222848,
            qFallbackTitle:
              "=if([Product Group Desc]='Baked Goods', green(), blue())", // color by epxression
            qMinText: "RGB(0,0,128)",
            qMaxText: "RGB(0,128,0)",
            id: "cellBackgroundColor"
          }
        ],
        qAttrDimInfo: [],
        qCardinalities: {
          qCardinal: 70,
          qHypercubeCardinal: 6
        },
        title: "Product Sub Group Desc"
      }
    ],
    qMeasureInfo: [
      {
        qFallbackTitle: "# of Products",
        qApprMaxGlyphCount: 2,
        qCardinal: 0,
        qSortIndicator: "D",
        qNumFormat: {
          qType: "I",
          qnDec: 0,
          qUseThou: 1,
          qFmt: "###0",
          qDec: "."
        },
        qMin: 2,
        qMax: 17,
        qIsAutoFormat: true,
        qAttrExprInfo: [],
        qAttrDimInfo: []
      }
    ],
    qEffectiveInterColumnSortOrder: [0, 2, 1],
    qDataPages: [
      {
        qMatrix: [
          [
            {
              qText: "Alcoholic Beverages",
              qNum: "NaN",
              qElemNumber: 0,
              qState: "S"
            },
            {
              qText: "Wine",
              qNum: "NaN",
              qElemNumber: 1,
              qState: "O",
              qAttrExps: {
                qValues: [
                  {
                    qText: "RGB(0,0,128)",
                    qNum: 4278190208
                  }
                ]
              }
            },
            {
              qText: "17",
              qNum: 17,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "Alcoholic Beverages",
              qNum: "NaN",
              qElemNumber: 0,
              qState: "S"
            },
            {
              qText: "Beer",
              qNum: "NaN",
              qElemNumber: 0,
              qState: "O",
              qAttrExps: {
                qValues: [
                  {
                    qText: "RGB(0,0,128)",
                    qNum: 4278190208
                  }
                ]
              }
            },
            {
              qText: "6",
              qNum: 6,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "Baked Goods",
              qNum: "NaN",
              qElemNumber: 1,
              qState: "S"
            },
            {
              qText: "Sliced Bread",
              qNum: "NaN",
              qElemNumber: 4,
              qState: "O",
              qAttrExps: {
                qValues: [
                  {
                    qText: "RGB(0,128,0)",
                    qNum: 4278222848
                  }
                ]
              }
            },
            {
              qText: "13",
              qNum: 13,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "Baked Goods",
              qNum: "NaN",
              qElemNumber: 1,
              qState: "S"
            },
            {
              qText: "Muffins",
              qNum: "NaN",
              qElemNumber: 3,
              qState: "O",
              qAttrExps: {
                qValues: [
                  {
                    qText: "RGB(0,128,0)",
                    qNum: 4278222848
                  }
                ]
              }
            },
            {
              qText: "9",
              qNum: 9,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "Baked Goods",
              qNum: "NaN",
              qElemNumber: 1,
              qState: "S"
            },
            {
              qText: "Bagels",
              qNum: "NaN",
              qElemNumber: 2,
              qState: "O",
              qAttrExps: {
                qValues: [
                  {
                    qText: "RGB(0,128,0)",
                    qNum: 4278222848
                  }
                ]
              }
            },
            {
              qText: "2",
              qNum: 2,
              qElemNumber: 0,
              qState: "L"
            }
          ],
          [
            {
              qText: "Breakfast Foods",
              qNum: "NaN",
              qElemNumber: 4,
              qState: "S"
            },
            {
              qText: "Cereal",
              qNum: "NaN",
              qElemNumber: 18,
              qState: "O",
              qAttrExps: {
                qValues: [
                  {
                    qText: "RGB(0,0,128)",
                    qNum: 4278190208
                  }
                ]
              }
            },
            {
              qText: "16",
              qNum: 16,
              qElemNumber: 0,
              qState: "L"
            }
          ]
        ],
        qTails: [
          {
            qUp: 0,
            qDown: 0
          },
          {
            qUp: 0,
            qDown: 0
          }
        ],
        qArea: {
          qLeft: 0,
          qTop: 0,
          qWidth: 3,
          qHeight: 6
        }
      }
    ],
    qMode: "S"
  }
};

// data setting that will be passed to picasso
var data = [
  {
    type: "q",
    key: "qHyperCube",
    data: layout.qHyperCube
  }
];

// -------- END DATA -----------

const settings = {
  scales: {
    x: {
      data: { field: "qMeasureInfo/0" },
      expand: 0.1
    }
  },
  components: [
    {
      type: "axis",
      dock: "bottom",
      scale: "x"
    },
    {
      key: "points",
      type: "point",
      data: {
        extract: {
          field: "qDimensionInfo/1",
          props: {
            fill: {
              field: "qDimensionInfo/1/qAttrExprInfo/0",
              value: v => v.qText
            }, // extract the qText value from the attribute expression used for coloring
            end: { field: "qMeasureInfo/0" }
          }
        }
      },
      settings: {
        x: { scale: "x", ref: "end" },
        fill: { ref: "fill" } // apply the extracted values (no scale needed)
      }
    }
  ]
};

var pic = picasso.chart({
  element: document.querySelector("#container"),
  data: data,
  settings
});

function onresize() {
  pic.update();
}

window.onresize = onresize;
