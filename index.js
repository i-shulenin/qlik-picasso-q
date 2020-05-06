import "./style.css";

import picasso from "picasso.js";
import picassoQ from "picasso-plugin-q";

picasso.use(picassoQ);

const layout = {
  linechart: {
    horizontal: {
      qHyperCube: {
        qSize: {
          qcx: 2,
          qcy: 10
        },
        qDimensionInfo: [
          {
            qFallbackTitle: "Федеральный округ",
            qApprMaxGlyphCount: 35,
            qCardinal: 9,
            qSortIndicator: "A",
            qGroupFallbackTitles: ["Федеральный округ", "Наименование региона"],
            qGroupPos: 0,
            qStateCounts: {
              qLocked: 0,
              qSelected: 0,
              qOption: 9,
              qDeselected: 0,
              qAlternative: 0,
              qExcluded: 0,
              qSelectedExcluded: 0,
              qLockedExcluded: 0
            },
            qTags: ["$text"],
            qDimensionType: "D",
            qGrouping: "H",
            qNumFormat: {
              qType: "R",
              qnDec: 14,
              qUseThou: 1,
              qFmt: "##############",
              qDec: ","
            },
            qIsAutoFormat: true,
            qGroupFieldDefs: ["Федеральный округ", "Наименование региона"],
            qMin: "NaN",
            qMax: "NaN",
            qAttrExprInfo: [],
            qAttrDimInfo: [],
            qCardinalities: {
              qCardinal: 9,
              qHypercubeCardinal: 10,
              qAllValuesCardinal: -1
            },
            qLibraryId: "ennD",
            title: "Округ\\Регион",
            coloring: {
              changeHash: "0.1639923224171136"
            },
            autoSort: true,
            cId: "PLPPusy",
            othersLabel: "Другие"
          }
        ],
        qMeasureInfo: [
          {
            qFallbackTitle: "Дефицит (физлиц)  на 19.04.2020 21:00:00",
            qApprMaxGlyphCount: 7,
            qCardinal: 0,
            qSortIndicator: "D",
            qNumFormat: {
              qType: "R",
              qnDec: 0,
              qUseThou: 0,
              qFmt: "##############",
              qDec: ",",
              qThou: " "
            },
            qMin: -200673,
            qMax: 0,
            qIsAutoFormat: true,
            qAttrExprInfo: [],
            qAttrDimInfo: [],
            qLibraryId: "Krs",
            qTrendLines: [],
            coloring: {},
            autoSort: true,
            cId: "eGrpnm",
            numFormatFromTemplate: true,
            series: {
              type: "bar",
              axis: 0,
              marker: "circle",
              markerFill: true
            }
          }
        ],
        qEffectiveInterColumnSortOrder: [0, 1],
        qGrandTotalRow: [
          {
            qText: "-599662",
            qNum: -599662,
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
                  qText: "Дальневосточный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 1,
                  qState: "O"
                },
                {
                  qText: "-22759",
                  qNum: -22759,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "МО Федерального подчинения",
                  qNum: "NaN",
                  qElemNumber: 8,
                  qState: "O"
                },
                {
                  qText: "-72577",
                  qNum: -72577,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Приволжский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 6,
                  qState: "O"
                },
                {
                  qText: "-82268",
                  qNum: -82268,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Северо-Западный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 2,
                  qState: "O"
                },
                {
                  qText: "-38269",
                  qNum: -38269,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Северо-Кавказский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 5,
                  qState: "O"
                },
                {
                  qText: "-39311",
                  qNum: -39311,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Сибирский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 0,
                  qState: "O"
                },
                {
                  qText: "-57501",
                  qNum: -57501,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Уральский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 7,
                  qState: "O"
                },
                {
                  qText: "-38952",
                  qNum: -38952,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Центральный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 4,
                  qState: "O"
                },
                {
                  qText: "-200673",
                  qNum: -200673,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Южный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 3,
                  qState: "O"
                },
                {
                  qText: "-47352",
                  qNum: -47352,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "-",
                  qNum: "NaN",
                  qElemNumber: -2,
                  qState: "L",
                  qIsNull: true
                },
                {
                  qText: "0",
                  qNum: 0,
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
              qWidth: 2,
              qHeight: 10
            }
          }
        ],
        qPivotDataPages: [],
        qStackedDataPages: [],
        qMode: "S",
        qNoOfLeftDims: -1,
        qTreeNodesOnDim: [],
        qColumnOrder: []
      },
      orientation: "horizontal"
    },
    vertical: {
      qHyperCube: {
        qSize: {
          qcx: 3,
          qcy: 10
        },
        qDimensionInfo: [
          {
            qFallbackTitle: "Федеральный округ",
            qApprMaxGlyphCount: 35,
            qCardinal: 9,
            qSortIndicator: "A",
            qGroupFallbackTitles: ["Федеральный округ", "Наименование региона"],
            qGroupPos: 0,
            qStateCounts: {
              qLocked: 0,
              qSelected: 0,
              qOption: 9,
              qDeselected: 0,
              qAlternative: 0,
              qExcluded: 0,
              qSelectedExcluded: 0,
              qLockedExcluded: 0
            },
            qTags: ["$text"],
            qDimensionType: "D",
            qGrouping: "H",
            qNumFormat: {
              qType: "R",
              qnDec: 14,
              qUseThou: 1,
              qFmt: "##############",
              qDec: ","
            },
            qIsAutoFormat: true,
            qGroupFieldDefs: ["Федеральный округ", "Наименование региона"],
            qMin: "NaN",
            qMax: "NaN",
            qAttrExprInfo: [],
            qAttrDimInfo: [],
            qCardinalities: {
              qCardinal: 9,
              qHypercubeCardinal: 10,
              qAllValuesCardinal: -1
            },
            qLibraryId: "ennD",
            title: "Округ\\Регион",
            coloring: {
              changeHash: "0.1639923224171136"
            },
            autoSort: true,
            cId: "PLPPusy",
            othersLabel: "Другие"
          }
        ],
        qMeasureInfo: [
          {
            qFallbackTitle: "Дефицит (физлиц)  на 19.04.2020 21:00:00",
            qApprMaxGlyphCount: 7,
            qCardinal: 0,
            qSortIndicator: "D",
            qNumFormat: {
              qType: "R",
              qnDec: 0,
              qUseThou: 0,
              qFmt: "##############",
              qDec: ",",
              qThou: " "
            },
            qMin: -200673,
            qMax: 0,
            qIsAutoFormat: true,
            qAttrExprInfo: [],
            qAttrDimInfo: [],
            qLibraryId: "Krs",
            qTrendLines: [],
            coloring: {},
            autoSort: true,
            cId: "eGrpnm",
            numFormatFromTemplate: true,
            series: {
              type: "bar",
              axis: 0,
              marker: "circle",
              markerFill: true
            }
          },
          {
            qFallbackTitle: "Норматив обеспечения (на 100 коек)",
            qApprMaxGlyphCount: 5,
            qCardinal: 0,
            qSortIndicator: "D",
            qNumFormat: {
              qType: "F",
              qnDec: 6,
              qUseThou: 1,
              qFmt: "###0,00",
              qDec: ","
            },
            qMin: 34.46153846153846,
            qMax: 34.46153846153846,
            qIsAutoFormat: true,
            qAttrExprInfo: [],
            qAttrDimInfo: [],
            qLibraryId: "APFAsHJ",
            qTrendLines: [],
            coloring: {},
            autoSort: true,
            cId: "jpKJMrZ",
            numFormatFromTemplate: true,
            series: {
              axis: 1,
              type: "line"
            }
          }
        ],
        qEffectiveInterColumnSortOrder: [0, 1, 2],
        qGrandTotalRow: [
          {
            qText: "-599662",
            qNum: -599662,
            qElemNumber: -1,
            qState: "X",
            qIsTotalCell: true
          },
          {
            qText: "34,46",
            qNum: 34.46153846153846,
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
                  qText: "Дальневосточный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 1,
                  qState: "O"
                },
                {
                  qText: "-22759",
                  qNum: -22759,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "МО Федерального подчинения",
                  qNum: "NaN",
                  qElemNumber: 8,
                  qState: "O"
                },
                {
                  qText: "-72577",
                  qNum: -72577,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Приволжский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 6,
                  qState: "O"
                },
                {
                  qText: "-82268",
                  qNum: -82268,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Северо-Западный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 2,
                  qState: "O"
                },
                {
                  qText: "-38269",
                  qNum: -38269,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Северо-Кавказский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 5,
                  qState: "O"
                },
                {
                  qText: "-39311",
                  qNum: -39311,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Сибирский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 0,
                  qState: "O"
                },
                {
                  qText: "-57501",
                  qNum: -57501,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Уральский федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 7,
                  qState: "O"
                },
                {
                  qText: "-38952",
                  qNum: -38952,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Центральный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 4,
                  qState: "O"
                },
                {
                  qText: "-200673",
                  qNum: -200673,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "Южный федеральный округ",
                  qNum: "NaN",
                  qElemNumber: 3,
                  qState: "O"
                },
                {
                  qText: "-47352",
                  qNum: -47352,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "34,46",
                  qNum: 34.46153846153846,
                  qElemNumber: 0,
                  qState: "L"
                }
              ],
              [
                {
                  qText: "-",
                  qNum: "NaN",
                  qElemNumber: -2,
                  qState: "L",
                  qIsNull: true
                },
                {
                  qText: "0",
                  qNum: 0,
                  qElemNumber: 0,
                  qState: "L"
                },
                {
                  qText: "-",
                  qNum: "NaN",
                  qElemNumber: 0,
                  qState: "L",
                  qIsNull: true
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
              qHeight: 10
            }
          }
        ],
        qPivotDataPages: [],
        qStackedDataPages: [],
        qMode: "S",
        qNoOfLeftDims: -1,
        qTreeNodesOnDim: [],
        qColumnOrder: []
      },
      orientation: "vertical"
    }
  }
};

const data = {
  linechart: {
    horizontal: [
      {
        type: "q",
        key: "qHyperCube",
        data: layout.linechart.horizontal.qHyperCube
      }
    ],
    vertical: [
      {
        type: "q",
        key: "qHyperCube",
        data: layout.linechart.vertical.qHyperCube
      }
    ]
  }
};

const settings = {
  linechart: {
    horizontal: {
      scales: {
        x: {
          data: {
            extract: {
              field: "qDimensionInfo/0"
            }
          }
        },
        y: {
          data: {
            extract: {
              field: "qMeasureInfo/0"
            }
          }
        }
      },
      components: [
        {
          type: "axis",
          dock: "bottom",
          scale: "x"
        },
        {
          type: "axis",
          dock: "left",
          scale: "y"
        },
        {
          key: "lines",
          type: "line",
          data: {
            extract: {
              field: "qDimensionInfo/0",
              props: {
                v: { field: "qMeasureInfo/0" }
              }
            }
          },
          settings: {
            coordinates: {
              major: { scale: "x" },
              minor: { scale: "y", ref: "v" }
            },
            layers: {
              line: {}
            }
          }
        }
      ]
    },
    vertical: {
      scales: {
        x: {
          data: {
            extract: {
              field: "qDimensionInfo/0"
            }
          }
        },
        y: {
          data: {
            extract: {
              field: "qMeasureInfo/0"
            }
          }
        }
      },
      components: [
        {
          type: "axis",
          dock: "bottom",
          scale: "x"
        },
        {
          type: "axis",
          dock: "left",
          scale: "y"
        },
        {
          key: "lines",
          type: "line",
          data: {
            extract: {
              field: "qDimensionInfo/0",
              props: {
                v: { field: "qMeasureInfo/0" }
              }
            }
          },
          settings: {
            coordinates: {
              major: { scale: "x" },
              minor: { scale: "y", ref: "v" }
            },
            layers: {
              line: {}
            },
            orientation: 'vertical',
          }
        }
      ]
    }
  }
};

const linechart = {
  horizontal: picasso.chart({
    element: document.querySelector("#QV01"),
    data: data.linechart.horizontal,
    settings: settings.linechart.horizontal,
  }),
  vertical: picasso.chart({
    element: document.querySelector("#QV02"),
    data: data.linechart.vertical,
    settings: settings.linechart.vertical,
  })
};

function onresize() {
  linechart.horizontal.update();
  linechart.vertical.update();
}

window.onresize = onresize;
