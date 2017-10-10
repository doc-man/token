/*
 CanvasJS HTML5 & JavaScript Charts - v2.0 Beta 1 - https://canvasjs.com/ 
 Copyright 2017 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license-canvasjs/

*/
(function() {
    function ma(q, r) {
        q.prototype = $a(r.prototype);
        q.prototype.constructor = q;
        q.base = r.prototype
    }

    function $a(q) {
        function r() {}
        r.prototype = q;
        return new r
    }

    function Sa(q, r, u) {
        "millisecond" === u ? q.setMilliseconds(q.getMilliseconds() + 1 * r) : "second" === u ? q.setSeconds(q.getSeconds() + 1 * r) : "minute" === u ? q.setMinutes(q.getMinutes() + 1 * r) : "hour" === u ? q.setHours(q.getHours() + 1 * r) : "day" === u ? q.setDate(q.getDate() + 1 * r) : "week" === u ? q.setDate(q.getDate() + 7 * r) : "month" === u ? q.setMonth(q.getMonth() + 1 * r) : "year" === u && q.setFullYear(q.getFullYear() +
            1 * r);
        return q
    }

    function fa(q, r) {
        var u = !1;
        0 > q && (u = !0, q *= -1);
        q = "" + q;
        for (r = r ? r : 1; q.length < r;) q = "0" + q;
        return u ? "-" + q : q
    }

    function Da(q) {
        if (!q) return q;
        q = q.replace(/^\s\s*/, "");
        for (var r = /\s/, u = q.length; r.test(q.charAt(--u)););
        return q.slice(0, u + 1)
    }

    function Ba(q) {
        q.roundRect = function(q, u, w, y, x, z, N, C) {
            N && (this.fillStyle = N);
            C && (this.strokeStyle = C);
            "undefined" === typeof x && (x = 5);
            this.lineWidth = z;
            this.beginPath();
            this.moveTo(q + x, u);
            this.lineTo(q + w - x, u);
            this.quadraticCurveTo(q + w, u, q + w, u + x);
            this.lineTo(q + w, u + y -
                x);
            this.quadraticCurveTo(q + w, u + y, q + w - x, u + y);
            this.lineTo(q + x, u + y);
            this.quadraticCurveTo(q, u + y, q, u + y - x);
            this.lineTo(q, u + x);
            this.quadraticCurveTo(q, u, q + x, u);
            this.closePath();
            N && this.fill();
            C && 0 < z && this.stroke()
        }
    }

    function Na(q, r) {
        return q - r
    }

    function H(q) {
        var r = ((q & 16711680) >> 16).toString(16),
            u = ((q & 65280) >> 8).toString(16);
        q = ((q & 255) >> 0).toString(16);
        r = 2 > r.length ? "0" + r : r;
        u = 2 > u.length ? "0" + u : u;
        q = 2 > q.length ? "0" + q : q;
        return "#" + r + u + q
    }

    function ab(q, r) {
        var u = this.length >>> 0,
            w = Number(r) || 0,
            w = 0 > w ? Math.ceil(w) : Math.floor(w);
        for (0 > w && (w += u); w < u; w++)
            if (w in this && this[w] === q) return w;
        return -1
    }

    function y(q) {
        return null === q || "undefined" === typeof q
    }

    function Ea(q) {
        q.indexOf || (q.indexOf = ab);
        return q
    }

    function bb(q) {
        if (U.fSDec) q[U.fSDec("`eeDwdouMhrudods")](U.fSDec("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            U._fTWm && U._fTWm(q)
        })
    }

    function Ta(q, r, u) {
        u = u || "normal";
        var w = q + "_" + r + "_" + u,
            y = Ua[w];
        if (isNaN(y)) {
            try {
                q = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" +
                    q + "; font-size:" + r + "px; font-weight:" + u + ";";
                if (!oa) {
                    var x = document.body;
                    oa = document.createElement("span");
                    oa.innerHTML = "";
                    var z = document.createTextNode("Mpgyi");
                    oa.appendChild(z);
                    x.appendChild(oa)
                }
                oa.style.display = "";
                oa.setAttribute("style", q);
                y = Math.round(oa.offsetHeight);
                oa.style.display = "none"
            } catch (N) {
                y = Math.ceil(1.1 * r)
            }
            y = Math.max(y, r);
            Ua[w] = y
        }
        return y
    }

    function G(q, r) {
        var u = [];
        if (u = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4,
                    2
                ],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[q || "solid"])
            for (var w = 0; w < u.length; w++) u[w] *= r;
        else u = [];
        return u
    }

    function T(q, r, u, w) {
        return q.addEventListener ? (q.addEventListener(r, u, w || !1), u) : q.attachEvent ? (w = function(r) {
            r = r || window.event;
            r.preventDefault = r.preventDefault || function() {
                r.returnValue = !1
            };
            r.stopPropagation = r.stopPropagation || function() {
                r.cancelBubble = !0
            };
            u.call(q, r)
        }, q.attachEvent("on" + r, w), w) : !1
    }

    function Va(q, r, u) {
        q *= X;
        r *= X;
        q = u.getImageData(q,
            r, 2, 2).data;
        r = !0;
        for (u = 0; 4 > u; u++)
            if (q[u] !== q[u + 4] | q[u] !== q[u + 8] | q[u] !== q[u + 12]) {
                r = !1;
                break
            }
        return r ? q[0] << 16 | q[1] << 8 | q[2] : 0
    }

    function ja(q, r, u) {
        return q in r ? r[q] : u[q]
    }

    function Fa(q, r, u) {
        if (w && Wa) {
            var y = q.getContext("2d");
            Ja = y.webkitBackingStorePixelRatio || y.mozBackingStorePixelRatio || y.msBackingStorePixelRatio || y.oBackingStorePixelRatio || y.backingStorePixelRatio || 1;
            X = Oa / Ja;
            q.width = r * X;
            q.height = u * X;
            Oa !== Ja && (q.style.width = r + "px", q.style.height = u + "px", y.scale(X, X))
        } else q.width = r, q.height = u
    }

    function Xa(q) {
        // if (!Ya) {
        //     var r = !1,
        //         u = !1;
        //     "undefined" === typeof pa.Chart.creditHref ? (q.creditHref = "https://canvasjs.com/", q.creditText = "CanvasJS.com") : (r = q.updateOption("creditText"), u = q.updateOption("creditHref"));
        //     if (q.creditHref && q.creditText) {
        //         q._creditLink || (q._creditLink = document.createElement("a"), q._creditLink.setAttribute("class", "canvasjs-chart-credit"), q._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (q.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
        //             q._creditLink.setAttribute("tabIndex", -1), q._creditLink.setAttribute("target", "_blank"));
        //         if (0 === q.renderCount || r || u) q._creditLink.setAttribute("href", q.creditHref), q._creditLink.innerHTML = q.creditText;
        //         q._creditLink && q.creditHref && q.creditText ? (q._creditLink.parentElement || q._canvasJSContainer.appendChild(q._creditLink), q._creditLink.style.top = q.height - 14 + "px") : q._creditLink.parentElement && q._canvasJSContainer.removeChild(q._creditLink)
        //     }
        // }
    }

    function ta(q, r) {
        var u = document.createElement("canvas");
        u.setAttribute("class",
            "canvasjs-chart-canvas");
        Fa(u, q, r);
        w || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(u);
        return u
    }

    function na(q, r, u) {
        for (var w in u) r.style[w] = u[w]
    }

    function ua(q, r, u) {
        r.getAttribute("state") || (r.style.backgroundColor = q.toolbar.backgroundColor, r.style.color = q.toolbar.fontColor, r.style.border = "none", na(q, r, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
        }));
        r.getAttribute("state") !== u && (r.setAttribute("state", u), r.setAttribute("type", "button"),
            na(q, r, {
                padding: "5px 12px",
                cursor: "pointer",
                "float": "left",
                width: "40px",
                height: "25px",
                outline: "0px",
                verticalAlign: "baseline",
                lineHeight: "0"
            }), r.setAttribute("title", q._cultureInfo[u + "Text"]), r.innerHTML = "<img style='height:95%;' src='" + cb[u].image + "' alt='" + q._cultureInfo[u + "Text"] + "' />")
    }

    function Ka() {
        for (var q = null, r = 0; r < arguments.length; r++) q = arguments[r], q.style && (q.style.display = "inline")
    }

    function va() {
        for (var q = null, r = 0; r < arguments.length; r++)(q = arguments[r]) && q.style && (q.style.display = "none")
    }

    function W(q, r, u, w, x) {
        this._defaultsKey = q;
        this._themeOptionsKey = r;
        this._index = w;
        this.parent = x;
        this._eventListeners = [];
        q = {};
        this.theme && y(r) && y(w) ? q = y(ya[this.theme]) ? ya.light1 : ya[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[r]) && (null === w ? q = this.parent.themeOptions[r] : 0 < this.parent.themeOptions[r].length && (w = Math.min(this.parent.themeOptions[r].length - 1, w), q = this.parent.themeOptions[r][w]));
        this.themeOptions = q;
        this.options = u ? u : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options,
            q)
    }

    function Ca(q, r, u, w, y) {
        "undefined" === typeof y && (y = 0);
        this._padding = y;
        this._x1 = q;
        this._y1 = r;
        this._x2 = u;
        this._y2 = w;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function ka(q, r) {
        ka.base.constructor.call(this, "TextBlock", null, r, null, null);
        this.ctx = q;
        this._isDirty = !0;
        this._wrappedText = null
    }

    function Pa(q, r) {
        Pa.base.constructor.call(this, "Toolbar", "toolbar", r, null, q);
        this.chart = q;
        this.canvas = q.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar"
    }

    function Ga(q,
        r) {
        Ga.base.constructor.call(this, "Title", "title", r, null, q);
        this.chart = q;
        this.canvas = q.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (y(this.options.margin) && q.options.subtitles)
            for (var u = q.options.subtitles, w = 0; w < u.length; w++)
                if ((y(u[w].horizontalAlign) && "center" === this.horizontalAlign || u[w].horizontalAlign === this.horizontalAlign) && (y(u[w].verticalAlign) && "top" === this.verticalAlign || u[w].verticalAlign === this.verticalAlign) && !u[w].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin =
                        0;
                    break
                }
                "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function La(q, r, u) {
        La.base.constructor.call(this, "Subtitle", "subtitles", r, u, q);
        this.chart = q;
        this.canvas = q.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function Ha(q) {
        var r;
        q && Ia[q] && (r = Ia[q]);
        Ha.base.constructor.call(this, "CultureInfo", null, r, null, null)
    }
    var U = {},
        w = !!document.createElement("canvas").getContext,
        pa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "theme1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolbar: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly"
                }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: w ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Toolbar: {
                backgroundColor: "white",
                backgroundColorOnHover: "#2196f3",
                borderColor: "#2196f3",
                borderThickness: 1,
                fontColor: "black",
                fontColorOnHover: "white",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: w ? "transparent" : null,
                borderColor: w ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: w ? "transparent" : null,
                titleBorderColor: w ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: w ? "transparent" : null,
                labelBorderColor: w ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                prefix: "",
                suffix: "",
                includeZero: !0,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: w ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: {
                    options: "readWrite",
                    stripLines: "readWrite",
                    scaleBreaks: "readWrite",
                    crosshair: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: w ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 12,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    customBreaks: "readWrite",
                    axis: "readOnly",
                    autoBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 12,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    scaleBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: w ? "grey" : null,
                labelBorderColor: w ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: w ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: w ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: w ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: {
                    options: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    chart: "readOnly"
                }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        Ia = {
            en: {}
        },
        x = w ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        xa = w ? "Impact, Charcoal, sans-serif" : "Arial",
        za = {
            colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
            colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        Q, ba, O, Z, da;
    ba = "#333333";
    O = "#000000";
    Q = "#666666";
    da = Z = "#000000";
    var aa = 20,
        z = 14,
        Qa = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: {
                fontFamily: xa,
                fontSize: 32,
                fontColor: ba,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: xa,
                fontSize: z,
                fontColor: ba,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: x,
                indexLabelFontSize: z,
                indexLabelFontColor: ba,
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: O,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: Q,
                tickThickness: 1,
                tickColor: Q,
                gridThickness: 0,
                gridColor: Q,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: da,
                    color: Z,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: O,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: Q,
                tickThickness: 1,
                tickColor: Q,
                gridThickness: 0,
                gridColor: Q,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: da,
                    color: Z,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: O,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: Q,
                tickThickness: 1,
                tickColor: Q,
                gridThickness: 1,
                gridColor: Q,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: da,
                    color: Z,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: O,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: Q,
                tickThickness: 1,
                tickColor: Q,
                gridThickness: 1,
                gridColor: Q,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: da,
                    color: Z,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: x,
                fontSize: 14,
                fontColor: ba,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: x,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    O = ba = "#F5F5F5";
    Q = "#FFFFFF";
    Z = "#40BAF1";
    da = "#F5F5F5";
    var aa = 20,
        z = 14,
        Za = {
            colorSet: "colorSet2",
            title: {
                fontFamily: x,
                fontSize: 33,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: x,
                fontSize: z,
                fontColor: "#3A3A3A",
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: x,
                indexLabelFontSize: z,
                indexLabelFontColor: "#666666",
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickThickness: 1,
                tickColor: "#BBBBBB",
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: aa,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: x,
                fontSize: 14,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: x,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    O = ba = "#F5F5F5";
    Q = "#FFFFFF";
    Z = "#40BAF1";
    da = "#F5F5F5";
    aa = 20;
    z = 14;
    xa = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: {
            fontFamily: xa,
            fontSize: 32,
            fontColor: ba,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: xa,
            fontSize: z,
            fontColor: ba,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{
            indexLabelFontFamily: x,
            indexLabelFontSize: z,
            indexLabelFontColor: O,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: O,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: O,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 0,
            gridColor: Q,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: da,
                color: Z,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisX2: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: O,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: O,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 0,
            gridColor: Q,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: da,
                color: Z,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: O,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: O,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 1,
            gridColor: Q,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: da,
                color: Z,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: x,
            titleFontSize: aa,
            titleFontColor: O,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: z,
            labelFontColor: O,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: Q,
            tickThickness: 1,
            tickColor: Q,
            gridThickness: 1,
            gridColor: Q,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: z,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: da,
                color: Z,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        legend: {
            fontFamily: x,
            fontSize: 14,
            fontColor: ba,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: x,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: O,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    };
    Q = "#FFFFFF";
    O = ba = "#FAFAFA";
    Z = "#40BAF1";
    da = "#F5F5F5";
    var aa = 20,
        z = 14,
        ya = {
            light1: Qa,
            light2: Za,
            dark1: xa,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#32373A",
                title: {
                    fontFamily: x,
                    fontSize: 32,
                    fontColor: ba,
                    fontWeight: "normal",
                    verticalAlign: "top",
                    margin: 5
                },
                subtitles: [{
                    fontFamily: x,
                    fontSize: z,
                    fontColor: ba,
                    fontWeight: "normal",
                    verticalAlign: "top",
                    margin: 5
                }],
                toolbar: {
                    backgroundColor: "#666666",
                    backgroundColorOnHover: "#FF7372",
                    borderColor: "#FF7372",
                    borderThickness: 1,
                    fontColor: "#F5F5F5",
                    fontColorOnHover: "#F5F5F5"
                },
                data: [{
                    indexLabelFontFamily: x,
                    indexLabelFontSize: z,
                    indexLabelFontColor: O,
                    indexLabelFontWeight: "normal",
                    indexLabelLineThickness: 1
                }],
                axisX: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: O,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: O,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: Q,
                    tickThickness: 1,
                    tickColor: Q,
                    gridThickness: 0,
                    gridColor: Q,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: da,
                        color: Z,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisX2: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: O,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: O,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: Q,
                    tickThickness: 1,
                    tickColor: Q,
                    gridThickness: 0,
                    gridColor: Q,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: da,
                        color: Z,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: O,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: O,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: Q,
                    tickThickness: 1,
                    tickColor: Q,
                    gridThickness: 1,
                    gridColor: Q,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: da,
                        color: Z,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY2: [{
                    titleFontFamily: x,
                    titleFontSize: aa,
                    titleFontColor: O,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: z,
                    labelFontColor: O,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: Q,
                    tickThickness: 1,
                    tickColor: Q,
                    gridThickness: 1,
                    gridColor: Q,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: z,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: da,
                        color: Z,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                legend: {
                    fontFamily: x,
                    fontSize: 14,
                    fontColor: ba,
                    fontWeight: "bold",
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                toolTip: {
                    fontFamily: x,
                    fontSize: 14,
                    fontStyle: "normal",
                    cornerRadius: 0,
                    borderThickness: 1,
                    fontColor: O,
                    backgroundColor: "rgba(0, 0, 0, .7)"
                }
            },
            theme1: Qa,
            theme2: Za,
            theme3: Qa
        },
        V = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        };
    (function() {
        U.fSDec = function(q) {
            for (var r = "", u = 0; u < q.length; u++) r += String.fromCharCode(Math.ceil(q.length / 57 / 5) ^ q.charCodeAt(u));
            return r
        };
        U.obj = {
            trVs: "Ush`m!Wdsrhno",
            fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
            txtBl: "udyuC`rdmhod",
            fnt: "gnou",
            fSy: "ghmmRuxmd",
            fTx: "ghmmUdyu",
            grClr: "fsdx",
            cntx: "buy",
            tp: "unq"
        };
        delete pa[U.fSDec("Bi`su")][U.fSDec("bsdehuIsdg")];
        U.pro = {
            sCH: pa[U.fSDec("Bi`su")][U.fSDec("bsdehuIsdg")]
        };
        U._fTWm = function(q) {
            if ("undefined" === typeof U.pro.sCH && !Ya) try {
                var r = q[U.fSDec(U.obj.cntx)];
                r[U.fSDec(U.obj.txtBl)] = U.fSDec(U.obj.tp);
                r[U.fSDec(U.obj.fnt)] = 11 + U.fSDec(U.obj.fntStr);
                r[U.fSDec(U.obj.fSy)] = U.fSDec(U.obj.grClr);
                r[U.fSDec(U.obj.fTx)](U.fSDec(U.obj.trVs), 2, q.height - 11 - 2)
            } catch (u) {}
        }
    })();
    var Ua = {},
        oa = null,
        Aa = function() {
            var q = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                u = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                w = "January February March April May June July August September October November December".split(" "),
                y = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                x = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                z = /[^-+\dA-Z]/g;
            return function(N, C, ea) {
                var G = ea ? ea.days : r,
                    U = ea ? ea.months : w,
                    Q = ea ? ea.shortDays : u,
                    H = ea ? ea.shortMonths : y;
                ea = "";
                var V = !1;
                N = N && N.getTime ? N : N ? new Date(N) :
                    new Date;
                if (isNaN(N)) throw SyntaxError("invalid date");
                "UTC:" === C.slice(0, 4) && (C = C.slice(4), V = !0);
                ea = V ? "getUTC" : "get";
                var T = N[ea + "Date"](),
                    R = N[ea + "Day"](),
                    W = N[ea + "Month"](),
                    O = N[ea + "FullYear"](),
                    I = N[ea + "Hours"](),
                    ca = N[ea + "Minutes"](),
                    a = N[ea + "Seconds"](),
                    f = N[ea + "Milliseconds"](),
                    b = V ? 0 : N.getTimezoneOffset();
                return ea = C.replace(q, function(c) {
                    switch (c) {
                        case "D":
                            return T;
                        case "DD":
                            return fa(T, 2);
                        case "DDD":
                            return Q[R];
                        case "DDDD":
                            return G[R];
                        case "M":
                            return W + 1;
                        case "MM":
                            return fa(W + 1, 2);
                        case "MMM":
                            return H[W];
                        case "MMMM":
                            return U[W];
                        case "Y":
                            return parseInt(String(O).slice(-2));
                        case "YY":
                            return fa(String(O).slice(-2), 2);
                        case "YYY":
                            return fa(String(O).slice(-3), 3);
                        case "YYYY":
                            return fa(O, 4);
                        case "h":
                            return I % 12 || 12;
                        case "hh":
                            return fa(I % 12 || 12, 2);
                        case "H":
                            return I;
                        case "HH":
                            return fa(I, 2);
                        case "m":
                            return ca;
                        case "mm":
                            return fa(ca, 2);
                        case "s":
                            return a;
                        case "ss":
                            return fa(a, 2);
                        case "f":
                            return String(f).slice(0, 1);
                        case "ff":
                            return fa(String(f).slice(0, 2), 2);
                        case "fff":
                            return fa(String(f).slice(0, 3), 3);
                        case "t":
                            return 12 >
                                I ? "a" : "p";
                        case "tt":
                            return 12 > I ? "am" : "pm";
                        case "T":
                            return 12 > I ? "A" : "P";
                        case "TT":
                            return 12 > I ? "AM" : "PM";
                        case "K":
                            return V ? "UTC" : (String(N).match(x) || [""]).pop().replace(z, "");
                        case "z":
                            return (0 < b ? "-" : "+") + Math.floor(Math.abs(b) / 60);
                        case "zz":
                            return (0 < b ? "-" : "+") + fa(Math.floor(Math.abs(b) / 60), 2);
                        case "zzz":
                            return (0 < b ? "-" : "+") + fa(Math.floor(Math.abs(b) / 60), 2) + fa(Math.abs(b) % 60, 2);
                        default:
                            return c.slice(1, c.length - 1)
                    }
                })
            }
        }(),
        ca = function(q, r, u) {
            if (null === q) return "";
            if (!isFinite(q)) return q;
            q = Number(q);
            var w =
                0 > q ? !0 : !1;
            w && (q *= -1);
            var y = u ? u.decimalSeparator : ".",
                x = u ? u.digitGroupSeparator : ",",
                z = "";
            r = String(r);
            var z = 1,
                N = u = "",
                C = -1,
                G = [],
                U = [],
                Q = 0,
                H = 0,
                V = 0,
                W = !1,
                O = 0,
                N = r.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            r = null;
            for (var R = 0; N && R < N.length; R++)
                if (r = N[R], "." === r && 0 > C) C = R;
                else {
                    if ("%" === r) z *= 100;
                    else if ("\u2030" === r) {
                        z *= 1E3;
                        continue
                    } else if ("," === r[0] && "." === r[r.length - 1]) {
                        z /= Math.pow(1E3, r.length - 1);
                        C = R + r.length - 1;
                        continue
                    } else "E" !== r[0] && "e" !== r[0] || "0" !== r[r.length - 1] || (W = !0);
                    0 > C ? (G.push(r), "#" ===
                        r || "0" === r ? Q++ : "," === r && V++) : (U.push(r), "#" !== r && "0" !== r || H++)
                }
            W && (r = Math.floor(q), N = -Math.floor(Math.log(q) / Math.LN10 + 1), O = 0 === q ? 0 : 0 === r ? -(Q + N) : String(r).length - Q, z /= Math.pow(10, O));
            0 > C && (C = R);
            z = (q * z).toFixed(H);
            r = z.split(".");
            z = (r[0] + "").split("");
            q = (r[1] + "").split("");
            z && "0" === z[0] && z.shift();
            for (W = N = R = H = C = 0; 0 < G.length;)
                if (r = G.pop(), "#" === r || "0" === r)
                    if (C++, C === Q) {
                        var T = z,
                            z = [];
                        if ("0" === r)
                            for (r = Q - H - (T ? T.length : 0); 0 < r;) T.unshift("0"), r--;
                        for (; 0 < T.length;) u = T.pop() + u, W++, 0 === W % N && (R === V && 0 < T.length) &&
                            (u = x + u)
                    } else 0 < z.length ? (u = z.pop() + u, H++, W++) : "0" === r && (u = "0" + u, H++, W++), 0 === W % N && (R === V && 0 < z.length) && (u = x + u);
            else "E" !== r[0] && "e" !== r[0] || "0" !== r[r.length - 1] || !/[eE][+-]*[0]+/.test(r) ? "," === r ? (R++, N = W, W = 0, 0 < z.length && (u = x + u)) : u = 1 < r.length && ('"' === r[0] && '"' === r[r.length - 1] || "'" === r[0] && "'" === r[r.length - 1]) ? r.slice(1, r.length - 1) + u : r + u : (r = 0 > O ? r.replace("+", "").replace("-", "") : r.replace("-", ""), u += r.replace(/[0]+/, function(q) {
                return fa(O, q.length)
            }));
            x = "";
            for (G = !1; 0 < U.length;) r = U.shift(), "#" === r || "0" ===
                r ? 0 < q.length && 0 !== Number(q.join("")) ? (x += q.shift(), G = !0) : "0" === r && (x += "0", G = !0) : 1 < r.length && ('"' === r[0] && '"' === r[r.length - 1] || "'" === r[0] && "'" === r[r.length - 1]) ? x += r.slice(1, r.length - 1) : "E" !== r[0] && "e" !== r[0] || "0" !== r[r.length - 1] || !/[eE][+-]*[0]+/.test(r) ? x += r : (r = 0 > O ? r.replace("+", "").replace("-", "") : r.replace("-", ""), x += r.replace(/[0]+/, function(q) {
                    return fa(O, q.length)
                }));
            u += (G ? y : "") + x;
            return w ? "-" + u : u
        },
        Ma = function(q) {
            var r = 0,
                u = 0;
            q = q || window.event;
            q.offsetX || 0 === q.offsetX ? (r = q.offsetX, u = q.offsetY) :
                q.layerX || 0 == q.layerX ? (r = q.layerX, u = q.layerY) : (r = q.pageX - q.target.offsetLeft, u = q.pageY - q.target.offsetTop);
            return {
                x: r,
                y: u
            }
        },
        Wa = !0,
        Oa = window.devicePixelRatio || 1,
        Ja = 1,
        X = Wa ? Oa / Ja : 1,
        Ya = window && window.location && window.location.href && window.location.href.indexOf && (-1 !== window.location.href.indexOf("canvasjs.com") || -1 !== window.location.href.indexOf("fenopix.com") || -1 !== window.location.href.indexOf("fiddle")),
        cb = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
            }
        };
    W.prototype.setOptions = function(q, r) {
        if (pa[this._defaultsKey]) {
            var u = pa[this._defaultsKey],
                w;
            for (w in u) "publicProperties" !== w && u.hasOwnProperty(w) && (this[w] = q && w in q ? q[w] : r && w in r ? r[w] : u[w])
        }
    };
    W.prototype.get = function(q) {
        var r = pa[this._defaultsKey];
        if ("options" === q) return this.options && this.options._isPlaceholder ? null : this.options;
        if (r.hasOwnProperty(q) || r.publicProperties && r.publicProperties.hasOwnProperty(q)) return this[q];
        window.console && window.console.log('Property "' + q + "\" doesn't exist. Please check for typo.")
    };
    W.prototype.set = function(q, r, u) {
        u = "undefined" === typeof u ? !0 : u;
        var w = pa[this._defaultsKey];
        if ("options" === q) this.createUserOptions(r);
        else if (w.hasOwnProperty(q) || w.publicProperties && w.publicProperties.hasOwnProperty(q) && "readWrite" === w.publicProperties[q]) this.options._isPlaceholder && this.createUserOptions(), this.options[q] = r;
        else {
            window.console && (w.publicProperties && w.publicProperties.hasOwnProperty(q) && "readOnly" === w.publicProperties[q] ? window.console.log('Property "' + q + '" is read-only.') : window.console.log('Property "' +
                q + "\" doesn't exist. Please check for typo."));
            return
        }
        u && (this.chart || this).render()
    };
    W.prototype.addTo = function(q, r, u, w) {
        w = "undefined" === typeof w ? !0 : w;
        var y = pa[this._defaultsKey];
        y.hasOwnProperty(q) || y.publicProperties && y.publicProperties.hasOwnProperty(q) && "readWrite" === y.publicProperties[q] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[q] && (this.options[q] = []), q = this.options[q], u = "undefined" === typeof u || null === u ? q.length : u, q.splice(u, 0, r), w && (this.chart ||
            this).render()) : window.console && (y.publicProperties && y.publicProperties.hasOwnProperty(q) && "readOnly" === y.publicProperties[q] ? window.console.log('Property "' + q + '" is read-only.') : window.console.log('Property "' + q + "\" doesn't exist. Please check for typo."))
    };
    W.prototype.createUserOptions = function(q) {
        if ("undefined" !== typeof q || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var r = this.parent.options[this.optionsName],
                    w = r.length;
                this.options._isPlaceholder || (Ea(r), w = r.indexOf(this.options));
                this.options = "undefined" === typeof q ? {} : q;
                r[w] = this.options
            } else this.options = "undefined" === typeof q ? {} : q, q = this.parent.options, this.optionsName ? r = this.optionsName : (r = this._defaultsKey) && 0 !== r.length ? (w = r.charAt(0).toLowerCase(), 1 < r.length && (w = w.concat(r.slice(1))), r = w) : r = void 0, q[r] = this.options
    };
    W.prototype.remove = function(q) {
        q = "undefined" === typeof q ? !0 : q;
        if (this.isOptionsInArray) {
            var r =
                this.parent.options[this.optionsName];
            Ea(r);
            var w = r.indexOf(this.options);
            0 <= w && r.splice(w, 1)
        } else delete this.parent.options[this.optionsName];
        q && (this.chart || this).render()
    };
    W.prototype.updateOption = function(q) {
        var r = pa[this._defaultsKey],
            w = {},
            x = this[q],
            z = this._themeOptionsKey,
            G = this._index;
        this.theme && y(z) && y(G) ? w = y(ya[this.theme]) ? ya.light1 : ya[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[z]) && (null === G ? w = this.parent.themeOptions[z] : 0 < this.parent.themeOptions[z].length &&
            (w = Math.min(this.parent.themeOptions[z].length - 1, G), w = this.parent.themeOptions[z][w]));
        this.themeOptions = w;
        q in r && (x = q in this.options ? this.options[q] : w && q in w ? w[q] : r[q]);
        if (x === this[q]) return !1;
        this[q] = x;
        return !0
    };
    W.prototype.trackChanges = function(q) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[q] = this.options[q]
    };
    W.prototype.isBeingTracked = function(q) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[q] ? !0 : !1
    };
    W.prototype.hasOptionChanged =
        function(q) {
            if (!this.sessionVariables) throw "Session Variable Store not set";
            return this.sessionVariables[q] !== this.options[q]
        };
    W.prototype.addEventListener = function(q, w, u) {
        q && w && (this._eventListeners[q] = this._eventListeners[q] || [], this._eventListeners[q].push({
            context: u || this,
            eventHandler: w
        }))
    };
    W.prototype.removeEventListener = function(q, w) {
        if (q && w && this._eventListeners[q])
            for (var u = this._eventListeners[q], y = 0; y < u.length; y++)
                if (u[y].eventHandler === w) {
                    u[y].splice(y, 1);
                    break
                }
    };
    W.prototype.removeAllEventListeners =
        function() {
            this._eventListeners = []
        };
    W.prototype.dispatchEvent = function(q, w, u) {
        if (q && this._eventListeners[q]) {
            w = w || {};
            for (var y = this._eventListeners[q], x = 0; x < y.length; x++) y[x].eventHandler.call(y[x].context, w)
        }
        "function" === typeof this[q] && this[q].call(u || this.chart, w)
    };
    Ca.prototype.registerSpace = function(q, w) {
        "top" === q ? this._topOccupied += w.height : "bottom" === q ? this._bottomOccupied += w.height : "left" === q ? this._leftOccupied += w.width : "right" === q && (this._rightOccupied += w.width)
    };
    Ca.prototype.unRegisterSpace =
        function(q, w) {
            "top" === q ? this._topOccupied -= w.height : "bottom" === q ? this._bottomOccupied -= w.height : "left" === q ? this._leftOccupied -= w.width : "right" === q && (this._rightOccupied -= w.width)
        };
    Ca.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    Ca.prototype.reset = function() {
        this._rightOccupied =
            this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    ma(ka, W);
    ka.prototype.render = function(q) {
        if (0 !== this.fontSize) {
            q && this.ctx.save();
            var w = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var u = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + u);
            "middle" === this.textBaseline && (u = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var y = 0,
                x = this.padding,
                z = null;
            this.ctx.roundRect || Ba(this.ctx);
            (0 < this.borderThickness &&
                this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, u, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (u = 0; u < this._wrappedText.lines.length; u++) z = this._wrappedText.lines[u], "right" === this.horizontalAlign ? y = this.width - z.width - this.padding : "left" === this.horizontalAlign ? y = this.padding : "center" === this.horizontalAlign && (y = (this.width - 2 * this.padding) / 2 - z.width / 2 + this.padding), this.ctx.fillText(z.text, y, x),
                x += z.height;
            this.ctx.font = w;
            q && this.ctx.restore()
        }
    };
    ka.prototype.setText = function(q) {
        this.text = q;
        this._isDirty = !0;
        this._wrappedText = null
    };
    ka.prototype.measureText = function() {
        this._lineHeight = Ta(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    ka.prototype._getLineWithWidth = function(q, w, u) {
        q = String(q);
        if (!q) return {
            text: "",
            width: 0
        };
        var y = u =
            0,
            x = q.length - 1,
            z = Infinity;
        for (this.ctx.font = this._getFontString(); y <= x;) {
            var z = Math.floor((y + x) / 2),
                G = q.substr(0, z + 1);
            u = this.ctx.measureText(G).width;
            if (u < w) y = z + 1;
            else if (u > w) x = z - 1;
            else break
        }
        u > w && 1 < G.length && (G = G.substr(0, G.length - 1), u = this.ctx.measureText(G).width);
        w = !0;
        if (G.length === q.length || " " === q[G.length]) w = !1;
        w && (q = G.split(" "), 1 < q.length && q.pop(), G = q.join(" "), u = this.ctx.measureText(G).width);
        return {
            text: G,
            width: u
        }
    };
    ka.prototype._wrapText = function() {
        var q = new String(Da(String(this.text))),
            w = [],
            u = this.ctx.font,
            y = 0,
            x = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) x = y = 0;
        else
            for (; 0 < q.length;) {
                var z = this.maxHeight - 2 * this.padding,
                    G = this._getLineWithWidth(q, this.maxWidth - 2 * this.padding, !1);
                G.height = this._lineHeight;
                w.push(G);
                var N = x,
                    x = Math.max(x, G.width),
                    y = y + G.height,
                    q = Da(q.slice(G.text.length, q.length));
                z && y > z && (G = w.pop(), y -= G.height, x = N)
            }
        this._wrappedText = {
            lines: w,
            width: x,
            height: y
        };
        this.width = x + 2 * this.padding;
        this.height = y + 2 * this.padding;
        this.ctx.font = u
    };
    ka.prototype._getFontString =
        function() {
            var q;
            q = "" + (this.fontStyle ? this.fontStyle + " " : "");
            q += this.fontWeight ? this.fontWeight + " " : "";
            q += this.fontSize ? this.fontSize + "px " : "";
            var r = this.fontFamily ? this.fontFamily + "" : "";
            !w && r && (r = r.split(",")[0], "'" !== r[0] && '"' !== r[0] && (r = "'" + r + "'"));
            return q += r
        };
    ma(Pa, W);
    ma(Ga, W);
    Ga.prototype.render = function() {
        if (this.text) {
            var q = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                w = q.layoutManager.getFreeSpace(),
                u = w.x1,
                y = w.y1,
                x = 0,
                z = 0,
                G = this.chart._menuButton && this.chart.exportEnabled && "top" ===
                this.verticalAlign ? 22 : 0,
                N, C;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = w.width - 4 - G * ("center" === this.horizontalAlign ? 2 : 1)), z = 0.5 * w.height - this.margin - 2, x = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = w.height - 4), z = 0.5 * w.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = w.width - 4), z = 0.5 * w.height - 4));
            this.wrap || (z = Math.min(z,
                Math.max(1.5 * this.fontSize, this.fontSize + 2.5 * this.padding)));
            var z = new ka(this.ctx, {
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    fontWeight: this.fontWeight,
                    horizontalAlign: this.horizontalAlign,
                    verticalAlign: this.verticalAlign,
                    borderColor: this.borderColor,
                    borderThickness: this.borderThickness,
                    backgroundColor: this.backgroundColor,
                    maxWidth: this.maxWidth,
                    maxHeight: z,
                    cornerRadius: this.cornerRadius,
                    text: this.text,
                    padding: this.padding,
                    textBaseline: "top"
                }),
                H = z.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (y = w.y1 + 2, C = "top") : "bottom" === this.verticalAlign && (y = w.y2 - 2 - H.height, C = "bottom"), "left" === this.horizontalAlign ? u = w.x1 + 2 : "center" === this.horizontalAlign ? u = w.x1 + w.width / 2 - H.width / 2 : "right" === this.horizontalAlign && (u = w.x2 - 2 - H.width - G), N = this.horizontalAlign, this.width = H.width, this.height = H.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (u = w.x1 + 2, y = w.y2 - 2 - (this.maxWidth / 2 - H.width /
                2), x = -90, C = "left", this.width = H.height, this.height = H.width) : "right" === this.horizontalAlign ? (u = w.x2 - 2, y = w.y1 + 2 + (this.maxWidth / 2 - H.width / 2), x = 90, C = "right", this.width = H.height, this.height = H.width) : "center" === this.horizontalAlign && (y = q.y1 + (q.height / 2 - H.height / 2), u = q.x1 + (q.width / 2 - H.width / 2), C = "center", this.width = H.width, this.height = H.height), N = "center");
            z.x = u;
            z.y = y;
            z.angle = x;
            z.horizontalAlign = N;
            z.render(!0);
            q.layoutManager.registerSpace(C, {
                width: this.width + ("left" === C || "right" === C ? this.margin + 2 : 0),
                height: this.height +
                    ("top" === C || "bottom" === C ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: u,
                y1: y,
                x2: u + this.width,
                y2: y + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    ma(La, W);
    La.prototype.render = Ga.prototype.render;
    ma(Ha, W);
    x = {
        addTheme: function(q, w) {
            ya[q] = w
        },
        addColorSet: function(q, w) {
            za[q] = w
        },
        addCultureInfo: function(q, w) {
            Ia[q] = w
        },
        formatNumber: function(q, w, u) {
            u = u || "en";
            if (Ia[u]) return ca(q, w || "#,##0.##", new Ha(u));
            throw "Unknown Culture Name";
        },
        formatDate: function(q, w, u) {
            u = u || "en";
            if (Ia[u]) return Aa(q, w || "DD MMM YYYY", new Ha(u));
            throw "Unknown Culture Name";
        }
    };
    window.CanvasJS = x;
    x.Chart = function() {
        function q(a, f) {
            return a.x - f.x
        }

        function r(a, f, b) {
            if (a && f && b) {
                b = b + "." + f;
                var c = "image/" + f;
                a = a.toDataURL(c);
                var e = !1,
                    g = document.createElement("a");
                g.download = b;
                g.href = a;
                g.target = "_blank";
                if ("undefined" !== typeof Blob && new Blob) {
                    for (var h = a.replace(/^data:[a-z\/]*;base64,/, ""), h = atob(h), m = new ArrayBuffer(h.length), m = new Uint8Array(m), n = 0; n < h.length; n++) m[n] = h.charCodeAt(n);
                    f = new Blob([m.buffer], {
                        type: "image/" + f
                    });
                    try {
                        window.navigator.msSaveBlob(f, b), e = !0
                    } catch (l) {
                        g.dataset.downloadurl = [c, g.download, g.href].join(":"), g.href = window.URL.createObjectURL(f)
                    }
                }
                if (!e) try {
                    event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g.dispatchEvent ? g.dispatchEvent(event) : g.fireEvent && g.fireEvent("onclick")
                } catch (p) {
                    f = window.open(), f.document.write("<img src='" + a + "'></img><div>Please right click on the image and save it to your device</div>"), f.document.close()
                }
            }
        }

        function u(a, f) {
            f = f || {};
            this.theme = y(f.theme) || y(ya[f.theme]) ? "light1" : f.theme;
            u.base.constructor.call(this, "Chart", null, f, null, null);
            var b = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId = 0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.panEnabled = this.disableToolTip = this.animatedRender = !1;
            this._defaultCursor = "default";
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            };
            this._dataInRenderedOrder = [];
            if (this.container = "string" ===
                typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) {
                this.container.innerHTML = "";
                var c = 0,
                    e = 0,
                    c = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width,
                    e = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
                this.width = c;
                this.height = e;
                this.x1 = this.y1 = 0;
                this.x2 = this.width;
                this.y2 = this.height;
                this._selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1;
                this._canvasJSContainer = document.createElement("div");
                this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container");
                this._canvasJSContainer.style.position = "relative";
                this._canvasJSContainer.style.textAlign = "left";
                this._canvasJSContainer.style.cursor = "auto";
                w || (this._canvasJSContainer.style.height = "0px");
                this.container.appendChild(this._canvasJSContainer);
                this.canvas = ta(c, e);
                this._preRenderCanvas = ta(c, e);
                this.canvas.style.position = "absolute";
                this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas),
                    this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ba(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ba(this._preRenderCtx), w ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(c, e), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ta(c,
                        e), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ba(this.overlaidCanvasCtx)), this._eventManager = new da(this), this.windowResizeHandler = T(window, "resize", function() {
                        b._updateSize() && b.render()
                    }), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText =
                    "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                        x1: 0,
                        y1: 0,
                        x2: this.width,
                        y2: this.height
                    }, T(this.overlaidCanvas, "click", function(a) {
                        b._mouseEventHandler(a)
                    }), T(this.overlaidCanvas, "mousemove", function(a) {
                        b._mouseEventHandler(a)
                    }), T(this.overlaidCanvas, "mouseup", function(a) {
                        b._mouseEventHandler(a)
                    }), T(this.overlaidCanvas, "mousedown", function(a) {
                        b._mouseEventHandler(a);
                        va(b._dropdownMenu)
                    }), T(this.overlaidCanvas, "mouseout", function(a) {
                        b._mouseEventHandler(a)
                    }),
                    T(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) {
                        b._touchEventHandler(a)
                    }), T(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                        b._touchEventHandler(a)
                    }), T(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                        b._touchEventHandler(a)
                    }), T(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                        b._touchEventHandler(a)
                    }), this.toolTip =
                    new Z(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                        axisX: [],
                        axisX2: [],
                        axisY: [],
                        axisY2: []
                    })
            } else window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }

        function x(a, f) {
            for (var b = [], c, e = 0; e < a.length; e++)
                if (0 == e) b.push(a[0]);
                else {
                    var g, h, m;
                    m = e - 1;
                    g = 0 === m ? 0 : m - 1;
                    h = m === a.length - 1 ? m : m + 1;
                    c = Math.abs((a[h].x - a[g].x) / (0 === a[h].x - a[m].x ? 0.01 : a[h].x - a[m].x)) * (f - 1) / 2 + 1;
                    var n =
                        (a[h].x - a[g].x) / c;
                    c = (a[h].y - a[g].y) / c;
                    b[b.length] = a[m].x > a[g].x && 0 < n || a[m].x < a[g].x && 0 > n ? {
                        x: a[m].x + n / 3,
                        y: a[m].y + c / 3
                    } : {
                        x: a[m].x,
                        y: a[m].y + c / 9
                    };
                    m = e;
                    g = 0 === m ? 0 : m - 1;
                    h = m === a.length - 1 ? m : m + 1;
                    c = Math.abs((a[h].x - a[g].x) / (0 === a[m].x - a[g].x ? 0.01 : a[m].x - a[g].x)) * (f - 1) / 2 + 1;
                    n = (a[h].x - a[g].x) / c;
                    c = (a[h].y - a[g].y) / c;
                    b[b.length] = a[m].x > a[g].x && 0 < n || a[m].x < a[g].x && 0 > n ? {
                        x: a[m].x - n / 3,
                        y: a[m].y - c / 3
                    } : {
                        x: a[m].x,
                        y: a[m].y - c / 9
                    };
                    b[b.length] = a[e]
                }
            return b
        }

        function z(a, f, b, c, e, g, h, m, n, l) {
            var p = 0;
            l ? (h.color = g, m.color = g) : l = 1;
            p = n ? Math.abs(e -
                b) : Math.abs(c - f);
            p = 0 < h.trimLength ? Math.abs(p * h.trimLength / 100) : Math.abs(p - h.length);
            n ? (b += p / 2, e -= p / 2) : (f += p / 2, c -= p / 2);
            var p = 1 === Math.round(h.thickness) % 2 ? 0.5 : 0,
                v = 1 === Math.round(m.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = l;
            a.strokeStyle = m.color || g;
            a.lineWidth = m.thickness || 2;
            a.setLineDash && a.setLineDash(G(m.dashType, m.thickness));
            a.beginPath();
            n && 0 < m.thickness ? (a.moveTo(c - h.thickness / 2, Math.round((b + e) / 2) - v), a.lineTo(f + h.thickness / 2, Math.round((b + e) / 2) - v)) : 0 < m.thickness && (a.moveTo(Math.round((f + c) /
                2) - v, b + h.thickness / 2), a.lineTo(Math.round((f + c) / 2) - v, e - h.thickness / 2));
            a.stroke();
            a.strokeStyle = h.color || g;
            a.lineWidth = h.thickness || 2;
            a.setLineDash && a.setLineDash(G(h.dashType, h.thickness));
            a.beginPath();
            n && 0 < h.thickness ? (a.moveTo(c - p, b), a.lineTo(c - p, e), a.moveTo(f + p, b), a.lineTo(f + p, e)) : 0 < h.thickness && (a.moveTo(f, b + p), a.lineTo(c, b + p), a.moveTo(f, e - p), a.lineTo(c, e - p));
            a.stroke();
            a.restore()
        }

        function Q(a, f, b, c, e) {
            if (null === a || "undefined" === typeof a) return "undefined" === typeof b ? f : b;
            a = parseFloat(a.toString()) *
                (0 <= a.toString().indexOf("%") ? f / 100 : 1);
            "undefined" !== typeof c && (a = Math.min(c, a), "undefined" !== typeof e && (a = Math.max(e, a)));
            return !isNaN(a) && a <= f && 0 <= a ? a : "undefined" === typeof b ? f : b
        }

        function O(a, f) {
            O.base.constructor.call(this, "Legend", "legend", f, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Ta(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function N(a, f, b, c) {
            N.base.constructor.call(this, "DataSeries", "data", f, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = b;
            this.noDataPointsInPlotArea = 0;
            this.id = c;
            this.chart._eventManager.objectMap[c] = {
                id: c,
                objectType: "dataSeries",
                dataSeriesIndex: b
            };
            a = f.dataPoints ?
                f.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (f = 0; f < a; f++) this.dataPointEOs[f] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function C(a, f, b, c, e, g) {
            C.base.constructor.call(this,
                "Axis", f, b, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = {
                min: Infinity,
                max: -Infinity,
                viewPortMin: Infinity,
                viewPortMax: -Infinity,
                minDiff: Infinity
            };
            this.isOptionsInArray = !0;
            "axisX" === e ? ("left" === g || "bottom" === g ? (this.optionsName = "axisX", y(this.chart.sessionVariables.axisX[c]) && (this.chart.sessionVariables.axisX[c] = {}), this.sessionVariables =
                this.chart.sessionVariables.axisX[c]) : (this.optionsName = "axisX2", y(this.chart.sessionVariables.axisX2[c]) && (this.chart.sessionVariables.axisX2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[c]), this.options.interval || (this.intervalType = null)) : "left" === g || "top" === g ? (this.optionsName = "axisY", y(this.chart.sessionVariables.axisY[c]) && (this.chart.sessionVariables.axisY[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[c]) : (this.optionsName = "axisY2", y(this.chart.sessionVariables.axisY2[c]) &&
                (this.chart.sessionVariables.axisY2[c] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[c]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || b && "undefined" !== typeof b.gridThickness || (this.gridThickness = 0);
            this._position = g;
            this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null
            };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new ea(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new ba(this.chart, this.options.stripLines[a], a,
                    ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new fa(this.chart, this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum =
                this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum =
                Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function ea(a, f, b, c) {
            ea.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", f, null, c);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 12 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 12);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new aa(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId,
                    this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function(a, c) {
                    return a.startValue - c.startValue
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a +
                    1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
            }
        }

        function aa(a, f, b, c, e, g) {
            aa.base.constructor.call(this, "Break", f, b, c, g);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = g;
            this.optionsName = f;
            this.isOptionsInArray = !0;
            this.type = b.type ? this.type : g.type;
            this.fillOpacity = y(b.fillOpacity) ? g.fillOpacity : this.fillOpacity;
            this.lineThickness = y(b.lineThickness) ? g.lineThickness : this.lineThickness;
            this.color = b.color ? this.color : g.color;
            this.lineColor = b.lineColor ? this.lineColor : g.lineColor;
            this.lineDashType = b.lineDashType ? this.lineDashType : g.lineDashType;
            !y(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !y(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
            this.spacing =
                "undefined" === typeof b.spacing ? g.spacing : b.spacing;
            "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = g.spacing);
            this.size = g.parent.logarithmic ? 1 : 0
        }

        function ba(a, f, b, c, e) {
            ba.base.constructor.call(this, "StripLine", "stripLines", f, b, e);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
        }

        function fa(a, f, b) {
            fa.base.constructor.call(this, "Crosshair", "crosshair", f, null, b);
            this.chart = a;
            this.ctx =
                this.chart.ctx;
            this.axis = b;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }

        function Z(a, f) {
            Z.base.constructor.call(this, "ToolTip", "toolTip", f, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._timerId = 0;
            this._prevY = this._prevX = NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize()
        }

        function da(a) {
            this.chart =
                a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ta(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function oa(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        ma(u, W);
        u.prototype.destroy = function() {
            var a = window,
                f = this.windowResizeHandler;
            a.removeEventListener ? a.removeEventListener("resize", f) :
                a.detachEvent && a.detachEvent("onresize", f)
        };
        u.prototype._updateOptions = function() {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor ||
                (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new Ha(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && w;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this.options.zoomEnabled ? (this._zoomButton || (va(this._zoomButton = document.createElement("button")),
                ua(this, this._zoomButton, "pan"), this._toolBar.appendChild(this._zoomButton), this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, T(this._zoomButton, "click", function() {
                    a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, ua(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, ua(a, a._zoomButton, "pan"));
                    a.render()
                }), T(this._zoomButton, "mouseover", function() {
                    na(a, a._zoomButton, {
                        backgroundColor: a.toolbar.backgroundColorOnHover,
                        color: a.toolbar.fontColorOnHover,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    });
                    0 >= navigator.userAgent.search("MSIE") && na(a, a._zoomButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    })
                }), T(this._zoomButton, "mouseout", function() {
                    na(a, a._zoomButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    });
                    0 >= navigator.userAgent.search("MSIE") && na(a, a._zoomButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    })
                })), this._resetButton || (va(this._resetButton =
                    document.createElement("button")), ua(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), T(this._resetButton, "click", function() {
                    a.toolTip.hide();
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, ua(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var c =
                                0; c < a.sessionVariables.axisX.length; c++) a.sessionVariables.axisX[c].newViewportMinimum = null, a.sessionVariables.axisX[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (c = 0; c < a.sessionVariables.axisX2.length; c++) a.sessionVariables.axisX2[c].newViewportMinimum = null, a.sessionVariables.axisX2[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (c = 0; c < a.sessionVariables.axisY.length; c++) a.sessionVariables.axisY[c].newViewportMinimum = null, a.sessionVariables.axisY[c].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (c = 0; c < a.sessionVariables.axisY2.length; c++) a.sessionVariables.axisY2[c].newViewportMinimum = null, a.sessionVariables.axisY2[c].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    va(a._zoomButton, a._resetButton);
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.render();
                    a._dispatchRangeEvent("rangeChanged", "reset")
                }), T(this._resetButton, "mouseover", function() {
                    na(a, a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColorOnHover,
                        color: a.toolbar.hoverFfontColorOnHoverontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    });
                    0 >= navigator.userAgent.search("MSIE") && na(a, a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    })
                }), T(this._resetButton, "mouseout", function() {
                    na(a, a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    });
                    0 >= navigator.userAgent.search("MSIE") && na(a, a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    })
                }), this.overlaidCanvas.style.cursor =
                a._defaultCursor), this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ka(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))) : this.panEnabled = this.zoomEnabled = !1;
            this._menuButton ? this.exportEnabled ? Ka(this._menuButton) : va(this._menuButton) : this.exportEnabled && w && (this._menuButton = document.createElement("button"), ua(this, this._menuButton,
                "menu"), this._toolBar.appendChild(this._menuButton), T(this._menuButton, "click", function() {
                "none" !== a._dropdownMenu.style.display || a._dropDownCloseTime && 500 >= (new Date).getTime() - a._dropDownCloseTime.getTime() || (a._dropdownMenu.style.display = "block", a._menuButton.blur(), a._dropdownMenu.focus())
            }, !0), T(this._menuButton, "mouseover", function() {
                na(a, a._menuButton, {
                    backgroundColor: a.toolbar.backgroundColorOnHover,
                    color: a.toolbar.fontColorOnHover
                });
                0 >= navigator.userAgent.search("MSIE") && na(a, a._menuButton.childNodes[0], {
                    WebkitFilter: "invert(100%)",
                    filter: "invert(100%)"
                })
            }, !0), T(this._menuButton, "mouseout", function() {
                na(a, a._menuButton, {
                    backgroundColor: a.toolbar.backgroundColor,
                    color: a.toolbar.fontColor
                });
                0 >= navigator.userAgent.search("MSIE") && na(a, a._menuButton.childNodes[0], {
                    WebkitFilter: "invert(0%)",
                    filter: "invert(0%)"
                })
            }, !0));
            if (!this._dropdownMenu && this.exportEnabled && w) {
                this._dropdownMenu = document.createElement("div");
                this._dropdownMenu.setAttribute("tabindex", -1);
                var f = -1 !== this.theme.indexOf("dark") ? "black" :
                    "#888888";
                this._dropdownMenu.style.cssText = "position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" + this.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + f;
                a._dropdownMenu.style.display = "none";
                this._toolBar.appendChild(this._dropdownMenu);
                T(this._dropdownMenu, "blur", function() {
                    va(a._dropdownMenu);
                    a._dropDownCloseTime = new Date
                }, !0);
                f = document.createElement("div");
                f.style.cssText = "padding: 12px 8px 12px 8px";
                f.innerHTML = this._cultureInfo.printText;
                f.style.backgroundColor = this.toolbar.backgroundColor;
                f.style.color = this.toolbar.fontColor;
                this._dropdownMenu.appendChild(f);
                T(f, "mouseover", function() {
                    this.style.backgroundColor = a.toolbar.backgroundColorOnHover;
                    this.style.color = a.toolbar.fontColorOnHover
                }, !0);
                T(f, "mouseout", function() {
                    this.style.backgroundColor =
                        a.toolbar.backgroundColor;
                    this.style.color = a.toolbar.fontColor
                }, !0);
                T(f, "click", function() {
                    a.print();
                    va(a._dropdownMenu)
                }, !0);
                f = document.createElement("div");
                f.style.cssText = "padding: 12px 8px 12px 8px";
                f.innerHTML = this._cultureInfo.saveJPGText;
                f.style.backgroundColor = this.toolbar.backgroundColor;
                f.style.color = this.toolbar.fontColor;
                this._dropdownMenu.appendChild(f);
                T(f, "mouseover", function() {
                    this.style.backgroundColor = a.toolbar.backgroundColorOnHover;
                    this.style.color = a.toolbar.fontColorOnHover
                }, !0);
                T(f, "mouseout", function() {
                    this.style.backgroundColor = a.toolbar.backgroundColor;
                    this.style.color = a.toolbar.fontColor
                }, !0);
                T(f, "click", function() {
                    r(a.canvas, "jpeg", a.exportFileName);
                    va(a._dropdownMenu)
                }, !0);
                f = document.createElement("div");
                f.style.cssText = "padding: 12px 8px 12px 8px";
                f.innerHTML = this._cultureInfo.savePNGText;
                f.style.backgroundColor = this.toolbar.backgroundColor;
                f.style.color = this.toolbar.fontColor;
                this._dropdownMenu.appendChild(f);
                T(f, "mouseover", function() {
                    this.style.backgroundColor =
                        a.toolbar.backgroundColorOnHover;
                    this.style.color = a.toolbar.fontColorOnHover
                }, !0);
                T(f, "mouseout", function() {
                    this.style.backgroundColor = a.toolbar.backgroundColor;
                    this.style.color = a.toolbar.fontColor
                }, !0);
                T(f, "click", function() {
                    r(a.canvas, "png", a.exportFileName);
                    va(a._dropdownMenu)
                }, !0)
            }
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ua(a, a._zoomButton, "zoom") : ua(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ua(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var b in this.toolTip.options) this.toolTip.options.hasOwnProperty(b) && this.toolTip.updateOption(b)
        };
        u.prototype._updateSize = function() {
            var a = 0,
                f = 0;
            this.options.width ? a = this.width : this.width = a = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
            this.options.height ? f = this.height : this.height = f = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            return this.canvas.width !==
                a * X || this.canvas.height !== f * X ? (Fa(this.canvas, a, f), Fa(this._preRenderCanvas, a, f), Fa(this.overlaidCanvas, a, f), Fa(this._eventManager.ghostCanvas, a, f), !0) : !1
        };
        u.prototype._initialize = function() {
            this.toolbar = new Pa(this, this.options.toolbar);
            this._animator ? this._animator.cancelAllAnimations() : this._animator = new oa(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this.animationRequestId && this.cancelRequestAnimFrame.call(window,
                this.animationRequestId);
            this._updateOptions();
            this.animatedRender = w && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = {
                axisPlacement: null,
                axisXValueType: null,
                plotTypes: []
            };
            this.layoutManager = new Ca(0, 0, this.width, this.height, 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            var a = 0,
                f = null;
            if (this.options.data) {
                for (var b = 0; b < this.options.data.length; b++)
                    if (a++, !this.options.data[b].type || 0 <= u._supportedChartTypes.indexOf(this.options.data[b].type)) {
                        var c = new N(this, this.options.data[b], a - 1, ++this._eventManager.lastObjectId);
                        "error" === c.type && (c.linkedDataSeriesIndex = y(this.options.data[b].linkedDataSeriesIndex) ? b - 1 : this.options.data[b].linkedDataSeriesIndex, 0 > c.linkedDataSeriesIndex || c.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof c.linkedDataSeriesIndex ||
                            "error" === this.options.data[c.linkedDataSeriesIndex].type) && (c.linkedDataSeriesIndex = null);
                        null === c.name && (c.name = "DataSeries " + a);
                        null === c.color ? 1 < this.options.data.length ? (c._colorSet = [this._selectedColorSet[c.index % this._selectedColorSet.length]], c.color = this._selectedColorSet[c.index % this._selectedColorSet.length]) : c._colorSet = "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type ||
                            "rangeArea" === c.type || "rangeSplineArea" === c.type || "candlestick" === c.type || "ohlc" === c.type || "waterfall" === c.type || "boxAndWhisker" === c.type ? [this._selectedColorSet[0]] : this._selectedColorSet : c._colorSet = [c.color];
                        null === c.markerSize && (("line" === c.type || "stepLine" === c.type || "spline" === c.type || 0 <= c.type.toLowerCase().indexOf("area")) && c.dataPoints && c.dataPoints.length < this.width / 16 || "scatter" === c.type) && (c.markerSize = 8);
                        "bubble" !== c.type && "scatter" !== c.type || !c.dataPoints || (c.dataPoints.some ? c.dataPoints.some(function(a) {
                                return a.x
                            }) &&
                            c.dataPoints.sort(q) : c.dataPoints.sort(q));
                        this.data.push(c);
                        var e = c.axisPlacement,
                            f = f || e,
                            g;
                        "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ?
                            g = 'You cannot combine "' + c.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + c.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (g = 'You cannot combine "' + c.type + '" with pie chart');
                        if (g && window.console) {
                            window.console.log(g);
                            return
                        }
                    }
                for (b = 0; b < this.data.length; b++) {
                    if ("none" == f && "error" === this.data[b].type && window.console) {
                        window.console.log('You cannot combine "' + c.type + '" with error chart');
                        return
                    }
                    "error" === this.data[b].type && (this.data[b].axisPlacement = this.plotInfo.axisPlacement = f || "normal", this.data[b]._linkedSeries = null === this.data[b].linkedDataSeriesIndex ? null : this.data[this.data[b].linkedDataSeriesIndex])
                }
            }
            var h = this;
            this.addEventListener("dataAnimationIterationEnd",
                function() {
                    U.fSWm && U.fSWm(h);
                    0 !== h.axisX.length && U.fBWm && U.fBWm(h)
                });
            Xa(this);
            this._objectsInitialized = !0
        };
        u._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        u.prototype.render = function(a) {
            a && (this.options = a);
            this._initialize();
            bb(this);
            Xa(this);
            var f = [];
            for (a = 0; a < this.data.length; a++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[a].axisYType || "primary" === this.data[a].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var b = 0; b < this.options.axisY.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[b] = new C(this, "axisY", this.options.axisY[b], b, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[b] =
                                    new C(this, "axisY", this.options.axisY[b], b, "axisY", "bottom"));
                            this.data[a].axisY = this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0];
                            this.axisY[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new C(this, "axisY", this.options.axisY, 0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement &&
                            this._axes.push(this.axisY[0] = new C(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[a].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[a]);
                    if ("secondary" === this.data[a].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (b = 0; b < this.options.axisY2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[b] = new C(this, "axisY2", this.options.axisY2[b], b, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement &&
                                    this._axes.push(this.axisY2[b] = new C(this, "axisY2", this.options.axisY2[b], b, "axisY", "top"));
                            this.data[a].axisY = this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0];
                            this.axisY2[0 <= this.data[a].axisYIndex && this.data[a].axisYIndex < this.axisY2.length ? this.data[a].axisYIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new C(this, "axisY2", this.options.axisY2, 0, "axisY",
                            "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new C(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[a].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[a]);
                    if (!this.data[a].axisXType || "primary" === this.data[a].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (b = 0; b < this.options.axisX.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[b] = new C(this, "axisX", this.options.axisX[b],
                                    b, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[b] = new C(this, "axisX", this.options.axisX[b], b, "axisX", "left"));
                            this.data[a].axisX = this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0];
                            this.axisX[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] =
                            new C(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new C(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[a].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[a]);
                    if ("secondary" === this.data[a].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (b = 0; b < this.options.axisX2.length; b++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[b] = new C(this,
                                    "axisX2", this.options.axisX2[b], b, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[b] = new C(this, "axisX2", this.options.axisX2[b], b, "axisX", "right"));
                            this.data[a].axisX = this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0];
                            this.axisX2[0 <= this.data[a].axisXIndex && this.data[a].axisXIndex < this.axisX2.length ? this.data[a].axisXIndex : 0].dataSeries.push(this.data[a])
                        } else this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ?
                            this._axes.push(this.axisX2[0] = new C(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new C(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[a].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[a])
                }
            if (this.axisY) {
                for (b = 1; b < this.axisY.length; b++) "undefined" === typeof this.axisY[b].options.gridThickness && (this.axisY[b].gridThickness = 0);
                for (b = 0; b < this.axisY.length - 1; b++) "undefined" === typeof this.axisY[b].options.margin &&
                    (this.axisY[b].margin = 10)
            }
            if (this.axisY2) {
                for (b = 1; b < this.axisY2.length; b++) "undefined" === typeof this.axisY2[b].options.gridThickness && (this.axisY2[b].gridThickness = 0);
                for (b = 0; b < this.axisY2.length - 1; b++) "undefined" === typeof this.axisY2[b].options.margin && (this.axisY2[b].margin = 10)
            }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness &&
                "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (b = 0; b < this.axisX.length; b++) "undefined" === typeof this.axisX[b].options.gridThickness && (this.axisX[b].gridThickness = 0);
            if (this.axisX2)
                for (b = 0; b < this.axisX2.length; b++) "undefined" === typeof this.axisX2[b].options.gridThickness && (this.axisX2[b].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ?
                this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            b = !1;
            if (0 < this._axes.length && (this.zoomEnabled || this.panEnabled))
                for (a = 0; a < this._axes.length; a++)
                    if (null !== this._axes[a].viewportMinimum || null !== this._axes[a].viewportMaximum) {
                        b = !0;
                        break
                    }
            b ? (Ka(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._zoomButton.style.borderRight =
                this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor) : (va(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            this._processData();
            this.options.title && (this.title = new Ga(this, this.options.title), this.title.dockInsidePlotArea ? f.push(this.title) :
                this.title.render());
            if (this.options.subtitles)
                for (this.subtitles = [], a = 0; a < this.options.subtitles.length; a++) b = new La(this, this.options.subtitles[a], a), this.subtitles.push(b), b.dockInsidePlotArea ? f.push(b) : b.render();
            this.legend = new O(this, this.options.legend);
            for (a = 0; a < this.data.length; a++)(this.data[a].showInLegend || "pie" === this.data[a].type || "doughnut" === this.data[a].type || "funnel" === this.data[a].type || "pyramid" === this.data[a].type) && this.legend.dataSeries.push(this.data[a]);
            this.legend.dockInsidePlotArea ?
                f.push(this.legend) : this.legend.render();
            for (a = 0; a < this._axes.length; a++)
                if (this._axes[a].scaleBreaks && this._axes[a].scaleBreaks._appliedBreaks.length) {
                    w ? (this._breaksCanvas = ta(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
                    break
                }
            this._preRenderCanvas = ta(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) C.setLayoutAndRender(this.axisX,
                this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (a = 0; a < f.length; a++) f[a].render();
            var c = [];
            if (this.animatedRender) {
                var e = ta(this.width, this.height);
                e.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
            }
            var f = this.ctx.miterLimit,
                g;
            this.ctx.miterLimit = 3;
            w && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas,
                0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var h = this.plotInfo.plotTypes[a], m = 0; m < h.plotUnits.length; m++) {
                    var n = h.plotUnits[m],
                        l = null;
                    n.targetCanvas = null;
                    this.animatedRender && (n.targetCanvas = ta(this.width, this.height), n.targetCanvasCtx = n.targetCanvas.getContext("2d"),
                        g = n.targetCanvasCtx.miterLimit, n.targetCanvasCtx.miterLimit = 3);
                    "line" === n.type ? l = this.renderLine(n) : "stepLine" === n.type ? l = this.renderStepLine(n) : "spline" === n.type ? l = this.renderSpline(n) : "column" === n.type ? l = this.renderColumn(n) : "bar" === n.type ? l = this.renderBar(n) : "area" === n.type ? l = this.renderArea(n) : "stepArea" === n.type ? l = this.renderStepArea(n) : "splineArea" === n.type ? l = this.renderSplineArea(n) : "stackedColumn" === n.type ? l = this.renderStackedColumn(n) : "stackedColumn100" === n.type ? l = this.renderStackedColumn100(n) :
                        "stackedBar" === n.type ? l = this.renderStackedBar(n) : "stackedBar100" === n.type ? l = this.renderStackedBar100(n) : "stackedArea" === n.type ? l = this.renderStackedArea(n) : "stackedArea100" === n.type ? l = this.renderStackedArea100(n) : "bubble" === n.type ? l = l = this.renderBubble(n) : "scatter" === n.type ? l = this.renderScatter(n) : "pie" === n.type ? this.renderPie(n) : "doughnut" === n.type ? this.renderPie(n) : "funnel" === n.type ? l = this.renderFunnel(n) : "pyramid" === n.type ? l = this.renderFunnel(n) : "candlestick" === n.type ? l = this.renderCandlestick(n) :
                        "ohlc" === n.type ? l = this.renderCandlestick(n) : "rangeColumn" === n.type ? l = this.renderRangeColumn(n) : "error" === n.type ? l = this.renderError(n) : "rangeBar" === n.type ? l = this.renderRangeBar(n) : "rangeArea" === n.type ? l = this.renderRangeArea(n) : "rangeSplineArea" === n.type ? l = this.renderRangeSplineArea(n) : "waterfall" === n.type ? l = this.renderWaterfall(n) : "boxAndWhisker" === n.type && (l = this.renderBoxAndWhisker(n));
                    for (b = 0; b < n.dataSeriesIndexes.length; b++) this._dataInRenderedOrder.push(this.data[n.dataSeriesIndexes[b]]);
                    this.animatedRender &&
                        (n.targetCanvasCtx.miterLimit = g, l && c.push(l))
                }
            this.ctx.miterLimit = f;
            this.animatedRender && this._breaksCanvasCtx && c.push({
                source: this._breaksCanvasCtx,
                dest: this.plotArea.ctx,
                animationCallback: I.fadeInAnimation,
                easingFunction: I.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            });
            this.animatedRender && 0 < this._indexLabels.length && (g = ta(this.width, this.height).getContext("2d"), c.push(this.renderIndexLabels(g)));
            var p = this;
            if (0 < c.length) p.disableToolTip = !0, p._animator.animate(200, p.animationDuration,
                function(a) {
                    p.ctx.clearRect(0, 0, p.width, p.height);
                    p.ctx.drawImage(e, 0, 0, Math.floor(p.width * X), Math.floor(p.height * X), 0, 0, p.width, p.height);
                    for (var b = 0; b < c.length; b++) l = c[b], 1 > a && "undefined" !== typeof l.startTimePercent ? a >= l.startTimePercent && l.animationCallback(l.easingFunction(a - l.startTimePercent, 0, 1, 1 - l.startTimePercent), l) : l.animationCallback(l.easingFunction(a, 0, 1, 1), l);
                    p.dispatchEvent("dataAnimationIterationEnd", {
                        chart: p
                    })
                },
                function() {
                    c = [];
                    for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                        for (var b =
                                p.plotInfo.plotTypes[a], d = 0; d < b.plotUnits.length; d++) b.plotUnits[d].targetCanvas = null;
                    e = null;
                    p.disableToolTip = !1
                });
            else {
                if (p._breaksCanvas)
                    if (w) p.plotArea.ctx.drawImage(p._breaksCanvas, 0, 0, this.width, this.height);
                    else
                        for (b = 0; b < p._axes.length; b++) p._axes[b].createMask();
                0 < p._indexLabels.length && p.renderIndexLabels();
                p.dispatchEvent("dataAnimationIterationEnd", {
                    chart: p
                })
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) ||
                va(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (b = 0; b < this._axes.length; b++) this._axes[b].maskCanvas && (delete this._axes[b].maskCanvas, delete this._axes[b].maskCtx)
        };
        u.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ?
                    "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        u.prototype.categoriseDataSeries = function() {
            for (var a = "", f = 0; f < this.data.length; f++)
                if (a = this.data[f], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= u._supportedChartTypes.indexOf(a.type)) {
                    for (var b = null, c = !1, e = null, g = !1, h = 0; h < this.plotInfo.plotTypes.length; h++)
                        if (this.plotInfo.plotTypes[h].type === a.type) {
                            c = !0;
                            b = this.plotInfo.plotTypes[h];
                            break
                        }
                    c || (b = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(b));
                    for (h = 0; h <
                        b.plotUnits.length; h++)
                        if (b.plotUnits[h].axisYType === a.axisYType && b.plotUnits[h].axisXType === a.axisXType && b.plotUnits[h].axisYIndex === a.axisYIndex && b.plotUnits[h].axisXIndex === a.axisXIndex) {
                            g = !0;
                            e = b.plotUnits[h];
                            break
                        }
                    g || (e = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: b.plotUnits.length,
                        plotType: b,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <=
                            a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: []
                    }, b.plotUnits.push(e));
                    b.totalDataSeries++;
                    e.dataSeriesIndexes.push(f);
                    a.plotUnit = e
                }
            for (f = 0; f < this.plotInfo.plotTypes.length; f++)
                for (b = this.plotInfo.plotTypes[f], h = a = 0; h < b.plotUnits.length; h++) b.plotUnits[h].previousDataSeriesCount =
                    a, a += b.plotUnits[h].dataSeriesIndexes.length
        };
        u.prototype.assignIdToDataPoints = function() {
            for (var a = 0; a < this.data.length; a++) {
                var f = this.data[a];
                if (f.dataPoints)
                    for (var b = f.dataPoints.length, c = 0; c < b; c++) f.dataPointIds[c] = ++this._eventManager.lastObjectId
            }
        };
        u.prototype._processData = function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var f = this.plotInfo.plotTypes[a], b = 0; b < f.plotUnits.length; b++) {
                    var c = f.plotUnits[b];
                    "line" === c.type ||
                        "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type ? this._processMultiseriesPlotUnit(c) : "stackedColumn" === c.type || "stackedBar" === c.type || "stackedArea" === c.type ? this._processStackedPlotUnit(c) : "stackedColumn100" === c.type || "stackedBar100" === c.type || "stackedArea100" === c.type ? this._processStacked100PlotUnit(c) : "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" ===
                        c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? this._processMultiYPlotUnit(c) : "waterfall" === c.type && this._processSpecificPlotUnit(c)
                }
            this.calculateAutoBreaks()
        };
        u.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var m = this.data[a.dataSeriesIndexes[h]],
                        n = 0,
                        l = !1,
                        p = !1,
                        v;
                    if ("normal" === m.axisPlacement ||
                        "xySwapped" === m.axisPlacement) var k = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        d = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (m.dataPoints[n].x && m.dataPoints[n].x.getTime || "dateTime" === m.xValueType) g = !0;
                    for (n = 0; n < m.dataPoints.length; n++) {
                        "undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        m.dataPoints[n].x.getTime ? (g = !0, c = m.dataPoints[n].x.getTime()) : c = m.dataPoints[n].x;
                        e = m.dataPoints[n].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        e < f.min && "number" === typeof e && (f.min = e);
                        e > f.max && "number" === typeof e && (f.max = e);
                        if (0 < n) {
                            if (a.axisX.logarithmic) {
                                var s =
                                    c / m.dataPoints[n - 1].x;
                                1 > s && (s = 1 / s);
                                b.minDiff > s && 1 !== s && (b.minDiff = s)
                            } else s = c - m.dataPoints[n - 1].x, 0 > s && (s *= -1), b.minDiff > s && 0 !== s && (b.minDiff = s);
                            null !== e && null !== m.dataPoints[n - 1].y && (a.axisY.logarithmic ? (s = e / m.dataPoints[n - 1].y, 1 > s && (s = 1 / s), f.minDiff > s && 1 !== s && (f.minDiff = s)) : (s = e - m.dataPoints[n - 1].y, 0 > s && (s *= -1), f.minDiff > s && 0 !== s && (f.minDiff = s)))
                        }
                        if (c < k && !l) null !== e && (v = c);
                        else {
                            if (!l && (l = !0, 0 < n)) {
                                n -= 2;
                                continue
                            }
                            if (c > d && !p) p = !0;
                            else if (c > d && p) continue;
                            m.dataPoints[n].label && (a.axisX.labels[c] = m.dataPoints[n].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === e ? b.viewPortMin === c && v < c && (b.viewPortMin = v) : (e < f.viewPortMin && "number" === typeof e && (f.viewPortMin = e), e > f.viewPortMax && "number" === typeof e && (f.viewPortMax = e))
                        }
                    }
                    this.plotInfo.axisXValueType = m.xValueType = g ? "dateTime" : "number"
                }
        };
        u.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = [], m = [], n = Infinity, l = -Infinity, p = 0; p <
                    a.dataSeriesIndexes.length; p++) {
                    var v = this.data[a.dataSeriesIndexes[p]],
                        k = 0,
                        d = !1,
                        s = !1,
                        Ra;
                    if ("normal" === v.axisPlacement || "xySwapped" === v.axisPlacement) var B = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        t = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum :
                        this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (v.dataPoints[k].x && v.dataPoints[k].x.getTime || "dateTime" === v.xValueType) g = !0;
                    for (k = 0; k < v.dataPoints.length; k++) {
                        "undefined" === typeof v.dataPoints[k].x && (v.dataPoints[k].x = k + (a.axisX.logarithmic ? 1 : 0));
                        v.dataPoints[k].x.getTime ? (g = !0, c = v.dataPoints[k].x.getTime()) : c = v.dataPoints[k].x;
                        e = y(v.dataPoints[k].y) ? 0 : v.dataPoints[k].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < k) {
                            if (a.axisX.logarithmic) {
                                var q = c / v.dataPoints[k - 1].x;
                                1 > q && (q = 1 / q);
                                b.minDiff > q && 1 !== q && (b.minDiff = q)
                            } else q = c - v.dataPoints[k - 1].x, 0 > q && (q *= -1), b.minDiff > q && 0 !== q && (b.minDiff = q);
                            null !== e && null !== v.dataPoints[k - 1].y && (a.axisY.logarithmic ? 0 < e && (q = e / v.dataPoints[k - 1].y, 1 > q && (q = 1 / q), f.minDiff > q && 1 !== q && (f.minDiff = q)) : (q = e - v.dataPoints[k - 1].y, 0 > q && (q *= -1), f.minDiff > q && 0 !== q && (f.minDiff = q)))
                        }
                        if (c < B && !d) null !== v.dataPoints[k].y && (Ra = c);
                        else {
                            if (!d && (d = !0, 0 < k)) {
                                k -=
                                    2;
                                continue
                            }
                            if (c > t && !s) s = !0;
                            else if (c > t && s) continue;
                            v.dataPoints[k].label && (a.axisX.labels[c] = v.dataPoints[k].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            null === v.dataPoints[k].y ? b.viewPortMin === c && Ra < c && (b.viewPortMin = Ra) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + e, 0 <= e ? h[c] ? h[c] += e : (h[c] = e, n = Math.min(e, n)) : m[c] ? m[c] += e : (m[c] = e, l = Math.max(e, l)))
                        }
                    }
                    a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (f.dataPointYPositiveSums ?
                        (f.dataPointYPositiveSums.push.apply(f.dataPointYPositiveSums, h), f.dataPointYNegativeSums.push.apply(f.dataPointYPositiveSums, m)) : (f.dataPointYPositiveSums = h, f.dataPointYNegativeSums = m));
                    this.plotInfo.axisXValueType = v.xValueType = g ? "dateTime" : "number"
                }
                for (k in h) h.hasOwnProperty(k) && !isNaN(k) && (a = h[k], a < f.min && (f.min = Math.min(a, n)), a > f.max && (f.max = a), k < b.viewPortMin || k > b.viewPortMax || (a < f.viewPortMin && (f.viewPortMin = Math.min(a, n)), a > f.viewPortMax && (f.viewPortMax = a)));
                for (k in m) m.hasOwnProperty(k) &&
                    !isNaN(k) && (a = m[k], a < f.min && (f.min = a), a > f.max && (f.max = Math.max(a, l)), k < b.viewPortMin || k > b.viewPortMax || (a < f.viewPortMin && (f.viewPortMin = a), a > f.viewPortMax && (f.viewPortMax = Math.max(a, l))))
            }
        };
        u.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = !1, m = !1, n = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var p = this.data[a.dataSeriesIndexes[l]],
                        v = 0,
                        k = !1,
                        d = !1,
                        s;
                    if ("normal" === p.axisPlacement || "xySwapped" ===
                        p.axisPlacement) var q = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        B = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ?
                        this.options.axisX.maximum : Infinity;
                    if (p.dataPoints[v].x && p.dataPoints[v].x.getTime || "dateTime" === p.xValueType) g = !0;
                    for (v = 0; v < p.dataPoints.length; v++) {
                        "undefined" === typeof p.dataPoints[v].x && (p.dataPoints[v].x = v + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[v].x.getTime ? (g = !0, c = p.dataPoints[v].x.getTime()) : c = p.dataPoints[v].x;
                        e = y(p.dataPoints[v].y) ? null : p.dataPoints[v].y;
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        if (0 < v) {
                            if (a.axisX.logarithmic) {
                                var t = c / p.dataPoints[v - 1].x;
                                1 > t && (t = 1 / t);
                                b.minDiff > t && 1 !== t && (b.minDiff =
                                    t)
                            } else t = c - p.dataPoints[v - 1].x, 0 > t && (t *= -1), b.minDiff > t && 0 !== t && (b.minDiff = t);
                            y(e) || null === p.dataPoints[v - 1].y || (a.axisY.logarithmic ? 0 < e && (t = e / p.dataPoints[v - 1].y, 1 > t && (t = 1 / t), f.minDiff > t && 1 !== t && (f.minDiff = t)) : (t = e - p.dataPoints[v - 1].y, 0 > t && (t *= -1), f.minDiff > t && 0 !== t && (f.minDiff = t)))
                        }
                        if (c < q && !k) null !== e && (s = c);
                        else {
                            if (!k && (k = !0, 0 < v)) {
                                v -= 2;
                                continue
                            }
                            if (c > B && !d) d = !0;
                            else if (c > B && d) continue;
                            p.dataPoints[v].label && (a.axisX.labels[c] = p.dataPoints[v].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax &&
                                (b.viewPortMax = c);
                            null === e ? b.viewPortMin === c && s < c && (b.viewPortMin = s) : (a.yTotals[c] = (a.yTotals[c] ? a.yTotals[c] : 0) + e, 0 <= e ? h = !0 : 0 > e && (m = !0), n[c] = n[c] ? n[c] + Math.abs(e) : Math.abs(e))
                        }
                    }
                    this.plotInfo.axisXValueType = p.xValueType = g ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (f.max = y(f.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(f.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), f.min = y(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : h && !m ? (f.max = y(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99),
                    f.min = y(f.viewPortMin) ? 1 : Math.min(f.viewPortMin, 1)) : h && m ? (f.max = y(f.viewPortMax) ? 99 : Math.max(f.viewPortMax, 99), f.min = y(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99)) : !h && m && (f.max = y(f.viewPortMax) ? -1 : Math.max(f.viewPortMax, -1), f.min = y(f.viewPortMin) ? -99 : Math.min(f.viewPortMin, -99));
                f.viewPortMin = f.min;
                f.viewPortMax = f.max;
                a.dataPointYSums = n
            }
        };
        u.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g, h,
                        m = !1, n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var l = this.data[a.dataSeriesIndexes[n]],
                        p = 0,
                        v = !1,
                        k = !1,
                        d, s, q;
                    if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var B = this.sessionVariables.axisX.newViewportMinimum ? this.sessionVariables.axisX.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        t = this.sessionVariables.axisX.newViewportMaximum ? this.sessionVariables.axisX.newViewportMaximum :
                        this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (l.dataPoints[p].x && l.dataPoints[p].x.getTime || "dateTime" === l.xValueType) m = !0;
                    for (p = 0; p < l.dataPoints.length; p++) {
                        "undefined" === typeof l.dataPoints[p].x && (l.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                        l.dataPoints[p].x.getTime ? (m = !0, c = l.dataPoints[p].x.getTime()) : c = l.dataPoints[p].x;
                        if ((e = l.dataPoints[p].y) && e.length) {
                            g = Math.min.apply(null,
                                e);
                            h = Math.max.apply(null, e);
                            s = !0;
                            for (var w = 0; w < e.length; w++) null === e.k && (s = !1);
                            s && (v || (q = d), d = c)
                        }
                        c < b.min && (b.min = c);
                        c > b.max && (b.max = c);
                        g < f.min && (f.min = g);
                        h > f.max && (f.max = h);
                        0 < p && (a.axisX.logarithmic ? (s = c / l.dataPoints[p - 1].x, 1 > s && (s = 1 / s), b.minDiff > s && 1 !== s && (b.minDiff = s)) : (s = c - l.dataPoints[p - 1].x, 0 > s && (s *= -1), b.minDiff > s && 0 !== s && (b.minDiff = s)), e && (null !== e[0] && l.dataPoints[p - 1].y && null !== l.dataPoints[p - 1].y[0]) && (a.axisY.logarithmic ? (s = e[0] / l.dataPoints[p - 1].y[0], 1 > s && (s = 1 / s), f.minDiff > s && 1 !== s && (f.minDiff =
                            s)) : (s = e[0] - l.dataPoints[p - 1].y[0], 0 > s && (s *= -1), f.minDiff > s && 0 !== s && (f.minDiff = s))));
                        if (!(c < B) || v) {
                            if (!v && (v = !0, 0 < p)) {
                                p -= 2;
                                d = q;
                                continue
                            }
                            if (c > t && !k) k = !0;
                            else if (c > t && k) continue;
                            l.dataPoints[p].label && (a.axisX.labels[c] = l.dataPoints[p].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            if (b.viewPortMin === c && e)
                                for (w = 0; w < e.length; w++)
                                    if (null === e[w] && d < c) {
                                        b.viewPortMin = d;
                                        break
                                    }
                            null === e ? b.viewPortMin === c && d < c && (b.viewPortMin = d) : (g < f.viewPortMin && (f.viewPortMin = g), h > f.viewPortMax &&
                                (f.viewPortMax = h))
                        }
                    }
                    this.plotInfo.axisXValueType = l.xValueType = m ? "dateTime" : "number"
                }
        };
        u.prototype._processSpecificPlotUnit = function(a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var f = a.axisY.dataInfo, b = a.axisX.dataInfo, c, e, g = !1, h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var m = this.data[a.dataSeriesIndexes[h]],
                        n = 0,
                        l = !1,
                        p = !1,
                        v = c = 0;
                    if ("normal" === m.axisPlacement || "xySwapped" === m.axisPlacement) var k = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum :
                        this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        d = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (m.dataPoints[n].x && m.dataPoints[n].x.getTime ||
                        "dateTime" === m.xValueType) g = !0;
                    for (n = 0; n < m.dataPoints.length; n++) "undefined" !== typeof m.dataPoints[n].isCumulativeSum && !0 === m.dataPoints[n].isCumulativeSum ? (m.dataPointEOs[n].cumulativeSumYStartValue = 0, m.dataPointEOs[n].cumulativeSum = 0 === n ? 0 : m.dataPointEOs[n - 1].cumulativeSum, m.dataPoints[n].y = 0 === n ? 0 : m.dataPointEOs[n - 1].cumulativeSum) : "undefined" !== typeof m.dataPoints[n].isIntermediateSum && !0 === m.dataPoints[n].isIntermediateSum ? (m.dataPointEOs[n].cumulativeSumYStartValue = v, m.dataPointEOs[n].cumulativeSum =
                        0 === n ? 0 : m.dataPointEOs[n - 1].cumulativeSum, m.dataPoints[n].y = 0 === n ? 0 : c, v = 0 === n ? 0 : m.dataPointEOs[n - 1].cumulativeSum, c = 0) : (e = "number" !== typeof m.dataPoints[n].y ? 0 : m.dataPoints[n].y, m.dataPointEOs[n].cumulativeSumYStartValue = 0 === n ? 0 : m.dataPointEOs[n - 1].cumulativeSum, m.dataPointEOs[n].cumulativeSum = 0 === n ? e : m.dataPointEOs[n - 1].cumulativeSum + e, c += e);
                    for (n = 0; n < m.dataPoints.length; n++)
                        if ("undefined" === typeof m.dataPoints[n].x && (m.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0)), m.dataPoints[n].x.getTime ? (g = !0,
                                c = m.dataPoints[n].x.getTime()) : c = m.dataPoints[n].x, e = m.dataPoints[n].y, c < b.min && (b.min = c), c > b.max && (b.max = c), m.dataPointEOs[n].cumulativeSum < f.min && (f.min = m.dataPointEOs[n].cumulativeSum), m.dataPointEOs[n].cumulativeSum > f.max && (f.max = m.dataPointEOs[n].cumulativeSum), 0 < n && (a.axisX.logarithmic ? (v = c / m.dataPoints[n - 1].x, 1 > v && (v = 1 / v), b.minDiff > v && 1 !== v && (b.minDiff = v)) : (v = c - m.dataPoints[n - 1].x, 0 > v && (v *= -1), b.minDiff > v && 0 !== v && (b.minDiff = v)), null !== e && null !== m.dataPoints[n - 1].y && (a.axisY.logarithmic ? (e =
                                m.dataPointEOs[n].cumulativeSum / m.dataPointEOs[n - 1].cumulativeSum, 1 > e && (e = 1 / e), f.minDiff > e && 1 !== e && (f.minDiff = e)) : (e = m.dataPointEOs[n].cumulativeSum - m.dataPointEOs[n - 1].cumulativeSum, 0 > e && (e *= -1), f.minDiff > e && 0 !== e && (f.minDiff = e)))), !(c < k) || l) {
                            if (!l && (l = !0, 0 < n)) {
                                n -= 2;
                                continue
                            }
                            if (c > d && !p) p = !0;
                            else if (c > d && p) continue;
                            m.dataPoints[n].label && (a.axisX.labels[c] = m.dataPoints[n].label);
                            c < b.viewPortMin && (b.viewPortMin = c);
                            c > b.viewPortMax && (b.viewPortMax = c);
                            0 < n && (m.dataPointEOs[n - 1].cumulativeSum < f.viewPortMin &&
                                (f.viewPortMin = m.dataPointEOs[n - 1].cumulativeSum), m.dataPointEOs[n - 1].cumulativeSum > f.viewPortMax && (f.viewPortMax = m.dataPointEOs[n - 1].cumulativeSum));
                            m.dataPointEOs[n].cumulativeSum < f.viewPortMin && (f.viewPortMin = m.dataPointEOs[n].cumulativeSum);
                            m.dataPointEOs[n].cumulativeSum > f.viewPortMax && (f.viewPortMax = m.dataPointEOs[n].cumulativeSum)
                        }
                    this.plotInfo.axisXValueType = m.xValueType = g ? "dateTime" : "number"
                }
        };
        u.prototype.calculateAutoBreaks = function() {
            function a(a, c) {
                var b = c - a,
                    e = Math.pow(10, Math.floor(Math.log(b) /
                        Math.LN10)),
                    f = Math.pow(10, Math.floor(Math.log(Math.abs(a || b)) / Math.LN10));
                if (f < e) var g = Math.ceil(a * (0 < a ? 1.01 : 0.99) / f) * f,
                    h = Math.floor(c * (0 < c ? 0.99 : 1.01) / f) * f;
                else g = Math.ceil(a * (0 < a ? 1.01 : 0.99) / e) * e, h = Math.floor(c * (0 < c ? 0.99 : 1.01) / e) * e;
                var k = g - a,
                    l = c - h;
                if (l > 0.01 * b) var n = C.getNiceNumber(l),
                    h = h + Math.floor(0.99 * l / n) * n;
                k > 0.01 * b && (b = Math.min(C.getNiceNumber(k), Math.ceil(e / 10), Math.ceil(f / 10))) && (g -= Math.floor(0.99 * k / b) * b);
                return {
                    startValue: g,
                    endValue: h
                }
            }

            function f(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var c =
                        a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        b = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (c || b)
                        for (var f = a.axisY.dataInfo, g = a.axisX.dataInfo, h, k = g.min, l = g.max, n = f.min, p = f.max, g = g._dataRanges, f = f._dataRanges, m, v = 0, q = 0; q < a.dataSeriesIndexes.length; q++) {
                            var w = e.data[a.dataSeriesIndexes[q]];
                            if (!(4 > w.dataPoints.length))
                                for (v = 0; v < w.dataPoints.length; v++)
                                    if (c && (m = (l + 1 - k) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) ||
                                            10, 10) / 100, h = w.dataPoints[v].x.getTime ? w.dataPoints[v].x.getTime() : w.dataPoints[v].x, m = Math.floor((h - k) / m), h < g[m].min && (g[m].min = h), h > g[m].max && (g[m].max = h)), b) {
                                        var u = (p + 1 - n) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                        if ((h = "waterfall" === a.type ? w.dataPointEOs[v].cumulativeSum : w.dataPoints[v].y) && h.length)
                                            for (var r = 0; r < h.length; r++) m = Math.floor((h[r] - n) / u), h[r] < f[m].min && (f[m].min = h[r]), h[r] > f[m].max && (f[m].max = h[r]);
                                        else y(h) || (m = Math.floor((h - n) / u), h < f[m].min && (f[m].min =
                                            h), h > f[m].max && (f[m].max = h))
                                    }
                        }
                }
            }

            function b(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var c = a.axisX.dataInfo, b = c.min, f = c.max, g = c._dataRanges, h, k = 0, l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var n = e.data[a.dataSeriesIndexes[l]];
                        if (!(4 > n.dataPoints.length))
                            for (k = 0; k < n.dataPoints.length; k++) h = (f + 1 - b) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, c = n.dataPoints[k].x.getTime ?
                                n.dataPoints[k].x.getTime() : n.dataPoints[k].x, h = Math.floor((c - b) / h), c < g[h].min && (g[h].min = c), c > g[h].max && (g[h].max = c)
                    }
            }
            var c, e = this,
                g;
            for (g in this._axes)
                if (this._axes[g].scaleBreaks && this._axes[g].scaleBreaks.autoCalculate && 1 <= this._axes[g].scaleBreaks.maxNumberOfAutoBreaks) {
                    this._axes[g].dataInfo._dataRanges = [];
                    for (var h = 0; h < 100 / Math.max(parseFloat(this._axes[g].scaleBreaks.collapsibleThreshold) || 10, 10); h++) this._axes[g].dataInfo._dataRanges.push({
                        min: Infinity,
                        max: -Infinity
                    })
                }
            for (g = 0; g < this.plotInfo.plotTypes.length; g++)
                for (var m =
                        this.plotInfo.plotTypes[g], h = 0; h < m.plotUnits.length; h++) c = m.plotUnits[h], "line" === c.type || "stepLine" === c.type || "spline" === c.type || "column" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "bar" === c.type || "bubble" === c.type || "scatter" === c.type || "candlestick" === c.type || "ohlc" === c.type || "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "waterfall" === c.type || "error" === c.type || "boxAndWhisker" === c.type ? f(c) : 0 <= c.type.indexOf("stacked") &&
                    b(c);
            for (g in this._axes)
                if (this._axes[g].dataInfo._dataRanges) {
                    var n = this._axes[g].dataInfo.min;
                    c = (this._axes[g].dataInfo.max + 1 - n) * Math.max(parseFloat(this._axes[g].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                    var l = this._axes[g].dataInfo._dataRanges,
                        p, v, m = [];
                    if (this._axes[g].dataInfo.dataPointYPositiveSums) {
                        var k = this._axes[g].dataInfo.dataPointYPositiveSums;
                        p = l;
                        for (h in k) k.hasOwnProperty(h) && !isNaN(h) && (v = k[h], y(v) || (index = Math.floor((v - n) / c), v < p[index].min && (p[index].min = v), v > p[index].max &&
                            (p[index].max = v)));
                        delete this._axes[g].dataInfo.dataPointYPositiveSums
                    }
                    if (this._axes[g].dataInfo.dataPointYNegativeSums) {
                        k = this._axes[g].dataInfo.dataPointYNegativeSums;
                        p = l;
                        for (h in k) k.hasOwnProperty(h) && !isNaN(h) && (v = -1 * k[h], y(v) || (index = Math.floor((v - n) / c), v < p[index].min && (p[index].min = v), v > p[index].max && (p[index].max = v)));
                        delete this._axes[g].dataInfo.dataPointYNegativeSums
                    }
                    for (h = 0; h < l.length - 1; h++)
                        if (p = l[h].max, isFinite(p))
                            for (; h < l.length - 1;)
                                if (n = l[h + 1].min, isFinite(n)) {
                                    v = n - p;
                                    v > c && m.push({
                                        diff: v,
                                        start: p,
                                        end: n
                                    });
                                    break
                                } else h++;
                    if (this._axes[g].scaleBreaks.customBreaks)
                        for (h = 0; h < this._axes[g].scaleBreaks.customBreaks.length; h++)
                            for (c = 0; c < m.length; c++)
                                if (this._axes[g].scaleBreaks.customBreaks[h].startValue <= m[c].start && m[c].start <= this._axes[g].scaleBreaks.customBreaks[h].endValue || this._axes[g].scaleBreaks.customBreaks[h].startValue <= m[c].start && m[c].start <= this._axes[g].scaleBreaks.customBreaks[h].endValue || m[c].start <= this._axes[g].scaleBreaks.customBreaks[h].startValue && this._axes[g].scaleBreaks.customBreaks[h].startValue <=
                                    m[c].end || m[c].start <= this._axes[g].scaleBreaks.customBreaks[h].endValue && this._axes[g].scaleBreaks.customBreaks[h].endValue <= m[c].end) m.splice(c, 1), c--;
                    m.sort(function(a, c) {
                        return c.diff - a.diff
                    });
                    for (h = 0; h < Math.min(m.length, this._axes[g].scaleBreaks.maxNumberOfAutoBreaks); h++) c = a(m[h].start, m[h].end), this._axes[g].scaleBreaks.autoBreaks.push(new aa(this, "autoBreaks", c, h, ++this._eventManager.lastObjectId, this._axes[g].scaleBreaks)), this._axes[g].scaleBreaks._appliedBreaks.push(this._axes[g].scaleBreaks.autoBreaks[this._axes[g].scaleBreaks.autoBreaks.length -
                        1]);
                    this._axes[g].scaleBreaks._appliedBreaks.sort(function(a, c) {
                        return a.startValue - c.startValue
                    })
                }
        };
        u.prototype.getDataPointAtXY = function(a, f, b) {
            b = b || !1;
            for (var c = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var g = null;
                (g = this._dataInRenderedOrder[e].getDataPointAtXY(a, f, b)) && c.push(g)
            }
            a = null;
            f = !1;
            for (b = 0; b < c.length; b++)
                if ("line" === c[b].dataSeries.type || "stepLine" === c[b].dataSeries.type || "area" === c[b].dataSeries.type || "stepArea" === c[b].dataSeries.type)
                    if (e = ja("markerSize", c[b].dataPoint, c[b].dataSeries) ||
                        8, c[b].distance <= e / 2) {
                        f = !0;
                        break
                    }
            for (b = 0; b < c.length; b++) f && "line" !== c[b].dataSeries.type && "stepLine" !== c[b].dataSeries.type && "area" !== c[b].dataSeries.type && "stepArea" !== c[b].dataSeries.type || (a ? c[b].distance <= a.distance && (a = c[b]) : a = c[b]);
            return a
        };
        u.prototype.getObjectAtXY = function(a, f, b) {
            var c = null;
            if (b = this.getDataPointAtXY(a, f, b || !1)) c = b.dataSeries.dataPointIds[b.dataPointIndex];
            else if (w) c = Va(a, f, this._eventManager.ghostCtx);
            else
                for (b = 0; b < this.legend.items.length; b++) {
                    var e = this.legend.items[b];
                    a >= e.x1 && (a <= e.x2 && f >= e.y1 && f <= e.y2) && (c = e.id)
                }
            return c
        };
        u.prototype.getAutoFontSize = function(a, f, b) {
            f = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= f ? 12 : 10, Math.round(f * (a / 400)))
        };
        u.prototype.resetOverlayedCanvas = function() {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
        u.prototype.clearCanvas = function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        };
        u.prototype.attachEvent = function(a) {
            this._events.push(a)
        };
        u.prototype._touchEventHandler = function(a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var f = [],
                    b = a.changedTouches,
                    c = b ? b[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        f = ["mousemove", "mousedown"];
                        this._lastTouchData = Ma(c);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        f = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        f = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(b && 1 < b.length)) {
                    e = Ma(c);
                    e.time = new Date;
                    try {
                        var g = e.y - this._lastTouchData.y;
                        if (15 < Math.abs(g) && this._lastTouchData.scroll) {
                            this._lastTouchData.scroll = !0;
                            var h = window.parent || window;
                            h && h.scrollBy && h.scrollBy(0, -g)
                        }
                    } catch (m) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (b = 0; b < f.length; b++) e = f[b], g = document.createEvent("MouseEvent"), g.initMouseEvent(e, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), c.target.dispatchEvent(g), a.preventManipulation && a.preventManipulation()
                }
            }
        };
        u.prototype._dispatchRangeEvent = function(a, f) {
            var b = {
                chart: this
            };
            b.type = a;
            b.trigger = f;
            var c = [];
            this.axisX && 0 < this.axisX.length && c.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && c.push("axisX2");
            this.axisY && 0 < this.axisY.length && c.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && c.push("axisY2");
            for (var e = 0; e < c.length; e++)
                if (y(b[c[e]]) && (b[c[e]] = []),
                    "axisY" === c[e])
                    for (var g = 0; g < this.axisY.length; g++) b[c[e]].push({
                        viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                    });
                else if ("axisY2" === c[e])
                for (g = 0; g < this.axisY2.length; g++) b[c[e]].push({
                    viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                });
            else if ("axisX" === c[e])
                for (g = 0; g < this.axisX.length; g++) b[c[e]].push({
                    viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                });
            else if ("axisX2" === c[e])
                for (g = 0; g < this.axisX2.length; g++) b[c[e]].push({
                    viewportMinimum: this[c[e]][g].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[c[e]][g].sessionVariables.newViewportMaximum
                });
            this.dispatchEvent(a, b, this)
        };
        u.prototype._mouseEventHandler = function(a) {
            "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
            var f = Ma(a),
                b = a.type,
                c, e;
            a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
            u.capturedEventParam &&
                (c = u.capturedEventParam, "mouseup" === b && (u.capturedEventParam = null, c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", c.chart._mouseEventHandler, !1)), c.hasOwnProperty(b) && ("mouseup" !== b || c.chart.overlaidCanvas.releaseCapture ? a.target === c.chart.overlaidCanvas && c[b].call(c.context, f.x, f.y) : a.target !== c.chart.overlaidCanvas && (c.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), !e) {
                if (!u.capturedEventParam && this._events) {
                    for (var g = 0; g < this._events.length; g++)
                        if (this._events[g].hasOwnProperty(b))
                            if (c = this._events[g], e = c.bounds, f.x >= e.x1 && f.x <= e.x2 && f.y >= e.y1 && f.y <= e.y2) {
                                c[b].call(c.context, f.x, f.y);
                                "mousedown" === b && !0 === c.capture ? (u.capturedEventParam = c, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === b && (c.chart.overlaidCanvas.releaseCapture ? c.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                break
                            } else c = null;
                    a.target.style.cursor = c && c.cursor ? c.cursor : this._defaultCursor
                }
                b = this.plotArea;
                if (f.x < b.x1 || f.x > b.x2 || f.y < b.y1 || f.y > b.y2) this.toolTip && this.toolTip.enabled ? this.toolTip.hide() : this.resetOverlayedCanvas();
                this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
            }
        };
        u.prototype._plotAreaMouseDown =
            function(a, f) {
                this.isDrag = !0;
                this.dragStartPoint = {
                    x: a,
                    y: f
                }
            };
        u.prototype._plotAreaMouseUp = function(a, f) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var b = f - this.dragStartPoint.y,
                    c = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    g = 0 <= this.zoomType.indexOf("y"),
                    h = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement) var m = g,
                    g = e,
                    e = m;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = g = 0; e < this._axes.length; e++) b =
                            this._axes[e], b.logarithmic ? b.viewportMinimum < b.minimum ? (g = b.minimum / b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum * g, b.sessionVariables.newViewportMaximum = b.viewportMaximum * g, h = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum / b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum / g, b.sessionVariables.newViewportMaximum = b.viewportMaximum / g, h = !0) : b.viewportMinimum < b.minimum ? (g = b.minimum - b.viewportMinimum, b.sessionVariables.newViewportMinimum = b.viewportMinimum +
                                g, b.sessionVariables.newViewportMaximum = b.viewportMaximum + g, h = !0) : b.viewportMaximum > b.maximum && (g = b.viewportMaximum - b.maximum, b.sessionVariables.newViewportMinimum = b.viewportMinimum - g, b.sessionVariables.newViewportMaximum = b.viewportMaximum - g, h = !0);
                    else if ((!e || 2 < Math.abs(c)) && (!g || 2 < Math.abs(b)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        b = e ? this.dragStartPoint.x : this.plotArea.x1;
                        c = g ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        g = g ? f : this.plotArea.y2;
                        2 < Math.abs(b - e) && 2 < Math.abs(c -
                            g) && this._zoomPanToSelectedRegion(b, c, e, g) && (h = !0)
                    }
                    h && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), h && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ka(this._zoomButton, this._resetButton), ua(this, this._zoomButton, "pan"), ua(this, this._resetButton, "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (h = 0; h < this.axisX.length; h++) this.axisX[h].crosshair &&
                        this.axisX[h].crosshair.enabled && this.axisX[h].renderCrosshair(a, f);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (h = 0; h < this.axisX2.length; h++) this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && this.axisX2[h].renderCrosshair(a, f);
                if (this.axisY && 0 < this.axisY.length)
                    for (h = 0; h < this.axisY.length; h++) this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && this.axisY[h].renderCrosshair(a, f);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (h = 0; h < this.axisY2.length; h++) this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled &&
                        this.axisY2[h].renderCrosshair(a, f)
            }
        };
        u.prototype._plotAreaMouseMove = function(a, f) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var b = 0,
                    c = 0,
                    e = b = null,
                    e = 0 <= this.zoomType.indexOf("x"),
                    g = 0 <= this.zoomType.indexOf("y"),
                    h = this;
                "xySwapped" === this.plotInfo.axisPlacement && (b = g, g = e, e = b);
                b = this.dragStartPoint.x - a;
                c = this.dragStartPoint.y - f;
                2 < Math.abs(b) && 8 > Math.abs(b) && (this.panEnabled || this.zoomEnabled) ? this.toolTip.hide() : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, f);
                if ((!e ||
                        2 < Math.abs(b) || !g || 2 < Math.abs(c)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled) e = {
                        x1: e ? this.plotArea.x1 + b : this.plotArea.x1,
                        y1: g ? this.plotArea.y1 + c : this.plotArea.y1,
                        x2: e ? this.plotArea.x2 + b : this.plotArea.x2,
                        y2: g ? this.plotArea.y2 + c : this.plotArea.y2
                    }, clearTimeout(h._panTimerId), h._panTimerId = setTimeout(function(c, b, e, d) {
                        return function() {
                            h._zoomPanToSelectedRegion(c, b, e, d, !0) && (h._dispatchRangeEvent("rangeChanging", "pan"), h.render(), h._dispatchRangeEvent("rangeChanged", "pan"), h.dragStartPoint.x =
                                a, h.dragStartPoint.y = f)
                        }
                    }(e.x1, e.y1, e.x2, e.y2), 0);
                    else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    b = this.overlaidCanvasCtx.globalAlpha;
                    this.overlaidCanvasCtx.fillStyle = "#A89896";
                    var c = e ? this.dragStartPoint.x : this.plotArea.x1,
                        m = g ? this.dragStartPoint.y : this.plotArea.y1,
                        n = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                        l = g ? f - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(c, m, e ? a : this.plotArea.x2 - this.plotArea.x1, g ? f : this.plotArea.y2 - this.plotArea.y1, "xy" !==
                        this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                    this.overlaidCanvasCtx.globalAlpha = 0.7;
                    this.overlaidCanvasCtx.fillRect(c, m, n, l);
                    this.overlaidCanvasCtx.globalAlpha = b
                }
            } else if (this.toolTip.mouseMoveHandler(a, f), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length)
                    for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, f);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e = 0; e <
                        this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, f);
                if (this.axisY && 0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, f);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, f)
            }
        };
        u.prototype._zoomPanToSelectedRegion = function(a, f, b, c,
            e) {
            a = this.validateRegion(a, f, b, c, e);
            f = a.axesWithValidRange;
            b = a.axesRanges;
            if (a.isValid)
                for (c = 0; c < f.length; c++) e = b[c], f[c].setViewPortRange(e.val1, e.val2);
            return a.isValid
        };
        u.prototype.validateRegion = function(a, f, b, c, e) {
            e = e || !1;
            for (var g = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), m = !1, n = [], l = [], p = [], v = 0; v < this._axes.length; v++)("axisX" === this._axes[v].type && g || "axisY" === this._axes[v].type && h) && l.push(this._axes[v]);
            for (h = 0; h < l.length; h++) {
                var v = l[h],
                    g = !1,
                    k = v.convertPixelToValue({
                        x: a,
                        y: f
                    }),
                    d = v.convertPixelToValue({
                        x: b,
                        y: c
                    });
                if (k > d) var s = d,
                    d = k,
                    k = s;
                if (v.scaleBreaks)
                    for (s = 0; !g && s < v.scaleBreaks._appliedBreaks.length; s++) g = v.scaleBreaks._appliedBreaks[s].startValue <= k && v.scaleBreaks._appliedBreaks[s].endValue >= d;
                if (isFinite(v.dataInfo.minDiff))
                    if (s = v.getAppearentDifferceReplacingBreaksToSize(k, d, null, !0), !(g || !(this.panEnabled && v.scaleBreaks && v.scaleBreaks._appliedBreaks.length) && (v.logarithmic && s < Math.pow(v.dataInfo.minDiff, 3) || !v.logarithmic && s < 3 * Math.abs(v.dataInfo.minDiff)) || k <
                            v.minimum || d > v.maximum)) n.push(v), p.push({
                        val1: k,
                        val2: d
                    }), m = !0;
                    else if (!e) {
                    m = !1;
                    break
                }
            }
            return {
                isValid: m,
                axesWithValidRange: n,
                axesRanges: p
            }
        };
        u.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            !w && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var f = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var b = this.axisY[0];
                    a.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1;
                    a.y1 = f.y1 < b.lineCoordinates.y1 ? f.y1 : b.lineCoordinates.y1;
                    a.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2;
                    a.y2 = f.y2 > f.y1 ? f.y2 : b.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (b = this.axisY2[0], a.x1 = f.x1 < f.x2 ? f.x1 : b.lineCoordinates.x1, a.y1 = f.y1 < b.lineCoordinates.y1 ? f.y1 : b.lineCoordinates.y1, a.x2 = f.x2 > b.lineCoordinates.x2 ? f.x2 : b.lineCoordinates.x2, a.y2 = f.y2 > f.y1 ? f.y2 : b.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
            } else f =
                this.layoutManager.getFreeSpace(), a.x1 = f.x1, a.x2 = f.x2, a.y1 = f.y1, a.y2 = f.y2, a.width = f.width, a.height = f.height;
            w || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Ca(a.x1, a.y1, a.x2, a.y2, 2)
        };
        u.prototype.renderIndexLabels = function(a) {
            var f = a || this.plotArea.ctx,
                b = this.plotArea,
                c = 0,
                e = 0,
                g = 0,
                h = 0,
                m = c = h = e = g = 0,
                n = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var l = this._indexLabels[a],
                    p = l.chartType.toLowerCase(),
                    v, k, m = ja("indexLabelFontColor", l.dataPoint, l.dataSeries),
                    n = ja("indexLabelFontSize", l.dataPoint, l.dataSeries);
                v = ja("indexLabelFontFamily", l.dataPoint, l.dataSeries);
                k = ja("indexLabelFontStyle", l.dataPoint, l.dataSeries);
                var h = ja("indexLabelFontWeight", l.dataPoint, l.dataSeries),
                    d = ja("indexLabelBackgroundColor", l.dataPoint, l.dataSeries),
                    e = ja("indexLabelMaxWidth", l.dataPoint, l.dataSeries),
                    g = ja("indexLabelWrap", l.dataPoint, l.dataSeries),
                    s = ja("indexLabelLineDashType", l.dataPoint, l.dataSeries),
                    q = ja("indexLabelLineColor",
                        l.dataPoint, l.dataSeries),
                    B = y(l.dataPoint.indexLabelLineThickness) ? y(l.dataSeries.options.indexLabelLineThickness) ? 0 : l.dataSeries.options.indexLabelLineThickness : l.dataPoint.indexLabelLineThickness,
                    c = 0 < B ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    t = {
                        percent: null,
                        total: null
                    },
                    P = null;
                if (0 <= l.dataSeries.type.indexOf("stacked") || "pie" === l.dataSeries.type || "doughnut" === l.dataSeries.type) t = this.getPercentAndTotal(l.dataSeries, l.dataPoint);
                if (l.dataSeries.indexLabelFormatter ||
                    l.dataPoint.indexLabelFormatter) P = {
                    chart: this,
                    dataSeries: l.dataSeries,
                    dataPoint: l.dataPoint,
                    index: l.indexKeyword,
                    total: t.total,
                    percent: t.percent
                };
                var D = l.dataPoint.indexLabelFormatter ? l.dataPoint.indexLabelFormatter(P) : l.dataPoint.indexLabel ? this.replaceKeywordsWithValue(l.dataPoint.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : l.dataSeries.indexLabelFormatter ? l.dataSeries.indexLabelFormatter(P) : l.dataSeries.indexLabel ? this.replaceKeywordsWithValue(l.dataSeries.indexLabel, l.dataPoint, l.dataSeries,
                    null, l.indexKeyword) : null;
                if (null !== D && "" !== D) {
                    var t = ja("indexLabelPlacement", l.dataPoint, l.dataSeries),
                        P = ja("indexLabelOrientation", l.dataPoint, l.dataSeries),
                        u = l.direction,
                        r = l.dataSeries.axisX,
                        A = l.dataSeries.axisY,
                        wa = !1,
                        d = new ka(f, {
                            x: 0,
                            y: 0,
                            maxWidth: e ? e : 0.5 * this.width,
                            maxHeight: g ? 5 * n : 1.5 * n,
                            angle: "horizontal" === P ? 0 : -90,
                            text: D,
                            padding: 0,
                            backgroundColor: d,
                            horizontalAlign: "left",
                            fontSize: n,
                            fontFamily: v,
                            fontWeight: h,
                            fontColor: m,
                            fontStyle: k,
                            textBaseline: "top"
                        });
                    d.measureText();
                    l.dataSeries.indexLabelMaxWidth =
                        d.maxWidth;
                    if ("stackedarea100" === p) {
                        if (l.point.x < b.x1 || l.point.x > b.x2 || l.point.y < b.y1 - 1 || l.point.y > b.y2 + 1) continue
                    } else if ("rangearea" === p || "rangesplinearea" === p) {
                        if (l.dataPoint.x < r.viewportMinimum || l.dataPoint.x > r.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < A.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > A.viewportMaximum) continue
                    } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                        if (l.dataPoint.x < r.viewportMinimum || l.dataPoint.x > r.viewportMaximum ||
                            l.dataPoint.y < A.viewportMinimum || l.dataPoint.y > A.viewportMaximum) continue
                    } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !l.axisSwapped) {
                        if (l.dataPoint.x < r.viewportMinimum || l.dataPoint.x > r.viewportMaximum || l.bounds.y1 > b.y2 || l.bounds.y2 < b.y1) continue
                    } else if (0 <= p.indexOf("bar") || "error" === p) {
                        if (l.dataPoint.x < r.viewportMinimum || l.dataPoint.x > r.viewportMaximum || l.bounds.x1 > b.x2 || l.bounds.x2 < b.x1) continue
                    } else if ("candlestick" === p || "ohlc" === p) {
                        if (l.dataPoint.x < r.viewportMinimum || l.dataPoint.x >
                            r.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < A.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > A.viewportMaximum) continue
                    } else if (l.dataPoint.x < r.viewportMinimum || l.dataPoint.x > r.viewportMaximum) continue;
                    e = h = 2;
                    "horizontal" === P ? (m = d.width, n = d.height) : (n = d.width, m = d.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) t = "auto", h = 4;
                        else if (0 <= p.indexOf("stacked")) "auto" === t && (t = "inside");
                        else if ("bubble" === p || "scatter" === p) t = "inside";
                        v = l.point.x -
                            m / 2;
                        "inside" !== t ? (e = b.y1, g = b.y2, 0 < u ? (k = l.point.y - n - h - c, k < e && (k = "auto" === t ? Math.max(l.point.y, e) + h + c : e + h + c, wa = k + n > l.point.y)) : (k = l.point.y + h + c, k > g - n - h - c && (k = "auto" === t ? Math.min(l.point.y, g) - n - h - c : g - n - h - c, wa = k < l.point.y))) : (e = Math.max(l.bounds.y1, b.y1), g = Math.min(l.bounds.y2, b.y2), c = 0 <= p.indexOf("range") || "error" === p ? 0 < u ? Math.max(l.bounds.y1, b.y1) + n / 2 + h : Math.min(l.bounds.y2, b.y2) - n / 2 - h : (Math.max(l.bounds.y1, b.y1) + Math.min(l.bounds.y2, b.y2)) / 2, 0 < u ? (k = Math.max(l.point.y, c) - n / 2, k < e && ("bubble" === p || "scatter" ===
                            p) && (k = Math.max(l.point.y - n - h, b.y1 + h))) : (k = Math.min(l.point.y, c) - n / 2, k > g - n - h && ("bubble" === p || "scatter" === p) && (k = Math.min(l.point.y + h, b.y2 - n - h))), k = Math.min(k, g - n))
                    } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (t = "auto", e = 4) : 0 <= p.indexOf("stacked") ? "auto" === t && (t = "inside") : "bubble" === p && (t = "inside"), k = l.point.y - n / 2, "inside" !== t ? (h = b.x1, g = b.x2, 0 > u ? (v = l.point.x - m - e - c, v < h && (v = "auto" === t ? Math.max(l.point.x, h) + e + c : h + e + c, wa = v + m > l.point.x)) : (v = l.point.x + e + c, v > g - m - e - c && (v = "auto" ===
                        t ? Math.min(l.point.x, g) - m - e - c : g - m - e - c, wa = v < l.point.x))) : (h = Math.max(l.bounds.x1, b.x1), Math.min(l.bounds.x2, b.x2), c = 0 <= p.indexOf("range") || "error" === p ? 0 > u ? Math.max(l.bounds.x1, b.x1) + m / 2 + e : Math.min(l.bounds.x2, b.x2) - m / 2 - e : (Math.max(l.bounds.x1, b.x1) + Math.min(l.bounds.x2, b.x2)) / 2, v = 0 > u ? Math.max(l.point.x, c) - m / 2 : Math.min(l.point.x, c) - m / 2, v = Math.max(v, h));
                    "vertical" === P && (k += n);
                    d.x = v;
                    d.y = k;
                    d.render(!0);
                    B && ("inside" !== t && (0 > p.indexOf("bar") && ("error" !== p || !l.axisSwapped) && l.point.x > b.x1 && l.point.x < b.x2 ||
                        !wa) && (0 > p.indexOf("column") && ("error" !== p || l.axisSwapped) && l.point.y > b.y1 && l.point.y < b.y2 || !wa)) && (f.lineWidth = B, f.strokeStyle = q ? q : "gray", f.setLineDash && f.setLineDash(G(s, B)), f.beginPath(), f.moveTo(l.point.x, l.point.y), 0 <= p.indexOf("bar") || "error" === p && l.axisSwapped ? f.lineTo(v + (0 < l.direction ? 0 : m), k + ("horizontal" === P ? n : -n) / 2) : 0 <= p.indexOf("column") || "error" === p && !l.axisSwapped ? f.lineTo(v + m / 2, k + ((0 < l.direction ? n : -n) + ("horizontal" === P ? n : -n)) / 2) : f.lineTo(v + m / 2, k + ((k < l.point.y ? n : -n) + ("horizontal" === P ?
                        n : -n)) / 2), f.stroke())
                }
            }
            f = {
                source: f,
                dest: this.plotArea.ctx,
                animationCallback: I.fadeInAnimation,
                easingFunction: I.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            };
            for (a = 0; a < this._indexLabels.length; a++) l = this._indexLabels[a], d = ja("indexLabelBackgroundColor", l.dataPoint, l.dataSeries), l.dataSeries.indexLabelBackgroundColor = y(d) ? w ? "transparent" : null : d;
            return f
        };
        u.prototype.renderLine = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c =
                    this._eventManager.ghostCtx;
                b.save();
                var e = this.plotArea;
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                for (var g = [], h, m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        l = this.data[n];
                    b.lineWidth = l.lineThickness;
                    var p = l.dataPoints,
                        v = "solid";
                    if (b.setLineDash) {
                        var k = G(l.nullDataLineDashType, l.lineThickness),
                            v = l.lineDashType,
                            d = G(v, l.lineThickness);
                        b.setLineDash(d)
                    }
                    var s = l.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: n
                    };
                    s = H(s);
                    c.strokeStyle = s;
                    c.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                    var s = l._colorSet,
                        q = s = l.lineColor = l.options.lineColor ? l.options.lineColor : s[0];
                    b.strokeStyle = s;
                    var B = !0,
                        t = 0,
                        P, D;
                    b.beginPath();
                    if (0 < p.length) {
                        for (var u = !1, t = 0; t < p.length; t++)
                            if (P = p[t].x.getTime ? p[t].x.getTime() : p[t].x, !(P < a.axisX.dataInfo.viewPortMin || P > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !u)))
                                if ("number" !== typeof p[t].y) 0 < t && !(l.connectNullData || u || B) && (b.stroke(), w && c.stroke()), u = !0;
                                else {
                                    P = a.axisX.convertValueToPixel(P);
                                    D =
                                        a.axisY.convertValueToPixel(p[t].y);
                                    var r = l.dataPointIds[t];
                                    this._eventManager.objectMap[r] = {
                                        id: r,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: n,
                                        dataPointIndex: t,
                                        x1: P,
                                        y1: D
                                    };
                                    B || u ? (!B && l.connectNullData ? (b.setLineDash && (l.options.nullDataLineDashType || v === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(h.x, h.y), v = l.nullDataLineDashType, b.setLineDash(k)), b.lineTo(P, D), w && c.lineTo(P, D)) : (b.beginPath(), b.moveTo(P, D), w && (c.beginPath(), c.moveTo(P, D))), u = B = !1) : (b.lineTo(P,
                                        D), w && c.lineTo(P, D), 0 == t % 500 && (b.stroke(), b.beginPath(), b.moveTo(P, D), w && (c.stroke(), c.beginPath(), c.moveTo(P, D))));
                                    h = {
                                        x: P,
                                        y: D
                                    };
                                    t < p.length - 1 && (q !== (p[t].lineColor || s) || v !== (p[t].lineDashType || l.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(P, D), q = p[t].lineColor || s, b.strokeStyle = q, b.setLineDash && (p[t].lineDashType ? (v = p[t].lineDashType, b.setLineDash(G(v, l.lineThickness))) : (v = l.lineDashType, b.setLineDash(d))));
                                    if (0 < p[t].markerSize || 0 < l.markerSize) {
                                        var A = l.getMarkerProperties(t, P, D, b);
                                        g.push(A);
                                        r = H(r);
                                        w && g.push({
                                            x: P,
                                            y: D,
                                            ctx: c,
                                            type: A.type,
                                            size: A.size,
                                            color: r,
                                            borderColor: r,
                                            borderThickness: A.borderThickness
                                        })
                                    }(p[t].indexLabel || l.indexLabel || p[t].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "line",
                                        dataPoint: p[t],
                                        dataSeries: l,
                                        point: {
                                            x: P,
                                            y: D
                                        },
                                        direction: 0 > p[t].y === a.axisY.reversed ? 1 : -1,
                                        color: s
                                    })
                                }
                        b.stroke();
                        w && c.stroke()
                    }
                }
                ga.drawMarkers(g);
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
                    b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderStepLine = function(a) {
            var f = a.targetCanvasCtx ||
                this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx;
                b.save();
                var e = this.plotArea;
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                for (var g = [], h, m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        l = this.data[n];
                    b.lineWidth = l.lineThickness;
                    var p = l.dataPoints,
                        v = "solid";
                    if (b.setLineDash) {
                        var k = G(l.nullDataLineDashType, l.lineThickness),
                            v = l.lineDashType,
                            d = G(v, l.lineThickness);
                        b.setLineDash(d)
                    }
                    var s = l.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: n
                    };
                    s = H(s);
                    c.strokeStyle = s;
                    c.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                    var s = l._colorSet,
                        q = s = l.lineColor = l.options.lineColor ? l.options.lineColor : s[0];
                    b.strokeStyle = s;
                    var B = !0,
                        t = 0,
                        P, D;
                    b.beginPath();
                    if (0 < p.length) {
                        for (var u = !1, t = 0; t < p.length; t++)
                            if (P = p[t].getTime ? p[t].x.getTime() : p[t].x, !(P < a.axisX.dataInfo.viewPortMin || P > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !u)))
                                if ("number" !== typeof p[t].y) 0 < t && !(l.connectNullData || u || B) && (b.stroke(),
                                    w && c.stroke()), u = !0;
                                else {
                                    var r = D;
                                    P = a.axisX.convertValueToPixel(P);
                                    D = a.axisY.convertValueToPixel(p[t].y);
                                    var A = l.dataPointIds[t];
                                    this._eventManager.objectMap[A] = {
                                        id: A,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: n,
                                        dataPointIndex: t,
                                        x1: P,
                                        y1: D
                                    };
                                    B || u ? (!B && l.connectNullData ? (b.setLineDash && (l.options.nullDataLineDashType || v === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (b.stroke(), b.beginPath(), b.moveTo(h.x, h.y), v = l.nullDataLineDashType, b.setLineDash(k)), b.lineTo(P, r), b.lineTo(P, D), w && (c.lineTo(P,
                                        r), c.lineTo(P, D))) : (b.beginPath(), b.moveTo(P, D), w && (c.beginPath(), c.moveTo(P, D))), u = B = !1) : (b.lineTo(P, r), w && c.lineTo(P, r), b.lineTo(P, D), w && c.lineTo(P, D), 0 == t % 500 && (b.stroke(), b.beginPath(), b.moveTo(P, D), w && (c.stroke(), c.beginPath(), c.moveTo(P, D))));
                                    h = {
                                        x: P,
                                        y: D
                                    };
                                    t < p.length - 1 && (q !== (p[t].lineColor || s) || v !== (p[t].lineDashType || l.lineDashType)) && (b.stroke(), b.beginPath(), b.moveTo(P, D), q = p[t].lineColor || s, b.strokeStyle = q, b.setLineDash && (p[t].lineDashType ? (v = p[t].lineDashType, b.setLineDash(G(v, l.lineThickness))) :
                                        (v = l.lineDashType, b.setLineDash(d))));
                                    if (0 < p[t].markerSize || 0 < l.markerSize) r = l.getMarkerProperties(t, P, D, b), g.push(r), A = H(A), w && g.push({
                                        x: P,
                                        y: D,
                                        ctx: c,
                                        type: r.type,
                                        size: r.size,
                                        color: A,
                                        borderColor: A,
                                        borderThickness: r.borderThickness
                                    });
                                    (p[t].indexLabel || l.indexLabel || p[t].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stepLine",
                                        dataPoint: p[t],
                                        dataSeries: l,
                                        point: {
                                            x: P,
                                            y: D
                                        },
                                        direction: 0 > p[t].y === a.axisY.reversed ? 1 : -1,
                                        color: s
                                    })
                                }
                        b.stroke();
                        w && c.stroke()
                    }
                }
                ga.drawMarkers(g);
                w &&
                    (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), c.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderSpline = function(a) {
            function f(a) {
                a = x(a, 2);
                if (0 < a.length) {
                    c.beginPath();
                    w && e.beginPath();
                    c.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (c.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && c.setLineDash(a[0].newLineDashArray);
                    w && e.moveTo(a[0].x, a[0].y);
                    for (var b = 0; b < a.length - 3; b += 3)
                        if (c.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y), w && e.bezierCurveTo(a[b + 1].x, a[b + 1].y, a[b + 2].x, a[b + 2].y, a[b + 3].x, a[b + 3].y),
                            0 < b && 0 === b % 3E3 || a[b + 3].newStrokeStyle || a[b + 3].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(a[b + 3].x, a[b + 3].y), a[b + 3].newStrokeStyle && (c.strokeStyle = a[b + 3].newStrokeStyle), a[b + 3].newLineDashArray && c.setLineDash(a[b + 3].newLineDashArray), w && (e.stroke(), e.beginPath(), e.moveTo(a[b + 3].x, a[b + 3].y));
                    c.stroke();
                    w && e.stroke()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                c.save();
                var g = this.plotArea;
                c.beginPath();
                c.rect(g.x1, g.y1, g.width, g.height);
                c.clip();
                for (var h = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        l = this.data[n];
                    c.lineWidth = l.lineThickness;
                    var p = l.dataPoints,
                        v = "solid";
                    if (c.setLineDash) {
                        var k = G(l.nullDataLineDashType, l.lineThickness),
                            v = l.lineDashType,
                            d = G(v, l.lineThickness);
                        c.setLineDash(d)
                    }
                    var s = l.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: n
                    };
                    s = H(s);
                    e.strokeStyle = s;
                    e.lineWidth = 0 < l.lineThickness ? Math.max(l.lineThickness, 4) : 0;
                    var s = l._colorSet,
                        q = s = l.lineColor = l.options.lineColor ? l.options.lineColor : s[0];
                    c.strokeStyle = s;
                    var B = 0,
                        t, P, D = [];
                    c.beginPath();
                    if (0 < p.length)
                        for (P = !1, B = 0; B < p.length; B++)
                            if (t = p[B].getTime ? p[B].x.getTime() : p[B].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !P)))
                                if ("number" !== typeof p[B].y) 0 < B && !P && (l.connectNullData ? c.setLineDash && (0 < D.length && (l.options.nullDataLineDashType || !p[B - 1].lineDashType)) && (D[D.length - 1].newLineDashArray = k, v = l.nullDataLineDashType) : (f(D), D = [])), P = !0;
                                else {
                                    t = a.axisX.convertValueToPixel(t);
                                    P = a.axisY.convertValueToPixel(p[B].y);
                                    var u = l.dataPointIds[B];
                                    this._eventManager.objectMap[u] = {
                                        id: u,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: n,
                                        dataPointIndex: B,
                                        x1: t,
                                        y1: P
                                    };
                                    D[D.length] = {
                                        x: t,
                                        y: P
                                    };
                                    B < p.length - 1 && (q !== (p[B].lineColor || s) || v !== (p[B].lineDashType || l.lineDashType)) && (q = p[B].lineColor || s, D[D.length - 1].newStrokeStyle = q, c.setLineDash && (p[B].lineDashType ? (v = p[B].lineDashType, D[D.length - 1].newLineDashArray = G(v, l.lineThickness)) : (v = l.lineDashType, D[D.length - 1].newLineDashArray =
                                        d)));
                                    if (0 < p[B].markerSize || 0 < l.markerSize) {
                                        var r = l.getMarkerProperties(B, t, P, c);
                                        h.push(r);
                                        u = H(u);
                                        w && h.push({
                                            x: t,
                                            y: P,
                                            ctx: e,
                                            type: r.type,
                                            size: r.size,
                                            color: u,
                                            borderColor: u,
                                            borderThickness: r.borderThickness
                                        })
                                    }(p[B].indexLabel || l.indexLabel || p[B].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "spline",
                                        dataPoint: p[B],
                                        dataSeries: l,
                                        point: {
                                            x: t,
                                            y: P
                                        },
                                        direction: 0 > p[B].y === a.axisY.reversed ? 1 : -1,
                                        color: s
                                    });
                                    P = !1
                                }
                    f(D)
                }
                ga.drawMarkers(h);
                w && (b.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), e.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        var R = function(a, f, b, c, e, g, h, m, n, l, p, v, k) {
            "undefined" === typeof k && (k = 1);
            h = h || 0;
            m = m || "black";
            var d = 15 < c - f && 15 < e - b ? 8 : 0.35 * Math.min(c - f, e - b);
            a.beginPath();
            a.moveTo(f, b);
            a.save();
            a.fillStyle = g;
            a.globalAlpha = k;
            a.fillRect(f, b, c - f, e - b);
            a.globalAlpha = 1;
            0 < h && (k = 0 === h % 2 ? 0 : 0.5, a.beginPath(), a.lineWidth = h, a.strokeStyle = m, a.moveTo(f, b), a.rect(f - k, b - k, c - f + 2 * k, e - b + 2 * k), a.stroke());
            a.restore();
            !0 === n && (a.save(), a.beginPath(), a.moveTo(f, b), a.lineTo(f + d, b + d), a.lineTo(c - d, b + d), a.lineTo(c, b), a.closePath(),
                h = a.createLinearGradient((c + f) / 2, b + d, (c + f) / 2, b), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = h, a.fill(), a.restore());
            !0 === l && (a.save(), a.beginPath(), a.moveTo(f, e), a.lineTo(f + d, e - d), a.lineTo(c - d, e - d), a.lineTo(c, e), a.closePath(), h = a.createLinearGradient((c + f) / 2, e - d, (c + f) / 2, e), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, .4)"), a.fillStyle = h, a.fill(), a.restore());
            !0 === p && (a.save(), a.beginPath(), a.moveTo(f, b), a.lineTo(f + d, b + d), a.lineTo(f + d, e - d), a.lineTo(f, e),
                a.closePath(), h = a.createLinearGradient(f + d, (e + b) / 2, f, (e + b) / 2), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, a.fill(), a.restore());
            !0 === v && (a.save(), a.beginPath(), a.moveTo(c, b), a.lineTo(c - d, b + d), a.lineTo(c - d, e - d), a.lineTo(c, e), h = a.createLinearGradient(c - d, (e + b) / 2, c, (e + b) / 2), h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, h.addColorStop(0, g), h.addColorStop(1, "rgba(255, 255, 255, 0.1)"), a.fillStyle = h, a.fill(), a.closePath(), a.restore())
        };
        u.prototype.renderColumn = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, m, n, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    g = this.dataPointMinWidth = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    p = this.dataPointMaxWidth = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width,
                        0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    v = a.axisX.dataInfo.minDiff;
                isFinite(v) || (v = 0.3 * Math.abs(a.axisX.range));
                v = this.dataPointWidth = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(v) / Math.log(a.axisX.range) : Math.abs(v) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > p && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < g) && (p = Math.max(this.dataPointWidth ?
                    this.dataPointWidth : -Infinity, g));
                v < g && (v = g);
                v > p && (v = p);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var k = a.dataSeriesIndexes[p],
                        d = this.data[k],
                        s = d.dataPoints;
                    if (0 < s.length)
                        for (var q = 5 < v && d.bevelEnabled ? !0 : !1, g = 0; g < s.length; g++)
                            if (s[g].getTime ? n = s[g].x.getTime() :
                                n = s[g].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[g].y) {
                                h = a.axisX.convertValueToPixel(n);
                                m = a.axisY.convertValueToPixel(s[g].y);
                                h = a.axisX.reversed ? h + a.plotType.totalDataSeries * v / 2 - (a.previousDataSeriesCount + p) * v << 0 : h - a.plotType.totalDataSeries * v / 2 + (a.previousDataSeriesCount + p) * v << 0;
                                var B = a.axisX.reversed ? h - v << 0 : h + v << 0,
                                    t;
                                0 <= s[g].y ? t = l : (t = m, m = l);
                                m > t && (c = m, m = t, t = c);
                                c = s[g].color ? s[g].color : d._colorSet[g % d._colorSet.length];
                                R(b, h, m, B, t, c, 0, null, q && 0 <= s[g].y,
                                    0 > s[g].y && q, !1, !1, d.fillOpacity);
                                c = d.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: g,
                                    x1: h,
                                    y1: m,
                                    x2: B,
                                    y2: t
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx, h, m, B, t, c, 0, null, !1, !1, !1, !1);
                                (s[g].indexLabel || d.indexLabel || s[g].indexLabelFormatter || d.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: s[g],
                                    dataSeries: d,
                                    point: {
                                        x: h + (B - h) / 2,
                                        y: 0 > s[g].y === a.axisY.reversed ? m : t
                                    },
                                    direction: 0 > s[g].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: h,
                                        y1: Math.min(m, t),
                                        x2: B,
                                        y2: Math.max(m, t)
                                    },
                                    color: c
                                })
                            }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.yScaleAnimation,
                    easingFunction: I.easing.easeOutQuart,
                    animationBase: l < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : l > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : l
                }
            }
        };
        u.prototype.renderStackedColumn = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    m = [],
                    n = [],
                    l = 0,
                    p, v, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    l = this.dataPointMinWidth ?
                    this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && l > p && (l = Math.min(this.dataPointWidth ? this.dataPointWidth :
                    Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < l) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                d < l && (d = l);
                d > p && (d = p);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var q = a.dataSeriesIndexes[s],
                        B = this.data[q],
                        t = B.dataPoints;
                    if (0 < t.length) {
                        var P = 5 < d && B.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (l = 0; l < t.length; l++)
                            if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                                p = a.axisX.convertValueToPixel(c);
                                var D = p - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    u = D + d << 0,
                                    r;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) m[c] = t[l].y + (m[c] ? m[c] : 0), 0 < m[c] && (v = a.axisY.convertValueToPixel(m[c]), r =
                                    "undefined" !== typeof g[c] ? g[c] : k, g[c] = v);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[l].y) n[c] = t[l].y + (n[c] ? n[c] : 0), r = a.axisY.convertValueToPixel(n[c]), v = "undefined" !== typeof h[c] ? h[c] : k, h[c] = r;
                                else if (v = a.axisY.convertValueToPixel(t[l].y), 0 <= t[l].y) {
                                    var A = "undefined" !== typeof g[c] ? g[c] : 0;
                                    v -= A;
                                    r = k - A;
                                    g[c] = A + (r - v)
                                } else A = h[c] ? h[c] : 0, r = v + A, v = k + A, h[c] = A + (r - v);
                                c = t[l].color ? t[l].color : B._colorSet[l % B._colorSet.length];
                                R(b, D, v, u, r, c, 0, null, P && 0 <= t[l].y, 0 > t[l].y && P, !1, !1,
                                    B.fillOpacity);
                                c = B.dataPointIds[l];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: l,
                                    x1: D,
                                    y1: v,
                                    x2: u,
                                    y2: r
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx, D, v, u, r, c, 0, null, !1, !1, !1, !1);
                                (t[l].indexLabel || B.indexLabel || t[l].indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: t[l],
                                    dataSeries: B,
                                    point: {
                                        x: p,
                                        y: 0 <= t[l].y ? v : r
                                    },
                                    direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: D,
                                        y1: Math.min(v, r),
                                        x2: u,
                                        y2: Math.max(v,
                                            r)
                                    },
                                    color: c
                                })
                            }
                    }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.yScaleAnimation,
                    easingFunction: I.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
                }
            }
        };
        u.prototype.renderStackedColumn100 = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    m = [],
                    n = [],
                    l = 0,
                    p, v, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    l = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ?
                    this.dataPointWidth : 1;
                p = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && l > p && (l = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth &&
                    (this.dataPointMinWidth && p < l) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                d < l && (d = l);
                d > p && (d = p);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var q = a.dataSeriesIndexes[s],
                        B = this.data[q],
                        t = B.dataPoints;
                    if (0 < t.length)
                        for (var r = 5 < d && B.bevelEnabled ?
                                !0 : !1, l = 0; l < t.length; l++)
                            if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                                p = a.axisX.convertValueToPixel(c);
                                v = 0 !== a.dataPointYSums[c] ? 100 * (t[l].y / a.dataPointYSums[c]) : 0;
                                var D = p - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    u = D + d << 0,
                                    y;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) {
                                    m[c] = v + ("undefined" !== typeof m[c] ? m[c] : 0);
                                    if (0 >= m[c]) continue;
                                    v = a.axisY.convertValueToPixel(m[c]);
                                    y = g[c] ? g[c] : k;
                                    g[c] = v
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[l].y) n[c] = v + ("undefined" !== typeof n[c] ? n[c] : 0), y = a.axisY.convertValueToPixel(n[c]), v = h[c] ? h[c] : k, h[c] = y;
                                else if (v = a.axisY.convertValueToPixel(v), 0 <= t[l].y) {
                                    var A = "undefined" !== typeof g[c] ? g[c] : 0;
                                    v -= A;
                                    y = k - A;
                                    g[c] = A + (y - v)
                                } else A = "undefined" !== typeof h[c] ? h[c] : 0, y = v + A, v = k + A, h[c] = A + (y - v);
                                c = t[l].color ? t[l].color : B._colorSet[l % B._colorSet.length];
                                R(b, D, v, u, y, c, 0, null, r && 0 <= t[l].y, 0 > t[l].y && r, !1, !1, B.fillOpacity);
                                c = B.dataPointIds[l];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: l,
                                    x1: D,
                                    y1: v,
                                    x2: u,
                                    y2: y
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx, D, v, u, y, c, 0, null, !1, !1, !1, !1);
                                (t[l].indexLabel || B.indexLabel || t[l].indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn100",
                                    dataPoint: t[l],
                                    dataSeries: B,
                                    point: {
                                        x: p,
                                        y: 0 <= t[l].y ? v : y
                                    },
                                    direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: D,
                                        y1: Math.min(v, y),
                                        x2: u,
                                        y2: Math.max(v, y)
                                    },
                                    color: c
                                })
                            }
                }
                w &&
                    (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.yScaleAnimation,
                    easingFunction: I.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k
                }
            }
        };
        u.prototype.renderBar = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, m, n, l = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    p = this.dataPointMaxWidth ? this.dataPointMaxWidth :
                    this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    v = a.axisX.dataInfo.minDiff;
                isFinite(v) || (v = 0.3 * Math.abs(a.axisX.range));
                v = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(v) / Math.log(a.axisX.range) : Math.abs(v) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > p && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                    p < g) && (p = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                v < g && (v = g);
                v > p && (v = p);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var k = a.dataSeriesIndexes[p],
                        d = this.data[k],
                        s = d.dataPoints;
                    if (0 < s.length) {
                        var q = 5 < v && d.bevelEnabled ? !0 : !1;
                        b.strokeStyle =
                            "#4572A7 ";
                        for (g = 0; g < s.length; g++)
                            if (s[g].getTime ? n = s[g].x.getTime() : n = s[g].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[g].y) {
                                m = a.axisX.convertValueToPixel(n);
                                h = a.axisY.convertValueToPixel(s[g].y);
                                m = a.axisX.reversed ? m + a.plotType.totalDataSeries * v / 2 - (a.previousDataSeriesCount + p) * v << 0 : m - a.plotType.totalDataSeries * v / 2 + (a.previousDataSeriesCount + p) * v << 0;
                                var B = a.axisX.reversed ? m - v << 0 : m + v << 0,
                                    t;
                                0 <= s[g].y ? t = l : (t = h, h = l);
                                c = s[g].color ? s[g].color : d._colorSet[g % d._colorSet.length];
                                R(b, t, m, h, B, c, 0, null, q, !1, !1, !1, d.fillOpacity);
                                c = d.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: g,
                                    x1: t,
                                    y1: m,
                                    x2: h,
                                    y2: B
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx, t, m, h, B, c, 0, null, !1, !1, !1, !1);
                                (s[g].indexLabel || d.indexLabel || s[g].indexLabelFormatter || d.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bar",
                                    dataPoint: s[g],
                                    dataSeries: d,
                                    point: {
                                        x: 0 <= s[g].y ? h : t,
                                        y: m + (B - m) / 2
                                    },
                                    direction: 0 > s[g].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(t,
                                            h),
                                        y1: m,
                                        x2: Math.max(t, h),
                                        y2: B
                                    },
                                    color: c
                                })
                            }
                    }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xScaleAnimation,
                    easingFunction: I.easing.easeOutQuart,
                    animationBase: l < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : l > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : l
                }
            }
        };
        u.prototype.renderStackedBar = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    m = [],
                    n = [],
                    l = 0,
                    p, v, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    l = this.dataPointMinWidth ?
                    this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                v = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && l > v && (l = Math.min(this.dataPointWidth ? this.dataPointWidth :
                    Infinity, v));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && v < l) && (v = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                d < l && (d = l);
                d > v && (d = v);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var q = a.dataSeriesIndexes[s],
                        B = this.data[q],
                        t = B.dataPoints;
                    if (0 < t.length) {
                        var u = 5 < d && B.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (l = 0; l < t.length; l++)
                            if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                                v = a.axisX.convertValueToPixel(c);
                                var D = v - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    r = D + d << 0,
                                    y;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) m[c] = t[l].y + (m[c] ? m[c] : 0), 0 < m[c] && (y = g[c] ? g[c] : k, g[c] = p = a.axisY.convertValueToPixel(m[c]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[l].y) n[c] = t[l].y + (n[c] ? n[c] : 0), p = h[c] ? h[c] : k, h[c] = y = a.axisY.convertValueToPixel(n[c]);
                                else if (p = a.axisY.convertValueToPixel(t[l].y), 0 <= t[l].y) {
                                    var A = g[c] ? g[c] : 0;
                                    y = k + A;
                                    p += A;
                                    g[c] = A + (p - y)
                                } else A = h[c] ? h[c] : 0, y = p - A, p = k - A, h[c] = A + (p - y);
                                c = t[l].color ? t[l].color : B._colorSet[l % B._colorSet.length];
                                R(b, y, D, p, r, c, 0, null, u, !1, !1, !1, B.fillOpacity);
                                c = B.dataPointIds[l];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: l,
                                    x1: y,
                                    y1: D,
                                    x2: p,
                                    y2: r
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx, y, D, p, r, c, 0, null, !1, !1, !1, !1);
                                (t[l].indexLabel || B.indexLabel || t[l].indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar",
                                    dataPoint: t[l],
                                    dataSeries: B,
                                    point: {
                                        x: 0 <= t[l].y ? p : y,
                                        y: v
                                    },
                                    direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(y, p),
                                        y1: D,
                                        x2: Math.max(y, p),
                                        y2: r
                                    },
                                    color: c
                                })
                            }
                    }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop",
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xScaleAnimation,
                    easingFunction: I.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
                }
            }
        };
        u.prototype.renderStackedBar100 = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = [],
                    h = [],
                    m = [],
                    n = [],
                    l = 0,
                    p, v, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    l = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                v = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth :
                    0.15 * this.height << 0;
                var d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && l > v && (l = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, v));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && v < l) && (v = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                d < l && (d =
                    l);
                d > v && (d = v);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var q = a.dataSeriesIndexes[s],
                        B = this.data[q],
                        t = B.dataPoints;
                    if (0 < t.length) {
                        var r = 5 < d && B.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (l = 0; l < t.length; l++)
                            if (c = t[l].x.getTime ? t[l].x.getTime() : t[l].x, !(c < a.axisX.dataInfo.viewPortMin || c > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[l].y) {
                                v = a.axisX.convertValueToPixel(c);
                                var D;
                                D = 0 !== a.dataPointYSums[c] ? 100 * (t[l].y / a.dataPointYSums[c]) : 0;
                                var u = v - a.plotType.plotUnits.length * d / 2 + a.index * d << 0,
                                    y = u + d << 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[l].y) {
                                    m[c] = D + (m[c] ? m[c] : 0);
                                    if (0 >= m[c]) continue;
                                    D = g[c] ? g[c] : k;
                                    g[c] = p = a.axisY.convertValueToPixel(m[c])
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                                    0 >= t[l].y) n[c] = D + (n[c] ? n[c] : 0), p = h[c] ? h[c] : k, h[c] = D = a.axisY.convertValueToPixel(n[c]);
                                else if (p = a.axisY.convertValueToPixel(D), 0 <= t[l].y) {
                                    var A = g[c] ? g[c] : 0;
                                    D = k + A;
                                    p += A;
                                    g[c] = A + (p - D)
                                } else A = h[c] ? h[c] : 0, D = p - A, p = k - A, h[c] = A + (p - D);
                                c = t[l].color ? t[l].color : B._colorSet[l % B._colorSet.length];
                                R(b, D, u, p, y, c, 0, null, r, !1, !1, !1, B.fillOpacity);
                                c = B.dataPointIds[l];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: l,
                                    x1: D,
                                    y1: u,
                                    x2: p,
                                    y2: y
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx,
                                    D, u, p, y, c, 0, null, !1, !1, !1, !1);
                                (t[l].indexLabel || B.indexLabel || t[l].indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar100",
                                    dataPoint: t[l],
                                    dataSeries: B,
                                    point: {
                                        x: 0 <= t[l].y ? p : D,
                                        y: v
                                    },
                                    direction: 0 > t[l].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(D, p),
                                        y1: u,
                                        x2: Math.max(D, p),
                                        y2: y
                                    },
                                    color: c
                                })
                            }
                    }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xScaleAnimation,
                    easingFunction: I.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k
                }
            }
        };
        u.prototype.renderArea =
            function(a) {
                var f, b;

                function c() {
                    A && (0 < s.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = r : 0 > a.axisY.viewportMaximum ? y = n.y1 : 0 < a.axisY.viewportMinimum && (y = m.y2), g.lineTo(t, y), g.lineTo(A.x, y), g.closePath(), g.globalAlpha = s.fillOpacity, g.fill(), g.globalAlpha = 1, w && (h.lineTo(t, y), h.lineTo(A.x, y), h.closePath(), h.fill()), g.beginPath(), g.moveTo(t, u), h.beginPath(), h.moveTo(t, u), A = {
                        x: t,
                        y: u
                    })
                }
                var e = a.targetCanvasCtx || this.plotArea.ctx,
                    g = w ? this._preRenderCtx :
                    e;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var h = this._eventManager.ghostCtx,
                        m = a.axisX.lineCoordinates,
                        n = a.axisY.lineCoordinates,
                        l = [],
                        p = this.plotArea,
                        v;
                    g.save();
                    w && h.save();
                    g.beginPath();
                    g.rect(p.x1, p.y1, p.width, p.height);
                    g.clip();
                    w && (h.beginPath(), h.rect(p.x1, p.y1, p.width, p.height), h.clip());
                    for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                        var d = a.dataSeriesIndexes[k],
                            s = this.data[d],
                            q = s.dataPoints,
                            l = s.id;
                        this._eventManager.objectMap[l] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: d
                        };
                        l = H(l);
                        h.fillStyle = l;
                        l = [];
                        f = !0;
                        var B = 0,
                            t, u, D, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                            y, A = null;
                        if (0 < q.length) {
                            var x = s._colorSet[B % s._colorSet.length],
                                z = s.lineColor = s.options.lineColor || x,
                                S = z;
                            g.fillStyle = x;
                            g.strokeStyle = z;
                            g.lineWidth = s.lineThickness;
                            b = "solid";
                            if (g.setLineDash) {
                                var L = G(s.nullDataLineDashType, s.lineThickness);
                                b = s.lineDashType;
                                var ha = G(b, s.lineThickness);
                                g.setLineDash(ha)
                            }
                            for (var $ = !0; B < q.length; B++)
                                if (D = q[B].x.getTime ? q[B].x.getTime() : q[B].x, !(D < a.axisX.dataInfo.viewPortMin ||
                                        D > a.axisX.dataInfo.viewPortMax && (!s.connectNullData || !$)))
                                    if ("number" !== typeof q[B].y) s.connectNullData || ($ || f) || c(), $ = !0;
                                    else {
                                        t = a.axisX.convertValueToPixel(D);
                                        u = a.axisY.convertValueToPixel(q[B].y);
                                        f || $ ? (!f && s.connectNullData ? (g.setLineDash && (s.options.nullDataLineDashType || b === s.lineDashType && s.lineDashType !== s.nullDataLineDashType) && (f = t, b = u, t = v.x, u = v.y, c(), g.moveTo(v.x, v.y), t = f, u = b, A = v, b = s.nullDataLineDashType, g.setLineDash(L)), g.lineTo(t, u), w && h.lineTo(t, u)) : (g.beginPath(), g.moveTo(t, u), w && (h.beginPath(),
                                            h.moveTo(t, u)), A = {
                                            x: t,
                                            y: u
                                        }), $ = f = !1) : (g.lineTo(t, u), w && h.lineTo(t, u), 0 == B % 250 && c());
                                        v = {
                                            x: t,
                                            y: u
                                        };
                                        B < q.length - 1 && (S !== (q[B].lineColor || z) || b !== (q[B].lineDashType || s.lineDashType)) && (c(), S = q[B].lineColor || z, g.strokeStyle = S, g.setLineDash && (q[B].lineDashType ? (b = q[B].lineDashType, g.setLineDash(G(b, s.lineThickness))) : (b = s.lineDashType, g.setLineDash(ha))));
                                        var M = s.dataPointIds[B];
                                        this._eventManager.objectMap[M] = {
                                            id: M,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: d,
                                            dataPointIndex: B,
                                            x1: t,
                                            y1: u
                                        };
                                        0 !== q[B].markerSize &&
                                            (0 < q[B].markerSize || 0 < s.markerSize) && (D = s.getMarkerProperties(B, t, u, g), l.push(D), M = H(M), w && l.push({
                                                x: t,
                                                y: u,
                                                ctx: h,
                                                type: D.type,
                                                size: D.size,
                                                color: M,
                                                borderColor: M,
                                                borderThickness: D.borderThickness
                                            }));
                                        (q[B].indexLabel || s.indexLabel || q[B].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({
                                            chartType: "area",
                                            dataPoint: q[B],
                                            dataSeries: s,
                                            point: {
                                                x: t,
                                                y: u
                                            },
                                            direction: 0 > q[B].y === a.axisY.reversed ? 1 : -1,
                                            color: x
                                        })
                                    }
                            c();
                            ga.drawMarkers(l)
                        }
                    }
                    w && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                        g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
                    g.restore();
                    return {
                        source: e,
                        dest: this.plotArea.ctx,
                        animationCallback: I.xClipAnimation,
                        easingFunction: I.easing.linear,
                        animationBase: 0
                    }
                }
            };
        u.prototype.renderSplineArea = function(a) {
            function f() {
                var b = x(D, 2);
                if (0 < b.length) {
                    if (0 < v.lineThickness) {
                        c.beginPath();
                        c.moveTo(b[0].x, b[0].y);
                        b[0].newStrokeStyle && (c.strokeStyle = b[0].newStrokeStyle);
                        b[0].newLineDashArray && c.setLineDash(b[0].newLineDashArray);
                        for (var d = 0; d < b.length - 3; d += 3)
                            if (c.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), w && e.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), b[d + 3].newStrokeStyle || b[d + 3].newLineDashArray) c.stroke(), c.beginPath(),
                                c.moveTo(b[d + 3].x, b[d + 3].y), b[d + 3].newStrokeStyle && (c.strokeStyle = b[d + 3].newStrokeStyle), b[d + 3].newLineDashArray && c.setLineDash(b[d + 3].newLineDashArray);
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(b[0].x, b[0].y);
                    w && (e.beginPath(), e.moveTo(b[0].x, b[0].y));
                    for (d = 0; d < b.length - 3; d += 3) c.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y), w && e.bezierCurveTo(b[d + 1].x, b[d + 1].y, b[d + 2].x, b[d + 2].y, b[d + 3].x, b[d + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t = B : 0 > a.axisY.viewportMaximum ?
                        t = h.y1 : 0 < a.axisY.viewportMinimum && (t = g.y2);
                    u = {
                        x: b[0].x,
                        y: b[0].y
                    };
                    c.lineTo(b[b.length - 1].x, t);
                    c.lineTo(u.x, t);
                    c.closePath();
                    c.globalAlpha = v.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    w && (e.lineTo(b[b.length - 1].x, t), e.lineTo(u.x, t), e.closePath(), e.fill())
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    g = a.axisX.lineCoordinates,
                    h = a.axisY.lineCoordinates,
                    m = [],
                    n = this.plotArea;
                c.save();
                w && e.save();
                c.beginPath();
                c.rect(n.x1,
                    n.y1, n.width, n.height);
                c.clip();
                w && (e.beginPath(), e.rect(n.x1, n.y1, n.width, n.height), e.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var p = a.dataSeriesIndexes[l],
                        v = this.data[p],
                        k = v.dataPoints,
                        m = v.id;
                    this._eventManager.objectMap[m] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: p
                    };
                    m = H(m);
                    e.fillStyle = m;
                    var m = [],
                        d = 0,
                        s, q, B = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        t, u = null,
                        D = [];
                    if (0 < k.length) {
                        var r = v._colorSet[d % v._colorSet.length],
                            y = v.lineColor = v.options.lineColor ||
                            r,
                            A = y;
                        c.fillStyle = r;
                        c.strokeStyle = y;
                        c.lineWidth = v.lineThickness;
                        var z = "solid";
                        if (c.setLineDash) {
                            var C = G(v.nullDataLineDashType, v.lineThickness),
                                z = v.lineDashType,
                                S = G(z, v.lineThickness);
                            c.setLineDash(S)
                        }
                        for (q = !1; d < k.length; d++)
                            if (s = k[d].x.getTime ? k[d].x.getTime() : k[d].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!v.connectNullData || !q)))
                                if ("number" !== typeof k[d].y) 0 < d && !q && (v.connectNullData ? c.setLineDash && (0 < D.length && (v.options.nullDataLineDashType || !k[d - 1].lineDashType)) &&
                                    (D[D.length - 1].newLineDashArray = C, z = v.nullDataLineDashType) : (f(), D = [])), q = !0;
                                else {
                                    s = a.axisX.convertValueToPixel(s);
                                    q = a.axisY.convertValueToPixel(k[d].y);
                                    var L = v.dataPointIds[d];
                                    this._eventManager.objectMap[L] = {
                                        id: L,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: p,
                                        dataPointIndex: d,
                                        x1: s,
                                        y1: q
                                    };
                                    D[D.length] = {
                                        x: s,
                                        y: q
                                    };
                                    d < k.length - 1 && (A !== (k[d].lineColor || y) || z !== (k[d].lineDashType || v.lineDashType)) && (A = k[d].lineColor || y, D[D.length - 1].newStrokeStyle = A, c.setLineDash && (k[d].lineDashType ? (z = k[d].lineDashType, D[D.length -
                                        1].newLineDashArray = G(z, v.lineThickness)) : (z = v.lineDashType, D[D.length - 1].newLineDashArray = S)));
                                    if (0 !== k[d].markerSize && (0 < k[d].markerSize || 0 < v.markerSize)) {
                                        var ha = v.getMarkerProperties(d, s, q, c);
                                        m.push(ha);
                                        L = H(L);
                                        w && m.push({
                                            x: s,
                                            y: q,
                                            ctx: e,
                                            type: ha.type,
                                            size: ha.size,
                                            color: L,
                                            borderColor: L,
                                            borderThickness: ha.borderThickness
                                        })
                                    }(k[d].indexLabel || v.indexLabel || k[d].indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: k[d],
                                        dataSeries: v,
                                        point: {
                                            x: s,
                                            y: q
                                        },
                                        direction: 0 >
                                            k[d].y === a.axisY.reversed ? 1 : -1,
                                        color: r
                                    });
                                    q = !1
                                }
                        f();
                        ga.drawMarkers(m)
                    }
                }
                w && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderStepArea = function(a) {
            var f, b;

            function c() {
                A && (0 < s.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = r : 0 > a.axisY.viewportMaximum ? y = n.y1 : 0 < a.axisY.viewportMinimum && (y = m.y2), g.lineTo(t, y), g.lineTo(A.x, y), g.closePath(), g.globalAlpha = s.fillOpacity, g.fill(), g.globalAlpha = 1, w && (h.lineTo(t, y), h.lineTo(A.x,
                    y), h.closePath(), h.fill()), g.beginPath(), g.moveTo(t, u), h.beginPath(), h.moveTo(t, u), A = {
                    x: t,
                    y: u
                })
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                g = w ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this._eventManager.ghostCtx,
                    m = a.axisX.lineCoordinates,
                    n = a.axisY.lineCoordinates,
                    l = [],
                    p = this.plotArea,
                    v;
                g.save();
                w && h.save();
                g.beginPath();
                g.rect(p.x1, p.y1, p.width, p.height);
                g.clip();
                w && (h.beginPath(), h.rect(p.x1, p.y1, p.width, p.height), h.clip());
                for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var d =
                        a.dataSeriesIndexes[k],
                        s = this.data[d],
                        q = s.dataPoints,
                        l = s.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: d
                    };
                    l = H(l);
                    h.fillStyle = l;
                    l = [];
                    f = !0;
                    var B = 0,
                        t, u, D, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        y, A = null;
                    b = !1;
                    if (0 < q.length) {
                        var x = s._colorSet[B % s._colorSet.length],
                            z = s.lineColor = s.options.lineColor || x,
                            S = z;
                        g.fillStyle = x;
                        g.strokeStyle = z;
                        g.lineWidth = s.lineThickness;
                        var L = "solid";
                        if (g.setLineDash) {
                            var ha = G(s.nullDataLineDashType, s.lineThickness),
                                L = s.lineDashType,
                                $ = G(L, s.lineThickness);
                            g.setLineDash($)
                        }
                        for (; B < q.length; B++)
                            if (D = q[B].x.getTime ? q[B].x.getTime() : q[B].x, !(D < a.axisX.dataInfo.viewPortMin || D > a.axisX.dataInfo.viewPortMax && (!s.connectNullData || !b))) {
                                var M = u;
                                "number" !== typeof q[B].y ? (s.connectNullData || (b || f) || c(), b = !0) : (t = a.axisX.convertValueToPixel(D), u = a.axisY.convertValueToPixel(q[B].y), f || b ? (!f && s.connectNullData ? (g.setLineDash && (s.options.nullDataLineDashType || L === s.lineDashType && s.lineDashType !== s.nullDataLineDashType) && (f = t,
                                        b = u, t = v.x, u = v.y, c(), g.moveTo(v.x, v.y), t = f, u = b, A = v, L = s.nullDataLineDashType, g.setLineDash(ha)), g.lineTo(t, M), g.lineTo(t, u), w && (h.lineTo(t, M), h.lineTo(t, u))) : (g.beginPath(), g.moveTo(t, u), w && (h.beginPath(), h.moveTo(t, u)), A = {
                                        x: t,
                                        y: u
                                    }), b = f = !1) : (g.lineTo(t, M), w && h.lineTo(t, M), g.lineTo(t, u), w && h.lineTo(t, u), 0 == B % 250 && c()), v = {
                                        x: t,
                                        y: u
                                    }, B < q.length - 1 && (S !== (q[B].lineColor || z) || L !== (q[B].lineDashType || s.lineDashType)) && (c(), S = q[B].lineColor || z, g.strokeStyle = S, g.setLineDash && (q[B].lineDashType ? (L = q[B].lineDashType,
                                        g.setLineDash(G(L, s.lineThickness))) : (L = s.lineDashType, g.setLineDash($)))), D = s.dataPointIds[B], this._eventManager.objectMap[D] = {
                                        id: D,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: d,
                                        dataPointIndex: B,
                                        x1: t,
                                        y1: u
                                    }, 0 !== q[B].markerSize && (0 < q[B].markerSize || 0 < s.markerSize) && (M = s.getMarkerProperties(B, t, u, g), l.push(M), D = H(D), w && l.push({
                                        x: t,
                                        y: u,
                                        ctx: h,
                                        type: M.type,
                                        size: M.size,
                                        color: D,
                                        borderColor: D,
                                        borderThickness: M.borderThickness
                                    })), (q[B].indexLabel || s.indexLabel || q[B].indexLabelFormatter || s.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stepArea",
                                        dataPoint: q[B],
                                        dataSeries: s,
                                        point: {
                                            x: t,
                                            y: u
                                        },
                                        direction: 0 > q[B].y === a.axisY.reversed ? 1 : -1,
                                        color: x
                                    }))
                            }
                        c();
                        ga.drawMarkers(l)
                    }
                }
                w && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), g.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
                g.restore();
                return {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderStackedArea = function(a) {
            function f() {
                if (!(1 > n.length)) {
                    for (0 < A.lineThickness && c.stroke(); 0 < n.length;) {
                        var a = n.pop();
                        c.lineTo(a.x, a.y);
                        w && B.lineTo(a.x, a.y)
                    }
                    c.closePath();
                    c.globalAlpha = A.fillOpacity;
                    c.fill();
                    c.globalAlpha = 1;
                    c.beginPath();
                    w && (B.closePath(),
                        B.fill(), B.beginPath());
                    n = []
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = [],
                    h = this.plotArea,
                    m = [],
                    n = [],
                    l = [],
                    p = [],
                    v = 0,
                    k, d, s, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    B = this._eventManager.ghostCtx,
                    t, u, D;
                w && B.beginPath();
                c.save();
                w && B.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                w && (B.beginPath(), B.rect(h.x1, h.y1, h.width, h.height), B.clip());
                for (var e = [], r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var y =
                        a.dataSeriesIndexes[r],
                        A = this.data[y],
                        x = A.dataPoints;
                    A.dataPointIndexes = [];
                    for (v = 0; v < x.length; v++) y = x[v].x.getTime ? x[v].x.getTime() : x[v].x, A.dataPointIndexes[y] = v, e[y] || (l.push(y), e[y] = !0);
                    l.sort(Na)
                }
                for (r = 0; r < a.dataSeriesIndexes.length; r++) {
                    y = a.dataSeriesIndexes[r];
                    A = this.data[y];
                    x = A.dataPoints;
                    u = !0;
                    n = [];
                    v = A.id;
                    this._eventManager.objectMap[v] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: y
                    };
                    v = H(v);
                    B.fillStyle = v;
                    if (0 < l.length) {
                        var e = A._colorSet[0],
                            z = A.lineColor = A.options.lineColor || e,
                            S = z;
                        c.fillStyle = e;
                        c.strokeStyle = z;
                        c.lineWidth = A.lineThickness;
                        D = "solid";
                        if (c.setLineDash) {
                            var L = G(A.nullDataLineDashType, A.lineThickness);
                            D = A.lineDashType;
                            var ha = G(D, A.lineThickness);
                            c.setLineDash(ha)
                        }
                        for (var $ = !0, v = 0; v < l.length; v++) {
                            s = l[v];
                            var M = null,
                                M = 0 <= A.dataPointIndexes[s] ? x[A.dataPointIndexes[s]] : {
                                    x: s,
                                    y: null
                                };
                            if (!(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!A.connectNullData || !$)))
                                if ("number" !== typeof M.y) A.connectNullData || ($ || u) || f(), $ = !0;
                                else {
                                    k = a.axisX.convertValueToPixel(s);
                                    var F = m[s] ?
                                        m[s] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        p[s] = M.y + (p[s] ? p[s] : 0);
                                        if (0 >= p[s] && a.axisY.logarithmic) continue;
                                        d = a.axisY.convertValueToPixel(p[s])
                                    } else d = a.axisY.convertValueToPixel(M.y), d -= F;
                                    n.push({
                                        x: k,
                                        y: q - F
                                    });
                                    m[s] = q - d;
                                    u || $ ? (!u && A.connectNullData ? (c.setLineDash && (A.options.nullDataLineDashType || D === A.lineDashType && A.lineDashType !== A.nullDataLineDashType) && (u = n.pop(), D = n[n.length - 1], f(), c.moveTo(t.x, t.y), n.push(D), n.push(u), D = A.nullDataLineDashType,
                                        c.setLineDash(L)), c.lineTo(k, d), w && B.lineTo(k, d)) : (c.beginPath(), c.moveTo(k, d), w && (B.beginPath(), B.moveTo(k, d))), $ = u = !1) : (c.lineTo(k, d), w && B.lineTo(k, d), 0 == v % 250 && (f(), c.moveTo(k, d), w && B.moveTo(k, d), n.push({
                                        x: k,
                                        y: q - F
                                    })));
                                    t = {
                                        x: k,
                                        y: d
                                    };
                                    v < x.length - 1 && (S !== (x[v].lineColor || z) || D !== (x[v].lineDashType || A.lineDashType)) && (f(), c.beginPath(), c.moveTo(k, d), n.push({
                                        x: k,
                                        y: q - F
                                    }), S = x[v].lineColor || z, c.strokeStyle = S, c.setLineDash && (x[v].lineDashType ? (D = x[v].lineDashType, c.setLineDash(G(D, A.lineThickness))) : (D = A.lineDashType,
                                        c.setLineDash(ha))));
                                    if (0 <= A.dataPointIndexes[s]) {
                                        var la = A.dataPointIds[A.dataPointIndexes[s]];
                                        this._eventManager.objectMap[la] = {
                                            id: la,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: y,
                                            dataPointIndex: A.dataPointIndexes[s],
                                            x1: k,
                                            y1: d
                                        }
                                    }
                                    0 <= A.dataPointIndexes[s] && 0 !== M.markerSize && (0 < M.markerSize || 0 < A.markerSize) && (s = A.getMarkerProperties(A.dataPointIndexes[s], k, d, c), g.push(s), markerColor = H(la), w && g.push({
                                        x: k,
                                        y: d,
                                        ctx: B,
                                        type: s.type,
                                        size: s.size,
                                        color: markerColor,
                                        borderColor: markerColor,
                                        borderThickness: s.borderThickness
                                    }));
                                    (M.indexLabel || A.indexLabel || M.indexLabelFormatter || A.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: M,
                                        dataSeries: A,
                                        point: {
                                            x: k,
                                            y: d
                                        },
                                        direction: 0 > x[v].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        f();
                        c.moveTo(k, d);
                        w && B.moveTo(k, d)
                    }
                    delete A.dataPointIndexes
                }
                ga.drawMarkers(g);
                w && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas &&
                    c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), B.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderStackedArea100 = function(a) {
            function f() {
                for (0 < A.lineThickness && c.stroke(); 0 < n.length;) {
                    var a = n.pop();
                    c.lineTo(a.x, a.y);
                    w && D.lineTo(a.x,
                        a.y)
                }
                c.closePath();
                c.globalAlpha = A.fillOpacity;
                c.fill();
                c.globalAlpha = 1;
                c.beginPath();
                w && (D.closePath(), D.fill(), D.beginPath());
                n = []
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = this.plotArea,
                    h = [],
                    m = [],
                    n = [],
                    l = [],
                    p = [],
                    v = 0,
                    k, d, s, q, B, t, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    D = this._eventManager.ghostCtx;
                c.save();
                w && D.save();
                c.beginPath();
                c.rect(g.x1, g.y1, g.width, g.height);
                c.clip();
                w && (D.beginPath(),
                    D.rect(g.x1, g.y1, g.width, g.height), D.clip());
                for (var e = [], r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var y = a.dataSeriesIndexes[r],
                        A = this.data[y],
                        x = A.dataPoints;
                    A.dataPointIndexes = [];
                    for (v = 0; v < x.length; v++) y = x[v].x.getTime ? x[v].x.getTime() : x[v].x, A.dataPointIndexes[y] = v, e[y] || (l.push(y), e[y] = !0);
                    l.sort(Na)
                }
                for (r = 0; r < a.dataSeriesIndexes.length; r++) {
                    y = a.dataSeriesIndexes[r];
                    A = this.data[y];
                    x = A.dataPoints;
                    B = !0;
                    e = A.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: y
                    };
                    e = H(e);
                    D.fillStyle =
                        e;
                    n = [];
                    if (0 < l.length) {
                        var e = A._colorSet[v % A._colorSet.length],
                            z = A.lineColor = A.options.lineColor || e,
                            S = z;
                        c.fillStyle = e;
                        c.strokeStyle = z;
                        c.lineWidth = A.lineThickness;
                        t = "solid";
                        if (c.setLineDash) {
                            var L = G(A.nullDataLineDashType, A.lineThickness);
                            t = A.lineDashType;
                            var ha = G(t, A.lineThickness);
                            c.setLineDash(ha)
                        }
                        for (var $ = !0, v = 0; v < l.length; v++) {
                            s = l[v];
                            var M = null,
                                M = 0 <= A.dataPointIndexes[s] ? x[A.dataPointIndexes[s]] : {
                                    x: s,
                                    y: null
                                };
                            if (!(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!A.connectNullData ||
                                    !$)))
                                if ("number" !== typeof M.y) A.connectNullData || ($ || B) || f(), $ = !0;
                                else {
                                    var F;
                                    F = 0 !== a.dataPointYSums[s] ? 100 * (M.y / a.dataPointYSums[s]) : 0;
                                    k = a.axisX.convertValueToPixel(s);
                                    var la = m[s] ? m[s] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        p[s] = F + (p[s] ? p[s] : 0);
                                        if (0 >= p[s] && a.axisY.logarithmic) continue;
                                        d = a.axisY.convertValueToPixel(p[s])
                                    } else d = a.axisY.convertValueToPixel(F), d -= la;
                                    n.push({
                                        x: k,
                                        y: u - la
                                    });
                                    m[s] = u - d;
                                    B || $ ? (!B && A.connectNullData ? (c.setLineDash && (A.options.nullDataLineDashType ||
                                        t === A.lineDashType && A.lineDashType !== A.nullDataLineDashType) && (B = n.pop(), t = n[n.length - 1], f(), c.moveTo(q.x, q.y), n.push(t), n.push(B), t = A.nullDataLineDashType, c.setLineDash(L)), c.lineTo(k, d), w && D.lineTo(k, d)) : (c.beginPath(), c.moveTo(k, d), w && (D.beginPath(), D.moveTo(k, d))), $ = B = !1) : (c.lineTo(k, d), w && D.lineTo(k, d), 0 == v % 250 && (f(), c.moveTo(k, d), w && D.moveTo(k, d), n.push({
                                        x: k,
                                        y: u - la
                                    })));
                                    q = {
                                        x: k,
                                        y: d
                                    };
                                    v < x.length - 1 && (S !== (x[v].lineColor || z) || t !== (x[v].lineDashType || A.lineDashType)) && (f(), c.beginPath(), c.moveTo(k,
                                        d), n.push({
                                        x: k,
                                        y: u - la
                                    }), S = x[v].lineColor || z, c.strokeStyle = S, c.setLineDash && (x[v].lineDashType ? (t = x[v].lineDashType, c.setLineDash(G(t, A.lineThickness))) : (t = A.lineDashType, c.setLineDash(ha))));
                                    if (0 <= A.dataPointIndexes[s]) {
                                        var ra = A.dataPointIds[A.dataPointIndexes[s]];
                                        this._eventManager.objectMap[ra] = {
                                            id: ra,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: y,
                                            dataPointIndex: A.dataPointIndexes[s],
                                            x1: k,
                                            y1: d
                                        }
                                    }
                                    0 <= A.dataPointIndexes[s] && 0 !== M.markerSize && (0 < M.markerSize || 0 < A.markerSize) && (s = A.getMarkerProperties(v, k,
                                        d, c), h.push(s), markerColor = H(ra), w && h.push({
                                        x: k,
                                        y: d,
                                        ctx: D,
                                        type: s.type,
                                        size: s.size,
                                        color: markerColor,
                                        borderColor: markerColor,
                                        borderThickness: s.borderThickness
                                    }));
                                    (M.indexLabel || A.indexLabel || M.indexLabelFormatter || A.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea100",
                                        dataPoint: M,
                                        dataSeries: A,
                                        point: {
                                            x: k,
                                            y: d
                                        },
                                        direction: 0 > x[v].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        f();
                        c.moveTo(k, d);
                        w && D.moveTo(k, d)
                    }
                    delete A.dataPointIndexes
                }
                ga.drawMarkers(h);
                w && (b.drawImage(this._preRenderCanvas, 0,
                    0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(g.x1, g.y1, g.width, g.height), D.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderBubble = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    e = 0,
                    g, h;
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var m = -Infinity, n = Infinity, l = 0; l < a.dataSeriesIndexes.length; l++)
                    for (var p = a.dataSeriesIndexes[l],
                            v = this.data[p], k = v.dataPoints, d = 0, e = 0; e < k.length; e++) g = k[e].getTime ? g = k[e].x.getTime() : g = k[e].x, g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax || "undefined" === typeof k[e].z || (d = k[e].z, d > m && (m = d), d < n && (n = d));
                for (var s = 25 * Math.PI, q = Math.max(Math.pow(0.25 * Math.min(c.height, c.width) / 2, 2) * Math.PI, s), l = 0; l < a.dataSeriesIndexes.length; l++)
                    if (p = a.dataSeriesIndexes[l], v = this.data[p], k = v.dataPoints, 0 < k.length)
                        for (b.strokeStyle = "#4572A7 ", e = 0; e < k.length; e++)
                            if (g = k[e].getTime ? g = k[e].x.getTime() :
                                g = k[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof k[e].y) {
                                g = a.axisX.convertValueToPixel(g);
                                h = a.axisY.convertValueToPixel(k[e].y);
                                var d = k[e].z,
                                    B = 2 * Math.max(Math.sqrt((m === n ? q / 2 : s + (q - s) / (m - n) * (d - n)) / Math.PI) << 0, 1),
                                    d = v.getMarkerProperties(e, b);
                                d.size = B;
                                b.globalAlpha = v.fillOpacity;
                                ga.drawMarker(g, h, b, d.type, d.size, d.color, d.borderColor, d.borderThickness);
                                b.globalAlpha = 1;
                                var t = v.dataPointIds[e];
                                this._eventManager.objectMap[t] = {
                                    id: t,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: e,
                                    x1: g,
                                    y1: h,
                                    size: B
                                };
                                B = H(t);
                                w && ga.drawMarker(g, h, this._eventManager.ghostCtx, d.type, d.size, B, B, d.borderThickness);
                                (k[e].indexLabel || v.indexLabel || k[e].indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: k[e],
                                    dataSeries: v,
                                    point: {
                                        x: g,
                                        y: h
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: g - d.size / 2,
                                        y1: h - d.size / 2,
                                        x2: g + d.size / 2,
                                        y2: h + d.size / 2
                                    },
                                    color: null
                                })
                            }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
                    b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderScatter = function(a) {
            var f =
                a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this.plotArea,
                    e = 0,
                    g, h;
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(c.x1, c.y1, c.width, c.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        l = this.data[n],
                        p = l.dataPoints;
                    if (0 < p.length) {
                        b.strokeStyle =
                            "#4572A7 ";
                        Math.pow(0.3 * Math.min(c.height, c.width) / 2, 2);
                        for (var v = 0, k = 0, e = 0; e < p.length; e++)
                            if (g = p[e].getTime ? g = p[e].x.getTime() : g = p[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[e].y) {
                                g = a.axisX.convertValueToPixel(g);
                                h = a.axisY.convertValueToPixel(p[e].y);
                                var d = l.getMarkerProperties(e, g, h, b);
                                b.globalAlpha = l.fillOpacity;
                                ga.drawMarker(d.x, d.y, d.ctx, d.type, d.size, d.color, d.borderColor, d.borderThickness);
                                b.globalAlpha = 1;
                                Math.sqrt((v - g) * (v - g) + (k - h) * (k - h)) < Math.min(d.size,
                                    5) && p.length > Math.min(this.plotArea.width, this.plotArea.height) || (v = l.dataPointIds[e], this._eventManager.objectMap[v] = {
                                    id: v,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: e,
                                    x1: g,
                                    y1: h
                                }, v = H(v), w && ga.drawMarker(d.x, d.y, this._eventManager.ghostCtx, d.type, d.size, v, v, d.borderThickness), (p[e].indexLabel || l.indexLabel || p[e].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "scatter",
                                    dataPoint: p[e],
                                    dataSeries: l,
                                    point: {
                                        x: g,
                                        y: h
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: g - d.size / 2,
                                        y1: h - d.size /
                                            2,
                                        x2: g + d.size / 2,
                                        y2: h + d.size / 2
                                    },
                                    color: null
                                }), v = g, k = h)
                            }
                    }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(c.x1, c.y1, c.width, c.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderCandlestick = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = this.plotArea,
                    h = 0,
                    m, n, l, p, v, k, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1,
                    h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ?
                    this.dataPointWidth : 0.015 * this.width,
                    d = a.axisX.dataInfo.minDiff;
                isFinite(d) || (d = 0.3 * Math.abs(a.axisX.range));
                d = this.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(d) / Math.log(a.axisX.range) : Math.abs(d) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > h && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                d < e && (d = e);
                d > h && (d = h);
                b.save();
                w && c.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                w && (c.beginPath(), c.rect(g.x1, g.y1, g.width, g.height), c.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var q = a.dataSeriesIndexes[s],
                        B = this.data[q],
                        t = B.dataPoints;
                    if (0 < t.length)
                        for (var u = 5 < d && B.bevelEnabled ? !0 : !1, h = 0; h < t.length; h++)
                            if (t[h].getTime ? k = t[h].x.getTime() : k = t[h].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !y(t[h].y) && t[h].y.length && "number" === typeof t[h].y[0] && "number" === typeof t[h].y[1] &&
                                "number" === typeof t[h].y[2] && "number" === typeof t[h].y[3]) {
                                m = a.axisX.convertValueToPixel(k);
                                n = a.axisY.convertValueToPixel(t[h].y[0]);
                                l = a.axisY.convertValueToPixel(t[h].y[1]);
                                p = a.axisY.convertValueToPixel(t[h].y[2]);
                                v = a.axisY.convertValueToPixel(t[h].y[3]);
                                var D = m - d / 2 << 0,
                                    r = D + d << 0,
                                    e = t[h].color ? t[h].color : B._colorSet[0],
                                    x = Math.round(Math.max(1, 0.15 * d)),
                                    A = 0 === x % 2 ? 0 : 0.5,
                                    z = B.dataPointIds[h];
                                this._eventManager.objectMap[z] = {
                                    id: z,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: h,
                                    x1: D,
                                    y1: n,
                                    x2: r,
                                    y2: l,
                                    x3: m,
                                    y3: p,
                                    x4: m,
                                    y4: v,
                                    borderThickness: x,
                                    color: e
                                };
                                b.strokeStyle = e;
                                b.beginPath();
                                b.lineWidth = x;
                                c.lineWidth = Math.max(x, 4);
                                "candlestick" === B.type ? (b.moveTo(m - A, l), b.lineTo(m - A, Math.min(n, v)), b.stroke(), b.moveTo(m - A, Math.max(n, v)), b.lineTo(m - A, p), b.stroke(), R(b, D, Math.min(n, v), r, Math.max(n, v), t[h].y[0] <= t[h].y[3] ? B.risingColor : e, x, e, u, u, !1, !1, B.fillOpacity), w && (e = H(z), c.strokeStyle = e, c.moveTo(m - A, l), c.lineTo(m - A, Math.min(n, v)), c.stroke(), c.moveTo(m - A, Math.max(n, v)), c.lineTo(m - A, p), c.stroke(), R(c, D, Math.min(n,
                                    v), r, Math.max(n, v), e, 0, null, !1, !1, !1, !1))) : "ohlc" === B.type && (b.moveTo(m - A, l), b.lineTo(m - A, p), b.stroke(), b.beginPath(), b.moveTo(m, n), b.lineTo(D, n), b.stroke(), b.beginPath(), b.moveTo(m, v), b.lineTo(r, v), b.stroke(), w && (e = H(z), c.strokeStyle = e, c.moveTo(m - A, l), c.lineTo(m - A, p), c.stroke(), c.beginPath(), c.moveTo(m, n), c.lineTo(D, n), c.stroke(), c.beginPath(), c.moveTo(m, v), c.lineTo(r, v), c.stroke()));
                                (t[h].indexLabel || B.indexLabel || t[h].indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: B.type,
                                    dataPoint: t[h],
                                    dataSeries: B,
                                    point: {
                                        x: D + (r - D) / 2,
                                        y: a.axisY.reversed ? p : l
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: D,
                                        y1: Math.min(l, p),
                                        x2: r,
                                        y2: Math.max(l, p)
                                    },
                                    color: e
                                })
                            }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), b.clearRect(g.x1, g.y1, g.width, g.height), c.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderBoxAndWhisker = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f,
                c = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = this.plotArea,
                    h = 0,
                    m, n, l, p, v, k, d, e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth :
                    1,
                    h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    s = a.axisX.dataInfo.minDiff;
                isFinite(s) || (s = 0.3 * Math.abs(a.axisX.range));
                s = this.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(s) / Math.log(a.axisX.range) : Math.abs(s) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > h && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.dataPointWidth ?
                    this.dataPointWidth : -Infinity, e));
                s < e && (s = e);
                s > h && (s = h);
                b.save();
                w && c.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                w && (c.beginPath(), c.rect(g.x1, g.y1, g.width, g.height), c.clip());
                for (var q = !1, q = !!a.axisY.reversed, B = 0; B < a.dataSeriesIndexes.length; B++) {
                    var t = a.dataSeriesIndexes[B],
                        u = this.data[t],
                        r = u.dataPoints;
                    if (0 < r.length)
                        for (var x = 5 < s && u.bevelEnabled ? !0 : !1, h = 0; h < r.length; h++)
                            if (r[h].getTime ? d = r[h].x.getTime() : d = r[h].x, !(d < a.axisX.dataInfo.viewPortMin || d > a.axisX.dataInfo.viewPortMax) &&
                                !y(r[h].y) && r[h].y.length && "number" === typeof r[h].y[0] && "number" === typeof r[h].y[1] && "number" === typeof r[h].y[2] && "number" === typeof r[h].y[3] && "number" === typeof r[h].y[4] && 5 === r[h].y.length) {
                                m = a.axisX.convertValueToPixel(d);
                                n = a.axisY.convertValueToPixel(r[h].y[0]);
                                l = a.axisY.convertValueToPixel(r[h].y[1]);
                                p = a.axisY.convertValueToPixel(r[h].y[2]);
                                v = a.axisY.convertValueToPixel(r[h].y[3]);
                                k = a.axisY.convertValueToPixel(r[h].y[4]);
                                var z = m - s / 2 << 0,
                                    A = m + s / 2 << 0,
                                    e = r[h].color ? r[h].color : u._colorSet[0],
                                    C = Math.round(Math.max(1,
                                        0.15 * s)),
                                    Y = 0 === C % 2 ? 0 : 0.5,
                                    S = r[h].whiskerColor ? r[h].whiskerColor : r[h].color ? u.whiskerColor ? u.whiskerColor : r[h].color : u.whiskerColor ? u.whiskerColor : e,
                                    L = "number" === typeof r[h].whiskerThickness ? r[h].whiskerThickness : "number" === typeof u.options.whiskerThickness ? u.whiskerThickness : C,
                                    ha = r[h].whiskerDashType ? r[h].whiskerDashType : u.whiskerDashType,
                                    $ = r[h].whiskerLength ? r[h].whiskerLength : u.options.whiskerLength ? u.options.whiskerLength : s,
                                    $ = "number" === typeof $ ? 0 >= $ ? 0 : $ >= s ? s : $ : "string" === typeof $ ? parseInt($) * s /
                                    100 : s,
                                    M = 1 === Math.round(L) % 2 ? 0.5 : 0,
                                    F = r[h].stemColor ? r[h].stemColor : r[h].color ? u.stemColor ? u.stemColor : r[h].color : u.stemColor ? u.stemColor : e,
                                    la = "number" === typeof r[h].stemThickness ? r[h].stemThickness : "number" === typeof u.options.stemThickness ? u.stemThickness : C,
                                    ra = 1 === Math.round(la) % 2 ? 0.5 : 0,
                                    db = r[h].stemDashType ? r[h].stemDashType : u.stemDashType,
                                    Q = r[h].lineColor ? r[h].lineColor : r[h].color ? u.lineColor ? u.lineColor : r[h].color : u.lineColor ? u.lineColor : e,
                                    N = "number" === typeof r[h].lineThickness ? r[h].lineThickness :
                                    "number" === typeof u.options.lineThickness ? u.lineThickness : C,
                                    U = r[h].lineDashType ? r[h].lineDashType : u.lineDashType,
                                    J = 1 === Math.round(N) % 2 ? 0.5 : 0,
                                    O = u.upperBoxColor,
                                    sa = u.lowerBoxColor,
                                    K = u.dataPointIds[h];
                                this._eventManager.objectMap[K] = {
                                    id: K,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: t,
                                    dataPointIndex: h,
                                    x1: z,
                                    y1: n,
                                    x2: A,
                                    y2: l,
                                    x3: m,
                                    y3: p,
                                    x4: m,
                                    y4: v,
                                    y5: k,
                                    borderThickness: C,
                                    color: e,
                                    stemThickness: la,
                                    stemColor: F,
                                    whiskerThickness: L,
                                    whiskerLength: $,
                                    whiskerColor: S,
                                    lineThickness: N,
                                    lineColor: Q
                                };
                                b.save();
                                0 < la && (b.beginPath(),
                                    b.strokeStyle = F, b.lineWidth = la, b.setLineDash && b.setLineDash(G(db, la)), b.moveTo(m - ra, l), b.lineTo(m - ra, n), b.stroke(), b.moveTo(m - ra, v), b.lineTo(m - ra, p), b.stroke());
                                b.restore();
                                c.lineWidth = Math.max(C, 4);
                                b.beginPath();
                                R(b, z, Math.min(k, l), A, Math.max(l, k), sa, 0, e, q ? x : !1, q ? !1 : x, !1, !1);
                                b.beginPath();
                                R(b, z, Math.min(p, k), A, Math.max(k, p), O, 0, e, q ? !1 : x, q ? x : !1, !1, !1);
                                b.beginPath();
                                b.lineWidth = C;
                                b.strokeStyle = e;
                                b.rect(z - Y, Math.min(l, p) - Y, A - z + 2 * Y, Math.max(l, p) - Math.min(l, p) + 2 * Y);
                                b.stroke();
                                b.save();
                                0 < N && (b.beginPath(),
                                    b.globalAlpha = 1, b.setLineDash && b.setLineDash(G(U, N)), b.strokeStyle = Q, b.lineWidth = N, b.moveTo(z, k - J), b.lineTo(A, k - J), b.stroke());
                                b.restore();
                                b.save();
                                0 < L && (b.beginPath(), b.setLineDash && b.setLineDash(G(ha, L)), b.strokeStyle = S, b.lineWidth = L, b.moveTo(m - $ / 2 << 0, v - M), b.lineTo(m + $ / 2 << 0, v - M), b.stroke(), b.moveTo(m - $ / 2 << 0, n + M), b.lineTo(m + $ / 2 << 0, n + M), b.stroke());
                                b.restore();
                                w && (e = H(K), c.strokeStyle = e, c.lineWidth = la, 0 < la && (c.moveTo(m - Y - ra, l), c.lineTo(m - Y - ra, Math.max(n, v)), c.stroke(), c.moveTo(m - Y - ra, Math.min(n, v)),
                                    c.lineTo(m - Y - ra, p), c.stroke()), R(c, z, Math.max(l, p), A, Math.min(l, p), e, 0, null, !1, !1, !1, !1), 0 < L && (c.beginPath(), c.lineWidth = L, c.moveTo(m + $ / 2, v - M), c.lineTo(m - $ / 2, v - M), c.stroke(), c.moveTo(m + $ / 2, n + M), c.lineTo(m - $ / 2, n + M), c.stroke()));
                                (r[h].indexLabel || u.indexLabel || r[h].indexLabelFormatter || u.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: u.type,
                                    dataPoint: r[h],
                                    dataSeries: u,
                                    point: {
                                        x: z + (A - z) / 2,
                                        y: a.axisY.reversed ? n : v
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: z,
                                        y1: Math.min(n, v),
                                        x2: A,
                                        y2: Math.max(n, v)
                                    },
                                    color: e
                                })
                            }
                }
                w && (f.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), c.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderRangeColumn = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, m, n, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                var l = a.axisX.dataInfo.minDiff;
                isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
                l = this.dataPointWidth ? this.dataPointWidth :
                    0.9 * (e.width * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                l < g && (l = g);
                l > h && (l = h);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(),
                    this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var v = a.dataSeriesIndexes[p],
                        k = this.data[v],
                        d = k.dataPoints;
                    if (0 < d.length)
                        for (var s = 5 < l && k.bevelEnabled ? !0 : !1, g = 0; g < d.length; g++)
                            if (d[g].getTime ? n = d[g].x.getTime() : n = d[g].x, !(n < a.axisX.dataInfo.viewPortMin || n > a.axisX.dataInfo.viewPortMax) && !y(d[g].y) && d[g].y.length && "number" === typeof d[g].y[0] && "number" === typeof d[g].y[1]) {
                                c = a.axisX.convertValueToPixel(n);
                                h =
                                    a.axisY.convertValueToPixel(d[g].y[0]);
                                m = a.axisY.convertValueToPixel(d[g].y[1]);
                                var q = a.axisX.reversed ? c + a.plotType.totalDataSeries * l / 2 - (a.previousDataSeriesCount + p) * l << 0 : c - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + p) * l << 0,
                                    B = a.axisX.reversed ? q - l << 0 : q + l << 0,
                                    c = d[g].color ? d[g].color : k._colorSet[g % k._colorSet.length];
                                if (h > m) {
                                    var t = h;
                                    h = m;
                                    m = t
                                }
                                t = k.dataPointIds[g];
                                this._eventManager.objectMap[t] = {
                                    id: t,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: v,
                                    dataPointIndex: g,
                                    x1: q,
                                    y1: h,
                                    x2: B,
                                    y2: m
                                };
                                R(b, q, h, B,
                                    m, c, 0, c, s, s, !1, !1, k.fillOpacity);
                                c = H(t);
                                w && R(this._eventManager.ghostCtx, q, h, B, m, c, 0, null, !1, !1, !1, !1);
                                if (d[g].indexLabel || k.indexLabel || d[g].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: d[g],
                                    dataSeries: k,
                                    indexKeyword: 0,
                                    point: {
                                        x: q + (B - q) / 2,
                                        y: d[g].y[1] >= d[g].y[0] ? m : h
                                    },
                                    direction: d[g].y[1] >= d[g].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: q,
                                        y1: Math.min(h, m),
                                        x2: B,
                                        y2: Math.max(h, m)
                                    },
                                    color: c
                                }), this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: d[g],
                                    dataSeries: k,
                                    indexKeyword: 1,
                                    point: {
                                        x: q + (B - q) / 2,
                                        y: d[g].y[1] >= d[g].y[0] ? h : m
                                    },
                                    direction: d[g].y[1] >= d[g].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: q,
                                        y1: Math.min(h, m),
                                        x2: B,
                                        y2: Math.max(h, m)
                                    },
                                    color: c
                                })
                            }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderError = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f,
                c = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    g = this.plotArea,
                    h = 0,
                    m, n, l, p, v, k,
                    d, s = a.axisX.dataInfo.minDiff;
                isFinite(s) || (s = 0.3 * Math.abs(a.axisX.range));
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
                for (var q = 0, B = 0; B < this.data.length; B++) this.data[B].type.match(/(bar|column)/ig) && this.data[B].visible && !this.data[B].type.match(/(stacked|range)/ig) && q++;
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var u =
                        a.dataSeriesIndexes[t],
                        r = this.data[u],
                        x = r.dataPoints,
                        C = y(r._linkedSeries) ? !1 : r._linkedSeries.type.match(/(bar|column)/ig) && r._linkedSeries.visible ? !0 : !1,
                        A = 0;
                    if (C)
                        for (e = r._linkedSeries.id, B = 0; B < e; B++) this.data[B].type.match(/(bar|column)/ig) && this.data[B].visible && !this.data[B].type.match(/(stacked|range)/ig) && A++;
                    e = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                    h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : c ? Math.min(0.15 *
                        this.height, 0.9 * (this.plotArea.height / (C ? q : 1))) << 0 : 0.3 * this.width;
                    B = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((c ? g.height : g.width) * (a.axisX.logarithmic ? Math.log(s) / Math.log(a.axisX.range) : Math.abs(s) / Math.abs(a.axisX.range)) / (C ? q : 1)) << 0;
                    this.dataPointMaxWidth && e > h && (e = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, h));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    B < e && (B = e);
                    B > h && (B = h);
                    if (0 < x.length)
                        for (var G =
                                r._colorSet, h = 0; h < x.length; h++) {
                            var e = r.lineColor = r.options.color ? r.options.color : G[0],
                                Y = {
                                    color: x[h].whiskerColor ? x[h].whiskerColor : x[h].color ? r.whiskerColor ? r.whiskerColor : x[h].color : r.whiskerColor ? r.whiskerColor : e,
                                    thickness: x[h].whiskerThickness ? x[h].whiskerThickness : r.whiskerThickness,
                                    dashType: x[h].whiskerDashType ? x[h].whiskerDashType : r.whiskerDashType,
                                    length: x[h].whiskerLength ? x[h].whiskerLength : r.options.whiskerLength ? r.options.whiskerLength : B,
                                    trimLength: x[h].whiskerLength ? 0 : r.options.whiskerLength ?
                                        0 : 50
                                };
                            Y.length = "number" === typeof Y.length ? 0 >= Y.length ? 0 : Y.length >= B ? B : Y.length : parseInt(Y.length) * B / 100;
                            Y.thickness = "number" === typeof Y.thickness ? 0 > Y.thickness ? 0 : Math.round(Y.thickness) : 2;
                            var S = {
                                color: x[h].stemColor ? x[h].stemColor : x[h].color ? r.stemColor ? r.stemColor : x[h].color : r.stemColor ? r.stemColor : e,
                                thickness: x[h].stemThickness ? x[h].stemThickness : r.stemThickness,
                                dashType: x[h].stemDashType ? x[h].stemDashType : r.stemDashType
                            };
                            S.thickness = "number" === typeof S.thickness ? 0 > S.thickness ? 0 : Math.round(S.thickness) :
                                2;
                            x[h].getTime ? d = x[h].x.getTime() : d = x[h].x;
                            if (!(d < a.axisX.dataInfo.viewPortMin || d > a.axisX.dataInfo.viewPortMax) && !y(x[h].y) && x[h].y.length && "number" === typeof x[h].y[0] && "number" === typeof x[h].y[1]) {
                                var L = a.axisX.convertValueToPixel(d);
                                c ? n = L : m = L;
                                L = a.axisY.convertValueToPixel(x[h].y[0]);
                                c ? l = L : v = L;
                                L = a.axisY.convertValueToPixel(x[h].y[1]);
                                c ? p = L : k = L;
                                c ? (v = a.axisX.reversed ? n + (C ? q : 1) * B / 2 - (C ? A - 1 : 0) * B << 0 : n - (C ? q : 1) * B / 2 + (C ? A - 1 : 0) * B << 0, k = a.axisX.reversed ? v - B << 0 : v + B << 0) : (l = a.axisX.reversed ? m + (C ? q : 1) * B / 2 - (C ? A - 1 :
                                    0) * B << 0 : m - (C ? q : 1) * B / 2 + (C ? A - 1 : 0) * B << 0, p = a.axisX.reversed ? l - B << 0 : l + B << 0);
                                !c && v > k && (L = v, v = k, k = L);
                                c && l > p && (L = l, l = p, p = L);
                                L = r.dataPointIds[h];
                                this._eventManager.objectMap[L] = {
                                    id: L,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: u,
                                    dataPointIndex: h,
                                    x1: Math.min(l, p),
                                    y1: Math.min(v, k),
                                    x2: Math.max(p, l),
                                    y2: Math.max(k, v),
                                    isXYSwapped: c,
                                    stemProperties: S,
                                    whiskerProperties: Y
                                };
                                z(b, Math.min(l, p), Math.min(v, k), Math.max(p, l), Math.max(k, v), e, Y, S, c);
                                w && z(this._eventManager.ghostCtx, l, v, p, k, e, Y, S, c);
                                if (x[h].indexLabel || r.indexLabel ||
                                    x[h].indexLabelFormatter || r.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: x[h],
                                    dataSeries: r,
                                    indexKeyword: 0,
                                    point: {
                                        x: c ? x[h].y[1] >= x[h].y[0] ? l : p : l + (p - l) / 2,
                                        y: c ? v + (k - v) / 2 : x[h].y[1] >= x[h].y[0] ? k : v
                                    },
                                    direction: x[h].y[1] >= x[h].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: c ? Math.min(l, p) : l,
                                        y1: c ? v : Math.min(v, k),
                                        x2: c ? Math.max(l, p) : p,
                                        y2: c ? k : Math.max(v, k)
                                    },
                                    color: e,
                                    axisSwapped: c
                                }), this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: x[h],
                                    dataSeries: r,
                                    indexKeyword: 1,
                                    point: {
                                        x: c ? x[h].y[1] >= x[h].y[0] ? p : l : l + (p - l) /
                                            2,
                                        y: c ? v + (k - v) / 2 : x[h].y[1] >= x[h].y[0] ? v : k
                                    },
                                    direction: x[h].y[1] >= x[h].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: c ? Math.min(l, p) : l,
                                        y1: c ? v : Math.min(v, k),
                                        x2: c ? Math.max(l, p) : p,
                                        y2: c ? k : Math.max(v, k)
                                    },
                                    color: e,
                                    axisSwapped: c
                                })
                            }
                        }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderRangeBar = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = null,
                    e = this.plotArea,
                    g = 0,
                    h, m, n, l, g = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth :
                    1;
                h = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && g > h && (g = Math.min(this.dataPointWidth ? this.dataPointWidth :
                    Infinity, h));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && h < g) && (h = Math.max(this.dataPointWidth ? this.dataPointWidth : -Infinity, g));
                p < g && (p = g);
                p > h && (p = h);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(e.x1, e.y1, e.width, e.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var v = 0; v < a.dataSeriesIndexes.length; v++) {
                    var k = a.dataSeriesIndexes[v],
                        d = this.data[k],
                        s = d.dataPoints;
                    if (0 < s.length) {
                        var q = 5 < p && d.bevelEnabled ? !0 : !1;
                        b.strokeStyle = "#4572A7 ";
                        for (g = 0; g < s.length; g++)
                            if (s[g].getTime ? l = s[g].x.getTime() : l = s[g].x, !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && !y(s[g].y) && s[g].y.length && "number" === typeof s[g].y[0] && "number" === typeof s[g].y[1]) {
                                h = a.axisY.convertValueToPixel(s[g].y[0]);
                                m = a.axisY.convertValueToPixel(s[g].y[1]);
                                n = a.axisX.convertValueToPixel(l);
                                n = a.axisX.reversed ? n + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + v) * p << 0 : n - a.plotType.totalDataSeries *
                                    p / 2 + (a.previousDataSeriesCount + v) * p << 0;
                                var r = a.axisX.reversed ? n - p << 0 : n + p << 0;
                                h > m && (c = h, h = m, m = c);
                                c = s[g].color ? s[g].color : d._colorSet[g % d._colorSet.length];
                                R(b, h, n, m, r, c, 0, null, q, !1, !1, !1, d.fillOpacity);
                                c = d.dataPointIds[g];
                                this._eventManager.objectMap[c] = {
                                    id: c,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: g,
                                    x1: h,
                                    y1: n,
                                    x2: m,
                                    y2: r
                                };
                                c = H(c);
                                w && R(this._eventManager.ghostCtx, h, n, m, r, c, 0, null, !1, !1, !1, !1);
                                if (s[g].indexLabel || d.indexLabel || s[g].indexLabelFormatter || d.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: s[g],
                                    dataSeries: d,
                                    indexKeyword: 0,
                                    point: {
                                        x: s[g].y[1] >= s[g].y[0] ? h : m,
                                        y: n + (r - n) / 2
                                    },
                                    direction: s[g].y[1] >= s[g].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: Math.min(h, m),
                                        y1: n,
                                        x2: Math.max(h, m),
                                        y2: r
                                    },
                                    color: c
                                }), this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: s[g],
                                    dataSeries: d,
                                    indexKeyword: 1,
                                    point: {
                                        x: s[g].y[1] >= s[g].y[0] ? m : h,
                                        y: n + (r - n) / 2
                                    },
                                    direction: s[g].y[1] >= s[g].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(h, m),
                                        y1: n,
                                        x2: Math.max(h, m),
                                        y2: r
                                    },
                                    color: c
                                })
                            }
                    }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderRangeArea =
            function(a) {
                function f() {
                    if (u) {
                        var a = null;
                        0 < p.lineThickness && c.stroke();
                        for (var b = n.length - 1; 0 <= b; b--) a = n[b], c.lineTo(a.x, a.y), e.lineTo(a.x, a.y);
                        c.closePath();
                        c.globalAlpha = p.fillOpacity;
                        c.fill();
                        c.globalAlpha = 1;
                        e.fill();
                        if (0 < p.lineThickness) {
                            c.beginPath();
                            c.moveTo(a.x, a.y);
                            for (b = 0; b < n.length; b++) a = n[b], c.lineTo(a.x, a.y);
                            c.stroke()
                        }
                        c.beginPath();
                        c.moveTo(s, q);
                        e.beginPath();
                        e.moveTo(s, q);
                        u = {
                            x: s,
                            y: q
                        };
                        n = [];
                        n.push({
                            x: s,
                            y: r
                        })
                    }
                }
                var b = a.targetCanvasCtx || this.plotArea.ctx,
                    c = w ? this._preRenderCtx : b;
                if (!(0 >=
                        a.dataSeriesIndexes.length)) {
                    var e = this._eventManager.ghostCtx,
                        g = [],
                        h = this.plotArea;
                    c.save();
                    w && e.save();
                    c.beginPath();
                    c.rect(h.x1, h.y1, h.width, h.height);
                    c.clip();
                    w && (e.beginPath(), e.rect(h.x1, h.y1, h.width, h.height), e.clip());
                    for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                        var n = [],
                            l = a.dataSeriesIndexes[m],
                            p = this.data[l],
                            v = p.dataPoints,
                            g = p.id;
                        this._eventManager.objectMap[g] = {
                            objectType: "dataSeries",
                            dataSeriesIndex: l
                        };
                        g = H(g);
                        e.fillStyle = g;
                        var g = [],
                            k = !0,
                            d = 0,
                            s, q, r, t, u = null;
                        if (0 < v.length) {
                            var y = p._colorSet[d %
                                    p._colorSet.length],
                                x = p.lineColor = p.options.lineColor || y,
                                z = x;
                            c.fillStyle = y;
                            c.strokeStyle = x;
                            c.lineWidth = p.lineThickness;
                            var A = "solid";
                            if (c.setLineDash) {
                                var C = G(p.nullDataLineDashType, p.lineThickness),
                                    A = p.lineDashType,
                                    Y = G(A, p.lineThickness);
                                c.setLineDash(Y)
                            }
                            for (var S = !0; d < v.length; d++)
                                if (t = v[d].x.getTime ? v[d].x.getTime() : v[d].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !S)))
                                    if (null !== v[d].y && v[d].y.length && "number" === typeof v[d].y[0] && "number" === typeof v[d].y[1]) {
                                        s =
                                            a.axisX.convertValueToPixel(t);
                                        q = a.axisY.convertValueToPixel(v[d].y[0]);
                                        r = a.axisY.convertValueToPixel(v[d].y[1]);
                                        k || S ? (p.connectNullData && !k ? (c.setLineDash && (p.options.nullDataLineDashType || A === p.lineDashType && p.lineDashType !== p.nullDataLineDashType) && (n[n.length - 1].newLineDashArray = Y, A = p.nullDataLineDashType, c.setLineDash(C)), c.lineTo(s, q), w && e.lineTo(s, q), n.push({
                                            x: s,
                                            y: r
                                        })) : (c.beginPath(), c.moveTo(s, q), u = {
                                            x: s,
                                            y: q
                                        }, n = [], n.push({
                                            x: s,
                                            y: r
                                        }), w && (e.beginPath(), e.moveTo(s, q))), S = k = !1) : (c.lineTo(s, q), n.push({
                                            x: s,
                                            y: r
                                        }), w && e.lineTo(s, q), 0 == d % 250 && f());
                                        t = p.dataPointIds[d];
                                        this._eventManager.objectMap[t] = {
                                            id: t,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: l,
                                            dataPointIndex: d,
                                            x1: s,
                                            y1: q,
                                            y2: r
                                        };
                                        d < v.length - 1 && (z !== (v[d].lineColor || x) || A !== (v[d].lineDashType || p.lineDashType)) && (f(), z = v[d].lineColor || x, n[n.length - 1].newStrokeStyle = z, c.strokeStyle = z, c.setLineDash && (v[d].lineDashType ? (A = v[d].lineDashType, n[n.length - 1].newLineDashArray = G(A, p.lineThickness), c.setLineDash(n[n.length - 1].newLineDashArray)) : (A = p.lineDashType, n[n.length -
                                            1].newLineDashArray = Y, c.setLineDash(Y))));
                                        if (0 !== v[d].markerSize && (0 < v[d].markerSize || 0 < p.markerSize)) {
                                            var L = p.getMarkerProperties(d, s, r, c);
                                            g.push(L);
                                            var ha = H(t);
                                            w && g.push({
                                                x: s,
                                                y: r,
                                                ctx: e,
                                                type: L.type,
                                                size: L.size,
                                                color: ha,
                                                borderColor: ha,
                                                borderThickness: L.borderThickness
                                            });
                                            L = p.getMarkerProperties(d, s, q, c);
                                            g.push(L);
                                            ha = H(t);
                                            w && g.push({
                                                x: s,
                                                y: q,
                                                ctx: e,
                                                type: L.type,
                                                size: L.size,
                                                color: ha,
                                                borderColor: ha,
                                                borderThickness: L.borderThickness
                                            })
                                        }
                                        if (v[d].indexLabel || p.indexLabel || v[d].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: v[d],
                                            dataSeries: p,
                                            indexKeyword: 0,
                                            point: {
                                                x: s,
                                                y: q
                                            },
                                            direction: v[d].y[0] > v[d].y[1] === a.axisY.reversed ? -1 : 1,
                                            color: y
                                        }), this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: v[d],
                                            dataSeries: p,
                                            indexKeyword: 1,
                                            point: {
                                                x: s,
                                                y: r
                                            },
                                            direction: v[d].y[0] > v[d].y[1] === a.axisY.reversed ? 1 : -1,
                                            color: y
                                        })
                                    } else S || k || f(), S = !0;
                            f();
                            ga.drawMarkers(g)
                        }
                    }
                    w && (b.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width,
                        this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                    c.restore();
                    return {
                        source: b,
                        dest: this.plotArea.ctx,
                        animationCallback: I.xClipAnimation,
                        easingFunction: I.easing.linear,
                        animationBase: 0
                    }
                }
            };
        u.prototype.renderRangeSplineArea = function(a) {
            function f(a, b) {
                var d = x(q, 2);
                if (0 < d.length) {
                    if (0 <
                        l.lineThickness) {
                        c.strokeStyle = b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) {
                            if (d[f].newStrokeStyle || d[f].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (c.strokeStyle = d[f].newStrokeStyle), d[f].newLineDashArray && c.setLineDash(d[f].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        c.stroke()
                    }
                    c.beginPath();
                    c.moveTo(d[0].x, d[0].y);
                    w && (e.beginPath(), e.moveTo(d[0].x, d[0].y));
                    for (f = 0; f < d.length - 3; f += 3) c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), w && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    d = x(r, 2);
                    c.lineTo(r[r.length - 1].x, r[r.length - 1].y);
                    for (f = d.length - 1; 2 < f; f -= 3) c.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y), w && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    c.closePath();
                    c.globalAlpha = l.fillOpacity;
                    c.fill();
                    w && (e.closePath(), e.fill());
                    c.globalAlpha = 1;
                    if (0 < l.lineThickness) {
                        c.strokeStyle =
                            b;
                        c.setLineDash && c.setLineDash(a);
                        c.beginPath();
                        c.moveTo(d[0].x, d[0].y);
                        for (var g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (q[g].newStrokeStyle || q[g].newLineDashArray) c.stroke(), c.beginPath(), c.moveTo(d[f].x, d[f].y), q[g].newStrokeStyle && (c.strokeStyle = q[g].newStrokeStyle), q[g].newLineDashArray && c.setLineDash(q[g].newLineDashArray);
                            c.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        c.stroke()
                    }
                    c.beginPath()
                }
            }
            var b = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : b;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e =
                    this._eventManager.ghostCtx,
                    g = [],
                    h = this.plotArea;
                c.save();
                w && e.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                w && (e.beginPath(), e.rect(h.x1, h.y1, h.width, h.height), e.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        l = this.data[n],
                        p = l.dataPoints,
                        g = l.id;
                    this._eventManager.objectMap[g] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: n
                    };
                    g = H(g);
                    e.fillStyle = g;
                    var g = [],
                        v = 0,
                        k, d, s, q = [],
                        r = [];
                    if (0 < p.length) {
                        var t = l._colorSet[v % l._colorSet.length],
                            u = l.lineColor = l.options.lineColor ||
                            t,
                            y = u;
                        c.fillStyle = t;
                        c.lineWidth = l.lineThickness;
                        var z = "solid",
                            C;
                        if (c.setLineDash) {
                            var A = G(l.nullDataLineDashType, l.lineThickness),
                                z = l.lineDashType;
                            C = G(z, l.lineThickness)
                        }
                        for (d = !1; v < p.length; v++)
                            if (k = p[v].x.getTime ? p[v].x.getTime() : p[v].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !d)))
                                if (null !== p[v].y && p[v].y.length && "number" === typeof p[v].y[0] && "number" === typeof p[v].y[1]) {
                                    k = a.axisX.convertValueToPixel(k);
                                    d = a.axisY.convertValueToPixel(p[v].y[0]);
                                    s = a.axisY.convertValueToPixel(p[v].y[1]);
                                    var wa = l.dataPointIds[v];
                                    this._eventManager.objectMap[wa] = {
                                        id: wa,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: n,
                                        dataPointIndex: v,
                                        x1: k,
                                        y1: d,
                                        y2: s
                                    };
                                    q[q.length] = {
                                        x: k,
                                        y: d
                                    };
                                    r[r.length] = {
                                        x: k,
                                        y: s
                                    };
                                    v < p.length - 1 && (y !== (p[v].lineColor || u) || z !== (p[v].lineDashType || l.lineDashType)) && (y = p[v].lineColor || u, q[q.length - 1].newStrokeStyle = y, c.setLineDash && (p[v].lineDashType ? (z = p[v].lineDashType, q[q.length - 1].newLineDashArray = G(z, l.lineThickness)) : (z = l.lineDashType, q[q.length - 1].newLineDashArray = C)));
                                    if (0 !== p[v].markerSize &&
                                        (0 < p[v].markerSize || 0 < l.markerSize)) {
                                        var Y = l.getMarkerProperties(v, k, d, c);
                                        g.push(Y);
                                        var S = H(wa);
                                        w && g.push({
                                            x: k,
                                            y: d,
                                            ctx: e,
                                            type: Y.type,
                                            size: Y.size,
                                            color: S,
                                            borderColor: S,
                                            borderThickness: Y.borderThickness
                                        });
                                        Y = l.getMarkerProperties(v, k, s, c);
                                        g.push(Y);
                                        S = H(wa);
                                        w && g.push({
                                            x: k,
                                            y: s,
                                            ctx: e,
                                            type: Y.type,
                                            size: Y.size,
                                            color: S,
                                            borderColor: S,
                                            borderThickness: Y.borderThickness
                                        })
                                    }
                                    if (p[v].indexLabel || l.indexLabel || p[v].indexLabelFormatter || l.indexLabelFormatter) this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: p[v],
                                        dataSeries: l,
                                        indexKeyword: 0,
                                        point: {
                                            x: k,
                                            y: d
                                        },
                                        direction: p[v].y[0] <= p[v].y[1] ? -1 : 1,
                                        color: t
                                    }), this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: p[v],
                                        dataSeries: l,
                                        indexKeyword: 1,
                                        point: {
                                            x: k,
                                            y: s
                                        },
                                        direction: p[v].y[0] <= p[v].y[1] ? 1 : -1,
                                        color: t
                                    });
                                    d = !1
                                } else 0 < v && !d && (l.connectNullData ? c.setLineDash && (0 < q.length && (l.options.nullDataLineDashType || !p[v - 1].lineDashType)) && (q[q.length - 1].newLineDashArray = A, z = l.nullDataLineDashType) : (f(C, u), q = [], r = [])), d = !0;
                        f(C, u);
                        ga.drawMarkers(g)
                    }
                }
                w && (b.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: b,
                    dest: this.plotArea.ctx,
                    animationCallback: I.xClipAnimation,
                    easingFunction: I.easing.linear,
                    animationBase: 0
                }
            }
        };
        u.prototype.renderWaterfall = function(a) {
            var f = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : f;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var c = this._eventManager.ghostCtx,
                    e = null,
                    g = this.plotArea,
                    h = 0,
                    m, n, l, p, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.dataPointMinWidth ? this.dataPointMinWidth : this.dataPointWidth ? this.dataPointWidth : 1;
                n = this.dataPointMaxWidth ? this.dataPointMaxWidth : this.dataPointWidth ? this.dataPointWidth : Math.min(0.15 *
                    this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.dataPointWidth ? this.dataPointWidth : 0.6 * (g.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && h > n && (h = Math.min(this.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.dataPointWidth ?
                    this.dataPointWidth : -Infinity, h));
                k < h && (k = h);
                k > n && (k = n);
                b.save();
                w && this._eventManager.ghostCtx.save();
                b.beginPath();
                b.rect(g.x1, g.y1, g.width, g.height);
                b.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
                for (var d = 0; d < a.dataSeriesIndexes.length; d++) {
                    var s = a.dataSeriesIndexes[d],
                        q = this.data[s],
                        r = q.dataPoints,
                        e = q._colorSet[0];
                    q.risingColor = q.options.risingColor ? q.options.risingColor : e;
                    q.fallingColor = q.options.fallingColor ?
                        q.options.fallingColor : "#e40a0a";
                    var t = "number" === typeof q.options.lineThickness ? Math.round(q.lineThickness) : 1,
                        u = 1 === Math.round(t) % 2 ? -0.5 : 0;
                    if (0 < r.length)
                        for (var y = 5 < k && q.bevelEnabled ? !0 : !1, x = !1, z = null, A = null, h = 0; h < r.length; h++)
                            if (r[h].getTime ? p = r[h].x.getTime() : p = r[h].x, "number" !== typeof r[h].y) {
                                if (0 < h && !x && q.connectNullData) var C = q.options.nullDataLineDashType || !r[h - 1].lineDashType ? q.nullDataLineDashType : r[h - 1].lineDashType;
                                x = !0
                            } else {
                                m = a.axisX.convertValueToPixel(p);
                                n = 0 === q.dataPointEOs[h].cumulativeSum ?
                                    v : a.axisY.convertValueToPixel(q.dataPointEOs[h].cumulativeSum);
                                l = 0 === q.dataPointEOs[h].cumulativeSumYStartValue ? v : a.axisY.convertValueToPixel(q.dataPointEOs[h].cumulativeSumYStartValue);
                                m = a.axisX.reversed ? m + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + d) * k << 0 : m - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + d) * k << 0;
                                var Y = a.axisX.reversed ? m - k << 0 : m + k << 0;
                                n > l && (e = n, n = l, l = e);
                                a.axisY.reversed && (e = n, n = l, l = e);
                                e = q.dataPointIds[h];
                                this._eventManager.objectMap[e] = {
                                    id: e,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: s,
                                    dataPointIndex: h,
                                    x1: m,
                                    y1: n,
                                    x2: Y,
                                    y2: l
                                };
                                var S = r[h].color ? r[h].color : -1 < r[h].y ? q.risingColor : q.fallingColor;
                                R(b, m, n, Y, l, S, 0, S, y, y, !1, !1, q.fillOpacity);
                                e = H(e);
                                w && R(this._eventManager.ghostCtx, m, n, Y, l, e, 0, null, !1, !1, !1, !1);
                                var L, S = m;
                                L = "undefined" !== typeof r[h].isIntermediateSum && !0 === r[h].isIntermediateSum || "undefined" !== typeof r[h].isCumulativeSum && !0 === r[h].isCumulativeSum ? -1 < r[h].y ? n : l : -1 < r[h].y ? l : n;
                                0 < h && z && (!x || q.connectNullData) && (x && b.setLineDash && b.setLineDash(G(C, t)), b.beginPath(),
                                    b.moveTo(z, A - u), b.lineTo(S, L - u), 0 < t && b.stroke(), w && (c.beginPath(), c.moveTo(z, A - u), c.lineTo(S, L - u), 0 < t && c.stroke()));
                                x = !1;
                                z = Y;
                                A = -1 < r[h].y ? n : l;
                                S = r[h].lineDashType ? r[h].lineDashType : q.options.lineDashType ? q.options.lineDashType : "shortDash";
                                b.strokeStyle = r[h].lineColor ? r[h].lineColor : q.options.lineColor ? q.options.lineColor : "#9e9e9e";
                                b.lineWidth = t;
                                b.setLineDash && (S = G(S, t), b.setLineDash(S));
                                (r[h].indexLabel || q.indexLabel || r[h].indexLabelFormatter || q.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "waterfall",
                                    dataPoint: r[h],
                                    dataSeries: q,
                                    point: {
                                        x: m + (Y - m) / 2,
                                        y: 0 <= r[h].y ? n : l
                                    },
                                    direction: 0 > r[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: m,
                                        y1: Math.min(n, l),
                                        x2: Y,
                                        y2: Math.max(n, l)
                                    },
                                    color: e
                                })
                            }
                }
                w && (f.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: f,
                    dest: this.plotArea.ctx,
                    animationCallback: I.fadeInAnimation,
                    easingFunction: I.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        var pa = function(a, f, b, c, e, g, h, m, n) {
            if (!(0 > b)) {
                "undefined" === typeof m && (m = 1);
                if (!w) {
                    var l = Number((h % (2 * Math.PI)).toFixed(8));
                    Number((g % (2 * Math.PI)).toFixed(8)) === l && (h -= 1E-4)
                }
                a.save();
                a.globalAlpha = m;
                "pie" === e ? (a.beginPath(), a.moveTo(f.x, f.y), a.arc(f.x, f.y,
                    b, g, h, !1), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(f.x, f.y, b, g, h, !1), 0 <= n && a.arc(f.x, f.y, n * b, h, g, !0), a.closePath(), a.fillStyle = c, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        u.prototype.renderPie = function(a) {
            function f() {
                if (l && p) {
                    for (var a = 0, b = 0, c = 0, e = 0, f = 0; f < p.length; f++) {
                        var g = p[f],
                            h = l.dataPointIds[f];
                        d[f].id = h;
                        d[f].objectType = "dataPoint";
                        d[f].dataPointIndex = f;
                        d[f].dataSeriesIndex = 0;
                        var m = d[f],
                            s = {
                                percent: null,
                                total: null
                            },
                            v = null,
                            s = n.getPercentAndTotal(l, g);
                        if (l.indexLabelFormatter || g.indexLabelFormatter) v = {
                            chart: n.options,
                            dataSeries: l,
                            dataPoint: g,
                            total: s.total,
                            percent: s.percent
                        };
                        s = g.indexLabelFormatter ? g.indexLabelFormatter(v) : g.indexLabel ? n.replaceKeywordsWithValue(g.indexLabel, g, l, f) : l.indexLabelFormatter ? l.indexLabelFormatter(v) : l.indexLabel ? n.replaceKeywordsWithValue(l.indexLabel, g, l, f) : g.label ? g.label : "";
                        n._eventManager.objectMap[h] = m;
                        m.center = {
                            x: w.x,
                            y: w.y
                        };
                        m.y = g.y;
                        m.radius = A;
                        m.percentInnerRadius =
                            Y;
                        m.indexLabelText = s;
                        m.indexLabelPlacement = l.indexLabelPlacement;
                        m.indexLabelLineColor = g.indexLabelLineColor ? g.indexLabelLineColor : l.options.indexLabelLineColor ? l.options.indexLabelLineColor : g.color ? g.color : l._colorSet[f % l._colorSet.length];
                        m.indexLabelLineThickness = y(g.indexLabelLineThickness) ? l.indexLabelLineThickness : g.indexLabelLineThickness;
                        m.indexLabelLineDashType = g.indexLabelLineDashType ? g.indexLabelLineDashType : l.indexLabelLineDashType;
                        m.indexLabelFontColor = g.indexLabelFontColor ? g.indexLabelFontColor :
                            l.indexLabelFontColor;
                        m.indexLabelFontStyle = g.indexLabelFontStyle ? g.indexLabelFontStyle : l.indexLabelFontStyle;
                        m.indexLabelFontWeight = g.indexLabelFontWeight ? g.indexLabelFontWeight : l.indexLabelFontWeight;
                        m.indexLabelFontSize = y(g.indexLabelFontSize) ? l.indexLabelFontSize : g.indexLabelFontSize;
                        m.indexLabelFontFamily = g.indexLabelFontFamily ? g.indexLabelFontFamily : l.indexLabelFontFamily;
                        m.indexLabelBackgroundColor = g.indexLabelBackgroundColor ? g.indexLabelBackgroundColor : l.options.indexLabelBackgroundColor ?
                            l.options.indexLabelBackgroundColor : l.indexLabelBackgroundColor;
                        m.indexLabelMaxWidth = g.indexLabelMaxWidth ? g.indexLabelMaxWidth : l.indexLabelMaxWidth ? l.indexLabelMaxWidth : 0.33 * k.width;
                        m.indexLabelWrap = "undefined" !== typeof g.indexLabelWrap ? g.indexLabelWrap : l.indexLabelWrap;
                        m.startAngle = 0 === f ? l.startAngle ? l.startAngle / 180 * Math.PI : 0 : d[f - 1].endAngle;
                        m.startAngle = (m.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        m.endAngle = m.startAngle + 2 * Math.PI / x * Math.abs(g.y);
                        g = (m.endAngle + m.startAngle) / 2;
                        g = (g + 2 * Math.PI) % (2 * Math.PI);
                        m.midAngle = g;
                        if (m.midAngle > Math.PI / 2 - t && m.midAngle < Math.PI / 2 + t) {
                            if (0 === a || d[c].midAngle > m.midAngle) c = f;
                            a++
                        } else if (m.midAngle > 3 * Math.PI / 2 - t && m.midAngle < 3 * Math.PI / 2 + t) {
                            if (0 === b || d[e].midAngle > m.midAngle) e = f;
                            b++
                        }
                        m.hemisphere = g > Math.PI / 2 && g <= 3 * Math.PI / 2 ? "left" : "right";
                        m.indexLabelTextBlock = new ka(n.plotArea.ctx, {
                            fontSize: m.indexLabelFontSize,
                            fontFamily: m.indexLabelFontFamily,
                            fontColor: m.indexLabelFontColor,
                            fontStyle: m.indexLabelFontStyle,
                            fontWeight: m.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: m.indexLabelBackgroundColor,
                            maxWidth: m.indexLabelMaxWidth,
                            maxHeight: m.indexLabelWrap ? 5 * m.indexLabelFontSize : 1.5 * m.indexLabelFontSize,
                            text: m.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        m.indexLabelTextBlock.measureText()
                    }
                    h = g = 0;
                    s = !1;
                    for (f = 0; f < p.length; f++) m = d[(c + f) % p.length], 1 < a && (m.midAngle > Math.PI / 2 - t && m.midAngle < Math.PI / 2 + t) && (g <= a / 2 && !s ? (m.hemisphere = "right", g++) : (m.hemisphere = "left", s = !0));
                    s = !1;
                    for (f = 0; f < p.length; f++) m = d[(e + f) % p.length], 1 < b && (m.midAngle > 3 * Math.PI / 2 - t && m.midAngle < 3 * Math.PI / 2 + t) && (h <= b / 2 && !s ? (m.hemisphere =
                        "left", h++) : (m.hemisphere = "right", s = !0))
                }
            }

            function b(a) {
                var b = n.plotArea.ctx;
                b.clearRect(k.x1, k.y1, k.width, k.height);
                b.fillStyle = n.backgroundColor;
                b.fillRect(k.x1, k.y1, k.width, k.height);
                for (b = 0; b < p.length; b++) {
                    var c = d[b].startAngle,
                        e = d[b].endAngle;
                    if (e > c) {
                        var f = 0.07 * A * Math.cos(d[b].midAngle),
                            g = 0.07 * A * Math.sin(d[b].midAngle),
                            h = !1;
                        if (p[b].exploded) {
                            if (1E-9 < Math.abs(d[b].center.x - (w.x + f)) || 1E-9 < Math.abs(d[b].center.y - (w.y + g))) d[b].center.x = w.x + f * a, d[b].center.y = w.y + g * a, h = !0
                        } else if (0 < Math.abs(d[b].center.x -
                                w.x) || 0 < Math.abs(d[b].center.y - w.y)) d[b].center.x = w.x + f * (1 - a), d[b].center.y = w.y + g * (1 - a), h = !0;
                        h && (f = {}, f.dataSeries = l, f.dataPoint = l.dataPoints[b], f.index = b, n.toolTip.highlightObjects([f]));
                        pa(n.plotArea.ctx, d[b].center, d[b].radius, p[b].color ? p[b].color : l._colorSet[b % l._colorSet.length], l.type, c, e, l.fillOpacity, d[b].percentInnerRadius)
                    }
                }
                a = n.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (b = b = 0; b < p.length; b++) c = d[b], c.indexLabelText && (c.indexLabelTextBlock.y -=
                    c.indexLabelTextBlock.height / 2, e = 0, e = "left" === c.hemisphere ? "inside" !== l.indexLabelPlacement ? -(c.indexLabelTextBlock.width + v) : -c.indexLabelTextBlock.width / 2 : "inside" !== l.indexLabelPlacement ? v : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += e, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= e, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (e = c.center.x + A * Math.cos(c.midAngle), f = c.center.y + A * Math.sin(c.midAngle),
                        a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(G(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(e, f), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -v : v), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
                a.save()
            }

            function c(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height /
                    2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
            }

            function e(a) {
                for (var b = null, e = 1; e < p.length; e++)
                    if (b = (a + e + d.length) % d.length, d[b].hemisphere !== d[a].hemisphere) {
                        b = null;
                        break
                    } else if (d[b].indexLabelText && b !== a && (0 > c(d[b], d[a]) || ("right" === d[a].hemisphere ? d[b].indexLabelTextBlock.y >= d[a].indexLabelTextBlock.y : d[b].indexLabelTextBlock.y <= d[a].indexLabelTextBlock.y))) break;
                else b = null;
                return b
            }

            function g(a, b, f) {
                f = (f || 0) + 1;
                if (1E3 < f) return 0;
                b = b || 0;
                var h = 0,
                    k = w.y - 1 * q,
                    l = w.y + 1 * q;
                if (0 <= a && a < p.length) {
                    var n = d[a];
                    if (0 > b && n.indexLabelTextBlock.y < k || 0 < b && n.indexLabelTextBlock.y > l) return 0;
                    var m = 0,
                        v = 0,
                        v = m = m = 0;
                    0 > b ? n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 > k && n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 + b < k && (b = -(k - (n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 + b))) : n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 < k && n.indexLabelTextBlock.y +
                        n.indexLabelTextBlock.height / 2 + b > l && (b = n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2 + b - l);
                    b = n.indexLabelTextBlock.y + b;
                    k = 0;
                    k = "right" === n.hemisphere ? w.x + Math.sqrt(Math.pow(q, 2) - Math.pow(b - w.y, 2)) : w.x - Math.sqrt(Math.pow(q, 2) - Math.pow(b - w.y, 2));
                    v = w.x + A * Math.cos(n.midAngle);
                    m = w.y + A * Math.sin(n.midAngle);
                    m = Math.sqrt(Math.pow(k - v, 2) + Math.pow(b - m, 2));
                    v = Math.acos(A / q);
                    m = Math.acos((q * q + A * A - m * m) / (2 * A * q));
                    b = m < v ? b - n.indexLabelTextBlock.y : 0;
                    k = null;
                    for (l = 1; l < p.length; l++)
                        if (k = (a - l + d.length) % d.length, d[k].hemisphere !==
                            d[a].hemisphere) {
                            k = null;
                            break
                        } else if (d[k].indexLabelText && d[k].hemisphere === d[a].hemisphere && k !== a && (0 > c(d[k], d[a]) || ("right" === d[a].hemisphere ? d[k].indexLabelTextBlock.y <= d[a].indexLabelTextBlock.y : d[k].indexLabelTextBlock.y >= d[a].indexLabelTextBlock.y))) break;
                    else k = null;
                    v = k;
                    m = e(a);
                    l = k = 0;
                    0 > b ? (l = "right" === n.hemisphere ? v : m, h = b, null !== l && (v = -b, b = n.indexLabelTextBlock.y - n.indexLabelTextBlock.height / 2 - (d[l].indexLabelTextBlock.y + d[l].indexLabelTextBlock.height / 2), b - v < s && (k = -v, l = g(l, k, f + 1), +l.toFixed(u) >
                        +k.toFixed(u) && (h = b > s ? -(b - s) : -(v - (l - k)))))) : 0 < b && (l = "right" === n.hemisphere ? m : v, h = b, null !== l && (v = b, b = d[l].indexLabelTextBlock.y - d[l].indexLabelTextBlock.height / 2 - (n.indexLabelTextBlock.y + n.indexLabelTextBlock.height / 2), b - v < s && (k = v, l = g(l, k, f + 1), +l.toFixed(u) < +k.toFixed(u) && (h = b > s ? b - s : v - (k - l)))));
                    h && (f = n.indexLabelTextBlock.y + h, b = 0, b = "right" === n.hemisphere ? w.x + Math.sqrt(Math.pow(q, 2) - Math.pow(f - w.y, 2)) : w.x - Math.sqrt(Math.pow(q, 2) - Math.pow(f - w.y, 2)), n.midAngle > Math.PI / 2 - t && n.midAngle < Math.PI / 2 + t ? (k = (a -
                        1 + d.length) % d.length, k = d[k], a = d[(a + 1 + d.length) % d.length], "left" === n.hemisphere && "right" === k.hemisphere && b > k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x - 15 : "right" === n.hemisphere && ("left" === a.hemisphere && b < a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x + 15)) : n.midAngle > 3 * Math.PI / 2 - t && n.midAngle < 3 * Math.PI / 2 + t && (k = (a - 1 + d.length) % d.length, k = d[k], a = d[(a + 1 + d.length) % d.length], "right" === n.hemisphere && "left" === k.hemisphere && b < k.indexLabelTextBlock.x ? b = k.indexLabelTextBlock.x + 15 : "left" === n.hemisphere &&
                        ("right" === a.hemisphere && b > a.indexLabelTextBlock.x) && (b = a.indexLabelTextBlock.x - 15)), n.indexLabelTextBlock.y = f, n.indexLabelTextBlock.x = b, n.indexLabelAngle = Math.atan2(n.indexLabelTextBlock.y - w.y, n.indexLabelTextBlock.x - w.x))
                }
                return h
            }

            function h() {
                var a = n.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var b = a = 0, f = 0, h = !0, b = 0; 10 > b && (1 > b || 0 < f); b++) {
                    if (l.radius || !l.radius && "undefined" !== typeof l.innerRadius && null !== l.innerRadius && A - f <= C) h = !1;
                    h && (A -=
                        f);
                    f = 0;
                    if ("inside" !== l.indexLabelPlacement) {
                        q = A * r;
                        for (a = 0; a < p.length; a++) {
                            var m = d[a];
                            m.indexLabelTextBlock.x = w.x + q * Math.cos(m.midAngle);
                            m.indexLabelTextBlock.y = w.y + q * Math.sin(m.midAngle);
                            m.indexLabelAngle = m.midAngle;
                            m.radius = A;
                            m.percentInnerRadius = Y
                        }
                        for (var t, y, a = 0; a < p.length; a++) {
                            var m = d[a],
                                x = e(a);
                            if (null !== x) {
                                t = d[a];
                                y = d[x];
                                var z = 0,
                                    z = c(t, y) - s;
                                if (0 > z) {
                                    for (var G = y = 0, qa = 0; qa < p.length; qa++) qa !== a && d[qa].hemisphere === m.hemisphere && (d[qa].indexLabelTextBlock.y < m.indexLabelTextBlock.y ? y++ : G++);
                                    y = z / (y + G ||
                                        1) * G;
                                    var G = -1 * (z - y),
                                        I = qa = 0;
                                    "right" === m.hemisphere ? (qa = g(a, y), G = -1 * (z - qa), I = g(x, G), +I.toFixed(u) < +G.toFixed(u) && +qa.toFixed(u) <= +y.toFixed(u) && g(a, -(G - I))) : (qa = g(x, y), G = -1 * (z - qa), I = g(a, G), +I.toFixed(u) < +G.toFixed(u) && +qa.toFixed(u) <= +y.toFixed(u) && g(x, -(G - I)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < p.length; a++) m = d[a], q = "pie" === l.type ? 0.7 * A : 0.8 * A, x = w.x + q * Math.cos(m.midAngle), y = w.y + q * Math.sin(m.midAngle), m.indexLabelTextBlock.x = x, m.indexLabelTextBlock.y = y;
                    for (a = 0; a < p.length; a++)
                        if (m = d[a], x = m.indexLabelTextBlock.measureText(),
                            0 !== x.height && 0 !== x.width) x = x = 0, "right" === m.hemisphere ? (x = k.x2 - (m.indexLabelTextBlock.x + m.indexLabelTextBlock.width + v), x *= -1) : x = k.x1 - (m.indexLabelTextBlock.x - m.indexLabelTextBlock.width - v), 0 < x && (!h && m.indexLabelText && (y = "right" === m.hemisphere ? k.x2 - m.indexLabelTextBlock.x : m.indexLabelTextBlock.x - k.x1, 0.3 * m.indexLabelTextBlock.maxWidth > y ? m.indexLabelText = "" : m.indexLabelTextBlock.maxWidth = 0.85 * y, 0.3 * m.indexLabelTextBlock.maxWidth < y && (m.indexLabelTextBlock.x -= "right" === m.hemisphere ? 2 : -2)), Math.abs(m.indexLabelTextBlock.y -
                            m.indexLabelTextBlock.height / 2 - w.y) < A || Math.abs(m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 - w.y) < A) && (x /= Math.abs(Math.cos(m.indexLabelAngle)), 9 < x && (x *= 0.3), x > f && (f = x)), x = x = 0, 0 < m.indexLabelAngle && m.indexLabelAngle < Math.PI ? (x = k.y2 - (m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = k.y1 - (m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 - 5), 0 < x && (!h && m.indexLabelText && (y = 0 < m.indexLabelAngle && m.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a, x * y) && g(a, 2 * y)), Math.abs(m.indexLabelTextBlock.x -
                            w.x) < A && (x /= Math.abs(Math.sin(m.indexLabelAngle)), 9 < x && (x *= 0.3), x > f && (f = x)));
                    var J = function(a, b, c) {
                        for (var e = [], f = 0; e.push(d[b]), b !== c; b = (b + 1 + p.length) % p.length);
                        e.sort(function(a, b) {
                            return a.y - b.y
                        });
                        for (b = 0; b < e.length; b++)
                            if (c = e[b], f < 0.7 * a) f += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break
                    };
                    (function() {
                        for (var a = -1, b = -1, f = 0, g = !1, h = 0; h < p.length; h++)
                            if (g = !1, t = d[h], t.indexLabelText) {
                                var k = e(h);
                                if (null !== k) {
                                    var l = d[k];
                                    z = 0;
                                    z = c(t, l);
                                    var m;
                                    if (m = 0 > z) {
                                        m = t.indexLabelTextBlock.x;
                                        var n = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height / 2,
                                            s = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2,
                                            q = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2,
                                            r = l.indexLabelTextBlock.x + l.indexLabelTextBlock.width,
                                            u = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2;
                                        m = t.indexLabelTextBlock.x + t.indexLabelTextBlock.width < l.indexLabelTextBlock.x - v || m > r + v || n > u + v || s < q - v ? !1 : !0
                                    }
                                    m ? (0 > a && (a = h), k !== a && (b = k, f += -z), 0 === h % Math.max(p.length /
                                        10, 3) && (g = !0)) : g = !0;
                                    g && (0 < f && 0 <= a && 0 <= b) && (J(f, a, b), b = a = -1, f = 0)
                                }
                            }
                        0 < f && J(f, a, b)
                    })()
                }
            }

            function m() {
                n.plotArea.layoutManager.reset();
                n.title && (n.title.dockInsidePlotArea || "center" === n.title.horizontalAlign && "center" === n.title.verticalAlign) && n.title.render();
                if (n.subtitles)
                    for (var a = 0; a < n.subtitles.length; a++) {
                        var b = n.subtitles[a];
                        (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                n.legend && (n.legend.dockInsidePlotArea || "center" === n.legend.horizontalAlign && "center" ===
                    n.legend.verticalAlign) && n.legend.render();
                U.fBWm && U.fBWm(n)
            }
            var n = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l = this.data[a.dataSeriesIndexes[0]],
                    p = l.dataPoints,
                    v = 10,
                    k = this.plotArea,
                    d = l.dataPointEOs,
                    s = 2,
                    q, r = 1.3,
                    t = 20 / 180 * Math.PI,
                    u = 6,
                    w = {
                        x: (k.x2 + k.x1) / 2,
                        y: (k.y2 + k.y1) / 2
                    },
                    x = 0;
                a = !1;
                for (var z = 0; z < p.length; z++) x += Math.abs(p[z].y), !a && ("undefined" !== typeof p[z].indexLabel && null !== p[z].indexLabel && 0 < p[z].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof p[z].label && null !== p[z].label && 0 < p[z].label.toString().length) &&
                    (a = !0);
                if (0 !== x) {
                    a = a || "undefined" !== typeof l.indexLabel && null !== l.indexLabel && 0 < l.indexLabel.toString().length;
                    var A = "inside" !== l.indexLabelPlacement && a ? 0.75 * Math.min(k.width, k.height) / 2 : 0.92 * Math.min(k.width, k.height) / 2;
                    l.radius && (A = Q(l.radius, A));
                    var C = "undefined" !== typeof l.innerRadius && null !== l.innerRadius ? Q(l.innerRadius, A) : 0.7 * A;
                    l.radius = A;
                    "doughnut" === l.type && (l.innerRadius = C);
                    var Y = Math.min(C / A, (A - 1) / A);
                    this.pieDoughnutClickHandler = function(a) {
                        n.isAnimating || !y(a.dataSeries.explodeOnClick) &&
                            !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && n._animator.animate(0, 500, function(a) {
                                b(a);
                                m()
                            }))
                    };
                    f();
                    h();
                    h();
                    h();
                    h();
                    this.disableToolTip = !0;
                    this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                        var b = n.plotArea.ctx;
                        b.clearRect(k.x1, k.y1, k.width, k.height);
                        b.fillStyle = n.backgroundColor;
                        b.fillRect(k.x1, k.y1, k.width, k.height);
                        a = d[0].startAngle + 2 * Math.PI * a;
                        for (b = 0; b < p.length; b++) {
                            var c = 0 === b ? d[b].startAngle : e,
                                e = c + (d[b].endAngle -
                                    d[b].startAngle),
                                f = !1;
                            e > a && (e = a, f = !0);
                            var g = p[b].color ? p[b].color : l._colorSet[b % l._colorSet.length];
                            e > c && pa(n.plotArea.ctx, d[b].center, d[b].radius, g, l.type, c, e, l.fillOpacity, d[b].percentInnerRadius);
                            if (f) break
                        }
                        m()
                    }, function() {
                        n.disableToolTip = !1;
                        n._animator.animate(0, n.animatedRender ? 500 : 0, function(a) {
                            b(a);
                            m()
                        })
                    })
                }
            }
        };
        var xa = function(a, f, b, c) {
            "undefined" === typeof b && (b = 1);
            0 >= Math.round(f.y4 - f.y1) || (a.save(), a.globalAlpha = b, a.beginPath(), a.moveTo(Math.round(f.x1), Math.round(f.y1)), a.lineTo(Math.round(f.x2),
                Math.round(f.y2)), a.lineTo(Math.round(f.x3), Math.round(f.y3)), a.lineTo(Math.round(f.x4), Math.round(f.y4)), "undefined" !== f.x5 && (a.lineTo(Math.round(f.x5), Math.round(f.y5)), a.lineTo(Math.round(f.x6), Math.round(f.y6))), a.closePath(), a.fillStyle = c ? c : f.color, a.fill(), a.globalAplha = 1, a.restore())
        };
        u.prototype.renderFunnel = function(a) {
            function f() {
                for (var a = 0, b = [], c = 0; c < u.length; c++) {
                    if ("undefined" === typeof u[c].y) return -1;
                    u[c].y = "number" === typeof u[c].y ? u[c].y : 0;
                    a += Math.abs(u[c].y)
                }
                if (0 === a) return -1;
                for (c =
                    b[0] = 0; c < u.length; c++) b.push(Math.abs(u[c].y) * N / a);
                return b
            }

            function b() {
                var a = W,
                    b = V,
                    c = T,
                    d = J,
                    e, f;
                e = S;
                f = L - M;
                headArea = (f - e) * (b - a + (d - c)) / 2;
                headArea = Math.abs(headArea);
                c = J - T;
                e = f - e;
                f = c * (f - L);
                f = Math.abs(f);
                f = headArea + f;
                for (var d = [], g = 0, h = 0; h < u.length; h++) {
                    if ("undefined" === typeof u[h].y) return -1;
                    u[h].y = "number" === typeof u[h].y ? u[h].y : 0;
                    g += Math.abs(u[h].y)
                }
                if (0 === g) return -1;
                for (var k = d[0] = 0, l = 0, m, b = b - a, n = !1, h = 0; h < u.length; h++) a = Math.abs(u[h].y) * f / g, n ? k = 0 == Number(c.toFixed(3)) ? 0 : a / c : (sqrt = ba * ba * b * b - 4 * Math.abs(ba) *
                    a, 0 > sqrt ? (m = c, k = (b + m) * (e - l) / 2, a -= k, k = e - l, l += e - l, k += 0 == m ? 0 : a / m, l += a / m, n = !0) : (k = (Math.abs(ba) * b - Math.sqrt(sqrt)) / 2, m = b - 2 * k / Math.abs(ba), l += k, l > e && (l -= k, m = c, k = (b + m) * (e - l) / 2, a -= k, k = e - l, l += e - l, k += a / m, l += a / m, n = !0), b = m)), d.push(k);
                return d
            }

            function c() {
                if (t && u) {
                    for (var a, b, c, e, f, g, h, k, l, m, n, p, s, v, q = [], y = [], x = {
                            percent: null,
                            total: null
                        }, A = null, z = 0; z < u.length; z++) v = K[z], v = "undefined" !== typeof v.x5 ? (v.y2 + v.y4) / 2 : (v.y2 + v.y3) / 2, v = d(v).x2 + 1, q[z] = Y - v - Q;
                    v = 0.5 * Q;
                    for (var z = 0, D = u.length - 1; z < u.length || 0 <= D; z++, D--) {
                        b =
                            t.reversed ? u[D] : u[z];
                        a = b.color ? b.color : t.reversed ? t._colorSet[(u.length - 1 - z) % t._colorSet.length] : t._colorSet[z % t._colorSet.length];
                        c = b.indexLabelPlacement || t.indexLabelPlacement || "outside";
                        e = b.indexLabelBackgroundColor || t.indexLabelBackgroundColor || (w ? "transparent" : null);
                        f = b.indexLabelFontColor || t.indexLabelFontColor || "#979797";
                        g = b.indexLabelFontSize || t.indexLabelFontSize || 12;
                        h = b.indexLabelFontStyle || t.indexLabelFontStyle || "normal";
                        k = b.indexLabelFontFamily || t.indexLabelFontFamily || "arial";
                        l = b.indexLabelFontWeight ||
                            t.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || t.options.indexLabelLineColor || a;
                        m = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof t.indexLabelLineThickness ? t.indexLabelLineThickness : 2;
                        n = b.indexLabelLineDashType || t.indexLabelLineDashType || "solid";
                        p = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof t.indexLabelWrap ? t.indexLabelWrap : !0;
                        s = t.dataPointIds[z];
                        r._eventManager.objectMap[s] = {
                            id: s,
                            objectType: "dataPoint",
                            dataPointIndex: z,
                            dataSeriesIndex: 0,
                            funnelSection: K[t.reversed ? u.length - 1 - z : z]
                        };
                        "inside" === t.indexLabelPlacement && (q[z] = z !== ca ? t.reversed ? K[z].x2 - K[z].x1 : K[z].x3 - K[z].x4 : K[z].x3 - K[z].x6, 20 > q[z] && (q[z] = z !== ca ? t.reversed ? K[z].x3 - K[z].x4 : K[z].x2 - K[z].x1 : K[z].x2 - K[z].x1, q[z] /= 2));
                        s = b.indexLabelMaxWidth || t.indexLabelMaxWidth || q[z];
                        if (s > q[z] || 0 > s) s = q[z];
                        y[z] = "inside" === t.indexLabelPlacement ? K[z].height : !1;
                        x = r.getPercentAndTotal(t, b);
                        if (t.indexLabelFormatter || b.indexLabelFormatter) A = {
                            chart: r.options,
                            dataSeries: t,
                            dataPoint: b,
                            total: x.total,
                            percent: x.percent
                        };
                        b = b.indexLabelFormatter ? b.indexLabelFormatter(A) : b.indexLabel ? r.replaceKeywordsWithValue(b.indexLabel, b, t, z) : t.indexLabelFormatter ? t.indexLabelFormatter(A) : t.indexLabel ? r.replaceKeywordsWithValue(t.indexLabel, b, t, z) : b.label ? b.label : "";
                        0 >= m && (m = 0);
                        1E3 > s && 1E3 - s < v && (s += 1E3 - s);
                        $.roundRect || Ba($);
                        c = new ka($, {
                            fontSize: g,
                            fontFamily: k,
                            fontColor: f,
                            fontStyle: h,
                            fontWeight: l,
                            horizontalAlign: c,
                            backgroundColor: e,
                            maxWidth: s,
                            maxHeight: !1 === y[z] ? p ? 4.28571429 * g : 1.5 * g : y[z],
                            text: b,
                            padding: da
                        });
                        c.measureText();
                        E.push({
                            textBlock: c,
                            id: t.reversed ? D : z,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: m,
                            lineDashType: n,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ? c.width : c.maxWidth
                        })
                    }
                }
            }

            function e() {
                var a, b, c, d, e, f = [];
                e = !1;
                c = 0;
                for (var g = Y - V - Q / 2, g = t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth > g ? g : t.indexLabelMaxWidth : g, h = E.length - 1; 0 <= h; h--) {
                    dataPoint = u[E[h].id];
                    c = E[h];
                    d = c.textBlock;
                    b = (a = k(h) < K.length ? E[k(h)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && d.y + c + da > b.y && (e = !0);
                    c = dataPoint.indexLabelMaxWidth ||
                        g;
                    if (c > g || 0 > c) c = g;
                    f.push(c)
                }
                if (e)
                    for (h = E.length - 1; 0 <= h; h--) a = K[h], E[h].textBlock.maxWidth = f[f.length - (h + 1)], E[h].textBlock.measureText(), E[h].textBlock.x = Y - g, c = E[h].textBlock.height < E[h].textBlock.maxHeight ? E[h].textBlock.height : E[h].textBlock.maxHeight, e = E[h].textBlock.width < E[h].textBlock.maxWidth ? E[h].textBlock.width : E[h].textBlock.maxWidth, E[h].height = c, E[h].width = e, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, E[h].textBlock.y = c - E[h].height / 2, t.reversed ? (E[h].textBlock.y + E[h].height >
                        R + z && (E[h].textBlock.y = R + z - E[h].height), E[h].textBlock.y < sa - z && (E[h].textBlock.y = sa - z)) : (E[h].textBlock.y < R - z && (E[h].textBlock.y = R - z), E[h].textBlock.y + E[h].height > sa + z && (E[h].textBlock.y = sa + z - E[h].height))
            }

            function g() {
                var a, b, c, e;
                if ("inside" !== t.indexLabelPlacement)
                    for (var f = 0; f < K.length; f++) 0 == E[f].textBlock.text.length ? E[f].isDirty = !0 : (a = K[f], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = t.reversed ? "undefined" !== typeof a.x5 ? c > Z ? d(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !==
                        typeof a.x5 ? c < Z ? d(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, E[f].textBlock.x = b + Q, E[f].textBlock.y = c - E[f].height / 2, t.reversed ? (E[f].textBlock.y + E[f].height > R + z && (E[f].textBlock.y = R + z - E[f].height), E[f].textBlock.y < sa - z && (E[f].textBlock.y = sa - z)) : (E[f].textBlock.y < R - z && (E[f].textBlock.y = R - z), E[f].textBlock.y + E[f].height > sa + z && (E[f].textBlock.y = sa + z - E[f].height)));
                else
                    for (f = 0; f < K.length; f++) 0 == E[f].textBlock.text.length ? E[f].isDirty = !0 : (a = K[f], b = a.height, c = E[f].height, e = E[f].width, b >= c ? (b = f != ca ? (a.x4 + a.x3) /
                        2 - e / 2 : (a.x5 + a.x4) / 2 - e / 2, c = f != ca ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, E[f].textBlock.x = b, E[f].textBlock.y = c) : E[f].isDirty = !0)
            }

            function h() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= E.length) return 0;
                    var e, f = E[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = v(b);
                        d = m(e, b);
                        if (d >= c) return f.y -= c, c;
                        if (0 == b) return 0 < d && (f.y -= d), d;
                        d += a(e, -(c - d));
                        0 < d && (f.y -= d);
                        return d
                    }
                    e = k(b);
                    d = m(b, e);
                    if (d >= c) return f.y += c, c;
                    if (b == K.length - 1) return 0 < d && (f.y += d), d;
                    d += a(e, c - d);
                    0 < d && (f.y += d);
                    return d
                }

                function b() {
                    var a, d, e, f, g = 0,
                        h;
                    f = (L - S + 2 * z) / n;
                    h = n;
                    for (var l,
                            m = 1; m < h; m++) {
                        e = m * f;
                        for (var p = E.length - 1; 0 <= p; p--) !E[p].isDirty && (E[p].textBlock.y < e && E[p].textBlock.y + E[p].height > e) && (l = k(p), !(l >= E.length - 1) && E[p].textBlock.y + E[p].height + da > E[l].textBlock.y && (E[p].textBlock.y = E[p].textBlock.y + E[p].height - e > e - E[p].textBlock.y ? e + 1 : e - E[p].height - 1))
                    }
                    for (l = K.length - 1; 0 < l; l--)
                        if (!E[l].isDirty) {
                            e = v(l);
                            if (0 > e && (e = 0, E[e].isDirty)) break;
                            if (E[l].textBlock.y < E[e].textBlock.y + E[e].height) {
                                d = d || l;
                                f = l;
                                for (h = 0; E[f].textBlock.y < E[e].textBlock.y + E[e].height + da;) {
                                    a = a || E[f].textBlock.y +
                                        E[f].height;
                                    h += E[f].height;
                                    h += da;
                                    f = e;
                                    if (0 >= f) {
                                        f = 0;
                                        h += E[f].height;
                                        break
                                    }
                                    e = v(f);
                                    if (0 > e) {
                                        f = 0;
                                        h += E[f].height;
                                        break
                                    }
                                }
                                if (f != l) {
                                    g = E[f].textBlock.y;
                                    a -= g;
                                    a = h - a;
                                    g = c(a, d, f);
                                    break
                                }
                            }
                        }
                    return g
                }

                function c(a, b, d) {
                    var e = [],
                        f = 0,
                        g = 0;
                    for (a = Math.abs(a); d <= b; d++) e.push(K[d]);
                    e.sort(function(a, b) {
                        return a.height - b.height
                    });
                    for (d = 0; d < e.length; d++)
                        if (b = e[d], f < a) g++, f += E[b.id].height + da, E[b.id].textBlock.text = "", E[b.id].indexLabelText = "", E[b.id].isDirty = !0, E[b.id].textBlock.measureText();
                        else break;
                    return g
                }
                for (var d, e, f,
                        g, h, l, n = 1, p = 0; p < 2 * n; p++) {
                    for (var s = E.length - 1; 0 <= s && !(previousTextBlock = (previousLabel = 0 <= v(s) ? E[v(s)] : null) ? previousLabel.textBlock : null, f = E[s], g = f.textBlock, l = (h = k(s) < K.length ? E[k(s)] : null) ? h.textBlock : null, d = +f.height.toFixed(6), e = +g.y.toFixed(6), !f.isDirty && (h && e + d + da > +l.y.toFixed(6)) && (d = g.y + d + da - l.y, e = a(s, -d), e < d && (0 < e && (d -= e), e = a(k(s), d), e != d))); s--);
                    b()
                }
            }

            function m(a, b) {
                return (b < K.length ? E[b].textBlock.y : t.reversed ? R + z : sa + z) - (0 > a ? t.reversed ? sa - z : R - z : E[a].textBlock.y + E[a].height + da)
            }

            function n(a,
                b, c) {
                function d(b, c, f, h) {
                    fa = !0;
                    var k = ((new Date).getTime() - f.startTime) / f.duration,
                        k = f.easingFunction(f.startTime, k, 0, f.duration / 1E3);
                    1 <= k && (k = 1);
                    e(c);
                    f.changeSection(k, b);
                    var l = {};
                    l.dataSeries = t;
                    l.dataPoint = t.reversed ? t.dataPoints[u.length - 1 - b] : t.dataPoints[b];
                    l.index = t.reversed ? u.length - 1 - b : b;
                    a.toolTip.highlightObjects([l]);
                    for (l = 0; l < K.length; l++) xa(c, K[l], t.fillOpacity);
                    q(c);
                    A && ("inside" !== t.indexLabelPlacement ? p(c) : g(), s(c));
                    1 == k ? (fa = !1, h.cancelRequestAnimFrame.call(window, n)) : n = h.requestAnimFrame.call(window,
                        function() {
                            d(b, c, f, h)
                        })
                }

                function e(b) {
                    b.clearRect(x.x1, x.y1, x.x2 - x.x1, x.y2 - x.y1);
                    b.fillStyle = a.backgroundColor;
                    b.fillRect(x.x1, x.y1, x.width, x.height)
                }
                var f = [],
                    h, k, m = z,
                    n, v, r = []; - 1 !== b && (0 <= X.indexOf(b) ? (k = X.indexOf(b), X.splice(k, 1)) : (X.push(b), X = X.sort(function(a, b) {
                    return a - b
                })));
                if (0 === X.length) f = ga;
                else {
                    k = z * (1 != X.length || 0 != X[0] && X[0] != K.length - 1 ? 2 : 1) / l();
                    for (var w = 0; w < K.length; w++) {
                        if (1 == X.length && 0 == X[0]) {
                            if (0 === w) {
                                f.push(ga[w]);
                                h = m;
                                continue
                            }
                        } else 0 === w && (h = -1 * m);
                        f.push(ga[w] + h);
                        if (0 <= X.indexOf(w) ||
                            w < K.length && 0 <= X.indexOf(w + 1)) h += k
                    }
                }
                v = function() {
                    for (var a = [], b = 0; b < K.length; b++) a.push(f[b] - K[b].y1);
                    return a
                }();
                c = {
                    startTime: (new Date).getTime(),
                    duration: c || 500,
                    easingFunction: function(a, b, c, d) {
                        return I.easing.easeOutQuart(a, b, c, d)
                    },
                    changeSection: function(a) {
                        for (var b, c, d = 0; d < K.length; d++) b = v[d], c = K[d], newY = b * a, "undefined" === typeof r[d] && (r[d] = 0), 0 > r && (r *= -1), c.y1 += newY - r[d], c.y2 += newY - r[d], c.y3 += newY - r[d], c.y4 += newY - r[d], c.y5 && (c.y5 += newY - r[d], c.y6 += newY - r[d]), r[d] = newY
                    }
                };
                d(b, a.ctx, c, a)
            }

            function l() {
                for (var a =
                        0, b = 0; b < K.length - 1; b++)(0 <= X.indexOf(b) || 0 <= X.indexOf(b + 1)) && a++;
                return a
            }

            function p(a) {
                for (var b, c, e, f, g = 0; g < K.length; g++) f = 1 === E[g].lineThickness % 2 ? 0.5 : 0, c = ((K[g].y2 + K[g].y4) / 2 << 0) + f, b = d(c).x2 - 1, e = E[g].textBlock.x, f = (E[g].textBlock.y + E[g].height / 2 << 0) + f, E[g].isDirty || 0 == E[g].lineThickness || (a.strokeStyle = E[g].lineColor, a.lineWidth = E[g].lineThickness, a.setLineDash && a.setLineDash(G(E[g].lineDashType, E[g].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(e, f), a.stroke())
            }

            function v(a) {
                for (a -= 1; - 1 <=
                    a && -1 != a && E[a].isDirty; a--);
                return a
            }

            function k(a) {
                for (a += 1; a <= K.length && a != K.length && E[a].isDirty; a++);
                return a
            }

            function d(a) {
                for (var b, c = 0; c < u.length; c++)
                    if (K[c].y1 < a && K[c].y4 > a) {
                        b = K[c];
                        break
                    }
                return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), {
                    x1: a,
                    x2: a
                }) : -1
            }

            function s(a) {
                for (var b = 0; b < K.length; b++) E[b].isDirty || (a && (E[b].textBlock.ctx = a), E[b].textBlock.render(!0))
            }

            function q(a) {
                r.plotArea.layoutManager.reset();
                a.roundRect || Ba(a);
                r.title && (r.title.dockInsidePlotArea || "center" === r.title.horizontalAlign && "center" === r.title.verticalAlign) && (r.title.ctx = a, r.title.render());
                if (r.subtitles)
                    for (var b = 0; b < r.subtitles.length; b++) {
                        var c = r.subtitles[b];
                        if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) r.subtitles.ctx = a, c.render()
                    }
                r.legend && (r.legend.dockInsidePlotArea || "center" === r.legend.horizontalAlign && "center" === r.legend.verticalAlign) && (r.legend.ctx = a, r.legend.render());
                U.fNg &&
                    U.fNg(r)
            }
            var r = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var t = this.data[a.dataSeriesIndexes[0]], u = t.dataPoints, x = this.plotArea, z = 0.025 * x.width, C = 0.01 * x.width, A = !1, H = 0; H < u.length; H++)
                    if (!A && ("undefined" !== typeof u[H].indexLabel && null !== u[H].indexLabel && 0 < u[H].indexLabel.toString().length) && (A = !0), !A && ("undefined" !== typeof u[H].label && null !== u[H].label && 0 < u[H].label.toString().length) && (A = !0), !A && "function" === typeof t.indexLabelFormatter || "function" === typeof u[H].indexLabelFormatter) A = !0;
                A = A ||
                    "undefined" !== typeof t.indexLabel && null !== t.indexLabel && 0 < t.indexLabel.toString().length;
                "inside" !== t.indexLabelPlacement && A || (C = 12.5 * x.width / 100);
                var H = x.x1 + C,
                    Y = x.x2 - C,
                    S = x.y1 + z,
                    L = x.y2 - z,
                    N = x.height - 2 * z,
                    C = x.width,
                    $ = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != t.length && (t.dataPoints && t.visible) && 0 !== u.length) {
                    var M, F, C = 75 * C / 100,
                        Q = 30 * (Y - C) / 100;
                    "funnel" === t.type ? (M = t.neckHeight, F = t.neckWidth, "string" === typeof M && M.match(/%$/) ? (M = parseInt(M), M = M * N / 100) : M = parseInt(M), "string" === typeof F && F.match(/%$/) ?
                        (F = parseInt(F), F = F * C / 100) : F = parseInt(F), M > N ? M = N : 0 >= M && (M = !0), F > C ? F = C - 0.5 : 0 >= F && (F = !0)) : "pyramid" === t.type && (F = M = !0, t.reversed = t.reversed ? !1 : !0);
                    M = M ? "number" === typeof M ? M : 0 : 0.35 * N;
                    F = F ? "number" === typeof F ? F : 0 : 0.25 * C;
                    var O = H + C / 2,
                        W = H,
                        V = H + C,
                        R = t.reversed ? L : S,
                        T = O - F / 2,
                        J = O + F / 2,
                        Z = t.reversed ? S + M : L - M,
                        sa = t.reversed ? S : L,
                        C = [],
                        O = [],
                        K = [],
                        ia = [],
                        aa = S,
                        ca, ba = (Z - R) / (T - W),
                        ea = -ba,
                        H = "area" === (t.valueRepresents ? t.valueRepresents : "height") ? b() : f();
                    if (-1 !== H) {
                        if (t.reversed)
                            for (ia.push(aa), F = H.length - 1; 0 < F; F--) aa += H[F], ia.push(aa);
                        else
                            for (F = 0; F < H.length; F++) aa += H[F], ia.push(aa);
                        if (t.reversed)
                            for (F = 0; F < H.length; F++) ia[F] < Z ? (C.push(T), O.push(J), ca = F) : (C.push((ia[F] - R + ba * W) / ba), O.push((ia[F] - R + ea * V) / ea));
                        else
                            for (F = 0; F < H.length; F++) ia[F] < Z ? (C.push((ia[F] - R + ba * W) / ba), O.push((ia[F] - R + ea * V) / ea), ca = F) : (C.push(T), O.push(J));
                        for (F = 0; F < H.length - 1; F++) aa = t.reversed ? u[u.length - 1 - F].color ? u[u.length - 1 - F].color : t._colorSet[(u.length - 1 - F) % t._colorSet.length] : u[F].color ? u[F].color : t._colorSet[F % t._colorSet.length], F === ca ? K.push({
                            x1: C[F],
                            y1: ia[F],
                            x2: O[F],
                            y2: ia[F],
                            x3: J,
                            y3: Z,
                            x4: O[F + 1],
                            y4: ia[F + 1],
                            x5: C[F + 1],
                            y5: ia[F + 1],
                            x6: T,
                            y6: Z,
                            id: F,
                            height: ia[F + 1] - ia[F],
                            color: aa
                        }) : K.push({
                            x1: C[F],
                            y1: ia[F],
                            x2: O[F],
                            y2: ia[F],
                            x3: O[F + 1],
                            y3: ia[F + 1],
                            x4: C[F + 1],
                            y4: ia[F + 1],
                            id: F,
                            height: ia[F + 1] - ia[F],
                            color: aa
                        });
                        var da = 2,
                            E = [],
                            fa = !1,
                            X = [],
                            ga = [],
                            ja = !1;
                        for (F = 0; F < u.length; F++) u[F].exploded && (ja = !0, t.reversed ? X.push(u.length - 1 - F) : X.push(F));
                        $.clearRect(x.x1, x.y1, x.width, x.height);
                        $.fillStyle = r.backgroundColor;
                        $.fillRect(x.x1, x.y1, x.width, x.height);
                        for (F = 0; F < K.length; F++) H =
                            K[F], xa($, H, t.fillOpacity), ga.push(H.y1);
                        q($);
                        A && t.visible && (c(), g(), e(), "inside" !== t.indexLabelPlacement && (h(), r.animationEnabled || p($)), r.animationEnabled || s());
                        if (!A)
                            for (F = 0; F < u.length; F++) H = t.dataPointIds[F], C = {
                                id: H,
                                objectType: "dataPoint",
                                dataPointIndex: F,
                                dataSeriesIndex: 0,
                                funnelSection: K[t.reversed ? u.length - 1 - F : F]
                            }, r._eventManager.objectMap[H] = C;
                        r.animationEnabled && r.animatedRender ? setTimeout(function() {
                                ja && n(r, -1);
                                A && (s(), "inside" !== t.indexLabelPlacement && p($));
                                a.targetCtx = null
                            }, r.animationDuration) :
                            ja ? (n(r, -1, 1), A && (s(), "inside" !== t.indexLabelPlacement && p($))) : r.animationEnabled && A && (s(), "inside" !== t.indexLabelPlacement && p($));
                        this.funnelPyramidClickHandler = function(a) {
                            var b = -1;
                            if (!fa && !r.isAnimating && (y(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = t.reversed ? u.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <= b)) {
                                a = b;
                                if ("funnel" === t.type || "pyramid" === t.type) t.reversed ? u[u.length - 1 - a].exploded = u[u.length - 1 - a].exploded ? !1 : !0 : u[a].exploded = u[a].exploded ? !1 : !0;
                                n(r, b)
                            }
                        };
                        return {
                            source: $,
                            dest: this.plotArea.ctx,
                            animationCallback: I.fadeInAnimation,
                            easingFunction: I.easing.easeInQuad,
                            animationBase: 0
                        }
                    }
                }
            }
        };
        u.prototype.animationRequestId = null;
        u.prototype.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 1E3 / 60)
            }
        }();
        u.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        u.prototype.set = function(a, f, b) {
            b = "undefined" === typeof b ? !0 : b;
            "options" === a ? (this.options = f, b && this.render()) : u.base.set.call(this, a, f, b)
        };
        u.prototype.exportChart = function(a) {
            a = "undefined" === typeof a ? {} : a;
            var f = a.format ? a.format : "png",
                b = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + f);
            r(this.canvas, f, b)
        };
        u.prototype.print = function() {
            var a =
                this.exportChart({
                    toDataURL: !0
                }),
                f = document.createElement("iframe");
            f.setAttribute("class", "canvasjs-chart-print-frame");
            f.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
            f.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(f);
            var b = this,
                c = f.contentWindow || f.contentDocument.document || f.contentDocument;
            c.document.open();
            c.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' +
                a + '"/><body/></html>');
            c.document.close();
            setTimeout(function() {
                c.focus();
                c.print();
                setTimeout(function() {
                    b._canvasJSContainer.removeChild(f)
                }, 1E3)
            }, 500)
        };
        u.prototype.getPercentAndTotal = function(a, f) {
            var b = null,
                c = null,
                e = null;
            if (0 <= a.type.indexOf("stacked")) c = 0, b = f.x.getTime ? f.x.getTime() : f.x, b in a.plotUnit.yTotals && (c = a.plotUnit.yTotals[b], e = isNaN(f.y) ? 0 : 100 * (f.y / c));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (i = c = 0; i < a.dataPoints.length; i++) isNaN(a.dataPoints[i].y) ||
                    (c += a.dataPoints[i].y);
                e = isNaN(f.y) ? 0 : 100 * (f.y / c)
            }
            return {
                percent: e,
                total: c
            }
        };
        u.prototype.replaceKeywordsWithValue = function(a, f, b, c, e) {
            var g = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= b.type.indexOf("stacked") || "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var h = "#percent",
                    m = "#total",
                    n = this.getPercentAndTotal(b, f),
                    m = isNaN(n.total) ? m : n.total,
                    h = isNaN(n.percent) ? h : n.percent;
                do {
                    n = "";
                    if (b.percentFormatString) n = b.percentFormatString;
                    else {
                        var n = "#,##0.",
                            l = Math.max(Math.ceil(Math.log(1 / Math.abs(h)) / Math.LN10), 2);
                        if (isNaN(l) || !isFinite(l)) l = 2;
                        for (var p = 0; p < l; p++) n += "#";
                        b.percentFormatString = n
                    }
                    a = a.replace("#percent", ca(h, n, g._cultureInfo));
                    a = a.replace("#total", ca(m, b.yValueFormatString ? b.yValueFormatString : "#,##0.########", g._cultureInfo))
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
                if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1,
                    a.length - 1);
                a = Da(a.slice(1, a.length - 1));
                a = a.replace("#index", e);
                var h = null;
                try {
                    var d = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    d && 0 < d.length && (h = Da(d[2]), a = Da(d[1]))
                } catch (l) {}
                d = null;
                if ("color" === a) return "waterfall" === b.type ? f.color ? f.color : -1 < f.y ? b.risingColor : b.fallingColor : "error" === b.type ? b.color ? b.color : b._colorSet[h % b._colorSet.length] : f.color ? f.color : b.color ? b.color : b._colorSet[c % b._colorSet.length];
                if (f.hasOwnProperty(a)) d = f;
                else if (b.hasOwnProperty(a)) d = b;
                else return "";
                d = d[a];
                null !== h && (d = d[h]);
                if ("x" === a)
                    if ("dateTime" === g.plotInfo.axisXValueType || "dateTime" === b.xValueType || f.x && f.x.getTime) {
                        if (g.plotInfo.plotTypes[0].plotUnits[0].axisX && !g.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic) return Aa(d, f.xValueFormatString ? f.xValueFormatString : b.xValueFormatString ? b.xValueFormatString : b.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo)
                    } else return ca(d, f.xValueFormatString ? f.xValueFormatString : b.xValueFormatString ? b.xValueFormatString :
                        b.xValueFormatString = "#,##0.########", g._cultureInfo);
                else return "y" === a ? ca(d, f.yValueFormatString ? f.yValueFormatString : b.yValueFormatString ? b.yValueFormatString : b.yValueFormatString = "#,##0.########", g._cultureInfo) : "z" === a ? ca(d, f.zValueFormatString ? f.zValueFormatString : b.zValueFormatString ? b.zValueFormatString : b.zValueFormatString = "#,##0.########", g._cultureInfo) : d
            })
        };
        ma(O, W);
        O.prototype.render = function() {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                f = a.layoutManager.getFreeSpace(),
                b = null,
                c = 0,
                e = 0,
                g = 0,
                h = 0,
                m = this.markerMargin = this.chart.options.legend && !y(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var n = [],
                l = [];
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", b = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : f.width, h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * f.height) : "center" === this.verticalAlign && (this.orientation = "vertical", b = this.horizontalAlign,
                g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * f.width, h = this.maxHeight = null !== this.maxHeight ? this.maxHeight : f.height);
            for (var p = [], v = 0; v < this.dataSeries.length; v++) {
                var k = this.dataSeries[v];
                if (k.dataPoints && k.dataPoints.length)
                    if ("pie" !== k.type && "doughnut" !== k.type && "funnel" !== k.type && "pyramid" !== k.type) {
                        var d = k.legendMarkerType = k.legendMarkerType ? k.legendMarkerType : "line" !== k.type && "stepLine" !== k.type && "spline" !== k.type && "scatter" !== k.type && "bubble" !== k.type || !k.markerType ? "error" === k.type &&
                            k._linkedSeries ? k._linkedSeries.legendMarkerType ? k._linkedSeries.legendMarkerType : N.getDefaultLegendMarker(k._linkedSeries.type) : N.getDefaultLegendMarker(k.type) : k.markerType,
                            s = k.legendText ? k.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this.options,
                                dataSeries: k,
                                dataPoint: null
                            }) : k.name,
                            q = k.legendMarkerColor = k.legendMarkerColor ? k.legendMarkerColor : k.markerColor ? k.markerColor : "error" === k.type ? y(k.whiskerColor) ? k._colorSet[0] : k.whiskerColor : k._colorSet[0],
                            r = k.markerSize ||
                            "line" !== k.type && "stepLine" !== k.type && "spline" !== k.type ? 0.75 * this.lineHeight : 0,
                            t = k.legendMarkerBorderColor ? k.legendMarkerBorderColor : k.markerBorderColor,
                            u = k.legendMarkerBorderThickness ? k.legendMarkerBorderThickness : k.markerBorderThickness ? Math.max(1, Math.round(0.2 * r)) : 0;
                        "error" === k.type && p.push(q);
                        s = this.chart.replaceKeywordsWithValue(s, k.dataPoints[0], k, v);
                        d = {
                            markerType: d,
                            markerColor: q,
                            text: s,
                            textBlock: null,
                            chartType: k.type,
                            markerSize: r,
                            lineColor: k._colorSet[0],
                            dataSeriesIndex: k.index,
                            dataPointIndex: null,
                            markerBorderColor: t,
                            markerBorderThickness: u
                        };
                        n.push(d)
                    } else
                        for (var w = 0; w < k.dataPoints.length; w++) {
                            var x = k.dataPoints[w],
                                d = x.legendMarkerType ? x.legendMarkerType : k.legendMarkerType ? k.legendMarkerType : N.getDefaultLegendMarker(k.type),
                                s = x.legendText ? x.legendText : k.legendText ? k.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                    chart: this.chart,
                                    legend: this.options,
                                    dataSeries: k,
                                    dataPoint: x
                                }) : x.name ? x.name : "DataPoint: " + (w + 1),
                                q = x.legendMarkerColor ? x.legendMarkerColor : k.legendMarkerColor ? k.legendMarkerColor :
                                x.color ? x.color : k.color ? k.color : k._colorSet[w % k._colorSet.length],
                                r = 0.75 * this.lineHeight,
                                t = x.legendMarkerBorderColor ? x.legendMarkerBorderColor : k.legendMarkerBorderColor ? k.legendMarkerBorderColor : x.markerBorderColor ? x.markerBorderColor : k.markerBorderColor,
                                u = x.legendMarkerBorderThickness ? x.legendMarkerBorderThickness : k.legendMarkerBorderThickness ? k.legendMarkerBorderThickness : x.markerBorderThickness || k.markerBorderThickness ? Math.max(1, Math.round(0.2 * r)) : 0,
                                s = this.chart.replaceKeywordsWithValue(s, x, k,
                                    w),
                                d = {
                                    markerType: d,
                                    markerColor: q,
                                    text: s,
                                    textBlock: null,
                                    chartType: k.type,
                                    markerSize: r,
                                    dataSeriesIndex: v,
                                    dataPointIndex: w,
                                    markerBorderColor: t,
                                    markerBorderThickness: u
                                };
                            (x.showInLegend || k.showInLegend && !1 !== x.showInLegend) && n.push(d)
                        }
            }!0 === this.reversed && n.reverse();
            if (0 < n.length) {
                k = null;
                s = w = x = u = 0;
                x = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth, g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth =
                    g;
                r = 0 === r ? 0.75 * this.lineHeight : r;
                x -= r + m;
                for (v = 0; v < n.length; v++) {
                    d = n[v];
                    if ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType) x -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= h || "undefined" === typeof h || 0 >= x || "undefined" === typeof x)) {
                        if ("horizontal" === this.orientation) {
                            d.textBlock = new ka(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: x,
                                maxHeight: this.itemWrap ? h : this.lineHeight,
                                angle: 0,
                                text: d.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            });
                            d.textBlock.measureText();
                            null !== this.itemWidth && (d.textBlock.width = this.itemWidth - (r + m + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!k || k.width + Math.round(d.textBlock.width + r + m + (0 === k.width ? 0 : this.horizontalSpacing) + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g) k = {
                                items: [],
                                width: 0
                            }, l.push(k), this.height += w, w = 0;
                            w = Math.max(w, d.textBlock.height)
                        } else d.textBlock =
                            new ka(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: x,
                                maxHeight: !0 === this.itemWrap ? h : 1.5 * this.fontSize,
                                angle: 0,
                                text: d.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            }), d.textBlock.measureText(), null !== this.itemWidth && (d.textBlock.width = this.itemWidth - (r + m + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < h - this.lineHeight ? (k = {
                                items: [],
                                width: 0
                            }, l.push(k)) : (k = l[u], u = (u + 1) % l.length), this.height += d.textBlock.height;
                        d.textBlock.x = k.width;
                        d.textBlock.y = 0;
                        k.width += Math.round(d.textBlock.width + r + m + (0 === k.width ? 0 : this.horizontalSpacing) + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        k.items.push(d);
                        this.width = Math.max(k.width, this.width);
                        s = d.textBlock.width + (r + m + ("line" === d.chartType || "spline" === d.chartType || "stepLine" === d.chartType ? 2 * 0.1 * this.lineHeight : 0))
                    }
                }
                this.itemWidth = s;
                this.height = !1 === this.itemWrap ? l.length * this.lineHeight : this.height + w;
                this.height = Math.min(h, this.height);
                this.width = Math.min(g, this.width)
            }
            "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y1 + f.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ?
                f.x1 : "right" === this.horizontalAlign ? f.x2 - this.width : f.x1 + f.width / 2 - this.width / 2, c = f.y2 - this.height);
            this.items = n;
            for (v = 0; v < this.items.length; v++) d = n[v], d.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[d.id] = {
                id: d.id,
                objectType: "legendItem",
                legendItemIndex: v,
                dataSeriesIndex: d.dataSeriesIndex,
                dataPointIndex: d.dataPointIndex
            };
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(e, c, this.width, this.height, this.cornerRadius, this.borderThickness,
                this.backgroundColor, this.borderColor);
            for (v = f = 0; v < l.length; v++) {
                k = l[v];
                for (x = w = 0; x < k.items.length; x++) {
                    d = k.items[x];
                    q = d.textBlock.x + e + (0 === x ? 0.2 * r : this.horizontalSpacing);
                    t = c + f;
                    s = q;
                    this.chart.data[d.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(e, c, g, Math.max(h - h % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === d.chartType || "stepLine" === d.chartType || "spline" === d.chartType) this.ctx.strokeStyle = d.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight /
                        8), this.ctx.beginPath(), this.ctx.moveTo(q - 0.1 * this.lineHeight, t + this.lineHeight / 2), this.ctx.lineTo(q + 0.85 * this.lineHeight, t + this.lineHeight / 2), this.ctx.stroke(), s -= 0.1 * this.lineHeight;
                    if ("error" === d.chartType) {
                        this.ctx.strokeStyle = p[0];
                        u = r / 8;
                        this.ctx.lineWidth = u;
                        this.ctx.beginPath();
                        var u = q - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            z = t + 0.15 * this.lineHeight,
                            A = 0.7 * this.lineHeight,
                            C = A + 0.02 * this.lineHeight;
                        this.ctx.moveTo(u, z);
                        this.ctx.lineTo(u + A, z);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(u +
                            A / 2, z);
                        this.ctx.lineTo(u + A / 2, z + C);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(u, z + C);
                        this.ctx.lineTo(u + A, z + C);
                        this.ctx.stroke();
                        p.shift()
                    }
                    ga.drawMarker(q + r / 2, t + this.lineHeight / 2, this.ctx, d.markerType, "error" === d.chartType || "line" === d.chartType || "spline" === d.chartType ? d.markerSize / 2 : d.markerSize, d.markerColor, d.markerBorderColor, d.markerBorderThickness);
                    d.textBlock.x = q + m + r;
                    if ("line" === d.chartType || "stepLine" === d.chartType || "spline" === d.chartType) d.textBlock.x += 0.1 * this.lineHeight;
                    d.textBlock.y =
                        Math.round(t + this.lineHeight / 2);
                    d.textBlock.render(!0);
                    this.ctx.restore();
                    w = 0 < x ? Math.max(w, d.textBlock.height) : d.textBlock.height;
                    this.chart.data[d.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    u = H(d.id);
                    this.ghostCtx.fillStyle = u;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(s, d.textBlock.y - this.lineHeight / 2, d.textBlock.x + d.textBlock.width - s, d.textBlock.height);
                    d.x1 = this.chart._eventManager.objectMap[d.id].x1 = s;
                    d.y1 = this.chart._eventManager.objectMap[d.id].y1 = d.textBlock.y - this.lineHeight /
                        2;
                    d.x2 = this.chart._eventManager.objectMap[d.id].x2 = d.textBlock.x + d.textBlock.width;
                    d.y2 = this.chart._eventManager.objectMap[d.id].y2 = d.textBlock.y + d.textBlock.height - this.lineHeight / 2
                }
                f += w
            }
            0 < n.length && a.layoutManager.registerSpace(b, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            });
            this.bounds = {
                x1: e,
                y1: c,
                x2: e + this.width,
                y2: c + this.height
            }
        };
        ma(N, W);
        N.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" ===
                a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " +
                a);
            return null
        };
        N.getDefaultLegendMarker = function(a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" ===
                a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        };
        N.prototype.getDataPointAtX = function(a, f) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var b = {
                    dataPoint: null,
                    distance: Infinity,
                    index: NaN
                },
                c = null,
                e = 0,
                g = 0,
                h = 1,
                m = Infinity,
                n = 0,
                l = 0,
                p = 0;
            "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (p = Math.log(this.dataPoints[this.dataPoints.length -
                1].x / this.dataPoints[0].x), p = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
            for (;;) {
                g = 0 < h ? p + e : p - e;
                if (0 <= g && g < this.dataPoints.length) {
                    var c = this.dataPoints[g],
                        q = this.axisX.logarithmic ? c.x > a ? c.x / a : a / c.x : Math.abs(c.x - a);
                    q < b.distance && (b.dataPoint = c, b.distance =
                        q, b.index = g);
                    c = q;
                    c <= m ? m = c : 0 < h ? n++ : l++;
                    if (1E3 < n && 1E3 < l) break
                } else if (0 > p - e && p + e >= this.dataPoints.length) break; - 1 === h ? (e++, h = 1) : h = -1
            }
            return f || b.dataPoint.x !== a ? f && null !== b.dataPoint ? b : null : b
        };
        N.prototype.getDataPointAtXY = function(a, f, b) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || f < this.chart.plotArea.y1 || f > this.chart.plotArea.y2) return null;
            b = b || !1;
            var c = [],
                e = 0,
                g = 0,
                h = 1,
                m = !1,
                n = Infinity,
                l = 0,
                p = 0,
                q = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (q =
                    (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                        x: a,
                        y: f
                    }), this.axisX.logarithmic) var k = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                    q = 1 < k ? Math.min(Math.max((this.dataPoints.length - 1) / k * Math.log(q / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else k = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, q = 0 < k ? Math.min(Math.max((this.dataPoints.length - 1) / k * (q - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                g = 0 <
                    h ? q + e : q - e;
                if (0 <= g && g < this.dataPoints.length) {
                    var k = this.chart._eventManager.objectMap[this.dataPointIds[g]],
                        d = this.dataPoints[g],
                        s = null;
                    if (k) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >= k.x1 && (a <= k.x2 && f >= k.y1 && f <= k.y2) && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(k.x1 - a), Math.abs(k.x2 - a), Math.abs(k.y1 - f), Math.abs(k.y2 -
                                        f))
                                }), m = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var r = ja("markerSize", d, this) || 4,
                                    u = b ? 20 : r,
                                    s = Math.sqrt(Math.pow(k.x1 - a, 2) + Math.pow(k.y1 - f, 2));
                                s <= u && c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: s
                                });
                                k = Math.abs(k.x1 - a);
                                k <= n ? n = k : 0 < h ? l++ : p++;
                                s <= r / 2 && (m = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                r = ja("markerSize", d, this) || 4;
                                u = b ? 20 : r;
                                s = Math.min(Math.sqrt(Math.pow(k.x1 -
                                    a, 2) + Math.pow(k.y1 - f, 2)), Math.sqrt(Math.pow(k.x1 - a, 2) + Math.pow(k.y2 - f, 2)));
                                s <= u && c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: s
                                });
                                k = Math.abs(k.x1 - a);
                                k <= n ? n = k : 0 < h ? l++ : p++;
                                s <= r / 2 && (m = !0);
                                break;
                            case "bubble":
                                r = k.size;
                                s = Math.sqrt(Math.pow(k.x1 - a, 2) + Math.pow(k.y1 - f, 2));
                                s <= r / 2 && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: s
                                }), m = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                r = k.center;
                                u = "doughnut" === this.type ? k.percentInnerRadius * k.radius : 0;
                                s = Math.sqrt(Math.pow(r.x - a, 2) + Math.pow(r.y -
                                    f, 2));
                                s < k.radius && s > u && (s = Math.atan2(f - r.y, a - r.x), 0 > s && (s += 2 * Math.PI), s = Number(((180 * (s / Math.PI) % 360 + 360) % 360).toFixed(12)), r = Number(((180 * (k.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), u = Number(((180 * (k.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === u && 1 < k.endAngle && (u = 360), r >= u && 0 !== d.y && (u += 360, s < r && (s += 360)), s > r && s < u && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: 0
                                }), m = !0));
                                break;
                            case "funnel":
                            case "pyramid":
                                s = k.funnelSection;
                                f > s.y1 && f < s.y4 && (s.y6 ? f > s.y6 ? (g = s.x6 + (s.x5 - s.x6) /
                                    (s.y5 - s.y6) * (f - s.y6), s = s.x3 + (s.x4 - s.x3) / (s.y4 - s.y3) * (f - s.y3)) : (g = s.x1 + (s.x6 - s.x1) / (s.y6 - s.y1) * (f - s.y1), s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (f - s.y2)) : (g = s.x1 + (s.x4 - s.x1) / (s.y4 - s.y1) * (f - s.y1), s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (f - s.y2)), a > g && a < s && (c.push({
                                    dataPoint: d,
                                    dataPointIndex: k.dataPointIndex,
                                    dataSeries: this,
                                    distance: 0
                                }), m = !0));
                                break;
                            case "boxAndWhisker":
                                if (a >= k.x1 - k.borderThickness / 2 && a <= k.x2 + k.borderThickness / 2 && f >= k.y4 - k.borderThickness / 2 && f <= k.y1 + k.borderThickness / 2 || Math.abs(k.x2 - a + k.x1 - a) < k.borderThickness &&
                                    f >= k.y1 && f <= k.y4) c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(k.x1 - a), Math.abs(k.x2 - a), Math.abs(k.y2 - f), Math.abs(k.y3 - f))
                                }), m = !0;
                                break;
                            case "candlestick":
                                if (a >= k.x1 - k.borderThickness / 2 && a <= k.x2 + k.borderThickness / 2 && f >= k.y2 - k.borderThickness / 2 && f <= k.y3 + k.borderThickness / 2 || Math.abs(k.x2 - a + k.x1 - a) < k.borderThickness && f >= k.y1 && f <= k.y4) c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(k.x1 - a), Math.abs(k.x2 - a), Math.abs(k.y2 - f), Math.abs(k.y3 -
                                        f))
                                }), m = !0;
                                break;
                            case "ohlc":
                                if (Math.abs(k.x2 - a + k.x1 - a) < k.borderThickness && f >= k.y2 && f <= k.y3 || a >= k.x1 && a <= (k.x2 + k.x1) / 2 && f >= k.y1 - k.borderThickness / 2 && f <= k.y1 + k.borderThickness / 2 || a >= (k.x1 + k.x2) / 2 && a <= k.x2 && f >= k.y4 - k.borderThickness / 2 && f <= k.y4 + k.borderThickness / 2) c.push({
                                    dataPoint: d,
                                    dataPointIndex: g,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(k.x1 - a), Math.abs(k.x2 - a), Math.abs(k.y2 - f), Math.abs(k.y3 - f))
                                }), m = !0
                        }
                        if (m || 1E3 < l && 1E3 < p) break
                    }
                } else if (0 > q - e && q + e >= this.dataPoints.length) break; - 1 === h ? (e++, h = 1) :
                    h = -1
            }
            a = null;
            for (f = 0; f < c.length; f++) a ? c[f].distance <= a.distance && (a = c[f]) : a = c[f];
            return a
        };
        N.prototype.getMarkerProperties = function(a, f, b, c) {
            var e = this.dataPoints;
            return {
                x: f,
                y: b,
                ctx: c,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            }
        };
        ma(C, W);
        C.prototype.createExtraLabelsForLog = function(a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var f = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(f / this.viewportMinimum) < this.noTicks - 1) {
                    for (var b = C.getNiceNumber((f - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length),
                            3), !0), c = Math.ceil(this.viewportMinimum / b) * b; c < f; c += b) c < this.viewportMinimum || this.logLabelValues.push(c);
                    this.logLabelValues.sort(Na);
                    this.createExtraLabelsForLog(a)
                }
            }
        };
        C.prototype.createLabels = function() {
            var a, f, b = 0,
                c = 0,
                e, g = 0,
                h = 0,
                c = 0,
                m = this.interval,
                n = 0,
                l, p = 0.6 * this.chart.height,
                b = !1,
                q, k, d = !1,
                s = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                r = s.length ? y(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
            if (this.dataSeries && 0 < this.dataSeries.length)
                for (c = 0; c < this.dataSeries.length; c++) "dateTime" ===
                    this.dataSeries[c].xValueType && (b = !0);
            if ("axisX" === this.type && b && !this.logarithmic) {
                this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval);
                e = Sa(new Date(this.viewportMaximum), this.interval, this.intervalType);
                for (var u = s.length && this.viewportMinimum > s[0].endValue, d = s.length && s[0].startValue < this.intervalStartPosition.getTime() && this.intervalStartPosition() < s[0].endValue, t = 0, b = this.intervalStartPosition; b < e || t < s.length && s[t].endValue < this.viewportMaximum;) {
                    k =
                        c = b.getTime();
                    q = !1;
                    t < s.length && (this.viewportMinimum <= s[t].startValue && s[t].startValue <= Math.min(c, this.viewportMaximum) && !d ? (q = "start", u = !1, d = !0, k = s[t].startValue) : this.viewportMinimum <= s[t].endValue && s[t].endValue <= Math.min(c, this.viewportMaximum) && (q = "end", k = s[t].endValue, d = !1, u = !0));
                    if (q || t < s.length && (c < s[t].startValue || s[t].endValue < c) || t === s.length) a = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.options,
                            value: new Date(k),
                            label: this.labels[k] ? this.labels[k] : null
                        }) : "axisX" ===
                        this.type && this.labels[k] ? this.labels[k] : Aa(k, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: g,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            maxHeight: h,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            horizontalAlign: "left",
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle"
                        }), this._labels.push({
                            position: k,
                            textBlock: a,
                            effectiveHeight: null,
                            breaksLabelType: q
                        });
                    u ? t++ : (t >= s.length || (c >= s[t].startValue && c <= s[t].endValue) === d) && Sa(b, m, this.intervalType);
                    u = t < s.length && c > s[t].endValue
                }
            } else {
                e = this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(m);
                    c = Math.ceil(this.intervalStartPosition);
                    t = !1;
                    for (b = c; b < this.viewportMaximum; b += a)
                        if (this.labels[b]) t = !0;
                        else {
                            t = !1;
                            break
                        }
                    t && (this.interval = a, this.intervalStartPosition = c)
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues ||
                        (this.logLabelValues = [], this.createExtraLabelsForLog()), u = s.length && this.viewportMinimum > s[0].endValue, d = s.length && s[0].startValue < this.viewportMinimum && this.viewportMinimum < s[0].endValue, t = c = 0; c < this.logLabelValues.length && t < s.length && s[t].endValue <= e; c++)
                        if (b = this.logLabelValues[c], b < this.viewportMinimum) c++;
                        else {
                            k = b;
                            q = !1;
                            t < s.length && (this.viewportMinimum <= s[t].startValue && s[t].startValue <= Math.min(b, e) && !d ? (q = "start", u = !1, d = !0, k = s[t].startValue) : this.viewportMinimum <= s[t].endValue && s[t].endValue <=
                                Math.min(b, e) && (q = "end", k = s[t].endValue, d = !1, u = !0));
                            if (q || t < s.length && (b < s[t].startValue || s[t].endValue < b) || t === s.length) a = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.options,
                                value: k,
                                label: this.labels[k] ? this.labels[k] : null
                            }) : "axisX" === this.type && this.labels[k] ? this.labels[k] : ca(k, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: g,
                                maxHeight: h,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                borderThickness: this.labelBorderThickness,
                                cornerRadius: this.labelCornerRadius,
                                horizontalAlign: "left",
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: 0
                            }), this._labels.push({
                                position: k,
                                textBlock: a,
                                effectiveHeight: null,
                                breaksLabelType: q
                            });
                            u ? t++ : (t >= s.length || (b >= s[t].startValue && b <= s[t].endValue) === d) && c++;
                            u = t < s.length && b > s[t].endValue
                        }
                c = Math.min(this.intervalStartPosition,
                    this.viewportMinimum);
                d = s.length && s[r].startValue < c && c < s[r].endValue;
                u = s.length && c > s[r].endValue;
                t = r;
                for (b = this.intervalStartPosition; b <= e || t < s.length && s[t].endValue <= e;) {
                    k = b;
                    q = !1;
                    t < s.length && (c <= s[t].startValue && s[t].startValue <= Math.min(b, e) && !d ? (q = "start", u = !1, d = !0, k = s[t].startValue) : c <= s[t].endValue && s[t].endValue <= Math.min(b, e) && (q = "end", k = s[t].endValue, d = !1, u = !0));
                    if (q || t < s.length && (b < s[t].startValue || s[t].endValue < b) || t === s.length) a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: k,
                        label: this.labels[k] ? this.labels[k] : null
                    }) : "axisX" === this.type && this.labels[k] ? this.labels[k] : ca(k, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: g,
                        maxHeight: h,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        horizontalAlign: "left",
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: k,
                        textBlock: a,
                        effectiveHeight: null,
                        breaksLabelType: q
                    });
                    if (u) b === s[t].endValue && (b = parseFloat((this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase, this.interval) : b + this.interval).toFixed(12))), t++;
                    else if (t >= s.length || (b >= s[t].startValue && b <= s[t].endValue) === d) b = parseFloat((this.logarithmic && this.equidistantInterval ? b * Math.pow(this.logarithmBase,
                        this.interval) : b + this.interval).toFixed(12));
                    u = t < s.length && b > s[t].endValue
                }
            }
            if ("bottom" === this._position || "top" === this._position) n = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) :
                Math.abs(this.range)) * V[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) n = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length -
                    1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * V[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), h = "undefined" === typeof this.options.labelWrap || this.labelWrap ?
                0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = g, a.maxHeight = h, m = a.measureText(), l = m.height;
            s = [];
            r = e = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (y(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                    if (g = 0.9 * n >> 0, r = 0, !this.chart.panEnabled &&
                        1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = g;
                        this.sessionVariables.labelMaxHeight = h;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (b = 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                for (var x, t = a.text.split(" "), c = 0; c < t.length; c++) d = t[c], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, d = this.ctx.measureText(d),
                                    d.width > r && (x = b, r = d.width)
                            }
                        b = 0;
                        for (b = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; b < this._labels.length; b++)
                            if (!this._labels[b].breaksLabelType) {
                                a = this._labels[b].textBlock;
                                m = a.measureText();
                                for (t = b + 1; t < this._labels.length; t++)
                                    if (!this._labels[t].breaksLabelType) {
                                        f = this._labels[t].textBlock;
                                        f = f.measureText();
                                        break
                                    }
                                s.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, s);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                c = g * Math.sin(Math.PI /
                                    180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (y(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), d = (p - (l + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !y(this.options.labelWrap)) this.labelWrap ? y(this.options.labelMaxWidth) ?
                                        (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, r), d), this.sessionVariables.labelWrap = this.labelWrap, m.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle) : y(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight =
                                            h, this.sessionVariables.labelMaxWidth = g, m.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = d)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (y(this.options.labelWrap))
                                            if (!y(this.options.labelMaxWidth)) this.options.labelMaxWidth < g ? (this.sessionVariables.labelMaxWidth =
                                                this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = h);
                                            else if (!y(f))
                                            if (c = m.width + f.width >> 0, t = this.labelFontSize, r < g) c - 2 * g > e && (e = c - 2 * g, c >= 2 * g && c < 2.2 * g ? (this.sessionVariables.labelMaxWidth = g, y(this.options.labelFontSize) && 12 < t && (t = Math.floor(12 / 13 * t), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? t : this.options.labelFontSize,
                                                this.sessionVariables.labelAngle = this.labelAngle) : c >= 2.2 * g && c < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = d, this.sessionVariables.labelFontSize = t) : c >= 2.8 * g && c < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, r), this.sessionVariables.labelWrap = !0, y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? t : this.options.labelFontSize,
                                                this.sessionVariables.labelAngle = this.labelAngle) : c >= 3.2 * g && c < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = d, this.sessionVariables.labelFontSize = this.labelFontSize) : c > 3.6 * g && c < 5 * g ? (y(this.options.labelFontSize) && 12 < t && (t = Math.floor(12 / 13 * t), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? t : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth =
                                                d) : c > 5 * g && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = t, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelAngle = this.labelAngle));
                                            else if (x === b && (0 === x && r + this._labels[x + 1].textBlock.measureText().width - 2 * g > e || x === this._labels.length - 1 && r + this._labels[x - 1].textBlock.measureText().width - 2 * g > e || 0 < x && x < this._labels.length - 1 && r + this._labels[x + 1].textBlock.measureText().width - 2 * g > e && r + this._labels[x - 1].textBlock.measureText().width -
                                                2 * g > e)) e = 0 === x ? r + this._labels[x + 1].textBlock.measureText().width - 2 * g : r + this._labels[x - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? t : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = d;
                                        else if (0 === e)
                                            for (this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? t : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, c = 0; c < this._labels.length; c++) a =
                                                this._labels[c].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, r), d), m = a.measureText(), c < this._labels.length - 1 && (t = c + 1, f = this._labels[t].textBlock, f.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, r), d), f = f.measureText(), m.width + f.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25))
                                    } else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : Math.min((c - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) /
                                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), c), d = 0 != this.labelAngle ? (p - (l + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = h = this.labelWrap ? (p - d * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, y(this.options.labelWrap)) ? y(this.options.labelWrap) && (this.labelWrap && !y(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap =
                                    this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : d, this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = d, this.sessionVariables.labelMaxHeight = c < 0.9 * n ? 0.9 * n : c, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : d) :
                                    (y(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : d, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = h)
                            }
                        for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight =
                            this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = y(this.options.labelFontSize) ? this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = y(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = y(this.options.labelWrap) ?
                            this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (g = y(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, h = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth =
                        g;
                    this.sessionVariables.labelMaxHeight = h;
                    this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (b = 0; b < this._labels.length; b++)
                        if (!this._labels[b].breaksLabelType) {
                            a = this._labels[b].textBlock;
                            m = a.measureText();
                            for (t = b + 1; t < this._labels.length; t++)
                                if (!this._labels[t].breaksLabelType) {
                                    f = this._labels[t].textBlock;
                                    f = f.measureText();
                                    break
                                }
                            s.push(a.height);
                            this.sessionVariables.labelMaxHeight = Math.max.apply(Math,
                                s);
                            c = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (h - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                            y(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? y(this.options.labelWrap) ? y(this.options.labelWrap) && (y(this.options.labelMaxWidth) ? y(f) || (n = m.height + f.height >> 0, n - 2 * h > r && (r = n - 2 * h, n >= 2 * h && n < 2.4 * h ? (y(this.options.labelFontSize) && 12 < this.labelFontSize &&
                                    (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : n >= 2.4 * h && n < 2.8 * h ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : n >= 2.8 * h && n < 3.2 * h ? (this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelWrap = !0, y(this.options.labelFontSize) && 12 <
                                    this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : n >= 3.2 * h && n < 3.6 * h ? (this.sessionVariables.labelMaxHeight = c, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : n > 3.6 * h && n < 10 * h ? (y(this.options.labelFontSize) &&
                                    12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : n > 10 * h && n < 50 * h && (y(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize),
                                    a.measureText()), this.sessionVariables.labelFontSize = y(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = y(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = h, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth =
                                    this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = h) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((c - h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), h), y(this.options.labelWrap)) ?
                                y(this.options.labelWrap) && (this.labelWrap && !y(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth > this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = c) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c, y(this.options.labelMaxWidth) &&
                                    (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? h : c, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight = h, y(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                        }
                    for (c = 0; c < this._labels.length; c++) a =
                        this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth,
                        a.fontSize = this.labelFontSize = y(this.options.labelFontSize) ? this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = y(this.options.labelAngle) ? this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = y(this.options.labelWrap) ? this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
            for (b = 0; b < this.stripLines.length; b++) {
                var g = this.stripLines[b],
                    z;
                if ("outside" === g.labelPlacement) {
                    h = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) z = y(g.options.labelWrap) ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) z = y(g.options.labelWrap) ? this.sessionVariables.labelMaxHeight : g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    y(g.labelBackgroundColor) && (g.labelBackgroundColor = "#EEEEEE")
                } else h = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >>
                    0, z = y(g.options.labelWrap) || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, y(g.labelBackgroundColor) && (y(g.startValue) && 0 !== g.startValue ? g.labelBackgroundColor = w ? "transparent" : null : g.labelBackgroundColor = "#EEEEEE");
                a = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: g.labelBackgroundColor,
                    borderColor: g.labelBorderColor,
                    borderThickness: g.labelBorderThickness,
                    cornerRadius: g.labelCornerRadius,
                    maxWidth: g.options.labelMaxWidth ?
                        g.options.labelMaxWidth : h,
                    maxHeight: z,
                    angle: this.labelAngle,
                    text: g.labelFormatter ? g.labelFormatter({
                        chart: this.chart,
                        axis: this,
                        stripLine: g
                    }) : g.label,
                    horizontalAlign: "left",
                    fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.labelFontSize : this.labelFontSize : g.labelFontSize,
                    fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.labelFontFamily : this.labelFontFamily : g.labelFontFamily,
                    fontWeight: "outside" === g.labelPlacement ? g.options.labelFontWeight ? g.labelFontWeight : this.labelFontWeight : g.labelFontWeight,
                    fontColor: g.labelFontColor || g.color,
                    fontStyle: "outside" === g.labelPlacement ? g.options.labelFontStyle ? g.labelFontStyle : this.fontWeight : g.labelFontStyle,
                    textBaseline: "middle"
                });
                this._stripLineLabels.push({
                    position: g.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: g
                })
            }
        };
        C.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0,
                f = 0;
            this._labels = [];
            this._stripLineLabels = [];
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                for (f = 0; f < this._labels.length; f++) {
                    var b =
                        this._labels[f].textBlock,
                        c = b.measureText(),
                        e = 0,
                        e = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    a < e && (a = e);
                    this._labels[f].effectiveWidth = e
                }
                for (f = 0; f < this._stripLineLabels.length; f++) "outside" === this._stripLineLabels[f].stripLine.labelPlacement && (this._stripLineLabels[f].stripLine.value > this.viewportMinimum && this._stripLineLabels[f].stripLine.value < this.viewportMaximum) && (b = this._stripLineLabels[f].textBlock,
                    c = b.measureText(), e = 0 === this.labelAngle ? c.width : c.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[f].effectiveWidth = e)
            }
            f = this.title ? this._titleTextBlock.measureText().height + 2 : 0;
            return b = "inside" === this.labelPlacement ? b = f + 5 : f + a + this.tickLength + 5
        };
        C.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var f, b = 0;
            this.createLabels();
            if ("bottom" ===
                this._position || "top" === this._position) {
                for (b = 0; b < this._labels.length; b++) {
                    f = this._labels[b].textBlock;
                    var c = f.measureText(),
                        e = 0,
                        e = 0 === this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    a < e && (a = e);
                    this._labels[b].effectiveHeight = e
                }
                for (b = 0; b < this._stripLineLabels.length; b++) "outside" === this._stripLineLabels[b].stripLine.labelPlacement && (f = this._stripLineLabels[b].textBlock, c = f.measureText(), e = 0 ===
                    this.labelAngle ? c.height : c.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (c.height - f.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < e && (a = e), this._stripLineLabels[b].effectiveHeight = e)
            }
            f = this.title ? this._titleTextBlock.measureText().height + 2 : 0;
            return b = "inside" === this.labelPlacement ? b = f + 5 : f + a + this.tickLength + 5
        };
        C.setLayoutAndRender = function(a, f, b, c, e, g) {
            var h, m, n, l, p = a[0] ? a[0].chart : f[0].chart,
                q = p.ctx,
                k = p._axes;
            if (a && 0 < a.length)
                for (var d = 0; d < a.length; d++) a[d] && a[d].calculateAxisParameters();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].calculateAxisParameters();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].calculateAxisParameters();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].calculateAxisParameters();
            for (d = 0; d < k.length; d++)
                if (k[d] && k[d].scaleBreaks && k[d].scaleBreaks._appliedBreaks.length)
                    for (var s = k[d].scaleBreaks._appliedBreaks, r = 0; r < s.length && !(s[r].startValue > k[d].viewportMaximum); r++) s[r].endValue < k[d].viewportMinimum || (y(k[d].scaleBreaks.firstBreakIndex) && (k[d].scaleBreaks.firstBreakIndex =
                        r), s[r].startValue >= k[d].viewPortMinimum && (k[d].scaleBreaks.lastBreakIndex = r));
            for (var u = r = 0, t = 0, x = 0, z = 0, C = 0, G = 0, A, H, I = m = 0, S, L, N, s = S = L = N = !1, d = 0; d < k.length; d++) k[d] && k[d].title && (k[d]._titleTextBlock = new ka(k[d].ctx, {
                text: k[d].title,
                horizontalAlign: "center",
                fontSize: k[d].titleFontSize,
                fontFamily: k[d].titleFontFamily,
                fontWeight: k[d].titleFontWeight,
                fontColor: k[d].titleFontColor,
                fontStyle: k[d].titleFontStyle,
                borderColor: k[d].titleBorderColor,
                borderThickness: k[d].titleBorderThickness,
                backgroundColor: k[d].titleBackgroundColor,
                cornerRadius: k[d].titleCornerRadius,
                textBaseline: "top"
            }));
            for (d = 0; d < k.length; d++)
                if (k[d].title) switch (k[d]._position) {
                    case "left":
                        k[d]._titleTextBlock.maxWidth = k[d].titleMaxWidth || g.height;
                        k[d]._titleTextBlock.maxHeight = k[d].titleWrap ? 0.8 * g.width : 1.5 * k[d].titleFontSize;
                        k[d]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        k[d]._titleTextBlock.maxWidth = k[d].titleMaxWidth || g.height;
                        k[d]._titleTextBlock.maxHeight = k[d].titleWrap ? 0.8 * g.width : 1.5 * k[d].titleFontSize;
                        k[d]._titleTextBlock.angle = 90;
                        break;
                    default:
                        k[d]._titleTextBlock.maxWidth =
                            k[d].titleMaxWidth || g.width, k[d]._titleTextBlock.maxHeight = k[d].titleWrap ? 0.8 * g.height : 1.5 * k[d].titleFontSize, k[d]._titleTextBlock.angle = 0
                }
                if ("normal" === e) {
                    for (var x = [], z = [], C = [], G = [], Q = [], M = [], F = [], O = []; 4 > r;) {
                        var R = 0,
                            W = 0,
                            V = 0,
                            U = 0,
                            T = e = 0,
                            J = 0,
                            Z = 0,
                            X = 0,
                            K = 0,
                            aa = 0,
                            ba = 0;
                        if (b && 0 < b.length)
                            for (C = [], d = aa = 0; d < b.length; d++) C.push(Math.ceil(b[d] ? b[d].createLabelsAndCalculateWidth() : 0)), aa += C[d], J += b[d] ? b[d].margin : 0;
                        else C.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                        F.push(C);
                        if (c && 0 < c.length)
                            for (G = [], d = ba = 0; d < c.length; d++) G.push(Math.ceil(c[d] ? c[d].createLabelsAndCalculateWidth() : 0)), ba += G[d], Z += c[d] ? c[d].margin : 0;
                        else G.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                        O.push(G);
                        h = Math.round(g.x1 + aa + J);
                        n = Math.round(g.x2 - ba - Z > p.width - 10 ? p.width - 10 : g.x2 - ba - Z);
                        if (a && 0 < a.length)
                            for (x = [], d = X = 0; d < a.length; d++) a[d] && (a[d].lineCoordinates = {}), a[d].lineCoordinates.width = Math.abs(n - h), a[d].title && (a[d]._titleTextBlock.maxWidth = 0 < a[d].titleMaxWidth && a[d].titleMaxWidth < a[d].lineCoordinates.width ?
                                a[d].titleMaxWidth : a[d].lineCoordinates.width), x.push(Math.ceil(a[d] ? a[d].createLabelsAndCalculateHeight() : 0)), X += x[d], e += a[d] ? a[d].margin : 0;
                        else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                        Q.push(x);
                        if (f && 0 < f.length)
                            for (z = [], d = K = 0; d < f.length; d++) f[d] && (f[d].lineCoordinates = {}), f[d].lineCoordinates.width = Math.abs(n - h), f[d].title && (f[d]._titleTextBlock.maxWidth = 0 < f[d].titleMaxWidth && f[d].titleMaxWidth < f[d].lineCoordinates.width ? f[d].titleMaxWidth : f[d].lineCoordinates.width), z.push(Math.ceil(f[d] ?
                                f[d].createLabelsAndCalculateHeight() : 0)), K += z[d], T += f[d] ? f[d].margin : 0;
                        else z.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateHeight() : 0));
                        M.push(z);
                        if (a && 0 < a.length)
                            for (d = 0; d < a.length; d++) a[d] && (a[d].lineCoordinates.x1 = h, n = Math.round(g.x2 - ba - Z > p.width - 10 ? p.width - 10 : g.x2 - ba - Z), a[d]._labels && 1 < a[d]._labels.length && (m = l = 0, l = a[d]._labels[1], m = "dateTime" === a[d].chart.plotInfo.axisXValueType ? a[d]._labels[a[d]._labels.length - 2] : a[d]._labels[a[d]._labels.length - 1], u = l.textBlock.width * Math.cos(Math.PI /
                                    180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), t = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle))), a[d] && (a[d].labelAutoFit && !y(A) && !y(H)) && (m = 0, 0 < a[d].labelAngle ? H + t > n && (m += 0 < a[d].labelAngle ? H + t - n - ba : 0) : 0 > a[d].labelAngle ? A - u < h && A - u < a[d].viewportMinimum && (I = h - (J + a[d].tickLength + C + A - u + a[d].labelFontSize / 2)) :
                                    0 === a[d].labelAngle && (H + t > n && (m = H + t / 2 - n - ba), A - u < h && A - u < a[d].viewportMinimum && (I = h - J - a[d].tickLength - C - A + u / 2)), a[d].viewportMaximum === a[d].maximum && a[d].viewportMinimum === a[d].minimum && 0 < a[d].labelAngle && 0 < m ? n -= m : a[d].viewportMaximum === a[d].maximum && a[d].viewportMinimum === a[d].minimum && 0 > a[d].labelAngle && 0 < I ? h += I : a[d].viewportMaximum === a[d].maximum && a[d].viewportMinimum === a[d].minimum && 0 === a[d].labelAngle && (0 < I && (h += I), 0 < m && (n -= m))), p.panEnabled ? X = p.sessionVariables.axisX.height : p.sessionVariables.axisX.height =
                                X, m = Math.round(g.y2 - X - e + R), l = Math.round(g.y2), a[d].lineCoordinates.x2 = n, a[d].lineCoordinates.width = n - h, a[d].lineCoordinates.y1 = m, a[d].lineCoordinates.y2 = m, a[d].bounds = {
                                    x1: h,
                                    y1: m,
                                    x2: n,
                                    y2: l - (X + e - x[d] - R),
                                    width: n - h,
                                    height: l - m
                                }), R += x[d] + a[d].margin;
                        if (f && 0 < f.length)
                            for (d = 0; d < f.length; d++) f[d].lineCoordinates.x1 = Math.round(g.x1 + aa + J), f[d].lineCoordinates.x2 = Math.round(g.x2 - ba - Z > p.width - 10 ? p.width - 10 : g.x2 - ba - Z), f[d].lineCoordinates.width = Math.abs(n - h), f[d]._labels && 1 < f[d]._labels.length && (l = f[d]._labels[1],
                                    m = "dateTime" === f[d].chart.plotInfo.axisXValueType ? f[d]._labels[f[d]._labels.length - 2] : f[d]._labels[f[d]._labels.length - 1], u = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), t = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle))), p.panEnabled ? K = p.sessionVariables.axisX2.height : p.sessionVariables.axisX2.height =
                                K, m = Math.round(g.y1), l = Math.round(g.y2 + f[d].margin), f[d].lineCoordinates.y1 = m + K + T - W, f[d].lineCoordinates.y2 = m, f[d].bounds = {
                                    x1: h,
                                    y1: m + (K + T - z[d] - W),
                                    x2: n,
                                    y2: l,
                                    width: n - h,
                                    height: l - m
                                }, W += z[d] + f[d].margin;
                        if (b && 0 < b.length)
                            for (d = 0; d < b.length; d++) J = 10, b[d] && (h = Math.round(a[0] ? a[0].lineCoordinates.x1 : f[0].lineCoordinates.x1), J = b[d]._labels && 0 < b[d]._labels.length ? b[d]._labels[b[d]._labels.length - 1].textBlock.height / 2 : 10, m = Math.round(g.y1 + K + T < Math.max(J, 10) ? Math.max(J, 10) : g.y1 + K + T), n = Math.round(a[0] ? a[0].lineCoordinates.x1 :
                                f[0].lineCoordinates.x1), J = 0 < a.length ? 0 : b[d]._labels && 0 < b[d]._labels.length ? b[d]._labels[0].textBlock.height / 2 : 10, l = Math.round(g.y2 - X - e - J), b[d].lineCoordinates = {
                                x1: n - V,
                                y1: m,
                                x2: n - V,
                                y2: l,
                                height: Math.abs(l - m)
                            }, b[d].bounds = {
                                x1: h - (C[d] + V),
                                y1: m,
                                x2: n,
                                y2: l,
                                width: n - h,
                                height: l - m
                            }, b[d].title && (b[d]._titleTextBlock.maxWidth = 0 < b[d].titleMaxWidth && b[d].titleMaxWidth < b[d].lineCoordinates.height ? b[d].titleMaxWidth : b[d].lineCoordinates.height), V += C[d] + b[d].margin);
                        if (c && 0 < c.length)
                            for (d = 0; d < c.length; d++) c[d] && (h =
                                Math.round(a[0] ? a[0].lineCoordinates.x2 : f[0].lineCoordinates.x2), n = Math.round(h), J = c[d]._labels && 0 < c[d]._labels.length ? c[d]._labels[c[d]._labels.length - 1].textBlock.height / 2 : 0, m = Math.round(g.y1 + K + T < Math.max(J, 10) ? Math.max(J, 10) : g.y1 + K + T), J = 0 < a.length ? 0 : c[d]._labels && 0 < c[d]._labels.length ? c[d]._labels[0].textBlock.height / 2 : 0, l = Math.round(g.y2 - (X + e + J)), c[d].lineCoordinates = {
                                    x1: h + U,
                                    y1: m,
                                    x2: h + U,
                                    y2: l,
                                    height: Math.abs(l - m)
                                }, c[d].bounds = {
                                    x1: h,
                                    y1: m,
                                    x2: n + (G[d] + U),
                                    y2: l,
                                    width: n - h,
                                    height: l - m
                                }, c[d].title && (c[d]._titleTextBlock.maxWidth =
                                    0 < c[d].titleMaxWidth && c[d].titleMaxWidth < c[d].lineCoordinates.height ? c[d].titleMaxWidth : c[d].lineCoordinates.height), U += G[d] + c[d].margin);
                        if (a && 0 < a.length)
                            for (d = 0; d < a.length; d++) a[d] && (a[d].calculateValueToPixelConversionParameters(), a[d].calculateBreaksSizeInValues(), a[d]._labels && 1 < a[d]._labels.length && (A = (a[d].logarithmic ? Math.log(a[d]._labels[1].position / a[d].viewportMinimum) / a[d].conversionParameters.lnLogarithmBase : a[d]._labels[1].position - a[d].viewportMinimum) * Math.abs(a[d].conversionParameters.pixelPerUnit) +
                                a[d].lineCoordinates.x1, h = a[d]._labels[a[d]._labels.length - ("dateTime" === a[d].chart.plotInfo.axisXValueType ? 2 : 1)].position, h = a[d].getAppearentDifferceReplacingBreaksToSize(a[d].viewportMinimum, h), H = a[d].logarithmic ? (1 < h ? Math.log(h) / a[d].conversionParameters.lnLogarithmBase * Math.abs(a[d].conversionParameters.pixelPerUnit) : 0) + a[d].lineCoordinates.x1 : (0 < h ? h * Math.abs(a[d].conversionParameters.pixelPerUnit) : 0) + a[d].lineCoordinates.x1));
                        if (f && 0 < f.length)
                            for (d = 0; d < f.length; d++) f[d].calculateValueToPixelConversionParameters(),
                                f[d].calculateBreaksSizeInValues(), f[d]._labels && 1 < f[d]._labels.length && (A = (f[d].logarithmic ? Math.log(f[d]._labels[1].position / f[d].viewportMinimum) / f[d].conversionParameters.lnLogarithmBase : f[d]._labels[1].position - f[d].viewportMinimum) * Math.abs(f[d].conversionParameters.pixelPerUnit) + f[d].lineCoordinates.x1, h = f[d]._labels[f[d]._labels.length - ("dateTime" === f[d].chart.plotInfo.axisX2ValueType ? 2 : 1)].position, h = f[d].getAppearentDifferceReplacingBreaksToSize(f[d].viewportMinimum, h), H = f[d].logarithmic ?
                                    (1 < h ? Math.log(h) / f[d].conversionParameters.lnLogarithmBase * Math.abs(f[d].conversionParameters.pixelPerUnit) : 0) + f[d].lineCoordinates.x1 : (0 < h ? h * Math.abs(f[d].conversionParameters.pixelPerUnit) : 0) + f[d].lineCoordinates.x1);
                        for (d = 0; d < k.length; d++) "axisY" === k[d].type && (k[d].calculateValueToPixelConversionParameters(), k[d].calculateBreaksSizeInValues());
                        if (0 < r) {
                            if (a && 0 < a.length)
                                for (d = 0; d < a.length; d++) s = Q[r - 1][d] === Q[r][d] ? !0 : !1;
                            else s = !0;
                            if (f && 0 < f.length)
                                for (d = 0; d < f.length; d++) S = M[r - 1][d] === M[r][d] ? !0 : !1;
                            else S = !0;
                            if (b && 0 < b.length)
                                for (d = 0; d < b.length; d++) L = F[r - 1][d] === F[r][d] ? !0 : !1;
                            else L = !0;
                            if (c && 0 < c.length)
                                for (d = 0; d < c.length; d++) N = O[r - 1][d] === O[r][d] ? !0 : !1;
                            else N = !0
                        }
                        if (s && S && L && N) break;
                        r++
                    }
                    q.save();
                    q.beginPath();
                    a[0] && q.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
                    f[0] && q.rect(5, f[f.length - 1].bounds.y1, f[0].chart.width - 10, f[0].bounds.height);
                    q.clip();
                    if (a && 0 < a.length)
                        for (d = 0; d < a.length; d++) a[d].calculateStripLinesThicknessInValues(), a[d].calculateBreaksInPixels(), a[d].renderLabelsTicksAndTitle();
                    if (f && 0 < f.length)
                        for (d = 0; d < f.length; d++) f[d].calculateStripLinesThicknessInValues(), f[d].calculateBreaksInPixels(), f[d].renderLabelsTicksAndTitle();
                    q.restore();
                    if (b && 0 < b.length)
                        for (d = 0; d < b.length; d++) b[d].calculateStripLinesThicknessInValues(), b[d].calculateBreaksInPixels(), b[d].renderLabelsTicksAndTitle();
                    if (c && 0 < c.length)
                        for (d = 0; d < c.length; d++) c[d].calculateStripLinesThicknessInValues(), c[d].calculateBreaksInPixels(), c[d].renderLabelsTicksAndTitle()
                } else {
                    A = [];
                    I = [];
                    u = [];
                    H = [];
                    t = [];
                    Q = [];
                    M = [];
                    for (F = []; 4 > r;) {
                        K = X = aa = U = Z = J = T = e = V = O = W = R = 0;
                        if (a && 0 < a.length)
                            for (u = [], d = X = 0; d < a.length; d++) u.push(Math.ceil(a[d] ? a[d].createLabelsAndCalculateWidth() : 0)), X += u[d], e += a[d] ? a[d].margin : 0;
                        else u.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                        M.push(u);
                        if (f && 0 < f.length)
                            for (H = [], d = K = 0; d < f.length; d++) H.push(Math.ceil(f[d] ? f[d].createLabelsAndCalculateWidth() : 0)), K += H[d], T += f[d] ? f[d].margin : 0;
                        else H.push(Math.ceil(f[0] ? f[0].createLabelsAndCalculateWidth() : 0));
                        F.push(H);
                        if (b && 0 < b.length)
                            for (d = 0; d < b.length; d++) b[d].lineCoordinates = {}, h = Math.round(g.x1 + X + e), n = Math.round(g.x2 - K - T > p.width - 10 ? p.width - 10 : g.x2 - K - T), b[d].labelAutoFit && !y(x) && (0 < !a.length && (h = 0 > b[d].labelAngle ? Math.max(h, x) : 0 === b[d].labelAngle ? Math.max(h, x / 2) : h), 0 < !f.length && (n = 0 < b[d].labelAngle ? n - z / 2 : 0 === b[d].labelAngle ? n - z / 2 : n)), b[d].lineCoordinates.x1 = h, b[d].lineCoordinates.x2 = n, b[d].lineCoordinates.width = Math.abs(n - h), b[d].title && (b[d]._titleTextBlock.maxWidth = 0 < b[d].titleMaxWidth && b[d].titleMaxWidth < b[d].lineCoordinates.width ? b[d].titleMaxWidth : b[d].lineCoordinates.width);
                        if (c && 0 < c.length)
                            for (d = 0; d < c.length; d++) c[d].lineCoordinates = {}, h = Math.round(g.x1 + X + e), n = Math.round(g.x2 - K - T > c[d].chart.width - 10 ? c[d].chart.width - 10 : g.x2 - K - T), c[d] && c[d].labelAutoFit && !y(C) && (0 < !a.length && (h = 0 < c[d].labelAngle ? Math.max(h, C) : 0 === c[d].labelAngle ? Math.max(h, C / 2) : h), 0 < !f.length && (n -= G / 2)), c[d].lineCoordinates.x1 = h, c[d].lineCoordinates.x2 = n, c[d].lineCoordinates.width = Math.abs(n - h), c[d].title && (c[d]._titleTextBlock.maxWidth = 0 < c[d].titleMaxWidth && c[d].titleMaxWidth < c[d].lineCoordinates.width ?
                                c[d].titleMaxWidth : c[d].lineCoordinates.width);
                        if (b && 0 < b.length)
                            for (A = [], d = U = 0; d < b.length; d++) A.push(Math.ceil(b[d] ? b[d].createLabelsAndCalculateHeight() : 0)), U += A[d] + b[d].margin, J += b[d].margin;
                        else A.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                        t.push(A);
                        if (c && 0 < c.length)
                            for (I = [], d = aa = 0; d < c.length; d++) I.push(Math.ceil(c[d] ? c[d].createLabelsAndCalculateHeight() : 0)), aa += I[d], Z += c[d].margin;
                        else I.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                        Q.push(I);
                        if (b && 0 < b.length)
                            for (d =
                                0; d < b.length; d++) 0 < b[d]._labels.length && (l = b[d]._labels[0], m = b[d]._labels[b[d]._labels.length - 1], x = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), z = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)));
                        if (c && 0 < c.length)
                            for (d = 0; d < c.length; d++) c[d] && 0 < c[d]._labels.length && (l = c[d]._labels[0],
                                m = c[d]._labels[c[d]._labels.length - 1], C = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)), G = m.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(m.textBlock.angle)) + (m.textBlock.height - m.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(m.textBlock.angle)));
                        if (p.panEnabled)
                            for (d = 0; d < b.length; d++) A[d] = p.sessionVariables.axisY.height;
                        else
                            for (d = 0; d < b.length; d++) p.sessionVariables.axisY.height =
                                A[d];
                        if (b && 0 < b.length)
                            for (d = b.length - 1; 0 <= d; d--) m = Math.round(g.y2), l = Math.round(g.y2 > b[d].chart.height - 10 ? b[d].chart.height - 10 : g.y2), b[d].lineCoordinates.y1 = m - (A[d] + b[d].margin + R), b[d].lineCoordinates.y2 = m - (A[d] + b[d].margin + R), b[d].bounds = {
                                x1: h,
                                y1: m - (A[d] + R + b[d].margin),
                                x2: n,
                                y2: l - (R + b[d].margin),
                                width: n - h,
                                height: A[d]
                            }, b[d].title && (b[d]._titleTextBlock.maxWidth = 0 < b[d].titleMaxWidth && b[d].titleMaxWidth < b[d].lineCoordinates.width ? b[d].titleMaxWidth : b[d].lineCoordinates.width), R += A[d] + b[d].margin;
                        if (c &&
                            0 < c.length)
                            for (d = c.length - 1; 0 <= d; d--) c[d] && (m = Math.round(g.y1), l = Math.round(g.y1 + (I[d] + c[d].margin + W)), c[d].lineCoordinates.y1 = l, c[d].lineCoordinates.y2 = l, c[d].bounds = {
                                x1: h,
                                y1: m + (c[d].margin + W),
                                x2: n,
                                y2: l,
                                width: n - h,
                                height: aa
                            }, c[d].title && (c[d]._titleTextBlock.maxWidth = 0 < c[d].titleMaxWidth && c[d].titleMaxWidth < c[d].lineCoordinates.width ? c[d].titleMaxWidth : c[d].lineCoordinates.width), W += I[d] + c[d].margin);
                        if (a && 0 < a.length)
                            for (d = 0; d < a.length; d++) {
                                J = a[d]._labels && 0 < a[d]._labels.length ? a[d]._labels[0].textBlock.fontSize /
                                    2 : 0;
                                h = Math.round(g.x1 + e);
                                m = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(J, 10) ? Math.max(J, 10) : g.y1) : g.y1 < Math.max(J, 10) ? Math.max(J, 10) : g.y1;
                                n = Math.round(g.x1 + X + e);
                                l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - U > p.height - Math.max(J, 10) ? p.height - Math.max(J, 10) : g.y2 - U) : g.y2 > p.height - Math.max(J, 10) ? p.height - Math.max(J, 10) : g.y2;
                                if (b && 0 < b.length)
                                    for (J = 0; J < b.length; J++) b[J] && b[J].labelAutoFit && (n = 0 > b[J].labelAngle ? Math.max(n, x) : 0 === b[J].labelAngle ? Math.max(n, x / 2) : n, h =
                                        0 > b[J].labelAngle || 0 === b[J].labelAngle ? n - X : h);
                                if (c && 0 < c.length)
                                    for (J = 0; J < c.length; J++) c[J] && c[J].labelAutoFit && (n = c[J].lineCoordinates.x1, h = n - X);
                                a[d].lineCoordinates = {
                                    x1: n - O,
                                    y1: m,
                                    x2: n - O,
                                    y2: l,
                                    height: Math.abs(l - m)
                                };
                                a[d].bounds = {
                                    x1: n - (u[d] + O),
                                    y1: m,
                                    x2: n,
                                    y2: l,
                                    width: n - h,
                                    height: l - m
                                };
                                a[d].title && (a[d]._titleTextBlock.maxWidth = 0 < a[d].titleMaxWidth && a[d].titleMaxWidth < a[d].lineCoordinates.height ? a[d].titleMaxWidth : a[d].lineCoordinates.height);
                                a[d].calculateValueToPixelConversionParameters();
                                a[d].calculateBreaksSizeInValues();
                                O += u[d] + a[d].margin
                            }
                        if (f && 0 < f.length)
                            for (d = 0; d < f.length; d++) {
                                J = f[d]._labels && 0 < f[d]._labels.length ? f[d]._labels[0].textBlock.fontSize / 2 : 0;
                                h = Math.round(g.x1 - e);
                                m = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y2 : g.y1 < Math.max(J, 10) ? Math.max(J, 10) : g.y1) : g.y1 < Math.max(J, 10) ? Math.max(J, 10) : g.y1;
                                n = Math.round(g.x2 - K - T);
                                l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y1 : g.y2 - U > p.height - Math.max(J, 10) ? p.height - Math.max(J, 10) : g.y2 - U) : g.y2 > p.height - Math.max(J, 10) ? p.height - Math.max(J, 10) : g.y2;
                                if (b &&
                                    0 < b.length)
                                    for (J = 0; J < b.length; J++) b[J] && b[J].labelAutoFit && (n = 0 > b[J].labelAngle ? Math.max(n, x) : 0 === b[J].labelAngle ? Math.max(n, x / 2) : n, h = 0 > b[J].labelAngle || 0 === b[J].labelAngle ? n - K : h);
                                if (c && 0 < c.length)
                                    for (J = 0; J < c.length; J++) c[J] && c[J].labelAutoFit && (n = c[J].lineCoordinates.x2, h = n - K);
                                f[d].lineCoordinates = {
                                    x1: n + V,
                                    y1: m,
                                    x2: n + V,
                                    y2: l,
                                    height: Math.abs(l - m)
                                };
                                f[d].bounds = {
                                    x1: h,
                                    y1: m,
                                    x2: n + H[d] + V,
                                    y2: l,
                                    width: n - h,
                                    height: l - m
                                };
                                f[d].title && (f[d]._titleTextBlock.maxWidth = 0 < f[d].titleMaxWidth && f[d].titleMaxWidth < f[d].lineCoordinates.height ?
                                    f[d].titleMaxWidth : f[d].lineCoordinates.height);
                                f[d].calculateValueToPixelConversionParameters();
                                f[d].calculateBreaksSizeInValues();
                                V += H[d] + f[d].margin
                            }
                        for (d = 0; d < k.length; d++) "axisY" === k[d].type && (k[d].calculateValueToPixelConversionParameters(), k[d].calculateBreaksSizeInValues());
                        if (0 < r) {
                            if (a && 0 < a.length)
                                for (d = 0; d < a.length; d++) s = M[r - 1][d] === M[r][d] ? !0 : !1;
                            else s = !0;
                            if (f && 0 < f.length)
                                for (d = 0; d < f.length; d++) S = F[r - 1][d] === F[r][d] ? !0 : !1;
                            else S = !0;
                            if (b && 0 < b.length)
                                for (d = 0; d < b.length; d++) L = t[r - 1][d] === t[r][d] ?
                                    !0 : !1;
                            else L = !0;
                            if (c && 0 < c.length)
                                for (d = 0; d < c.length; d++) N = Q[r - 1][d] === Q[r][d] ? !0 : !1;
                            else N = !0
                        }
                        if (s && S && L && N) break;
                        r++
                    }
                    if (b && 0 < b.length)
                        for (d = 0; d < b.length; d++) b[d].calculateBreaksInPixels(), b[d].renderLabelsTicksAndTitle();
                    if (c && 0 < c.length)
                        for (d = 0; d < c.length; d++) c[d].calculateBreaksInPixels(), c[d].renderLabelsTicksAndTitle();
                    if (a && 0 < a.length)
                        for (d = 0; d < a.length; d++) a[d].calculateBreaksInPixels(), a[d].renderLabelsTicksAndTitle();
                    if (f && 0 < f.length)
                        for (d = 0; d < f.length; d++) f[d].calculateBreaksInPixels(),
                            f[d].renderLabelsTicksAndTitle()
                }
            p.preparePlotArea();
            g = p.plotArea;
            q.save();
            q.beginPath();
            q.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
            q.clip();
            if (a && 0 < a.length)
                for (d = 0; d < k.length; d++) k[d].renderStripLinesOfThicknessType("value");
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("value");
            if (a &&
                0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderInterlacedColors();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderInterlacedColors();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderInterlacedColors();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderInterlacedColors();
            q.restore();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderGrid(), w && (a[d].createMask(), a[d].renderBreaksBackground());
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderGrid(), w && (f[d].createMask(), f[d].renderBreaksBackground());
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderGrid(), w && (b[d].createMask(), b[d].renderBreaksBackground());
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderGrid(), w && (c[d].createMask(), c[d].renderBreaksBackground());
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderAxisLine();
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderAxisLine();
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderAxisLine();
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderAxisLine();
            if (a && 0 < a.length)
                for (d = 0; d < a.length; d++) a[d].renderStripLinesOfThicknessType("pixel");
            if (f && 0 < f.length)
                for (d = 0; d < f.length; d++) f[d].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length)
                for (d = 0; d < b.length; d++) b[d].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length)
                for (d = 0; d < c.length; d++) c[d].renderStripLinesOfThicknessType("pixel")
        };
        C.prototype.calculateStripLinesThicknessInValues = function() {
            for (var a = 0; a < this.stripLines.length; a++)
                if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                    var f = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        b = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        f = this.getAppearentDifferceReplacingBreaksToSize(f, b);
                    this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(this.stripLines[a].endValue / this.stripLines[a].startValue) / Math.log(f)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - f) / 2;
                    this.stripLines[a].thickness = f;
                    this.stripLines[a]._thicknessType = "value"
                }
        };
        C.prototype.calculateBreaksSizeInValues = function() {
            for (var a =
                    "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, f = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], b = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), c = 0; c < f.length; c++) f[c].spacing = Q(f[c].spacing, a, 12, 0.1 * a, 0) << 0, f[c].size = 0 > f[c].spacing ? 0 : Math.abs(f[c].spacing /
                b), this.logarithmic && (f[c].size = Math.pow(this.logarithmBase, f[c].size))
        };
        C.prototype.calculateBreaksInPixels = function() {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var f = 0; f < a.length && !(a[f].startValue > this.conversionParameters.maximum); f++) a[f].endValue < this.conversionParameters.minimum || (y(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex =
                    f), a[f].startValue >= this.conversionParameters.minimum && (a[f].startPixel = this.convertValueToPixel(a[f].startValue), this.scaleBreaks.lastBreakIndex = f), a[f].endValue <= this.conversionParameters.maximum && (a[f].endPixel = this.convertValueToPixel(a[f].endValue)))
            }
        };
        C.prototype.renderLabelsTicksAndTitle = function() {
            var a = this,
                f = !1,
                b = 0,
                c = 0,
                e = 1,
                g = 0,
                h = !1;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic &&
                        !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, m, n = this.viewportMaximum, l = this.lineCoordinates.width / Math.log(this.range), p = this._labels.length - 1; 0 <= p; p--)
                            if (k = this._labels[p], this._labels[p].breaksLabelType) b.push(k);
                            else {
                                if (k.position < this.viewportMinimum) break;
                                k.position > this.viewportMaximum || !(p === this._labels.length - 1 || m < Math.log(n / k.position) * l / e) || (b.push(k), n = k.position, m = k.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) +
                                    k.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                            }
                        this._labels = b
                    } else {
                        for (p = 0; p < this._labels.length; p++) k = this._labels[p], k.position < this.viewportMinimum || k.breaksLabelType || (m = k.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + k.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m);
                        b > this.lineCoordinates.width * e && this.labelAutoFit && (f = !0)
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var b = [], q, n = this.viewportMaximum, l = this.lineCoordinates.height / Math.log(this.range), p = this._labels.length - 1; 0 <= p; p--)
                            if (k = this._labels[p], this._labels[p].breaksLabelType) k = this._labels[p];
                            else {
                                if (k.position < this.viewportMinimum) break;
                                k.position > this.viewportMaximum || !(p === this._labels.length - 1 || q < Math.log(n / k.position) * l) || (b.push(k), n = k.position, q = k.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + k.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                            }
                        this._labels = b
                    } else {
                        for (p =
                            0; p < this._labels.length; p++) this._labels[p].breaksLabelType || (k = this._labels[p], k.position < this.viewportMinimum || (q = k.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + k.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += q));
                        c > this.lineCoordinates.height * e && this.labelAutoFit && (f = !0)
                    }
            }
            this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a, b) {
                return a.position - b.position
            });
            var p = 0,
                k, d;
            if ("bottom" === this._position) {
                for (c = 0; 2 > c; c++) {
                    e =
                        null;
                    for (p = 0; p < this._labels.length; p++) k = this._labels[p], k.position < this.viewportMinimum || (k.position > this.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && this.labelAutoFit && h) || (d = this.getPixelCoordinatesOnAxis(k.position), this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, m = 1 === this.ctx.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, this.ctx.beginPath(), this.ctx.moveTo(m, d.y << 0), this.ctx.lineTo(m, d.y + this.tickLength << 0), this.ctx.stroke()),
                        0 === k.textBlock.angle ? (d.x -= k.textBlock.width / 2, d.y = "inside" === this.labelPlacement ? d.y - (this.tickLength + k.textBlock.fontSize / 2) : d.y + this.tickLength + k.textBlock.fontSize / 2) : (d.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? d.x : d.x - k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : d.x - (0 > this.labelAngle ? k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), d.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? d.y - this.tickLength - 5 : d.y - this.tickLength - Math.abs(k.textBlock.width * Math.sin(Math.PI /
                            180 * this.labelAngle) + 5) : d.y + this.tickLength + Math.abs(0 > this.labelAngle ? k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), k.textBlock.x = d.x, k.textBlock.y = d.y, "start" === k.breaksLabelType ? (e = k, k.skipFlag = !1) : "end" === k.breaksLabelType ? (k.skipFlag = !1, e && (m = this.reversed ? -k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - Math.abs(e.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) - 2 : e.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(k.textBlock.height * Math.sin(Math.PI /
                            180 * this.labelAngle)) + 2, m -= k.textBlock.x - e.textBlock.x, k.textBlock.x += m / 2, e.textBlock.x -= m / 2)) : (0 < p && "end" === this._labels[p - 1].breaksLabelType && (k.skipFlag = this.reversed ? 0 < this._labels[p - 1].textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(k.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) + k.textBlock.x - this._labels[p - 1].textBlock.x : 0 < k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(this._labels[p - 1].textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) + this._labels[p -
                            1].textBlock.x - k.textBlock.x), !k.skipFlag && (p < this._labels.length - 1 && "start" === this._labels[p + 1].breaksLabelType) && (k.skipFlag = this.reversed ? 0 < k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(this._labels[p + 1].textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) + this._labels[p + 1].textBlock.x - k.textBlock.x : 0 < this._labels[p + 1].textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(k.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) + k.textBlock.x - this._labels[p + 1].textBlock.x)));
                    h = !0
                }
                "inside" === this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (p = 0; p < a._labels.length; p++)
                        if (k = a._labels[p], !(k.position < a.viewportMinimum || k.position > a.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && a.labelAutoFit && h) && (d = a.getPixelCoordinatesOnAxis(k.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, d.y << 0);
                            a.ctx.lineTo(b,
                                d.y - a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("top" === this._position) {
                for (c = 0; 2 > c; c++) {
                    e = null;
                    for (p = 0; p < this._labels.length; p++) k = this._labels[p], k.position < this.viewportMinimum ||
                        (k.position > this.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && this.labelAutoFit && h) || (d = this.getPixelCoordinatesOnAxis(k.position), this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, m = 1 === this.ctx.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, this.ctx.beginPath(), this.ctx.moveTo(m, d.y << 0), this.ctx.lineTo(m, d.y - this.tickLength << 0), this.ctx.stroke()), 0 === k.textBlock.angle ? (d.x -= k.textBlock.width / 2, d.y = "inside" === this.labelPlacement ?
                            d.y + this.labelFontSize / 2 + this.tickLength + 5 : d.y - k.textBlock.height / 2 - this.tickLength - 5) : (d.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? d.x : d.x - k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : d.x + (k.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), d.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? d.y + this.tickLength + 5 : d.y - k.textBlock.width * Math.sin(Math.PI / 180 *
                            this.labelAngle) + this.tickLength + 5 : d.y - this.tickLength + (k.textBlock.height / 2 * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0))), k.textBlock.x = d.x, k.textBlock.y = d.y, "start" === k.breaksLabelType ? (e = k, k.skipFlag = !1) : "end" === k.breaksLabelType ? (k.skipFlag = !1, e && (m = 0 >= this.labelAngle === this.reversed ? k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(e.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) + 2 : e.textBlock.width *
                            Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(k.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) + 2, this.reversed && (m *= -1), m -= k.textBlock.x - e.textBlock.x, k.textBlock.x += m / 2, e.textBlock.x -= m / 2)) : (0 < p && "end" === this._labels[p - 1].breaksLabelType && (k.skipFlag = 0 < k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (0 >= this.labelAngle === this.reversed ? Math.abs(this._labels[p - 1].textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) : Math.abs(k.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle))) +
                            (this._labels[p - 1].textBlock.x - k.textBlock.x) * (this.reversed ? -1 : 1)), !k.skipFlag && (p < this._labels.length - 1 && "start" === this._labels[p + 1].breaksLabelType) && (k.skipFlag = 0 < this._labels[p + 1].textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (0 > this.labelAngle === this.reversed ? Math.abs(k.textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle)) : Math.abs(this._labels[p + 1].textBlock.height * Math.sin(Math.PI / 180 * this.labelAngle))) + (k.textBlock.x - this._labels[p + 1].textBlock.x) * (this.reversed ? -1 : 1))));
                    h = !0
                }
                "inside" ===
                this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (p = 0; p < a._labels.length; p++)
                        if (k = a._labels[p], !(k.position < a.viewportMinimum || k.position > a.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && a.labelAutoFit && h) && (d = a.getPixelCoordinatesOnAxis(k.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === this.ctx.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, d.y << 0);
                            a.ctx.lineTo(b,
                                d.y + a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (c = 0; 2 > c; c++) {
                    e = null;
                    for (p = 0; p < this._labels.length; p++) k = this._labels[p], k.position < this.viewportMinimum || (k.position > this.viewportMaximum ||
                        !!k.breaksLabelType === h || f && 0 !== g++ % 2 && this.labelAutoFit && h) || (d = this.getPixelCoordinatesOnAxis(k.position), this.tickThickness && "inside" != this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, m = 1 === this.ctx.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, this.ctx.beginPath(), this.ctx.moveTo(d.x << 0, m), this.ctx.lineTo(d.x - this.tickLength << 0, m), this.ctx.stroke()), 0 === this.labelAngle ? (k.textBlock.y = d.y, k.textBlock.x = "inside" === this.labelPlacement ? d.x + this.tickLength + 5 : d.x - k.textBlock.width *
                            Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5) : (k.textBlock.y = "inside" === this.labelPlacement ? d.y : d.y - k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), k.textBlock.x = "inside" === this.labelPlacement ? d.x + this.tickLength + 5 : 0 < this.labelAngle ? d.x - k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : d.x - k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (k.textBlock.height - k.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength), "start" ===
                        k.breaksLabelType ? (e = k, k.skipFlag = !1) : "end" === k.breaksLabelType ? (k.skipFlag = !1, e && (m = this.reversed ? k.textBlock.y - e.textBlock.y - k.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) - Math.abs(e.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) : e.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) + k.textBlock.y - e.textBlock.y, k.textBlock.y -= m / 2, e.textBlock.y += m / 2)) : (0 < p && "end" === this._labels[p - 1].breaksLabelType && (k.skipFlag =
                            this.reversed ? 0 < this._labels[p - 1].textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - k.textBlock.y + this._labels[p - 1].textBlock.y : 0 < k.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(this._labels[p - 1].textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - this._labels[p - 1].textBlock.y + k.textBlock.y), !k.skipFlag && (p < this._labels.length - 1 && "start" === this._labels[p + 1].breaksLabelType) && (k.skipFlag = this.reversed ? 0 < k.textBlock.height *
                            Math.cos(Math.PI / 180 * this.labelAngle) + Math.abs(this._labels[p + 1].textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - this._labels[p + 1].textBlock.y + k.textBlock.y : 0 < this._labels[p + 1].textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + this._labels[p + 1].textBlock.y + Math.abs(k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle)) - k.textBlock.y)));
                    h = !0
                }
                "inside" === this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (p = 0; p < a._labels.length; p++)
                        if (k = a._labels[p], !(k.position < a.viewportMinimum || k.position > a.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && a.labelAutoFit && h) && (d = a.getPixelCoordinatesOnAxis(k.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(d.x << 0, b);
                            a.ctx.lineTo(d.x + a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 +
                    1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("right" === this._position) {
                for (c = 0; 2 > c; c++) {
                    e = null;
                    for (p = 0; p < this._labels.length; p++) k = this._labels[p], k.position < this.viewportMinimum || (k.position > this.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && this.labelAutoFit && h) || (d = this.getPixelCoordinatesOnAxis(k.position), this.tickThickness && "inside" !=
                        this.labelPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, m = 1 === this.ctx.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, this.ctx.beginPath(), this.ctx.moveTo(d.x << 0, m), this.ctx.lineTo(d.x + this.tickLength << 0, m), this.ctx.stroke()), 0 === this.labelAngle ? (k.textBlock.y = d.y, k.textBlock.x = "inside" === this.labelPlacement ? d.x - k.textBlock.width - this.tickLength - 5 : d.x + this.tickLength + 5) : (k.textBlock.y = "inside" === this.labelPlacement ? d.y - k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) :
                            0 > this.labelAngle ? d.y : d.y - (k.textBlock.height - k.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), k.textBlock.x = "inside" === this.labelPlacement ? d.x - k.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : 0 < this.labelAngle ? d.x - (k.textBlock.height - k.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : d.x + this.tickLength + 5), "start" === k.breaksLabelType ? (e = k, k.skipFlag = !1) : "end" === k.breaksLabelType ? (k.skipFlag = !1, e && (m = this.reversed ? k.textBlock.y -
                            e.textBlock.y - k.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) - e.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : e.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + d.y - e.textBlock.y, k.textBlock.y -= m / 2, e.textBlock.y += m / 2)) : (0 < p && "end" === this._labels[p - 1].breaksLabelType && (k.skipFlag = this.reversed ? 0 < this._labels[p - 1].textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + k.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - k.textBlock.y + this._labels[p - 1].textBlock.y : 0 < k.textBlock.height *
                            Math.cos(Math.PI / 180 * this.labelAngle) + this._labels[p - 1].textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - this._labels[p - 1].textBlock.y + k.textBlock.y), !k.skipFlag && (p < this._labels.length - 1 && "start" === this._labels[p + 1].breaksLabelType) && (k.skipFlag = this.reversed ? 0 < k.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + this._labels[p + 1].textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - this._labels[p + 1].textBlock.y + k.textBlock.y : 0 < this._labels[p + 1].textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) +
                            this._labels[p + 1].textBlock.y + d.y - 2 * k.textBlock.y)));
                    h = !0
                }
                "inside" === this.labelPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
                    for (p = 0; p < a._labels.length; p++)
                        if (k = a._labels[p], !(k.position < a.viewportMinimum || k.position > a.viewportMaximum || !!k.breaksLabelType === h || f && 0 !== g++ % 2 && a.labelAutoFit && h) && (d = a.getPixelCoordinatesOnAxis(k.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(d.x << 0, b);
                            a.ctx.lineTo(d.x - a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            }
            for (p = 0; p < this._labels.length; p++)
                if (k = this._labels[p], textBlock1 = k.textBlock, k.breaksLabelType)
                    for (c = 0; c < p &&
                        !k.skipFlag; c++) this._labels[c].breaksLabelType && (textBlock2 = this._labels[c].textBlock, m = Math.sqrt(Math.pow(textBlock1.x - textBlock2.x, 2) + Math.pow(textBlock1.y - textBlock2.y, 2)), "left" === this._position || "right" === this._position ? (e = Math.abs(m * Math.sin(Math.PI * this.labelAngle / 180)), b = m * Math.cos(Math.PI * this.labelAngle / 180), q = textBlock1.y > textBlock2.y ? textBlock2.height : textBlock1.height, m = textBlock1.y > textBlock2.y ? textBlock1.width : textBlock2.width) : (e = m * Math.cos(Math.PI * this.labelAngle / 180), b = Math.abs(m *
                        Math.sin(Math.PI * this.labelAngle / 180)), q = textBlock1.x > textBlock2.x === 0 < this.labelAngle ? textBlock1.height : textBlock2.height, m = textBlock1.x > textBlock2.x ? textBlock2.width : textBlock1.width), k.skipFlag = e < m && b < q);
            g = 0;
            if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationIterationEnd", function() {
                for (p = 0; p < a._labels.length; p++) k = a._labels[p], k.position < a.viewportMinimum || (k.position > a.viewportMaximum || f && 0 !== g++ % 2 && a.labelAutoFit && !k.breaksLabelType || k.skipFlag) || (a.ctx.save(), a.ctx.beginPath(),
                    k.textBlock.render(!0), a.ctx.restore())
            }, k.textBlock);
            else
                for (p = 0; p < this._labels.length; p++) k = this._labels[p], k.position < this.viewportMinimum || (k.position > this.viewportMaximum || f && 0 !== g++ % 2 && this.labelAutoFit && !k.breaksLabelType || k.skipFlag) || k.textBlock.render(!0)
        };
        C.prototype.renderInterlacedColors = function() {
            var a = this.chart.plotArea.ctx,
                f, b, c = this.chart.plotArea,
                e = 0;
            f = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) f ?
                    (f = this.getPixelCoordinatesOnAxis(this._labels[e].position), b = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(b.x, f.x), c.y1, Math.abs(b.x - f.x), Math.abs(c.y1 - c.y2)), f = !1) : f = !0;
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) f ? (b = this.getPixelCoordinatesOnAxis(this._labels[e].position), f = e + 1 >
                    this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(c.x1, Math.min(b.y, f.y), Math.abs(c.x1 - c.x2), Math.abs(f.y - b.y)), f = !1) : f = !0;
            a.beginPath()
        };
        C.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                for (var f = this, b, c = 0, e = 0, g = !1, h = !1, m = [], n = [], h = !1, c = 0; c < this.stripLines.length; c++) {
                    var l = this.stripLines[c];
                    l._thicknessType === a && ("pixel" === a && (l.value < this.viewportMinimum ||
                        l.value > this.viewportMaximum || y(l.value) || isNaN(this.range)) || m.push(l))
                }
                for (c = 0; c < this._stripLineLabels.length; c++)
                    if (l = this.stripLines[c], b = this._stripLineLabels[c], !(b.position < this.viewportMinimum || b.position > this.viewportMaximum || isNaN(this.range))) {
                        a = this.getPixelCoordinatesOnAxis(b.position);
                        if ("outside" === b.stripLine.labelPlacement)
                            if (l && (this.ctx.strokeStyle = l.color, "pixel" === l._thicknessType && (this.ctx.lineWidth = l.thickness)), "bottom" === this._position) {
                                var p = 1 === this.ctx.lineWidth % 2 ? (a.x <<
                                    0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(p, a.y << 0);
                                this.ctx.lineTo(p, a.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y += this.tickLength + b.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                            } else "top" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p,
                                    a.y << 0), this.ctx.lineTo(p, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= b.textBlock.width / 2, a.y -= this.tickLength + b.textBlock.height) : (a.x += (b.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (b.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" ===
                                this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= b.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - b.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (b.textBlock.height -
                                    b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x + this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (b.textBlock.height - b.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI /
                                    180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                        else b.textBlock.angle = -90, "bottom" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? y(l.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, y(l.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize /
                                2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y1 + b.textBlock.width + 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ?
                            (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.height - 3, b.textBlock.measureText(), a.x - b.textBlock.height > this.chart.plotArea.x1 ? y(l.startValue) ? a.x -= b.textBlock.height - b.textBlock.fontSize / 2 : a.x -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3 : (b.textBlock.angle = 90, y(l.startValue) ? a.x += b.textBlock.height - b.textBlock.fontSize / 2 : a.x += b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3), a.y = -90 === b.textBlock.angle ? "near" === b.stripLine.labelAlign ?
                                this.chart.plotArea.y1 + b.textBlock.width + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + b.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === b.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - b.textBlock.width) / 2 : this.chart.plotArea.y2 - b.textBlock.width - 3) : "left" === this._position ? (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth :
                                this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - b.textBlock.height > this.chart.plotArea.y1 ? y(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3 : a.y - b.textBlock.height < this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : y(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === b.stripLine.labelAlign ?
                                (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x2 - b.textBlock.width - 3) : "right" === this._position && (b.textBlock.maxWidth = this.options.stripLines[c].labelMaxWidth ? this.options.stripLines[c].labelMaxWidth : this.chart.plotArea.width - 3, b.textBlock.angle = 0, b.textBlock.measureText(), a.y - +b.textBlock.height > this.chart.plotArea.y1 ? y(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 - 3 : a.y - b.textBlock.height <
                                this.chart.plotArea.y2 ? a.y += b.textBlock.fontSize / 2 + 3 : y(l.startValue) ? a.y -= b.textBlock.height - b.textBlock.fontSize / 2 : a.y -= b.textBlock.height / 2 - b.textBlock.fontSize / 2 + 3, a.x = "near" === b.stripLine.labelAlign ? this.chart.plotArea.x2 - b.textBlock.width - 3 : "center" === b.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - b.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                        b.textBlock.x = a.x;
                        b.textBlock.y = a.y;
                        n.push(b)
                    }
                if (!h) {
                    h = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1,
                        this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (c = 0; c < m.length; c++) l = m[c], l.showOnTop ? g || (g = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                        this.ctx.clip();
                        for (e = 0; e < m.length; e++) l = m[e], l.showOnTop && l.render();
                        this.ctx.restore()
                    }, l)) : l.render();
                    for (c = 0; c < n.length; c++) b = n[c], b.stripLine.showOnTop ?
                        h || (h = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                            for (e = 0; e < n.length; e++) b = n[e], "inside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && (f.ctx.save(), f.ctx.beginPath(), f.ctx.rect(f.chart.plotArea.x1, f.chart.plotArea.y1, f.chart.plotArea.width, f.chart.plotArea.height), f.ctx.clip(), b.textBlock.render(!0), f.ctx.restore())
                        }, b.textBlock)) : "inside" === b.stripLine.labelPlacement && b.textBlock.render(!0);
                    this.ctx.restore();
                    h = !0
                }
                if (h)
                    for (h = !1, c = 0; c < n.length; c++) b = n[c], b.stripLine.showOnTop ?
                        h || (h = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                            for (e = 0; e < n.length; e++) b = n[e], "outside" === b.stripLine.labelPlacement && b.stripLine.showOnTop && b.textBlock.render(!0)
                        }, b.textBlock)) : "outside" === b.stripLine.labelPlacement && b.textBlock.render(!0)
            }
        };
        C.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,
                this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
        };
        C.prototype.createMask = function() {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                w ? (this.maskCanvas = ta(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas =
                    this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var f = 0; f < a.length; f++) a[f].endValue < this.viewportMinimum || (a[f].startValue > this.viewportMaximum || isNaN(this.range)) || a[f].render(this.maskCtx);
                this.maskCtx.restore()
            }
        };
        C.prototype.renderCrosshair = function(a, f) {
            this.crosshair.render(a, f)
        };
        C.prototype.renderGrid =
            function() {
                if (this.gridThickness && 0 < this.gridThickness) {
                    var a = this.chart.ctx;
                    a.save();
                    var f, b = this.chart.plotArea;
                    a.lineWidth = this.gridThickness;
                    a.strokeStyle = this.gridColor;
                    a.setLineDash && a.setLineDash(G(this.gridDashType, this.gridThickness));
                    if ("bottom" === this._position || "top" === this._position)
                        for (c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[c].position),
                            f = 1 === a.lineWidth % 2 ? (f.x << 0) + 0.5 : f.x << 0, a.moveTo(f, b.y1 << 0), a.lineTo(f, b.y2 << 0), a.stroke());
                    else if ("left" === this._position || "right" === this._position)
                        for (var c = 0; c < this._labels.length; c++) this._labels[c].position < this.viewportMinimum || (this._labels[c].position > this.viewportMaximum || this._labels[c].breaksLabelType) || (a.beginPath(), f = this.getPixelCoordinatesOnAxis(this._labels[c].position), f = 1 === a.lineWidth % 2 ? (f.y << 0) + 0.5 : f.y << 0, a.moveTo(b.x1 << 0, f), a.lineTo(b.x2 << 0, f), a.stroke());
                    a.restore()
                }
            };
        C.prototype.renderAxisLine =
            function() {
                var a = this.chart.ctx,
                    f = w ? this.chart._preRenderCtx : a,
                    b = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                    c = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                    e, g;
                f.save();
                if ("bottom" === this._position || "top" === this._position) {
                    if (this.lineThickness) {
                        this.reversed ? (e = this.lineCoordinates.x2, g = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, g = this.lineCoordinates.x2);
                        f.lineWidth = this.lineThickness;
                        f.strokeStyle = this.lineColor ? this.lineColor : "black";
                        f.setLineDash && f.setLineDash(G(this.lineDashType,
                            this.lineThickness));
                        var h = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                        f.beginPath();
                        if (this.scaleBreaks && !y(this.scaleBreaks.firstBreakIndex))
                            if (y(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                            else
                                for (var m = this.scaleBreaks.firstBreakIndex; m <= this.scaleBreaks.lastBreakIndex; m++) f.moveTo(e, h), f.lineTo(this.scaleBreaks._appliedBreaks[m].startPixel + b, h), e = this.scaleBreaks._appliedBreaks[m].endPixel +
                                    c;
                        e && (f.moveTo(e, h), f.lineTo(g, h));
                        f.stroke()
                    }
                } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                    this.reversed ? (e = this.lineCoordinates.y1, g = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, g = this.lineCoordinates.y1);
                    f.lineWidth = this.lineThickness;
                    f.strokeStyle = this.lineColor;
                    f.setLineDash && f.setLineDash(G(this.lineDashType, this.lineThickness));
                    h = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                    f.beginPath();
                    if (this.scaleBreaks &&
                        !y(this.scaleBreaks.firstBreakIndex))
                        if (y(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                        else
                            for (m = this.scaleBreaks.firstBreakIndex; m <= this.scaleBreaks.lastBreakIndex; m++) f.moveTo(h, e), f.lineTo(h, this.scaleBreaks._appliedBreaks[m].startPixel + c), e = this.scaleBreaks._appliedBreaks[m].endPixel + b;
                    e && (f.moveTo(h, e), f.lineTo(h, g));
                    f.stroke()
                }
                w && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx &&
                    this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), f.clearRect(0, 0, this.chart.width, this.chart.height));
                f.restore()
            };
        C.prototype.getPixelCoordinatesOnAxis = function(a) {
            var f = {};
            if ("bottom" === this._position || "top" === this._position) f.x = this.convertValueToPixel(a), f.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position) f.y = this.convertValueToPixel(a), f.x = this.lineCoordinates.x2;
            return f
        };
        C.prototype.convertPixelToValue = function(a) {
            if ("undefined" ===
                typeof a) return null;
            var f = 0,
                b = 0,
                c, f = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                b = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = c = Math.pow(this.logarithmBase, (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (b <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < e.length; b++) {
                        if (!(e[b].endValue < this.conversionParameters.minimum))
                            if (f)
                                if (e[b].startValue <
                                    this.conversionParameters.minimum) {
                                    if (1 < e[b].size && this.conversionParameters.minimum * Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size)) < e[b].endValue) {
                                        a = Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size));
                                        break
                                    } else a *= e[b].endValue / this.conversionParameters.minimum / Math.pow(e[b].size, Math.log(e[b].endValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue)), c /= Math.pow(e[b].size, Math.log(e[b].endValue / this.conversionParameters.minimum) /
                                        Math.log(e[b].endValue / e[b].startValue));
                                    f = !1
                                } else if (c > e[b].startValue / this.conversionParameters.minimum) {
                            c /= e[b].startValue / this.conversionParameters.minimum;
                            if (c < e[b].size) {
                                a *= Math.pow(e[b].endValue / e[b].startValue, 1 === e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) / c;
                                break
                            } else a *= e[b].endValue / e[b].startValue / e[b].size;
                            c /= e[b].size;
                            f = !1
                        } else break;
                        else if (c > e[b].startValue / e[b - 1].endValue) {
                            c /= e[b].startValue / e[b - 1].endValue;
                            if (c < e[b].size) {
                                a *= Math.pow(e[b].endValue / e[b].startValue, 1 === e[b].size ?
                                    1 : Math.log(c) / Math.log(e[b].size)) / c;
                                break
                            } else a *= e[b].endValue / e[b].startValue / e[b].size;
                            c /= e[b].size
                        } else break
                    } else
                        for (b = e.length - 1; 0 <= b; b--)
                            if (!(e[b].startValue > this.conversionParameters.minimum))
                                if (f)
                                    if (e[b].endValue > this.conversionParameters.minimum) {
                                        if (1 < e[b].size && this.conversionParameters.minimum * Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size)) > e[b].startValue) {
                                            a = Math.pow(e[b].endValue / e[b].startValue, Math.log(c) / Math.log(e[b].size));
                                            break
                                        } else a *= e[b].startValue /
                                            this.conversionParameters.minimum * Math.pow(e[b].size, Math.log(e[b].startValue / this.conversionParameters.minimum) / Math.log(e[b].endValue / e[b].startValue)) * c, c *= Math.pow(e[b].size, Math.log(this.conversionParameters.minimum / e[b].startValue) / Math.log(e[b].endValue / e[b].startValue));
                                        f = !1
                                    } else if (c < e[b].endValue / this.conversionParameters.minimum) {
                    c /= e[b].endValue / this.conversionParameters.minimum;
                    if (c > 1 / e[b].size) {
                        a *= Math.pow(e[b].endValue / e[b].startValue, 1 >= e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) *
                            c;
                        break
                    } else a /= e[b].endValue / e[b].startValue / e[b].size;
                    c *= e[b].size;
                    f = !1
                } else break;
                else if (c < e[b].endValue / e[b + 1].startValue) {
                    c /= e[b].endValue / e[b + 1].startValue;
                    if (c > 1 / e[b].size) {
                        a *= Math.pow(e[b].endValue / e[b].startValue, 1 >= e[b].size ? 1 : Math.log(c) / Math.log(e[b].size)) * c;
                        break
                    } else a /= e[b].endValue / e[b].startValue / e[b].size;
                    c *= e[b].size
                } else break;
                f = a * this.viewportMinimum
            } else {
                a = c = (b - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
                if (b <= this.conversionParameters.reference ===
                    ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (b = 0; b < e.length; b++) {
                        if (!(e[b].endValue < this.conversionParameters.minimum))
                            if (f)
                                if (e[b].startValue < this.conversionParameters.minimum) {
                                    if (e[b].size && this.conversionParameters.minimum + c * (e[b].endValue - e[b].startValue) / e[b].size < e[b].endValue) {
                                        a = 0 >= e[b].size ? 0 : c * (e[b].endValue - e[b].startValue) / e[b].size;
                                        break
                                    } else a += e[b].endValue - this.conversionParameters.minimum - e[b].size * (e[b].endValue - this.conversionParameters.minimum) / (e[b].endValue -
                                        e[b].startValue), c -= e[b].size * (e[b].endValue - this.conversionParameters.minimum) / (e[b].endValue - e[b].startValue);
                                    f = !1
                                } else if (c > e[b].startValue - this.conversionParameters.minimum) {
                            c -= e[b].startValue - this.conversionParameters.minimum;
                            if (c < e[b].size) {
                                a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) - c;
                                break
                            } else a += e[b].endValue - e[b].startValue - e[b].size;
                            c -= e[b].size;
                            f = !1
                        } else break;
                        else if (c > e[b].startValue - e[b - 1].endValue) {
                            c -= e[b].startValue - e[b - 1].endValue;
                            if (c < e[b].size) {
                                a += (e[b].endValue -
                                    e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) - c;
                                break
                            } else a += e[b].endValue - e[b].startValue - e[b].size;
                            c -= e[b].size
                        } else break
                    } else
                        for (b = e.length - 1; 0 <= b; b--)
                            if (!(e[b].startValue > this.conversionParameters.minimum))
                                if (f)
                                    if (e[b].endValue > this.conversionParameters.minimum)
                                        if (e[b].size && this.conversionParameters.minimum + c * (e[b].endValue - e[b].startValue) / e[b].size > e[b].startValue) {
                                            a = 0 >= e[b].size ? 0 : c * (e[b].endValue - e[b].startValue) / e[b].size;
                                            break
                                        } else a += e[b].startValue - this.conversionParameters.minimum +
                                            e[b].size * (this.conversionParameters.minimum - e[b].startValue) / (e[b].endValue - e[b].startValue), c += e[b].size * (this.conversionParameters.minimum - e[b].startValue) / (e[b].endValue - e[b].startValue), f = !1;
                else if (c < e[b].endValue - this.conversionParameters.minimum) {
                    c -= e[b].endValue - this.conversionParameters.minimum;
                    if (c > -1 * e[b].size) {
                        a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) + c;
                        break
                    } else a -= e[b].endValue - e[b].startValue - e[b].size;
                    c += e[b].size;
                    f = !1
                } else break;
                else if (c < e[b].endValue - e[b +
                        1].startValue) {
                    c -= e[b].endValue - e[b + 1].startValue;
                    if (c > -1 * e[b].size) {
                        a += (e[b].endValue - e[b].startValue) * (0 === e[b].size ? 1 : c / e[b].size) + c;
                        break
                    } else a -= e[b].endValue - e[b].startValue - e[b].size;
                    c += e[b].size
                } else break;
                f = this.conversionParameters.minimum + a
            }
            return f
        };
        C.prototype.convertValueToPixel = function(a) {
            a = this.getAppearentDifferceReplacingBreaksToSize(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a /
                this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0
        };
        C.prototype.getAppearentDifferceReplacingBreaksToSize = function(a, f, b, c) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                b = y(b) ? f / a : b;
                for (var g = 0; g < e.length && !(f < e[g].startValue); g++) a > e[g].endValue || (a <= e[g].startValue && f >= e[g].endValue ? b = b / e[g].endValue * e[g].startValue *
                    e[g].size : a >= e[g].startValue && f >= e[g].endValue ? b = b / e[g].endValue * a * Math.pow(e[g].size, Math.log(e[g].endValue / a) / Math.log(e[g].endValue / e[g].startValue)) : a <= e[g].startValue && f <= e[g].endValue ? b = b / f * e[g].startValue * Math.pow(e[g].size, Math.log(f / e[g].startValue) / Math.log(e[g].endValue / e[g].startValue)) : !c && (a > e[g].startValue && f < e[g].endValue) && (b = a * Math.pow(e[g].size, Math.log(f / a) / Math.log(e[g].endValue / e[g].startValue))))
            } else
                for (b = y(b) ? Math.abs(f - a) : b, g = 0; g < e.length && !(f < e[g].startValue); g++) a > e[g].endValue ||
                    (a <= e[g].startValue && f >= e[g].endValue ? b = b - e[g].endValue + e[g].startValue + e[g].size : a > e[g].startValue && f >= e[g].endValue ? b = b - e[g].endValue + a + e[g].size * (e[g].endValue - a) / (e[g].endValue - e[g].startValue) : a <= e[g].startValue && f < e[g].endValue ? b = b - f + e[g].startValue + e[g].size * (f - e[g].startValue) / (e[g].endValue - e[g].startValue) : !c && (a > e[g].startValue && f < e[g].endValue) && (b = a + e[g].size * (f - a) / (e[g].endValue - e[g].startValue)));
            return b
        };
        C.prototype.setViewPortRange = function(a, f) {
            this.sessionVariables.newViewportMinimum =
                this.viewportMinimum = Math.min(a, f);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, f)
        };
        C.prototype.getXValueAt = function(a) {
            if (!a) return null;
            var f = null;
            "left" === this._position ? f = this.convertPixelToValue(a.y) : "bottom" === this._position && (f = this.convertPixelToValue(a.x));
            return f
        };
        C.prototype.calculateValueToPixelConversionParameters = function(a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var f = {
                    pixelPerUnit: null,
                    minimum: null,
                    reference: null
                },
                b = this.lineCoordinates.width,
                c = this.lineCoordinates.height,
                b = "bottom" === this._position || "top" === this._position ? b : c,
                c = Math.abs(this.range);
            if (this.logarithmic)
                for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? b = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c / a[e].endValue * a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100) : b -
                    Math.min(a[e].spacing, 0.1 * b)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c / a[e].endValue * this.viewportMinimum, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (c = c /
                    this.viewportMaximum * a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
            else
                for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ?
                    b = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c - a[e].endValue + a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100) : b - Math.min(a[e].spacing, 0.1 * b)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (c = c - a[e].endValue + this.viewportMinimum, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : b - Math.min(a[e].spacing,
                        0.1 * b) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (c = c - this.viewportMaximum + a[e].startValue, b = 0 < a[e].spacing.toString().indexOf("%") ? b * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : b - Math.min(a[e].spacing, 0.1 * b) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
            f.minimum = this.viewportMinimum;
            f.maximum = this.viewportMaximum;
            f.range = c;
            if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? -1 : 1) * b * f.lnLogarithmBase / Math.log(Math.abs(c))) : f.pixelPerUnit = (this.reversed ? -1 : 1) * b / Math.abs(c), f.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
            if ("left" === this._position || "right" === this._position) this.logarithmic ? (f.lnLogarithmBase = Math.log(this.logarithmBase), f.pixelPerUnit = (this.reversed ? 1 : -1) * b * f.lnLogarithmBase /
                Math.log(Math.abs(c))) : f.pixelPerUnit = (this.reversed ? 1 : -1) * b / Math.abs(c), f.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
            this.conversionParameters = f
        };
        C.prototype.calculateAxisParameters = function() {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    f = !1,
                    b = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" ===
                    this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    c = 4;
                "axisX" === this.type && (c = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(c, Math.floor(this.maxWidth / a)),
                    e, g, h, c = 0;
                !y(this.options.viewportMinimum) && (!y(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (y(this.options.viewportMinimum) && !y(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum =
                    this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (y(this.options.viewportMaximum) && !y(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (c = 0; c < this.scaleBreaks._appliedBreaks.length; c++)
                        if ((!y(this.sessionVariables.newViewportMinimum) &&
                                this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue || !y(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[c].startValue || !y(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[c].startValue) && (!y(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue || !y(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[c].endValue ||
                                !y(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[c].endValue)) {
                            this.scaleBreaks._appliedBreaks.splice(c, 1);
                            break
                        }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (b = !0);
                    e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === g - e && (c = "undefined" === typeof this.options.interval ?
                        0.4 : this.options.interval, g += c, e -= c);
                    Infinity !== this.dataInfo.minDiff ? h = this.dataInfo.minDiff : 1 < g - e ? h = 0.5 * Math.abs(g - e) : (h = 1, b && (f = !0))
                } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(g) ? isFinite(e) ? isFinite(g) || (g = e) : e = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ?
                        0 : Infinity), 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, e -= c) : e > g ? (c = Math.min(0.01 * Math.abs(this.getAppearentDifferceReplacingBreaksToSize(g, e, null, !0)), 5), 0 <= g ? e = g - c : g = isFinite(e) ? e + c : 0) : (c = Math.min(0.01 * Math.abs(this.getAppearentDifferceReplacingBreaksToSize(e, g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== e && (e -= c)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) &&
                    0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
                c = this.getAppearentDifferceReplacingBreaksToSize(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && b) {
                    this.intervalType || (c / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : c / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : c / 5 <= a ? (this.interval =
                            5, this.intervalType = "millisecond") : c / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : c / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : c / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : c / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : c / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : c / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : c / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : c / 400 <= a ? (this.interval = 400, this.intervalType =
                            "millisecond") : c / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : c / (1 * V.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : c / (2 * V.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : c / (5 * V.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : c / (10 * V.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : c / (15 * V.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : c / (20 * V.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") :
                        c / (30 * V.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : c / (1 * V.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : c / (2 * V.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : c / (5 * V.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : c / (10 * V.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : c / (15 * V.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : c / (20 * V.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") :
                        c / (30 * V.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : c / (1 * V.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : c / (2 * V.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : c / (3 * V.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : c / (6 * V.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : c / (1 * V.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : c / (2 * V.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : c / (4 * V.dayDuration) <= a ? (this.interval =
                            4, this.intervalType = "day") : c / (1 * V.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : c / (2 * V.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : c / (3 * V.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : c / (1 * V.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : c / (2 * V.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : c / (3 * V.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : c / (6 * V.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") :
                        (this.interval = c / (1 * V.yearDuration) <= a ? 1 : c / (2 * V.yearDuration) <= a ? 2 : c / (4 * V.yearDuration) <= a ? 4 : Math.floor(C.getNiceNumber(c / (a - 1), !0) / V.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - h / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = g + h / 2;
                    f ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString =
                        "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType =
                        "number";
                    c = C.getNiceNumber(c, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : C.getNiceNumber(c / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - h / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? g + h / 2 : Math.ceil(g / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ?
                        this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === g - e && (c = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += c, e -= c), h = Infinity !==
                            this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(g) ? 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (c = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += c, e -= c) : e > g ? (c = Math.min(0.01 * Math.abs(this.getAppearentDifferceReplacingBreaksToSize(g, e, null, !0)), 5), 0 <= g ? e = g - c : g = isFinite(e) ? e + c : 0) : (c = Math.min(0.01 * Math.abs(this.getAppearentDifferceReplacingBreaksToSize(e,
                            g, null, !0)), 0.05), 0 !== g && (g += c), 0 !== e && (e -= c)) : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), Math.abs(this.getAppearentDifferceReplacingBreaksToSize(e,
                            g, null, !0)), "axisX" === this.type && b) {
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum = e - h / 2;
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum = g + h / 2
                    } else this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - h / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum =
                        "axisX" === this.type ? g + h / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                y(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                y(this.sessionVariables.newViewportMaximum) &&
                    (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && b ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = C.generateValueFormatString(this.range, 2))
            }
        };
        C.prototype.calculateLogarithmicAxisParameters = function() {
            var a = this.chart.layoutManager.getFreeSpace(),
                f = Math.log(this.logarithmBase),
                b;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                c, e, g, h;
            h = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (h = 0; h < this.scaleBreaks._appliedBreaks.length; h++)
                    if ((!y(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[h].startValue || !y(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[h].startValue || !y(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[h].startValue) && (!y(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[h].endValue ||
                            !y(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[h].endValue || !y(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[h].endValue)) {
                        this.scaleBreaks._appliedBreaks.splice(h, 1);
                        break
                    }
                    "axisX" === this.type ? (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ?
                0.4 : this.options.interval), e *= h, c /= h), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= c && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1) : 0 >= c ? c = e : isFinite(e) || (e = c), 1 === c && 1 === e ? (e *= this.logarithmBase -
                1 / this.logarithmBase, c = 1) : 1 === e / c ? (h = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= h, c /= h) : c > e ? (h = Math.min(c / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? c = e / h : e = c * h) : (h = Math.min(e / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h), 1 !== c && (c /= h)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null ===
                this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < c && (c = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            h = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            linearRange = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? c : this.viewportMinimum);
            this.intervalType =
                "number";
            h = Math.pow(this.logarithmBase, C.getNiceNumber(Math.abs(Math.log(h) / f), !1));
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = C.getNiceExponent(Math.log(h) / f / (a - 1), !0), b = C.getNiceNumber(linearRange / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / f / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
                "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / f / this.interval));
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = C.getNiceExponent(Math.ceil(Math.log(h) / f) / (a - 1)), b = C.getNiceNumber((this.viewportMaximum -
                this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (c = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / c && (h = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= h, c /= h), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (c = null !== this.minimum ?
                this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(c) || isFinite(e) ? 1 === c && 1 === e ? (e *= this.logarithmBase, c /= this.logarithmBase) : 1 === e / c ? (h = Math.pow(this.logarithmBase, this.interval), e *= h, c /= h) : c > e ? (h = Math.min(0.01 * (c / e), 5), 1 <= e ? c = e / h : e = c * h) : (h = Math.min(e / c * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h), 1 !== c && (c /= h)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, c = 1), g = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : e / c > this.logarithmBase ? e / c * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < c && (c = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? c / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(c) / f / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum ||
                isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / f / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ?
                0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum ||
                this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
            c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) * this.interval);
            this.range =
                this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (f = Math.floor(this.viewportMinimum / b + 0.5) * b; f < this.viewportMinimum;) f += b;
                this.equidistantInterval = !1;
                this.intervalStartPosition = f;
                this.interval = b
            } else this.options.interval || (b = Math.ceil(this.interval), this.range > this.interval && (this.interval = b, c = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (f * this.interval) + 0.2) * this.interval))),
                this.equidistantInterval = !0, this.intervalStartPosition = c;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
                f = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(f) || !isFinite(f)) f = 2;
                if (2 < f)
                    for (h = 0; h < f - 2; h++) this.valueFormatString += "#"
            }
        };
        C.generateValueFormatString = function(a, f) {
            var b = "#,##0.",
                c = f;
            1 > a && (c += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(c) || !isFinite(c)) && (c = f);
            for (var e = 0; e < c; e++) b += "#";
            return b
        };
        C.getNiceExponent = function(a,
            f) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b),
                c = 0 > b ? 1 >= c ? 1 : 5 >= c ? 5 : 10 : Math.max(Math.floor(c), 1);
            return Number((c * Math.pow(10, b)).toFixed(20))
        };
        C.getNiceNumber = function(a, f) {
            var b = Math.floor(Math.log(a) / Math.LN10),
                c = a / Math.pow(10, b);
            return Number(((f ? 1.5 > c ? 1 : 3 > c ? 2 : 7 > c ? 5 : 10 : 1 >= c ? 1 : 2 >= c ? 2 : 5 >= c ? 5 : 10) * Math.pow(10, b)).toFixed(20))
        };
        C.prototype.getLabelStartPoint = function() {
            var a = V[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !==
                this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("hour" === this.intervalType) {
                if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("day" === this.intervalType) {
                if (0 < a.getHours() ||
                    0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("week" === this.intervalType) {
                if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("month" === this.intervalType) {
                if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() +
                    1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
        ma(ea, W);
        ma(aa, W);
        aa.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var f = 0;
                this.parent.options._isPlaceholder &&
                    this.parent.createUserOptions();
                this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), f = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][f] = this.options
            }
        };
        aa.prototype.render = function(a) {
            if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var f = this.ctx,
                    b = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var c = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                H(this.id);
                var g, h, m, n, l, p, q = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = q;
                this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType,
                    q));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (a = 0.02 * this.scaleBreaks.parent.lineCoordinates.width + 0.5 << 0, c = 1 === q % 2 ? (c.x << 0) + 0.5 : c.x << 0, h = 1 === q % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, m = this.chart.plotArea.y2 + q / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, m = this.chart.plotArea.y1 - q / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: c - q / 2,
                            y1: e,
                            x2: h + q / 2,
                            y2: m
                        }, this.ctx.moveTo(c, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position &&
                        0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(c, m), this.ctx.lineTo(h, m), this.ctx.lineTo(h, e);
                    else if ("wavy" === this.type) {
                    n = c;
                    l = e;
                    g = 0.5;
                    p = (m - l) / a / 3;
                    for (var k = 0; k < p; k++) this.ctx.bezierCurveTo(n + g * a, l + a, n + g * a, l + 2 * a, n, l + 3 * a), l += 3 * a, g *= -1;
                    this.ctx.bezierCurveTo(n + g * a, l + a, n + g * a, l + 2 * a, n, l + 3 * a);
                    n = h;
                    g *= -1;
                    this.ctx.lineTo(n, l);
                    for (k = 0; k < p; k++) this.ctx.bezierCurveTo(n + g * a, l - a, n + g * a, l - 2 * a, n, l - 3 * a), l -= 3 * a, g *= -1
                } else {
                    if ("zigzag" === this.type) {
                        g = -1;
                        l = e + a;
                        n = c + a;
                        p = (m - l) / a / 2;
                        for (k = 0; k < p; k++) this.ctx.lineTo(n,
                            l), n += 2 * g * a, l += 2 * a, g *= -1;
                        this.ctx.lineTo(n, l);
                        n += h - c;
                        for (k = 0; k < p + 1; k++) this.ctx.lineTo(n, l), n += 2 * g * a, l -= 2 * a, g *= -1;
                        this.ctx.lineTo(n + g * a, l + a)
                    }
                } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (a = 0.02 * this.scaleBreaks.parent.lineCoordinates.height + 0.5 << 0, e = 1 === q % 2 ? (e.y << 0) + 0.5 : e.y << 0, m = 1 === q % 2 ? (c.y << 0) + 0.5 : c.y << 0, "left" === this.scaleBreaks.parent._position ? (c = this.chart.plotArea.x1, h = this.chart.plotArea.x2 + q / 2 + 0.5 << 0) : (c = this.chart.plotArea.x2, h = this.chart.plotArea.x1 -
                            q / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: c,
                            y1: e - q / 2,
                            x2: h,
                            y2: m + q / 2
                        }, this.ctx.moveTo(c, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(h, e), this.ctx.lineTo(h, m), this.ctx.lineTo(c, m);
                    else if ("wavy" === this.type) {
                    n = c;
                    l = e;
                    g = 0.5;
                    p = (h - n) / a / 3;
                    for (k = 0; k < p; k++) this.ctx.bezierCurveTo(n + a, l + g * a, n + 2 * a, l + g * a, n + 3 * a, l), n += 3 * a, g *= -1;
                    this.ctx.bezierCurveTo(n + a, l + g * a, n + 2 * a, l + g * a, n + 3 * a, l);
                    l = m;
                    g *= -1;
                    this.ctx.lineTo(n, l);
                    for (k = 0; k < p; k++) this.ctx.bezierCurveTo(n -
                        a, l + g * a, n - 2 * a, l + g * a, n - 3 * a, l), n -= 3 * a, g *= -1
                } else if ("zigzag" === this.type) {
                    g = 1;
                    l = e - a;
                    n = c + a;
                    p = (h - n) / a / 2;
                    for (k = 0; k < p; k++) this.ctx.lineTo(n, l), l += 2 * g * a, n += 2 * a, g *= -1;
                    this.ctx.lineTo(n, l);
                    l += m - e;
                    for (k = 0; k < p + 1; k++) this.ctx.lineTo(n, l), l += 2 * g * a, n -= 2 * a, g *= -1;
                    this.ctx.lineTo(n + a, l + g * a)
                }
                0 < q && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = b;
                this.ctx = f
            }
        };
        ma(ba, W);
        ba.prototype.createUserOptions =
            function(a) {
                if ("undefined" !== typeof a || this.options._isPlaceholder) {
                    var f = 0;
                    this.parent.options._isPlaceholder && this.parent.createUserOptions();
                    this.options._isPlaceholder || (Ea(this.parent.stripLines), f = this.parent.options.stripLines.indexOf(this.options));
                    this.options = "undefined" === typeof a ? {} : a;
                    this.parent.options.stripLines[f] = this.options
                }
            };
        ba.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                f = Math.abs("pixel" === this._thicknessType ? this.thickness :
                    this.parent.conversionParameters.pixelPerUnit * this.thickness);
            if (0 < f) {
                var b = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var c = this.ctx.globalAlpha;
                this.ctx.globalAlpha = b;
                H(this.id);
                var e, g, h, m;
                this.ctx.lineWidth = f;
                this.ctx.setLineDash && this.ctx.setLineDash(G(this.lineDashType, f));
                if ("bottom" === this.parent._position || "top" === this.parent._position) e = g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, h = this.chart.plotArea.y1, m = this.chart.plotArea.y2, this.bounds = {
                    x1: e - f / 2,
                    y1: h,
                    x2: g + f / 2,
                    y2: m
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) h = m = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = {
                    x1: e,
                    y1: h - f / 2,
                    x2: g,
                    y2: m + f / 2
                };
                this.ctx.moveTo(e, h);
                this.ctx.lineTo(g, m);
                this.ctx.stroke();
                this.ctx.globalAlpha = c
            }
            this.ctx.restore()
        };
        ma(fa, W);
        fa.prototype.render = function(a, f) {
            var b, c, e, g, h = null,
                m = h = null,
                n = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.dataSeries[0].xValueType) this.valueFormatString =
                    this.parent.valueFormatString;
                else {
                    var l = 0,
                        l = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                    this.valueFormatString = C.generateValueFormatString(this.parent.range, l)
                }
            var m = null === this.opacity ? 1 :
                this.opacity,
                l = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
                p = this.chart.overlaidCanvasCtx,
                q = p.globalAlpha;
            p.globalAlpha = m;
            p.beginPath();
            p.strokeStyle = this.color;
            p.lineWidth = l;
            p.save();
            this.labelFontSize = y(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
            if ("left" === this.parent._position || "right" === this.parent._position) this.labelMaxWidth = y(this.options.labelMaxWidth) ? this.parent.bounds.x2 - this.parent.bounds.x1 :
                this.labelMaxWidth, this.labelMaxHeight = y(this.options.labelWrap) || this.labelWrap ? 3 * this.chart.height : 2 * this.labelFontSize;
            else if ("top" === this.parent._position || "bottom" === this.parent._position) this.labelMaxWidth = y(this.options.labelMaxWidth) ? 3 * this.chart.width : this.labelMaxWidth, this.labelMaxHeight = y(this.options.labelWrap) || this.labelWrap ? this.parent.bounds.height : 2 * this.labelFontSize;
            0 < l && p.setLineDash && p.setLineDash(G(this.lineDashType, l));
            m = new ka(p, {
                x: 0,
                y: 0,
                padding: 2,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: n,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            });
            if (this.snapToDataPoint) {
                var k = 0,
                    h = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var d = null;
                    if ("bottom" ===
                        this.parent._position || "top" === this.parent._position) k = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        y: f
                    });
                    else if ("left" === this.parent._position || "right" === this.parent._position) k = this.parent.convertPixelToValue({
                        y: f
                    });
                    for (var s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (d.dataSeries = this.parent.dataSeries[s], null !== d.dataPoint.y && h.push(d));
                    d = null;
                    if (0 === h.length) return;
                    h.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    d = Math.abs(a -
                        this.parent.convertValueToPixel(h[0].dataPoint.y));
                    s = 0;
                    if ("rangeBar" === h[0].dataSeries.type || "error" === h[0].dataSeries.type)
                        for (var d = Math.abs(a - this.parent.convertValueToPixel(h[s].dataPoint.y[0])), r = 0, k = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(a - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else r = Math.abs(a - this.parent.convertValueToPixel(h[k].dataPoint.y)), r < d && (d = r, s = k);
                    else if ("stackedBar" === h[0].dataSeries.type)
                        for (var d =
                                Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y)), u = r = 0, k = s = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(a - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else u += h[k].dataPoint.y, r = Math.abs(a - this.parent.convertValueToPixel(u)), r < d && (d = r, s = k);
                    else if ("stackedBar100" === h[0].dataSeries.type)
                        for (var d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y)), t = u = r = 0, k = 0; k < h.length; k++)
                            if (h[k].dataPoint.y &&
                                h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(a - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else u += h[k].dataPoint.y, t = h[k].dataPoint.x.getTime ? h[k].dataPoint.x.getTime() : h[k].dataPoint.x, t = 100 * (u / h[k].dataSeries.plotUnit.dataPointYSums[t]), r = Math.abs(a - this.parent.convertValueToPixel(t)), r < d && (d = r, s = k);
                    else
                        for (d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y)), k = s = r = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n =
                                    0; n < h[k].dataPoint.y.length; n++) r = Math.abs(a - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else r = Math.abs(a - this.parent.convertValueToPixel(h[k].dataPoint.y)), r < d && (d = r, s = k);
                    n = h[s];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        b = 0;
                        if ("rangeBar" === this.parent.dataSeries[s].type || "error" === this.parent.dataSeries[s].type) {
                            d = Math.abs(a - this.parent.convertValueToPixel(n.dataPoint.y[0]));
                            for (k = r = 0; k < n.dataPoint.y.length; k++) r = Math.abs(a - this.parent.convertValueToPixel(n.dataPoint.y[k])),
                                r < d && (d = r, b = k);
                            h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(n.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataPoint.y[b]) << 0;
                            m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: n.dataPoint.y[b]
                            }) : y(this.options.label) ? ca(n.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar" === this.parent.dataSeries[s].type) {
                            d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y));
                            u = r = 0;
                            for (k = s; 0 <= k; k--) u += h[k].dataPoint.y, r = Math.abs(a - this.parent.convertValueToPixel(u)), r < d && (d = r, b = k);
                            h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(u) << 0) + 0.5 : this.parent.convertValueToPixel(u) << 0;
                            m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: n.dataPoint.y
                            }) : ca(n.dataPoint.y, this.valueFormatString, this.chart._cultureInfo)
                        } else if ("stackedBar100" === this.parent.dataSeries[s].type) {
                            d = Math.abs(a - this.parent.convertValueToPixel(h[0].dataPoint.y));
                            t = u = r = 0;
                            for (k = s; 0 <= k; k--) u += h[k].dataPoint.y, t = h[k].dataPoint.x.getTime ? h[k].dataPoint.x.getTime() : h[k].dataPoint.x, t = 100 * (u / h[k].dataSeries.plotUnit.dataPointYSums[t]), r = Math.abs(a - this.parent.convertValueToPixel(t)), r < d && (d = r, b = k);
                            h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(t) << 0) + 0.5 : this.parent.convertValueToPixel(t) << 0;
                            m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: t
                            }) : ca(t, this.valueFormatString, this.chart._cultureInfo)
                        } else h =
                            1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(n.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataPoint.y) << 0, m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: n.dataPoint.y
                            }) : y(this.options.label) ? ca(n.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        b = c = h;
                        e = this.chart.plotArea.y1;
                        g = this.chart.plotArea.y2;
                        this.bounds = {
                            x1: b - l / 2,
                            y1: e,
                            x2: c + l / 2,
                            y2: g
                        };
                        m.x = b - m.measureText().width / 2;
                        m.y = this.parent.lineCoordinates.y2 +
                            m.fontSize / 2 + 2
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        e = g = h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(n.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataPoint.x) << 0;
                        b = this.chart.plotArea.x1;
                        c = this.chart.plotArea.x2;
                        this.bounds = {
                            x1: b,
                            y1: e - l / 2,
                            x2: c,
                            y2: g + l / 2
                        };
                        t = !1;
                        if (this.parent.labels)
                            for (h = Math.ceil(this.parent.interval), k = 0; k < this.parent.viewportMaximum; k += h)
                                if (this.parent.labels[k]) t = !0;
                                else {
                                    t = !1;
                                    break
                                }
                        if (t) {
                            if ("axisX" === this.parent.type)
                                for (k =
                                    this.parent.convertPixelToValue({
                                        y: f
                                    }), d = null, s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: n.dataPoint.x
                                }) : y(this.options.label) ? d.dataPoint.label : this.label)
                        } else !y(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && "dateTime" === this.parent.dataSeries[0].xValueType ? m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: n.dataPoint.x
                        }) : Aa(n.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : !y(this.parent.dataSeries) && (0 < this.parent.dataSeries.length && "number" === this.parent.dataSeries[0].xValueType) && (m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: n.dataPoint.x
                        }) : ca(n.dataPoint.x, this.valueFormatString, this.chart._cultureInfo));
                        "left" === this.parent._position ? (m.x = this.parent.lineCoordinates.x2 -
                            m.measureText().width, m.y = g) : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2, m.y = g)
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    k = this.parent.convertPixelToValue({
                        x: a
                    });
                    for (s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (d.dataSeries = this.parent.dataSeries[s], null !== d.dataPoint.y && h.push(d));
                    if (0 === h.length) return;
                    h.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    n = h[0];
                    b = c = h = 1 === p.lineWidth %
                        2 ? (this.parent.convertValueToPixel(n.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataPoint.x) << 0;
                    e = this.chart.plotArea.y1;
                    g = this.chart.plotArea.y2;
                    this.bounds = {
                        x1: b - l / 2,
                        y1: e,
                        x2: c + l / 2,
                        y2: g
                    };
                    t = !1;
                    if (this.parent.labels)
                        for (h = Math.ceil(this.parent.interval), k = 0; k < this.parent.viewportMaximum; k += h)
                            if (this.parent.labels[k]) t = !0;
                            else {
                                t = !1;
                                break
                            }
                    if (t) {
                        if ("axisX" === this.parent.type)
                            for (k = this.parent.convertPixelToValue({
                                    x: a
                                }), d = null, s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: n.dataPoint.x
                            }) : y(this.options.label) ? d.dataPoint.label : this.label)
                    } else !y(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && "dateTime" === this.parent.dataSeries[0].xValueType ? m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: n.dataPoint.x
                        }) : Aa(n.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) :
                        !y(this.parent.dataSeries) && (0 < this.parent.dataSeries.length && "number" === this.parent.dataSeries[0].xValueType) && (m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: n.dataPoint.x
                        }) : y(this.options.label) ? ca(n.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    m.x = b - m.measureText().width / 2;
                    "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 -
                        m.height + m.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !y(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (k = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        x: a
                    }));
                    for (s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (d.dataSeries = this.parent.dataSeries[s], null !== d.dataPoint.y && h.push(d));
                    if (0 === h.length) return;
                    h.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    s = 0;
                    if ("rangeColumn" ===
                        h[0].dataSeries.type || "rangeArea" === h[0].dataSeries.type || "error" === h[0].dataSeries.type || "rangeSplineArea" === h[0].dataSeries.type || "candlestick" === h[0].dataSeries.type || "ohlc" === h[0].dataSeries.type || "boxAndWhisker" === h[0].dataSeries.type)
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y[0])), k = r = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(f - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else r =
                                Math.abs(f - this.parent.convertValueToPixel(h[k].dataPoint.y)), r < d && (d = r, s = k);
                    else if ("stackedColumn" === h[0].dataSeries.type || "stackedArea" === h[0].dataSeries.type)
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y)), k = u = r = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(f - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else u += h[k].dataPoint.y, r = Math.abs(f - this.parent.convertValueToPixel(u)), r < d && (d = r,
                                s = k);
                    else if ("stackedColumn100" === h[0].dataSeries.type || "stackedArea100" === h[0].dataSeries.type)
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y)), k = t = u = r = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(f - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else u += h[k].dataPoint.y, t = h[k].dataPoint.x.getTime ? h[k].dataPoint.x.getTime() : h[k].dataPoint.x, t = 100 * (u / h[k].dataSeries.plotUnit.dataPointYSums[t]),
                                r = Math.abs(f - this.parent.convertValueToPixel(t)), r < d && (d = r, s = k);
                    else
                        for (d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y)), k = r = 0; k < h.length; k++)
                            if (h[k].dataPoint.y && h[k].dataPoint.y.length)
                                for (n = 0; n < h[k].dataPoint.y.length; n++) r = Math.abs(f - this.parent.convertValueToPixel(h[k].dataPoint.y[n])), r < d && (d = r, s = k);
                            else r = Math.abs(f - this.parent.convertValueToPixel(h[k].dataPoint.y)), r < d && (d = r, s = k);
                    n = h[s];
                    b = 0;
                    if ("rangeColumn" === this.parent.dataSeries[s].type || "rangeArea" === this.parent.dataSeries[s].type ||
                        "error" === this.parent.dataSeries[s].type || "rangeSplineArea" === this.parent.dataSeries[s].type || "candlestick" === this.parent.dataSeries[s].type || "ohlc" === this.parent.dataSeries[s].type || "boxAndWhisker" === this.parent.dataSeries[s].type) {
                        d = Math.abs(f - this.parent.convertValueToPixel(n.dataPoint.y[0]));
                        for (k = r = 0; k < n.dataPoint.y.length; k++) r = Math.abs(f - this.parent.convertValueToPixel(n.dataPoint.y[k])), r < d && (d = r, b = k);
                        h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(n.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataPoint.y[b]) <<
                            0;
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: n.dataPoint.y[b]
                        }) : y(this.options.label) ? ca(n.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label
                    } else if ("stackedColumn" === this.parent.dataSeries[s].type || "stackedArea" === this.parent.dataSeries[s].type) {
                        d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y));
                        u = r = 0;
                        for (k = s; 0 <= k; k--) u += h[k].dataPoint.y, r = Math.abs(f - this.parent.convertValueToPixel(u)),
                            r < d && (d = r, b = k);
                        h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(u) << 0) + 0.5 : this.parent.convertValueToPixel(u) << 0;
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: n.dataPoint.y
                        }) : y(this.options.label) ? ca(n.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                    } else if ("stackedColumn100" === this.parent.dataSeries[s].type || "stackedArea100" === this.parent.dataSeries[s].type) {
                        d = Math.abs(f - this.parent.convertValueToPixel(h[0].dataPoint.y));
                        u = r = 0;
                        for (k = s; 0 <= k; k--) u += h[k].dataPoint.y, t = h[k].dataPoint.x.getTime ? h[k].dataPoint.x.getTime() : h[k].dataPoint.x, t = 100 * (u / h[k].dataSeries.plotUnit.dataPointYSums[t]), r = Math.abs(f - this.parent.convertValueToPixel(t)), r < d && (d = r, b = k);
                        h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(t) << 0) + 0.5 : this.parent.convertValueToPixel(t) << 0;
                        m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: t
                        }) : y(this.options.label) ? ca(t, this.valueFormatString,
                            this.chart._cultureInfo) : this.label
                    } else "waterfall" === this.parent.dataSeries[s].type ? (h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(n.dataSeries.dataPointEOs[n.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataSeries.dataPointEOs[n.index].cumulativeSum) << 0, m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: n.dataSeries.dataPointEOs[n.index].cumulativeSum
                    }) : y(this.options.label) ? ca(n.dataSeries.dataPointEOs[n.index].cumulativeSum,
                        this.valueFormatString, this.chart._cultureInfo) : this.label) : (h = 1 === p.lineWidth % 2 ? (this.parent.convertValueToPixel(n.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(n.dataPoint.y) << 0, m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: n.dataPoint.y
                    }) : y(this.options.label) ? ca(n.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    e = g = h;
                    b = this.chart.plotArea.x1;
                    c = this.chart.plotArea.x2;
                    this.bounds = {
                        x1: b,
                        y1: e - l /
                            2,
                        x2: c,
                        y2: g + l / 2
                    };
                    m.y = g + m.fontSize / 2 - m.measureText().height / 2 + 2;
                    "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
                }
                h = null;
                ("bottom" === this.parent._position || "top" === this.parent._position) && (b >= this.parent.convertValueToPixel(this.parent.viewportMinimum) && c <= this.parent.convertValueToPixel(this.parent.viewportMaximum)) && (0 < l && (p.moveTo(b, e), p.lineTo(c, g), p.stroke()), p.restore(), m.text && ("number" ===
                    typeof m.text.valueOf() || m.text && 0 < m.text.length) && m.render(!0));
                ("left" === this.parent._position || "right" === this.parent._position) && (g >= this.parent.convertValueToPixel(this.parent.viewportMaximum) && e <= this.parent.convertValueToPixel(this.parent.viewportMinimum)) && (0 < l && (p.moveTo(b, e), p.lineTo(c, g), p.stroke()), p.restore(), m.text && ("number" === typeof m.text.valueOf() || m.text && 0 < m.text.length) && m.render(!0))
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) b = c = h = 1 === p.lineWidth %
                    2 ? (a << 0) + 0.5 : a << 0, e = this.chart.plotArea.y1, g = this.chart.plotArea.y2, this.bounds = {
                        x1: b - l / 2,
                        y1: e,
                        x2: c + l / 2,
                        y2: g
                    };
                else if ("left" === this.parent._position || "right" === this.parent._position) e = g = h = 1 === p.lineWidth % 2 ? (f << 0) + 0.5 : f << 0, b = this.chart.plotArea.x1, c = this.chart.plotArea.x2, this.bounds = {
                    x1: b,
                    y1: e - l / 2,
                    x2: c,
                    y2: g + l / 2
                };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        t = !1;
                        if (this.parent.labels)
                            for (h = Math.ceil(this.parent.interval), k = 0; k <
                                this.parent.viewportMaximum; k += h)
                                if (this.parent.labels[k]) t = !0;
                                else {
                                    t = !1;
                                    break
                                }
                        if (t) {
                            if ("axisX" === this.parent.type)
                                for (k = this.parent.convertPixelToValue({
                                        y: f
                                    }), d = null, s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: this.parent.convertPixelToValue(a)
                                }) : y(this.options.label) ? d.dataPoint.label : this.label)
                        } else !y(this.parent.dataSeries) &&
                            0 < this.parent.dataSeries.length && "dateTime" === this.parent.dataSeries[0].xValueType ? m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: this.parent.convertPixelToValue(f)
                            }) : Aa(this.parent.convertPixelToValue(f), this.valueFormatString, this.chart._cultureInfo) : !y(this.parent.dataSeries) && (0 < this.parent.dataSeries.length && "number" === this.parent.dataSeries[0].xValueType) && (m.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: this.parent.convertPixelToValue(f)
                            }) : ca(this.parent.convertPixelToValue(f), this.valueFormatString, this.chart._cultureInfo));
                        m.y = f + m.fontSize / 2 - m.measureText().height / 2 + 2;
                        "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x1 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: this.parent.convertPixelToValue(a)
                        }) : y(this.options.label) ? ca(this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, m.x = b - m.measureText().width / 2, "bottom" === this.parent._position && (m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2), "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
                    } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    t = !1;
                    n = "";
                    if (this.parent.labels)
                        for (h = Math.ceil(this.parent.interval), k = 0; k < this.parent.viewportMaximum; k += h)
                            if (this.parent.labels[k]) t = !0;
                            else {
                                t = !1;
                                break
                            }
                    if (t) {
                        if ("axisX" === this.parent.type)
                            for (k = this.parent.convertPixelToValue({
                                    x: a
                                }), d = null, s = 0; s < this.parent.dataSeries.length; s++)(d = this.parent.dataSeries[s].getDataPointAtX(k, !0)) && 0 <= d.index && (m.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: this.parent.convertPixelToValue(a)
                                }) : y(this.options.label) ?
                                d.dataPoint.label : this.label)
                    } else !y(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && "dateTime" === this.parent.dataSeries[0].xValueType ? m.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: this.parent.convertPixelToValue(a)
                    }) : Aa(this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : !y(this.parent.dataSeries) && (0 < this.parent.dataSeries.length && "number" === this.parent.dataSeries[0].xValueType) && (m.text =
                        this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : ""
                        }) : ca(this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo));
                    m.x = b - m.measureText().width / 2;
                    "bottom" === this.parent._position ? m.y = this.parent.lineCoordinates.y2 + m.fontSize / 2 + 2 : "top" === this.parent._position && (m.y = this.parent.lineCoordinates.y1 - m.height + m.fontSize / 2 + 2)
                } else if ("left" === this.parent._position ||
                    "right" === this.parent._position) m.text = this.labelFormatter ? this.labelFormatter({
                    chart: this.chart,
                    axis: this.parent.options,
                    crosshair: this.options,
                    value: this.parent.convertPixelToValue(f)
                }) : y(this.options.label) ? ca(this.parent.convertPixelToValue(f), this.valueFormatString, this.chart._cultureInfo) : this.label, m.y = f + m.fontSize / 2 - m.measureText().height / 2 + 2, "left" === this.parent._position ? m.x = this.parent.lineCoordinates.x2 - m.measureText().width : "right" === this.parent._position && (m.x = this.parent.lineCoordinates.x2);
                0 < l && (p.moveTo(b, e), p.lineTo(c, g), p.stroke());
                p.restore();
                m.text && ("number" === typeof m.text.valueOf() || m.text && 0 < m.text.length) && m.render(!0)
            }
            p.globalAlpha = q
        };
        ma(Z, W);
        Z.prototype._initialize = function() {
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a;
                a = '<div style=" width: auto;height: auto;min-width: 50px;';
                a += "line-height: auto;";
                a += "margin: 0px 0px 0px 0px;";
                a += "padding: 5px;";
                a += "font-family: Calibri, Arial, Georgia, serif;";
                a += "font-weight: normal;";
                a += "font-style: " + (w ? "italic;" : "normal;");
                a += "font-size: 14px;";
                a += "color: #000000;";
                a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                a += "text-align: left;";
                a += "border: 2px solid gray;";
                a += w ? "background: rgba(255,255,255,.9);" :
                    "background: rgb(255,255,255);";
                a += "text-indent: 0px;";
                a += "white-space: nowrap;";
                a += "border-radius: 5px;";
                a += "-moz-user-select:none;";
                a += "-khtml-user-select: none;";
                a += "-webkit-user-select: none;";
                a += "-ms-user-select: none;";
                a += "user-select: none;";
                w || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
                a += '} "> Sample Tooltip</div>';
                this.container.innerHTML = a;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius =
                    this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        Z.prototype.mouseMoveHandler = function(a, f) {
            this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, f))
        };
        Z.prototype._updateToolTip = function(a, f, b) {
            b = "undefined" === typeof b ? !0 : b;
            this.container || this._initialize();
            this.enabled || this.hide();
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" ===
                    typeof f) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    f = this._prevY
                } else this._prevX = a, this._prevY = f;
                var c = null,
                    e = null,
                    g = [],
                    h = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var m = [];
                        if (this.chart.axisX)
                            for (var n = 0; n < this.chart.axisX.length; n++) {
                                for (var h = this.chart.axisX[n].convertPixelToValue({
                                        y: f
                                    }), l = null, c = 0; c < this.chart.axisX[n].dataSeries.length; c++)(l = this.chart.axisX[n].dataSeries[c].getDataPointAtX(h,
                                    b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX[n].dataSeries[c], null !== l.dataPoint.y && m.push(l));
                                l = null
                            }
                        if (this.chart.axisX2)
                            for (n = 0; n < this.chart.axisX2.length; n++) {
                                h = this.chart.axisX2[n].convertPixelToValue({
                                    y: f
                                });
                                l = null;
                                for (c = 0; c < this.chart.axisX2[n].dataSeries.length; c++)(l = this.chart.axisX2[n].dataSeries[c].getDataPointAtX(h, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX2[n].dataSeries[c], null !== l.dataPoint.y && m.push(l));
                                l = null
                            }
                    } else {
                        m = [];
                        if (this.chart.axisX)
                            for (n = 0; n < this.chart.axisX.length; n++)
                                for (h =
                                    this.chart.axisX[n].convertPixelToValue({
                                        x: a
                                    }), l = null, c = 0; c < this.chart.axisX[n].dataSeries.length; c++)(l = this.chart.axisX[n].dataSeries[c].getDataPointAtX(h, b)) && 0 <= l.index && (l.dataSeries = this.chart.axisX[n].dataSeries[c], null !== l.dataPoint.y && m.push(l));
                        if (this.chart.axisX2)
                            for (n = 0; n < this.chart.axisX2.length; n++)
                                for (h = this.chart.axisX2[n].convertPixelToValue({
                                        x: a
                                    }), l = null, c = 0; c < this.chart.axisX2[n].dataSeries.length; c++)(l = this.chart.axisX2[n].dataSeries[c].getDataPointAtX(h, b)) && 0 <= l.index && (l.dataSeries =
                                    this.chart.axisX2[n].dataSeries[c], null !== l.dataPoint.y && m.push(l))
                    }
                    if (0 === m.length) return;
                    m.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    b = m[0];
                    for (c = 0; c < m.length; c++) m[c].dataPoint.x.valueOf() === b.dataPoint.x.valueOf() && g.push(m[c]);
                    m = null
                } else {
                    if (l = this.chart.getDataPointAtXY(a, f, b)) this.currentDataPointIndex = l.dataPointIndex, this.currentSeriesIndex = l.dataSeries.index;
                    else if (w)
                        if (l = Va(a, f, this.chart._eventManager.ghostCtx), 0 < l && "undefined" !== typeof this.chart._eventManager.objectMap[l]) {
                            l =
                                this.chart._eventManager.objectMap[l];
                            if ("legendItem" === l.objectType) return;
                            this.currentSeriesIndex = l.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <= l.dataPointIndex ? l.dataPointIndex : -1
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e = this.chart.data[this.currentSeriesIndex];
                        l = {};
                        if (0 <= this.currentDataPointIndex) c = e.dataPoints[this.currentDataPointIndex], l.dataSeries = e, l.dataPoint = c, l.index = this.currentDataPointIndex, l.distance = Math.abs(c.x - h),
                            "waterfall" === e.type && (l.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, l.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else {
                            if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                            h = e.axisX.convertPixelToValue({
                                x: a
                            });
                            l = e.getDataPointAtX(h, b);
                            l.dataSeries = e;
                            this.currentDataPointIndex = l.index;
                            c = l.dataPoint
                        }
                        if (!y(l.dataPoint.y))
                            if (l.dataSeries.axisY)
                                if (0 < l.dataPoint.y.length) {
                                    for (c = b = 0; c < l.dataPoint.y.length; c++) l.dataPoint.y[c] < l.dataSeries.axisY.viewportMinimum ? b-- : l.dataPoint.y[c] > l.dataSeries.axisY.viewportMaximum && b++;
                                    b < l.dataPoint.y.length && b > -l.dataPoint.y.length && g.push(l)
                                } else "column" === e.type || "bar" === e.type ? 0 > l.dataPoint.y ? 0 > l.dataSeries.axisY.viewportMinimum && l.dataSeries.axisY.viewportMaximum >=
                                    l.dataPoint.y && g.push(l) : l.dataSeries.axisY.viewportMinimum <= l.dataPoint.y && 0 <= l.dataSeries.axisY.viewportMaximum && g.push(l) : "bubble" === e.type ? (b = this.chart._eventManager.objectMap[e.dataPointIds[l.index]].size / 2, l.dataPoint.y >= l.dataSeries.axisY.viewportMinimum - b && l.dataPoint.y <= l.dataSeries.axisY.viewportMaximum + b && g.push(l)) : "waterfall" === e.type ? (b = 0, l.cumulativeSumYStartValue < l.dataSeries.axisY.viewportMinimum ? b-- : l.cumulativeSumYStartValue > l.dataSeries.axisY.viewportMaximum && b++, l.cumulativeSum <
                                        l.dataSeries.axisY.viewportMinimum ? b-- : l.cumulativeSum > l.dataSeries.axisY.viewportMaximum && b++, 2 > b && -2 < b && g.push(l)) : (0 <= l.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || l.dataPoint.y >= l.dataSeries.axisY.viewportMinimum && l.dataPoint.y <= l.dataSeries.axisY.viewportMaximum) && g.push(l);
                        else g.push(l)
                    }
                }
                if (0 < g.length && (this.highlightObjects(g), this.enabled))
                    if (b = "", b = this.getToolTipInnerHTML({
                            entries: g
                        }), null !== b) {
                        this.contentDiv.innerHTML = b;
                        b = !1;
                        "none" === this.container.style.display &&
                            (b = !0, this.container.style.display = "block");
                        try {
                            this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : -1 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" ===
                                g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[e.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ?
                                g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ?
                                this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal"
                        } catch (p) {}
                        "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" ===
                            g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                        0 > a && (a += this.container.clientWidth + 20);
                        a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                        f = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !==
                            g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : f : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                        f = -f + 10;
                        0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                        this.fixMozTransitionDelay(a, f);
                        !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                        this.container.style.left = a + "px";
                        this.container.style.bottom = f + "px"
                    } else this.hide(!1)
            }
        };
        Z.prototype.highlightObjects = function(a) {
            var f = this.chart.overlaidCanvasCtx;
            this.chart.resetOverlayedCanvas();
            f.clearRect(0, 0, this.chart.width, this.chart.height);
            f.save();
            var b = this.chart.plotArea,
                c = 0;
            f.beginPath();
            f.rect(b.x1, b.y1, b.x2 - b.x1,
                b.y2 - b.y1);
            f.clip();
            for (b = 0; b < a.length; b++) {
                var e = a[b];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var c = this.chart.data[e.dataSeriesIndex],
                        g = c.dataPoints[e.dataPointIndex],
                        h = e.dataPointIndex;
                    !1 === g.highlightEnabled || !0 !== c.highlightEnabled && !0 !== g.highlightEnabled || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "scatter" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "stackedArea" === c.type ||
                        "stackedArea100" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ? (g = c.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), ga.drawMarkers([g]), "undefined" !== typeof e.y2 && (g = c.getMarkerProperties(h, e.x1, e.y2, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 *
                            g.size), ga.drawMarkers([g]))) : "bubble" === c.type ? (g = c.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = e.size, g.color = "white", g.borderColor = "white", f.globalAlpha = 0.3, ga.drawMarkers([g]), f.globalAlpha = 1) : "column" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "bar" === c.type || "rangeBar" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "rangeColumn" === c.type || "waterfall" === c.type ? R(f, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === c.type || "doughnut" ===
                        c.type ? pa(f, e.center, e.radius, "white", c.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === c.type || "pyramid" === c.type ? xa(f, e.funnelSection, 0.3, "white") : "candlestick" === c.type ? (f.globalAlpha = 1, f.strokeStyle = e.color, f.lineWidth = 2 * e.borderThickness, c = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(e.x3 - c, Math.min(e.y2, e.y3)), f.lineTo(e.x3 - c, Math.min(e.y1, e.y4)), f.stroke(), f.beginPath(), f.moveTo(e.x3 - c, Math.max(e.y1, e.y4)), f.lineTo(e.x3 - c, Math.max(e.y2, e.y3)), f.stroke(), R(f, e.x1, Math.min(e.y1,
                            e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), f.globalAlpha = 1) : "ohlc" === c.type ? (f.globalAlpha = 1, f.strokeStyle = e.color, f.lineWidth = 2 * e.borderThickness, c = 0 === f.lineWidth % 2 ? 0 : 0.5, f.beginPath(), f.moveTo(e.x3 - c, e.y2), f.lineTo(e.x3 - c, e.y3), f.stroke(), f.beginPath(), f.moveTo(e.x3, e.y1), f.lineTo(e.x1, e.y1), f.stroke(), f.beginPath(), f.moveTo(e.x3, e.y4), f.lineTo(e.x2, e.y4), f.stroke(), f.globalAlpha = 1) : "boxAndWhisker" === c.type ? (f.save(), f.globalAlpha = 1, f.strokeStyle = e.stemColor,
                            f.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (f.beginPath(), f.moveTo(e.x3, e.y2 + e.borderThickness / 2), f.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), f.stroke(), f.beginPath(), f.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), f.lineTo(e.x3, e.y3 - e.borderThickness / 2), f.stroke()), f.beginPath(), R(f, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1),
                            f.globalAlpha = 1, f.strokeStyle = e.whiskerColor, f.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (f.beginPath(), f.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), f.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), f.stroke(), f.beginPath(), f.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), f.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), f.stroke()), f.globalAlpha = 1, f.strokeStyle = e.lineColor, f.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (f.beginPath(), f.moveTo(e.x1, e.y5), f.lineTo(e.x2, e.y5), f.stroke()),
                            f.restore(), f.globalAlpha = 1) : "error" === c.type && z(f, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3))
                }
            }
            f.restore();
            f.globalAlpha = 1;
            f.beginPath()
        };
        Z.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            for (var f = null, b = null, c = null, e = 0, g = "", h = !0, m = 0; m < a.length; m++)
                if (a[m].dataSeries.toolTipContent || a[m].dataPoint.toolTipContent) {
                    h = !1;
                    break
                }
            if (h && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
                    chart: this.chart,
                    toolTip: this.options,
                    entries: a
                },
                f = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var n = null, l = "", m = 0; m < a.length; m++) b = a[m].dataSeries, c = a[m].dataPoint, e = a[m].index, g = "", 0 === m && (h && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? l += "undefined" !== typeof this.chart.axisX[0].labels[c.x] ? this.chart.axisX[0].labels[c.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (l += "undefined" !== typeof this.chart.axisX2[0].labels[c.x] ? this.chart.axisX2[0].labels[c.x] :
                    "{x}"), l += "</br>", l = this.chart.replaceKeywordsWithValue(l, c, b, e)), null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" ===
                    b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += n != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", n = b.axisXIndex) : "bubble" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += n != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" :
                        "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += n != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" :
                        ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === b.type || "ohlc" === b.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += n != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content &&
                        "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === b.type && (this.chart.axisX && 1 < this.chart.axisX.length && (g += n != b.axisXIndex ? b.axisX.title ? b.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !==
                        typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"), null === f && (f = ""), !0 === this.reversed ?
                    (f = this.chart.replaceKeywordsWithValue(g, c, b, e) + f, m < a.length - 1 && (f = "</br>" + f)) : (f += this.chart.replaceKeywordsWithValue(g, c, b, e), m < a.length - 1 && (f += "</br>")));
                null !== f && (f = l + f)
            } else {
                b = a[0].dataSeries;
                c = a[0].dataPoint;
                e = a[0].index;
                if (null === c.toolTipContent || "undefined" === typeof c.toolTipContent && null === b.options.toolTipContent) return null;
                "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "column" === b.type || "bar" === b.type || "scatter" ===
                    b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "waterfall" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ?
                    b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === b.type || "doughnut" === b.type || "funnel" === b.type || "pyramid" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.name ?
                        "{name}:</span>&nbsp;&nbsp;" : c.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === b.type || "ohlc" ===
                    b.type ? g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === b.type && (g = c.toolTipContent ? c.toolTipContent : b.toolTipContent ? b.toolTipContent : this.content && "function" !==
                        typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (c.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null ===
                    f && (f = "");
                f += this.chart.replaceKeywordsWithValue(g, c, b, e)
            }
            return f
        };
        Z.prototype.enableAnimation = function() {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition
            }
        };
        Z.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
                "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        Z.prototype.hide = function(a) {
            this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
        };
        Z.prototype.show = function(a, f, b) {
            this._updateToolTip(a, f, "undefined" === typeof b ? !1 : b)
        };
        Z.prototype.fixMozTransitionDelay = function(a, f) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition =
                this.getContainerTransition(0);
            else {
                var b = parseFloat(this.container.style.left),
                    b = isNaN(b) ? 0 : b,
                    c = parseFloat(this.container.style.bottom),
                    c = isNaN(c) ? 0 : c;
                10 < Math.sqrt(Math.pow(b - a, 2) + Math.pow(c - f, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
            }
        };
        Z.prototype.getContainerTransition = function(a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
        };
        da.prototype.reset = function() {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            w && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath())
        };
        da.prototype.getNewObjectTrackingId = function() {
            return ++this.lastObjectId
        };
        da.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var f = [],
                    b = Ma(a),
                    c = null;
                if ((c = this.chart.getObjectAtXY(b.x, b.y, !1)) && "undefined" !== typeof this.objectMap[c])
                    if (c = this.objectMap[c], "dataPoint" === c.objectType) {
                        var e = this.chart.data[c.dataSeriesIndex],
                            g = e.dataPoints[c.dataPointIndex],
                            h = c.dataPointIndex;
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: g,
                            dataSeries: e.options,
                            dataPointIndex: h,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: g,
                            userContext: g,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        f.push(c);
                        c = this.objectMap[e.id];
                        c.eventParameter = {
                            x: b.x,
                            y: b.y,
                            dataPoint: g,
                            dataSeries: e.options,
                            dataPointIndex: h,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        c.eventContext = {
                            context: e,
                            userContext: e.options,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        f.push(this.objectMap[e.id])
                    } else "legendItem" === c.objectType && (e = this.chart.data[c.dataSeriesIndex], g = null !== c.dataPointIndex ? e.dataPoints[c.dataPointIndex] : null, c.eventParameter = {
                        x: b.x,
                        y: b.y,
                        dataSeries: e.options,
                        dataPoint: g,
                        dataPointIndex: c.dataPointIndex,
                        dataSeriesIndex: c.dataSeriesIndex,
                        chart: this.chart
                    }, c.eventContext = {
                        context: this.chart.legend,
                        userContext: this.chart.legend.options,
                        mouseover: "itemmouseover",
                        mousemove: "itemmousemove",
                        mouseout: "itemmouseout",
                        click: "itemclick"
                    }, f.push(c));
                e = [];
                for (b = 0; b < this.mouseoveredObjectMaps.length; b++) {
                    g = !0;
                    for (c = 0; c < f.length; c++)
                        if (f[c].id === this.mouseoveredObjectMaps[b].id) {
                            g = !1;
                            break
                        }
                    g ? this.fireEvent(this.mouseoveredObjectMaps[b], "mouseout", a) : e.push(this.mouseoveredObjectMaps[b])
                }
                this.mouseoveredObjectMaps = e;
                for (b = 0; b < f.length; b++) {
                    e = !1;
                    for (c = 0; c < this.mouseoveredObjectMaps.length; c++)
                        if (f[b].id === this.mouseoveredObjectMaps[c].id) {
                            e = !0;
                            break
                        }
                    e || (this.fireEvent(f[b], "mouseover", a), this.mouseoveredObjectMaps.push(f[b]));
                    "click" === a.type ? this.fireEvent(f[b], "click", a) : "mousemove" === a.type && this.fireEvent(f[b], "mousemove", a)
                }
            }
        };
        da.prototype.fireEvent = function(a, f, b) {
            if (a && f) {
                var c = a.eventParameter,
                    e = a.eventContext,
                    g = a.eventContext.userContext;
                g && (e && g[e[f]]) && g[e[f]].call(g, c);
                "mouseout" !== f ? g.cursor && g.cursor !== b.target.style.cursor && (b.target.style.cursor = g.cursor) : (b.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === f && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) &&
                    this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], c);
                "click" === f && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], c)
            }
        };
        oa.prototype.animate = function(a, f, b, c, e) {
            var g = this;
            this.chart.isAnimating = !0;
            e = e || I.easing.linear;
            b && this.animations.push({
                startTime: (new Date).getTime() + (a ? a : 0),
                duration: f,
                animationCallback: b,
                onComplete: c
            });
            for (a = []; 0 < this.animations.length;)
                if (f = this.animations.shift(),
                    b = (new Date).getTime(), c = 0, f.startTime <= b && (c = e(Math.min(b - f.startTime, f.duration), 0, 1, f.duration), c = Math.min(c, 1), isNaN(c) || !isFinite(c)) && (c = 1), 1 > c && a.push(f), f.animationCallback(c), 1 <= c && f.onComplete) f.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
                g.animate.call(g)
            }) : this.chart.isAnimating = !1
        };
        oa.prototype.cancelAllAnimations = function() {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window,
                this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        };
        var I = {
                yScaleAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas,
                            e = f.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, e - e * a, b.canvas.width / X, a * b.canvas.height / X)
                    }
                },
                xScaleAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas,
                            e = f.animationBase;
                        b.drawImage(c, 0, 0, c.width, c.height, e - e * a, 0, a * b.canvas.width / X, b.canvas.height / X)
                    }
                },
                xClipAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas;
                        b.save();
                        0 < a && b.drawImage(c, 0, 0, c.width * a, c.height, 0, 0, c.width * a / X, c.height / X);
                        b.restore()
                    }
                },
                fadeInAnimation: function(a, f) {
                    if (0 !== a) {
                        var b = f.dest,
                            c = f.source.canvas;
                        b.save();
                        b.globalAlpha = a;
                        b.drawImage(c, 0, 0, c.width, c.height, 0, 0, b.canvas.width / X, b.canvas.height / X);
                        b.restore()
                    }
                },
                easing: {
                    linear: function(a, f, b, c) {
                        return b * a / c + f
                    },
                    easeOutQuad: function(a, f, b, c) {
                        return -b * (a /= c) * (a - 2) + f
                    },
                    easeOutQuart: function(a, f, b, c) {
                        return -b * ((a = a / c - 1) * a * a * a - 1) + f
                    },
                    easeInQuad: function(a, f, b, c) {
                        return b * (a /= c) * a + f
                    },
                    easeInQuart: function(a,
                        f, b, c) {
                        return b * (a /= c) * a * a * a + f
                    }
                }
            },
            ga = {
                drawMarker: function(a, f, b, c, e, g, h, m) {
                    if (b) {
                        var n = 1;
                        b.fillStyle = g ? g : "#000000";
                        b.strokeStyle = h ? h : "#000000";
                        b.lineWidth = m ? m : 0;
                        "circle" === c ? (b.moveTo(a, f), b.beginPath(), b.arc(a, f, e / 2, 0, 2 * Math.PI, !1), g && b.fill(), m && (h ? b.stroke() : (n = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = n))) : "square" === c ? (b.beginPath(), b.rect(a - e / 2, f - e / 2, e, e), g && b.fill(), m && (h ? b.stroke() : (n = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha =
                            n))) : "triangle" === c ? (b.beginPath(), b.moveTo(a - e / 2, f + e / 2), b.lineTo(a + e / 2, f + e / 2), b.lineTo(a, f - e / 2), b.closePath(), g && b.fill(), m && (h ? b.stroke() : (n = b.globalAlpha, b.globalAlpha = 0.15, b.strokeStyle = "black", b.stroke(), b.globalAlpha = n)), b.beginPath()) : "cross" === c && (b.strokeStyle = g, b.lineWidth = e / 4, b.beginPath(), b.moveTo(a - e / 2, f - e / 2), b.lineTo(a + e / 2, f + e / 2), b.stroke(), b.moveTo(a + e / 2, f - e / 2), b.lineTo(a - e / 2, f + e / 2), b.stroke())
                    }
                },
                drawMarkers: function(a) {
                    for (var f = 0; f < a.length; f++) {
                        var b = a[f];
                        ga.drawMarker(b.x, b.y, b.ctx,
                            b.type, b.size, b.color, b.borderColor, b.borderThickness)
                    }
                }
            };
        return u
    }();
    x.Chart.version = "v2.0 Beta 1"
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();