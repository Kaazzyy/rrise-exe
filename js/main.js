! function e(root) {
    if ("?vanilla" === location.search) return;
    {
        let t = "https://aetlis.io/kazzy";
        location.href !== t && (location.href = t)
    }
    document.title = "Aetlis.io - Kazzy da GOAT", window.customModal = (e, t) => {
        document.getElementsByClassName("fa-clipboard-list")[0].click(), setTimeout(() => {
            document.getElementsByClassName("content fade-box")[0].getElementsByTagName("div")[0].innerHTML = e, t && setTimeout(t, 50)
        }, 50)
    };

    window.CellOverlayManager = { cache:{} }
    
    CellOverlayManager.list = [
        {
            name:'',
            skinUrl:'',
            isLockedToColor:false,
            isLockedToName:false,
            url:'',
            forceSkin: ''
            
        }
    ]
    
    CellOverlayManager.updateOverlays = () => {
        CellOverlayManager.list.forEach(overlay => {
            let cells = Array.from(GAME.cells, ([name, value]) => value);
            cells = cells.filter(x=>{
                if(!x.player || x.destroyed || !x.sprite || x.overlay && x.overlay.includes(overlay.url)) return false
    
                let qualify = false
                if(overlay.skinUrl == x.player.skinUrl || overlay.forceSkin == x.player.skinUrl) qualify = true
                if(overlay.isLockedToColor && !x.player.perk_colorCss) qualify = true
                if(overlay.isLockedToName && x.player.name !== overlay.name) qualify = true
                if(qualify && overlay.forceSkin && x.player.skinUrl !== overlay.forceSkin) x.player.setSkin(overlay.forceSkin);
    
                return qualify
            })
    
            cells.forEach(c=> { CellOverlayManager.addOverlay(c, overlay.url) })
        })
    }
    
    CellOverlayManager.addOverlay = (cell, url) => {
        if(!cell.sprite) return; 
    
        const Sprite = CellOverlayManager.cache[url] ? new PIXI.Sprite(CellOverlayManager.cache[url].texture) : new PIXI.Sprite.from(url)
        if(!CellOverlayManager.cache[url]) CellOverlayManager.cache[url] = Sprite 
    
        Sprite.anchor.set(0.5)
        Sprite.height = Sprite.width = 1024
        Sprite.alpha = 0.95
        Sprite.zIndex = -1
    
        if(!cell.overlay) cell.overlay = []
        cell.overlay.push(url)
        cell.sprite.addChild(Sprite)
    }
    
    CellOverlayManager.interval = setInterval(CellOverlayManager.updateOverlays, 25)
    
    
    window.GifSkinManager = { running:[], count:{} }
    
    GifSkinManager.list = [
        {
            name:'zimek', 
            skinUrl:'https://skins.vanis.io/s/QyYQz0',
            isLockedToColor:false,
            isLockedToName:true,
            gif:{
                url:'https://github.com/Zimehx/gif_source',
                count:45,
                format:'.gif',
                delay:30
            }
        }
    ]
    
    GifSkinManager.stopAll = () =>{
        GifSkinManager.running.forEach(x=>{clearInterval(x)})
        GifSkinManager.running = []
    }
    
    GifSkinManager.start = (pid, settings) => {
        GifSkinManager.count[settings.url] = 1
    
        var interval = setInterval(()=>{
            if(GifSkinManager.count[settings.url] > settings.count) GifSkinManager.count[settings.url] = 1
    
            GAME.playerManager.players.get(pid).setSkin(settings.url + GifSkinManager.count[settings.url] + settings.format)
    
            GifSkinManager.count[settings.url]++
        }, settings.delay)
    
        GifSkinManager.running.push(interval)
    }
    
    GifSkinManager.check = () => {
        if(!GAME.connection.opened) return;
        GifSkinManager.list.forEach(x=>{
            var check = Object.values(Object.fromEntries(GAME.playerManager.players.entries())).filter(y=>{
                let qualify = false
    
                if(y.skinUrl == x.skinUrl) qualify = true
                if(x.isLockedToName && !y.name == x.name) qualify = true;
                if(x.isLockedToColor && !y.perk_colorCss) qualify = true;
    
                return qualify
            })
    
            if(check.length){
                check.forEach(y=>{ GifSkinManager.start(y.pid, x.gif, x) })
            }
        })
    }
    
    class s {
        constructor(e, t) {
            if (this.view = null, e instanceof DataView) this.view = e;
            else {
                if (!(e instanceof ArrayBuffer)) throw TypeError("First argument to SmartBuffer constructor must be an ArrayBuffer or DataView");
                this.view = new DataView(e)
            }
            this.offset = t || 0
        }
        ensureCapacity(e) {
            let d = 1;
            let t = this.offset + e;
            if (t > this.length) {
                let s = new ArrayBuffer(t),
                    i = new Uint8Array(s);
                i.set(new Uint8Array(this.buffer)), this.view = new DataView(s)
            }
        }
        static fromSize(e) {
            return new this(new ArrayBuffer(e), 0)
        }
        static fromBuffer(e, t) {
            return new this(e, t || 0)
        }
        toBuffer() {
            return this.buffer
        }
        get buffer() {
            return this.view?.buffer || null
        }
        get length() {
            return this.view?.byteLength || 0
        }
        get eof() {
            return this.offset >= this.length
        }
        read(e, t, s, i) {
            let a = e.call(this.view, i ?? this.offset, s);
            return null == i && (this.offset += t), a
        }
        write(e, t, s, i) {
            this.ensureCapacity(t), e.call(this.view, this.offset, s, i), this.offset += t
        }
        readInt8(e) {
            return this.read(DataView.prototype.getInt8, 1, null, e)
        }
        readUInt8(e) {
            return this.read(DataView.prototype.getUint8, 1, null, e)
        }
        readInt16LE(e) {
            return this.read(DataView.prototype.getInt16, 2, !0, e)
        }
        readInt16BE(e) {
            return this.read(DataView.prototype.getInt16, 2, !1, e)
        }
        readUInt16LE(e) {
            return this.read(DataView.prototype.getUint16, 2, !0, e)
        }
        readUInt16BE(e) {
            return this.read(DataView.prototype.getUint16, 2, !1, e)
        }
        readInt32LE(e) {
            return this.read(DataView.prototype.getInt32, 4, !0, e)
        }
        readInt32BE(e) {
            return this.read(DataView.prototype.getInt32, 4, !1, e)
        }
        readUInt32LE(e) {
            return this.read(DataView.prototype.getUint32, 4, !0, e)
        }
        readUInt32BE(e) {
            return this.read(DataView.prototype.getUint32, 4, !1, e)
        }
        readString16() {
            let e = "";
            for (;;) {
                let t = this.eof ? 0 : this.readUInt16LE();
                if (0 === t) break;
                e += String.fromCharCode(t)
            }
            return e
        }
        readString() {
            let e = "";
            for (;;) {
                let t = this.eof ? 0 : this.readUInt8();
                if (0 === t) break;
                e += String.fromCharCode(t)
            }
            return e
        }
        readEscapedString() {
            return decodeURIComponent(escape(this.readString()))
        }
        writeInt8(e) {
            this.write(DataView.prototype.setInt8, 1, e, null)
        }
        writeUInt8(e) {
            this.write(DataView.prototype.setUint8, 1, e, null)
        }
        writeInt16LE(e) {
            this.write(DataView.prototype.setInt16, 2, e, !0)
        }
        writeInt16BE(e) {
            this.write(DataView.prototype.setInt16, 2, e, !1)
        }
        writeUInt16LE(e) {
            this.write(DataView.prototype.setUint16, 2, e, !0)
        }
        writeUInt16BE(e) {
            this.write(DataView.prototype.setUint16, 2, e, !1)
        }
        writeInt32LE(e) {
            this.write(DataView.prototype.setInt32, 4, e, !0)
        }
        writeInt32BE(e) {
            this.write(DataView.prototype.setInt32, 4, e, !1)
        }
        writeUInt32LE(e) {
            this.write(DataView.prototype.setUint32, 4, e, !0)
        }
        writeUInt32BE(e) {
            this.write(DataView.prototype.setUint32, 4, e, !1)
        }
        writeString(e) {
            let t = e.length;
            this.ensureCapacity(t);
            let s = this.offset;
            for (this.offset += t; t--;) this.view.setUint8(s + t, e.charCodeAt(t))
        }
        writeStringNT(e) {
            this.writeString(e), this.writeUInt8(0)
        }
        writeEscapedString(e) {
            this.writeString(unescape(encodeURIComponent(e)))
        }
        writeEscapedStringNT(e) {
            this.writeStringNT(unescape(encodeURIComponent(e)))
        }
    }
    window.SmartBuffer = s;
    let i = [5, 104, 253, 62, 175, 116, 238, 41];
    class a {
        constructor(e) {
            this.data = e
        }
        writeIndex(e, t) {
            let s = this.data[t],
                a = s + 5 & 7,
                n = e[t > 0 ? t - 1 : 0] ^ i[t];
            e.push(((s << a | s >>> 8 - a) & 255 ^ n ^ 62) & 255)
        }
        build(e = !1) {
            let t = [];
            for (let s = 0; s < 8; s++) this.writeIndex(t, s);
            let i = 1 + Math.floor(2147483646 * Math.random());
            return t.push((t[0] ^ i >> 24) & 255), t.push((t[1] ^ i >> 16) & 255), t.push((t[2] ^ i >> 8) & 255), t.push((i ^ t[3]) & 255), t.push((t[0] ^ +e ^ 31) & 255), t
        }
    }
    var n = [.79, 1.52, 2.35, 3, 3.92, 4.7, 5.5, 6.2];

    function o(e) {
        for (var t = 9e9, s = 0, i = 0; e.length < i; i++) e[i].id < t && (s = i, t = e[i].id);
        return e.splice(s, 1), e
    }
    String.prototype.toHHMMSS = function() {
            var e = parseInt(this, 10),
                t = Math.floor(e / 3600),
                s = Math.floor((e - 3600 * t) / 60);
            return `${0!==s?`${s}m `:""}${e-3600*t-60*s}s`
        }, window.makeid = e => {
            for (var t = "", s = "X0123456789", i = s.length, a = 0; a < e; a++) t += s.charAt(Math.floor(Math.random() * i));
            return t
        }, window.$ = (e, t = document) => t.querySelector(e), window.extraServers = [{
            name: "Local:8080",
            domain: "localhost",
            port: 8080,
            mode: "Instant",
            players: "0",
            slots: "00",
            region: "EU",
            url: "ws://localhost:8080"
        }],
        function(e) {
            var t, s = (t = !0, function(e, s) {
                var i = t ? function() {
                    if (s) {
                        var t = s.apply(e, arguments);
                        return s = null, t
                    }
                } : function() {};
                return t = !1, i
            });

            function i(t) {
                var i = s(this, function() {
                    var e = function() {
                        return !e.constructor('return /" + this + "/')().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}").test(i)
                    };
                    return e()
                });
                i();
                for (var n, l, c = t[0], h = t[1], d = t[2], u = 0, g = []; u < c.length; u++) l = c[u], Object.prototype.hasOwnProperty.call(o, l) && o[l] && g.push(o[l][0]), o[l] = 0;
                for (n in h) Object.prototype.hasOwnProperty.call(h, n) && (e[n] = h[n]);
                for (p && p(t); g.length;) g.shift()();
                return r.push.apply(r, d || []), a()
            }

            function a() {
                for (var e, t = 0; t < r.length; t++) {
                    for (var s = r[t], i = !0, a = 1; a < s.length; a++) 0 !== o[s[a]] && (i = !1);
                    i && (r.splice(t--, 1), e = l(l.s = s[0]))
                }
                return e
            }
            var n = {},
                o = {
                    0: 0
                },
                r = [];

            function l(t) {
                if (n[t]) return n[t].exports;
                var s = n[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return e[t].call(s.exports, s, s.exports, l), s.l = !0, s.exports
            }
            window.getModule = l, l.m = e, l.c = n, l.d = function(e, t, s) {
                l.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: s
                })
            }, l.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, l.t = function(e, t) {
                if (1 & t && (e = l(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                var s = Object.create(null);
                if (l.r(s), Object.defineProperty(s, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var i in e) l.d(s, i, (function(t) {
                        return e[t]
                    }).bind(null, i));
                return s
            }, l.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return l.d(t, "a", t), t
            }, l.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, l.p = "";
            var c = window.webpackJsonp = window.webpackJsonp || [],
                h = c.push.bind(c);
            c.push = i, c = c.slice();
            for (var d = 0; d < c.length; d++) i(c[d]);
            var p = h;
            r.push([118, 1]), a()
        }([, function(e, t, i) {
            let n = i(5),
                {
                    writeUserData: o
                } = i(8),
                r = i(4),
                l = i(24),
                c = i(121),
                h = i(125),
                d = i(78),
                p = i(12),
                u = i(23),
                g = i(128),
                {
                    lerp: A,
                    clampNumber: m,
                    hideCaptchaBadge: v
                } = i(8),
                {
                    htmlEncode: f
                } = i(8),
                C, y = {
                    connectionUrl: null,
                    selectedServer: null,
                    spectators: 0,
                    lifeState: 0,
                    allowed: !1,
                    playButtonDisabled: !1,
                    playButtonText: "Savage 😎",
                    deathDelay: !1,
                    autoRespawning: !1
                },
                w = (e, t) => {
                    n.toast.fire({
                        type: t ? "error" : "info",
                        title: e,
                        timer: t ? 5e3 : 2e3
                    })
                },
                I = (e, t) => {
                    for (; e.length;) e.pop().destroy(t)
                };
            document.body.oncontextmenu = e => e.target?.id === "email";
            class k {
                constructor() {
                    this.running = !1, this.protocol, this.modeId, this.instanceSeed, this.replaying, this.nwDataMax, this.nwDataSent, this.nwDataTotal, this.nwData, this.playerId, this.multiboxPid, this.activePid, this.tagId, this.spectating, this.alive = !1, this.center = {
                        x: 0,
                        y: 0
                    }, y.spectators, y.lifeState, this.score = 0, this.highestScore = 0, this.killCount = 0, this.timeAlive = 0, this.clientVersion = 999, this.events = new u, this.settings = r, this.renderer = l, this.skinLoader = new g, p.virus.loadVirusFromUrl(r.virusImageUrl), this.state = y, h.useGame(this), this.playback, this.connection = new class e {
                        constructor() {
                            this.socketCount = 0, this.opened = !1
                        }
                        onClosed(e) {
                            delete C.currentWsId, this.opened = !1, C.running && C.stop();
                            let t;
                            if (1003 === e.code) t = 1500, w("Server restarted cuz I cooked 🚬", !1);
                            else {
                                t = 3500 + ~~(100 * Math.random());
                                let s = "Nigga server is full go play terasplit 😂";
                                if(e.reason){
                                    (s += ` (${e.reason})`), w(s, !0)
                                    if(e.reason.startsWith('Nigga is too old for this game: dc: kaazzyy'))GAME.clientVersion++;
                                }
                            }
                            setTimeout(() => {
                                this.opened || C.events.$emit("reconnect-server")
                            }, t), C.showMenu(!0)
                        }
                        onRejected() {
                            delete C.currentWsId, this.opened = !1, w("Vanis servers exploding 🤯", !0)
                        }
                        open(e) {
                            C.dual.close(), C.running && C.stop(), this.close(), C.events.$emit("chat-clear"), this.opened = !0;
                            let t = C.ws = new WebSocket(e, "tFoL46WDlZuRja7W6qCl");
                            t.binaryType = "arraybuffer", t.packetCount = 0, t.onopen = () => {
                                this.opened && (C.currentWsId = t.id = this.socketCount++, C.state.connectionUrl = e, t.onclose = this.onClosed.bind(this))
                            }, t.onclose = this.onRejected.bind(this), t.onmessage = e => {
                                let {
                                    data: t
                                } = e;
                                C.nwData += t.byteLength, C.parseMessage(s.fromBuffer(t))
                            }
                            GifSkinManager.stopAll()
                        }
                        close() {
                            C.dual.close(), C.debugElement.innerHTML = "";
                            let {
                                ws: e
                            } = C;
                            e && (e.onmessage = null, e.onclose = null, e.onerror = null, e.close(), delete C.ws, delete C.state.connectionUrl, this.opened = !1)
                        }
                        send(e, t, i = !1) {
                            e instanceof s && (e = e.view), t = !!t;
                            let {
                                dual: a
                            } = C;
                            if (t ? !(a.opened && (i || a.ready)) : !this.opened) return !1;
                            let n = t ? a.ws : C.ws;
                            return console.assert(!!n, "Socket not defined?"), n.send(e), !0
                        }
                        sendMouse() {
                            let e = s.fromSize(5);
                            e.writeUInt8(16);
                            let {
                                x: t,
                                y: i
                            } = C.mouse;
                            e.writeInt16LE(t), e.writeInt16LE(i);
                            let {
                                dual: a
                            } = C;
                            this.send(e, a.focused), a.connected && (C.isAlive(!1) && C.isAlive(!0) || this.send(e, C.isAlive(!1)))
                        }
                        sendOpcode(e, t) {
                            let i = s.fromSize(1);
                            i.writeUInt8(e), this.send(i, t)
                        }
                        ping() {
                            C.pingStamp = performance.now(), this.sendOpcode(3)
                        }
                        sendJoinData(e, t) {
                            let i = s.fromSize(2 + e.length + 7);
                            i.writeUInt8(5), i.writeUInt8(C.clientVersion), i.ensureCapacity(e.length), e.forEach(e => i.writeUInt8(e)), o(i, !!t);
                            let a = localStorage.vanisToken;
                            a && /^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i.test(C.ws.url) && i.writeStringNT(a), this.send(i, t, !!t)
                        }
                        sendRecaptchaToken(e, t) {
                            e = unescape(encodeURIComponent(e));
                            let i = s.fromSize(1 + e.length + 1);
                            i.writeUInt8(11), i.writeStringNT(e), this.send(i, t)
                        }
                        sendChatMessage(e, t) {
                            if ((e = unescape(encodeURIComponent(e))).startsWith("/")) {
                                window.client && window.client.chatted(e);
                                return
                            }
                            let i = s.fromSize(1 + e.length + 1);
                            i.writeUInt8(99), i.writeString(e), this.send(i, t)
                        }
                    }, this.dual, this.pingStamp, this.timeStamp, this.serverTick, this.cells = new Map, this.destroyedCells = [], this.cellCount = 0, this.ownedCells = new Set, this.rawMouse, this.mouse, this.mouseZoom, this.mouseZoomMin, this.camera, this.massTextPool = [], this.crownPool = [], c.useGame(this), this.scene, this.playerManager, this.ticker, this.splitCount, this.moveWaitUntil, this.stopMovePackets, this.mouseFrozen, this.moveInterval, setInterval(() => this.events.$emit("every-second"), 1e3), setInterval(() => this.events.$emit("every-minute"), 6e4)
                }
                isAlive(e = !1) {
                    let {
                        dual: t
                    } = this;
                    return e ? t.opened && t.alive : this.connection.opened && this.alive
                }
                get allCells() {
                    let e = this.cells,
                        {
                            dual: t
                        } = this;
                    if (!t.opened) return e;
                    e = new Map([...e]);
                    let s = t.cells;
                    return s.forEach((t, s) => {
                        e.has(s) || e.set(s, t)
                    }), e
                }
                updateStates(e) {
                    let t = !1,
                        s = !1,
                        {
                            dual: i
                        } = this;
                    return C.allCells.forEach(e => {
                        e.pid && (e.pid == this.playerId ? this.alive = t = !0 : i.opened && e.pid == i.pid && (i.alive = s = !0))
                    }), this.alive && !t && (this.alive = !1), i.alive && !s && (i.alive = !1), y.lifeState = (t ? 1 : 0) + (s ? 2 : 0), e ? s : t
                }
                start(e) {
                    if (!(e.protocol && e.instanceSeed && e.playerId && e.border)) throw Error("Lacking mandatory data");
                    this.running = !0, this.protocol = e.protocol, this.modeId = e.gamemodeId || 0, this.instanceSeed = e.instanceSeed, this.replaying = !!e.replayUpdates, this.nwDataMax = this.nwDataSent = this.nwDataTotal = this.nwData = 0, this.pingStamp = 0, this.timeStamp = 0, this.serverTick = 0, this.playerId = e.playerId, this.multiboxPid = 0, this.activePid = this.playerId, this.tagId = null, this.spectating = !1, this.alive = !1, y.spectators = 0, y.lifeState = 0, this.score = 0, this.highestScore = 0, this.cellCount = 0, this.rawMouse = {
                        x: 0,
                        y: 0
                    }, this.mouse = {
                        x: 0,
                        y: 0
                    };
                    let t = this.border = e.border;
                    this.food = e.food, this.mouseZoom = .3, this.mouseZoomMin = .01, this.camera = {
                        time: 0,
                        sx: 0,
                        sy: 0,
                        ox: t.x,
                        nx: t.x,
                        oy: t.y,
                        ny: t.y,
                        oz: this.mouseZoom,
                        nz: this.mouseZoom
                    }, this.massTextPool = [], this.crownPool = [];
                    let i = PIXI.utils.isWebGLSupported() && r.useWebGL && r.showBackgroundImage,
                        a = this.scene = new c(t, i);
                    if (a.container.alpha = r.gameAlpha || 1, a.container.pivot.set(t.x, t.y), a.container.scale.set(this.zoom), this.playerManager = new h, this.ticker = new PIXI.Ticker, this.ticker.add(this.onTick.bind(this)), y.selectedServer && y.connectionUrl !== y.selectedServer.url && (y.selectedServer = null), this.replaying) {
                        let {
                            playback: n
                        } = this, o = e.replayUpdates;
                        n.set(o), this.moveInterval = setInterval(n.next.bind(n), 40), this.events.$emit("show-replay-controls", o.length), this.events.$emit("minimap-stats-visible", !1)
                    } else this.splitCount = 0, this.moveWaitUntil = 0, this.stopMovePackets = 0, this.moveToCenterOfCells = 0, this.mouseFrozen = !1, r.minimapEnabled && this.events.$emit("minimap-show"), r.showChat && this.events.$emit("chat-visible", {
                        visible: !0
                    }), this.events.$emit("leaderboard-show"), this.events.$emit("stats-visible", !0), this.moveInterval = setInterval(() => {
                        let {
                            dual: e
                        } = this;
                        if (this.stopMovePackets === 1 + +e.focused) return;
                        let t = this.moveToCenterOfCells;
                        if (0 != t && this.connection.sendOpcode(9, 2 == t), e.focused ? 2 == t : 1 == t) return;
                        let i = s.fromSize(5);
                        i.writeUInt8(16);
                        let {
                            x: a,
                            y: n
                        } = this.mouse;
                        i.writeInt16LE(a), i.writeInt16LE(n), this.connection.send(i, e.focused)
                    }, 40), this.events.$on("every-second", k.everySecond), y.allowed = !0;
                    this.ticker.start(), this.eventListeners(!0), this.events.$emit("game-started")
                }
                stop() {
                    let {
                        dual: e
                    } = this;
                    e.opened && e.close(), this.running = !1, delete this.protocol, delete this.modeId, delete this.instanceSeed, delete this.replaying, delete this.nwDataMax, delete this.nwDataSent, delete this.nwDataTotal, delete this.nwData, delete this.playerId, delete this.multiboxPid, delete this.activePid, delete this.tagId, this.spectating = !1, this.alive = !1, y.spectators = 0, y.lifeState = 0, y.allowed = !1, y.playButtonDisabled = !1, y.playButtonText = "Play", this.eventListeners(!1), delete this.score, delete this.highestScore, delete this.pingStamp, delete this.timeStamp, delete this.serverTick, delete this.playerId, delete this.multiboxPid, delete this.activePid, delete this.tagId, delete this.spectating, this.clearCells(), delete this.cellCount, delete this.rawMouse, delete this.mouse, delete this.mouseZoom, delete this.mouseZoomMin, delete this.camera, this.ticker && (this.ticker.stop(), delete this.ticker), delete this.splitCount, delete this.moveWaitUntil, delete this.stopMovePackets, delete this.moveToCenterOfCells, delete this.mouseFrozen, clearInterval(this.moveInterval), delete this.moveInterval, this.playback.reset(), this.events.$off("every-second", k.everySecond), this.skinLoader.clearCallbacks(), this.events.$emit("minimap-stats-visible", !0), this.events.$emit("stats-visible", !1), this.events.$emit("chat-visible", {
                        visible: !1
                    }), this.events.$emit("leaderboard-hide"), this.events.$emit("minimap-hide"), this.events.$emit("minimap-destroy"), this.events.$emit("show-replay-controls", !1), this.events.$emit("cells-changed", 0), this.events.$emit("reset-cautions"), this.events.$emit("game-stopped"), this.playerManager.destroy(), delete this.playerManager;
                    let {
                        scene: t
                    } = this;
                    t && (t.destroyBackgroundImage(!1), t.uninstallMassTextFont(), t.container.destroy({
                        children: !0
                    }), delete this.scene), this.renderer.clear(), p.cells.destroyCache(), p.squares.destroyCache(), I(this.massTextPool, !0), I(this.crownPool), delete this.massTextPool, delete this.crownPool
                }
                showMenu(e) {
                    if (e ??= !this.app.showMenu, this.app.showDeathScreen) return !1;
                    if (this.app.showMenu = e, this.actions.stopMovement(e), e) this.events.$emit("menu-opened");
                    else {
                        let t = document.activeElement;
                        t?.id !== "chatbox-input" && l.view.focus(), this.stopMovePackets = 0, v()
                    }
                    return e
                }
                updateStats(e) {
                    this.events.$emit("stats-changed", {
                        ping: e,
                        fps: Math.round(this.ticker.FPS),
                        mass: this.score,
                        score: this.highestScore
                    }), this.events.$emit("minimap-stats-changed", {
                        playerCount: this.playerManager.playerCount,
                        spectators: y.spectators
                    })
                }
                static everySecond() {
                    (C.isAlive(!1) || C.isAlive(!0)) && C.timeAlive++, C.nwData > C.nwDataMax && (C.nwDataMax = C.nwData), C.nwDataTotal += C.nwData;
                    GifSkinManager.check()
                    let {
                        connection: e
                    } = C, {
                        debugElement: t
                    } = C;
                    if (t) {
                        if ((r.debugStats || r.clientStats) && e.opened) {
                            let s = C.dual.connected,
                                i = "";
                            if (r.debugStats && !C.replaying && (i += `
            NET: ${(C.nwData/1024).toFixed(0)} Kb/s <br>
            NET PEAK: ${(C.nwDataMax/1024).toFixed(0)} Kb/s <br>
            NET TOTAL: ${(C.nwDataTotal/1024/1024).toFixed(0)} MB <br>
            <br>`), r.clientStats) {
                                let {
                                    x: a,
                                    y: n
                                } = C.mouse;
                                i += `
        PID: ${C.playerId} <br>
        ${s?`DUAL PID: ${C.multiboxPid} <br>`:""}
        NODES: ${C.allCells.size} <br>
        `
                            }
                            t.innerHTML = i
                        } else "" !== t.innerHTML && (t.innerHTML = "")
                    } //        <b>(MOUSE)</b> ${a.toFixed(0)} ${n.toFixed(0)} <br>
                    C.nwData = 0, e.opened && e.ping();
                    let {
                        dual: o
                    } = C;
                    o.connected && (o.pingStamp = performance.now(), e.sendOpcode(3, !0))
                }
                clearCells() {
                    this.cells.forEach(e => e.destroy(1));
                    let {
                        destroyedCells: e
                    } = this;
                    for (; e.length;) e.pop().destroySprite()
                }
                onTick() {
                    let e = this.timeStamp = performance.now();
                    e >= this.moveWaitUntil && (this.updateMouse(), this.splitCount = 0);
                    let {
                        destroyedCells: t
                    } = this, s = t.length;
                    for (; s--;) {
                        let i = t[s];
                        i.update() && (i.destroySprite(), t.splice(s, 1))
                    }
                    let a = 0;
                    this.allCells.forEach(e => {
                        e.update(), e.pid == this.activePid && a++
                    }), this.cellCount != a && (this.cellCount = a, this.events.$emit("cells-changed", a));
                    let {
                        scene: n
                    } = this;
                    n.sort();
                    let o = this.updateCamera();
                    if (o) {
                        this.score = o;
                        let {
                            highestScore: r
                        } = this;
                        this.highestScore = r ? r < o ? o : r : o
                    } else this.isAlive(!0) || this.isAlive(!1) || (this.score = 0);
                    this.renderer.render(n.container)
                }
                updateCamera(e = !1) {
                    let {
                        scene: t,
                        camera: s
                    } = this, i = this.timeStamp - s.time, a = m(i / r.cameraMoveDelay, 0, 1), n = m(i / r.cameraZoomDelay, 0, 1), o = t.container.pivot.x = 1 == a ? s.nx : A(s.ox, s.nx, a), l = t.container.pivot.y = 1 == a ? s.ny : A(s.oy, s.ny, a), c = 1 == n ? s.nz : A(s.oz, s.nz, n);
                    t.container.scale.set(c);
                    let h = this.mouseZoom,
                        d = 0,
                        p = 0,
                        u = 0;
                    if (this.spectating) {
                        let {
                            sx: g,
                            sy: v
                        } = s;
                        d = g, p = v
                    } else {
                        let f = !1;
                        if (!this.replaying) {
                            let {
                                dual: y
                            } = this;
                            if (y.connected) {
                                let w = y.getDistanceFromOwner();
                                f = !!r.singleView || null == w || w > r.switchDistance * 1000
                            }
                        }
                        let I = 0,
                            k;
                        for (k of this.ownedCells.values()) {
                            if (f && k.pid != C.activePid) continue;
                            let b = Math.round(Math.pow(k.nSize / 10, 2));
                            d += k.nx * b, p += k.ny * b, I += k.nSize, u += b
                        }
                        u ? (d /= u, p /= u, r.autoZoom && (h *= Math.pow(Math.min(64 / I, 1), .27))) : (d = s.nx, p = s.ny)
                    }
                    return e ? (s.ox = o, s.oy = l, s.oz = c, s.nx = d, s.ny = p, s.nz = h, s.time = this.timeStamp, 0) : u
                }
                updateMouse(e = !1) { //
                    let t = this.scene.container,
                        {
                            x: s,
                            y: i
                        } = this.rawMouse;
                    "client" in window && (client.mouse = {
                        x: s,
                        y: i
                    }), (!this.mouseFrozen || e) && (this.mouse.x = m(t.pivot.x + (s - window.innerWidth / 2) / t.scale.x, -32768, 32767), this.mouse.y = m(t.pivot.y + (i - window.innerHeight / 2) / t.scale.y, -32768, 32767))
                }
                seededRandom(e) {
                    return (e = Math.sin(e) * (1e4 + this.instanceSeed)) - Math.floor(e)
                }
                createThumbnail(e = 240, t = 135) {
                    let s = this.scene.container,
                        i = new PIXI.Container;
                    i.pivot.x = s.position.x, i.pivot.y = s.position.y, i.position.x = e / 2, i.position.y = t / 2, i.scale.set(.25), i.addChild(s);
                    let {
                        renderer: a
                    } = this, n = PIXI.RenderTexture.create(e, t);
                    a.render(i, n), i.removeChild(s);
                    let o = a.plugins.extract.canvas(n),
                        l = document.createElement("canvas");
                    l.width = e, l.height = t;
                    let c = l.getContext("2d");
                    c.beginPath(), c.rect(0, 0, e, t), c.fillStyle = "#" + r.backgroundColor, c.fill(), c.drawImage(o, 0, 0, e, t);
                    let h = l.toDataURL();
                    return i.destroy(!0), h
                }
                setTagId(e) {
                    return e || (e = null), e !== this.tagId && (this.tagId = e, !0)
                }
                getMassText(e) {
                    return !r.shortMass || e < 1e3 ? e.toFixed(0) : (e / 1e3).toFixed(1) + "k"
                }
                shouldAutoRespawn(e) {
                    return !this.app.showMenu && (r.autoRespawn)
                }
                triggerDeathDelay(e) {
                    if (clearTimeout(this.deathTimeout), delete this.deathTimeout, e ? delete this.dual.autoRespawning : (y.deathDelay = !1, y.autoRespawning = !1), !r.autoRespawn) {
                        let t = [];
                        t.push(`Kills: ${this.killCount}`), t.push(`Time alive: ${this.timeAlive.toString().toHHMMSS()}`), t.push(`Highscore: ${this.highestScore.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}`), $(".bar").innerHTML = t.join("<br>"), this.killCount = 0, this.timeAlive = 0
                    }
                }
                triggerAutoRespawn(e) {
                    if (e) {
                        let {
                            dual: t
                        } = this;
                        t.autoRespawning = !1, t.spawn()
                    } else y.deathDelay = !1, y.autoRespawning = !1, this.actions.join()
                }
                handleDeath(e, t) {
                    e.readUInt16LE(), this.killCount += e.readUInt16LE(), e.readUInt32LE(), t || (y.deathDelay = !0);
                    let {
                        dual: s
                    } = this;
                    this.shouldAutoRespawn(t) ? t ? (s.autoRespawning = !0, s.ticksSinceDeath = 0) : (y.autoRespawning = !0, this.ticksSinceDeath = 0) : this.deathTimeout = setTimeout(this.triggerDeathDelay.bind(this, t), 900), s.updateOutlines()
                }
                parseLeaderboard(e) {
                    let t = [];
                    for (;;) {
                        let s = e.readUInt16LE();
                        if (0 == s) {
                            this.events.$emit("leaderboard-update", t);
                            return
                        }
                        let i = this.playerManager.getPlayer(s);
                        if (!i) continue;
                        let a = {
                            pid: s,
                            position: t.length + 1,
                            text: i.name,
                            color: i.perk_colorCss || "#ffffff",
                            bold: !!i.perk_color
                        };
                        t.push(a)
                    }
                }
                parseScrimmageLeaderboard(e) {
                    let t = [];
                    for (;;) {
                        let s = e.readUInt8();
                        if (0 == s) break;
                        let i = {};
                        if (1 & s && (i.position = e.readUInt8()), 2 & s && (i.pid = e.readUInt16LE()), 4 & s) i.text = e.readEscapedString(), i.color = "#ffffff";
                        else {
                            let a = 2 & s && this.playerManager.getPlayer(i.pid);
                            i.text = a ? a.name : "n/a", i.color = a && a.perk_colorCss || "#ffffff"
                        }
                        8 & s && (i.score = e.readEscapedString()), 16 & s && (i.color = "#" + ("00" + e.readUInt8().toString(16)).slice(-2) + ("00" + e.readUInt8().toString(16)).slice(-2) + ("00" + e.readUInt8().toString(16)).slice(-2)), 32 & s && (i.bold = !0), 64 & s && (i.link = e.readEscapedString()), t.push(i)
                    }
                    let n = null;
                    if (e.offset !== e.length) {
                        let o = e.readEscapedString();
                        n = {
                            visible: 0 != o.length,
                            text: o
                        }
                    }
                    this.events.$emit("leaderboard-update", t, n)
                }
                parseMinimap(e) {
                    let t = [];
                    for (;;) {
                        let s = e.readUInt16LE();
                        if (0 == s) {
                            this.events.$emit("minimap-positions", t);
                            return
                        }
                        e.offset++;
                        let i = e.readUInt8(),
                            a = e.readUInt8();
                        t.push({
                            pid: s,
                            x: i / 255,
                            y: a / 255
                        })
                    }
                }
                parsePlayers(e) {
                    let t = JSON.parse(e.readEscapedString()),
                        s = t.find(e => e.pid === this.playerId),
                        i = s && this.setTagId(s.tagId),
                        {
                            playerManager: a
                        } = this,
                        n = [];
                    for (let o of t) {
                        let r = a.setPlayerData(o);
                        n.push(r)
                    }
                    i && (this.events.$emit("minimap-positions", []), a.invalidateVisibility(n))
                }
                parseMessage(e) {
                    let t = e.readUInt8();
                    switch (t) {
                        case 1: {
                            let s = d(e);
                            this.initialDataPacket = e.view, this.start(s);
                            return
                        }
                        case 2: {
                            let i = new Uint8Array(e.buffer, 1);
                            this.connection.sendJoinData(new a(i).build(), !1);
                            return
                        }
                        case 3: {
                            let o = performance.now() - this.pingStamp;
                            this.updateStats(Math.round(o));
                            return
                        }
                        case 4: {
                            let {
                                playerManager: r
                            } = this;
                            for (;;) {
                                let l = e.readUInt16LE();
                                if (0 == l) return;
                                r.delayedRemovePlayer(l)
                            }
                        }
                        case 6:
                            this.connection.sendOpcode(6);
                            return;
                        case 7: {
                            let c = e.readUInt8(),
                                h, p;
                            if (1 & c) {
                                let u = e.readUInt16LE();
                                p = this.playerManager.getPlayer(u)
                            }
                            if (2 & c) {
                                let g = e.readUInt16LE();
                                h = this.playerManager.getPlayer(g)
                            }
                            h && h.setCrown(!1), p && p.setCrown(!0);
                            return
                        }
                        case 8:
                            if (this.multiboxPid) return;
                            this.multiboxPid = e.readUInt16LE();
                            return;
                        case 9: {
                            let {
                                playerManager: A
                            } = this, m = this.activePid;
                            m && A.getPlayer(m).setOutline(16777215), m = this.activePid = e.readUInt16LE(), A.getPlayer(m).setOutline(16711935);
                            return
                        }
                        case 10: {
                            this.timeStamp = performance.now();
                            let v = e.packetId || (e.packetId = this.ws.packetCount++);
                            this.parseCells(e, v), this.updateStates(!0);
                            let w = this.alive;
                            w && (this.spectating = !1);
                            let {
                                dual: I
                            } = this, {
                                replay: k
                            } = this;
                            w && !this.replaying ? k.add(e.view, !1) : I.alive || k.clear(!1), !w && y.autoRespawning && 37 == ++this.ticksSinceDeath && this.triggerAutoRespawn(!1), this.serverTick++, this.playerManager.sweepRemovedPlayers(), I.focused || this.updateCamera(!0);
                            return
                        }
                        case 11:
                            this.parseLeaderboard(e);
                            return;
                        case 12:
                            this.parseMinimap(e);
                            return;
                        case 13: {
                            let b = {
                                pid: e.readUInt16LE(),
                                text: e.readEscapedString()
                            };
                            if (0 == b.pid) {
                                let {
                                    selectedServer: _
                                } = y;
                                _ && /Welcome to Vanis\.io,.+\!/.test(b.text) && (b.text = `Connected to ${_.region} ${_.name}`), this.events.$emit("chat-message", b.text);
                                return
                            }
                            let S = this.playerManager.getPlayer(b.pid);
                            if (!S) return;
                            b.from = S.name;
                            let {
                                perk_colorCss: E
                            } = S;
                            E && (b.fromColor = E), this.events.$emit("chat-message", b);
                            return
                        }
                        case 14: {
                            let x = e.readUInt8(),
                                B = {};
                            if (2 & x) {
                                let Q = e.readUInt8();
                                typeId > 0 && typeId < 4 && (B.type = ({
                                    1: "success",
                                    2: "error",
                                    3: "warning",
                                    4: "info"
                                })[Q])
                            }
                            4 & x && (B.timer = e.readUInt16LE());
                            let M = e.readEscapedString();
                            B.title = f(M), n.toast.fire(B);
                            return
                        }
                        case 15: {
                            let {
                                playerManager: T
                            } = this;
                            for (;;) {
                                let D = e.readUInt16LE();
                                if (0 === D) return;
                                let L = e.readString16(),
                                    N = e.readEscapedString(),
                                    U = {
                                        pid: D,
                                        nickname: L,
                                        skinUrl: N
                                    };
                                T.setPlayerData(U)
                            }
                        }
                        case 16:
                            this.parsePlayers(e);
                            return;
                        case 17:
                            C.camera.sx = e.readInt16LE(), C.camera.sy = e.readInt16LE();
                            return;
                        case 18: {
                            let {
                                replay: R
                            } = this;
                            R.clear(!1), this.clearCells();
                            return
                        }
                        case 19: {
                            let P = 0 !== e.readUInt8();
                            if (this.events.$emit("xp-update", e.readUInt32LE()), !P) return;
                            let F = e.readUInt16LE(),
                                G = atob("WW91IGhhdmUgcmVhY2hlZCBsZXZlbA==");
                            n.toast.fire({
                                background: "#b58b00",
                                title: `${G} ${F}!`,
                                type: "success",
                                timer: 4e3
                            });
                            return
                        }
                        case 20:
                            this.handleDeath(e, !1);
                            return;
                        case 21:
                        case 27:
                            return;
                        case 22:
                            if (!window.grecaptcha) return void alert("Captcha library is not loaded");
                            this.events.$emit("show-image-captcha");
                            return;
                        case 23:
                            y.spectators = e.readUInt16LE();
                            return;
                        case 24:
                            this.serverTick = e.readUInt32LE(), this.events.$emit("restart-timing-changed", e.readUInt32LE());
                            return;
                        case 25:
                            this.events.$emit("update-cautions", {
                                custom: e.readEscapedString()
                            });
                            return;
                        case 26:
                            y.playButtonDisabled = !!e.readUInt8(), e.length > e.offset + 1 && (y.playButtonText = e.readEscapedString() || "Play");
                            return;
                        case 28:
                            C.parseScrimmageLeaderboard(e);
                            return
                    }
                }
            }
            e.exports = C = window.GAME = new k
        }, , , function(e) {
            var t = {
                useWebGL: !0,
                gameResolution: 1,
                smallTextThreshold: 40,
                autoZoom: !1,
                rememeberEjecting: !0,
                autoRespawn: !1,
                mouseFreezeSoft: !0,
                drawDelay: 120,
                switchDistance:8,
                cameraMoveDelay: 150,
                cameraZoomDelay: 150,
                cameraZoomSpeed: 10,
                replayDuration: 8,
                showReplaySaved: 2,
                showNames: 2,
                showMass: 2,
                showSkins: 1,
                showOwnName: !0,
                showOwnMass: !0,
                showOwnSkin: !0,
                showCrown: !0,
                foodVisible: !0,
                eatAnimation: !0,
                showHud: !0,
                showLeaderboard: !0,
                showServerName: !1,
                showChat: !0,
                showChatToast: !1,
                minimapEnabled: !0,
                minimapLocations: !0,
                showFPS: !0,
                showPing: !0,
                showCellCount: !0,
                showPlayerScore: !1,
                showPlayerMass: !0,
                showClock: !1,
                showSessionTime: !1,
                showPlayerCount: !1,
                showSpectators: !1,
                showRestartTiming: !1,
                showBlockedMessageCount: !0,
                filterChatMessages: !0,
                clearChatMessages: !0,
                backgroundColor: "101010",
                borderColor: "000000",
                foodColor: "ffffff",
                ejectedColor: "ffa500",
                cellNameOutlineColor: "000000",
                cursorImageUrl: null,
                backgroundImageUrl: "img/background.png",
                virusImageUrl: "img/virus.png",
                cellMassColor: "ffffff",
                cellMassOutlineColor: "000000",
                cellNameFont: "Hind Madurai",
                cellNameWeight: 1,
                cellNameOutline: 2,
                cellNameSmoothOutline: !0,
                cellLongNameThreshold: 750,
                cellMassFont: "Ubuntu",
                cellMassWeight: 2,
                cellMassOutline: 2,
                cellMassTextSize: 0,
                cellMassSmoothOutline: !0,
                shortMass: !0,
                showBackgroundImage: !0,
                backgroundImageRepeat: !0,
                backgroundDefaultIfUnequal: !0,
                backgroundImageOpacity: .6,
                useFoodColor: !1,
                namesEnabled: !0,
                skinsEnabled: !0,
                massEnabled: !0,
                showLocations: !1,
                cellBorderSize: 1,
                autoHideReplayControls: !1,
                minimapSize: 220,
                minimapFPS: 30,
                minimapSmoothing: .08,
                debugStats: !1,
                clientStats: !1,
                playerStats: !0,
                showCellLines: !1,
                showTag: !1,
                showDir: !1,
                chatColorOnlyPeople: !1,
                mbArrow: "https://i.postimg.cc/6pvLJ2TW/image.png"
            };

            function s(e) {
                switch (e) {
                    case 2:
                        return "bold";
                        return "thin";
                    default:
                        return "normal"
                }
            }

            function i(e, t) {
                var s;
                switch (e) {
                    case 3:
                        s = t / 5;
                        break;
                    case 1:
                        s = t / 20;
                        break;
                    default:
                        s = t / 10
                }
                return Math.ceil(s)
            }
            e.exports = window.settings = new class {
                constructor() {
                    this.getInternalSettings(), this.userDefinedSettings = this.loadUserDefinedSettings(), Object.assign(this, t, this.userDefinedSettings), this.set("skinsEnabled", !0), this.set("namesEnabled", !0), this.set("massEnabled", !0), this.compileNameFontStyle(), this.compileMassFontStyle()
                }
                getInternalSettings() {
                    this.cellSize = 512
                }
                compileNameFontStyle() {
                    var e = {
                        fontFamily: this.cellNameFont,
                        fontSize: 80,
                        fontWeight: s(this.cellNameWeight)
                    };
                    return this.cellNameOutline && (e.stroke = PIXI.utils.string2hex(this.cellNameOutlineColor), e.strokeThickness = i(this.cellNameOutline, e.fontSize), e.lineJoin = this.cellNameSmoothOutline ? "round" : "miter"), this.nameTextStyle = e
                }
                compileMassFontStyle() {
                    var e = {
                        fontFamily: this.cellMassFont,
                        fontSize: 56 + 20 * this.cellMassTextSize,
                        fontWeight: s(this.cellMassWeight),
                        lineJoin: "round",
                        fill: PIXI.utils.string2hex(this.cellMassColor)
                    };
                    return this.cellMassOutline && (e.stroke = PIXI.utils.string2hex(this.cellMassOutlineColor), e.strokeThickness = i(this.cellMassOutline, e.fontSize), e.lineJoin = this.cellMassSmoothOutline ? "round" : "miter"), this.massTextStyle = e
                }
                loadUserDefinedSettings() {
                    if (!localStorage.settings) return {};
                    try {
                        return JSON.parse(localStorage.settings)
                    } catch (e) {
                        return {}
                    }
                }
                getDefault(e) {
                    return t[e]
                }
                set(e, t) {
                    return this[e] !== t && (this[e] = t, this.userDefinedSettings[e] = t, localStorage.settings = JSON.stringify(this.userDefinedSettings), !0)
                }
            }
        }, function(e, t, s) {
            var i = s(270).default,
                a = i.mixin({
                    toast: !0,
                    position: "top",
                    showConfirmButton: !1,
                    showCloseButton: !0
                });
            window.Swal = i, window.SwalAlerts = e.exports = {
                toast: a,
                alert: function(e) {
                    i.fire({
                        text: e,
                        confirmButtonText: "OK"
                    })
                },
                confirm: function(e, t, s) {
                    i.fire({
                        text: e,
                        showCancelButton: !0,
                        confirmButtonText: "Continue"
                    }).then(e => {
                        e.value ? t() : s && s()
                    })
                },
                instance: i
            }
        }, , , function(e, t, s) {
            let i = s(4),
                a = !1;
            e.exports = {
                lerp: (e, t, s) => e + (t - e) * s,
                clampNumber: (e, t, s) => Math.min(s, Math.max(t, e)),
                getTimeString: function(e, t, s) {
                    e instanceof Date && (e = e.getTime());
                    var i = t ? 1 : 1e3,
                        a = 60 * i,
                        n = 60 * a;
                    if (e < i) return "1 second";
                    for (var o = [24 * n, n, a, i], r = ["day", "hour", "minute", "second"], l = !1, c = [], h = 0; h < o.length; h++) {
                        var d = o[h],
                            p = Math.floor(e / d);
                        if (p) {
                            var u = r[h],
                                g = p > 1 ? "s" : "";
                            c.push(p + " " + u + g), e %= d
                        }
                        if (l) break;
                        p && !s && (l = !0)
                    }
                    return c.join(", ")
                },
                encodeHTML: e => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;"),
                getTimestamp() {
                    let e = new Date,
                        t = e.getFullYear(),
                        s = e.getMonth() + 1,
                        i = e.getDate(),
                        a = [t, (s > 9 ? "" : "0") + s, (i > 9 ? "" : "0") + i].join(""),
                        n = [("0" + e.getHours()).slice(-2), ("0" + e.getMinutes()).slice(-2), ("0" + e.getSeconds()).slice(-2)].join("");
                    return a + "-" + n
                },
                loadImage: e => fetch(e, {
                    mode: "cors"
                }).then(e => e.blob()).then(e => createImageBitmap(e)),
                hideCaptchaBadge() {
                    a || (document.body.classList.add("hide-captcha-badge"), a = !0)
                },
                destroyPixiPlugins(e) {
                    ["interaction", "accessibility"].forEach(t => {
                        let s = e.plugins[t];
                        s && (s.destroy(), delete e.plugins[t])
                    })
                },
                writeUserData(e, t) {
                    let s = document.getElementById("nickname").value,
                        a = document.getElementById("skinurl").value,
                        n = document.getElementById("teamtag").value;
                    e.writeEscapedStringNT(s), e.writeEscapedStringNT(a), e.writeEscapedStringNT(n)
                }
            }
        }, , , , function(e, t, s) {
            let i = s(4);
            class a {
                constructor() {
                    this.cache = new Map, this.textureSize = i.cellSize, this.cellSize = this.textureSize / 2
                }
                destroyCache() {
                    let {
                        cache: e
                    } = this;
                    e.forEach(e => e.destroy(!0)), e.clear()
                }
            }
            let n = s(24),
                o = s(124);
            e.exports = {
                cells: new class e extends a {
                    getTexture(e) {
                        let {
                            cache: t
                        } = this;
                        if (t.has(e)) return t.get(e);
                        {
                            let {
                                cellSize: s,
                                textureSize: i
                            } = this, a = new PIXI.Graphics().beginFill(e).drawCircle(0, 0, s).endFill();
                            a.position.set(s);
                            let o = PIXI.RenderTexture.create(i, i);
                            return t.set(e, o), n.render(a, o), o
                        }
                    }
                },
                squares: new class e extends a {
                    getTexture(e) {
                        let {
                            cache: t
                        } = this;
                        if (t.has(e)) return t.get(e);
                        {
                            let {
                                cellSize: s,
                                textureSize: i
                            } = this, a = new PIXI.Graphics().beginFill(e).drawRect(-s, -s, 2 * s, 2 * s).endFill();
                            a.position.set(s);
                            let o = PIXI.RenderTexture.create(i, i);
                            return t.set(e, o), n.render(a, o), o
                        }
                    }
                },
                virus: o
            }
        }, , function(e, t, s) {
            let i = s(1),
                a = s(4),
                {
                    cells: n
                } = s(12),
                {
                    clampNumber: o
                } = s(8);
            class r {
                constructor({
                    id: e,
                    x: t,
                    y: s,
                    size: i,
                    flags: a,
                    texture: o,
                    context: r
                }) {
                    o = o || n.getTexture(0), this.flags = a, this.oSize = this.size = i, this.destroyed = !1, this.id = e || 0;
                    let l = this.sprite = new PIXI.Sprite(this.texture = o);
                    l.anchor.set(.5), l.gameData = this, this.x = this.ox = l.position.x = t, this.y = this.oy = this.sprite.position.y = s, this.mainContext = r, this.activeContexts = 1
                }
                update() {
                    let e = i.timeStamp - this.updateStamp,
                        t = o(e / a.drawDelay, 0, 1);
                    if (this.destroyed && (1 === t || this.texture.clearedFromCache)) return !0;
                    let s = 2 * (this.size = t * (this.nSize - this.oSize) + this.oSize),
                        {
                            sprite: n
                        } = this;
                    if (!n) return !0;
                    n.width = n.height = s;
                    let {
                        position: r
                    } = n;
                    return r.x = this.x = t * this.newPositionScale * (this.nx - this.ox) + this.ox, r.y = this.y = t * this.newPositionScale * (this.ny - this.oy) + this.oy, this.onUpdate && this.onUpdate(), !1
                }
                destroy(e, t = !1) {
                    if (this.destroyed) return !1;
                    let {
                        dual: s
                    } = i, {
                        cells: a
                    } = 1 & e ? i : s, {
                        id: n
                    } = this;
                    if (a.delete(n), s.opened) {
                        let o = this.mainContext,
                            r = --this.activeContexts;
                        if (o == e) {
                            let {
                                cells: l
                            } = 2 & e ? i : s;
                            if (l.has(n)) return this.mainContext = 1 & e ? 2 : 1, !1
                        }
                        if (0 != r) return !1
                    }
                    return this.onDestroy && this.onDestroy(), this.pid && i.ownedCells.delete(this), this.destroyed = !0, t ? i.destroyedCells.push(this) : this.destroySprite(), !0
                }
                destroySprite() {
                    this.sprite && (this.sprite.destroy(), this.sprite = null)
                }
            }
            r.prototype.type = 0, r.prototype.updateStamp = 0, r.prototype.newPositionScale = 1, e.exports = r
        }, , , function(e, t, s) {
            var i = s(5);

            function a() {
                i.instance.fire({
                    type: "warning",
                    title: "Browser support limited",
                    html: "Skins might not work properly in this browser.<br>Please consider using Chrome.",
                    allowOutsideClick: !1
                })
            }

            function n(e) {
                for (var t = "", s = 0; s < e.length; s++) t += String.fromCharCode(e.charCodeAt(s) - 2);
                return t
            }
            var o = ["pkiigt", "p3iigt", "pkii5t", "pkiic", "p3iic", "p3ii6", "pkii", "p3ii", "p3i", "hciiqv", "h6iiqv", "hcii2v", "hci", "cpcn", "cuujqng", "ewpv", "rwuu{", "xcikpc", "xci3pc", "eqem", "e2em", "uewo", "ycpm", "yjqtg", "yj2tg", "unwv", "dkvej", "d3vej", "rqtp", "r2tp", "tcrg", "t6rg", "jkvngt", "j3vngt", "jkvn5t", "j3vn5t", "pc|k", "p6|k", "tgvctf", "ejkpm", "hwem", "ujkv"],
                r = o.map(n),
                l = o.map(n).sort((e, t) => t.length - e.length).map(e => RegExp("[^s]*" + e.split("").join("s*") + "[^s]*", "gi"));
            e.exports = {
                noop: function() {},
                checkBadWords: function(e) {
                    return e = e.toLowerCase(), r.some(t => e.includes(t))
                },
                replaceBadWordsChat: function(e) {
                    for (var t = 0; t < l.length; t++) e = e.replace(l[t], e => Array(e.length).fill("*").join(""));
                    return e
                },
                notifyUnsupportedBrowser: async function() {
                    window.safari || /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? i.instance.fire({
                        type: "warning",
                        title: "Safari browser is not supported :(",
                        html: "Please consider using Google Chrome.",
                        allowOutsideClick: !1,
                        showCloseButton: !1,
                        showCancelButton: !1,
                        showConfirmButton: !1
                    }) : !localStorage.skipUnsupportedAlert && ((localStorage.skipUnsupportedAlert = !0, navigator.userAgent.toLowerCase().includes("edge")) ? a() : await new Promise(e => {
                        var t = new Image;
                        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", t.onload = t.onerror = () => {
                            e(2 === t.height)
                        }
                    }) || a())
                },
                isFirstVisit: !localStorage.visitedBefore && (localStorage.visitedBefore = !0, !0)
            }
        }, , , , , , , function(e, t, s) {
            var i = s(4),
                a = s(8);
            PIXI.utils.skipHello();
            var n = document.getElementById("canvas"),
                o = {
                    resolution: i.customResolution || window.devicePixelRatio || 1,
                    view: n,
                    forceCanvas: !i.useWebGL,
                    antialias: !1,
                    powerPreference: "high-performance",
                    backgroundColor: PIXI.utils.string2hex(i.backgroundColor)
                };
            o.resolution = i.gameResolution;
            var r = PIXI.autoDetectRenderer(o);

            function l() {
                r.resize(window.innerWidth, window.innerHeight)
            }
            l(), a.destroyPixiPlugins(r), window.addEventListener("resize", l), r.clear(), e.exports = r
        }, function(e) {
            function t() {
                this.data = []
            }
            e.exports = t, t.prototype.write = function() {
                return new Uint8Array(this.data)
            }, t.prototype.uint8 = function(e) {
                this.data.push(e)
            }, t.prototype.uint8Array = function(e) {
                for (var t = 0; t < e.length; t++) this.data.push(e[t])
            }, t.prototype.utf8 = function(e) {
                e = unescape(encodeURIComponent(e));
                for (var t = 0; t < e.length; t++) this.data.push(e.charCodeAt(t));
                this.data.push(0)
            }
        }, , , , function(e, t, s) {
            var i = s(2),
                a = s(167);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            "use strict";
            var i = s(31),
                a = s.n(i);
            t.default = a.a
        }, function(e) {
            e.exports = {
                data: () => ({})
            }
        }, function(e, t, s) {
            var i = s(2),
                a = s(169);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(171);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(173);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(175);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(177);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(179);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            "use strict";
            var i = s(39),
                a = s.n(i);
            t.default = a.a
        }, function(e, t, s) {
            var i = s(89),
                a = s(1),
                n = s(5),
                o = a.replay.database;
            e.exports = {
                props: ["replay"],
                methods: {
                    async play(e) {
                        if (!a.connection.opened || await new Promise(e => {
                                n.confirm("You will be disconnected", () => e(!0), () => e(!1))
                            })) try {
                            a.replay.play(e)
                        } catch (t) {
                            console.log(t), a.stop(), n.alert("Waching replays on extension currently does not work, please watch them without extension or render them!")
                        }
                    },
                    downloadReplay(e) {
                        n.instance.fire({
                            input: "text",
                            inputValue: e.name,
                            showCancelButton: !0,
                            confirmButtonText: "Download",
                            html: "yap yap use vanilla nigga u can't watch clips on my extension 😂"
                        }).then(t => {
                            var s = t.value;
                            if (s) {
                                var a = new Blob([e.data], {
                                    type: "text/plain;charset=utf-8"
                                });
                                i.saveAs(a, s + ".vanis")
                            }
                        })
                    },
                    deleteReplay(e) {
                        n.confirm("Nigga are u sure u want to delete this shit?", () => {
                            o.removeItem(e, () => {
                                a.events.$emit("replay-removed")
                            })
                        })
                    }
                }
            }
        }, function(e, t, s) {
            var i = s(2),
                a = s(219);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(221);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(223);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(225);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(227);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(231);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(233);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(235);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(237);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(239);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(241);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(243);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(245);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(247);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(249);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            "use strict";
            var i = s(56),
                a = s.n(i);
            t.default = a.a
        }, function(e, t, s) {
            var i = s(1),
                a = s(8),
                n = s(4),
                o = n.minimapSize,
                r = n.minimapFPS,
                l = n.minimapSmoothing,
                c = new PIXI.Container,
                h = {};

            function d() {
                return (new Date).toLocaleTimeString()
            }

            function p(e, t = !1) {
                if (t && e < 1) return "instant";
                e = Math.floor(e);
                let s = Math.floor(e / 60),
                    i = Math.floor(s / 60);
                return s < 1 ? t ? e + "s" : "<1min" : i < 1 ? s + "min" : s % 60 == 0 ? i + "hr" : i + "hr " + s % 60 + "min"
            }
            e.exports = {
                data: () => ({
                    showMinimap: !1,
                    showMinimapCircle: !1,
                    showMinimapStats: !0,
                    showLocations: n.minimapLocations,
                    interval: null,
                    minimapStatsBottom: 10,
                    showClock: n.showClock,
                    showSessionTime: n.showSessionTime,
                    showSpectators: n.showSpectators,
                    showPlayerCount: n.showPlayerCount,
                    showRestartTiming: n.showRestartTiming,
                    systemTime: d(),
                    sessionTime: p(0, !1),
                    restartTime: p(0, !0),
                    spectators: 0,
                    playerCount: 0,
                    restartTick: 0,
                    startTime: null,
                    gameState: i.state
                }),
                computed: {
                    playerCountDisplayed() {
                        if (this.gameState.selectedServer) {
                            var e = this.gameState.selectedServer.slots;
                            return Math.min(this.playerCount, e) + " / " + e + " players"
                        }
                        return this.playerCount + " player" + (1 === this.playerCount ? "" : "s")
                    }
                },
                methods: {
                    initRenderer(e) {
                        var t = PIXI.autoDetectRenderer({
                            resolution: 1,
                            view: e,
                            width: o,
                            height: o,
                            forceCanvas: !n.useWebGL,
                            antialias: !1,
                            powerPreference: "high-performance",
                            transparent: !0
                        });
                        a.destroyPixiPlugins(t), t.clear(), this.renderer = t
                    },
                    destroyMinimap() {
                        c.destroy(!0), c = new PIXI.Container, this.renderer.clear()
                    },
                    onMinimapShow() {
                        this.interval || (this.showMinimap = !0, this.minimapStatsBottom = o + 10, i.events.$on("minimap-positions", this.updatePositions), this.interval = setInterval(this.render, 1e3 / r))
                    },
                    onMinimapHide() {
                        this.interval && (this.showMinimap = !1, this.minimapStatsBottom = 10, i.events.$off("minimap-positions", this.updatePositions), clearInterval(this.interval), this.interval = null, this.spectators = 0, this.playerCount = 0)
                    },
                    createNode(e, t, s, i) {
                        e in h && h[e].destroy(!0), s = s || 16777215, i = i || 16777215;
                        let a = new PIXI.Container;
                        a.newPosition = {};
                        let n = new PIXI.Graphics().beginFill(i).drawCircle(0, 0, 5).endFill();
                        if (a.addChild(n), t) {
                            let o = new PIXI.Text(t, {
                                strokeThickness: 4,
                                lineJoin: "round",
                                fontFamily: "Nunito",
                                fill: s,
                                fontSize: 12
                            });
                            o.anchor.set(.5), o.pivot.y = 15, a.addChild(o)
                        }
                        h[e] = a
                    },
                    destroyNode(e) {
                        var t = h[e];
                        t && (t.destroy(!0), delete h[e])
                    },
                    updatePositions(e) {
                        c.removeChildren();
                        for (var t = 0; t < e.length; t++) {
                            var s = e[t],
                                i = h[s.pid];
                            i && (i.newPosition.x = s.x * o, i.newPosition.y = s.y * o, c.addChild(i))
                        }
                        this.render()
                    },
                    render() {
                        for (var e = c.children, t = l * (30 / r), s = 0; s < e.length; s++) {
                            var i = e[s];
                            i.position.x = a.lerp(i.position.x, i.newPosition.x, t), i.position.y = a.lerp(i.position.y, i.newPosition.y, t)
                        }
                        this.renderer.render(c)
                    },
                    drawLocationGrid(e, t) {
                        var s = o / t;
                        e.globalAlpha = .1, e.strokeStyle = "#202020", e.beginPath();
                        for (var i = 1; i < t; i++) {
                            var a = i * s;
                            e.moveTo(a, 0), e.lineTo(a, o), e.moveTo(0, a), e.lineTo(o, a)
                        }
                        e.stroke(), e.closePath()
                    },
                    drawLocationCodes(e, t) {
                        var s = o / t,
                            i = s / 2;
                        e.globalAlpha = .1, e.font = "14px Nunito", e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = "#ffffff";
                        for (var a = 0; a < t; a++)
                            for (var n = a * s + i, r = 0; r < t; r++) {
                                var l = String.fromCharCode(97 + r).toUpperCase() + (a + 1),
                                    c = r * s + i;
                                e.strokeText(l, n, c), e.fillText(l, n, c)
                            }
                    },
                    drawLocations(e) {
                        e.width = e.height = o;
                        var t = e.getContext("2d"),
                            s = o / 2;
                        if (this.showLocations) {
                            if (t.save(), this.showMinimapCircle) {
                                var i = new Path2D;
                                i.ellipse(s, s, s, s, 0, 0, 2 * Math.PI), t.clip(i)
                            }
                            this.drawLocationGrid(t, 5), this.drawLocationCodes(t, 5)
                        }
                        t.restore(), this.showMinimapCircle && (t.globalAlpha = .45, t.beginPath(), t.arc(s, s, s + 1, -Math.PI / 2, 0), t.lineTo(o, 0), t.closePath(), t.fill())
                    }
                },
                created() {
                    i.events.$on("minimap-show", this.onMinimapShow), i.events.$on("minimap-hide", this.onMinimapHide), i.events.$on("minimap-destroy", this.destroyMinimap), i.events.$on("minimap-create-node", this.createNode), i.events.$on("minimap-destroy-node", this.destroyNode), i.events.$on("minimap-show-locations", e => {
                        this.showLocations = e, this.drawLocations(this.$refs.locations)
                    }), i.events.$on("minimap-stats-visible", e => this.showMinimapStats = e), i.events.$on("minimap-stats-changed", e => {
                        this.spectators = e.spectators, this.playerCount = e.playerCount
                    }), i.events.$on("restart-timing-changed", e => this.restartTick = e), i.events.$on("game-started", () => {
                        this.showMinimapCircle = i.border.circle, this.drawLocations(this.$refs.locations)
                    }), i.events.$on("game-stopped", () => this.restartTick = 0), i.events.$on("minimap-stats-invalidate-shown", () => {
                        this.showClock = n.showClock, this.showSessionTime = n.showSessionTime, this.showSpectators = n.showSpectators, this.showPlayerCount = n.showPlayerCount, this.showRestartTiming = n.showRestartTiming
                    }), i.events.$on("every-second", () => {
                        this.systemTime = d();
                        var e = (Date.now() - this.startTime) / 1e3;
                        this.sessionTime = p(e, !1), this.restartTick && i.serverTick ? (e = (this.restartTick - i.serverTick) / 25, this.restartTime = p(e, !0)) : this.restartTime = null
                    })
                },
                mounted() {
                    this.initRenderer(this.$refs.minimap), this.startTime = Date.now()
                }
            }
        }, function(e, t, s) {
            var i = s(2),
                a = s(251);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(253);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(255);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(257);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(259);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(261);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(263);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, function(e, t, s) {
            var i = s(2),
                a = s(266);
            "string" == typeof(a = a.__esModule ? a.default : a) && (a = [
                [e.i, a, ""]
            ]);
            var n = (i(a, {
                insert: "head",
                singleton: !1
            }), a.locals ? a.locals : {});
            e.exports = n
        }, , function(e, t, s) {
            let i = s(1),
                a = s(4),
                n = s(5),
                o = i.actions,
                r = {
                    toggleAutoRespawn() {
                        let e = a.autoRespawn;
                        a.set("autoRespawn", !e), e && i.state.autoRespawning && i.triggerAutoRespawn(!1);
                        let t = "Auto respawn ";
                        t += e ? "disabled" : "enabled", n.toast.fire({
                            type: "info",
                            title: t,
                            timer: 1500
                        })
                    },
                    respawn() {
                        o.join(i.dual.focused), i.showMenu(!1)
                    },
                    feed: o.feed.bind(o),
                    feedMacro: o.feed.bind(o, !0),
                    split: o.split.bind(o, 1),
                    splitx2: o.split.bind(o, 2),
                    splitx3: o.split.bind(o, 3),
                    splitMax: o.split.bind(o, 4),
                    split32: o.split.bind(o, 5),
                    split64: o.split.bind(o, 6),
                    split128: o.split.bind(o, 7),
                    split256: o.split.bind(o, 8),
                    linesplit: o.linesplit.bind(o),
                    freezeMouse: o.freezeMouse.bind(o),
                    lockLinesplit: o.lockLinesplit.bind(o),
                    stopMovement: o.stopMovement.bind(o),
                    toggleSkins: o.toggleSkins.bind(o),
                    toggleNames: o.toggleNames.bind(o),
                    toggleFood: o.toggleFood.bind(o),
                    toggleMass: o.toggleMass.bind(o),
                    toggleChat: o.toggleChat.bind(o),
                    toggleChatToast: o.toggleChatToast.bind(o),
                    toggleHud: o.toggleHud.bind(o),
                    spectateLock: o.spectateLockToggle.bind(o),
                    selectPlayer: o.targetPlayer.bind(o),
                    saveReplay() {
                        let {
                            dual: e
                        } = i;
                        i.replay.save(e.focused)
                    },
                    zoomLevel1: o.setZoomLevel.bind(o, 1),
                    zoomLevel2: o.setZoomLevel.bind(o, 2),
                    zoomLevel3: o.setZoomLevel.bind(o, 3),
                    zoomLevel4: o.setZoomLevel.bind(o, 4),
                    zoomLevel5: o.setZoomLevel.bind(o, 5),
                    triggerbot: o.triggerbot.bind(o),
                    multibox() {
                        let {
                            dual: e
                        } = i;
                        e.switch()
                    }
                };
            window.client && Object.assign(r, {
                "m-feed": client.feed.bind(client),
                "m-feedMacro": client.feed.bind(client, !0),
                "m-split": client.split.bind(client, 1),
                "m-splitx2": client.split.bind(client, 2),
                "m-splitx3": client.split.bind(client, 3),
                "m-splitMax": client.split.bind(client, 4),
                "m-split32": client.split.bind(client, 5),
                "m-split64": client.split.bind(client, 6),
                "m-linesplit": client.lineSplit.bind(client),
                "m-stopMovement": client.toggleMovement.bind(client),
                "m-respawn": client.spawn.bind(client),
                "m-focus": client.focus.bind(client, !0),
                "m-unfocus": client.focus.bind(client, !1)
            });
            let l = {
                multibox: "TAB",
                feed: "",
                feedMacro: "W",
                split: "SPACE",
                splitx2: "G",
                splitx3: "H",
                splitMax: "T",
                split32: "",
                split64: "",
                split128: "",
                split256: "",
                multi1: "",
                multi2: "",
                multi3: "",
                linesplit: "Z",
                lockLinesplit: "",
                respawn: "",
                toggleAutoRespawn: "",
                stopMovement: "",
                toggleSkins: "",
                toggleNames: "",
                toggleMass: "",
                spectateLock: "Q",
                selectPlayer: "MOUSE1",
                saveReplay: "R",
                toggleChat: "",
                toggleChatToast: "",
                toggleHud: "",
                zoomLevel1: "1",
                zoomLevel2: "2",
                zoomLevel3: "3",
                zoomLevel4: "4",
                zoomLevel5: "5",
                triggerbot: ""
            };
            e.exports = i.hotkeyManager = new class e {
                constructor() {
                    this.version = 2, this.pressHandlers = null, this.releaseHandlers = null, this.resetObsoleteHotkeys(), this.load()
                }
                resetObsoleteHotkeys() {}
                load() {
                    this.hotkeys = this.loadHotkeys(), this.loadHandlers(this.hotkeys)
                }
                loadHotkeys() {
                    let e = Object.assign({}, l),
                        t = localStorage.hotkeys;
                    if (!t) return e;
                    t = JSON.parse(t);
                    let s = Object.values(t);
                    return Object.keys(e).forEach(t => {
                        let i = e[t];
                        i && s.includes(i) && (e[t] = "")
                    }), Object.assign(e, t)
                }
                saveHotkeys(e) {
                    localStorage.hotkeys = JSON.stringify(e)
                }
                reset() {
                    return localStorage.removeItem("hotkeys"), this.load(), this.hotkeys
                }
                get() {
                    return this.hotkeys
                }
                set(e, t) {
                    if (!(e in r)) return !1;
                    if (this.hotkeys[e] === t) return !0;
                    if (t)
                        for (let s in this.hotkeys) this.hotkeys[s] === t && (this.hotkeys[s] = "");
                    return this.hotkeys[e] = t, this.saveHotkeys(this.hotkeys), this.loadHandlers(this.hotkeys), !0
                }
                loadHandlers(e) {
                    for (let t in this.pressHandlers = {}, e) {
                        if (!(t in r)) continue;
                        let s = r[t],
                            i = e[t];
                        this.pressHandlers[i] = s
                    }
                    this.releaseHandlers = {}, "feedMacro" in e && (this.releaseHandlers[e.feedMacro] = o.feed.bind(o, !1)), window.client && "m-feedMacro" in e && (this.releaseHandlers[e["m-feedMacro"]] = client.feed.bind(o, !1))
                }
                press(e) {
                    let t = this.pressHandlers[e];
                    return !!t && (t(), !0)
                }
                release(e) {
                    let t = this.releaseHandlers[e];
                    t?.()
                }
                convertKey(e) {
                    return e ? e.toString().toUpperCase().replace(/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, "") : "Unknown"
                }
            }
        }, , , , , , , function(e, t, s) {
            "use strict";
            var i = function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", [t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showMinimapStats,
                            expression: "showMinimapStats"
                        }],
                        staticClass: "minimap-stats",
                        style: {
                            bottom: this.minimapStatsBottom + "px"
                        }
                    }, [t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showClock,
                            expression: "showClock"
                        }]
                    }, [this._v(this._s(this.systemTime))]), this._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showSessionTime,
                            expression: "showSessionTime"
                        }]
                    }, [this._v(this._s(this.sessionTime) + " session")]), this._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showPlayerCount && this.playerCount,
                            expression: "showPlayerCount && playerCount"
                        }]
                    }, [this._v(this._s(this.playerCountDisplayed))]), this._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showSpectators && this.spectators,
                            expression: "showSpectators && spectators"
                        }]
                    }, [this._v(this._s(this.spectators) + " spectator" + this._s(1 === this.spectators ? "" : "s"))]), this._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showRestartTiming && this.restartTime,
                            expression: "showRestartTiming && restartTime"
                        }]
                    }, [this._v("Restart in " + this._s(this.restartTime))])]), this._v(" "), t("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.showMinimap,
                            expression: "showMinimap"
                        }],
                        staticClass: "container",
                        class: {
                            circle: this.showMinimapCircle
                        }
                    }, [t("canvas", {
                        ref: "locations",
                        attrs: {
                            id: "locations"
                        }
                    }), this._v(" "), t("canvas", {
                        ref: "minimap",
                        attrs: {
                            id: "minimap"
                        }
                    })])])
                },
                a = [];
            i._withStripped = !0, s.d(t, "a", function() {
                return i
            }), s.d(t, "b", function() {
                return a
            })
        }, function(e, t, s) {
            "use strict";
            var i = function() {
                    var e = this,
                        t = e.$createElement,
                        s = e._self._c || t;
                    return s("transition", {
                        attrs: {
                            name: "fade",
                            appear: ""
                        }
