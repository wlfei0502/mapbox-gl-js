//http://10.2.31.99:8080/vt/{z}/{x}/{y}
//http://localhost:8080/vector/maxture/simplify/{z}/{x}/{y}
//http://192.9.104.187:8080/vt/3/6/2 有问题瓦片
var styleTdt = {
	"version": 8,
	"metadata": {
		"maputnik:renderer": "mbgljs",
		"maputnik:thunderforest_access_token": ""
	},
	"sources": {
		"tdt-vector-tile": {
			"type": "vector",
			// "tiles": ["http://192.9.104.187:8083/vt/{z}/{x}/{y}"],
			"tiles": ["http://192.9.104.187:8082/vts?t=vt&z={z}&x={x}&y={y}"],
			"minZoom": 0,
			"maxzoom": 18
		}
	},
	"sprite": "http://192.9.104.187/static/sprite/png",
	"glyphs": "http://192.9.104.187/static/font/{fontstack}/{range}.pbf",
	"layers": [{
		"id": "tdt1",
		"type": "background",
		"minzoom": 1,
		"maxzoom": 15,
		"layout": {
			"visibility": "none"
		},
		"paint": {
			"background-color": "rgba(170, 198, 238, 1)"
		}
	}, {
		"id": "tdt2",
		"type": "background",
		"minzoom": 11,
		"maxzoom": 19,
		"layout": {
			"visibility": "none"
		},
		"paint": {
			"background-color": "rgba(245, 244, 238, 1)"
		}
	}, {
		"id": "tdt3",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AP",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["!=", "D9", "3"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(236, 238, 203, 1)"
		}
	}, {
		"id": "tdt4",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "BM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171,198,239, 1)"
		}
	}, {
		"id": "tdt5",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "CK",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(187,215,141, 1)"
		}
	}, {
		"id": "tdt6",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AN",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(171,198,239, 1)"
		}
	}, {
		"id": "tdt7",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["!=", "D9", "3"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(170,170,170, 1)",
			"line-width": 2.2
		}
	}, {
		"id": "tdt8",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["!=", "D9", "3"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-width": 1.6,
			"line-dasharray": [4, 4]
		}
	}, {
		"id": "tdt9",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "CE",
		"minzoom": 11,
		"layout": {
			"visibility": "none"
		},
		"paint": {
			"fill-color": "rgba(249, 250, 243, 1)",
			"fill-outline-color": "rgba(135, 134, 134, 1)"
		}
	}, {
		"id": "tdt10",
		"type": "fill-extrusion",
		"source": "tdt-vector-tile",
		"source-layer": "CE",
		"minzoom": 17,
		"maxzoom": 19,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-extrusion-color": "rgba(251, 251, 250, 1)",
			"fill-extrusion-vertical-gradient": true,
			"fill-extrusion-translate-anchor": "map",
			"fill-extrusion-opacity": 0.4,
			"fill-extrusion-height": 3
		}
	}, {
		"id": "tdt11",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(155,155,155, 1)"],
					[16, "rgba(132,123,93, 1)"],
					[17, "rgba(132,123,93, 1)"],
					[18, "rgba(132,123,93, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2.6],
					[16, 4],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt12",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2],
					[16, 3],
					[17, 4],
					[18, 5]
				]
			},
			"line-dasharray": [3, 3]
		}
	}, {
		"id": "tdt13",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(220,211,181, 1)"],
					[16, "rgba(220,210,173, 1)"],
					[17, "rgba(220,210,173, 1)"],
					[18, "rgba(220,210,173, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 5],
					[16, 7],
					[17, 9],
					[18, 10]
				]
			},
			"line-dasharray": []
		}
	}, {
		"id": "tdt14",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 3],
					[16, 5],
					[17, 7],
					[18, 8]
				]
			},
			"line-dasharray": [3, 3]
		}
	}, {
		"id": "tdt15",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(178,178,178, 1)"],
					[16, "rgba(178,178,178, 1)"],
					[17, "rgba(178,178,178, 1)"],
					[18, "rgba(178,178,178, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2.2],
					[16, 4],
					[17, 6],
					[18, 7]
				]
			},
			"line-dasharray": []
		}
	}, {
		"id": "tdt16",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 1.6],
					[16, 3],
					[17, 5],
					[18, 6]
				]
			},
			"line-dasharray": [3, 3]
		}
	}, {
		"id": "tdt17",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "none"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(225, 217, 188, 1)"],
					[16, "rgba(225, 217, 188, 1)"],
					[17, "rgba(225, 217, 188, 1)"],
					[18, "rgba(225, 217, 188, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 4.6],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt18",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(225, 217, 188, 1)"],
					[16, "rgba(225, 217, 188, 1)"],
					[17, "rgba(225, 217, 188, 1)"],
					[18, "rgba(225, 217, 188, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 4.6],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt19",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(225, 217, 188, 1)"],
					[16, "rgba(225, 217, 188, 1)"],
					[17, "rgba(225, 217, 188, 1)"],
					[18, "rgba(225, 217, 188, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 4.6],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt20",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2],
					[16, 3.5],
					[17, 4],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt21",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(220,219,205, 1)"],
					[13, "rgba(220,219,205, 1)"],
					[14, "rgba(220,219,205, 1)"],
					[15, "rgba(224, 215, 183, 1)"],
					[16, "rgba(224, 215, 183, 1)"],
					[17, "rgba(224, 215, 183, 1)"],
					[18, "rgba(224, 215, 183, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 4],
					[13, 4.4],
					[14, 5],
					[15, 6],
					[16, 8],
					[17, 10],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt22",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402", "420301"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 4.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 10],
					[18, 11]
				]
			}
		}
	}, {
		"id": "tdt23",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 10,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(198, 133, 78, 1)"],
					[11, "rgba(200, 191, 161, 1)"],
					[12, "rgba(200, 191, 161, 1)"],
					[13, "rgba(200, 191, 161, 1)"],
					[14, "rgba(200, 191, 161, 1)"],
					[15, "rgba(214, 185, 90, 1)"],
					[16, "rgba(214, 185, 90, 1)"],
					[17, "rgba(214, 185, 90, 1)"],
					[18, "rgba(214, 185, 90, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2.4],
					[11, 4.6],
					[12, 5.4],
					[13, 7],
					[14, 8],
					[15, 9],
					[16, 10],
					[17, 11],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt24",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2.6],
					[16, 4],
					[17, 6],
					[18, 7]
				]
			}
		}
	}, {
		"id": "tdt25",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(220,219,205, 1)"],
					[13, "rgba(220,219,205, 1)"],
					[14, "rgba(220,219,205, 1)"],
					[15, "rgba(224, 215, 183, 1)"],
					[16, "rgba(224, 215, 183, 1)"],
					[17, "rgba(224, 215, 183, 1)"],
					[18, "rgba(224, 215, 183, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 4],
					[13, 4.4],
					[14, 5],
					[15, 6],
					[16, 8],
					[17, 10],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt26",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(223,223,215, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,255, 1)"],
					[15, "rgba(252, 252, 251, 1)"],
					[16, "rgba(252, 252, 251, 1)"],
					[17, "rgba(252, 252, 251, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2],
					[13, 2.4],
					[14, 3],
					[15, 4],
					[16, 6],
					[17, 8],
					[18, 7]
				]
			}
		}
	}, {
		"id": "tdt27",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(223,223,215, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,255, 1)"],
					[15, "rgba(252, 252, 251, 1)"],
					[16, "rgba(252, 252, 251, 1)"],
					[17, "rgba(252, 252, 251, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2],
					[13, 2.4],
					[14, 3],
					[15, 4],
					[16, 6],
					[17, 8],
					[18, 7]
				]
			},
			"line-translate-anchor": "map"
		}
	}, {
		"id": "tdt28",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 12,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(223, 223, 215, 1)"],
					[12, "rgba(223,223,215, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,255, 1)"],
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(254,240,145, 1)"],
					[17, "rgba(254,240,145, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2],
					[13, 2.4],
					[14, 3],
					[15, 4],
					[16, 6],
					[17, 8],
					[18, 7]
				]
			}
		}
	}, {
		"id": "tdt29",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 1],
					[16, 1.5],
					[17, 2],
					[18, 3]
				]
			}
		}
	}, {
		"id": "tdt30",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209,202,178, 1)"],
					[12, "rgba(209,202,178, 1)"],
					[13, "rgba(209,202,178, 1)"],
					[14, "rgba(209,202,178, 1)"],
					[15, "rgba(214,200,120, 1)"],
					[16, "rgba(214,200,120, 1)"],
					[17, "rgba(214,200,120, 1)"],
					[18, "rgba(214,200,120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 2.6],
					[14, 3],
					[15, 3.6],
					[16, 4.6],
					[17, 5.5],
					[18, 5.6]
				]
			}
		}
	}, {
		"id": "tdt31",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255,244,175, 1)"],
					[12, "rgba(255,244,175, 1)"],
					[13, "rgba(255,244,175, 1)"],
					[14, "rgba(255,244,175, 1)"],
					[15, "rgba(255,244,140, 1)"],
					[16, "rgba(254,240,145, 1)"],
					[17, "rgba(254,240,145, 1)"],
					[18, "rgba(254,240,145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 1.4],
					[15, 2],
					[16, 3],
					[17, 3.5],
					[18, 4]
				]
			}
		}
	}, {
		"id": "tdt32",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209,202,178, 1)"],
					[12, "rgba(209,202,178, 1)"],
					[13, "rgba(209,202,178, 1)"],
					[14, "rgba(209,202,178, 1)"],
					[15, "rgba(214,200,120, 1)"],
					[16, "rgba(214,200,120, 1)"],
					[17, "rgba(214,200,120, 1)"],
					[18, "rgba(214,200,120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 2.6],
					[14, 3],
					[15, 3.6],
					[16, 4.6],
					[17, 5.5],
					[18, 5.6]
				]
			}
		}
	}, {
		"id": "tdt33",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255,244,175, 1)"],
					[12, "rgba(255,244,175, 1)"],
					[13, "rgba(255,244,175, 1)"],
					[14, "rgba(255,244,175, 1)"],
					[15, "rgba(255,244,140, 1)"],
					[16, "rgba(254,240,145, 1)"],
					[17, "rgba(254,240,145, 1)"],
					[18, "rgba(254,240,145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 1.4],
					[15, 2],
					[16, 3],
					[17, 3.5],
					[18, 4]
				]
			}
		}
	}, {
		"id": "tdt34",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "X3", "04"],
			["in", "D3", "1", "2", "3", "4"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 4.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 10],
					[18, 11]
				]
			}
		}
	}, {
		"id": "tdt35",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "X3", "04"],
			["in", "D3", "1", "2", "3", "4"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt36",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 4.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 10],
					[18, 11]
				]
			}
		}
	}, {
		"id": "tdt37",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt38",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(200,191,161, 1)"],
					[12, "rgba(200,191,161, 1)"],
					[13, "rgba(200,191,161, 1)"],
					[14, "rgba(200,191,161, 1)"],
					[15, "rgba(214,185,90, 1)"],
					[16, "rgba(214,185,90, 1)"],
					[17, "rgba(214,185,90, 1)"],
					[18, "rgba(214,185,90, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 2.6],
					[14, 3.6],
					[15, 3.6],
					[16, 4.6],
					[17, 5.6],
					[18, 6.6]
				]
			}
		}
	}, {
		"id": "tdt39",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402", "420301"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt40",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 12,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 4.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 10],
					[18, 11]
				]
			}
		}
	}, {
		"id": "tdt41",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 12,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt42",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,240,158, 1)"],
					[12, "rgba(254, 240, 158, 1)"],
					[13, "rgba(254, 240, 158, 1)"],
					[14, "rgba(254, 240, 158, 1)"],
					[15, "rgba(254,240,130, 1)"],
					[16, "rgba(254,235,130, 1)"],
					[17, "rgba(254,235,130, 1)"],
					[18, "rgba(254,235,130, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 2],
					[15, 2],
					[16, 3],
					[17, 4],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt43",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(198, 133, 78, 1)"],
					[11, "rgba(200, 191, 161, 1)"],
					[12, "rgba(200, 191, 161, 1)"],
					[13, "rgba(200, 191, 161, 1)"],
					[14, "rgba(200, 191, 161, 1)"],
					[15, "rgba(214, 185, 90, 1)"],
					[16, "rgba(214, 185, 90, 1)"],
					[17, "rgba(214, 185, 90, 1)"],
					[18, "rgba(214, 185, 90, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2.4],
					[11, 4.6],
					[12, 5.4],
					[13, 7],
					[14, 8],
					[15, 9],
					[16, 10],
					[17, 11],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt44",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(254, 244, 175, 1)"],
					[11, "rgba(254, 240, 158, 1)"],
					[12, "rgba(254, 240, 158, 1)"],
					[13, "rgba(254, 240, 158, 1)"],
					[14, "rgba(254, 240, 158, 1)"],
					[15, "rgba(254, 240, 130, 1)"],
					[16, "rgba(254, 235, 130, 1)"],
					[17, "rgba(254, 235, 130, 1)"],
					[18, "rgba(254, 235, 130, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2],
					[11, 2.6],
					[12, 3.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 9],
					[18, 10]
				]
			}
		}
	}, {
		"id": "tdt45",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 10,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(254, 244, 175, 1)"],
					[11, "rgba(254, 240, 158, 1)"],
					[12, "rgba(254, 240, 158, 1)"],
					[13, "rgba(254, 240, 158, 1)"],
					[14, "rgba(254, 240, 158, 1)"],
					[15, "rgba(254, 240, 130, 1)"],
					[16, "rgba(254, 235, 130, 1)"],
					[17, "rgba(254, 235, 130, 1)"],
					[18, "rgba(254, 235, 130, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2],
					[11, 2.6],
					[12, 3.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 9],
					[18, 10]
				]
			}
		}
	}, {
		"id": "tdt46",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208,143,88, 1)"],
					[12, "rgba(208,143,88, 1)"],
					[13, "rgba(208,143,88, 1)"],
					[14, "rgba(208,143,88, 1)"],
					[15, "rgba(196,124,73, 1)"],
					[16, "rgba(176,98,55, 1)"],
					[17, "rgba(176,98,55, 1)"],
					[18, "rgba(176,98,55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 3],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 7.6]
				]
			}
		}
	}, {
		"id": "tdt47",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,205,120, 1)"],
					[12, "rgba(254,205,120, 1)"],
					[13, "rgba(254,205,120, 1)"],
					[14, "rgba(254,205,120, 1)"],
					[15, "rgba(254,205,110, 1)"],
					[16, "rgba(254,205,110, 1)"],
					[17, "rgba(254,205,110, 1)"],
					[18, "rgba(254,205,110, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1.4],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt48",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208, 143, 88, 1)"],
					[12, "rgba(208, 143, 88, 1)"],
					[13, "rgba(208, 143, 88, 1)"],
					[14, "rgba(208, 143, 88, 1)"],
					[15, "rgba(196, 124, 73, 1)"],
					[16, "rgba(176, 98, 55, 1)"],
					[17, "rgba(176, 98, 55, 1)"],
					[18, "rgba(176, 98, 55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 7.8],
					[14, 8.8],
					[15, 9],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt49",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["!in", "X3", "03", "04", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208, 143, 88, 1)"],
					[12, "rgba(208, 143, 88, 1)"],
					[13, "rgba(208, 143, 88, 1)"],
					[14, "rgba(208, 143, 88, 1)"],
					[15, "rgba(196, 124, 73, 1)"],
					[16, "rgba(176, 98, 55, 1)"],
					[17, "rgba(176, 98, 55, 1)"],
					[18, "rgba(176, 98, 55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 7.8],
					[14, 8.8],
					[15, 9],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt50",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(254, 205, 120, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 5.8],
					[14, 6.8],
					[15, 7],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt51",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["!in", "X3", "03", "04", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "rgba(254, 205, 120, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 5.8],
					[14, 6.8],
					[15, 7],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt52",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430201", "430202", "430200"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208,143,88, 1)"],
					[12, "rgba(208,143,88, 1)"],
					[13, "rgba(208,143,88, 1)"],
					[14, "rgba(208,143,88, 1)"],
					[15, "rgba(196,124,73, 1)"],
					[16, "rgba(176,98,55, 1)"],
					[17, "rgba(176,98,55, 1)"],
					[18, "rgba(176,98,55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 3],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 7.6]
				]
			}
		}
	}, {
		"id": "tdt53",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430200", "430201", "430202"],
			["!in", "X3", "03", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter",
			"line-miter-limit": 2
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208, 143, 88, 1)"],
					[12, "rgba(208, 143, 88, 1)"],
					[13, "rgba(208, 143, 88, 1)"],
					[14, "rgba(208, 143, 88, 1)"],
					[15, "rgba(196, 124, 73, 1)"],
					[16, "rgba(176, 98, 55, 1)"],
					[17, "rgba(176, 98, 55, 1)"],
					[18, "rgba(176, 98, 55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 7.8],
					[14, 8.8],
					[15, 9],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt54",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430201", "430202", "430200"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,205,120, 1)"],
					[12, "rgba(254,205,120, 1)"],
					[13, "rgba(254,205,120, 1)"],
					[14, "rgba(254,205,120, 1)"],
					[15, "rgba(254,205,110, 1)"],
					[16, "rgba(254,205,110, 1)"],
					[17, "rgba(254,205,110, 1)"],
					[18, "rgba(254,205,110, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1.4],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt55",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "V1", "430201", "430202"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208,143,88, 1)"],
					[12, "rgba(208,143,88, 1)"],
					[13, "rgba(208,143,88, 1)"],
					[14, "rgba(208,143,88, 1)"],
					[15, "rgba(196,124,73, 1)"],
					[16, "rgba(176,98,55, 1)"],
					[17, "rgba(176,98,55, 1)"],
					[18, "rgba(176,98,55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 3],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 7.6]
				]
			}
		}
	}, {
		"id": "tdt56",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "V1", "430201", "430202"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,205,120, 1)"],
					[12, "rgba(254,205,120, 1)"],
					[13, "rgba(254,205,120, 1)"],
					[14, "rgba(254,205,120, 1)"],
					[15, "rgba(254,205,110, 1)"],
					[16, "rgba(254,205,110, 1)"],
					[17, "rgba(254,205,110, 1)"],
					[18, "rgba(254,205,110, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1.4],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt57",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430200", "430201", "430202"],
			["!in", "X3", "03", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter",
			"line-miter-limit": 2
		},
		"paint": {
			"line-color": "rgba(254, 205, 120, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 5.8],
					[14, 6.8],
					[15, 7],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt58",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(198, 133, 78, 1)"],
					[11, "rgba(200, 191, 161, 1)"],
					[12, "rgba(200, 191, 161, 1)"],
					[13, "rgba(200, 191, 161, 1)"],
					[14, "rgba(200, 191, 161, 1)"],
					[15, "rgba(214, 185, 90, 1)"],
					[16, "rgba(214, 185, 90, 1)"],
					[17, "rgba(214, 185, 90, 1)"],
					[18, "rgba(214, 185, 90, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2.4],
					[11, 4.6],
					[12, 5.4],
					[13, 7],
					[14, 8],
					[15, 9],
					[16, 10],
					[17, 11],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt59",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": {
				"stops": [
					[13, "rgba(125,89,203, 1)"],
					[14, "rgba(125,89,203, 1)"],
					[15, "rgba(142,97,209, 1)"],
					[16, "rgba(94,55,170, 1)"],
					[17, "rgba(94,55,170, 1)"],
					[18, "rgba(94,55,170, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[13, 3.6],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 8]
				]
			}
		}
	}, {
		"id": "tdt60",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-miter-limit": 2,
			"line-round-limit": 1.05
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(125, 89,203, 1)"],
					[12, "rgba(125, 89,203, 1)"],
					[13, "rgba(125, 89,203, 1)"],
					[14, "rgba(125, 89,203, 1)"],
					[15, "rgba(142, 97,209, 1)"],
					[16, "rgba(94, 55,170, 1)"],
					[17, "rgba(94, 55,170, 1)"],
					[18, "rgba(94, 55,170, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 8],
					[14, 9],
					[15, 10],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt61",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[13, "rgba(186,160,241, 1)"],
					[14, "rgba(186,160,241, 1)"],
					[15, "rgba(186,160,241, 1)"],
					[16, "rgba(186,160,241, 1)"],
					[17, "rgba(186,160,241, 1)"],
					[18, "rgba(186,160,241, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[13, 2],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt62",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-miter-limit": 2,
			"line-round-limit": 1.05
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(125, 89,203, 1)"],
					[12, "rgba(125, 89,203, 1)"],
					[13, "rgba(125, 89,203, 1)"],
					[14, "rgba(125, 89,203, 1)"],
					[15, "rgba(142, 97,209, 1)"],
					[16, "rgba(94, 55,170, 1)"],
					[17, "rgba(94, 55,170, 1)"],
					[18, "rgba(94, 55,170, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 8],
					[14, 9],
					[15, 10],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt63",
		"type": "line",
		"metadata": {
			"maputnik:comment": "lrdk_group"
		},
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "square"
		},
		"paint": {
			"line-color": "rgba(186, 160, 241, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 6],
					[14, 7],
					[15, 8],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt64",
		"type": "line",
		"metadata": {
			"maputnik:comment": "lrdk_group"
		},
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "square",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "rgba(186, 160, 241, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 6],
					[14, 7],
					[15, 8],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt65",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "none"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(155,155,155, 1)"],
					[16, "rgba(132,123,93, 1)"],
					[17, "rgba(132,123,93, 1)"],
					[18, "rgba(132,123,93, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2.6],
					[16, 4],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt66",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2],
					[16, 3],
					[17, 4],
					[18, 5]
				]
			},
			"line-dasharray": [3, 3]
		}
	}, {
		"id": "tdt67",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(220,211,181, 1)"],
					[16, "rgba(220,210,173, 1)"],
					[17, "rgba(220,210,173, 1)"],
					[18, "rgba(220,210,173, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 5],
					[16, 7],
					[17, 9],
					[18, 10]
				]
			},
			"line-dasharray": []
		}
	}, {
		"id": "tdt68",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 3],
					[16, 5],
					[17, 7],
					[18, 8]
				]
			},
			"line-dasharray": [3, 3]
		}
	}, {
		"id": "tdt69",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(178,178,178, 1)"],
					[16, "rgba(178,178,178, 1)"],
					[17, "rgba(178,178,178, 1)"],
					[18, "rgba(178,178,178, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2.2],
					[16, 4],
					[17, 6],
					[18, 7]
				]
			},
			"line-dasharray": []
		}
	}, {
		"id": "tdt70",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 1.6],
					[16, 3],
					[17, 5],
					[18, 6]
				]
			},
			"line-dasharray": [3, 3]
		}
	}, {
		"id": "tdt71",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(225, 217, 188, 1)"],
					[16, "rgba(225, 217, 188, 1)"],
					[17, "rgba(225, 217, 188, 1)"],
					[18, "rgba(225, 217, 188, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 4.6],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt72",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(225, 217, 188, 1)"],
					[16, "rgba(225, 217, 188, 1)"],
					[17, "rgba(225, 217, 188, 1)"],
					[18, "rgba(225, 217, 188, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 4.6],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt73",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2],
					[16, 3.5],
					[17, 4],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt74",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430500", "430501", "430502", "430503", "440400", "430600", "440600", "490500", "440300", "430400"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "square"
		},
		"paint": {
			"line-color": {
				"stops": [
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(255,255,255, 1)"],
					[17, "rgba(255,255,255, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 2.6],
					[16, 4],
					[17, 6],
					[18, 7]
				]
			}
		}
	}, {
		"id": "tdt75",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(220,219,205, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(220,219,205, 1)"],
					[15, "rgba(210,210,160, 1)"],
					[16, "rgba(132,123,93, 1)"],
					[17, "rgba(132,123,93, 1)"],
					[18, "rgba(220,210,173, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 4],
					[13, 4.4],
					[14, 5],
					[15, 6],
					[16, 8],
					[17, 10],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt76",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(223,223,215, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,255, 1)"],
					[15, "rgba(255,255,255, 1)"],
					[16, "rgba(254,240,145, 1)"],
					[17, "rgba(254,240,145, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2],
					[13, 2.4],
					[14, 3],
					[15, 4],
					[16, 6],
					[17, 8],
					[18, 7]
				]
			}
		}
	}, {
		"id": "tdt77",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(220,219,205, 1)"],
					[13, "rgba(220,219,205, 1)"],
					[14, "rgba(220,219,205, 1)"],
					[15, "rgba(224, 215, 183, 1)"],
					[16, "rgba(224, 215, 183, 1)"],
					[17, "rgba(224, 215, 183, 1)"],
					[18, "rgba(224, 215, 183, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 4],
					[13, 4.4],
					[14, 5],
					[15, 6],
					[16, 8],
					[17, 10],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt78",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(203,192, 162, 1)"],
					[12, "rgba(223,223,215, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,255, 1)"],
					[15, "rgba(252, 252, 251, 1)"],
					[16, "rgba(252, 252, 251, 1)"],
					[17, "rgba(252, 252, 251, 1)"],
					[18, "rgba(255,255,255, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2],
					[13, 2.4],
					[14, 3],
					[15, 4],
					[16, 6],
					[17, 8],
					[18, 7]
				]
			},
			"line-translate-anchor": "map"
		}
	}, {
		"id": "tdt79",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[15, 1],
					[16, 1.5],
					[17, 2],
					[18, 3]
				]
			}
		}
	}, {
		"id": "tdt80",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209,202,178, 1)"],
					[12, "rgba(209,202,178, 1)"],
					[13, "rgba(209,202,178, 1)"],
					[14, "rgba(209,202,178, 1)"],
					[15, "rgba(214,200,120, 1)"],
					[16, "rgba(214,200,120, 1)"],
					[17, "rgba(214,200,120, 1)"],
					[18, "rgba(214,200,120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 2.6],
					[14, 3],
					[15, 3.6],
					[16, 4.6],
					[17, 5.5],
					[18, 5.6]
				]
			}
		}
	}, {
		"id": "tdt81",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255,244,175, 1)"],
					[12, "rgba(255,244,175, 1)"],
					[13, "rgba(255,244,175, 1)"],
					[14, "rgba(255,244,175, 1)"],
					[15, "rgba(255,244,140, 1)"],
					[16, "rgba(254,240,145, 1)"],
					[17, "rgba(254,240,145, 1)"],
					[18, "rgba(254,240,145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 1.4],
					[15, 2],
					[16, 3],
					[17, 3.5],
					[18, 4]
				]
			}
		}
	}, {
		"id": "tdt82",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209,202,178, 1)"],
					[12, "rgba(209,202,178, 1)"],
					[13, "rgba(209,202,178, 1)"],
					[14, "rgba(209,202,178, 1)"],
					[15, "rgba(214,200,120, 1)"],
					[16, "rgba(214,200,120, 1)"],
					[17, "rgba(214,200,120, 1)"],
					[18, "rgba(214,200,120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 2.6],
					[14, 3],
					[15, 3.6],
					[16, 4.6],
					[17, 5.5],
					[18, 5.6]
				]
			}
		}
	}, {
		"id": "tdt83",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255,244,175, 1)"],
					[12, "rgba(255,244,175, 1)"],
					[13, "rgba(255,244,175, 1)"],
					[14, "rgba(255,244,175, 1)"],
					[15, "rgba(255,244,140, 1)"],
					[16, "rgba(254,240,145, 1)"],
					[17, "rgba(254,240,145, 1)"],
					[18, "rgba(254,240,145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 1.4],
					[15, 2],
					[16, 3],
					[17, 3.5],
					[18, 4]
				]
			}
		}
	}, {
		"id": "tdt84",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "X3", "04"],
			["in", "D3", "1", "2", "3", "4"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt85",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "X3", "04"],
			["in", "D3", "1", "2", "3", "4"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt86",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt87",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt88",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(209, 202, 178, 1)"],
					[12, "rgba(209, 202, 178, 1)"],
					[13, "rgba(209, 202, 178, 1)"],
					[14, "rgba(209, 202, 178, 1)"],
					[15, "rgba(214, 200, 120, 1)"],
					[16, "rgba(214, 200, 120, 1)"],
					[17, "rgba(214, 200, 120, 1)"],
					[18, "rgba(214, 200, 120, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 4.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 10],
					[18, 11]
				]
			}
		}
	}, {
		"id": "tdt89",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402", "420301"],
			["in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(255, 244, 175, 1)"],
					[12, "rgba(255, 244, 175, 1)"],
					[13, "rgba(255, 244, 175, 1)"],
					[14, "rgba(255, 244, 175, 1)"],
					[15, "rgba(255, 244, 140, 1)"],
					[16, "rgba(254, 240, 145, 1)"],
					[17, "rgba(254, 240, 145, 1)"],
					[18, "rgba(254, 240, 145, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 2.1],
					[13, 3],
					[14, 4],
					[15, 5],
					[16, 6],
					[17, 8],
					[18, 9]
				]
			}
		}
	}, {
		"id": "tdt90",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(200,191,161, 1)"],
					[12, "rgba(200,191,161, 1)"],
					[13, "rgba(200,191,161, 1)"],
					[14, "rgba(200,191,161, 1)"],
					[15, "rgba(214,185,90, 1)"],
					[16, "rgba(214,185,90, 1)"],
					[17, "rgba(214,185,90, 1)"],
					[18, "rgba(214,185,90, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 2.6],
					[14, 3.6],
					[15, 3.6],
					[16, 4.6],
					[17, 5.6],
					[18, 6.6]
				]
			}
		}
	}, {
		"id": "tdt91",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,240,158, 1)"],
					[12, "rgba(254, 240, 158, 1)"],
					[13, "rgba(254, 240, 158, 1)"],
					[14, "rgba(254, 240, 158, 1)"],
					[15, "rgba(254,240,130, 1)"],
					[16, "rgba(254,235,130, 1)"],
					[17, "rgba(254,235,130, 1)"],
					[18, "rgba(254,235,130, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 2],
					[15, 2],
					[16, 3],
					[17, 4],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt92",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(198, 133, 78, 1)"],
					[11, "rgba(200, 191, 161, 1)"],
					[12, "rgba(200, 191, 161, 1)"],
					[13, "rgba(200, 191, 161, 1)"],
					[14, "rgba(200, 191, 161, 1)"],
					[15, "rgba(214, 185, 90, 1)"],
					[16, "rgba(214, 185, 90, 1)"],
					[17, "rgba(214, 185, 90, 1)"],
					[18, "rgba(214, 185, 90, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2.4],
					[11, 4.6],
					[12, 5.4],
					[13, 7],
					[14, 8],
					[15, 9],
					[16, 10],
					[17, 11],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt93",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(254, 244, 175, 1)"],
					[11, "rgba(254, 240, 158, 1)"],
					[12, "rgba(254, 240, 158, 1)"],
					[13, "rgba(254, 240, 158, 1)"],
					[14, "rgba(254, 240, 158, 1)"],
					[15, "rgba(254, 240, 130, 1)"],
					[16, "rgba(254, 235, 130, 1)"],
					[17, "rgba(254, 235, 130, 1)"],
					[18, "rgba(254, 235, 130, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2],
					[11, 2.6],
					[12, 3.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 9],
					[18, 10]
				]
			}
		}
	}, {
		"id": "tdt94",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["!in", "X3", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round",
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[10, "rgba(254, 244, 175, 1)"],
					[11, "rgba(254, 240, 158, 1)"],
					[12, "rgba(254, 240, 158, 1)"],
					[13, "rgba(254, 240, 158, 1)"],
					[14, "rgba(254, 240, 158, 1)"],
					[15, "rgba(254, 240, 130, 1)"],
					[16, "rgba(254, 235, 130, 1)"],
					[17, "rgba(254, 235, 130, 1)"],
					[18, "rgba(254, 235, 130, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[10, 2],
					[11, 2.6],
					[12, 3.4],
					[13, 5],
					[14, 6],
					[15, 7],
					[16, 8],
					[17, 9],
					[18, 10]
				]
			}
		}
	}, {
		"id": "tdt95",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208,143,88, 1)"],
					[12, "rgba(208,143,88, 1)"],
					[13, "rgba(208,143,88, 1)"],
					[14, "rgba(208,143,88, 1)"],
					[15, "rgba(196,124,73, 1)"],
					[16, "rgba(176,98,55, 1)"],
					[17, "rgba(176,98,55, 1)"],
					[18, "rgba(176,98,55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 3],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 7.6]
				]
			}
		}
	}, {
		"id": "tdt96",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,205,120, 1)"],
					[12, "rgba(254,205,120, 1)"],
					[13, "rgba(254,205,120, 1)"],
					[14, "rgba(254,205,120, 1)"],
					[15, "rgba(254,205,110, 1)"],
					[16, "rgba(254,205,110, 1)"],
					[17, "rgba(254,205,110, 1)"],
					[18, "rgba(254,205,110, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1.4],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt97",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208, 143, 88, 1)"],
					[12, "rgba(208, 143, 88, 1)"],
					[13, "rgba(208, 143, 88, 1)"],
					[14, "rgba(208, 143, 88, 1)"],
					[15, "rgba(196, 124, 73, 1)"],
					[16, "rgba(176, 98, 55, 1)"],
					[17, "rgba(176, 98, 55, 1)"],
					[18, "rgba(176, 98, 55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 7.8],
					[14, 8.8],
					[15, 9],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt98",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["in", "X3", "04"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(254, 205, 120, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 5.8],
					[14, 6.8],
					[15, 7],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt99",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["!in", "X3", "03", "04", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208, 143, 88, 1)"],
					[12, "rgba(208, 143, 88, 1)"],
					[13, "rgba(208, 143, 88, 1)"],
					[14, "rgba(208, 143, 88, 1)"],
					[15, "rgba(196, 124, 73, 1)"],
					[16, "rgba(176, 98, 55, 1)"],
					[17, "rgba(176, 98, 55, 1)"],
					[18, "rgba(176, 98, 55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 7.8],
					[14, 8.8],
					[15, 9],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt100",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["!in", "X3", "03", "04", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "rgba(254, 205, 120, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 5.8],
					[14, 6.8],
					[15, 7],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt101",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430201", "430202", "430200"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208,143,88, 1)"],
					[12, "rgba(208,143,88, 1)"],
					[13, "rgba(208,143,88, 1)"],
					[14, "rgba(208,143,88, 1)"],
					[15, "rgba(196,124,73, 1)"],
					[16, "rgba(176,98,55, 1)"],
					[17, "rgba(176,98,55, 1)"],
					[18, "rgba(176,98,55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 2.6],
					[12, 2.6],
					[13, 3],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 7.6]
				]
			}
		}
	}, {
		"id": "tdt102",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430201", "430202", "430200"],
			["in", "X3", "03", "05", "12", "16", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(254,205,120, 1)"],
					[12, "rgba(254,205,120, 1)"],
					[13, "rgba(254,205,120, 1)"],
					[14, "rgba(254,205,120, 1)"],
					[15, "rgba(254,205,110, 1)"],
					[16, "rgba(254,205,110, 1)"],
					[17, "rgba(254,205,110, 1)"],
					[18, "rgba(254,205,110, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1.4],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			}
		}
	}, {
		"id": "tdt103",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430200", "430201", "430202"],
			["!in", "X3", "03", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter",
			"line-miter-limit": 2
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(208, 143, 88, 1)"],
					[12, "rgba(208, 143, 88, 1)"],
					[13, "rgba(208, 143, 88, 1)"],
					[14, "rgba(208, 143, 88, 1)"],
					[15, "rgba(196, 124, 73, 1)"],
					[16, "rgba(176, 98, 55, 1)"],
					[17, "rgba(176, 98, 55, 1)"],
					[18, "rgba(176, 98, 55, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 7.8],
					[14, 8.8],
					[15, 9],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt104",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430200", "430201", "430202"],
			["!in", "X3", "03", "05", "12", "0b", "16"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "rgba(254, 205, 120, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 5.8],
					[14, 6.8],
					[15, 7],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			},
			"line-translate-anchor": "map"
		}
	}, {
		"id": "tdt105",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-join": "miter",
			"line-cap": "butt"
		},
		"paint": {
			"line-color": {
				"stops": [
					[13, "rgba(125,89,203, 1)"],
					[14, "rgba(125,89,203, 1)"],
					[15, "rgba(142,97,209, 1)"],
					[16, "rgba(94,55,170, 1)"],
					[17, "rgba(94,55,170, 1)"],
					[18, "rgba(94,55,170, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[13, 3.6],
					[14, 4.6],
					[15, 5.6],
					[16, 6.1],
					[17, 6.6],
					[18, 8]
				]
			},
			"line-translate-anchor": "map"
		}
	}, {
		"id": "tdt106",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-join": "miter",
			"line-cap": "butt"
		},
		"paint": {
			"line-color": {
				"stops": [
					[13, "rgba(186,160,241, 1)"],
					[14, "rgba(186,160,241, 1)"],
					[15, "rgba(186,160,241, 1)"],
					[16, "rgba(186,160,241, 1)"],
					[17, "rgba(186,160,241, 1)"],
					[18, "rgba(186,160,241, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[13, 2],
					[14, 3],
					[15, 4],
					[16, 4.5],
					[17, 5],
					[18, 6]
				]
			},
			"line-offset": 0
		}
	}, {
		"id": "tdt107",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-miter-limit": 2,
			"line-round-limit": 1.05,
			"line-join": "miter"
		},
		"paint": {
			"line-color": {
				"stops": [
					[11, "rgba(125, 89,203, 1)"],
					[12, "rgba(125, 89,203, 1)"],
					[13, "rgba(125, 89,203, 1)"],
					[14, "rgba(125, 89,203, 1)"],
					[15, "rgba(142, 97,209, 1)"],
					[16, "rgba(94, 55,170, 1)"],
					[17, "rgba(94, 55,170, 1)"],
					[18, "rgba(94, 55,170, 1)"]
				]
			},
			"line-width": {
				"stops": [
					[11, 6],
					[12, 7],
					[13, 8],
					[14, 9],
					[15, 10],
					[16, 11],
					[17, 12],
					[18, 14]
				]
			}
		}
	}, {
		"id": "tdt108",
		"type": "line",
		"metadata": {
			"maputnik:comment": "lrdk_group"
		},
		"source": "tdt-vector-tile",
		"source-layer": "AB",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "03", "05", "06", "07", "0b"],
			["!=", "D9", "3"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "butt",
			"line-join": "miter"
		},
		"paint": {
			"line-color": "rgba(186, 160, 241, 1)",
			"line-width": {
				"stops": [
					[11, 4],
					[12, 5],
					[13, 6],
					[14, 7],
					[15, 8],
					[16, 9],
					[17, 10],
					[18, 12]
				]
			}
		}
	}, {
		"id": "tdt109",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "01"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt110",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "01"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(194,58,48, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt111",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "02"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt112",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "02"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(0,96,152, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt113",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "04"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt114",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "04"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(0,142,156, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt115",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "05"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt116",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "05"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(166,33,127, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt117",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "06"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt118",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "06"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(210,151,0, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt119",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "07"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt120",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "07"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(246,197,130, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt121",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "08"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt122",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "08"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(0,155,107, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt123",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "09"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt124",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "09"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(143,195,31, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt125",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "10"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt126",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "10"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(0,155,192, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt127",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "13"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt128",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "13"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(249,231,0, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt129",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "14"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt130",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "14"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(213,167,161, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt131",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "15"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt132",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "15"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(91,44,104, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt133",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "16"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt134",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "16"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(118,163,46, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt135",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "89"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt136",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "89"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(229,6,25, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt137",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "90"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt138",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "90"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(228,96,34, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt139",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "91"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt140",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "91"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(0,142,156, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt141",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "92"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt142",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "92"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(228,96,34, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt143",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "93"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt144",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "93"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(162,155,187, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt145",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "94"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt146",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "94"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(228,0,119, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt147",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "95"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt148",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "95"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(0,74,159, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt149",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "98"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt150",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "98"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(194,58,48, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt151",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "99"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt152",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "99"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(222,130,178, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt153",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "S1"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(255,255,255, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 3.4],
					[12, 3.4],
					[13, 5],
					[14, 5],
					[15, 5],
					[16, 5],
					[17, 5],
					[18, 5]
				]
			}
		}
	}, {
		"id": "tdt154",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AM",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "C2", "S1"]
		],
		"layout": {
			"visibility": "visible",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(179,90,32, 1)",
			"line-translate-anchor": "map",
			"line-width": {
				"stops": [
					[11, 1.4],
					[12, 1.5],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt155",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AL",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(180,190,190, 1)",
			"fill-opacity": 0.4
		}
	}, {
		"id": "tdt156",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AL",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["==", "C8", "1"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(180,190,190, 1)",
			"fill-opacity": 0.4
		}
	}, {
		"id": "tdt157",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AD",
		"minzoom": 13,
		"maxzoom": 14,
		"filter": ["all", ["!=", "F5", ""],
			["==", "C8", "1"],
			["==", "E0", "1"],
			["==", "K0", "110000000"],
			["in", "A6", "450101", "450102"]
		],
		"layout": {
			"visibility": "visible",
			"text-field": "{undefined}",
			"icon-image": "beijingw1"
		}
	}, {
		"id": "tdt158",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AD",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["!=", "F5", ""],
			["==", "C8", "1"],
			["==", "E0", "1"],
			["==", "K0", "110000000"],
			["in", "A6", "450101", "450102"]
		],
		"layout": {
			"visibility": "visible",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"icon-image": "beijinga1",
			"text-size": 12,
			"text-anchor": "left",
			"text-offset": [0.8, -0.1]
		},
		"paint": {
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-color": "rgba(10,30,55, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt159",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AD",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["!=", "F5", ""],
			["==", "C8", "1"],
			["==", "E0", "0"],
			["==", "K0", "110000000"],
			["in", "A6", "450101", "450102"]
		],
		"layout": {
			"visibility": "visible",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"icon-image": "beijing1",
			"text-size": 12,
			"text-anchor": "left",
			"text-offset": [0.8, -0.15]
		},
		"paint": {
			"text-color": "rgba(10,30,55, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt160",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AD",
		"minzoom": 17,
		"maxzoom": 21,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["==", "A6", "450190"],
			["in", "L1", "0"]
		],
		"layout": {
			"visibility": "visible",
			"icon-image": "chuf1"
		},
		"paint": {
			"text-color": "rgba(10,30,55, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt161",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AD",
		"minzoom": 17,
		"maxzoom": 21,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["in", "L1", "1"]
		],
		"layout": {
			"visibility": "visible",
			"text-font": ["arial"],
			"text-field": "{H7}",
			"icon-image": "lanb1",
			"text-size": 12,
			"text-anchor": "center",
			"icon-offset": [0.1, -2]
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt162",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AD",
		"minzoom": 17,
		"maxzoom": 21,
		"filter": ["all", ["==", "C8", "1"],
			["==", "K0", "110000000"],
			["in", "L1", "2"]
		],
		"layout": {
			"visibility": "visible",
			"text-font": ["arial"],
			"text-field": "{H7}",
			"icon-image": "lanc1",
			"text-size": 12,
			"text-anchor": "center",
			"icon-offset": [0, -2]
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt163",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440300", "430400"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 12,
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-color": "rgba(40,40,40, 1)",
			"text-halo-width": 1
		}
	}, {
		"id": "tdt164",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 16,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440400", "430600", "440600"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 12,
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-color": "rgba(40,40,40, 1)",
			"text-halo-width": 1
		}
	}, {
		"id": "tdt165",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 16,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "440100", "440200", "430501", "430502", "430503"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 12,
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-color": "rgba(40,40,40, 1)",
			"text-halo-width": 1
		}
	}, {
		"id": "tdt166",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 16,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420400", "420500", "420402"],
			["!in", "D3", "1", "2", "3", "4"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 12,
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-color": "rgba(40,40,40, 1)",
			"text-halo-width": {
				"stops": [
					[16, 1],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt167",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 12,
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,230, 1)"],
					[15, "rgba(253,245,220, 1)"],
					[16, "rgba(253,245,220, 1)"],
					[17, "rgba(253,245,220, 1)"],
					[18, "rgba(253,245,220, 1)"]
				]
			},
			"text-color": "rgba(104,54,13, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt168",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 13,
		"maxzoom": 17,
		"filter": ["all", ["in", "V1", "420301", "420302"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0a", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 12,
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,230, 1)"],
					[15, "rgba(253,245,220, 1)"],
					[16, "rgba(253,245,220, 1)"],
					[17, "rgba(253,245,220, 1)"],
					[18, "rgba(253,245,220, 1)"]
				]
			},
			"text-color": "rgba(104,54,13, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt169",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 14],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[11, "rgba(255,255,255, 1)"],
					[12, "rgba(255,255,255, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,230, 1)"],
					[15, "rgba(255,244,130, 1)"],
					[16, "rgba(255,244,130, 1)"],
					[17, "rgba(255,244,130, 1)"],
					[18, "rgba(255,244,130, 1)"]
				]
			},
			"text-color": "rgba(104,54,13, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt170",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 12,
		"maxzoom": 17,
		"filter": ["all", ["in", "V1", "420201", "420202"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0a", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 14],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[11, "rgba(255,255,255, 1)"],
					[12, "rgba(255,255,255, 1)"],
					[13, "rgba(255,255,255, 1)"],
					[14, "rgba(255,255,230, 1)"],
					[15, "rgba(255,244,130, 1)"],
					[16, "rgba(255,244,130, 1)"],
					[17, "rgba(255,244,130, 1)"],
					[18, "rgba(255,244,130, 1)"]
				]
			},
			"text-color": "rgba(104,54,13, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt171",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420201"],
			["!in", "X3", "03", "04", "05", "12", "15", "16", "17", "0b"],
			["has", "J9"],
			["!=", "J9", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 9,
			"text-field": "{J9}",
			"text-rotation-alignment": "viewport",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false,
			"icon-image": "shengdao1",
			"icon-pitch-alignment": "map",
			"icon-rotation-alignment": "viewport",
			"icon-offset": [0, -1]
		},
		"paint": {
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt172",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 15,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 14],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[11, "rgba(255,231,159, 1)"],
					[12, "rgba(255,231,159, 1)"],
					[13, "rgba(255,231,159, 1)"],
					[14, "rgba(255,222,102, 1)"],
					[15, "rgba(255,222,102, 1)"],
					[16, "rgba(255,222,102, 1)"],
					[17, "rgba(255,222,102, 1)"]
				]
			},
			"text-color": {
				"stops": [
					[11, "rgba(134,70,17, 1)"],
					[12, "rgba(134,70,17, 1)"],
					[13, "rgba(134,70,17, 1)"],
					[14, "rgba(104,54,13, 1)"],
					[15, "rgba(104,54,13, 1)"],
					[16, "rgba(104,54,13, 1)"],
					[17, "rgba(70,35,7, 1)"],
					[18, "rgba(70,35,7, 1)"]
				]
			},
			"text-halo-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt173",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 17,
		"filter": ["all", ["in", "V1", "420101", "420102"],
			["!in", "X3", "03", "04", "05", "08", "12", "15", "16", "17", "0a", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 14],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[11, "rgba(255,231,159, 1)"],
					[12, "rgba(255,231,159, 1)"],
					[13, "rgba(255,231,159, 1)"],
					[14, "rgba(255,222,102, 1)"],
					[15, "rgba(255,222,102, 1)"],
					[16, "rgba(255,222,102, 1)"],
					[17, "rgba(255,222,102, 1)"]
				]
			},
			"text-color": {
				"stops": [
					[11, "rgba(134,70,17, 1)"],
					[12, "rgba(134,70,17, 1)"],
					[13, "rgba(134,70,17, 1)"],
					[14, "rgba(104,54,13, 1)"],
					[15, "rgba(104,54,13, 1)"],
					[16, "rgba(104,54,13, 1)"],
					[17, "rgba(70,35,7, 1)"],
					[18, "rgba(70,35,7, 1)"]
				]
			},
			"text-halo-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt174",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420101"],
			["!in", "X3", "03", "04", "05", "12", "15", "16", "17", "0b"],
			["!=", "J9", ""],
			["has", "J9"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 9,
			"text-field": "{J9}",
			"text-rotation-alignment": "viewport",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"icon-image": "guodao1",
			"symbol-spacing": 1000,
			"icon-rotation-alignment": "viewport",
			"icon-offset": [0, -1]
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt175",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "430200", "430201", "4430202"],
			["!in", "X3", "03", "05", "08", "16", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 14],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"text-field": "{Z5}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"symbol-spacing": 1000,
			"symbol-avoid-edges": false
		},
		"paint": {
			"text-halo-color": {
				"stops": [
					[11, "rgba(255,231,159, 1)"],
					[12, "rgba(255,231,159, 1)"],
					[13, "rgba(255,231,159, 1)"],
					[14, "rgba(255,222,102, 1)"],
					[15, "rgba(255,222,102, 1)"],
					[16, "rgba(255,222,102, 1)"],
					[17, "rgba(255,222,102, 1)"]
				]
			},
			"text-color": {
				"stops": [
					[11, "rgba(134,70,17, 1)"],
					[12, "rgba(134,70,17, 1)"],
					[13, "rgba(134,70,17, 1)"],
					[14, "rgba(104,54,13, 1)"],
					[15, "rgba(104,54,13, 1)"],
					[16, "rgba(104,54,13, 1)"],
					[17, "rgba(70,35,7, 1)"],
					[18, "rgba(70,35,7, 1)"]
				]
			},
			"text-halo-width": {
				"stops": [
					[11, 1],
					[12, 1],
					[13, 1],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt176",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801", "420802"],
			["!in", "X3", "03", "05", "08", "16", "0b", "0f"],
			["has", "Z5"],
			["!=", "Z5", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 14],
					[13, 14],
					[14, 14],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"text-field": "{J9}",
			"text-rotation-alignment": "map",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "none",
			"icon-image": "gaosua1",
			"symbol-spacing": 1000
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-color": {
				"stops": [
					[6, "rgba(123, 88, 190, 1)"],
					[12, "rgba(123, 88, 190, 1)"]
				]
			},
			"text-halo-width": {
				"stops": [
					[11, 1],
					[12, 2],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt177",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "V1", "420801"],
			["!in", "X3", "03", "04", "05", "12", "15", "16", "17", "0b"],
			["has", "J9"],
			["!=", "J9", ""]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"symbol-placement": "line",
			"text-size": 10,
			"text-field": "{J9}",
			"text-rotation-alignment": "viewport",
			"icon-padding": 2,
			"text-padding": 1,
			"text-letter-spacing": 0.16,
			"visibility": "visible",
			"icon-image": "gaosua1",
			"symbol-spacing": 1000,
			"icon-rotation-alignment": "viewport",
			"icon-offset": [0, -1]
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-color": {
				"stops": [
					[6, "rgba(123, 88, 190, 1)"],
					[12, "rgba(123, 88, 190, 1)"]
				]
			},
			"text-halo-width": {
				"stops": [
					[11, 1],
					[12, 2],
					[13, 2],
					[14, 2],
					[15, 2],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			}
		}
	}, {
		"id": "tdt178",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["==", "direction", "3"]],
		"layout": {
			"icon-image": "arrowRight",
			"symbol-placement": "line-center",
			"icon-padding": 80
		}
	}, {
		"id": "tdt179",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AA",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["==", "direction", "2"]],
		"layout": {
			"icon-image": "arrowLeft",
			"symbol-placement": "line-center",
			"icon-padding": 80
		}
	}, {
		"id": "tdt180",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "110200"],
			["in", "P5", "010007"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{undefined}",
			"text-font": [],
			"text-offset": [0, 0],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "kfc1"
		}
	}, {
		"id": "tdt181",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "110200"],
			["==", "P5", "010003"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{undefined}",
			"text-font": [],
			"text-offset": [0, 0],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "maidanglao1"
		}
	}, {
		"id": "tdt182",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "110101"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "dian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": true,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(127,127,127, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt183",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "110102"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "dian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-offset": [0.6, 0],
			"text-justify": "auto",
			"symbol-avoid-edges": true
		},
		"paint": {
			"text-color": "rgba(127,127,127, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt184",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "110103"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "dian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-offset": [0.4, 0],
			"text-justify": "auto",
			"symbol-avoid-edges": true
		},
		"paint": {
			"text-color": "rgba(127,127,127, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt185",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "120103"],
			["<", "B1", "130100"],
			["!=", "B1", "120200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "dian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": true,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(108,125,138, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt186",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "120101"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"text-letter-spacing": 0.1,
			"icon-image": "jiudian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": true,
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt187",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "120102"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "jiudian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt188",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "130501"],
			["<", "B1", "130600"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "jiudian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt189",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "130101", "130102", "130202", "130203", "130302", "130303"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "shangchang1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(145,145,145, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt190",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "130601"],
			["<", "B1", "130700"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "shangchang1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(145,145,145, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt191",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "130104", "130105"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "chaoshi1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(145,145,145, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt192",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "130401", "130402"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "dian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(145,145,145, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt193",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "130405"],
			["<", "B1", "130500"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "dian1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(145,145,145, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt194",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150102"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "atm1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(145,145,145, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt195",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130001"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "gonghang1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt196",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130007"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "guangda1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt197",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130009"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "guangfa1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt198",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130008"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "huaxia1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt199",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130048"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "jiansheyinhang1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt200",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130004"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "jiaohang1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt201",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130006"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "minsheng1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt202",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130002"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "nonghang1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt203",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130012"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "pufa1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt204",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130046"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"icon-image": "pingan1",
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt205",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130011"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "xingye1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt206",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130005"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhaoshangyinhang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt207",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["==", "P5", "130003"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhongguoyinhang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt208",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["in", "P5", "130036", "130049"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhongxin1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt209",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "150101"],
			["in", "P5", "130047"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "qitayinhang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt210",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "130013"],
			["<=", "B1", "130035"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "qitayinhang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt211",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "130037"],
			["<=", "B1", "130045"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "qitayinhang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt212",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "130050"],
			["<=", "B1", "140000"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "qitayinhang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt213",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "150103"],
			["<", "B1", "150200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt214",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "160203"],
			["<", "B1", "160208"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "bowuguan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(105,102,102, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt215",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "160101"],
			["<", "B1", "160106"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "xuexiao1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(51,71,107, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt216",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "160109"],
			["<", "B1", "160200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt217",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "160201"],
			["<", "B1", "160203"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt218",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 17,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "160208"],
			["<", "B1", "170100"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt219",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "170101"],
			["<", "B1", "170104"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "yiyuan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt220",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 13,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "170105"],
			["<", "B1", "170108"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "yiyuan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt221",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 16,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "170108"],
			["<", "B1", "170200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "yiyuan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt222",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 16,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "170201"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "yiyuan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt223",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "180304", "180305", "180306", "180308", "180309", "180310"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["Source Han Sans CN Bold"],
			"visibility": "visible",
			"text-size": {
				"stops": [
					[11, 12],
					[12, 12],
					[13, 12],
					[14, 12],
					[15, 13],
					[16, 13],
					[17, 13],
					[18, 13]
				]
			},
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "gongyuan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(80,105,60, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt224",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "180210"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "yinyueting1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt225",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "180209"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dianyingyuan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt226",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "180307"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "youlechang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt227",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "180400"],
			["!=", "M2", ""]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt228",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "180400"],
			["!=", "M2", ""]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt229",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "180101", "180102", "180103", "180104", "180301", "180302", "180303"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt230",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "180110"],
			["<", "B1", "180200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt231",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "180401"],
			["<", "B1", "190100"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt232",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "190107", "190101"],
			["==", "M2", "190001"],
			["!=", "W2", ""]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{W2}",
			"text-font": {
				"stops": [
					[12, ["WenQuanYi Micro Hei Mono"]],
					[13, ["WenQuanYi Micro Hei Mono"]],
					[14, ["WenQuanYi Micro Hei Mono"]],
					[15, ["Source Han Sans CN Bold"]],
					[16, ["Source Han Sans CN Bold"]],
					[17, ["Source Han Sans CN Bold"]],
					[18, ["Source Han Sans CN Bold"]]
				]
			},
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhengfujiguan1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": {
				"stops": [
					[12, "rgba(40,40,40, 1)"],
					[13, "rgba(40,40,40, 1)"],
					[14, "rgba(40,40,40, 1)"],
					[15, "rgba(80,60,60, 1)"],
					[16, "rgba(80,60,60, 1)"],
					[17, "rgba(80,60,60, 1)"],
					[18, "rgba(80,60,60, 1)"]
				]
			},
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 1],
					[14, 1],
					[15, 1],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			},
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt233",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "M2", "190002"],
			["!=", "W2", ""]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{W2}",
			"text-font": {
				"stops": [
					[13, ["WenQuanYi Micro Hei Mono"]],
					[14, ["WenQuanYi Micro Hei Mono"]],
					[15, ["Source Han Sans CN Bold"]],
					[16, ["Source Han Sans CN Bold"]],
					[17, ["Source Han Sans CN Bold"]],
					[18, ["Source Han Sans CN Bold"]]
				]
			},
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhengfujiguan1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": {
				"stops": [
					[13, "rgba(40,40,40, 1)"],
					[14, "rgba(40,40,40, 1)"],
					[15, "rgba(80,60,60, 1)"],
					[16, "rgba(80,60,60, 1)"],
					[17, "rgba(80,60,60, 1)"],
					[18, "rgba(80,60,60, 1)"]
				]
			},
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": {
				"stops": [
					[13, 1],
					[14, 1],
					[15, 1],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			},
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt234",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "M2", "190003"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": {
				"stops": [
					[12, ["WenQuanYi Micro Hei Mono"]],
					[13, ["WenQuanYi Micro Hei Mono"]],
					[14, ["WenQuanYi Micro Hei Mono"]],
					[15, ["Source Han Sans CN Bold"]],
					[16, ["Source Han Sans CN Bold"]],
					[17, ["Source Han Sans CN Bold"]],
					[18, ["Source Han Sans CN Bold"]]
				]
			},
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhengfujiguan1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": {
				"stops": [
					[12, "rgba(40,40,40, 1)"],
					[13, "rgba(40,40,40, 1)"],
					[14, "rgba(40,40,40, 1)"],
					[15, "rgba(80,60,60, 1)"],
					[16, "rgba(80,60,60, 1)"],
					[17, "rgba(80,60,60, 1)"],
					[18, "rgba(80,60,60, 1)"]
				]
			},
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 1],
					[14, 1],
					[15, 1],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			},
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt235",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "190102"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": {
				"stops": [
					[12, ["WenQuanYi Micro Hei Mono"]],
					[13, ["WenQuanYi Micro Hei Mono"]],
					[14, ["WenQuanYi Micro Hei Mono"]],
					[15, ["Source Han Sans CN Bold"]],
					[16, ["Source Han Sans CN Bold"]],
					[17, ["Source Han Sans CN Bold"]],
					[18, ["Source Han Sans CN Bold"]]
				]
			},
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhengfujiguan1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": {
				"stops": [
					[12, "rgba(40,40,40, 1)"],
					[13, "rgba(40,40,40, 1)"],
					[14, "rgba(40,40,40, 1)"],
					[15, "rgba(80,60,60, 1)"],
					[16, "rgba(80,60,60, 1)"],
					[17, "rgba(80,60,60, 1)"],
					[18, "rgba(80,60,60, 1)"]
				]
			},
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 1],
					[14, 1],
					[15, 1],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			},
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt236",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "M2", "190004"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": {
				"stops": [
					[12, ["WenQuanYi Micro Hei Mono"]],
					[13, ["WenQuanYi Micro Hei Mono"]],
					[14, ["WenQuanYi Micro Hei Mono"]],
					[15, ["Source Han Sans CN Bold"]],
					[16, ["Source Han Sans CN Bold"]],
					[17, ["Source Han Sans CN Bold"]],
					[18, ["Source Han Sans CN Bold"]]
				]
			},
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhengfujiguan1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": {
				"stops": [
					[12, "rgba(40,40,40, 1)"],
					[13, "rgba(40,40,40, 1)"],
					[14, "rgba(40,40,40, 1)"],
					[15, "rgba(80,60,60, 1)"],
					[16, "rgba(80,60,60, 1)"],
					[17, "rgba(80,60,60, 1)"],
					[18, "rgba(80,60,60, 1)"]
				]
			},
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 1],
					[14, 1],
					[15, 1],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			},
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt237",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "190103"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": {
				"stops": [
					[12, ["WenQuanYi Micro Hei Mono"]],
					[13, ["WenQuanYi Micro Hei Mono"]],
					[14, ["WenQuanYi Micro Hei Mono"]],
					[15, ["Source Han Sans CN Bold"]],
					[16, ["Source Han Sans CN Bold"]],
					[17, ["Source Han Sans CN Bold"]],
					[18, ["Source Han Sans CN Bold"]]
				]
			},
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "zhengfujiguan1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": {
				"stops": [
					[12, "rgba(40,40,40, 1)"],
					[13, "rgba(40,40,40, 1)"],
					[14, "rgba(40,40,40, 1)"],
					[15, "rgba(80,60,60, 1)"],
					[16, "rgba(80,60,60, 1)"],
					[17, "rgba(80,60,60, 1)"],
					[18, "rgba(80,60,60, 1)"]
				]
			},
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": {
				"stops": [
					[12, 1],
					[13, 1],
					[14, 1],
					[15, 1],
					[16, 2],
					[17, 2],
					[18, 2]
				]
			},
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt238",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "190107"],
			["!in", "M2", "190001", "190002", "190003"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-offset": [0.6, 0],
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1"
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt239",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "190101"],
			["<=", "B1", "190109"],
			["!in", "B1", "190106", "190107", "190102", "190103"],
			["!in", "M2", "190001", "190002", "190003", "190004"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt240",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "190110"],
			["<=", "B1", "190113"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt241",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "190204"],
			["<=", "B1", "190300"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt242",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "190200"],
			["<=", "B1", "190203"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "gonganju1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt243",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "190401"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "simiao1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt244",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "190301"],
			["<", "B1", "190400"],
			[">=", "B1", "190402"],
			["<", "B1", "190500"],
			[">=", "B1", "190501"],
			["<", "B1", "200100"],
			["in", "B1", "190113", "190114", "190200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt245",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "200103"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dasha1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(93,112,97, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt246",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "200105"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "shangchang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt247",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 18,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "200101"],
			["<", "B1", "200103"],
			[">=", "B1", "200301"],
			["<", "B1", "200303"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt248",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "210210"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "youju1",
			"text-offset": [0.6, -0.1]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt249",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 14,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "210209"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "gongmu1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt250",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "210301", "210303", "210214"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "gongmu1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt251",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "210212"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "wc1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt252",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "230201", "230202"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(100,100,100, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt253",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 12,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "230201", "230103"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "huochezhan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(55,64,138, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt254",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "230104"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "changtuchezhan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt255",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "230104"],
			["<", "B1", "230203"],
			[">=", "B1", "230228"],
			["<", "B1", "240100"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "changtuchezhan1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(40,40,40, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt256",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "230105"],
			["<", "B1", "230109"],
			[">=", "B1", "230110"],
			["<", "B1", "230200"],
			["==", "B1", "230102"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt257",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "230205"],
			["<", "B1", "230208"],
			[">=", "B1", "230224"],
			["<", "B1", "230228"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt258",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 15,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "230212"],
			["<", "B1", "230216"]
		],
		"layout": {
			"symbol-placement": "point",
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "jiayouzhan1",
			"text-offset": [0.6, -0.2],
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{undefined}"
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt259",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "230109"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "feijichang1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(55,64,138, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt260",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "240100"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt261",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "260203"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": 12,
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt262",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["==", "B1", "260400"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 13],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "quxian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(117,117,117, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt263",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			["in", "B1", "260109", "260111"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 13],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(97,97,970, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt264",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "260100"],
			["<", "B1", "270100"],
			["!=", "B1", "260200"],
			["in", "B1", "260203", "260300", "260400", "260500", "260109", "260111"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 13],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(117,117,117, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt265",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 11,
		"maxzoom": 19,
		"filter": ["all", ["in", "S8", "11", "12", "13", "14", "15", "16", "17", "18"],
			["!=", "F5", ""],
			[">=", "B1", "270101"],
			["<", "B1", "270200"]
		],
		"layout": {
			"symbol-placement": "point",
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"visibility": "visible",
			"text-size": {
				"stops": [
					[11, 13],
					[12, 13],
					[13, 13],
					[14, 13],
					[15, 14],
					[16, 14],
					[17, 14],
					[18, 14]
				]
			},
			"symbol-spacing": 250,
			"text-letter-spacing": 0.1,
			"text-allow-overlap": false,
			"text-anchor": "left",
			"text-justify": "auto",
			"symbol-avoid-edges": false,
			"icon-image": "dian1",
			"text-offset": [0.6, -0.2]
		},
		"paint": {
			"text-color": "rgba(82,73,73, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 1,
			"text-halo-blur": 0
		}
	}, {
		"id": "tdt266",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "O4", "3", "9"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 14,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(137,90,68, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt267",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "O4", "4", "10"],
			["==", "I8", "2"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt268",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "O4", "4", "10", "31"],
			["==", "I8", "3"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu3",
			"visibility": "visible",
			"icon-offset": [0, 2]
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt269",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "O4", "4", "10", "31"],
			["==", "I8", "4"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu4",
			"visibility": "visible",
			"text-offset": [0, -0.2]
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt270",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["in", "O4", "4", "10", "31"],
			["==", "I8", "5"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu5",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt271",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "6"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu6",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt272",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "42"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu4-2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt273",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "52"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu5-2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt274",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "62"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu6-2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt275",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "72"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu7-2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt276",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "82"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu8-2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt277",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 11,
		"maxzoom": 13,
		"filter": ["all", ["==", "O4", "4"],
			["==", "I8", "92"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-anchor": "center",
			"icon-image": "qu9-2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt278",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AT",
		"minzoom": 11,
		"maxzoom": 21,
		"filter": ["all", ["in", "I8", "1", "0"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 13,
			"text-anchor": "center",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(0,0,0, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt279",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AT",
		"minzoom": 11,
		"maxzoom": 21,
		"filter": ["all", ["in", "I8", "5", "8", "10", "13", "16"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 10,
			"text-anchor": "center",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt280",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AJ",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["==", "E4", "2"],
			["in", "S8", "14", "15", "16"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"text-size": {
				"stops": [
					[14, 12],
					[15, 13],
					[16, 13],
					[17, 13],
					[18, 13],
					[19, 13],
					[20, 13]
				]
			},
			"text-anchor": "center",
			"icon-image": "jie2",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt281",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AJ",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["==", "E4", "3"],
			["in", "S8", "14", "15", "16"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"text-size": {
				"stops": [
					[14, 12],
					[15, 13],
					[16, 13],
					[17, 13],
					[18, 13],
					[19, 13],
					[20, 13]
				]
			},
			"text-anchor": "center",
			"icon-image": "jie3",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt282",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AJ",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["==", "E4", "4"],
			["in", "S8", "14", "15", "16"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"text-size": {
				"stops": [
					[14, 12],
					[15, 13],
					[16, 13],
					[17, 13],
					[18, 13],
					[19, 13],
					[20, 13]
				]
			},
			"text-anchor": "center",
			"icon-image": "jie4",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt283",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AJ",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["==", "E4", "5"],
			["in", "S8", "14", "15", "16"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"text-size": {
				"stops": [
					[14, 12],
					[15, 13],
					[16, 13],
					[17, 13],
					[18, 13],
					[19, 13],
					[20, 13]
				]
			},
			"text-anchor": "center",
			"icon-image": "jie5",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt284",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AJ",
		"minzoom": 14,
		"maxzoom": 21,
		"filter": ["all", ["==", "E4", "6"],
			["in", "S8", "14", "15", "16"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{Z5}",
			"text-size": {
				"stops": [
					[14, 12],
					[15, 13],
					[16, 13],
					[17, 13],
					[18, 13],
					[19, 13],
					[20, 13]
				]
			},
			"text-anchor": "center",
			"icon-image": "jie6",
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(255,255,255, 1)",
			"text-halo-color": "rgba(255,255,255, 1)",
			"text-halo-width": 0.2
		}
	}, {
		"id": "tdt285",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BP",
		"minzoom": 17,
		"maxzoom": 21,
		"layout": {
			"icon-image": "honglvdeng",
			"visibility": "none"
		}
	}, {
		"id": "tdt286",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BP",
		"minzoom": 17,
		"maxzoom": 21,
		"layout": {
			"icon-image": "honglvdeng",
			"visibility": "visible"
		}
	}, {
		"id": "tdt287",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "BV",
		"minzoom": 2,
		"maxzoom": 19,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(245, 244, 238, 1)"
		}
	}, {
		"id": "tdt288",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BG",
		"minzoom": 2,
		"maxzoom": 6,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(0, 79, 159, 1)",
			"line-dasharray": [2, 2, 2, 2]
		}
	}, {
		"id": "tdt289",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AR",
		"minzoom": 2,
		"maxzoom": 3,
		"filter": ["all", ["in", "S8", "1", "2"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt290",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AR",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["in", "S8", "1", "2", "3", "6", "7"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt291",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AW",
		"minzoom": 2,
		"maxzoom": 3,
		"filter": ["all", ["==", "S8", "1"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-width": 0.38,
			"line-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt292",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AW",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["in", "S8", "1", "2", "6", "7"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(171, 198, 239, 1)",
			"line-width": 0.38
		}
	}, {
		"id": "tdt293",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "BR",
		"minzoom": 2,
		"maxzoom": 4,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt294",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 2,
		"maxzoom": 3,
		"paint": {
			"line-color": "rgba(180, 180, 180, 1)",
			"line-width": 0.8
		}
	}, {
		"id": "tdt295",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BE",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["in", "A6", "620020", "620030"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 0.8,
			"line-dasharray": [2, 2, 2, 2]
		}
	}, {
		"id": "tdt296",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BE",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["in", "A6", "620201", "620333"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 0.8
		}
	}, {
		"id": "tdt297",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BE",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["in", "A6", "620202", "620240", "620666"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 0.8,
			"line-dasharray": [8, 6, 8, 6]
		}
	}, {
		"id": "tdt298",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BO",
		"minzoom": 2,
		"maxzoom": 4,
		"paint": {
			"line-color": "rgba(171, 198, 239, 1)",
			"line-width": 0.5
		}
	}, {
		"id": "tdt299",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AU",
		"minzoom": 2,
		"maxzoom": 4,
		"filter": ["all", ["==", "A0", "3"]],
		"paint": {
			"line-color": "rgba(180, 180, 180, 1)"
		}
	}, {
		"id": "tdt300",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AE",
		"minzoom": 2,
		"maxzoom": 4,
		"paint": {
			"line-color": "rgba(180, 180, 180, 1)",
			"line-width": 0.2
		}
	}, {
		"id": "tdt301",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AV",
		"minzoom": 2,
		"maxzoom": 4,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(245, 244, 238, 1)"
		}
	}, {
		"id": "tdt302",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AR",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["in", "S8", "1", "2", "3", "6", "7"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt303",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AW",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["in", "S8", "1", "2", "3", "6", "7"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(171, 198, 239, 1)",
			"line-width": 0.38
		}
	}, {
		"id": "tdt304",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "1"],
			["==", "O4", " "],
			["!in", "A6", "630300", "630201"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(160, 160, 160, 1)",
			"line-width": 0.5
		}
	}, {
		"id": "tdt305",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "1"],
			["==", "O4", " "],
			["==", "A6", "630201"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(142, 140, 140, 1)",
			"line-width": 1,
			"line-dasharray": [3, 5, 3, 5]
		}
	}, {
		"id": "tdt306",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "1"],
			["==", "O4", " "],
			["==", "A6", "630300"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(142, 140, 140, 1)",
			"line-width": 1,
			"line-dasharray": [4, 8, 10, 8]
		}
	}, {
		"id": "tdt307",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CG",
		"minzoom": 4,
		"maxzoom": 7,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(186, 186, 186, 1)",
			"line-width": {
				"stops": [
					[4, 0.4],
					[5, 0.4],
					[6, 1.5]
				]
			}
		}
	}, {
		"id": "tdt308",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BE",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["in", "A6", "620020", "620030"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 1,
			"line-dasharray": [4, 3]
		}
	}, {
		"id": "tdt309",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BE",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["==", "A6", "620201"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 0.8
		}
	}, {
		"id": "tdt310",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BE",
		"minzoom": 4,
		"maxzoom": 6,
		"filter": ["all", ["in", "A6", "620202", "620240", "620666"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 0.8,
			"line-dasharray": {
				"stops": [
					[4, [10, 6]],
					[5, [15, 9]]
				]
			}
		}
	}, {
		"id": "tdt311",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AH",
		"minzoom": 4,
		"maxzoom": 6,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(125, 125, 125, 1)",
			"line-width": 0.8
		}
	}, {
		"id": "tdt312",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AV",
		"minzoom": 4,
		"maxzoom": 6,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(245, 244, 238, 1)",
			"line-width": 0.8
		}
	}, {
		"id": "tdt313",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AE",
		"minzoom": 4,
		"maxzoom": 6,
		"paint": {
			"line-color": "rgba(140, 140, 140, 1)",
			"line-width": 0.4
		}
	}, {
		"id": "tdt314",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AR",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all", ["in", "S8", "1", "2", "3", "4", "6", "7"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt315",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AR",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt316",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "CI",
		"minzoom": 6,
		"maxzoom": 8,
		"paint": {
			"fill-color": "rgba(171, 198, 239, 1)"
		}
	}, {
		"id": "tdt317",
		"type": "fill",
		"source": "tdt-vector-tile",
		"source-layer": "AQ",
		"minzoom": 7,
		"maxzoom": 11,
		"paint": {
			"fill-color": "rgba(238, 237, 223, 1)"
		}
	}, {
		"id": "tdt318",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AW",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all", ["in", "S8", "1", "2", "3", "4", "6", "7"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(171, 198, 239, 1)",
			"line-width": 0.38
		}
	}, {
		"id": "tdt319",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AW",
		"minzoom": 8,
		"maxzoom": 10,
		"filter": ["all", ["in", "S8", "1", "2", "3", "4", "5", "6", "7", "8"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(171, 198, 239, 1)",
			"line-width": 0.38
		}
	}, {
		"id": "tdt320",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AW",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all"],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(171, 198, 239, 1)",
			"line-width": 0.38
		}
	}, {
		"id": "tdt321",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CF",
		"minzoom": 6,
		"maxzoom": 10,
		"filter": ["all", ["==", "A6", "1"]],
		"paint": {
			"line-color": "rgba(255, 215, 140, 1)",
			"line-width": {
				"stops": [
					[6, 0.5],
					[7, 0.8],
					[8, 1],
					[9, 1.5],
					[10, 1.8]
				]
			}
		}
	}, {
		"id": "tdt322",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CF",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "2"]],
		"paint": {
			"line-color": "rgba(254, 240, 158, 1)",
			"line-width": 1.5
		}
	}, {
		"id": "tdt323",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["in", "A6", "420101"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(254, 207, 120, 1)",
			"line-width": 0.5
		}
	}, {
		"id": "tdt324",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 6,
		"maxzoom": 8,
		"filter": ["all", ["in", "A6", "420801"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(187, 146, 241, 1)",
			"line-width": 0.8
		}
	}, {
		"id": "tdt325",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 7,
		"maxzoom": 10,
		"filter": ["all", ["in", "A6", "420101"]],
		"paint": {
			"line-color": "rgba(254, 207, 120, 1)",
			"line-width": {
				"stops": [
					[8, 1],
					[9, 2]
				]
			}
		}
	}, {
		"id": "tdt326",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 7,
		"maxzoom": 10,
		"filter": ["all", ["in", "A6", "430201"]],
		"paint": {
			"line-color": "rgba(254, 207, 120, 1)",
			"line-width": {
				"stops": [
					[8, 1],
					[9, 2]
				]
			}
		}
	}, {
		"id": "tdt327",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "420101"]],
		"paint": {
			"line-color": "rgba(208, 144, 88, 1)",
			"line-width": 2.5
		}
	}, {
		"id": "tdt328",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "420101"]],
		"paint": {
			"line-color": "rgba(254, 207, 120, 1)",
			"line-width": 1.8
		}
	}, {
		"id": "tdt329",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "420201"]],
		"layout": {
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": "rgba(200, 191, 161, 1)",
			"line-width": 2.5
		}
	}, {
		"id": "tdt330",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "420201"]],
		"layout": {
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": "rgba(254, 240, 158, 1)",
			"line-width": 1.8
		}
	}, {
		"id": "tdt331",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 8,
		"maxzoom": 10,
		"filter": ["all", ["in", "A6", "420801"]],
		"paint": {
			"line-color": "rgba(187, 146, 241, 1)",
			"line-width": {
				"stops": [
					[8, 1],
					[9, 2]
				]
			}
		}
	}, {
		"id": "tdt332",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "430201"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(208, 144, 88, 1)",
			"line-width": 2.5
		}
	}, {
		"id": "tdt333",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "430201"]],
		"layout": {
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": "rgba(254, 207, 120, 1)",
			"line-width": 1.8
		}
	}, {
		"id": "tdt334",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "420801"]],
		"layout": {
			"line-join": "round",
			"line-cap": "round"
		},
		"paint": {
			"line-color": "rgba(123, 89, 203, 1)",
			"line-width": 2.5
		}
	}, {
		"id": "tdt335",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AO",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "420801"]],
		"layout": {
			"line-cap": "round",
			"line-join": "round"
		},
		"paint": {
			"line-color": "rgba(187, 146, 241, 1)",
			"line-width": 1.8
		}
	}, {
		"id": "tdt336",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "BJ",
		"minzoom": 7,
		"maxzoom": 10,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(186, 186, 186, 1)",
			"line-width": 1.5
		}
	}, {
		"id": "tdt337",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 6,
		"maxzoom": 10,
		"filter": ["all", ["==", "O4", " "],
			["==", "A6", "630201"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(115, 115, 115, 1)",
			"line-width": {
				"stops": [
					[6, 1],
					[7, 1],
					[8, 1.1],
					[9, 1.1],
					[10, 1.1]
				]
			},
			"line-dasharray": [5, 3]
		}
	}, {
		"id": "tdt338",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 6,
		"maxzoom": 10,
		"filter": ["all", ["==", "O4", " "],
			["==", "A6", "630300"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(115, 115, 115, 1)",
			"line-width": {
				"stops": [
					[6, 1],
					[7, 1],
					[8, 1.1],
					[9, 1.1],
					[10, 1.1]
				]
			},
			"line-dasharray": [4, 8, 10, 8]
		}
	}, {
		"id": "tdt339",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 6,
		"maxzoom": 10,
		"filter": ["all", ["==", "O4", " "],
			["!in", "A6", "630300", "630201"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(115, 115, 115, 1)",
			"line-width": {
				"stops": [
					[6, 1],
					[7, 1],
					[8, 1.1],
					[9, 1.1],
					[10, 1.1]
				]
			},
			"line-dasharray": [3]
		}
	}, {
		"id": "tdt340",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "630201"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(115, 115, 115, 1)",
			"line-width": 1.1,
			"line-dasharray": [5, 3]
		}
	}, {
		"id": "tdt341",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "630300"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(115, 115, 115, 1)",
			"line-width": 1.1,
			"line-dasharray": [4, 8, 10, 8]
		}
	}, {
		"id": "tdt342",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AG",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["!in", "A6", "630300", "630201"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(115, 115, 115, 1)",
			"line-width": 1.1
		}
	}, {
		"id": "tdt343",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620020", "620030"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt344",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620020", "620030"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-dasharray": [4, 2],
			"line-width": 1
		}
	}, {
		"id": "tdt345",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "620201"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt346",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "620201"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 1
		}
	}, {
		"id": "tdt347",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620202", "620666"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt348",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620202", "620666"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 1,
			"line-dasharray": [8, 8]
		}
	}, {
		"id": "tdt349",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620240"],
			["==", "I8", "2"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt350",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620240"],
			["==", "I8", "2"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 1,
			"line-dasharray": [8, 8]
		}
	}, {
		"id": "tdt351",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620240"],
			["==", "I8", "1"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4,
			"line-dasharray": [8, 8]
		}
	}, {
		"id": "tdt352",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AK",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "A6", "620240"],
			["==", "I8", "1"],
			["!=", "A6", "620333"]
		],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 1,
			"line-dasharray": [8, 8]
		}
	}, {
		"id": "tdt353",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AH",
		"minzoom": 6,
		"maxzoom": 7,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt354",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AH",
		"minzoom": 6,
		"maxzoom": 7,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 1
		}
	}, {
		"id": "tdt355",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CH",
		"minzoom": 7,
		"maxzoom": 10,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt356",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CH",
		"minzoom": 7,
		"maxzoom": 10,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 1
		}
	}, {
		"id": "tdt357",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CH",
		"minzoom": 10,
		"maxzoom": 11,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt358",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "CH",
		"minzoom": 10,
		"maxzoom": 11,
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": 2
		}
	}, {
		"id": "tdt359",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AV",
		"minzoom": 6,
		"maxzoom": 11,
		"paint": {
			"line-color": "rgba(255, 0, 0, 1)",
			"line-width": {
				"stops": [
					[6, 1.25],
					[7, 1.5],
					[8, 1.5],
					[9, 1.5],
					[10, 1.5]
				]
			}
		}
	}, {
		"id": "tdt360",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AE",
		"minzoom": 6,
		"maxzoom": 11,
		"paint": {
			"line-color": "rgba(255, 214, 211, 1)",
			"line-width": 4
		}
	}, {
		"id": "tdt361",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AE",
		"minzoom": 6,
		"maxzoom": 11,
		"paint": {
			"line-color": "rgba(150, 150, 150, 1)",
			"line-width": {
				"stops": [
					[6, 1],
					[7, 1],
					[8, 1],
					[9, 1],
					[10, 2]
				]
			}
		}
	}, {
		"id": "tdt362",
		"type": "line",
		"source": "tdt-vector-tile",
		"source-layer": "AC",
		"minzoom": 5,
		"maxzoom": 7,
		"filter": ["all", ["==", "N3", "56"]],
		"layout": {
			"visibility": "visible"
		},
		"paint": {
			"line-color": "rgba(100,100,100, 1)"
		}
	}, {
		"id": "tdt363",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CC",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "420101"],
			["!=", "J9", " "]
		],
		"layout": {
			"text-font": ["arial"],
			"text-field": "{J9}",
			"symbol-placement": "line",
			"icon-image": "guodao",
			"text-size": 12,
			"symbol-avoid-edges": false,
			"symbol-z-order": "auto",
			"symbol-spacing": 1000,
			"visibility": "visible",
			"text-rotation-alignment": "viewport",
			"icon-rotation-alignment": "viewport"
		},
		"paint": {
			"text-color": "rgba(254,254,254, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 0.1
		}
	}, {
		"id": "tdt364",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BB",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "S8", "6", "7", "8", "9", "10"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{B7}",
			"text-size": 12
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt365",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BN",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "S8", "5", "6", "7", "8", "9", "10"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{B7}",
			"text-size": 12,
			"visibility": "visible",
			"symbol-placement": "line",
			"text-rotation-alignment": "map",
			"symbol-z-order": "auto",
			"text-padding": 1,
			"symbol-spacing": 400,
			"text-letter-spacing": 1
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt366",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CC",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "420201"],
			["!=", "J9", " "]
		],
		"layout": {
			"text-font": ["arial"],
			"text-field": "{J9}",
			"symbol-placement": "line",
			"icon-image": "shengdao",
			"text-size": 12,
			"symbol-avoid-edges": false,
			"symbol-z-order": "auto",
			"symbol-spacing": 1000,
			"visibility": "visible",
			"text-rotation-alignment": "viewport",
			"icon-rotation-alignment": "viewport"
		},
		"paint": {
			"text-color": "rgba(254,254,254, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 0.1
		}
	}, {
		"id": "tdt367",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CC",
		"minzoom": 7,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "420801"],
			["!=", "J9", " "]
		],
		"layout": {
			"text-font": ["arial"],
			"text-field": "{J9}",
			"symbol-placement": "line",
			"text-size": 12,
			"symbol-avoid-edges": false,
			"symbol-z-order": "auto",
			"icon-image": "gaosu1_1",
			"visibility": "visible",
			"text-allow-overlap": true,
			"text-rotation-alignment": "viewport",
			"icon-rotation-alignment": "viewport",
			"icon-pitch-alignment": "auto",
			"text-pitch-alignment": "auto",
			"text-letter-spacing": 0,
			"symbol-spacing": 1000
		},
		"paint": {
			"text-color": "rgba(254,254,254, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 0.1
		}
	}, {
		"id": "tdt368",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CC",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["==", "A6", "420801"],
			["!=", "G6", ""]
		],
		"layout": {
			"text-font": ["arial"],
			"text-field": "{G6}",
			"symbol-placement": "line",
			"text-size": 12,
			"symbol-z-order": "auto",
			"symbol-spacing": 1000,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(163, 126, 226, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt369",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BL",
		"minzoom": 2,
		"maxzoom": 3,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 15,
			"text-letter-spacing": 0.13
		},
		"paint": {
			"text-halo-width": 3,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt370",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BU",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["==", "I8", "1"],
			["in", "R7", "1", "2", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt371",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BU",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 10,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-width": 1.5,
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt372",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BU",
		"minzoom": 3,
		"maxzoom": 4,
		"filter": ["all", ["==", "I8", "3"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 13,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt373",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BT",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all", ["==", "I8", "1"],
			["in", "R7", "1", "2", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt374",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BT",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 10,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-width": 1.5,
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt375",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BT",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all", ["==", "I8", "3"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 13,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt376",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BT",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all", ["==", "I8", "1"],
			["==", "R7", "4"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt377",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "1"],
			["in", "R7", "1", "2", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt378",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 10,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-width": 1.5,
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt379",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "3"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 15,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt380",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "1"],
			["==", "R7", "4"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt381",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "6"],
			["==", "R7", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt382",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "5"],
			["==", "R7", "1"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt383",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "4"],
			["==", "R7", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt384",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BX",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "I8", "4"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt385",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "1"],
			["in", "R7", "1", "2", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt386",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 10,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-width": 1.5,
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt387",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "3"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 15,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt388",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "1"],
			["==", "R7", "4"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt389",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "6"],
			["==", "R7", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt390",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "5"],
			["==", "R7", "1"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt391",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BY",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "4"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt392",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["==", "I8", "1"],
			["in", "R7", "1", "2", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt393",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 10,
			"text-letter-spacing": 0.13,
			"visibility": "visible"
		},
		"paint": {
			"text-halo-width": 1.5,
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt394",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["==", "I8", "3"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 15,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt395",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["==", "I8", "1"],
			["==", "R7", "4"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt396",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["==", "I8", "6"],
			["==", "R7", "3"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 14,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt397",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["==", "I8", "5"],
			["==", "R7", "1"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt398",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["==", "I8", "4"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt399",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BZ",
		"minzoom": 8,
		"maxzoom": 10,
		"filter": ["all", ["==", "I8", "2"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 10,
			"visibility": "visible",
			"icon-anchor": "center",
			"text-letter-spacing": 0.16,
			"text-max-angle": 45,
			"text-max-width": 14,
			"text-offset": [0, 0],
			"text-justify": "center",
			"text-anchor": "center"
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5,
			"text-color": "rgba(20,20,20, 1)"
		}
	}, {
		"id": "tdt400",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CJ",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "O4", "1"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12
		},
		"paint": {
			"text-color": "rgba(80,80,80, 1)",
			"text-halo-width": 2,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt401",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BW",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "7"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-letter-spacing": 0.1
		},
		"paint": {
			"text-color": "rgba(0,0,0, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt402",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BW",
		"minzoom": 9,
		"maxzoom": 11,
		"filter": ["all", ["in", "O4", "4", "5"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11,
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"icon-image": "dian1"
		},
		"paint": {
			"text-color": "rgba(104,104,104, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt403",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BW",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "3"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 12,
			"text-letter-spacing": 0.1
		},
		"paint": {
			"text-color": "rgba(52,52,52, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt404",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CD",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "O4", "2"],
			["==", "Y4", "1"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(80,80,80, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt405",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AS",
		"minzoom": 7,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "2"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 12
		},
		"paint": {
			"text-color": "rgba(80,80,80, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt406",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CA",
		"minzoom": 9,
		"maxzoom": 11,
		"filter": ["all", ["!=", "F5", ""],
			["in", "I8", "140109"],
			["==", "S8", "11"]
		],
		"layout": {
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"icon-image": "dian1",
			"text-size": 11,
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"visibility": "visible",
			"text-allow-overlap": false
		},
		"paint": {
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt407",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all", ["in", "O4", "4", "10", "31"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 12,
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"icon-image": "quxian1",
			"visibility": "visible"
		},
		"paint": {
			"text-color": {
				"stops": [
					[8, "rgba(20,20,20, 1)"],
					[9, "rgba(104,51,14, 1)"],
					[10, "rgba(104,51,14, 1)"]
				]
			},
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt408",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 7,
		"maxzoom": 9,
		"filter": ["all", ["in", "O4", "10", "31"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 12,
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"icon-image": "quxian1"
		},
		"paint": {
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt409",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 7,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "3"],
			["in", "U0", " ", "W", "WS"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 12,
			"icon-image": "dijishi1",
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2]
		},
		"paint": {
			"text-color": "rgba(0, 0, 0, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt410",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 7,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "9"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 12,
			"text-letter-spacing": 0.1
		},
		"paint": {
			"text-color": "rgba(0, 0, 0, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt411",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 5,
		"maxzoom": 7,
		"filter": ["all", ["==", "O4", "1"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(80,80,80, 1)",
			"text-halo-width": 2,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt412",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AF",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "2"],
			["in", "U0", " ", "E", "W", "S", "EN", "WN"]
		],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 14,
			"icon-image": "shenghui1",
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2]
		},
		"paint": {
			"text-color": "rgba(0, 0, 0, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt413",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BC",
		"minzoom": 4,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "0"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 13,
			"text-letter-spacing": 0.2,
			"text-justify": "auto",
			"text-anchor": "top",
			"icon-image": "shoudu1",
			"text-offset": [0, -1.8]
		},
		"paint": {
			"text-color": "rgba(219,95,98, 1)",
			"text-halo-width": 1.5,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt414",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AY",
		"minzoom": 4,
		"maxzoom": 5,
		"filter": ["all", ["==", "O4", "1"],
			["in", "U0", "E", "W", "N", "S", "EN", "ES", "WN", "WS"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 11,
			"icon-image": "guowaishoudu1",
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2]
		},
		"paint": {
			"text-color": "rgba(219,95,98, 1)",
			"text-halo-width": 1.5,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt415",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "CB",
		"minzoom": 5,
		"maxzoom": 6,
		"filter": ["all", ["==", "O4", "1"],
			["in", "U0", "E", "W", "N", "S", "EN", "ES", "WN", "WS"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 12,
			"icon-anchor": "center",
			"icon-text-fit": "none",
			"text-justify": "auto",
			"text-anchor": "left",
			"icon-image": "guowaishoudu1",
			"text-letter-spacing": 0.1,
			"text-offset": [0.5, -0.2]
		},
		"paint": {
			"text-color": "rgba(219,95,98, 1)",
			"text-halo-width": 1.5,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt416",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BS",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["==", "O4", "1"],
			["in", "U0", "E", "W", "N", "S", "EN", "ES", "WN", "WS"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 13,
			"icon-image": "guowaishoudu1",
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(219,95,98, 1)",
			"text-halo-width": 1.5,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt417",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AZ",
		"minzoom": 7,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "1"],
			["in", "U0", "E", "W", "N", "S", "EN", "ES", "WN", "WS"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 13,
			"icon-image": "guowaishoudu1",
			"text-offset": [0.5, -0.2],
			"text-justify": "auto",
			"text-anchor": "left",
			"text-letter-spacing": 0.1
		},
		"paint": {
			"text-color": "rgba(219,95,98, 1)",
			"text-halo-width": 1.5,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt418",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AZ",
		"minzoom": 7,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "2"],
			["==", "U0", "E"]
		],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-size": 13,
			"icon-image": "guowaishoudu1",
			"text-offset": [0.5, 0.2],
			"text-justify": "auto",
			"text-anchor": "left",
			"text-letter-spacing": 0.1
		},
		"paint": {
			"text-color": "rgba(219,95,98, 1)",
			"text-halo-width": 1.5,
			"text-halo-color": "rgba(255, 255, 255, 1)"
		}
	}, {
		"id": "tdt419",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BQ",
		"minzoom": 5,
		"maxzoom": 11,
		"filter": ["all", ["in", "I8", "0", "1"]],
		"layout": {
			"text-field": "{B7}",
			"text-font": ["WenQuanYi Micro Hei Mono"]
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt420",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BH",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "I8", "1", "0"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": {
				"stops": [
					[6, 12],
					[7, 13],
					[8, 13],
					[9, 13],
					[10, 13]
				]
			}
		},
		"paint": {
			"text-color": "rgba(0,0,0, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1.5
		}
	}, {
		"id": "tdt421",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BF",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["==", "O4", "6"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 11
		},
		"paint": {
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1
		}
	}, {
		"id": "tdt422",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AT",
		"minzoom": 6,
		"maxzoom": 11,
		"filter": ["all", ["in", "S8", "6", "7", "8", "9", "10"]],
		"layout": {
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"text-field": "{B7}",
			"text-size": 10
		},
		"paint": {
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 1
		}
	}, {
		"id": "tdt423",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AI",
		"minzoom": 6,
		"maxzoom": 7,
		"filter": ["all", ["in", "S8", "6"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{Z5}",
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt424",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AI",
		"minzoom": 7,
		"maxzoom": 8,
		"filter": ["all", ["in", "S8", "7"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{Z5}",
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt425",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AI",
		"minzoom": 8,
		"maxzoom": 9,
		"filter": ["all", ["in", "S8", "8"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{Z5}",
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt426",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AI",
		"minzoom": 9,
		"maxzoom": 10,
		"filter": ["all", ["in", "S8", "9"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{Z5}",
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt427",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "AI",
		"minzoom": 10,
		"maxzoom": 11,
		"filter": ["all", ["in", "S8", "10"]],
		"layout": {
			"text-font": ["simhei3"],
			"text-field": "{Z5}",
			"text-size": 12,
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(14,122,173, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt428",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all", ["!=", "F5", ""],
			["in", "E4", "1"],
			["==", "S8", "11"]
		],
		"layout": {
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"icon-image": "dian1",
			"text-size": 11,
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}, {
		"id": "tdt429",
		"type": "symbol",
		"source": "tdt-vector-tile",
		"source-layer": "BI",
		"minzoom": 8,
		"maxzoom": 11,
		"filter": ["all", ["!=", "F5", ""],
			["in", "E4", "2"],
			["==", "S8", "11"]
		],
		"layout": {
			"text-field": "{Z5}",
			"text-font": ["WenQuanYi Micro Hei Mono"],
			"icon-image": "shan1",
			"text-size": 11,
			"text-letter-spacing": 0.1,
			"text-justify": "auto",
			"text-anchor": "left",
			"text-offset": [0.5, -0.2],
			"visibility": "visible"
		},
		"paint": {
			"text-color": "rgba(20,20,20, 1)",
			"text-halo-color": "rgba(255, 255, 255, 1)",
			"text-halo-width": 2
		}
	}],
	"id": "tdtStyle"
}