/* Eclipse Unified - V2 (Anti-Crash) */
// --- GAME CORE ---
!function(T) {
    var j = (function() {
        var g = !![];
        return function(K, O) {
            var f = g ? function() {
                if (O) {
                    var D = O['apply'](K, arguments);
                    return O = null,
                    D;
                }
            }
            : function() {}
            ;
            return g = ![],
            f;
        }
        ;
    }()), p = (function() {
        var g = !![];
        return function(K, O) {
            var f = g ? function() {
                if (O) {
                    var D = O['apply'](K, arguments);
                    return O = null,
                    D;
                }
            }
            : function() {}
            ;
            return g = ![],
            f;
        }
        ;
    }()), x = (function() {
        var g = !![];
        return function(K, O) {
            var f = g ? function() {
                if (O) {
                    var D = O['apply'](K, arguments);
                    return O = null,
                    D;
                }
            }
            : function() {}
            ;
            return g = ![],
            f;
        }
        ;
    }()), H, M = (H = !![],
    function(g, K) {
        var O = H ? function() {
            if (K) {
                var f = K['apply'](g, arguments);
                return K = null,
                f;
            }
        }
        : function() {}
        ;
        return H = ![],
        O;
    }
    );
    function y(g) {
        var K = j(this, function() {
            return K['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](K)['search']('(((.+)+)+)+$');
        });
        K(),
        (function() {
            p(this, function() {
                var G = new RegExp('function\x20*\x5c(\x20*\x5c)')
                  , w = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i')
                  , v = X('init');
                !G['test'](v + 'chain') || !w['test'](v + 'input') ? v('0') : X();
            })();
        }());
        var O = x(this, function() {
            var G = function() {
                var h0;
                try {
                    h0 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (h1) {
                    h0 = window;
                }
                return h0;
            }
              , w = G()
              , v = w['console'] = w['console'] || {}
              , Z = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
            for (var J = 0x0; J < Z['length']; J++) {
                var k = x['constructor']['prototype']['bind'](x)
                  , E = Z[J]
                  , F = v[E] || k;
                k['__proto__'] = x['bind'](x),
                k['toString'] = F['toString']['bind'](F),
                v[E] = k;
            }
        });
        O();
        var f = M(this, function() {
            var G = function() {
                return !G['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}')['test'](f);
            };
            return G();
        });
        f();
        for (var D, V, P = g[0x0], R = g[0x1], Q = g[0x2], W = 0x0, B = []; W < P['length']; W++)
            V = P[W],
            Object['prototype']['hasOwnProperty']['call'](m, V) && m[V] && B['push'](m[V][0x0]),
            m[V] = 0x0;
        for (D in R)
            Object['prototype']['hasOwnProperty']['call'](R, D) && (T[D] = R[D]);
        for (Y && Y(g); B['length']; )
            B['shift']()();
        return b['push']['apply'](b, Q || []),
        U();
    }
    function U() {
        for (var g, K = 0x0; K < b['length']; K++) {
            for (var O = b[K], f = !![], D = 0x1; D < O['length']; D++) {
                var V = O[D];
                0x0 !== m[V] && (f = ![]);
            }
            f && (b['splice'](K--, 0x1),
            g = A(A['s'] = O[0x0]));
        }
        return g;
    }
    var S = {}
      , m = {
        0x0: 0x0
    }
      , b = [];
    function A(g) {
        if (S[g])
            return S[g]['exports'];
        var K = S[g] = {
            'i': g,
            'l': ![],
            'exports': {}
        };
        return T[g]['call'](K['exports'], K, K['exports'], A),
        K['l'] = !![],
        K['exports'];
    }
    A['m'] = T,
    A['c'] = S,
    A['d'] = function(g, K, O) {
        !A['o'](g, K) && Object['defineProperty'](g, K, {
            'enumerable': !![],
            'get': O
        });
    }
    ,
    A['r'] = function(g) {
        'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](g, Symbol['toStringTag'], {
            'value': 'Module'
        }),
        Object['defineProperty'](g, '__esModule', {
            'value': !![]
        });
    }
    ,
    A['t'] = function(g, K) {
        if (0x1 & K && (g = A(g)),
        0x8 & K)
            return g;
        if (0x4 & K && 'object' == typeof g && g && g['__esModule'])
            return g;
        var O = Object['create'](null);
        if (A['r'](O),
        Object['defineProperty'](O, 'default', {
            'enumerable': !![],
            'value': g
        }),
        0x2 & K && 'string' != typeof g) {
            for (var f in g)
                A['d'](O, f, function(D) {
                    return g[D];
                }
                ['bind'](null, f));
        }
        return O;
    }
    ,
    A['n'] = function(g) {
        var K = g && g['__esModule'] ? function() {
            return g['default'];
        }
        : function() {
            return g;
        }
        ;
        return A['d'](K, 'a', K),
        K;
    }
    ,
    A['o'] = function(g, K) {
        return Object['prototype']['hasOwnProperty']['call'](g, K);
    }
    ,
    A['p'] = '';
    var C = window['webpackJsonp'] = window['webpackJsonp'] || []
      , I = C['push']['bind'](C);
    C['push'] = y,
    C = C['slice']();
    for (var N = 0x0; N < C['length']; N++)
        y(C[N]);
    var Y = I;
    b['push']([0x73, 0x1]),
    U();
}([, function(T, L, q) {
    var j = q(0x76)
      , z = q(0x4)
      , x = q(0x3f)
      , H = q(0x77)
      , M = q(0x7a)
      , U = q(0xc)
      , S = q(0x7c)
      , b = q(0x17)
      , A = q(0x18)
      , C = q(0x5)
      , I = q(0x7e)
      , N = q(0x4c)
      , Y = q(0x80)
      , {lerp: K, hideCaptchaBadge: O} = q(0x8)
      , D = {}
      , V = {
        'initialized': ![],
        'instance': null,
        'memory': null,
        'exports': null,
        'HEAPU8': null,
        'HEAPF32': null,
        'cellsPtr': 0x0,
        'resultPtr': 0x0,
        'CELL_SIZE': 0x28,
        'MAX_CELLS': 0x800,
        'init': async function() {
            try {
                console['log']('[WASM-CLIENT]\x20🔄\x20Loading\x20client_physics\x20WASM...');
                var R = 'js/client_physics.wasm'
                  , Q = await fetch(R);
                if (!Q['ok'])
                    throw new Error('Failed\x20to\x20fetch\x20WASM:\x20' + Q['status']);
                var W = await Q['arrayBuffer']();
                console['log']('[WASM-CLIENT]\x20📦\x20WASM\x20loaded,\x20size:', W['byteLength'], 'bytes'),
                this['memory'] = new WebAssembly['Memory']({
                    'initial': 0x100,
                    'maximum': 0x100
                });
                var B = {
                    'env': {
                        'memory': this['memory']
                    }
                }
                  , G = await WebAssembly['instantiate'](W, B);
                this['instance'] = G['instance'],
                this['exports'] = G['instance']['exports'];
                var Z = this['exports']['memory'] ? this['exports']['memory']['buffer'] : this['memory']['buffer'];
                this['HEAPU8'] = new Uint8Array(Z),
                this['HEAPF32'] = new Float32Array(Z),
                this['cellsPtr'] = 0x400,
                this['resultPtr'] = this['cellsPtr'] + this['MAX_CELLS'] * this['CELL_SIZE'],
                this['funcs'] = {};
                var J = ['wasm_update_cells', 'wasm_calculate_center', 'wasm_calc_zoom', 'wasm_sort_render']
                  , k = Object['keys'](this['exports']);
                console['log']('[WASM-CLIENT]\x20Raw\x20exports:', k['join'](',\x20'));
                for (var E = 0x0; E < J['length']; E++) {
                    var F = J[E];
                    if (this['exports'][F])
                        this['funcs'][F] = this['exports'][F];
                    else {
                        if (this['exports']['_' + F])
                            this['funcs'][F] = this['exports']['_' + F];
                    }
                }
                return this['initialized'] = !![],
                console['log']('[WASM-CLIENT]\x20✅\x20Client\x20Physics\x20WASM\x20initialized'),
                console['log']('[WASM-CLIENT]\x20Mapped\x20functions:', Object['keys'](this['funcs'])['join'](',\x20')),
                !![];
            } catch (h0) {
                console['error']('[WASM-CLIENT]\x20❌\x20CRITICAL:\x20WASM\x20init\x20failed:', h0['message']),
                this['initialized'] = ![];
                throw h0;
            }
        },
        'updateCells': function(R, Q) {
            if (!this['initialized'] || !this['funcs']['wasm_update_cells'])
                throw new Error('WASM\x20func\x20update_cells\x20not\x20found');
            var W = Math['min'](R['length'], this['MAX_CELLS'])
              , B = this['cellsPtr']
              , G = new DataView(this['memory']['buffer']);
            for (var Z = 0x0; Z < W; Z++) {
                var J = R[Z]
                  , k = B + Z * this['CELL_SIZE'];
                G['setFloat32'](k + 0x0, J['x'], !![]),
                G['setFloat32'](k + 0x4, J['y'], !![]),
                G['setFloat32'](k + 0x8, J['ox'] || J['x'], !![]),
                G['setFloat32'](k + 0xc, J['oy'] || J['y'], !![]),
                G['setFloat32'](k + 0x10, J['nx'] || J['x'], !![]),
                G['setFloat32'](k + 0x14, J['ny'] || J['y'], !![]),
                G['setFloat32'](k + 0x18, J['size'], !![]),
                G['setFloat32'](k + 0x1c, J['nSize'] || J['size'], !![]),
                G['setUint16'](k + 0x20, J['id'], !![]),
                G['setUint16'](k + 0x22, J['pid'], !![]),
                G['setUint8'](k + 0x24, 0x0),
                G['setUint8'](k + 0x25, 0x0);
            }
            this['funcs']['wasm_update_cells'](W, Q);
            if (!this['debugTick'])
                this['debugTick'] = 0x0;
            this['debugTick']++;
            for (var Z = 0x0; Z < W; Z++) {
                var J = R[Z]
                  , k = B + Z * this['CELL_SIZE']
                  , E = G['getFloat32'](k + 0x0, !![])
                  , F = G['getFloat32'](k + 0x4, !![])
                  , h0 = G['getFloat32'](k + 0x18, !![]);
                this['debugTick'] % 0x3c === 0x0 && Z === 0x0 && (console['log']('[WASM-DEBUG]\x20Frame:', this['debugTick'], 'Lerp:', Q),
                console['log']('[WASM-DEBUG]\x20Cell', J['id'], 'Pos:', J['x']['toFixed'](0x2), J['y']['toFixed'](0x2), '=>', E['toFixed'](0x2), F['toFixed'](0x2), 'Target:', J['nx'], J['ny']));
                J['x'] = E,
                J['y'] = F,
                J['size'] = h0;
                if (J['setMass'])
                    J['setMass'](J['size'] * J['size'] / 0x64);
            }
        },
        'calculateCenterOfMass': function(R, Q, W, B) {
            if (!this['initialized'] || !this['funcs']['wasm_calculate_center'])
                throw new Error('WASM\x20func\x20calculate_center\x20not\x20found');
            this['funcs']['wasm_calculate_center'](Q, W, B ? 0x1 : 0x0, this['resultPtr']);
            var G = new Float32Array(this['memory']['buffer'],this['resultPtr'],0x5);
            return {
                'x': G[0x0],
                'y': G[0x1],
                'totalMass': G[0x2],
                'totalSize': G[0x3],
                'cellCount': G[0x4]
            };
        },
        'calculateAutoZoom': function(R, Q, W) {
            if (!this['initialized'] || !this['funcs']['wasm_calc_zoom'])
                throw new Error('WASM\x20func\x20calc_zoom\x20not\x20found');
            return this['funcs']['wasm_calc_zoom'](R, Q, W || 0.27);
        },
        'sortCellsForRender': function(R) {
            if (!this['initialized'] || !this['funcs']['wasm_sort_render'])
                throw new Error('WASM\x20not\x20initialized\x20-\x20cannot\x20sort\x20cells');
            this['funcs']['wasm_sort_render'](this['cellsPtr'], R['length']);
        }
    };
    window['WasmClientPhysics'] = V;
    function P(R) {
        var Q = document['getElementById']('nickname')['value']
          , W = ''
          , B = document['getElementById']('teamtag')['value']
          , G = localStorage['vanisToken'] || '';
        try {
            var Z = localStorage['skins'] ? JSON['parse'](localStorage['skins']) : null;
            if (!Z || !Array['isArray'](Z) || Z['length'] === 0x0) {
                console['log']('[SKIN]\x20Initializing\x20default\x20skins'),
                Z = [];
                for (var J = 0x0; J < 0x8; J++) {
                    Z['push']('https://skins.aetlis.io/s/aetlis1');
                }
                localStorage['skins'] = JSON['stringify'](Z);
            }
            var k = parseInt(localStorage['selectedSkinIndex']) || 0x0;
            if (k >= Z['length'])
                k = 0x0;
            W = Z[k] || '',
            W && !W['startsWith']('http://') && !W['startsWith']('https://') && (console['warn']('[SKIN]\x20Invalid\x20skin\x20URL:', W, '-\x20using\x20default'),
            W = 'https://skins.aetlis.io/s/aetlis1',
            Z[k] = W,
            localStorage['skins'] = JSON['stringify'](Z));
        } catch (F) {
            console['error']('[SKIN]\x20Error\x20loading\x20selected\x20skin:', F),
            W = 'https://skins.aetlis.io/s/aetlis1';
        }
        var E = D['settings']['autoRespawn'] ? '1' : '0';
        console['log']('[CLIENT]\x20Sending\x20join\x20-\x20Name:', Q, 'Skin:', W, 'AutoRespawn:', E),
        (R['utf8'](Q),
        R['utf8'](W),
        R['utf8'](B),
        R['utf8'](G),
        R['utf8'](E));
    }
    D['clientVersion'] = 0xb,
    D['currentWsId'] = null,
    D['events'] = new b(),
    D['settings'] = z,
    D['renderer'] = x,
    D['usingWebGL'] = x['type'] === PIXI['RENDERER_TYPE']['WEBGL'],
    D['skinLoader'] = new I(),
    console['log'](D['usingWebGL'] ? 'WebGL\x20Renderer' : 'Canvas\x20Renderer'),
    U['virus']['loadVirusFromUrl'](z['virusImageUrl']),
    D['state'] = {
        'connectionUrl': null,
        'selectedServer': null,
        'spectators': 0x0,
        'lastDeathTime': 0x0,
        'isAlive': ![],
        'playButton': ![],
        'tournamentSpectatorOnly': ![],
        'deathScreen': ![],
        'isAutoRespawning': ![],
        'deathCounter': 0x0,
        'showDeathScreenEvery': 0x5,
        'lastCellCount': 0x0
    },
    D['dualIdentity'] = {
        'nickname': localStorage['dualNickname'] || '',
        'skin': localStorage['dualSkinUrl'] || ''
    },
    N['loadAdinplay'](N['loadMenuAds']),
    document['body']['oncontextmenu'] = function(R) {
        return R['target'] && 'email' === R['target']['id'];
    }
    ,
    D['usingWebGL'] && z['showBackgroundImage'] && z['backgroundImageUrl'] && PIXI['Texture']['from'](z['backgroundImageUrl']),
    D['events']['$on']('cells-changed', function(R) {
        var Q = D['state']['lastCellCount'] > 0x0;
        D['running'] && Q && R === 0x0 && (D['state']['deathCounter']++,
        console['log']('[DEATH-COUNTER]\x20Player\x20died.\x20Death\x20count:', D['state']['deathCounter']),
        console['log']('[DEATH-COUNTER]\x20Auto\x20respawn\x20setting:', D['settings']['autoRespawn']),
        D['settings']['autoRespawn'] ? D['state']['deathCounter'] % D['state']['showDeathScreenEvery'] === 0x0 ? (console['log']('[DEATH-COUNTER]\x20🚫\x20Showing\x20death\x20screen\x20(every', D['state']['showDeathScreenEvery'], 'deaths)'),
        console['log']('[DEATH-COUNTER]\x20Note:\x20Server\x20will\x20still\x20auto\x20respawn\x20you')) : console['log']('[DEATH-COUNTER]\x20✅\x20Auto\x20respawn\x20-\x20death\x20screen\x20still\x20shown\x20briefly') : console['log']('[DEATH-COUNTER]\x20🚫\x20Auto\x20respawn\x20disabled\x20-\x20death\x20screen\x20on\x20every\x20death')),
        D['state']['lastCellCount'] = R;
    }),
    (D['start'] = function(R) {
        console['log']('[GAME.START]\x20Starting\x20game\x20with\x20data:', R),
        console['log']('[GAME.START]\x20Validation\x20-\x20protocol:', R['protocol'], 'instanceSeed:', R['instanceSeed'], 'playerId:', R['playerId'], 'border:', R['border']);
        if (!(R['protocol'] && R['instanceSeed'] && R['playerId'] && R['border'])) {
            console['error']('[GAME.START]\x20VALIDATION\x20FAILED\x20-\x20Missing\x20mandatory\x20data!'),
            console['error']('[GAME.START]\x20protocol:', R['protocol']),
            console['error']('[GAME.START]\x20instanceSeed:', R['instanceSeed']),
            console['error']('[GAME.START]\x20playerId:', R['playerId']),
            console['error']('[GAME.START]\x20border:', R['border']);
            throw 'Lacking\x20mandatory\x20data';
        }
        console['log']('[GAME.START]\x20Validation\x20passed,\x20initializing\x20game...'),
        window['__tournamentSpectatorOnly'] = ![],
        window['__tournamentActive'] = ![],
        D['state']['tournamentSpectatorOnly'] = ![],
        (D['running'] = !![],
        D['protocol'] = R['protocol'],
        D['modeId'] = R['gameModeId'] || 0x0,
        D['instanceSeed'] = R['instanceSeed'],
        D['pingstamp'] = 0x0,
        D['timestamp'] = 0x0,
        D['deltaTime'] = 0x0,
        D['playerId'] = R['playerId'],
        D['multiboxPid'] = null,
        D['activePid'] = D['playerId'],
        D['tagId'] = null,
        D['spectating'] = ![],
        D['state']['spectators'] = 0x0,
        D['state']['isAlive'] = ![],
        D['state']['lastCellCount'] = 0x0,
        D['center'] = {
            'x': 0x0,
            'y': 0x0
        },
        D['score'] = 0x0,
        D['cellCount'] = 0x0,
        D['splitCount'] = 0x0,
        D['moveWaitUntil'] = 0x0,
        D['replaying'] = !!R['replayUpdates'],
        D['replayUpdates'] = R['replayUpdates'],
        D['replayUpdateIndex'] = 0x0,
        D['replay']['updateHistory']['length'] = 0x0,
        D['nodes'] = {},
        D['nodesOwn'] = {},
        D['nodelist'] = [],
        D['removedNodes'] = [],
        D['rawMouse'] = {},
        D['mouse'] = {},
        D['stopMovePackets'] = ![],
        D['moveToCenterOfCells'] = ![],
        D['freezeMouse'] = ![],
        D['border'] = R['border']),
        console['log']('[GAME.START]\x20Calling\x20setupZoom\x20with\x20border:', D['border']),
        (D['setupZoom'](D['border']),
        D['massTextPool'] = [],
        D['crownPool'] = [],
        D['hatPool'] = []),
        window['game'] = D,
        D['actions']['initializeEnhancedFeatures']();
        var Q = PIXI['utils']['isWebGLSupported']() && z['useWebGL'] && z['showBackgroundImage'];
        D['scene'] = new H(D,D['border'],Q),
        D['container'] = D['scene']['container'],
        D['cameraScale'] = D['zoom'],
        D['camera'] = new j(D['container']),
        D['camera']['scale']['set'](D['cameraScale']),
        D['camera']['position']['set'](0x0),
        S['prepareMode'](D, D['modeId']),
        D['playerManager'] = new M(D),
        D['ticker'] = new PIXI['Ticker'](),
        D['ticker']['add'](D['tick']),
        D['state']['selectedServer'] && D['state']['connectionUrl'] !== D['state']['selectedServer']['url'] && (D['state']['selectedServer'] = null),
        D['replaying'] ? (D['moveInterval'] = setInterval(D['replayUpdate'], 0x28),
        D['events']['$emit']('show-replay-controls', D['replayUpdates']['length']),
        D['events']['$emit']('minimap-stats-visible', ![])) : (z['minimapEnabled'] && D['events']['$emit']('minimap-show'),
        z['showChat'] && D['events']['$emit']('chat-visible', !![]),
        D['events']['$emit']('leaderboard-show'),
        D['events']['$emit']('stats-visible', !![]),
        D['moveInterval'] = setInterval( () => {
            D['stopMovePackets'] || (D['moveToCenterOfCells'] ? D['sendUint8'](0x9) : D['actions']['move']());
        }
        , 0x28),
        D['setupStats'](),
        D['state']['playButton'] = !![],
        D['state']['lastDeathTime'] = Date['now']()),
        D['ticker']['start'](),
        D['eventListeners'](!![]),
        D['initSnowfall']();
    }
    ,
    D['setupZoom'] = function(R) {
        console['log']('[SETUP_ZOOM]\x20Setting\x20up\x20zoom\x20with\x20border:', R),
        D['zoom'] = 0.3;
        var Q;
        if (R['isCircle'])
            Q = R['radius'] * 0x2,
            D['zoomScale'] = 0x4e20 / Q,
            console['log']('[SETUP_ZOOM]\x20Circle\x20map:\x20radius\x20=', R['radius'], ',\x20diameter\x20=', Q, ',\x20zoomScale\x20=', D['zoomScale']);
        else
            R['width'] === R['height'] ? (D['zoomScale'] = 0x4e20 / R['width'],
            console['log']('[SETUP_ZOOM]\x20Square\x20map:\x20width\x20=', R['width'], ',\x20zoomScale\x20=', D['zoomScale'])) : (D['zoomScale'] = 0x1,
            console['log']('[SETUP_ZOOM]\x20Rectangular\x20map:\x20width\x20=', R['width'], ',\x20height\x20=', R['height'], ',\x20zoomScale\x20=\x201'));
        D['zoomMin'] = 0.03 * D['zoomScale'],
        console['log']('[SETUP_ZOOM]\x20Final\x20zoom\x20settings:\x20zoom\x20=', D['zoom'], ',\x20zoomScale\x20=', D['zoomScale'], ',\x20zoomMin\x20=', D['zoomMin']);
    }
    ,
    D['nextReplayPacket'] = function() {
        var R = D['replayUpdateIndex']
          , Q = D['replayUpdates'][R];
        D['parseMessage'](Q),
        D['replayUpdateIndex']++;
    }
    ,
    D['replayMoveTo'] = function(R) {
        var Q = D['replayUpdates']['length'] - 0x1
          , W = Math['floor'](R * Q);
        D['replayUpdateIndex'] = W,
        D['nextReplayPacket']();
        for (var B = D['timestamp'], G = [], Z = 0x0; Z < D['nodelist']['length']; Z++) {
            var J = D['nodelist'][Z];
            J['updateTime'] !== B && G['push'](J);
        }
        for (var k = 0x0; k < G['length']; k++)
            G[k]['destroy']();
        return W;
    }
    ,
    D['replayUpdate'] = function() {
        D['replayUpdateIndex'] >= D['replayUpdates']['length'] && (D['clearNodes'](),
        D['replayUpdateIndex'] = 0x0),
        D['events']['$emit']('replay-index-change', D['replayUpdateIndex']),
        D['nextReplayPacket']();
    }
    ,
    D['updateStats'] = function(R) {
        var Q = D['score']
          , W = D['highscore']
          , B = Math['round'](D['avgFps']['getAndReset']());
        D['events']['$emit']('stats-changed', {
            'ping': R,
            'fps': B,
            'mass': Q,
            'score': W
        });
        var G = D['playerManager']['playerCount']
          , Z = D['state']['spectators'];
        D['events']['$emit']('minimap-stats-changed', {
            'playerCount': G,
            'spectators': Z
        });
    }
    ,
    D['setupStats'] = function() {
        D['avgFps'] = new Y(),
        D['ticker']['add']( () => {
            D['avgFps']['add'](D['ticker']['FPS']);
        }
        ),
        D['everySecond'] = setInterval( () => {
            window['app']['showMenu'] || window['app']['showDeathScreen'] ? D['updateStats'](null) : D['ping']();
        }
        , 0x3e8);
    }
    ,
    D['clearNodes'] = function() {
        for (; D['nodelist']['length']; )
            D['nodelist'][0x0]['destroy']();
        for (; D['removedNodes']['length']; )
            D['removedNodes']['pop']()['destroySprite']();
    }
    ,
    D['destroySpritePool'] = function(R, Q) {
        for (; R['length']; )
            R['pop']()['destroy'](Q);
    }
    ,
    D['initSnowfall'] = function() {
        if (!z['showSnowfall'])
            return;
        D['snowflakes'] = [],
        D['snowContainer'] = new PIXI['Container'](),
        D['snowContainer']['alpha'] = z['snowfallOpacity'] || 0.5;
        var R = D['border'], Q, W, B, G, Z, J;
        if (R['isCircle']) {
            Q = R['radius'] * 0x2,
            W = R['radius'] * 0x2;
            var k = R['x'] || 0x0
              , E = R['y'] || 0x0;
            B = k - R['radius'],
            G = E - R['radius'],
            Z = k + R['radius'],
            J = E + R['radius'];
        } else
            Q = R['width'],
            W = R['height'],
            B = R['minx'] !== undefined ? R['minx'] : -R['width'] / 0x2,
            G = R['miny'] !== undefined ? R['miny'] : -R['height'] / 0x2,
            Z = R['maxx'] !== undefined ? R['maxx'] : R['width'] / 0x2,
            J = R['maxy'] !== undefined ? R['maxy'] : R['height'] / 0x2;
        var F = 'https://i.postimg.cc/kX6mdSZV/fqwwqf.png'
          , h0 = PIXI['Texture']['from'](F);
        D['snowflakeTexture'] = h0;
        var h1 = Math['min'](z['snowfallCount'] || 0x12c, 0x320)
          , h2 = W / 0xc;
        for (var h3 = 0x0; h3 < h1; h3++) {
            var h4 = new PIXI['Sprite'](h0);
            h4['anchor']['set'](0.5);
            var h5 = 0.08 + Math['random']() * 0.245;
            h4['scale']['set'](h5),
            h4['alpha'] = 0.5 + Math['random']() * 0.5,
            h4['x'] = B + Math['random']() * Q,
            h4['y'] = G + Math['random']() * W,
            h4['_speed'] = h2 * (0.5 + Math['random']() * 0x1),
            h4['_drift'] = h2 * (Math['random']() - 0.5) * 0.3,
            h4['_wobble'] = Math['random']() * Math['PI'] * 0x2,
            h4['_wobbleSpeed'] = 0.5 + Math['random']() * 1.5,
            h4['_wobbleAmp'] = h2 * 0.1,
            h4['_minX'] = B,
            h4['_minY'] = G,
            h4['_maxX'] = Z,
            h4['_maxY'] = J,
            h4['_mapWidth'] = Q,
            D['snowContainer']['addChild'](h4),
            D['snowflakes']['push'](h4);
        }
        D['scene'] && D['scene']['container'] && D['scene']['container']['addChild'](D['snowContainer']),
        console['log']('[SNOW]\x20Snowfall\x20initialized\x20with', h1, 'flakes.\x20Map\x20size:', Q, 'x', W, 'Speed:', h2);
    }
    ,
    D['updateSnowfall'] = function(R) {
        if (!D['snowflakes'] || !z['showSnowfall'])
            return;
        var Q = R / 0x3e8;
        if (Q > 0.1)
            Q = 0.1;
        for (var W = 0x0; W < D['snowflakes']['length']; W++) {
            var B = D['snowflakes'][W];
            B['y'] += B['_speed'] * Q,
            B['_wobble'] += B['_wobbleSpeed'] * Q,
            B['x'] += (B['_drift'] + Math['sin'](B['_wobble']) * B['_wobbleAmp']) * Q;
            B['y'] > B['_maxY'] && (B['y'] = B['_minY'] - 0x32,
            B['x'] = B['_minX'] + Math['random']() * B['_mapWidth']);
            if (B['x'] < B['_minX'])
                B['x'] = B['_maxX'];
            else
                B['x'] > B['_maxX'] && (B['x'] = B['_minX']);
        }
    }
    ,
    D['destroySnowfall'] = function() {
        D['snowContainer'] && (D['scene'] && D['scene']['container'] && D['scene']['container']['removeChild'](D['snowContainer']),
        D['snowContainer']['destroy']({
            'children': !![]
        }),
        D['snowContainer'] = null),
        D['snowflakeTexture'] && (D['snowflakeTexture']['destroy'](!![]),
        D['snowflakeTexture'] = null),
        D['snowflakes'] = null,
        console['log']('[SNOW]\x20Snowfall\x20destroyed');
    }
    ,
    D['stop'] = function() {
        window['winnerOverlay'] && (window['winnerOverlay']['style']['display'] = 'none'),
        window['__tournamentSpectatorOnly'] = ![],
        window['__tournamentActive'] = ![],
        window['__tournamentState'] = null,
        D['state']['tournamentSpectatorOnly'] = ![],
        window['TournamentUI'] && window['TournamentUI']['hideUI'] && window['TournamentUI']['hideUI'](),
        D['destroySnowfall'](),
        (D['running'] = ![],
        D['state']['isAlive'] = ![],
        D['state']['spectators'] = 0x0,
        D['state']['playButton'] = ![],
        D['eventListeners'](![]),
        D['state']['connectionUrl'] = null,
        D['ticker']['stop'](),
        clearInterval(D['moveInterval']),
        clearInterval(D['everySecond']),
        D['renderer']['clear'](),
        D['playerManager']['destroy'](),
        D['skinLoader']['clearCallbacks'](),
        D['events']['$emit']('minimap-stats-visible', !![]),
        D['events']['$emit']('stats-visible', ![]),
        D['events']['$emit']('chat-visible', ![]),
        D['events']['$emit']('leaderboard-hide'),
        D['events']['$emit']('minimap-hide'),
        D['events']['$emit']('minimap-destroy'),
        D['events']['$emit']('show-replay-controls', ![]),
        D['events']['$emit']('cells-changed', 0x0),
        D['events']['$emit']('reset-cautions'),
        D['events']['$emit']('game-stopped'),
        D['clearNodes'](),
        D['scene'] && (D['scene']['destroyBackgroundImage'](![]),
        D['scene']['uninstallMassTextFont']()),
        D['container']['destroy'](!![]),
        U['cells']['destroyCache'](),
        D['destroySpritePool'](D['massTextPool'], !![]),
        D['destroySpritePool'](D['crownPool']),
        D['hatPool'] && D['destroySpritePool'](D['hatPool']));
    }
    ,
    D['showMenu'] = function(R, Q) {
        if (window['app']['showDeathScreen'])
            return ![];
        if (window['app']['showMenu'] = R,
        D['actions']['stopMovement'](R),
        R)
            D['events']['$emit']('reload-serverlist-if-minute-passed'),
            Q && N['loadMenuAds']();
        else {
            var W = document['activeElement'];
            W && 'chatbox-input' === W['id'] || D['renderer']['view']['focus'](),
            D['stopMovePackets'] = ![],
            O();
        }
        return R;
    }
    ,
    D['toggleMenu'] = function() {
        var R = !window['app']['showMenu'];
        D['showMenu'](R, !![]);
    }
    ,
    D['triggerAutoRespawn'] = function() {
        clearTimeout(D['deathTimeout']),
        delete D['deathTimeout'];
        var R = window['__tournamentActive'] === !![];
        if (R) {
            console['log']('[TOURNAMENT]\x20💀\x20Tournament\x20active\x20-\x20forcing\x20spectate\x20mode\x20in\x200.3s'),
            setTimeout(function() {
                !j['spectating'] && j['actions'] && j['actions']['spectate'] && (console['log']('[TOURNAMENT]\x20👻\x20Auto-spectating\x20(eliminated\x20from\x20tournament)'),
                j['actions']['spectate']());
            }, 0x12c);
            return;
        }
        console['log']('[DEATH]\x20Normal\x20death\x20-\x20server\x20handles\x20respawn');
    }
    ,
    D['showDeathScreen'] = function(R) {
        window['app']['showDeathScreen'] = R;
    }
    ,
    D['setDeathStats'] = function(R) {
        window['app']['deathStats'] = R;
    }
    ,
    D['tick'] = function(R) {
        D['timestamp'] = Date['now'](),
        D['deltaTime'] = R;
        for (var Q = D['removedNodes']['length']; Q--; ) {
            var W = D['removedNodes'][Q];
            W['update']() && (W['destroySprite'](),
            D['removedNodes']['splice'](Q, 0x1));
        }
        for (var B = D['playerId'], G = D['multiboxPid'], Z = D['nodelist'], J = 0x0, k = 0x0, E = 0x0, F = 0x0, h0 = 0x0, h1 = 0x0; h1 < Z['length']; h1++) {
            var h2 = Z[h1];
            h2['update']();
            var h3 = ![];
            if (z['cameraFollowBoth'])
                (h2['pid'] === B || h2['pid'] === G) && (h3 = !![]);
            else {
                var h4 = D['activePid'] || B;
                h2['pid'] === h4 && (h3 = !![]);
            }
            if (h3) {
                var h5 = h2['getMass']();
                J += h2['x'] * h5,
                k += h2['y'] * h5,
                E += h5,
                F += h2['nSize'];
            }
            h2['pid'] === D['activePid'] && h0++;
        }
        if (D['cellCount'] !== h0 && (D['cellCount'] = h0,
        D['events']['$emit']('cells-changed', h0)),
        D['scene']['sort'](),
        D['spectating'])
            J = D['center']['x'],
            k = D['center']['y'],
            D['score'] = 0x0,
            delete D['highscore'];
        else {
            if (!E) {
                D['updateSnowfall'](D['deltaTime']),
                D['renderer']['render'](D['container']),
                D['score'] = 0x0;
                return;
            }
            J /= E,
            k /= E,
            D['score'] = E,
            D['highscore'] || (D['highscore'] = 0x0),
            D['highscore'] = Math['max'](E, D['highscore']);
        }
        var h6 = z['cameraMoveSmoothing'] * D['deltaTime'];
        if (D['camera']['position']['x'] = K(D['camera']['position']['x'], J, h6),
        D['camera']['position']['y'] = K(D['camera']['position']['y'], k, h6),
        D['timestamp'] >= D['moveWaitUntil'] && (D['updateMouse'](),
        D['splitCount'] = 0x0),
        z['autoZoom']) {
            var h7 = Math['min'](0x40 / F, 0x1);
            D['cameraScale'] = D['zoom'] * Math['pow'](h7, 0.27);
        } else
            D['cameraScale'] = D['zoom'];
        var h8 = K(D['camera']['scale']['x'], D['cameraScale'], z['cameraZoomSmoothing'] * D['deltaTime']);
        D['camera']['scale']['set'](h8),
        D['updateSnowfall'](D['deltaTime']),
        D['renderer']['render'](D['container']);
    }
    ,
    D['updateMouse'] = function(R=![]) {
        if (!D['mouseFrozen'] || R) {
            var Q = D['rawMouse']['x']
              , W = D['rawMouse']['y']
              , B = 0x1 / D['camera']['scale']['x']
              , G = 0x1 / D['camera']['scale']['y']
              , Z = D['container'];
            D['mouse']['x'] = Z['pivot']['x'] + (Q - window['innerWidth'] / 0x2) * B,
            D['mouse']['y'] = Z['pivot']['y'] + (W - window['innerHeight'] / 0x2) * G;
        }
    }
    ,
    D['joinGame'] = function() {
        var R = new A();
        R['uint8'](0x1),
        P(R);
        var Q = R['write']();
        D['send'](Q),
        D['spectating'] = ![];
    }
    ,
    D['sendJoinData'] = function(R) {
        var Q = new A();
        Q['uint8'](0x5),
        Q['uint8'](D['clientVersion']),
        Q['uint8Array'](R),
        P(Q);
        var W = localStorage['vanisToken'];
        W && (/^wss?:\/\/[a-zA-Z0-9_-]+\.vanis\.io/i['test'](D['ws']['url']) && Q['utf8'](W));
        var B = Q['write']();
        D['send'](B),
        (D['events']['$emit']('players_menu', ![]),
        D['events']['$emit']('account_menu', ![]),
        D['events']['$emit']('chatbox_menu', ![]),
        D['events']['$emit']('options_menu', ![]),
        D['events']['$emit']('replays_menu', ![]));
    }
    ,
    D['sendDualIdentity'] = function() {
        if (!D || !D['ws'] || D['ws']['readyState'] !== 0x1) {
            console['warn']('[DUAL]\x20❌\x20sendDualIdentity\x20aborted\x20-\x20WebSocket\x20not\x20ready\x20(readyState:', D && D['ws'] ? D['ws']['readyState'] : 'N/A', ')');
            return;
        }
        var R = (localStorage['dualNickname'] || '')['trim']()
          , Q = (localStorage['dualSkinUrl'] || '')['trim']();
        if (R['length'] > 0xf)
            R = R['substring'](0x0, 0xf);
        if (Q['length'] > 0xc8)
            Q = Q['substring'](0x0, 0xc8);
        console['log']('[DUAL]\x20Sending\x20identity\x20->\x20nickname:', R || '(default)', 'skin:', Q || '(default)');
        try {
            var W = new A();
            W['uint8'](0x1e),
            W['utf8'](R),
            D['send'](W['write']()),
            console['log']('[DUAL]\x20✅\x20Nickname\x20packet\x20sent\x20(opcode\x2030)');
        } catch (G) {
            console['error']('[DUAL]\x20Failed\x20to\x20send\x20dual\x20nickname:', G);
        }
        try {
            var B = new A();
            B['uint8'](0x1f),
            B['utf8'](Q),
            D['send'](B['write']()),
            console['log']('[DUAL]\x20✅\x20Skin\x20packet\x20sent\x20(opcode\x2031)');
        } catch (Z) {
            console['error']('[DUAL]\x20Failed\x20to\x20send\x20dual\x20skin:', Z);
        }
    }
    ,
    D['joinGame'] = function() {
        if (window['__tournamentSpectatorOnly'] || D['state']['tournamentSpectatorOnly']) {
            console['log']('[TOURNAMENT]\x20🚫\x20joinGame\x20BLOCKED\x20-\x20spectator\x20only\x20mode'),
            D['spectating'] = !![];
            D['actions'] && D['actions']['spectate'] && D['actions']['spectate']();
            return;
        }
        console['log']('\x0a==========\x20🎮\x20CLIENT:\x20joinGame()\x20CALLED\x20=========='),
        console['log']('[CLIENT-JOIN]\x20Call\x20stack:', new Error()['stack']['split']('\x0a')['slice'](0x2, 0x6)['join']('\x0a')),
        console['log']('[CLIENT-JOIN]\x20Timestamp:', Date['now']()),
        console['log']('[CLIENT-JOIN]\x20isAlive:', D['state']['isAlive'], 'deathScreen:', D['state']['deathScreen']),
        console['log']('[CLIENT-JOIN]\x20cellCount:', D['cellCount'], 'spectating:', D['spectating']),
        console['log']('=================================================\x0a');
        var R = new A();
        R['uint8'](0x1),
        P(R);
        var Q = R['write']();
        D['send'](Q),
        D['spectating'] = ![],
        typeof D['sendDualIdentity'] === 'function' && D['sendDualIdentity'](),
        setTimeout( () => {
            if (z['rememberEjecting']) {
                var W = new ArrayBuffer(0x2)
                  , B = new DataView(W);
                B['setUint8'](0x0, 0x1a),
                B['setUint8'](0x1, 0x1),
                D['send'](W),
                console['log']('Sent\x20rememberEjecting\x20packet\x20on\x20joinGame');
            }
            if (z['lockInactivePosition']) {
                var G = new ArrayBuffer(0x2)
                  , Z = new DataView(G);
                Z['setUint8'](0x0, 0x1c),
                Z['setUint8'](0x1, 0x1),
                D['send'](G),
                console['log']('Sent\x20lockInactivePosition\x20packet\x20on\x20joinGame');
            }
            if (z['minionControl']) {
                var J = new ArrayBuffer(0x2)
                  , k = new DataView(J);
                k['setUint8'](0x0, 0x1b),
                k['setUint8'](0x1, 0x1),
                D['send'](J),
                console['log']('Sent\x20minionControl\x20packet\x20on\x20joinGame');
            }
        }
        , 0x64);
    }
    ,
    D['seededRandom'] = function(R) {
        var Q = 0x2710 + D['instanceSeed']
          , W = Math['sin'](R) * Q;
        return W - Math['floor'](W);
    }
    ,
    D['getThumbnail'] = function() {
        var R = D['container']
          , Q = new PIXI['Container']();
        Q['pivot']['x'] = R['position']['x'],
        Q['pivot']['y'] = R['position']['y'],
        Q['position']['x'] = 0x78,
        Q['position']['y'] = 67.5,
        Q['scale']['set'](0.25),
        Q['addChild'](R);
        var W = PIXI['RenderTexture']['create'](0xf0, 0x87);
        D['renderer']['render'](Q, W),
        Q['removeChild'](R);
        var B = D['renderer']['extract']['canvas'](W)
          , G = document['createElement']('canvas');
        G['width'] = 0xf0,
        G['height'] = 0x87;
        var Z = G['getContext']('2d');
        Z['beginPath'](),
        Z['rect'](0x0, 0x0, 0xf0, 0x87),
        Z['fillStyle'] = z['backgroundColor'],
        Z['fill'](),
        Z['drawImage'](B, 0x0, 0x0, 0xf0, 0x87);
        var J = G['toDataURL']();
        return W['destroy'](!![]),
        J;
    }
    ,
    D['sendChatMessage'] = function(R) {
        for (var Q = unescape(encodeURIComponent(R)), W = [0x63], B = 0x0; B < Q['length']; B++)
            W['push'](Q['charCodeAt'](B));
        var G = new Uint8Array(W)['buffer'];
        D['send'](G);
    }
    ,
    D['sendTournamentCommand'] = function(R, Q) {
        try {
            var W = JSON['stringify']({
                'command': R,
                'data': Q || {}
            })
              , B = new TextEncoder()['encode'](W)
              , G = new ArrayBuffer(0x1 + 0x2 + B['length'])
              , Z = new DataView(G)
              , J = 0x0;
            Z['setUint8'](J, 0x37),
            J += 0x1,
            Z['setUint16'](J, B['length'], !![]),
            J += 0x2;
            var k = new Uint8Array(G);
            k['set'](B, J),
            D['send'](G),
            console['log']('[TOURNAMENT]\x20📤\x20Sent\x20command:', R, Q);
        } catch (E) {
            console['error']('[TOURNAMENT]\x20Failed\x20to\x20send\x20command:', E);
        }
    }
    ,
    D['addServerMessage'] = function(R) {
        D['events']['$emit']('chat-message', {
            'text': R,
            'textColor': '#828282'
        });
    }
    ,
    D['setTagId'] = function(R) {
        return R || (R = null),
        R !== D['tagId'] && (D['tagId'] = R,
        !![]);
    }
    ,
    D['levelUp'] = function(R) {
        C['toast']['fire']({
            'title': 'You\x20have\x20reached\x20level\x20' + R + '!',
            'background': '#b37211',
            'timer': 0xbb8
        });
    }
    ,
    D['getShortMass'] = function(R) {
        return R < 0x3e8 ? R['toString']() : (Math['round'](0.001 * R * 0xa) / 0xa)['toFixed'](0x1) + 'k';
    }
    ,
    D['shouldAutoRespawn'] = function() {
        return !!z['autoRespawn'] && (!window['app']['showMenu'] && !(Date['now']() - D['state']['lastDeathTime'] > 0xea60));
    }
    ,
    D['sendPlayerInfoEarly'] = function() {
        var R = document['getElementById']('nickname')['value'] || ''
          , Q = localStorage['vanisToken'] || '';
        console['log']('[EARLY-INFO]\x20Sending\x20player\x20info\x20-\x20Name:', R, 'Discord:', Q ? 'provided' : 'none');
        var W = new A();
        W['uint8'](0x4),
        W['utf8'](R),
        W['utf8'](Q);
        var B = W['write']();
        D['send'](B);
    }
    ,
    D['sendPerkRefresh'] = function() {
        var R = typeof WebSocket !== 'undefined' && WebSocket['OPEN'] != null ? WebSocket['OPEN'] : 0x1;
        if (!D['ws'] || D['ws']['readyState'] !== R)
            return;
        try {
            var Q = new A();
            Q['uint8'](0x1a),
            D['send'](Q['write']()),
            console['debug']('[PERKS]\x20Refresh\x20request\x20sent');
        } catch (W) {
            console['error']('[PERKS]\x20Failed\x20to\x20send\x20refresh\x20request:', W);
        }
    }
    ,
    window['game'] = D,
    T['exports'] = D);
}
, , , function(h, T) {
    var L = {
        'useWebGL': !![],
        'gameResolution': 0x1,
        'smallTextThreshold': 0x28,
        'autoZoom': ![],
        'autoRespawn': ![],
        'mouseFreezeSoft': !![],
        'rememberEjecting': ![],
        'lockInactivePosition': ![],
        'cameraFollowBoth': ![],
        'minionControl': ![],
        'hideOutlines': ![],
        'drawDelay': 0x78,
        'cameraMoveSmoothing': 0.11,
        'cameraZoomSmoothing': 0.14,
        'cameraZoomSpeed': 0xa,
        'replayDuration': 0x8,
        'showNames': 0x2,
        'showMass': 0x2,
        'showSkins': 0x1,
        'showOwnName': !![],
        'showOwnMass': !![],
        'showOwnSkin': !![],
        'showCrown': !![],
        '_rndL': atob('ZW5hYmxlZA=='),
        '_xorK': 0x5a ^ 0x5a,
        '_assetPreloadUrl': 'https://i.postimg.cc/kg8rZdHw/acacs.png',
        'showSnowfall': !![],
        'snowfallOpacity': 0.6,
        'snowfallCount': 0xc8,
        'lockBackground': !![],
        'lockedBackgroundColor': '0c0c0c',
        'lockedBackgroundImageUrl': 'img/background.png',
        'lockedShowBackgroundImage': !![],
        'foodVisible': !![],
        'eatAnimation': !![],
        'showHud': !![],
        'showLeaderboard': !![],
        'showServerName': ![],
        'showChat': !![],
        'minimapEnabled': !![],
        'minimapLocations': !![],
        'showFPS': !![],
        'showPing': !![],
        'showCellCount': !![],
        'showPlayerScore': ![],
        'showPlayerMass': !![],
        'showClock': !![],
        'showSessionTime': !![],
        'showPlayerCount': !![],
        'showSpectators': ![],
        'showBlockedMessageCount': !![],
        'filterChatMessages': !![],
        'backgroundColor': '0c0c0c',
        'borderColor': '000000',
        'foodColor': 'ffffff',
        'ejectedColor': 'f02e10',
        'cellNameOutlineColor': '000000',
        'cursorImageUrl': null,
        'backgroundImageUrl': 'img/background.png',
        'virusImageUrl': 'img/virus.png',
        'cellMassColor': 'ffffff',
        'cellMassOutlineColor': '000000',
        'cellNameFont': 'Hind\x20Madurai',
        'cellNameWeight': 0x1,
        'cellNameOutline': 0x2,
        'cellNameSmoothOutline': !![],
        'cellLongNameThreshold': 0x4e2,
        'cellMassFont': 'Ubuntu',
        'cellMassWeight': 0x2,
        'cellMassOutline': 0x2,
        'cellMassTextSize': 0x0,
        'cellMassSmoothOutline': !![],
        'shortMass': !![],
        'showBackgroundImage': !![],
        'backgroundImageRepeat': !![],
        'backgroundDefaultIfUnequal': !![],
        'backgroundImageOpacity': 0.6,
        'useFoodColor': ![],
        'namesEnabled': !![],
        'skinsEnabled': !![],
        'massEnabled': !![],
        'showLocations': ![],
        'cellBorderSize': 0x1,
        'autoHideReplayControls': ![],
        'minimapSize': 0xdc,
        'minimapFPS': 0x1e,
        'minimapSmoothing': 0.09
    };
    function q(i) {
        switch (i) {
        case 0x2:
            return 'bold';
        case 0x0:
            return 'thin';
        default:
            return 'normal';
        }
    }
    function j(i, p) {
        var z;
        switch (i) {
        case 0x3:
            z = p / 0x5;
            break;
        case 0x1:
            z = p / 0x14;
            break;
        default:
            z = p / 0xa;
        }
        return Math['ceil'](z);
    }
    h['exports'] = window['settings'] = new class {
        constructor() {
            this['getInternalSettings'](),
            this['userDefinedSettings'] = this['loadUserDefinedSettings'](),
            Object['assign'](this, L, this['userDefinedSettings']),
            this['set']('skinsEnabled', !![]),
            this['set']('namesEnabled', !![]),
            this['set']('massEnabled', !![]),
            this['compileNameFontStyle'](),
            this['compileMassFontStyle'](),
            this['applyLockedBackground']();
        }
        ['getInternalSettings']() {
            this['cellSize'] = 0x200,
            this['cellNamePadding'] = 0x15e,
            this['cellRenderSize'] = this['cellSize'] + this['cellNamePadding'],
            this['cellScaleRatio'] = this['cellRenderSize'] / this['cellSize'];
        }
        ['compileNameFontStyle']() {
            var i = {
                'fontFamily': this['cellNameFont'],
                'fontSize': 0x50,
                'fontWeight': q(this['cellNameWeight'])
            };
            return this['cellNameOutline'] && (i['stroke'] = PIXI['utils']['string2hex'](this['cellNameOutlineColor']),
            i['strokeThickness'] = j(this['cellNameOutline'], i['fontSize']),
            i['lineJoin'] = this['cellNameSmoothOutline'] ? 'round' : 'miter'),
            this['nameTextStyle'] = i;
        }
        ['compileMassFontStyle']() {
            var i = {
                'fontFamily': this['cellMassFont'],
                'fontSize': 0x38 + 0x14 * this['cellMassTextSize'],
                'fontWeight': q(this['cellMassWeight']),
                'lineJoin': 'round',
                'fill': PIXI['utils']['string2hex'](this['cellMassColor'])
            };
            return this['cellMassOutline'] && (i['stroke'] = PIXI['utils']['string2hex'](this['cellMassOutlineColor']),
            i['strokeThickness'] = j(this['cellMassOutline'], i['fontSize']),
            i['lineJoin'] = this['cellMassSmoothOutline'] ? 'round' : 'miter'),
            this['massTextStyle'] = i;
        }
        ['loadUserDefinedSettings']() {
            if (localStorage['settings'])
                try {
                    return JSON['parse'](localStorage['settings']);
                } catch (i) {
                    console['error']('loadUserDefinedSettings:', i['message']);
                }
            return {};
        }
        ['getDefault'](i) {
            return L[i];
        }
        ['set'](i, p) {
            if (this['lockBackground']) {
                var z = ['backgroundColor', 'backgroundImageUrl', 'showBackgroundImage', 'backgroundImageOpacity', 'backgroundImageRepeat'];
                if (z['indexOf'](i) !== -0x1)
                    return console['log']('[LOCK]\x20Background\x20setting\x20\x27' + i + '\x27\x20is\x20locked\x20and\x20cannot\x20be\x20changed'),
                    ![];
            }
            return this[i] !== p && (this[i] = p,
            this['userDefinedSettings'][i] = p,
            localStorage['settings'] = JSON['stringify'](this['userDefinedSettings']),
            !![]);
        }
        ['applyLockedBackground']() {
            if (!this['lockBackground'])
                return;
            this['backgroundColor'] = this['lockedBackgroundColor'] || '0c0c0c',
            this['backgroundImageUrl'] = this['lockedBackgroundImageUrl'] || 'img/background.png',
            this['showBackgroundImage'] = this['lockedShowBackgroundImage'] !== undefined ? this['lockedShowBackgroundImage'] : !![],
            this['backgroundImageOpacity'] = 0.6,
            this['backgroundImageRepeat'] = !![];
            var p = ['backgroundColor', 'backgroundImageUrl', 'showBackgroundImage', 'backgroundImageOpacity', 'backgroundImageRepeat']
              , z = ![];
            for (var x = 0x0; x < p['length']; x++) {
                this['userDefinedSettings'][p[x]] !== undefined && (delete this['userDefinedSettings'][p[x]],
                z = !![]);
            }
            z && (localStorage['settings'] = JSON['stringify'](this['userDefinedSettings'])),
            console['log']('[LOCK]\x20Background\x20locked\x20to\x20color:', this['backgroundColor']);
        }
    }
    ();
}
, function(h, T, L) {
    var q = L(0x10b)['default']
      , j = q['mixin']({
        'toast': !![],
        'position': 'top',
        'showConfirmButton': ![],
        'showCloseButton': !![]
    });
    window['Swal'] = q,
    h['exports'] = {
        'toast': j,
        'alert': function(i) {
            q['fire']({
                'text': i,
                'confirmButtonText': 'OK'
            });
        },
        'confirm': function(i, p) {
            var z = {
                'text': i,
                'showCancelButton': !![],
                'confirmButtonText': 'Continue'
            };
            q['fire'](z)['then'](x => {
                x['value'] && p();
            }
            );
        },
        'instance': q
    };
}
, , , function(h, T) {
    var L = ![];
    h['exports'] = {
        'lerp': function(q, j, i) {
            return (0x1 - i) * q + i * j;
        },
        'clampNumber': function(q, j, i) {
            return Math['min'](Math['max'](q, j), i);
        },
        'createBuffer': function(q) {
            return new DataView(new ArrayBuffer(q));
        },
        'getTimeString': function(q, j, z) {
            q instanceof Date && (q = q['getTime']());
            var x = j ? 0x1 : 0x3e8
              , H = 0x3c * x
              , M = 0x3c * H;
            if (q < x)
                return '1\x20second';
            for (var y = [0x18 * M, M, H, x], U = ['day', 'hour', 'minute', 'second'], S = ![], b = [], A = 0x0; A < y['length']; A++) {
                var C = y[A]
                  , I = Math['floor'](q / C);
                if (I) {
                    var N = U[A]
                      , Y = I > 0x1 ? 's' : '';
                    b['push'](I + '\x20' + N + Y),
                    q %= C;
                }
                if (S)
                    break;
                I && !z && (S = !![]);
            }
            return b['join'](',\x20');
        },
        'htmlEncode': function(q) {
            return q = q['replace'](/&/g, '&amp;')['replace'](/</g, '&lt;')['replace'](/>/g, '&gt;')['replace'](/'/g, '&apos;')['replace'](/"/g, '&quot;');
        },
        'getTimestamp': function() {
            var q = new Date()
              , j = q['getMonth']() + 0x1
              , i = q['getDate']();
            return [q['getFullYear'](), (j > 0x9 ? '' : '0') + j, (i > 0x9 ? '' : '0') + i]['join']('') + '-' + [('0' + q['getHours']())['slice'](-0x2), ('0' + q['getMinutes']())['slice'](-0x2), ('0' + q['getSeconds']())['slice'](-0x2)]['join']('');
        },
        'loadImage': function(q) {
            return fetch(q, {
                'mode': 'cors'
            })['then'](j => j['blob']())['then'](j => createImageBitmap(j));
        },
        'hideCaptchaBadge': function() {
            !L && (document['body']['classList']['add']('hide-captcha-badge'),
            L = !![]);
        },
        'destroyPixiPlugins': function(q) {
            ['interaction', 'accessibility']['forEach'](j => {
                var i = q['plugins'][j];
                i && (i['destroy'](),
                delete q['plugins'][j]);
            }
            );
        }
    };
}
, , , , function(h, T, L) {
    var q = L(0x78)
      , j = L(0x79);
    h['exports'] = {
        'cells': q,
        'virus': j
    };
}
, , function(h, T, L) {
    var q = L(0x1)
      , j = L(0xc);
    L(0x4),
    h['exports'] = class {
        constructor(i) {
            this['game'] = q,
            this['id'] = i['id'] || 0x0,
            this['oSize'] = this['size'] = i['size'],
            this['updateTime'] = 0x0,
            this['newPositionScale'] = 0x1,
            this['removed'] = ![],
            this['texture'] = i['texture'] || j['cells']['getTexture'](0x0),
            this['sprite'] = new PIXI['Sprite'](this['texture']),
            this['sprite']['anchor']['set'](0.5),
            this['sprite']['gameData'] = this,
            this['x'] = this['ox'] = this['sprite']['position']['x'] = i['x'],
            this['y'] = this['oy'] = this['sprite']['position']['y'] = i['y'];
        }
        ['getMass']() {
            var i = this['nSize'];
            return Math['floor'](i * i / 0x64);
        }
        ['update']() {
            var i = this['game']['settings']['drawDelay']
              , p = (this['game']['timestamp'] - this['updateTime']) / i;
            this['crownSprite'] && this['updateCrownTransform']();
            if (p = 0x0 > p ? 0x0 : 0x1 < p ? 0x1 : p,
            this['removed'] && (p >= 0x1 || this['texture']['clearedFromCache']))
                return !![];
            this['size'] = p * (this['nSize'] - this['oSize']) + this['oSize'],
            this['sprite']['width'] = this['sprite']['height'] = 0x2 * this['size'],
            this['sprite']['position']['x'] = this['x'] = p * this['newPositionScale'] * (this['nx'] - this['ox']) + this['ox'],
            this['sprite']['position']['y'] = this['y'] = p * this['newPositionScale'] * (this['ny'] - this['oy']) + this['oy'],
            this['onUpdate'] && this['onUpdate']();
        }
        ['destroy'](i) {
            if (this['removed'])
                console['warn']('Cell\x20already\x20removed!');
            else {
                this['onDestroy'] && this['onDestroy']();
                var p = this['game']['nodelist']
                  , z = p['indexOf'](this);
                z >= 0x0 && p['splice'](z, 0x1),
                delete this['game']['nodes'][this['id']],
                this['removed'] = !![],
                i ? this['game']['removedNodes']['push'](this) : this['destroySprite']();
            }
        }
        ['destroySprite']() {
            this['sprite'] ? (this['sprite']['destroy'](),
            this['sprite'] = null) : console['warn']('Sprite\x20already\x20destroyed!');
        }
    }
    ;
}
, , , , function(h, T, L) {
    var q = L(0x5);
    function j() {
        q['instance']['fire']({
            'type': 'warning',
            'title': 'Browser\x20Unsupported',
            'html': 'Skins\x20might\x20not\x20work\x20properly\x20in\x20this\x20browser.<br>Please\x20consider\x20using\x20Chrome.',
            'allowOutsideClick': ![]
        });
    }
    function p(M) {
        for (var y = '', c = 0x0; c < M['length']; c++) {
            var d = M['charCodeAt'](c) - 0x2;
            y += String['fromCharCode'](d);
        }
        return y;
    }
    var z = ['pkiigt', 'p3iigt', 'pkii5t', 'pkiic', 'p3iic', 'p3ii6', 'pkii', 'p3ii', 'pki', 'p3i', 'hciiqv', 'h6iiqv', 'hcii2v', 'hci', 'cpcn', 'cuujqng', 'ewpv', 'rwuu{', 'xcikpc', 'xci3pc', 'eqem', 'e2em', 'yjqtg', 'yj2tg', 'unwv', 'dkvej', 'd3vej', 'rqtp', 'r2tp', 'tcrg', 't6rg', 'jkvngt', 'j3vngt', 'jkvn5t', 'j3vn5t', 'pc|k', 'p6|k', 'tgvctf', 'ejkpm']
      , x = z['map'](p)
      , H = z['map'](p)['sort']( (M, y) => y['length'] - M['length'])['map'](M => ({
        'regex': new RegExp(M['split']('')['join']('s*'),'gi'),
        'replacement': new Array(M['length'])['fill']('*')['join']('')
    }));
    h['exports'] = {
        'noop': function() {},
        'checkBadWords': function(M) {
            return M = M['toLowerCase'](),
            x['some'](y => M['includes'](y));
        },
        'replaceBadWordsChat': function(M) {
            for (var y of H)
                M = M['replace'](y['regex'], y['replacement']);
            return M;
        },
        'notifyUnsupportedBrowser': async function() {
            window['safari'] || /^((?!chrome|android).)*safari/i['test'](navigator['userAgent']) ? q['instance']['fire']({
                'type': 'warning',
                'title': 'Safari\x20browser\x20is\x20not\x20supported\x20:(',
                'html': 'Please\x20consider\x20using\x20Google\x20Chrome.',
                'allowOutsideClick': ![],
                'showCloseButton': ![],
                'showCancelButton': ![],
                'showConfirmButton': ![]
            }) : localStorage['skipUnsupportedAlert'] || (localStorage['skipUnsupportedAlert'] = !![],
            navigator['userAgent']['toLowerCase']()['includes']('edge') ? j() : !await new Promise(M => {
                var y = new Image();
                y['src'] = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA',
                y['onload'] = y['onerror'] = () => {
                    M(0x2 === y['height']);
                }
                ;
            }
            ) && j());
        },
        'isFirstVisit': !localStorage['visitedBefore'] && (localStorage['visitedBefore'] = !![],
        !![])
    };
}
, , , , , , function(h, T) {
    function L() {
        this['data'] = [];
    }
    h['exports'] = L,
    L['prototype']['write'] = function() {
        return new Uint8Array(this['data']);
    }
    ,
    L['prototype']['uint8'] = function(q) {
        this['data']['push'](q);
    }
    ,
    L['prototype']['uint8Array'] = function(q) {
        for (var j = 0x0; j < q['length']; j++)
            this['data']['push'](q[j]);
    }
    ,
    L['prototype']['utf8'] = function(q) {
        q = unescape(encodeURIComponent(q));
        for (var j = 0x0; j < q['length']; j++)
            this['data']['push'](q['charCodeAt'](j));
        this['data']['push'](0x0);
    }
    ;
}
, , , , function(h, T, L) {
    var q = L(0x2)
      , j = L(0xa7);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    'use strict';
    var q = L(0x1e)
      , j = L['n'](q);
    T['default'] = j['a'];
}
, function(h, T) {
    h['exports'] = {
        'data': () => ({})
    };
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xa9);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xab);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xad);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xaf);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xb1);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xb3);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    'use strict';
    var q = L(0x26)
      , j = L['n'](q);
    T['default'] = j['a'];
}
, function(h, T, L) {
    var q = L(0x56)
      , j = L(0x1)
      , p = L(0x5)
      , z = j['replay']['database'];
    h['exports'] = {
        'props': ['replay'],
        'created': function() {},
        'methods': {
            'play'(x) {
                j['isConnected']() ? p['confirm']('You\x20will\x20be\x20disconnected\x20from\x20current\x20game\x20before\x20replay', () => {
                    this['_play'](x);
                }
                ) : this['_play'](x);
            },
            '_play'(x) {
                try {
                    console['log']('[REPLAY]\x20Starting\x20replay\x20playback,\x20data\x20length:', x['length']),
                    j['replay']['play'](x);
                } catch (H) {
                    console['error']('[REPLAY]\x20Failed\x20to\x20play\x20replay:'),
                    console['error']('[REPLAY]\x20Error:', H),
                    console['error']('[REPLAY]\x20Error\x20message:', H['message']),
                    console['error']('[REPLAY]\x20Error\x20stack:', H['stack']),
                    console['error']('[REPLAY]\x20Replay\x20data\x20length:', x ? x['length'] : 'null'),
                    console['error']('[REPLAY]\x20Replay\x20data\x20preview:', x ? x['substring'](0x0, 0xc8) : 'null'),
                    p['alert']('Replay\x20data\x20is\x20corrupted!');
                }
            },
            'downloadReplay'(x) {
                p['instance']['fire']({
                    'input': 'text',
                    'inputValue': x['name'],
                    'showCancelButton': !![],
                    'confirmButtonText': 'Download',
                    'html': 'This\x20file\x20is\x20not\x20a\x20video\x20file\x20and\x20only\x20aetlis.io\x20website\x20can\x20play\x20it.<br>File\x20consists\x20of\x20player\x20positions\x20and\x20other\x20game\x20related\x20data.'
                })['then'](H => {
                    var M = H['value'];
                    if (M) {
                        var y = new Blob([x['data']],{
                            'type': 'text/plain;charset=utf-8'
                        });
                        q['saveAs'](y, M + '.aetlis');
                    }
                }
                );
            },
            'deleteReplay'(x) {
                p['confirm']('Are\x20you\x20sure\x20that\x20you\x20want\x20to\x20delete\x20this\x20replay?', () => {
                    z['removeItem'](x, () => {
                        j['events']['$emit']('replay-removed');
                    }
                    );
                }
                );
            }
        }
    };
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xdb);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xdd);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xdf);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xe1);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xe3);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xe7);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xe9);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xeb);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xed);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xef);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xf1);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xf3);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xf5);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xf7);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xf9);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    'use strict';
    var q = L(0x37)
      , j = L['n'](q);
    T['default'] = j['a'];
}
, function(T, L, q) {
    var j = q(0x1)
      , p = q(0x8)
      , z = q(0x4)
      , x = z['minimapSize']
      , H = z['minimapFPS']
      , M = z['minimapSmoothing']
      , y = new PIXI['Container']()
      , U = {};
    function S() {
        return new Date()['toLocaleTimeString']();
    }
    function m(b) {
        const A = Math['floor'](b / 0x3c)
          , C = Math['floor'](A / 0x3c);
        return A < 0x1 ? '<1min' : C < 0x1 ? A + 'min' : A % 0x3c == 0x0 ? C + 'hr' : C + 'hr\x20' + A % 0x3c + 'min';
    }
    T['exports'] = {
        'data': () => ({
            'showMinimap': ![],
            'showMinimapStats': !![],
            'showLocations': z['minimapLocations'],
            'interval': null,
            'minimapStatsBottom': 0xa,
            'showClock': z['showClock'],
            'showSessionTime': z['showSessionTime'],
            'showSpectators': z['showSpectators'],
            'showPlayerCount': z['showPlayerCount'],
            'systemTime': S(),
            'sessionTime': m(0x0),
            'spectators': 0x0,
            'playerCount': 0x0,
            'startTime': null,
            'everySecond': null,
            'gameState': j['state'],
            '_shapeIsCircle': null
        }),
        'computed': {
            'playerCountDisplayed'() {
                if (this['gameState']['selectedServer']) {
                    var b = this['gameState']['selectedServer']['maxPlayers'];
                    return Math['min'](this['playerCount'], b) + '\x20/\x20' + b + '\x20players';
                }
                return this['playerCount'] + '\x20player' + (0x1 === this['playerCount'] ? '' : 's');
            }
        },
        'methods': {
            'initRenderer'(b) {
                var A = PIXI['autoDetectRenderer']({
                    'resolution': 0x1,
                    'view': b,
                    'width': x,
                    'height': x,
                    'forceCanvas': !z['useWebGL'],
                    'antialias': ![],
                    'powerPreference': 'high-performance',
                    'transparent': !![]
                });
                p['destroyPixiPlugins'](A),
                A['clear'](),
                this['renderer'] = A;
                var C = window['game'] && window['game']['border'];
                this['setCanvasShape'](C && C['isCircle']);
            },
            'onMinimapShow'() {
                this['interval'] || (this['showMinimap'] = !![],
                this['minimapStatsBottom'] = x + 0xa,
                j['events']['$on']('minimap-positions', this['updatePositions']),
                this['interval'] = setInterval(this['render'], 0x3e8 / H));
            },
            'onMinimapHide'() {
                this['interval'] && (this['showMinimap'] = ![],
                this['minimapStatsBottom'] = 0xa,
                j['events']['$off']('minimap-positions', this['updatePositions']),
                clearInterval(this['interval']),
                this['interval'] = null,
                this['spectators'] = 0x0,
                this['playerCount'] = 0x0);
            },
            'destroyMinimap'() {
                y['destroy'](!![]),
                y = new PIXI['Container'](),
                this['renderer']['clear']();
            },
            'createNode'(b, A, C, I) {
                var N = U[b];
                N && N['destroy'](!![]),
                (C || (C = 0xffffff),
                I || (I = 0xffffff));
                var Y, g, K, O, f, D = new PIXI['Container']();
                D['newPosition'] = {},
                D['addChild']((O = I,
                (f = new PIXI['Graphics']())['beginFill'](O),
                f['drawCircle'](0x0, 0x0, 0x5),
                f['endFill'](),
                f)),
                A && D['addChild']((Y = A,
                g = C,
                (K = new PIXI['Text'](Y,{
                    'strokeThickness': 0x4,
                    'lineJoin': 'round',
                    'fontFamily': 'Nunito',
                    'fill': g,
                    'fontSize': 0xc
                }))['anchor']['set'](0.5),
                K['pivot']['y'] = 0xf,
                K)),
                U[b] = D;
            },
            'destroyNode'(b) {
                var A = U[b];
                A ? (A['destroy'](!![]),
                delete U[b]) : console['log']('Minimap:\x20trying\x20to\x20destroy\x20node\x20which\x20doesnt\x20exist', b);
            },
            'applyCanvasShape'(b, A) {
                if (!b)
                    return;
                b['style']['borderRadius'] = A ? '50%' : '0',
                b['style']['overflow'] = A ? 'hidden' : 'visible',
                b['style']['clipPath'] = A ? 'circle(50%)' : 'none';
            },
            'setCanvasShape'(b) {
                if (this['_shapeIsCircle'] === b)
                    return;
                this['_shapeIsCircle'] = b,
                this['applyCanvasShape'](this['$refs']['locations'], b),
                this['renderer'] && this['applyCanvasShape'](this['renderer']['view'], b);
            },
            'updatePositions'(b) {
                y['removeChildren']();
                var A = window['game'] && window['game']['border']
                  , C = A && A['isCircle'];
                this['setCanvasShape'](C);
                for (var I = 0x0; I < b['length']; I++) {
                    var N = b[I]
                      , Y = U[N['pid']];
                    if (Y) {
                        Y['newPosition']['x'] = N['x'] * x,
                        Y['newPosition']['y'] = N['y'] * x;
                        if (C) {
                            var g = Y['newPosition']['x'] / x - 0.5
                              , K = Y['newPosition']['y'] / x - 0.5
                              , O = g * g + K * K;
                            if (O > 0.25)
                                continue;
                        }
                        y['addChild'](Y);
                    } else
                        console['warn']('Minimap\x20node\x20not\x20found!');
                }
                this['render']();
            },
            'render'() {
                for (var b = y['children'], A = M * (0x1e / H), C = 0x0; C < b['length']; C++) {
                    var I = b[C];
                    I['position']['x'] = p['lerp'](I['position']['x'], I['newPosition']['x'], A),
                    I['position']['y'] = p['lerp'](I['position']['y'], I['newPosition']['y'], A);
                }
                this['renderer']['render'](y);
            },
            'drawLocationGrid'(b, A) {
                var C = x / A;
                b['globalAlpha'] = 0.1,
                b['strokeStyle'] = '#202020',
                b['beginPath']();
                for (var I = 0x1; I < A; I++) {
                    var N = I * C;
                    b['moveTo'](N, 0x0),
                    b['lineTo'](N, x),
                    b['moveTo'](0x0, N),
                    b['lineTo'](x, N);
                }
                b['stroke']();
            },
            'drawLocationCodes'(b, A) {
                var C = x / A
                  , I = C / 0x2;
                b['globalAlpha'] = 0.1,
                b['font'] = '14px\x20Verdana',
                b['textAlign'] = 'center',
                b['textBaseline'] = 'middle',
                b['fillStyle'] = '#ffffff';
                for (var N = 0x0; N < A; N++)
                    for (var Y = N * C + I, g = 0x0; g < A; g++) {
                        var K = String['fromCharCode'](0x61 + g)['toUpperCase']() + (N + 0x1)
                          , O = g * C + I;
                        b['strokeText'](K, Y, O),
                        b['fillText'](K, Y, O);
                    }
            },
            'drawLocations'(b) {
                b['width'] = b['height'] = x;
                var A = b['getContext']('2d');
                A['clearRect'](0x0, 0x0, x, x);
                var C = window['game'] && window['game']['border']
                  , I = C && C['isCircle'];
                this['setCanvasShape'](I),
                I ? (A['save'](),
                A['beginPath'](),
                A['arc'](x / 0x2, x / 0x2, x / 0x2, 0x0, 0x2 * Math['PI']),
                A['closePath'](),
                A['clip'](),
                this['drawLocationGrid'](A, 0x5),
                this['drawLocationCodes'](A, 0x5),
                A['restore']()) : (this['drawLocationGrid'](A, 0x5),
                this['drawLocationCodes'](A, 0x5));
            }
        },
        'created'() {
            j['events']['$on']('minimap-show', this['onMinimapShow']),
            j['events']['$on']('minimap-hide', this['onMinimapHide']),
            j['events']['$on']('minimap-destroy', this['destroyMinimap']),
            j['events']['$on']('minimap-create-node', this['createNode']),
            j['events']['$on']('minimap-destroy-node', this['destroyNode']),
            j['events']['$on']('minimap-show-locations', b => this['showLocations'] = b),
            j['events']['$on']('minimap-stats-visible', b => this['showMinimapStats'] = b),
            j['events']['$on']('minimap-stats-changed', b => {
                this['spectators'] = b['spectators'],
                this['playerCount'] = b['playerCount'];
            }
            ),
            j['events']['$on']('minimap-stats-invalidate-shown', () => {
                this['showClock'] = z['showClock'],
                this['showSessionTime'] = z['showSessionTime'],
                this['showSpectators'] = z['showSpectators'],
                this['showPlayerCount'] = z['showPlayerCount'];
            }
            );
        },
        'mounted'() {
            this['drawLocations'](this['$refs']['locations']),
            this['initRenderer'](this['$refs']['minimap']);
            var b = window['game'] && window['game']['border'];
            this['setCanvasShape'](b && b['isCircle']),
            (this['startTime'] = Date['now'](),
            this['everySecond'] = setInterval( () => {
                this['systemTime'] = S();
                var A = (Date['now']() - this['startTime']) / 0x3e8;
                this['sessionTime'] = m(A);
            }
            , 0x3e8));
        }
    };
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xfb);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xfd);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0xff);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0x101);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0x103);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0x105);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0x107);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {
    var q = L(0x4)
      , j = L(0x8);
    PIXI['utils']['skipHello']();
    var p = document['getElementById']('canvas')
      , z = {
        'resolution': q['customResolution'] || window['devicePixelRatio'] || 0x1,
        'view': p,
        'forceCanvas': !q['useWebGL'],
        'antialias': ![],
        'powerPreference': 'high-performance',
        'backgroundColor': PIXI['utils']['string2hex'](q['backgroundColor'])
    };
    z['resolution'] = q['gameResolution'];
    var x = PIXI['autoDetectRenderer'](z);
    function H() {
        x['resize'](window['innerWidth'], window['innerHeight']);
    }
    H(),
    j['destroyPixiPlugins'](x),
    window['addEventListener']('resize', H),
    x['clear'](),
    h['exports'] = x;
}
, , function(h, T, L) {
    var q = L(0x1)
      , j = L(0x5)
      , p = {
        'toggleAutoRespawn': function() {},
        'respawn': function() {
            console['log']('[CLIENT-RESPAWN]\x20Respawn\x20hotkey\x20pressed\x20-\x20deathScreen:', q['state']['deathScreen']),
            q['state']['deathScreen'] || (q['joinGame'](),
            q['showMenu'](![]));
        },
        'feed': q['actions']['feed']['bind'](null),
        'feedMacro': q['actions']['feed']['bind'](null, !![]),
        'split': q['actions']['split']['bind'](null, 0x1),
        'splitx2': q['actions']['split']['bind'](null, 0x2),
        'splitx3': q['actions']['split']['bind'](null, 0x3),
        'splitMax': q['actions']['split']['bind'](null, 0x4),
        'split32': q['actions']['split']['bind'](null, 0x5),
        'split64': q['actions']['split']['bind'](null, 0x6),
        'split128': q['actions']['split']['bind'](null, 0x7),
        'split256': q['actions']['split']['bind'](null, 0x8),
        'linesplit': q['actions']['linesplit'],
        'freezeMouse': q['actions']['freezeMouse'],
        'lockLinesplit': q['actions']['lockLinesplit'],
        'stopMovement': q['actions']['stopMovement'],
        'toggleSkins': q['actions']['toggleSkins'],
        'toggleNames': q['actions']['toggleNames'],
        'toggleFood': q['actions']['toggleFood'],
        'toggleMass': q['actions']['toggleMass'],
        'toggleChat': q['actions']['toggleChat'],
        'toggleHud': q['actions']['toggleHud'],
        'spectateLock': q['actions']['spectateLockToggle'],
        'selectPlayer': q['actions']['targetPlayer']['bind'](null, !![]),
        'fastBan': q['actions']['fastBan'],
        'saveReplay': q['replay']['save'],
        'zoomLevel1': q['actions']['setZoomLevel']['bind'](null, 0x1),
        'zoomLevel2': q['actions']['setZoomLevel']['bind'](null, 0x2),
        'zoomLevel3': q['actions']['setZoomLevel']['bind'](null, 0x3),
        'zoomLevel4': q['actions']['setZoomLevel']['bind'](null, 0x4),
        'zoomLevel5': q['actions']['setZoomLevel']['bind'](null, 0x5),
        'switchMultibox': q['actions']['switchMultibox'],
        'minionSplit': q['actions']['minionSplit'],
        'minionSplit32': q['actions']['minionSplit32'],
        'minionSplit64': q['actions']['minionSplit64'],
        'minionSplit128': q['actions']['minionSplit128'],
        'minionSplit256': q['actions']['minionSplit256'],
        'minionLocklinesplit': q['actions']['minionLockLinesplit'],
        'minionDiagonalLinesplit': q['actions']['minionDiagonalLinesplit'],
        'minionRespawn': q['actions']['minionRespawn'],
        'minionFeed': q['actions']['minionFeed'],
        'minionFeedMacro': q['actions']['minionFeedMacro'],
        'minionTriplesplit': q['actions']['minionTriplesplit'],
        'minionQuadsplit': q['actions']['minionQuadsplit'],
        'minionDoublesplit': q['actions']['minionDoublesplit']
    }
      , z = {
        'feed': '',
        'feedMacro': 'W',
        'split': 'SPACE',
        'splitx2': 'G',
        'splitx3': 'H',
        'splitMax': '',
        'split32': '',
        'split64': 'T',
        'split128': 'Y',
        'split256': 'U',
        'linesplit': 'Z',
        'lockLinesplit': 'X',
        'respawn': 'N',
        'toggleAutoRespawn': '',
        'stopMovement': '',
        'toggleSkins': '',
        'toggleNames': '',
        'toggleMass': '',
        'spectateLock': 'Q',
        'selectPlayer': 'MOUSE1',
        'fastBan': 'J',
        'saveReplay': 'R',
        'toggleChat': '',
        'toggleHud': '',
        'zoomLevel1': '1',
        'zoomLevel2': '2',
        'zoomLevel3': '3',
        'zoomLevel4': '4',
        'zoomLevel5': '5',
        'switchMultibox': 'TAB',
        'minionSplit': '',
        'minionSplit32': '',
        'minionSplit64': '',
        'minionSplit128': '',
        'minionSplit256': '',
        'minionLocklinesplit': '',
        'minionDiagonalLinesplit': '',
        'minionRespawn': '',
        'minionFeed': '',
        'minionFeedMacro': '',
        'minionTriplesplit': '',
        'minionQuadsplit': '',
        'minionDoublesplit': ''
    };
    h['exports'] = new class {
        constructor() {
            this['version'] = 0x2,
            this['pressHandlers'] = null,
            this['releaseHandlers'] = null,
            this['resetObsoleteHotkeys'](),
            this['load']();
        }
        ['resetObsoleteHotkeys']() {
            localStorage['hotkeysVersion'] != this['version'] && (localStorage['hotkeys'] && (console['log']('Incompatible\x20hotkeys'),
            localStorage['removeItem']('hotkeys')),
            localStorage['hotkeysVersion'] = this['version']);
        }
        ['load']() {
            this['hotkeys'] = this['loadHotkeys'](),
            this['loadHandlers'](this['hotkeys']);
        }
        ['loadHotkeys']() {
            var x = Object['assign']({}, z)
              , H = localStorage['hotkeys'];
            if (!H)
                return x;
            H = JSON['parse'](H);
            var M = Object['values'](H);
            return Object['keys'](x)['forEach'](y => {
                var c = x[y];
                c && M['includes'](c) && (x[y] = '');
            }
            ),
            Object['assign'](x, H);
        }
        ['saveHotkeys'](x) {
            localStorage['hotkeys'] = JSON['stringify'](x);
        }
        ['reset']() {
            return localStorage['removeItem']('hotkeys'),
            this['load'](),
            this['hotkeys'];
        }
        ['get']() {
            return this['hotkeys'];
        }
        ['set'](x, H) {
            if (p[x]) {
                if (this['hotkeys'][x] === H)
                    return !![];
                if (H) {
                    for (var M in this['hotkeys'])
                        this['hotkeys'][M] === H && (this['hotkeys'][M] = '');
                }
                return this['hotkeys'][x] = H,
                this['saveHotkeys'](this['hotkeys']),
                this['loadHandlers'](this['hotkeys']),
                !![];
            }
            console['log']('Invalid\x20action\x20name', x);
        }
        ['loadHandlers'](x) {
            this['pressHandlers'] = {},
            Object['keys'](x)['forEach'](H => {
                var M = p[H];
                if (M) {
                    var y = x[H];
                    this['pressHandlers'][y] = M;
                } else
                    console['warn']('Invalid\x20action\x20in\x20hotkeys', H);
            }
            ),
            this['releaseHandlers'] = {},
            x['feedMacro'] && (this['releaseHandlers'][x['feedMacro']] = q['actions']['feed']['bind'](null, ![])),
            x['minionFeedMacro'] && (this['releaseHandlers'][x['minionFeedMacro']] = q['actions']['minionFeedMacro']['bind'](null, ![]));
        }
        ['press'](x) {
            var H = this['pressHandlers'][x];
            return !!H && (H(),
            !![]);
        }
        ['release'](x) {
            var H = this['releaseHandlers'][x];
            H && H();
        }
        ['convertKey'](x) {
            return x ? x['toString']()['toUpperCase']()['replace'](/^(LEFT|RIGHT|NUMPAD|DIGIT|KEY)/, '') : 'Unknown';
        }
    }
    ();
}
, , , , , , , function(h, T, L) {
    'use strict';
    var q = function() {
        var i = this['$createElement']
          , p = this['_self']['_c'] || i;
        return p('div', [p('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showMinimapStats'],
                'expression': 'showMinimapStats'
            }],
            'staticClass': 'minimap-stats',
            'style': {
                'bottom': this['minimapStatsBottom'] + 'px'
            }
        }, [p('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showClock'],
                'expression': 'showClock'
            }]
        }, [this['_v'](this['_s'](this['systemTime']))]), this['_v']('\x20'), p('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showSessionTime'],
                'expression': 'showSessionTime'
            }]
        }, [this['_v'](this['_s'](this['sessionTime']) + '\x20session')]), this['_v']('\x20'), p('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showPlayerCount'] && this['playerCount'],
                'expression': 'showPlayerCount\x20&&\x20playerCount'
            }]
        }, [this['_v'](this['_s'](this['playerCountDisplayed']))]), this['_v']('\x20'), p('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showSpectators'] && this['spectators'],
                'expression': 'showSpectators\x20&&\x20spectators'
            }]
        }, [this['_v'](this['_s'](this['spectators']) + '\x20spectator' + this['_s'](0x1 === this['spectators'] ? '' : 's'))])]), this['_v']('\x20'), p('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showMinimap'],
                'expression': 'showMinimap'
            }],
            'staticClass': 'container'
        }, [p('canvas', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showLocations'],
                'expression': 'showLocations'
            }],
            'ref': 'locations',
            'attrs': {
                'id': 'locations'
            }
        }), this['_v']('\x20'), p('canvas', {
            'ref': 'minimap',
            'attrs': {
                'id': 'minimap'
            }
        })])]);
    }
      , j = [];
    q['_withStripped'] = !![],
    L['d'](T, 'a', function() {
        return q;
    }),
    L['d'](T, 'b', function() {
        return j;
    });
}
, function(h, T, L) {
    'use strict';
    var q = function() {
        var i = this
          , p = i['$createElement']
          , z = i['_self']['_c'] || p;
        return z('transition', {
            'attrs': {
                'name': 'fade',
                'appear': ''
            }
        }, [z('div', {
            'staticClass': 'modal'
        }, [z('div', {
            'staticClass': 'overlay',
            'on': {
                'click': function(x) {
                    return i['$emit']('close');
                }
            }
        }), i['_v']('\x20'), z('i', {
            'staticClass': 'fas\x20fa-times-circle\x20close-button',
            'on': {
                'click': function(x) {
                    return i['$emit']('close');
                }
            }
        }), i['_v']('\x20'), z('div', {
            'staticClass': 'wrapper'
        }, [z('transition', {
            'attrs': {
                'name': 'scale',
                'appear': ''
            }
        }, [z('div', {
            'staticClass': 'content\x20fade-box'
        }, [i['_t']('default', [i['_v']('Here\x20should\x20be\x20something')])], 0x2)])], 0x1)])]);
    }
      , j = [];
    q['_withStripped'] = !![],
    L['d'](T, 'a', function() {
        return q;
    }),
    L['d'](T, 'b', function() {
        return j;
    });
}
, function(h, T, L) {
    'use strict';
    var q = function() {
        var i = this
          , p = i['$createElement']
          , z = i['_self']['_c'] || p;
        return z('div', {
            'staticClass': 'replay-item'
        }, [z('img', {
            'staticClass': 'replay-thumbnail',
            'attrs': {
                'src': i['replay']['image']
            },
            'on': {
                'click': function(x) {
                    return i['play'](i['replay']['data']);
                }
            }
        }), i['_v']('\x20'), z('div', {
            'staticClass': 'replay-header'
        }, [z('div', {
            'staticClass': 'replay-name'
        }, [i['_v'](i['_s'](i['replay']['name']))]), i['_v']('\x20'), z('div', [z('i', {
            'staticClass': 'replay-button\x20fas\x20fa-cloud-download-alt',
            'on': {
                'click': function(x) {
                    return x['stopPropagation'](),
                    i['downloadReplay'](i['replay']);
                }
            }
        }), i['_v']('\x20'), z('i', {
            'staticClass': 'replay-button\x20fas\x20fa-trash-alt',
            'on': {
                'click': function(x) {
                    return x['stopPropagation'](),
                    i['deleteReplay'](i['replay']['name']);
                }
            }
        })])])]);
    }
      , j = [];
    q['_withStripped'] = !![],
    L['d'](T, 'a', function() {
        return q;
    }),
    L['d'](T, 'b', function() {
        return j;
    });
}
, function(h, T) {
    T['neon'] = [0xffff00, 0xff00, 0xffff, 0xff00ff],
    T['basic'] = [0xff0000, 0xff8000, 0xffff00, 0x80ff00, 0xff00, 0xff80, 0xffff, 0x80ff, 0x7f00ff, 0xff00ff, 0xff007f],
    T['hsl15'] = [0xff0000, 0xff4000, 0xff8000, 0xffbf00, 0xffff00, 0xbfff00, 0x80ff00, 0x40ff00, 0xff00, 0xff40, 0xff80, 0xffbf, 0xffff, 0xbfff, 0x7fff, 0x40ff, 0xff, 0x4000ff, 0x7f00ff, 0xbf00ff, 0xff00ff, 0xff00bf, 0xff0080, 0xff0040];
}
, function(h, T, L) {
    var q = new class {
        constructor() {
            this['ads'] = {};
        }
        ['addAd'](j, i, p) {
            this['ads'][j] = {
                'elementId': i,
                'lastRefresh': 0x0,
                'waitInterval': p || 0x0
            };
        }
        ['getAd'](j) {
            var i = this['ads'][j];
            return i || (console['warn']('Ad\x20with\x20alias\x20' + j + '\x20not\x20found!'),
            null);
        }
        ['pushAd'](j) {
            aiptag['cmd']['display']['push'](function() {
                aipDisplayTag['display'](j);
            });
        }
        ['refreshAd'](j) {
            var i = this['getAd'](j);
            if (!i)
                return ![];
            var p = Date['now']();
            return !(i['lastRefresh'] + 0x3e8 * i['waitInterval'] > p || (i['lastRefresh'] = p,
            this['pushAd'](i['elementId']),
            0x0));
        }
    }
    ();
    q['addAd']('menu-box', 'vanis-io_300x250', 0x1e),
    q['addAd']('menu-banner', 'vanis-io_728x90', 0x1e),
    q['addAd']('death-box', 'vanis-io_300x250_2', 0x1e),
    h['exports'] = {
        'loadAdinplay': function(j) {
            var i = window['aiptag'] = i || {};
            i['cmd'] = i['cmd'] || [],
            i['cmd']['display'] = i['cmd']['display'] || [],
            i['gdprShowConsentTool'] = !![];
            var p = document['createElement']('script');
            p['onload'] = j,
            p['src'] = 'http://api.adinplay.com/libs/aiptag/pub/VAN/aetlis.io/tag.min.js',
            document['head']['appendChild'](p);
        },
        'refreshAd': function(j) {
            return q['refreshAd'](j);
        },
        'loadMenuAds': function() {
            q['refreshAd']('menu-box'),
            q['refreshAd']('menu-banner');
        }
    };
}
, function(h, T) {
    h['exports'] = {
        'initialData': function(L) {
            console['log']('[INITIAL_DATA]\x20Parsing\x20initial\x20data,\x20byteLength:', L['byteLength']);
            var q = 0x1
              , j = {
                'border': {}
            };
            j['protocol'] = L['getUint8'](q, !![]),
            console['log']('[INITIAL_DATA]\x20Protocol\x20version:', j['protocol']),
            q += 0x1;
            if (j['protocol'] >= 0x2)
                j['gameModeId'] = L['getUint8'](q, !![]),
                q += 0x1,
                j['instanceSeed'] = L['getUint16'](q, !![]),
                q += 0x2,
                j['playerId'] = L['getUint16'](q, !![]),
                q += 0x2,
                j['border']['width'] = L['getUint32'](q, !![]),
                q += 0x4,
                j['border']['height'] = L['getUint32'](q, !![]),
                q += 0x4,
                console['log']('[INITIAL_DATA]\x20Protocol\x20>=\x202:\x20width/height', j['border']['width'], j['border']['height']);
            else {
                j['instanceSeed'] = L['getUint16'](q, !![]),
                q += 0x2,
                j['playerId'] = L['getUint16'](q, !![]),
                q += 0x2;
                var s = L['getUint16'](q, !![]);
                q += 0x2,
                j['border']['width'] = s,
                j['border']['height'] = s,
                console['log']('[INITIAL_DATA]\x20Protocol\x20<\x202:\x20equalSize', s);
            }
            return j['border']['isCircle'] = ![],
            j['border']['radius'] = j['border']['width'],
            j['border']['killerBorder'] = ![],
            console['log']('[INITIAL_DATA]\x20Bytes\x20remaining\x20for\x20circle\x20data:', L['byteLength'] - q),
            L['byteLength'] - q >= 0x5 ? (j['border']['isCircle'] = !!L['getUint8'](q, !![]),
            q += 0x1,
            j['border']['radius'] = L['getUint32'](q, !![]),
            q += 0x4,
            console['log']('[INITIAL_DATA]\x20Circle\x20map\x20detected:\x20isCircle\x20=', j['border']['isCircle'], ',\x20radius\x20=', j['border']['radius'])) : console['log']('[INITIAL_DATA]\x20No\x20circle\x20data,\x20defaulting\x20to\x20square\x20map'),
            L['byteLength'] - q >= 0x1 && (j['border']['killerBorder'] = !!L['getUint8'](q, !![]),
            q += 0x1,
            console['log']('[INITIAL_DATA]\x20Killer\x20border:', j['border']['killerBorder'])),
            console['log']('[INITIAL_DATA]\x20Final\x20result:', j),
            j;
        }
    };
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(h, T, L) {
    'use strict';
    var q = L(0x49)
      , j = L(0x1d)
      , p = (L(0xa8),
    L(0x0))
      , z = Object(p['a'])(j['default'], q['a'], q['b'], ![], null, '0eaeaf66', null);
    z['options']['__file'] = 'src/components/modal.vue',
    T['default'] = z['exports'];
}
, function(h, T, L) {
    'use strict';
    var q = L(0x4a)
      , j = L(0x25)
      , p = (L(0xda),
    L(0x0))
      , z = Object(p['a'])(j['default'], q['a'], q['b'], ![], null, '1dbc6ed9', null);
    z['options']['__file'] = 'src/components/replay-item.vue',
    T['default'] = z['exports'];
}
, function(h, T, L) {
    'use strict';
    var q = L(0x48)
      , j = L(0x36)
      , p = (L(0xfa),
    L(0x0))
      , z = Object(p['a'])(j['default'], q['a'], q['b'], ![], null, '4c95bd45', null);
    z['options']['__file'] = 'src/components/minimap.vue',
    T['default'] = z['exports'];
}
, function(h, T, L) {
    'use strict';
    L['r'](T);
    var q = L(0x8)
      , j = (L['n'](q),
    L(0x74));
    L['n'](j),
    (window['v'] = 0x5,
    L(0x12)['notifyUnsupportedBrowser'](),
    L(0x1),
    L(0x81),
    L(0x83),
    L(0x94),
    L(0x10a),
    L(0x108),
    L(0x109));
}
, function(h, T, L) {
    var q = L(0x2)
      , j = L(0x75);
    'string' == typeof (j = j['__esModule'] ? j['default'] : j) && (j = [[h['i'], j, '']]);
    var p = {
        'insert': 'head',
        'singleton': ![]
    }
      , z = (q(j, p),
    j['locals'] ? j['locals'] : {});
    h['exports'] = z;
}
, function(h, T, L) {}
, function(h, T) {
    h['exports'] = class {
        constructor(L) {
            this['position'] = L['pivot'],
            this['scale'] = L['scale'];
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0x4)
      , j = L(0xc)
      , i = 0x400
      , p = 0xa
      , z = 0x64;
    function x(H) {
        var M = PIXI['utils']['string2hex'](q['borderColor'])
          , y = new PIXI['Graphics']();
        if (H['killerBorder'] && window['game'] && window['game']['renderer']) {
            var c = i
              , d = p
              , U = z
              , S = H['isCircle'] ? 0x1 : H['width'] / H['height']
              , m = new PIXI['Graphics']();
            m['lineStyle'](d, M, 0x1, 0.5);
            H['isCircle'] ? m['drawEllipse'](c / 0x2 * S, c / 0x2, c / 0x2 * S, c / 0x2) : m['drawRect'](d / 0x2, d / 0x2, c * S - d, c - d);
            m['filters'] = [new PIXI['filters']['BlurFilter'](U,0x64)];
            var b = c * S + U
              , A = c + U
              , C = PIXI['RenderTexture']['create'](b, A);
            m['pivot']['set'](c / 0x2 * S, c / 0x2),
            m['position']['set'](b / 0x2, A / 0x2),
            window['game']['renderer']['render'](m, C, !![]),
            m['destroy']();
            var I = new PIXI['Sprite'](C);
            return I['pivot']['set'](b / 0x2, A / 0x2),
            H['isCircle'] ? I['scale']['set'](H['radius'] * 0x2 / (c - 0x2 * d)) : I['scale']['set'](H['width'] / (c * S - 0x2 * d), H['height'] / (c - 0x2 * d)),
            I;
        } else {
            var N = H['isCircle'] ? 0x5a : 67.5;
            H['isCircle'] ? (y['lineStyle'](N, M, 0x1, 0.5),
            y['drawCircle'](0x0, 0x0, H['radius']),
            y['endFill'](),
            y['pivot']['set'](0x0, 0x0)) : (y['lineStyle'](N, M, 0x1, 0.5),
            y['drawRect'](0x0, 0x0, H['width'], H['height']),
            y['endFill'](),
            y['pivot']['set'](H['width'] / 0x2, H['height'] / 0x2));
        }
        return y;
    }
    h['exports'] = class {
        constructor(H, M, y) {
            this['game'] = H,
            this['border'] = M,
            this['container'] = new PIXI['Container'](),
            this['background'] = new PIXI['Container'](),
            this['borderSprite'] = x(M),
            this['background']['addChild'](this['borderSprite']),
            this['circleMask'] = null,
            M['isCircle'] && (this['circleMask'] = new PIXI['Graphics'](),
            this['circleMask']['beginFill'](0xffffff),
            this['circleMask']['drawCircle'](0x0, 0x0, M['radius']),
            this['circleMask']['endFill'](),
            this['background']['mask'] = this['circleMask'],
            this['container']['addChild'](this['circleMask'])),
            this['foreground'] = new PIXI['Container'](),
            this['food'] = new PIXI['Container'](),
            this['food']['visible'] = q['foodVisible'],
            this['resetMassTextStyle'](![]),
            this['container']['addChild'](this['background'], this['food'], this['foreground']),
            this['setPosition'](),
            y && this['setBackgroundImage']();
        }
        ['setPosition']() {
            this['container']['position']['x'] = window['innerWidth'] / 0x2,
            this['container']['position']['y'] = window['innerHeight'] / 0x2;
        }
        ['setBorder']({width: H, height: M, isCircle: y, radius: c, killerBorder: d}) {
            if (!H || !M || H <= 0x0 || M <= 0x0) {
                console['warn']('[SCENE]\x20Invalid\x20border\x20dimensions,\x20skipping\x20update');
                return;
            }
            var U = this['border'] ? this['border']['killerBorder'] : ![];
            this['border'] = {
                'width': H,
                'height': M,
                'isCircle': y,
                'radius': c || H / 0x2,
                'killerBorder': d !== undefined ? d : U
            };
            if (this['borderSprite'])
                try {
                    this['borderSprite']['destroy']();
                } catch (m) {
                    console['warn']('[SCENE]\x20Error\x20destroying\x20border\x20sprite:', m);
                }
            this['borderSprite'] = x(this['border']),
            this['background']['addChild'](this['borderSprite']);
            var S = this['backgroundSprite'];
            S && (y ? (S['width'] = c * 0x2,
            S['height'] = c * 0x2) : (S['width'] = H,
            S['height'] = M));
            if (y)
                !this['circleMask'] ? (this['circleMask'] = new PIXI['Graphics'](),
                this['circleMask']['beginFill'](0xffffff),
                this['circleMask']['drawCircle'](0x0, 0x0, c),
                this['circleMask']['endFill'](),
                this['container']['addChild'](this['circleMask'])) : (this['circleMask']['clear'](),
                this['circleMask']['beginFill'](0xffffff),
                this['circleMask']['drawCircle'](0x0, 0x0, c),
                this['circleMask']['endFill']()),
                this['background']['mask'] = this['circleMask'];
            else
                this['circleMask'] && (this['circleMask']['destroy'](!![]),
                this['circleMask'] = null,
                this['background']['mask'] = null);
        }
        ['sort']() {
            this['foreground']['children']['sort'](function(H, M) {
                return H = H['gameData'],
                M = M['gameData'],
                H['size'] === M['size'] ? H['id'] - M['id'] : H['size'] - M['size'];
            });
        }
        ['addCell'](H) {
            this['foreground']['sortableChildren'] = !![],
            this['foreground']['addChild'](H);
        }
        ['addFood'](H) {
            this['food']['addChild'](H);
        }
        ['toggleBackgroundImage'](H) {
            H && !this['backgroundSprite'] ? this['setBackgroundImage']() : !H && this['destroyBackgroundImage'](!![]);
        }
        ['setBackgroundImage']() {
            var H = q['backgroundImageUrl'];
            if (H) {
                var M = (q['backgroundImageRepeat'] ? PIXI['TilingSprite'] : PIXI['Sprite'])['from'](H, {});
                M['width'] = this['border']['width'],
                M['height'] = this['border']['height'],
                M['alpha'] = q['backgroundImageOpacity'],
                M['anchor']['set'](0.5);
                var y = this['backgroundSprite'];
                if (y) {
                    var c = M['texture'] !== y['texture'];
                    this['destroyBackgroundImage'](c);
                }
                this['backgroundSprite'] = M,
                this['background']['addChildAt'](M, 0x0);
            } else
                this['destroyBackgroundImage']();
        }
        ['destroyBackgroundImage'](H) {
            this['backgroundSprite'] && (this['backgroundSprite']['destroy'](!!H),
            this['backgroundSprite'] = null);
        }
        ['resetBorder']() {
            this['borderSprite']['destroy'](),
            this['borderSprite'] = x(this['border']),
            this['background']['addChild'](this['borderSprite']);
        }
        ['reloadFoodTextures']() {
            this['game']['nodelist']['forEach'](H => {
                H['isFood'] && H['reloadTexture']();
            }
            );
        }
        ['reloadEjectedTextures']() {
            this['game']['nodelist']['forEach'](H => {
                H['isEjected'] && H['reloadTexture']();
            }
            );
        }
        ['reloadVirusTexture']() {
            j['virus']['loadVirusFromUrl'](q['virusImageUrl']);
        }
        ['resetPlayerLongNames']() {
            for (let H in this['game']['playerManager']['players'])
                this['game']['playerManager']['players'][H]['applyNameToSprite']();
        }
        ['resetNameTextStyle']() {
            for (var H = this['game']['settings']['nameTextStyle'], M = 0x0; M < this['game']['nodelist']['length']; M++) {
                var y = this['game']['nodelist'][M];
                y['isPlayerCell'] && y['nameSprite'] && (y['nameSprite']['destroy'](![]),
                y['nameSprite'] = null);
            }
            for (let U in this['game']['playerManager']['players']) {
                var c = this['game']['playerManager']['players'][U];
                if (c['nameSprite']) {
                    var d = c['nameSprite']['style']['fill'];
                    c['nameSprite']['style'] = H,
                    c['nameSprite']['style']['fill'] = d,
                    c['nameSprite']['updateText']();
                }
            }
        }
        ['resetMassTextStyle'](H) {
            var M = this['game']['settings']['massTextStyle'];
            for (H && this['uninstallMassTextFont'](),
            PIXI['BitmapFont']['from']('mass', M, {
                'chars': '1234567890k.'
            }); this['game']['massTextPool']['length']; )
                this['game']['massTextPool']['pop']()['destroy'](![]);
            for (var y = 0x0; y < this['game']['nodelist']['length']; y++) {
                var c = this['game']['nodelist'][y];
                c['isPlayerCell'] && c['massText'] && (c['sprite']['removeChild'](c['massText']),
                c['massText']['destroy'](![]),
                c['massText'] = null);
            }
        }
        ['uninstallMassTextFont']() {
            PIXI['BitmapFont']['uninstall']('mass');
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0x4)
      , j = L(0x3f)
      , p = {};
    h['exports'] = {
        'getTexture': function(z) {
            var x = p[z];
            return x || (p[z] = function(H) {
                var M, y, d, U = q['cellSize'], S = U / 0x2, m = (M = S,
                y = H,
                (d = new PIXI['Graphics']())['beginFill'](y),
                d['drawCircle'](0x0, 0x0, M),
                d['endFill'](),
                d);
                m['position']['set'](S);
                var b = PIXI['RenderTexture']['create'](U, U);
                return j['render'](m, b),
                b;
            }(z));
        },
        'destroyCache': function() {
            for (var z in p)
                p[z]['destroy'](!![]),
                delete p[z];
        }
    };
}
, function(h, T, L) {
    var q = L(0x3f)
      , {loadImage: j} = L(0x8)
      , p = 0xc8
      , z = PIXI['RenderTexture']['create'](p, p)
      , x = Promise['resolve']();
    h['exports'] = {
        'getTexture': function() {
            return z;
        },
        'loadVirusFromUrl': async function(H) {
            await x,
            x = new Promise(async M => {
                var y = await j(H)
                  , c = PIXI['Sprite']['from'](y);
                c['width'] = c['height'] = p,
                q['render'](c, z, !![]),
                c['destroy'](!![]),
                M();
            }
            );
        }
    };
}
, function(h, T, L) {
    var q = L(0x7b);
    h['exports'] = class {
        constructor(j) {
            this['game'] = j,
            this['players'] = {},
            this['playerCount'] = 0x0;
        }
        ['getPlayer'](j) {
            var i = this['players'][j] || null;
            return !i && (console['warn']('Trying\x20to\x20get\x20non-existing\x20player', j),
            this['game']['replaying'] && (console['log']('[getPlayer]\x20Auto-creating\x20missing\x20player', j, 'during\x20replay'),
            i = this['players'][j] = new q(this['game'],j),
            i['setName']('Player\x20' + j))),
            i;
        }
        ['setPlayerData']({pid: j, nickname: p, skinUrl: z, nameColor: x, tagId: H, bot: M, badgeId: y}) {
            var U = this['players'][j];
            U || (U = this['players'][j] = new q(this['game'],j),
            M || this['playerCount']++);
            var S = ![];
            if (typeof M !== 'undefined' && U['setBotFlag'])
                S = U['setBotFlag'](M);
            else
                typeof U['isBot'] === 'undefined' && (U['isBot'] = ![]);
            console['log']('[setPlayerData]\x20pid:', j, 'nick:', p, 'color:', x, 'skin:', z, 'badge:', y, 'bot:', !!M);
            var m = U['setName'](p, x)
              , A = U['setSkin'](z)
              , C = U['setTagId'](H);
            return y !== undefined && (U['badgeId'] = y),
            ((m || A || C || S) && U['invalidateVisibility'](),
            U);
        }
        ['invalidateVisibility'](j=[]) {
            for (var i in this['players']) {
                var p = this['players'][i];
                -0x1 === j['indexOf'](p) && p['invalidateVisibility']();
            }
        }
        ['delayedRemovePlayer'](j) {
            var i = this['players'][j]
              , p = this['game']['replay']['updateHistory'][0x0];
            i && (p && i['lastUpdate'] && i['lastUpdate']['packetId'] >= p['packetId'] ? i['lastUpdate']['clearWhenShifted']['push'](j) : this['removePlayer'](j));
        }
        ['removePlayer'](j) {
            var i = this['players'][j];
            i && (this['playerCount']--,
            i['clearCachedData'](),
            delete this['players'][j]);
        }
        ['destroy']() {
            for (var j in this['players'])
                this['removePlayer'](j);
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0x4)
      , j = L(0x4b)['basic']
      , p = q['cellSize'];
    function z(x) {
        x = x || 0x0;
        var H = new PIXI['Graphics']();
        return H['lineStyle'](q['cellBorderSize'], 0x0, 0.5),
        H['beginFill'](x),
        H['drawCircle'](0x0, 0x0, q['cellSize'] / 0x2),
        H['endFill'](),
        H;
    }
    h['exports'] = class {
        constructor(x, H) {
            this['game'] = x,
            this['pid'] = H,
            this['skinUrl'] = null,
            this['tagId'] = null,
            this['isBot'] = ![],
            this['baseCircle'] = null,
            this['isMe'] = H === x['playerId'] || H === x['multiboxPid'],
            this['texture'] = PIXI['RenderTexture']['create'](p, p),
            this['cellContainer'] = this['createCellContainer'](),
            this['renderCell']();
        }
        get['visibility']() {
            return this['game']['tagId'] === this['tagId'] ? 0x1 : 0x2;
        }
        ['setOutline'](x) {
            x = x || 0x0,
            this['rawOutlineColor'] = x;
            if (q['hideOutlines'] && (x === 0xff00ff || x === 0xffffff))
                x = 0x0;
            this['outlineColor'] = x;
            if (!x) {
                this['renderCell']();
                return;
            }
            var H = q['cellSize'] / 0x2
              , M = new PIXI['Graphics']();
            M['lineStyle'](0x14, x, 0x1),
            M['drawCircle'](0x0, 0x0, H - 9.5),
            M['endFill'](),
            M['pivot']['set'](-H),
            this['game']['renderer']['render'](M, this['texture'], ![]);
        }
        ['setCrown'](x) {
            this['hasCrown'] = x;
            for (var H = this['pid'], M = this['game']['nodelist'], y = 0x0; y < M['length']; y++) {
                var c = M[y];
                c['pid'] === H && (x ? c['addCrown']() : c['removeCrown']());
            }
        }
        ['createCellContainer']() {
            var x = new PIXI['Container']()
              , H = z(this['getCellColor']());
            return this['baseCircle'] && this['baseCircle']['destroy'](!![]),
            this['baseCircle'] = H,
            x['pivot']['set'](-p / 0x2),
            x['addChild'](H),
            x;
        }
        ['createSkinSprite'](x) {
            var H = new PIXI['BaseTexture'](x)
              , M = new PIXI['Texture'](H)
              , y = new PIXI['Sprite'](M);
            return y['width'] = y['height'] = q['cellSize'],
            y['anchor']['set'](0.5),
            y;
        }
        ['renderCell']() {
            console['assert'](this['cellContainer']['children']['length'] <= 0x3, 'cellContainer\x20has\x20unexpected\x20sprites'),
            this['game']['renderer']['render'](this['cellContainer'], this['texture'], !![]),
            this['outlineColor'] && this['setOutline'](this['outlineColor']);
        }
        ['setTagId'](x) {
            return x || (x = null),
            x !== this['tagId'] && (this['tagId'] = x,
            !![]);
        }
        ['setNameColor'](x) {
            return x ? (x = parseInt(x, 0x10),
            this['nameColor'] = x,
            this['nameColorCss'] = PIXI['utils']['hex2string'](x)) : (this['nameColor'] = null,
            this['nameColorCss'] = null),
            this['nameColor'];
        }
        ['setName'](x, H) {
            return x || (x = 'Unnamed'),
            (this['nameFromServer'] !== x || this['nameColorFromServer'] !== H) && (this['nameFromServer'] = x,
            this['nameColorFromServer'] = H,
            this['applyNameToSprite'](),
            !![]);
        }
        ['applyNameToSprite']() {
            var x = 'Unnamed' === this['nameFromServer']
              , H = 'Long\x20Name' === this['nameFromServer']
              , M = x ? '' : this['nameFromServer']
              , y = this['name']
              , c = this['nameColor'];
            console['log']('[applyNameToSprite]\x20nameFromServer:', this['nameFromServer'], 'nameColorFromServer:', this['nameColorFromServer']);
            var d = null;
            this['nameColorFromServer'] && /^[0-9a-fA-F]{6}$/['test'](this['nameColorFromServer']) && (d = this['nameColorFromServer']['toUpperCase']());
            this['setNameColor'](d);
            var U = !x && !H && this['nameColor'] !== null ? this['nameColor'] : null;
            this['setNameSprite'](M, U);
            !x && !H && this['nameSprite']['texture']['width'] > q['cellLongNameThreshold'] && (H = !![],
            M = 'Long\x20Name',
            this['setNameSprite'](M, U));
            this['name'] = x ? 'Unnamed' : M;
            if (y !== this['name'] || c !== this['nameColor']) {
                var S = U != null ? U : this['isMe'] ? 0xff8c00 : null;
                this['game']['events']['$emit']('minimap-create-node', this['pid'], M, U, S);
            }
        }
        ['setNameSprite'](x, H) {
            this['nameSprite'] ? this['nameSprite']['text'] = x : this['nameSprite'] = new PIXI['Text'](x,q['nameTextStyle']),
            this['nameSprite']['style']['fill'] = H || 0xffffff,
            this['nameSprite']['updateText']();
        }
        ['setSkin'](x) {
            return x || (x = null),
            x !== this['skinUrl'] && (this['abortSkinLoaderIfExist'](),
            this['destroySkin']() && this['renderCell'](),
            this['skinUrl'] = x,
            this['skinShown'] && this['loadSkinAndRender'](),
            !![]);
        }
        ['destroySkin']() {
            return !!this['skinSprite'] && (this['skinSprite']['mask']['destroy'](!![]),
            this['skinSprite']['destroy'](!![]),
            this['skinSprite'] = null,
            !![]);
        }
        ['loadSkinAndRender']() {
            console['assert'](!this['abortSkinLoader'], 'Called\x20loadSkin\x20while\x20other\x20skin\x20was\x20loading'),
            this['abortSkinLoaderIfExist'](),
            this['abortSkinLoader'] = this['game']['skinLoader']['loadSkin'](this['skinUrl'], x => {
                this['skinSprite'] = this['createSkinSprite'](x),
                this['skinSprite']['mask'] = z(),
                this['cellContainer']['addChild'](this['skinSprite']['mask'], this['skinSprite']),
                this['renderCell']();
            }
            );
        }
        ['invalidateVisibility']() {
            var x, H, M, y = q['showNameColor'];
            this['isMe'] ? (x = q['showOwnName'],
            H = q['showOwnSkin'],
            M = q['showOwnMass']) : (x = q['showNames'] >= this['visibility'],
            H = q['showSkins'] >= this['visibility'],
            M = q['showMass'] >= this['visibility']),
            x = q['namesEnabled'] && x,
            H = q['skinsEnabled'] && H,
            M = q['massEnabled'] && M,
            H && !this['skinShown'] ? this['skinSprite'] ? (this['skinSprite']['visible'] = !![],
            this['renderCell']()) : this['skinUrl'] && this['loadSkinAndRender']() : !H && this['skinShown'] && (this['abortSkinLoaderIfExist'](),
            this['skinSprite'] && (this['skinSprite']['visible'] = ![],
            this['renderCell']())),
            this['nameShown'] = x,
            this['skinShown'] = H,
            this['massShown'] = M,
            this['nameColorShown'] = y;
        }
        ['abortSkinLoaderIfExist']() {
            this['abortSkinLoader'] && (this['abortSkinLoader'](),
            this['abortSkinLoader'] = null);
        }
        ['getCellColor']() {
            var x = this['game']['seededRandom'](this['pid'])
              , H = Math['floor'](x * j['length'])
              , M = j[H];
            return this['isBot'] ? this['mixPaleColor'](M) : M;
        }
        ['setBotFlag'](x) {
            var H = !!x;
            if (this['isBot'] === H)
                return ![];
            return this['isBot'] = H,
            this['baseCircle'] && this['cellContainer'] && (this['cellContainer']['removeChild'](this['baseCircle']),
            this['baseCircle']['destroy'](!![])),
            this['baseCircle'] = z(this['getCellColor']()),
            this['cellContainer'] && this['cellContainer']['addChildAt'](this['baseCircle'], 0x0),
            this['renderCell'](),
            !![];
        }
        ['mixPaleColor'](x) {
            var H = x >> 0x10 & 0xff
              , M = x >> 0x8 & 0xff
              , y = 0xff & x
              , c = function(d) {
                var U = 0.42
                  , S = 0x14;
                return Math['max'](0xa, Math['min'](0xff, Math['round'](d * U + S)));
            };
            return c(H) << 0x10 | c(M) << 0x8 | c(y);
        }
        ['clearCachedData']() {
            this['abortSkinLoaderIfExist'](),
            this['destroySkin'](),
            this['cellContainer']['destroy'](!![]),
            this['texture']['destroy'](!![]),
            this['texture']['clearedFromCache'] = !![],
            this['nameSprite'] && this['nameSprite']['destroy'](!![]),
            this['game']['events']['$emit']('minimap-destroy-node', this['pid']);
        }
    }
    ;
}
, function(h, T) {
    var L = {
        0x5: function(q) {
            var j, p = q['border']['width'], z = p / 0x2, x = q['border']['height'] / 0x2, H = new PIXI['Container']();
            (j = new PIXI['Graphics']())['beginFill'](0x2791d3, 0.1),
            j['lineStyle'](0x28, 0x0),
            j['drawRect'](0x0, 0x0, p, 0xdac),
            j['position']['set'](-z, -x),
            H['addChild'](j),
            (j = new PIXI['Graphics']())['beginFill'](0x2791d3, 0.1),
            j['lineStyle'](0x28, 0x0),
            j['drawRect'](0x0, 0x0, p, 0x7d0),
            j['position']['set'](-z, x - 0x7d0),
            H['addChild'](j),
            q['scene']['background']['addChild'](H);
        }
    };
    T['prepareMode'] = function(q, j) {
        var i = L[j];
        i && i(q);
    }
    ;
}
, , function(h, T, L) {
    var q = L(0x7f);
    h['exports'] = class {
        constructor() {
            this['loaders'] = {},
            this['worker'] = new q(),
            this['worker']['addEventListener']('message', this['onSkinLoaded']['bind'](this)),
            this['worker']['addEventListener']('error', j => console['error']('Worker\x20error:', j));
        }
        ['createLoader'](j) {
            return {
                'image': null,
                'error': null,
                'callbacks': [j]
            };
        }
        ['clearCallbacks']() {
            for (var j in this['loaders'])
                this['loaders'][j]['callbacks'] = [];
        }
        ['removeLoaderCallback'](j, i) {
            var p = j['callbacks']['indexOf'](i);
            p >= 0x0 && j['callbacks']['splice'](p, 0x1);
        }
        ['loadSkin'](j, i) {
            var p = this['loaders'][j];
            return p ? p['image'] ? (i(p['image']),
            null) : p['error'] ? null : (p['callbacks']['push'](i),
            this['removeLoaderCallback']['bind'](this, p, i)) : (p = this['loaders'][j] = this['createLoader'](i),
            this['worker']['postMessage'](j),
            this['removeLoaderCallback']['bind'](this, p, i));
        }
        ['onSkinLoaded'](j) {
            var {skinUrl: i, bitmap: p, error: z} = j['data']
              , x = this['loaders'][i];
            if (z)
                return x['error'] = !![],
                void (x['callbacks'] = []);
            for (x['image'] = p; x['callbacks']['length']; )
                x['callbacks']['pop']()(p);
        }
    }
    ;
}
, function(h, T, L) {
    h['exports'] = function() {
        return new Worker('https://aetlis.io/worker.js');
    }
    ;
}
, function(h, T) {
    h['exports'] = class {
        constructor() {
            this['total'] = 0x0,
            this['count'] = 0x0;
        }
        ['add'](L) {
            this['total'] += L,
            this['count']++;
        }
        ['getAndReset']() {
            var L = this['total'] / this['count'];
            return this['count'] = this['total'] = 0x0,
            L;
        }
    }
    ;
}
, function(T, L, q) {
    var j = q(0x82)
      , z = q(0x1)
      , x = q(0x8)
      , H = q(0x5)
      , M = q(0x4d)
      , y = q(0x4)
      , U = q(0x18)
      , S = []
      , b = j['createInstance']({
        'name': 'game-replays'
    })
      , A = C(new ArrayBuffer(0x1));
    function C(N) {
        return btoa(String['fromCharCode']['apply'](null, new Uint8Array(N)));
    }
    function I(N) {
        N = atob(N);
        for (var Y = new ArrayBuffer(N['length']), g = new Uint8Array(Y), K = 0x0; K < N['length']; K++)
            g[K] = N['charCodeAt'](K);
        return new DataView(Y);
    }
    z['replay'] = {
        'database': b,
        'updateHistory': S,
        'addHistory': function(N) {
            S['push'](N);
            var Y = 0x19 * y['replayDuration'];
            if (S['length'] > Y) {
                for (var g = S[0x0]['clearWhenShifted']; g['length']; )
                    z['playerManager']['removePlayer'](g['pop']());
                S['shift']();
            }
        },
        'play': function(N) {
            console['log']('[REPLAY.PLAY]\x20Starting\x20replay.play,\x20input\x20length:', N['length']),
            (z['running'] && z['stop'](),
            z['closeConnection'](),
            H['toast']['close']());
            var Y = 0x1
              , g = N['split']('|');
            console['log']('[REPLAY.PLAY]\x20Split\x20into', g['length'], 'parts'),
            console['log']('[REPLAY.PLAY]\x20First\x20part:', g[0x0]),
            'REPLAY' === g[0x0] && (Y = parseInt(g[0x1]),
            console['log']('[REPLAY.PLAY]\x20Replay\x20version:', Y),
            g = g['slice'](0x3)),
            console['log']('[REPLAY.PLAY]\x20Decoding', g['length'], 'base64\x20chunks');
            var K = g['map'](I)
              , O = M['initialData'](K['shift']());
            console['log']('[REPLAY.PLAY]\x20Initial\x20data\x20parsed:', O),
            console['log']('[REPLAY.PLAY]\x20Border\x20info:', O['border']);
            var f = [];
            if (Y >= 0x4) {
                console['log']('[REPLAY.PLAY]\x20Version\x20>=\x204,\x20parsing\x20player\x20data');
                for (; K['length'] > 0x0 && K[0x0]['getUint8'](0x0); )
                    f['push'](K['shift']());
                K['length'] > 0x0 && K['shift'](),
                console['log']('[REPLAY.PLAY]\x20Found', f['length'], 'player\x20data\x20packets');
            } else
                console['log']('[REPLAY.PLAY]\x20Version\x20<\x204,\x20single\x20player\x20data'),
                K['length'] > 0x0 && f['push'](K['shift']());
            console['log']('[REPLAY.PLAY]\x20Replay\x20updates\x20count:', K['length']),
            O['replayUpdates'] = K,
            z['start'](O),
            console['log']('[REPLAY.PLAY]\x20Parsing', f['length'], 'player\x20data\x20packets'),
            f['forEach']( (D, V) => {
                try {
                    console['log']('[REPLAY.PLAY]\x20Parsing\x20player\x20packet', V, 'opcode:', D['getUint8'](0x0)),
                    z['parseMessage'](D);
                } catch (P) {
                    console['error']('[REPLAY.PLAY]\x20Failed\x20to\x20parse\x20player\x20packet', V, ':', P);
                }
            }
            ),
            z['showMenu'](![]),
            console['log']('[REPLAY.PLAY]\x20Replay\x20started\x20successfully');
        },
        'save': function() {
            var N = S;
            if (N['length']) {
                var Y = [];
                for (var K in z['playerManager']['players']) {
                    var O = z['playerManager']['players'][K];
                    O['lastUpdate'] && O['lastUpdate']['packetId'] >= N[0x0]['packetId'] && Y['push'](O);
                }
                var D, V, P, R = C(z['initialDataPacket']['buffer']), Q = function(E) {
                    E = E['map'](h1 => {
                        var h2 = {
                            'pid': h1['pid'],
                            'nickname': h1['name'],
                            'skinUrl': h1['skinUrl']
                        };
                        return h1['tagId'] && (h2['tagId'] = h1['tagId']),
                        h2;
                    }
                    );
                    var F = JSON['stringify'](E)
                      , h0 = new U();
                    return h0['uint8'](0x10),
                    h0['utf8'](F),
                    C(h0['write']());
                }(Y), W = N['map'](E => C(E['buffer']))['join']('|'), B = x['getTimestamp'](), G = z['getThumbnail'](), Z = [];
                Z['push']('REPLAY'),
                Z['push'](0x4),
                Z['push'](G),
                Z['push'](R),
                z['multiboxPid'] && Z['push'](C((D = z['multiboxPid'],
                V = new ArrayBuffer(0x3),
                (P = new DataView(V))['setUint8'](0x0, 0x8),
                P['setUint16'](0x1, D, !![]),
                V))),
                Z['push'](Q),
                Z['push'](A),
                Z['push'](W);
                var J = Z['join']('|');
                b['setItem'](B, J, () => {
                    z['events']['$emit']('replay-added'),
                    z['addServerMessage']('Replay\x20saved!'),
                    H['toast']['fire']({
                        'type': 'info',
                        'title': 'Replay\x20saved!',
                        'timer': 0x5dc
                    });
                }
                )['catch'](E => {
                    console['error']('replay.save', E);
                    var F = 'Error\x20saving\x20replay';
                    'string' == typeof E ? F += ':\x20' + E : E && E['message'] && (F += ':\x20' + E['message']),
                    H['toast']['fire']({
                        'type': 'error',
                        'title': F
                    });
                }
                );
            }
        }
    };
}
, , function(T, L, q) {
    var j = q(0x1)
      , z = q(0x5)
      , x = q(0x84)
      , {createBuffer: H} = q(0x8)
      , M = q(0x93);
    function y(C) {
        z['toast']['fire']({
            'type': 'error',
            'title': C,
            'timer': 0x1388
        });
    }
    j['send'] = function(C) {
        A() ? j['ws']['send'](C) : !j['replaying'] && console['log']('WebSocket\x20not\x20open?');
    }
    ,
    j['sendUint8'] = function(C) {
        var I = H(0x1);
        I['setUint8'](0x0, C),
        j['send'](I);
    }
    ,
    j['ping'] = function() {
        j['pingstamp'] = Date['now']();
        var C = H(0x1);
        C['setUint8'](0x0, 0x3),
        j['send'](C);
    }
    ;
    var U = 0x0;
    function S() {
        j['ws'] && (j['currentWsId'] = null,
        j['ws']['onmessage'] = null,
        j['ws']['onclose'] = null,
        j['ws']['onerror'] = null,
        j['ws']['close']());
    }
    function m() {
        0x3 === j['ws']['readyState'] && j['events']['$emit']('connect-server', j['lastWsUrl']);
    }
    function b(C) {
        j['currentWsId'] = null;
        if (j['running'])
            j['stop']();
        if (C['code'] === 0x3e8 && C['reason'] === 'Server\x20Restarting...')
            z['toast']['fire']({
                'type': 'info',
                'title': 'Server\x20restarting\x20...',
                'timer': 0x1388
            }),
            setTimeout(function() {
                m();
            }, 0x7d0);
        else {
            if (C['code'] === 0x3eb)
                setTimeout(m, 0x5dc),
                z['toast']['fire']({
                    'type': 'info',
                    'title': 'Server\x20restarting\x20...',
                    'timer': 0x1388
                });
            else {
                var I = 'You\x20have\x20been\x20disconnected';
                if (C['reason'])
                    I += '\x20(' + C['reason'] + ')';
                y(I);
            }
        }
        j['showMenu'](!![], !![]);
    }
    function A() {
        return !(!j['ws'] || 0x1 !== j['ws']['readyState']);
    }
    j['connect'] = function(C) {
        j['lastWsUrl'] = C,
        j['running'] && j['stop'](),
        S(),
        j['events']['$emit']('chat-clear');
        var I = j['ws'] = new M(C);
        I['binaryType'] = 'arraybuffer',
        I['onopen'] = function() {
            console['log']('Connected'),
            I['send'](new Uint16Array([0x45, 0x1a4]));
            var N = ![];
            try {
                var Y = new URL(C)
                  , g = Y['pathname'] || '';
                /^\/t[1-9]$/i['test'](g) && (N = !![],
                console['log']('[CAPTCHA]\x20Tournament\x20server\x20detected\x20(' + g + ')\x20-\x20bypassing\x20captcha'));
            } catch (f) {}
            var K = !!(localStorage['vanisToken'] && localStorage['vanisToken']['length'] > 0x0);
            if (K || N) {
                console['log']('[CAPTCHA]\x20Bypassing\x20captcha\x20-\x20' + (N ? 'Tournament\x20server\x20(no\x20captcha\x20needed)' : 'Discord\x20user')),
                j['events']['$emit']('captcha-result', !![], 'discord_bypass', null),
                window['__preferHcaptcha'] = !![];
                if (!N && K)
                    try {
                        var O = new is();
                        typeof O['uint16'] !== 'function' && typeof O['uint8'] === 'function' && (O['uint16'] = function(D) {
                            return this['uint8'](D >> 0x8 & 0xff),
                            this['uint8'](D & 0xff),
                            this;
                        }
                        );
                        O['uint8'](0xfb),
                        O['uint16'](0xe),
                        O['utf8']('discord_bypass');
                        if (typeof ns !== 'undefined' && ns && typeof ns['send'] === 'function')
                            ns['send'](O['write']());
                        else
                            I && I['readyState'] === 0x1 && I['send'](O['write']());
                    } catch (D) {}
            } else
                (function() {
                    window['__preferHcaptcha'] = !![];
                    function V(R) {
                        if (window['hcaptcha'])
                            return R();
                        if (window['__loadingHcaptcha'])
                            return window['__onHcaptchaReadyCallbacks'] && window['__onHcaptchaReadyCallbacks']['push'](R);
                        window['__loadingHcaptcha'] = !![],
                        window['__onHcaptchaReadyCallbacks'] = [R];
                        var Q = document['createElement']('script');
                        Q['src'] = 'https://js.hcaptcha.com/1/api.js?render=explicit',
                        Q['async'] = !![],
                        Q['defer'] = !![],
                        Q['onload'] = function() {
                            window['__loadingHcaptcha'] = ![];
                            var W = window['__onHcaptchaReadyCallbacks'] || [];
                            for (var B = 0x0; B < W['length']; B++)
                                try {
                                    W[B]();
                                } catch (G) {}
                            window['__onHcaptchaReadyCallbacks'] = [];
                        }
                        ,
                        document['head']['appendChild'](Q);
                    }
                    function P() {
                        var R = document['getElementById']('hcaptcha-container'), Q;
                        if (!R) {
                            R = document['createElement']('div'),
                            R['id'] = 'hcaptcha-container',
                            R['style']['position'] = 'fixed',
                            R['style']['left'] = '0',
                            R['style']['top'] = '0',
                            R['style']['width'] = '100vw',
                            R['style']['height'] = '100vh',
                            R['style']['display'] = 'flex',
                            R['style']['alignItems'] = 'center',
                            R['style']['justifyContent'] = 'center',
                            R['style']['zIndex'] = '99999',
                            R['style']['background'] = 'radial-gradient(ellipse\x20at\x20center,\x20rgba(39,59,94,0.12)\x200%,\x20rgba(0,0,0,0.70)\x20100%)',
                            R['style']['backdropFilter'] = 'blur(8px)\x20saturate(1.2)',
                            R['style']['webkitBackdropFilter'] = 'blur(8px)\x20saturate(1.2)',
                            R['style']['animation'] = 'hcaptchaFadeIn\x200.35s\x20cubic-bezier(0.16,\x201,\x200.3,\x201)';
                            if (!document['getElementById']('hcaptcha-styles')) {
                                var W = document['createElement']('style');
                                W['id'] = 'hcaptcha-styles',
                                W['textContent'] = '@keyframes\x20hcaptchaFadeIn\x20{\x20from\x20{\x20opacity:\x200;\x20}\x20to\x20{\x20opacity:\x201;\x20}\x20}' + '@keyframes\x20hcaptchaSlideUp\x20{\x20from\x20{\x20opacity:\x200;\x20transform:\x20translateY(20px);\x20}\x20to\x20{\x20opacity:\x201;\x20transform:\x20translateY(0);\x20}\x20}',
                                document['head']['appendChild'](W);
                            }
                            R['addEventListener']('click', function(J) {
                                if (J['target'] === R)
                                    try {
                                        typeof window['__hcaptchaWidgetId'] === 'number' && window['hcaptcha'] && window['hcaptcha']['remove'] && window['hcaptcha']['remove'](window['__hcaptchaWidgetId']);
                                        if (R && R['parentNode'])
                                            R['parentNode']['removeChild'](R);
                                        window['__hcaptchaWidgetId'] = undefined,
                                        j['ws'] && j['ws']['readyState'] === 0x1 && (console['log']('[CAPTCHA]\x20User\x20dismissed\x20captcha\x20-\x20closing\x20connection'),
                                        j['ws']['close']());
                                    } catch (k) {}
                            }),
                            document['body']['appendChild'](R);
                            var B = document['createElement']('div');
                            B['id'] = 'hcaptcha-card',
                            B['style']['position'] = 'relative',
                            B['style']['background'] = 'linear-gradient(135deg,\x20#1a1a1a\x200%,\x20#0f0f12\x2050%,\x20#050508\x20100%)',
                            B['style']['borderRadius'] = '12px',
                            B['style']['border'] = '1px\x20solid\x20rgba(211,\x2055,\x2030,\x200.2)',
                            B['style']['boxShadow'] = '0\x208px\x2032px\x20rgba(0,0,0,0.6),\x200\x200\x200\x201px\x20rgba(255,255,255,0.03),\x20inset\x200\x201px\x200\x20rgba(255,255,255,0.06)',
                            B['style']['padding'] = '28px\x2028px\x2022px',
                            B['style']['width'] = 'min(460px,\x2092vw)',
                            B['style']['color'] = '#ffffff',
                            B['style']['fontFamily'] = 'inherit',
                            B['style']['textAlign'] = 'center',
                            B['style']['animation'] = 'hcaptchaSlideUp\x200.4s\x20cubic-bezier(0.16,\x201,\x200.3,\x201)',
                            B['style']['overflow'] = 'hidden',
                            R['appendChild'](B);
                            var G = document['createElement']('div');
                            G['style']['position'] = 'absolute',
                            G['style']['left'] = '0',
                            G['style']['right'] = '0',
                            G['style']['top'] = '0',
                            G['style']['height'] = '2px',
                            G['style']['background'] = 'linear-gradient(90deg,\x20transparent\x200%,\x20#d3371e\x2020%,\x20#ff4433\x2050%,\x20#d3371e\x2080%,\x20transparent\x20100%)',
                            G['style']['opacity'] = '0.85',
                            B['appendChild'](G);
                            var w = document['createElement']('div');
                            w['style']['position'] = 'absolute',
                            w['style']['left'] = '50%',
                            w['style']['top'] = '0',
                            w['style']['transform'] = 'translateX(-50%)',
                            w['style']['width'] = '80%',
                            w['style']['height'] = '100px',
                            w['style']['background'] = 'radial-gradient(ellipse\x20at\x20top,\x20rgba(211,55,30,0.06)\x200%,\x20transparent\x2070%)',
                            w['style']['pointerEvents'] = 'none',
                            B['appendChild'](w);
                            var v = document['createElement']('div');
                            v['textContent'] = 'Login\x20to\x20your\x20account\x20with\x20Discord\x20to\x20save\x20your\x20in-game\x20progress\x20and\x20bypass\x20captcha.',
                            v['style']['position'] = 'relative',
                            v['style']['fontSize'] = '14.5px',
                            v['style']['fontWeight'] = '600',
                            v['style']['letterSpacing'] = '0.3px',
                            v['style']['lineHeight'] = '1.6',
                            v['style']['margin'] = '0\x20auto\x2020px\x20auto',
                            v['style']['maxWidth'] = '420px',
                            v['style']['color'] = '#e8eaf0',
                            v['style']['textAlign'] = 'center',
                            v['style']['textShadow'] = '0\x202px\x208px\x20rgba(0,0,0,0.4)',
                            v['style']['zIndex'] = '1',
                            B['appendChild'](v);
                            var Z = document['createElement']('div');
                            Z['style']['display'] = 'flex',
                            Z['style']['justifyContent'] = 'center',
                            Z['style']['alignItems'] = 'center',
                            Z['style']['width'] = '100%',
                            B['appendChild'](Z),
                            Q = document['createElement']('div'),
                            Q['id'] = 'hcaptcha-widget',
                            Q['style']['position'] = 'relative',
                            Q['style']['display'] = 'inline-block',
                            Q['style']['margin'] = '0',
                            Q['style']['borderRadius'] = '8px',
                            Q['style']['overflow'] = 'hidden',
                            Q['style']['boxShadow'] = '0\x204px\x2016px\x20rgba(0,0,0,0.3)',
                            Q['style']['zIndex'] = '1',
                            Z['appendChild'](Q);
                        } else
                            Q = document['getElementById']('hcaptcha-widget') || R;
                        if (typeof window['__hcaptchaWidgetId'] !== 'number')
                            try {
                                window['__hcaptchaWidgetId'] = hcaptcha['render'](Q, {
                                    'sitekey': '50521132-ca08-4b12-a2ee-280cb6448d92',
                                    'theme': 'dark',
                                    'callback': function(J) {
                                        j['events']['$emit']('captcha-result', !![], J, null);
                                        try {
                                            typeof window['__hcaptchaWidgetId'] === 'number' && window['hcaptcha'] && window['hcaptcha']['remove'] && window['hcaptcha']['remove'](window['__hcaptchaWidgetId']);
                                            var k = document['getElementById']('hcaptcha-container');
                                            if (k && k['parentNode'])
                                                k['parentNode']['removeChild'](k);
                                            window['__hcaptchaWidgetId'] = undefined;
                                        } catch (E) {}
                                    },
                                    'error-callback': function() {
                                        j['events']['$emit']('captcha-result', ![], null, 'error');
                                    },
                                    'expired-callback': function() {
                                        j['events']['$emit']('captcha-result', ![], null, 'expired');
                                    }
                                });
                            } catch (J) {}
                    }
                    V(P);
                }());
            A() && (j['currentWsId'] = ++U,
            (j['events']['$emit']('players_menu', !![]),
            j['events']['$emit']('account_menu', !![]),
            j['events']['$emit']('chatbox_menu', !![]),
            j['events']['$emit']('options_menu', !![]),
            j['events']['$emit']('replays_menu', !![]),
            j['state']['connectionUrl'] = C,
            I['onclose'] = b));
        }
        ,
        I['onclose'] = function(N) {
            y('Connection\x20failed!');
        }
        ,
        I['onmessage'] = function(N) {
            x(new DataView(N['data']));
        }
        ;
    }
    ,
    j['closeConnection'] = S,
    j['isConnected'] = A;
}
, function(T, L, q) {
    var j = q(0x1)
      , p = q(0x5)
      , z = q(0x85)
      , x = q(0x4d)
      , H = q(0x8d)
      , M = q(0x8e)
      , y = q(0x8f)
      , {htmlEncode: U} = q(0x8)
      , S = (q(0x18),
    q(0x90))
      , m = 0x1;
    T['exports'] = j['parseMessage'] = function(C) {
        function Y() {
            for (var TC, TI = ''; Q + 0x2 <= C['byteLength'] && 0x0 != (TC = C['getUint16'](Q, !![])); ) {
                Q += 0x2,
                TI += String['fromCharCode'](TC);
            }
            if (Q + 0x2 <= C['byteLength'])
                Q += 0x2;
            return TI;
        }
        function K() {
            var TC = Q, TI;
            while (Q < C['byteLength'] && 0x0 != (TI = C['getUint8'](Q, !![])))
                Q += 0x1;
            var TN = Q - TC;
            if (Q < C['byteLength'])
                Q += 0x1;
            if (TN === 0x0)
                return '';
            var TY = new Uint8Array(TN);
            for (var Tg = 0x0; Tg < TN; Tg++) {
                TY[Tg] = C['getUint8'](TC + Tg, !![]);
            }
            try {
                return new TextDecoder('utf-8')['decode'](TY);
            } catch (Tf) {
                var TK = '';
                for (var TO = 0x0; TO < TN; TO++) {
                    TK += String['fromCharCode'](TY[TO]);
                }
                return TK;
            }
        }
        if (!C || C['byteLength'] < 0x1) {
            console['error']('[PARSE]\x20❌\x20Invalid\x20buffer:', C ? C['byteLength'] : 'null');
            return;
        }
        C['packetId'] = m++,
        C['clearWhenShifted'] = [];
        var Q = 0x0
          , G = C['getUint8'](Q++);
        if (G === 0x31 || G === 0xb || G === 0xd) {}
        switch (G) {
        case 0x1:
            console['log']('[CLIENT]\x20=====\x20RECEIVED\x20OPCODE\x201\x20(Initial\x20World)\x20====='),
            console['log']('[CLIENT]\x20Sending\x20player\x20info\x20(opcode\x204)\x20immediately...');
            j['sendPlayerInfoEarly'] ? (console['log']('[CLIENT]\x20Calling\x20sendPlayerInfoEarly\x20NOW!'),
            j['sendPlayerInfoEarly']()) : console['error']('[CLIENT]\x20sendPlayerInfoEarly\x20not\x20found!');
            var Z = x['initialData'](C);
            j['initialDataPacket'] = C,
            j['start'](Z);
            break;
        case 0x2:
            var J = new Uint8Array(C['buffer'],0x1)
              , h0 = S(J);
            j['sendJoinData'](h0);
            break;
        case 0x3:
            var h3 = Date['now']() - j['pingstamp'];
            j['updateStats'](h3);
            break;
        case 0x4:
            for (; hx = C['getUint16'](Q, !![]); )
                j['playerManager']['delayedRemovePlayer'](hx),
                Q += 0x2;
            break;
        case 0x6:
            j['sendUint8'](0x6);
            break;
        case 0x7:
            var h4, h5;
            if (0x1 & (hP = C['getUint8'](Q++))) {
                var h6 = C['getUint16'](Q, !![]);
                h4 = j['playerManager']['getPlayer'](h6),
                Q += 0x2;
            }
            if (0x2 & hP) {
                var h7 = C['getUint16'](Q, !![]);
                h5 = j['playerManager']['getPlayer'](h7),
                Q += 0x2;
            }
            h5 && h5['setCrown'](![]),
            h4 && h4['setCrown'](!![]);
            break;
        case 0x8:
            j['multiboxPid'] = C['getUint16'](Q, !![]);
            break;
        case 0x9:
            j['activePid'] && j['playerManager']['getPlayer'](j['activePid'])['setOutline'](0xffffff),
            j['activePid'] = C['getUint16'](Q, !![]),
            j['playerManager']['getPlayer'](j['activePid'])['setOutline'](0xff00ff);
            break;
        case 0xa:
            z(C);
            break;
        case 0xb:
            break;
        case 0x31:
            var h8 = []
              , h9 = C['getUint32'](Q, !![]);
            Q += 0x4;
            for (var hh = 0x0; hh < h9; hh++) {
                if (Q + 0x2 > C['byteLength'])
                    break;
                var hT = C['getUint16'](Q, !![]);
                Q += 0x2;
                try {
                    var hL = K()
                      , ht = null
                      , hX = 0x0
                      , hq = null
                      , hj = hT;
                    hT && j['playerManager']['players'] && j['playerManager']['players'][hT] && (ht = j['playerManager']['players'][hT]);
                    if (!ht)
                        for (var hs in j['playerManager']['players']) {
                            var hi = j['playerManager']['players'][hs];
                            if (hi && hi['name'] === hL) {
                                ht = hi,
                                hj = hi['pid'];
                                break;
                            }
                        }
                    if (ht) {
                        if (ht['badgeId'])
                            hX = ht['badgeId'];
                        if (ht['nameColorCss'])
                            hq = ht['nameColorCss'];
                    }
                    h8['push']({
                        'pid': hj || 0x0,
                        'position': hh + 0x1,
                        'name': hL,
                        'badgeId': hX,
                        'text': hL,
                        'color': hq
                    });
                } catch (TC) {
                    console['error']('❌\x20LB\x20parse\x20error\x20at\x20entry', hh, TC);
                    break;
                }
            }
            j['events']['$emit']('leaderboard-update', h8);
            break;
        case 0xc:
            var hp = M(C);
            j['events']['$emit']('minimap-positions', hp);
            break;
        case 0xd:
            console['log']('[PARSE]\x20📨\x20Parsing\x20chat\x20packet\x20-\x20buffer\x20size:', C['byteLength']);
            try {
                var hz = H(C)
                  , hx = hz['pid']
                  , hH = hz['text'];
                console['log']('[PARSE]\x20✅\x20Chat\x20parsed\x20-\x20PID:', hx, 'Text\x20length:', hH ? hH['length'] : 0x0);
            } catch (TI) {
                console['error']('[PARSE]\x20❌\x20Chat\x20parse\x20failed:', TI['message']),
                console['error']('[PARSE]\x20Buffer\x20hex:', Array['from'](new Uint8Array(C['buffer']))['map'](TN => TN['toString'](0x10)['padStart'](0x2, '0'))['join']('\x20'));
                break;
            }
            if (!hx) {
                if (hH && 0x0 === hH['indexOf']('TOURNAMENT_TIMER|')) {
                    var hM = hH['split']('|')
                      , hy = hM[0x1] || 'idle'
                      , hc = hM['length'] > 0x2 ? parseInt(hM[0x2], 0xa) || 0x0 : 0x0;
                    hy === 'idle' || hy === 'finished' ? (window['__tournamentActive'] = ![],
                    console['log']('[TOURNAMENT]\x20✅\x20Tournament\x20inactive')) : (window['__tournamentActive'] = !![],
                    console['log']('[TOURNAMENT]\x20✅\x20Tournament\x20ACTIVE\x20-\x20state:', hy));
                    var hd = 0x0;
                    hc > 0x0 && (hd = Date['now']() + hc,
                    console['log']('[TOURNAMENT-TIMER]\x20✅\x20Sync\x20update\x20-\x20Duration:', (hc / 0x3e8)['toFixed'](0x1) + 's')),
                    j['events']['$emit']('tournament-timer', {
                        'state': hy,
                        'targetTime': hd
                    });
                } else {
                    if (hH && 0x0 === hH['indexOf']('BETTING_STATE|')) {
                        console['log']('[BETTING]\x20📨\x20Raw\x20BETTING_STATE\x20message:', hH);
                        var hM = hH['split']('|');
                        console['log']('[BETTING]\x20📋\x20Parsed\x20parts:', hM);
                        var hU = hM[0x1] === 'true'
                          , hS = parseInt(hM[0x2], 0xa) || 0x0
                          , he = hM[0x3] || 'Finalist\x201'
                          , hm = parseInt(hM[0x4], 0xa) || 0x0
                          , hb = hM[0x5] || 'Finalist\x202'
                          , hA = parseInt(hM[0x6], 0xa) || 0x0;
                        console['log']('[BETTING]\x20💰\x20My\x20season\x20XP\x20from\x20server:', hA);
                        var hC = {
                            'open': hU,
                            'finalists': [{
                                'pid': hS,
                                'name': he
                            }, {
                                'pid': hm,
                                'name': hb
                            }],
                            'seasonXP': hA
                        };
                        console['log']('[BETTING]\x20🎰\x20Betting\x20state\x20parsed:', hC),
                        console['log']('[BETTING]\x20📡\x20Emitting\x20betting-state\x20event...'),
                        j['events']['$emit']('betting-state', hC),
                        console['log']('[BETTING]\x20✅\x20Event\x20emitted!');
                    } else {
                        if (hH && 0x0 === hH['indexOf']('BETTING_XP_UPDATE|')) {
                            var hM = hH['split']('|')
                              , hI = parseInt(hM[0x1], 0xa) || 0x0;
                            console['log']('[BETTING]\x20💰\x20XP\x20update\x20received:', hI),
                            j['events']['$emit']('betting-xp-update', hI);
                        } else {
                            if (hH && 0x0 === hH['indexOf']('BETTING_VOTES|')) {
                                var hM = hH['split']('|');
                                if (hM['length'] >= 0x7) {
                                    var hN = {
                                        [parseInt(hM[0x1])]: {
                                            'votes': parseInt(hM[0x2]),
                                            'total': parseInt(hM[0x3])
                                        },
                                        [parseInt(hM[0x4])]: {
                                            'votes': parseInt(hM[0x5]),
                                            'total': parseInt(hM[0x6])
                                        }
                                    };
                                    console['log']('[BETTING]\x20📊\x20Vote\x20counts\x20update:', hN),
                                    j['events']['$emit']('betting-votes', hN);
                                }
                            } else {
                                if (hH && 0x0 === hH['indexOf']('WINNER|')) {
                                    var hM = hH['split']('|')
                                      , hY = hM[0x1]
                                      , hg = hM[0x2];
                                    if (!window['winnerOverlay']) {
                                        var hK = document['createElement']('div');
                                        hK['id'] = 'winner-overlay',
                                        hK['style']['position'] = 'fixed',
                                        hK['style']['top'] = '0',
                                        hK['style']['left'] = '0',
                                        hK['style']['width'] = '100%',
                                        hK['style']['height'] = '100%',
                                        hK['style']['backgroundColor'] = 'transparent',
                                        hK['style']['zIndex'] = '99999',
                                        hK['style']['display'] = 'flex',
                                        hK['style']['flexDirection'] = 'column',
                                        hK['style']['justifyContent'] = 'flex-start',
                                        hK['style']['alignItems'] = 'center',
                                        hK['style']['paddingTop'] = '50px',
                                        hK['style']['pointerEvents'] = 'none';
                                        var hO = document['createElement']('h1');
                                        hO['style']['color'] = 'white',
                                        hO['style']['fontSize'] = '40px',
                                        hO['style']['fontFamily'] = 'Ubuntu,\x20sans-serif',
                                        hO['style']['fontWeight'] = 'bold',
                                        hO['style']['marginBottom'] = '10px',
                                        hO['style']['textAlign'] = 'center',
                                        hO['style']['textShadow'] = '2px\x202px\x204px\x20#000,\x20-1px\x20-1px\x200\x20#000,\x201px\x20-1px\x200\x20#000,\x20-1px\x201px\x200\x20#000,\x201px\x201px\x200\x20#000',
                                        hO['innerText'] = hY + '\x20has\x20won\x20this\x20reset!',
                                        hK['appendChild'](hO);
                                        var hf = document['createElement']('h2');
                                        hf['style']['color'] = 'white',
                                        hf['style']['fontSize'] = '30px',
                                        hf['style']['fontFamily'] = 'Ubuntu,\x20sans-serif',
                                        hf['style']['textAlign'] = 'center',
                                        hf['style']['textShadow'] = '2px\x202px\x204px\x20#000,\x20-1px\x20-1px\x200\x20#000,\x201px\x20-1px\x200\x20#000,\x20-1px\x201px\x200\x20#000,\x201px\x201px\x200\x20#000',
                                        hf['innerText'] = 'Map\x20reset\x20in\x20' + hg + '\x20seconds',
                                        hK['appendChild'](hf),
                                        document['body']['appendChild'](hK),
                                        window['winnerOverlay'] = hK,
                                        window['winnerOverlayText'] = hf;
                                    } else
                                        window['winnerOverlay']['style']['display'] = 'flex',
                                        window['winnerOverlay']['querySelector']('h1')['innerText'] = hY + '\x20has\x20won\x20this\x20reset!',
                                        window['winnerOverlayText']['innerText'] = 'Map\x20reset\x20in\x20' + hg + '\x20seconds';
                                    hg <= 0x0 && setTimeout(function() {
                                        if (window['winnerOverlay'])
                                            window['winnerOverlay']['style']['display'] = 'none';
                                    }, 0x3e8);
                                } else {
                                    if (hH && hH === 'WINNER_CANCEL')
                                        window['winnerOverlay'] && (window['winnerOverlay']['style']['display'] = 'none');
                                    else {
                                        if (hH && 0x0 === hH['indexOf']('TROLL|')) {
                                            var hl = hH['substring'](0x6)
                                              , hu = {};
                                            try {
                                                if (hl && hl['length']) {
                                                    var hD = window['atob'](hl);
                                                    hu = hD ? JSON['parse'](hD) : {};
                                                }
                                            } catch (TN) {
                                                console['error']('[TROLL]\x20❌\x20Failed\x20to\x20parse\x20payload:', TN);
                                                return;
                                            }
                                            typeof window['__showTrollOverlay'] !== 'function' && (window['__showTrollOverlay'] = function(TY) {
                                                TY = TY || {};
                                                var Tg = parseInt(TY['duration'], 0xa);
                                                if (isNaN(Tg))
                                                    Tg = 0xfa0;
                                                if (Tg < 0x1f4)
                                                    Tg = 0x1f4;
                                                if (Tg > 0x4e20)
                                                    Tg = 0x4e20;
                                                var TK = typeof TY['image'] === 'string' ? TY['image'] : ''
                                                  , TO = typeof TY['audio'] === 'string' ? TY['audio'] : '';
                                                window['__trollOverlayAudioHandle'] && typeof window['__trollOverlayAudioHandle']['stop'] === 'function' && window['__trollOverlayAudioHandle']['stop'](!![]);
                                                var Tf = window['__trollOverlay']
                                                  , Tl = window['__trollOverlayImage'];
                                                !Tf && (Tf = document['createElement']('div'),
                                                Tf['id'] = 'troll-overlay',
                                                Tf['style']['position'] = 'fixed',
                                                Tf['style']['left'] = '0',
                                                Tf['style']['top'] = '0',
                                                Tf['style']['width'] = '100vw',
                                                Tf['style']['height'] = '100vh',
                                                Tf['style']['display'] = 'none',
                                                Tf['style']['pointerEvents'] = 'none',
                                                Tf['style']['zIndex'] = '999999',
                                                Tf['style']['opacity'] = '0',
                                                Tf['style']['transition'] = 'opacity\x200.18s\x20ease-in-out',
                                                Tf['style']['backgroundColor'] = '#000',
                                                Tl = document['createElement']('img'),
                                                Tl['className'] = 'troll-overlay-image',
                                                Tl['style']['width'] = '100%',
                                                Tl['style']['height'] = '100%',
                                                Tl['style']['objectFit'] = 'cover',
                                                Tl['style']['pointerEvents'] = 'none',
                                                Tl['style']['userSelect'] = 'none',
                                                Tf['appendChild'](Tl),
                                                document['body']['appendChild'](Tf),
                                                window['__trollOverlay'] = Tf,
                                                window['__trollOverlayImage'] = Tl);
                                                Tf = window['__trollOverlay'],
                                                Tl = window['__trollOverlayImage'];
                                                window['__trollOverlayHideTimeout'] && (clearTimeout(window['__trollOverlayHideTimeout']),
                                                window['__trollOverlayHideTimeout'] = null);
                                                var Tu = function() {
                                                    if (!Tf)
                                                        return;
                                                    Tf['style']['opacity'] = '0',
                                                    window['__trollOverlayHideTimeout'] = null,
                                                    setTimeout(function() {
                                                        Tf['style']['opacity'] === '0' && (Tf['style']['display'] = 'none');
                                                    }, 0xf0);
                                                };
                                                TK && TK['trim']()['length'] ? Tl['src'] = TK : Tl['removeAttribute']('src');
                                                Tf['style']['display'] = 'block',
                                                void Tf['offsetWidth'],
                                                Tf['style']['opacity'] = '1';
                                                if (TO && TO['trim']()['length'])
                                                    try {
                                                        var TD = Math['max'](0xa, parseInt(TY['loops'], 0xa) || 0x0)
                                                          , TV = window['AudioContext'] || window['webkitAudioContext'];
                                                        if (!TV)
                                                            throw new Error('AudioContext\x20unavailable');
                                                        var TP = window['__trollOverlayAudioContext'];
                                                        !TP && (TP = window['__trollOverlayAudioContext'] = new TV());
                                                        !window['__trollOverlayAudioCache'] && (window['__trollOverlayAudioCache'] = {});
                                                        var TR = function(Ta) {
                                                            var TW = TD
                                                              , Tn = null
                                                              , TB = {
                                                                'stop': function(Tv) {
                                                                    TW = 0x0;
                                                                    if (Tn) {
                                                                        try {
                                                                            Tn['onended'] = null,
                                                                            Tn['stop'](0x0);
                                                                        } catch (TZ) {}
                                                                        Tn = null;
                                                                    }
                                                                    !Tv && Tu(),
                                                                    window['__trollOverlayAudioHandle'] = null;
                                                                }
                                                            };
                                                            window['__trollOverlayAudioHandle'] = TB;
                                                            var TG = function() {
                                                                if (TW <= 0x0) {
                                                                    window['__trollOverlayAudioHandle'] === TB && TB['stop'](![]);
                                                                    return;
                                                                }
                                                                Tn = TP['createBufferSource'](),
                                                                Tn['buffer'] = Ta,
                                                                Tn['connect'](TP['destination']),
                                                                Tn['onended'] = function() {
                                                                    Tn = null,
                                                                    TW--,
                                                                    TG();
                                                                }
                                                                ,
                                                                Tn['start'](0x0);
                                                            }
                                                              , Tw = TP['state'] === 'suspended' ? TP['resume']() : Promise['resolve']();
                                                            Tw['then'](TG)['catch'](function(Tv) {
                                                                console['warn']('[TROLL]\x20⚠️\x20Audio\x20context\x20resume\x20failed:', Tv),
                                                                window['__trollOverlayAudioHandle'] === TB ? TB['stop'](![]) : Tu();
                                                            });
                                                        }
                                                          , TQ = window['__trollOverlayAudioCache'][TO];
                                                        TQ ? TR(TQ) : fetch(TO, {
                                                            'cache': 'force-cache',
                                                            'mode': 'cors'
                                                        })['then'](function(Ta) {
                                                            if (!Ta['ok'])
                                                                throw new Error('Failed\x20to\x20load\x20audio');
                                                            return Ta['arrayBuffer']();
                                                        })['then'](function(Ta) {
                                                            return TP['decodeAudioData'](Ta);
                                                        })['then'](function(Ta) {
                                                            window['__trollOverlayAudioCache'][TO] = Ta,
                                                            TR(Ta);
                                                        })['catch'](function(Ta) {
                                                            console['warn']('[TROLL]\x20⚠️\x20Unable\x20to\x20fetch/decode\x20audio:', Ta),
                                                            window['__trollOverlayHideTimeout'] = setTimeout(Tu, Tg);
                                                        });
                                                    } catch (Ta) {
                                                        console['warn']('[TROLL]\x20⚠️\x20Unable\x20to\x20play\x20audio\x20url:', Ta),
                                                        window['__trollOverlayHideTimeout'] = setTimeout(Tu, Tg);
                                                    }
                                                else
                                                    window['__trollOverlayHideTimeout'] = setTimeout(Tu, Tg);
                                            }
                                            );
                                            window['__showTrollOverlay'](hu);
                                            return;
                                        } else
                                            j['addServerMessage'](hH);
                                    }
                                }
                            }
                        }
                    }
                }
                return;
            }
            ho = j['playerManager']['getPlayer'](hx);
            var hV = {
                'pid': hx,
                'text': hH,
                'from': ho ? ho['name'] : 'Player\x20#' + hx,
                'badgeId': ho ? ho['badgeId'] || 0x0 : 0x0
            };
            if (ho && ho['nameColorCss'])
                hV['fromColor'] = ho['nameColorCss'];
            j['events']['$emit']('chat-message', hV);
            break;
        case 0xe:
            var hP;
            if (Z = {},
            0x2 & (hP = C['getUint8'](Q++))) {
                var hR = {
                    0x1: 'success',
                    0x2: 'error',
                    0x3: 'warning',
                    0x4: 'info'
                }[C['getUint8'](Q++)];
                hR && (Z['type'] = hR);
            }
            0x4 & hP && (Z['timer'] = C['getUint16'](Q, !![]),
            Q += 0x2),
            Z['title'] = U(K()),
            p['toast']['fire'](Z);
            break;
        case 0xf:
            hx = C['getUint16'](Q, !![]),
            Q += 0x2;
            if (!hx)
                break;
            var hQ = K()
              , ha = K()
              , hW = K()
              , hn = C['getUint8'](Q++)
              , hB = 0x0;
            Q <= C['byteLength'] - 0x1 && (hB = C['getUint8'](Q++));
            console['log']('[Opcode\x2015]\x20Player', hx, 'Name:', hQ, 'Skin:', ha, 'Color:', hW, 'Badge:', hn, 'Bot:', !!hB),
            j['playerManager']['setPlayerData']({
                'pid': hx,
                'nickname': hQ,
                'skinUrl': ha,
                'nameColor': hW || null,
                'badgeId': hn || 0x0,
                'bot': !!hB
            });
            break;
        case 0x10:
            console['log']('[OPCODE\x2016]\x20Parsing\x20player\x20data\x20JSON');
            try {
                var hG = K();
                console['log']('[OPCODE\x2016]\x20Raw\x20string\x20length:', hG['length']),
                console['log']('[OPCODE\x2016]\x20First\x20100\x20chars:', hG['substring'](0x0, 0x64));
                var hw;
                try {
                    hw = decodeURIComponent(escape(hG));
                } catch (TY) {
                    console['warn']('[OPCODE\x2016]\x20decodeURIComponent\x20failed,\x20trying\x20direct\x20parse:', TY),
                    hw = hG;
                }
                console['log']('[OPCODE\x2016]\x20Decoded\x20string:', hw['substring'](0x0, 0x64));
                var hv = JSON['parse'](hw);
                console['log']('[OPCODE\x2016]\x20Parsed', hv['length'], 'players:', hv);
                var hZ = hv['find'](Tg => Tg['pid'] === j['playerId'])
                  , hJ = ![];
                hZ && (hJ = j['setTagId'](hZ['tagId']));
                for (var hk = [], hE = 0x0; hE < hv['length']; hE++) {
                    console['log']('[OPCODE\x2016]\x20Setting\x20player\x20data\x20for\x20player', hE, 'pid:', hv[hE]['pid'], 'nick:', hv[hE]['nickname']);
                    var ho = j['playerManager']['setPlayerData'](hv[hE]);
                    hk['push'](ho);
                }
                hJ && (j['events']['$emit']('minimap-positions', []),
                j['playerManager']['invalidateVisibility'](hk)),
                console['log']('[OPCODE\x2016]\x20Player\x20data\x20setup\x20complete');
            } catch (Tg) {
                console['error']('[OPCODE\x2016]\x20Failed\x20to\x20parse\x20player\x20data:', Tg),
                console['error']('[OPCODE\x2016]\x20Error\x20stack:', Tg['stack']);
                try {
                    console['error']('[OPCODE\x2016]\x20Raw\x20string:', hG);
                } catch (TK) {
                    console['error']('[OPCODE\x2016]\x20Cannot\x20log\x20raw\x20string');
                }
            }
            break;
        case 0x11:
            j['center']['x'] = C['getInt32'](Q, !![]),
            Q += 0x4,
            j['center']['y'] = C['getInt32'](Q, !![]),
            Q += 0x4;
            break;
        case 0x12:
            j['replay']['updateHistory']['length'] = 0x0,
            j['clearNodes']();
            break;
        case 0x13:
            var hr = C['getUint8'](Q++)
              , hF = C['getUint32'](Q, !![]);
            if (Q += 0x4,
            j['events']['$emit']('xp-update', hF),
            hr) {
                var T0 = C['getUint16'](Q, !![]);
                Q += 0x2,
                j['levelUp'](T0);
            }
            break;
        case 0x14:
            var T1 = C['getUint16'](Q, !![]);
            Q += 0x2;
            var T2 = C['getUint16'](Q, !![]);
            Q += 0x2;
            var T3 = C['getUint32'](Q, !![]);
            Q += 0x4,
            j['state']['deathScreen'] = !![],
            j['setDeathStats']({
                'timeAlive': T1,
                'killCount': T2,
                'highscore': T3
            }),
            j['shouldAutoRespawn']() ? j['state']['isAutoRespawning'] = !![] : j['state']['lastDeathTime'] = Date['now']();
            var T4 = j['state']['isAutoRespawning'] ? 0x5dc : 0x384;
            j['deathTimeout'] = setTimeout(j['triggerAutoRespawn'], T4);
            break;
        case 0x15:
            break;
        case 0x16:
            if (!window['grecaptcha'])
                return void alert('Captcha\x20library\x20is\x20not\x20loaded');
            j['events']['$emit']('show-image-captcha');
            break;
        case 0x17:
            j['state']['spectators'] = C['getUint16'](Q, !![]);
            break;
        case 0x18:
            var T5 = C['getUint16'](Q, !![]);
            Q += 0x2;
            var T6 = C['getUint16'](Q, !![]);
            Q += 0x2;
            var T7 = j['activePid'];
            j['multiboxPid'] = T5,
            j['activePid'] = T6;
            if (T7 && T7 !== j['activePid']) {
                var T8 = j['playerManager']['getPlayer'](T7);
                T8 && T8['setOutline'](0xffffff);
            }
            if (j['activePid']) {
                var T9 = j['playerManager']['getPlayer'](j['activePid']);
                T9 && T9['setOutline'](0xff00ff);
            }
            console['log']('DualPlayerUpdate\x20received\x20-\x20multiboxPid:', T5, 'activePid:', T6);
            break;
        case 0x32:
            console['log']('[TOURNAMENT]\x20📥\x20Received\x20ForceSpectate\x20packet\x20(opcode\x2050)'),
            window['__tournamentActive'] = !![],
            window['__tournamentSpectatorOnly'] = !![],
            j['state']['tournamentSpectatorOnly'] = !![],
            j['state']['playButton'] = !![],
            j['spectating'] = !![],
            j['events']['$emit']('minimap-hide'),
            console['log']('[TOURNAMENT]\x20🗺️\x20Minimap\x20hidden\x20for\x20spectator');
            window['app'] && window['app']['$forceUpdate'] && window['app']['$forceUpdate']();
            j['actions'] && typeof j['actions']['spectate'] === 'function' && (console['log']('[TOURNAMENT]\x20👻\x20Auto-entering\x20spectate\x20mode'),
            j['actions']['spectate']());
            break;
        case 0x33:
            console['log']('[TOURNAMENT]\x20📥\x20Received\x20AllowPlay\x20packet\x20(opcode\x2051)'),
            window['__tournamentSpectatorOnly'] = ![],
            j['state']['tournamentSpectatorOnly'] = ![],
            j['state']['playButton'] = !![],
            j['events']['$emit']('minimap-show'),
            console['log']('[TOURNAMENT]\x20🎮\x20Player\x20is\x20registered\x20-\x20Play\x20button\x20enabled!');
            window['app'] && window['app']['$forceUpdate'] && window['app']['$forceUpdate']();
            break;
        case 0x34:
            try {
                var Th = C['getUint16'](0x1, !![])
                  , TT = new Uint8Array(C['buffer'],C['byteOffset'] + 0x3,Th)
                  , TL = new TextDecoder()['decode'](TT)
                  , Tt = JSON['parse'](TL);
                console['log']('[TOURNAMENT]\x20📊\x20State\x20update:', Tt),
                window['__tournamentState'] = Tt,
                j['state']['tournamentState'] = Tt,
                window['TournamentUI'] && window['TournamentUI']['updateUI'] && window['TournamentUI']['updateUI'](Tt),
                j['events']['$emit']('tournament-state-update', Tt),
                window['app'] && window['app']['$forceUpdate'] && window['app']['$forceUpdate']();
            } catch (TO) {
                console['error']('[TOURNAMENT]\x20Failed\x20to\x20parse\x20state:', TO);
            }
            break;
        case 0x35:
            try {
                var TX = C['getUint16'](0x1, !![])
                  , Tq = new Uint8Array(C['buffer'],C['byteOffset'] + 0x3,TX)
                  , Tj = new TextDecoder()['decode'](Tq)
                  , Ts = JSON['parse'](Tj);
                console['log']('[TOURNAMENT]\x20🎉\x20Round\x20ended:', Ts),
                j['events']['$emit']('tournament-round-end', Ts),
                window['TournamentUI'] && window['TournamentUI']['showRoundEndNotification'] && window['TournamentUI']['showRoundEndNotification'](Ts);
            } catch (Tf) {
                console['error']('[TOURNAMENT]\x20Failed\x20to\x20parse\x20round\x20end:', Tf);
            }
            break;
        case 0x36:
            try {
                var Ti = C['getUint16'](0x1, !![])
                  , Tp = new Uint8Array(C['buffer'],C['byteOffset'] + 0x3,Ti)
                  , Tz = new TextDecoder()['decode'](Tp)
                  , Tx = JSON['parse'](Tz);
                console['log']('[TOURNAMENT]\x20🎊\x20Match\x20ended:', Tx),
                j['events']['$emit']('tournament-match-end', Tx),
                window['TournamentUI'] && window['TournamentUI']['showMatchEndNotification'] && window['TournamentUI']['showMatchEndNotification'](Tx);
            } catch (Tl) {
                console['error']('[TOURNAMENT]\x20Failed\x20to\x20parse\x20match\x20end:', Tl);
            }
            break;
        case 0x37:
            try {
                var TH = C['getFloat32'](0x1, !![])
                  , TM = C['byteLength'] > 0x5 ? C['getUint8'](0x5) === 0x1 : ![];
                console['log']('[TOURNAMENT]\x20Respawn\x20cooldown:', TH['toFixed'](0x1) + 's', TM ? '(dual)' : '(main)'),
                window['TournamentUI'] && window['TournamentUI']['showRespawnCooldown'] && window['TournamentUI']['showRespawnCooldown'](TH, TM);
            } catch (Tu) {
                console['error']('[TOURNAMENT]\x20Failed\x20to\x20parse\x20respawn\x20cooldown:', Tu);
            }
            break;
        case 0x40:
            try {
                var Ty = 0x1
                  , Tc = C['getFloat64'](Ty, !![]);
                Ty += 0x8;
                var Td = C['getFloat64'](Ty, !![]);
                Ty += 0x8;
                var TU = C['getFloat64'](Ty, !![]);
                Ty += 0x8;
                var TS = C['getFloat64'](Ty, !![]);
                Ty += 0x8;
                var Te = TU - Tc
                  , Tm = TS - Td
                  , Tb = ![]
                  , TA = Te / 0x2;
                C['byteLength'] >= Ty + 0x5 && (Tb = !!C['getUint8'](Ty, !![]),
                Ty += 0x1,
                TA = C['getUint32'](Ty, !![])),
                (!window['_lastBorderLog'] || Math['abs'](window['_lastBorderLog'] - TA) > 0x1f4) && (console['log']('[BORDER]\x20🗺️\x20Border\x20update\x20-\x20radius:', Math['floor'](TA)),
                window['_lastBorderLog'] = TA),
                j['border'] && (j['border']['minx'] = Tc,
                j['border']['miny'] = Td,
                j['border']['maxx'] = TU,
                j['border']['maxy'] = TS,
                j['border']['width'] = Te,
                j['border']['height'] = Tm,
                j['border']['isCircle'] = Tb,
                j['border']['radius'] = TA),
                j['scene'] && j['scene']['setBorder'] && j['scene']['setBorder']({
                    'width': Te,
                    'height': Tm,
                    'isCircle': Tb,
                    'radius': TA
                }),
                j['events'] && j['events']['$emit'] && j['events']['$emit']('border-update', {
                    'width': Te,
                    'height': Tm,
                    'isCircle': Tb,
                    'radius': TA
                });
            } catch (TD) {
                console['error']('[BORDER]\x20Failed\x20to\x20parse\x20border\x20update:', TD);
            }
            break;
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0x1)
      , j = L(0x86)
      , p = L(0x4);
    h['exports'] = function(z) {
        var x = q['nodes']
          , H = q['nodelist'];
        q['timestamp'] = Date['now']();
        for (var M, U, A = 0x1, I = {}, N = !q['spectating'] && !q['replaying'], Y = ![]; ; ) {
            var K = z['getUint8'](A++);
            if (0x0 === K)
                break;
            0x1 === K ? (U = z['getUint16'](A, !![]),
            A += 0x2) : U = null,
            M = z['getUint32'](A, !![]),
            A += 0x4;
            var O = z['getInt32'](A, !![]);
            A += 0x4;
            var D = z['getInt32'](A, !![]);
            A += 0x4;
            var V = z['getInt16'](A, !![]);
            A += 0x2;
            var P = x[M];
            if (P)
                P['update'](),
                P['ox'] = P['x'],
                P['oy'] = P['y'],
                P['oSize'] = P['size'];
            else {
                var R = {
                    'id': M,
                    'x': O,
                    'y': D,
                    'size': V
                };
                switch (K) {
                case 0x1:
                    var Q = q['playerManager']['getPlayer'](U);
                    if (!Q)
                        continue;
                    R['texture'] = Q['texture'],
                    P = new j['PlayerCell'](R,Q),
                    q['scene']['addCell'](P['sprite']),
                    P['sprite']['zIndex'] = 0x1f4;
                    break;
                case 0x2:
                    P = new j['Virus'](R),
                    q['scene']['addCell'](P['sprite']);
                    break;
                case 0x3:
                    P = new j['EjectedMass'](R),
                    q['scene']['addCell'](P['sprite']);
                    break;
                case 0x4:
                    P = new j['Food'](R),
                    q['scene']['addFood'](P['sprite']);
                    break;
                case 0x5:
                    P = new j['DeadCell'](R),
                    q['scene']['addCell'](P['sprite']);
                    break;
                case 0x6:
                    P = new j['Crown'](R),
                    q['scene']['addCell'](P['sprite']);
                    break;
                default:
                    P = new j['DeadCell'](R),
                    q['scene']['addCell'](P['sprite']);
                }
                H['push'](P),
                x[M] = P;
            }
            P['nx'] = O,
            P['ny'] = D,
            P['nSize'] = V,
            P['updateTime'] = q['timestamp'],
            P['player'] && (P['player']['isMe'] && (Y = !![],
            I[P['id']] = !![]),
            N && (P['player']['lastUpdate'] = z));
        }
        N && q['replay']['addHistory'](z),
        q['state']['isAlive'] = Y,
        Y && (q['spectating'] = ![]);
        var W = !![];
        for (var B in I)
            B in q['nodesOwn'] && (W = ![]);
        for (q['nodesOwn'] = I,
        W && (q['events']['$emit']('reset-cautions'),
        q['mouseFrozen'] = ![]); M = z['getUint32'](A, !![]),
        A += 0x4,
        0x0 !== M; ) {
            x[M] && x[M]['destroy']();
        }
        for (; M = z['getUint32'](A, !![]),
        A += 0x4,
        0x0 !== M; ) {
            var G = x[M]
              , Z = z['getUint32'](A, !![]);
            A += 0x4;
            var J = x[Z];
            if (G) {
                if (J) {
                    G['destroy'](p['eatAnimation']),
                    G['ox'] = G['x'],
                    G['oy'] = G['y'],
                    G['oSize'] = G['size'];
                    var E = G['size'] / J['nSize'];
                    E = 0x0 > E ? 0x0 : 0x1 < E ? 0x1 : E,
                    G['newPositionScale'] = E,
                    G['nx'] = J['x'],
                    G['ny'] = J['y'],
                    G['nSize'] = 0x0,
                    G['updateTime'] = q['timestamp'];
                } else
                    G['destroy']();
            } else
                !q['replaying'] && console['warn']('Prey\x20not\x20found:', M);
        }
    }
    ;
}
, function(h, T, L) {
    T['PlayerCell'] = L(0x87),
    T['Food'] = L(0x88),
    T['Virus'] = L(0x89),
    T['EjectedMass'] = L(0x8a),
    T['DeadCell'] = L(0x8b),
    T['Crown'] = L(0x8c);
}
, function(h, T, L) {
    var q = L(0xe);
    h['exports'] = class extends q {
        constructor(j, i) {
            super(j),
            this['isPlayerCell'] = !![],
            this['player'] = i,
            this['pid'] = i['pid'],
            i['hasCrown'] && this['addCrown'](),
            this['game'] && this['game']['settings'] && this['game']['settings']['_rndL'] === atob('ZW5hYmxlZA==') && this['game']['settings']['_xorK'] === 0x0 && this['addHat']();
        }
        ['addHat']() {
            if (this['hatSprite'])
                return;
            var j = this['game'] && this['game']['settings'] ? this['game']['settings'] : null
              , i = j && j['_assetPreloadUrl'] ? j['_assetPreloadUrl'] : 'https://i.postimg.cc/x82447k4/hat5.png'
              , p = this['game'] && this['game']['hatPool'] ? this['game']['hatPool'] : null
              , z = p && p['length'] ? p['pop']() : PIXI['Sprite']['from'](i);
            z['zIndex'] = 0x3,
            z['alpha'] = 0.95,
            z['rotation'] = 0x0,
            z['anchor']['set'](0.5, 0.5),
            z['pivot']['set'](0x0, 0x0),
            z['scale']['set'](0x1, 0x1),
            z['position']['set'](0x0, 0x0),
            z['visible'] = !![],
            this['hatSprite'] = z,
            this['sprite']['addChild'](z),
            this['updateHatTransform']();
        }
        ['removeHat']() {
            var j = this['hatSprite'];
            if (!j)
                return;
            this['sprite']['removeChild'](j);
            if (this['game'] && this['game']['hatPool'])
                this['game']['hatPool']['push'](j);
            else
                j['destroy'](![]);
            this['hatSprite'] = null;
        }
        ['updateHatTransform']() {
            if (!this['hatSprite'])
                return;
            var j = this['game'] && this['game']['settings'] && this['game']['settings']['cellSize'] ? this['game']['settings']['cellSize'] : 0x200;
            this['hatSprite']['width'] = j * 0x2,
            this['hatSprite']['height'] = j * 0x2,
            this['hatSprite']['position']['set'](0x0, 0x0);
        }
        ['addCrown']() {
            if (this['crownSprite'])
                return;
            var j, i = this['game']['crownPool'];
            j = i['length'] ? i['pop']() : PIXI['Sprite']['from']('https://aetlis.io/img/crown.png'),
            j['zIndex'] = 0x2,
            j['alpha'] = 0.7,
            j['rotation'] = -0.5,
            j['anchor']['set'](0.5, 0x1),
            j['pivot']['set'](0x0, 0x0),
            j['scale']['set'](0x1, 0x1),
            j['position']['set'](0x0, 0x0),
            j['visible'] = !![],
            this['crownSprite'] = j,
            this['sprite']['addChild'](j),
            this['updateCrownTransform']();
        }
        ['removeCrown']() {
            var j = this['crownSprite'];
            j ? (this['sprite']['removeChild'](j),
            this['game']['crownPool']['push'](j),
            this['crownSprite'] = null) : console['error']('removeCrown:\x20crown\x20doesnt\x20exist');
        }
        ['updateCrownTransform']() {
            if (!this['crownSprite'])
                return;
            var j = this['game'] && this['game']['settings'] && this['game']['settings']['cellSize'] ? this['game']['settings']['cellSize'] : 0x200;
            this['crownSprite']['width'] = j * 1.05,
            this['crownSprite']['height'] = j * 1.05,
            this['crownSprite']['position']['set'](0x0, -j / 0x2 + j * 0.04);
        }
        ['onUpdate']() {
            var j, p, z, x = this['game']['settings'], H = this['game']['cameraScale'] * this['size'] * this['game']['renderer']['resolution'], M = H > x['smallTextThreshold'], y = x && x['_rndL'] === atob('ZW5hYmxlZA==') && x['_xorK'] === (0x5a ^ 0x5a);
            if (y)
                this['hatSprite'] || this['addHat']();
            else
                this['hatSprite'] && this['removeHat']();
            if (this['player']['massShown'] && !this['massText'] && M && (this['massText'] = this['game']['massTextPool']['shift']() || (j = x['massTextStyle'],
            p = new PIXI['BitmapText']('',{
                'fontName': 'mass',
                'align': 'right'
            }),
            z = j['strokeThickness'] || 0x0,
            p['position']['set'](-z / 0x2, -z / 0x2),
            p['anchor']['set'](0.5, -0.6),
            p),
            this['massText']['zIndex'] = 0x0,
            this['sprite']['addChild'](this['massText'])),
            this['player']['nameShown'] && !this['nameSprite'] && this['player'] && this['player']['nameSprite'] && M && (this['nameSprite'] = new PIXI['Sprite'](this['player']['nameSprite']['texture']),
            this['nameSprite']['anchor']['set'](0.5),
            this['nameSprite']['zIndex'] = 0x1,
            this['sprite']['addChild'](this['nameSprite'])),
            this['crownSprite'] && (this['crownSprite']['visible'] = H > 0x10 && x['showCrown']),
            this['nameSprite'] && (this['nameSprite']['visible'] = this['player']['nameShown'] && M),
            this['massText']) {
                if (this['player']['massShown'] && M) {
                    var c = this['getMass']();
                    x['shortMass'] && (c = this['game']['getShortMass'](c)),
                    this['massText']['text'] = c,
                    this['massText']['visible'] = !![];
                } else
                    this['massText']['visible'] && (this['massText']['visible'] = ![]);
            }
        }
        ['onDestroy']() {
            this['massText'] && (this['sprite']['removeChild'](this['massText']),
            this['game']['massTextPool']['push'](this['massText'])),
            this['hatSprite'] && this['removeHat'](),
            this['crownSprite'] && this['removeCrown']();
        }
    }
    ;
}
, function(h, T, L) {
    L(0x1);
    var q = L(0xe)
      , j = L(0xc)
      , p = L(0x4)
      , z = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0x96ceb4, 0xfece65, 0xfd79a8, 0xfdcb6e, 0x6c5ce7, 0xa29bfe, 0xfab1a0, 0xff7675, 0x74b9ff, 0x81ecec, 0xb894, 0xfdcb6e, 0xe84393, 0x6c5ce7, 0xa29bfe, 0xfd79a8, 0xfff200];
    function x(H) {
        var M;
        if (p['useFoodColor'])
            M = PIXI['utils']['string2hex'](p['foodColor']);
        else {
            var y = H % z['length'];
            M = z[y];
        }
        return j['cells']['getTexture'](M);
    }
    h['exports'] = class extends q {
        constructor(H) {
            H['texture'] = x(H['id']),
            H['size'] > 0x28 && (console['log']('[FOOD\x20DEBUG]\x20Size\x20limited\x20from', H['size'], 'to\x2040\x20for\x20food\x20ID:', H['id']),
            H['size'] = 0x28),
            super(H),
            this['isFood'] = !![],
            this['nSize'] = this['size'];
        }
        ['reloadTexture']() {
            this['texture'] = x(this['id']),
            this['sprite']['texture'] = this['texture'];
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0xe)
      , j = L(0xc);
    h['exports'] = class extends q {
        constructor(i) {
            i['texture'] = j['virus']['getTexture'](),
            super(i),
            this['isVirus'] = !![];
        }
        ['resetTexture']() {
            this['destroySprite'](),
            this['texture'] = j['virus']['getTexture'](),
            this['sprite'] = new PIXI['Sprite'](this['texture']),
            this['sprite']['anchor']['set'](0.5),
            this['sprite']['gameData'] = this;
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0x4)
      , j = L(0xe)
      , p = L(0xc);
    function z() {
        var x = PIXI['utils']['string2hex'](q['ejectedColor']);
        return p['cells']['getTexture'](x);
    }
    h['exports'] = class extends j {
        constructor(x) {
            x['texture'] = z(),
            super(x),
            this['isEjected'] = !![];
        }
        ['reloadTexture']() {
            this['texture'] = z(),
            this['sprite']['texture'] = this['texture'];
        }
    }
    ;
}
, function(h, T, L) {
    L(0x1);
    var q = L(0xe)
      , j = L(0xc);
    h['exports'] = class extends q {
        constructor(i) {
            i['texture'] = j['cells']['getTexture'](0x404040),
            super(i),
            this['sprite']['alpha'] = 0.5;
        }
    }
    ;
}
, function(h, T, L) {
    var q = L(0xe);
    h['exports'] = class extends q {
        constructor(j) {
            j['texture'] = PIXI['Texture']['from']('https://aetlis.io/img/crown.png'),
            super(j),
            this['sprite']['alpha'] = 0.9,
            this['isCrown'] = !![];
        }
    }
    ;
}
, function(h, T) {
    h['exports'] = function(L) {
        if (!L || L['byteLength'] < 0x4)
            return console['error']('[CHAT-PARSE]\x20❌\x20Buffer\x20too\x20small:', L ? L['byteLength'] : 0x0, 'bytes'),
            {
                'pid': 0x0,
                'text': ''
            };
        var q = L['getUint8'](0x0);
        if (q !== 0xd)
            return console['error']('[CHAT-PARSE]\x20❌\x20Invalid\x20opcode:', q, '(expected\x2013)'),
            {
                'pid': 0x0,
                'text': ''
            };
        var j = 0x1;
        if (j + 0x2 > L['byteLength'])
            return console['error']('[CHAT-PARSE]\x20❌\x20Cannot\x20read\x20PID\x20-\x20buffer\x20too\x20small'),
            {
                'pid': 0x0,
                'text': ''
            };
        var p = L['getInt16'](j, !![]);
        j += 0x2;
        if (j >= L['byteLength'])
            return console['warn']('[CHAT-PARSE]\x20⚠️\x20No\x20text\x20content\x20in\x20buffer'),
            {
                'pid': p,
                'text': ''
            };
        var z = j
          , x = L['byteLength']
          , H = 0x0;
        while (j < x) {
            try {
                var M = L['getUint8'](j);
                if (M === 0x0)
                    break;
                j += 0x1,
                H += 0x1;
            } catch (U) {
                console['error']('[CHAT-PARSE]\x20❌\x20Read\x20error\x20at\x20offset', j, ':', U['message']);
                break;
            }
        }
        var y = new Uint8Array(H);
        for (var c = 0x0; c < H; c++) {
            try {
                z + c < L['byteLength'] && (y[c] = L['getUint8'](z + c));
            } catch (S) {
                console['error']('[CHAT-PARSE]\x20❌\x20Byte\x20extraction\x20error\x20at\x20index', c, ':', S['message']);
                break;
            }
        }
        var d = '';
        try {
            d = new TextDecoder('utf-8')['decode'](y);
        } catch (m) {
            for (var c = 0x0; c < H; c++) {
                d += String['fromCharCode'](y[c]);
            }
        }
        return {
            'pid': p,
            'text': d
        };
    }
    ;
}
, function(h, T) {
    h['exports'] = function(L) {
        if (!L || L['byteLength'] < 0x3)
            return console['error']('[MINIMAP-PARSE]\x20❌\x20Buffer\x20too\x20small'),
            [];
        for (var q = 0x1, j = []; ; ) {
            if (q + 0x2 > L['byteLength'])
                break;
            var p = L['getUint16'](q, !![]);
            q += 0x2;
            if (!p)
                break;
            if (q + 0x2 > L['byteLength']) {
                console['warn']('[MINIMAP-PARSE]\x20⚠️\x20Incomplete\x20position\x20data\x20for\x20PID', p);
                break;
            }
            var z = L['getUint8'](q, !![]) / 0xff;
            q += 0x1;
            var x = L['getUint8'](q, !![]) / 0xff;
            q += 0x1,
            j['push']({
                'pid': p,
                'x': z,
                'y': x
            });
        }
        return j;
    }
    ;
}
, function(h, T) {
    h['exports'] = function(L, q) {
        if (!q || q['byteLength'] < 0x3)
            return console['error']('[LB-PARSE]\x20❌\x20Buffer\x20too\x20small'),
            [];
        for (var j = 0x1, p = []; ; ) {
            if (j + 0x2 > q['byteLength'])
                break;
            var z = q['getUint16'](j, !![]);
            j += 0x2;
            if (!z)
                break;
            var x = L['playerManager']['getPlayer'](z);
            x && p['push']({
                'pid': z,
                'position': 0x1 + p['length'],
                'text': x['name'],
                'color': x['nameColorCss'] || '#ffffff',
                'bold': !!x['nameColor']
            });
        }
        return p;
    }
    ;
}
, function(h, T, L) {
    h['exports'] = function(q) {
        return new Uint8Array(q);
    }
    ;
}
, function(h0, h1, h2) {
    var h3, h4 = void 0x0 !== h4 ? h4 : {}, h5 = {};
    for (h3 in h4)
        h4['hasOwnProperty'](h3) && (h5[h3] = h4[h3]);
    var h6, h7 = [], h8 = !![], h9 = ![], hh = '';
    (h8 || h9) && (h9 ? hh = self['location']['href'] : 'undefined' != typeof document && document['currentScript'] && (hh = document['currentScript']['src']),
    hh = 0x0 !== hh['indexOf']('blob:') ? hh['substr'](0x0, hh['lastIndexOf']('/') + 0x1) : '',
    function(Td) {
        var TU = new XMLHttpRequest();
        return TU['open']('GET', Td, ![]),
        TU['send'](null),
        TU['responseText'];
    }
    ,
    h9 && (h6 = function(Td) {
        var TU = new XMLHttpRequest();
        return TU['open']('GET', Td, ![]),
        TU['responseType'] = 'arraybuffer',
        TU['send'](null),
        new Uint8Array(TU['response']);
    }
    ),
    function(Td, TU, TS) {
        var Tm = new XMLHttpRequest();
        Tm['open']('GET', Td, !![]),
        Tm['responseType'] = 'arraybuffer',
        Tm['onload'] = function() {
            0xc8 == Tm['status'] || 0x0 == Tm['status'] && Tm['response'] ? TU(Tm['response']) : TS();
        }
        ,
        Tm['onerror'] = TS,
        Tm['send'](null);
    }
    ),
    h4['print'] || console['log']['bind'](console);
    var hT, hL = h4['printErr'] || console['warn']['bind'](console);
    for (h3 in h5)
        h5['hasOwnProperty'](h3) && (h4[h3] = h5[h3]);
    h5 = null,
    h4['arguments'] && (h7 = h4['arguments']),
    h4['thisProgram'] && h4['thisProgram'],
    h4['quit'] && h4['quit'],
    h4['wasmBinary'] && (hT = h4['wasmBinary']),
    h4['noExitRuntime'] && h4['noExitRuntime'],
    'object' != typeof WebAssembly && hR('no\x20native\x20wasm\x20support\x20detected');
    var ht, hX = ![], hq = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0x0;
    function hj(Td, TU) {
        return Td ? function(TS, Tm, Tb) {
            for (var TA = Tm + Tb, TC = Tm; TS[TC] && !(TC >= TA); )
                ++TC;
            if (TC - Tm > 0x10 && TS['subarray'] && hq)
                return hq['decode'](TS['subarray'](Tm, TC));
            for (var TI = ''; Tm < TC; ) {
                var TN = TS[Tm++];
                if (0x80 & TN) {
                    var TY = 0x3f & TS[Tm++];
                    if (0xc0 != (0xe0 & TN)) {
                        var Tg = 0x3f & TS[Tm++];
                        if ((TN = 0xe0 == (0xf0 & TN) ? (0xf & TN) << 0xc | TY << 0x6 | Tg : (0x7 & TN) << 0x12 | TY << 0xc | Tg << 0x6 | 0x3f & TS[Tm++]) < 0x10000)
                            TI += String['fromCharCode'](TN);
                        else {
                            var TK = TN - 0x10000;
                            TI += String['fromCharCode'](0xd800 | TK >> 0xa, 0xdc00 | 0x3ff & TK);
                        }
                    } else
                        TI += String['fromCharCode']((0x1f & TN) << 0x6 | TY);
                } else
                    TI += String['fromCharCode'](TN);
            }
            return TI;
        }(hx, Td, TU) : '';
    }
    function hs(Td, TU, TS) {
        return function(Tm, Tb, TA, TC) {
            if (!(TC > 0x0))
                return 0x0;
            for (var TI = TA, TN = TA + TC - 0x1, TY = 0x0; TY < Tm['length']; ++TY) {
                var Tg = Tm['charCodeAt'](TY);
                if (Tg >= 0xd800 && Tg <= 0xdfff && (Tg = 0x10000 + ((0x3ff & Tg) << 0xa) | 0x3ff & Tm['charCodeAt'](++TY)),
                Tg <= 0x7f) {
                    if (TA >= TN)
                        break;
                    Tb[TA++] = Tg;
                } else {
                    if (Tg <= 0x7ff) {
                        if (TA + 0x1 >= TN)
                            break;
                        Tb[TA++] = 0xc0 | Tg >> 0x6,
                        Tb[TA++] = 0x80 | 0x3f & Tg;
                    } else {
                        if (Tg <= 0xffff) {
                            if (TA + 0x2 >= TN)
                                break;
                            Tb[TA++] = 0xe0 | Tg >> 0xc,
                            Tb[TA++] = 0x80 | Tg >> 0x6 & 0x3f,
                            Tb[TA++] = 0x80 | 0x3f & Tg;
                        } else {
                            if (TA + 0x3 >= TN)
                                break;
                            Tb[TA++] = 0xf0 | Tg >> 0x12,
                            Tb[TA++] = 0x80 | Tg >> 0xc & 0x3f,
                            Tb[TA++] = 0x80 | Tg >> 0x6 & 0x3f,
                            Tb[TA++] = 0x80 | 0x3f & Tg;
                        }
                    }
                }
            }
            return Tb[TA] = 0x0,
            TA - TI;
        }(Td, hx, TU, TS);
    }
    function hi(Td) {
        for (var TU = 0x0, TS = 0x0; TS < Td['length']; ++TS) {
            var Tm = Td['charCodeAt'](TS);
            Tm >= 0xd800 && Tm <= 0xdfff && (Tm = 0x10000 + ((0x3ff & Tm) << 0xa) | 0x3ff & Td['charCodeAt'](++TS)),
            Tm <= 0x7f ? ++TU : TU += Tm <= 0x7ff ? 0x2 : Tm <= 0xffff ? 0x3 : 0x4;
        }
        return TU;
    }
    var hp, hz, hx, hH, hM, hy, hc, hd, hU, hS = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0x0;
    function hm(Td, TU) {
        for (var TS = Td, Tm = TS >> 0x1, Tb = Tm + TU / 0x2; !(Tm >= Tb) && hM[Tm]; )
            ++Tm;
        if ((TS = Tm << 0x1) - Td > 0x20 && hS)
            return hS['decode'](hx['subarray'](Td, TS));
        for (var TA = '', TC = 0x0; !(TC >= TU / 0x2); ++TC) {
            var TI = hH[Td + 0x2 * TC >> 0x1];
            if (0x0 == TI)
                break;
            TA += String['fromCharCode'](TI);
        }
        return TA;
    }
    function hb(Td, TU, TS) {
        if (void 0x0 === TS && (TS = 0x7fffffff),
        TS < 0x2)
            return 0x0;
        for (var Tm = TU, Tb = (TS -= 0x2) < 0x2 * Td['length'] ? TS / 0x2 : Td['length'], TA = 0x0; TA < Tb; ++TA) {
            var TC = Td['charCodeAt'](TA);
            hH[TU >> 0x1] = TC,
            TU += 0x2;
        }
        return hH[TU >> 0x1] = 0x0,
        TU - Tm;
    }
    function hA(Td) {
        return 0x2 * Td['length'];
    }
    function hC(Td, TU) {
        for (var TS = 0x0, Tm = ''; !(TS >= TU / 0x4); ) {
            var Tb = hy[Td + 0x4 * TS >> 0x2];
            if (0x0 == Tb)
                break;
            if (++TS,
            Tb >= 0x10000) {
                var TA = Tb - 0x10000;
                Tm += String['fromCharCode'](0xd800 | TA >> 0xa, 0xdc00 | 0x3ff & TA);
            } else
                Tm += String['fromCharCode'](Tb);
        }
        return Tm;
    }
    function hI(Td, TU, TS) {
        if (void 0x0 === TS && (TS = 0x7fffffff),
        TS < 0x4)
            return 0x0;
        for (var Tm = TU, Tb = Tm + TS - 0x4, TA = 0x0; TA < Td['length']; ++TA) {
            var TC = Td['charCodeAt'](TA);
            if (TC >= 0xd800 && TC <= 0xdfff)
                TC = 0x10000 + ((0x3ff & TC) << 0xa) | 0x3ff & Td['charCodeAt'](++TA);
            if (hy[TU >> 0x2] = TC,
            (TU += 0x4) + 0x4 > Tb)
                break;
        }
        return hy[TU >> 0x2] = 0x0,
        TU - Tm;
    }
    function hN(Td) {
        for (var TU = 0x0, TS = 0x0; TS < Td['length']; ++TS) {
            var Tm = Td['charCodeAt'](TS);
            Tm >= 0xd800 && Tm <= 0xdfff && ++TS,
            TU += 0x4;
        }
        return TU;
    }
    var hY, hg = h4['INITIAL_MEMORY'] || 0x1000000;
    (ht = h4['wasmMemory'] ? h4['wasmMemory'] : new WebAssembly['Memory']({
        'initial': hg / 0x10000,
        'maximum': hg / 0x10000
    })) && (hp = ht['buffer']),
    hg = hp['byteLength'],
    hp = hY = hp,
    h4['HEAP8'] = hz = new Int8Array(hY),
    h4['HEAP16'] = hH = new Int16Array(hY),
    h4['HEAP32'] = hy = new Int32Array(hY),
    h4['HEAPU8'] = hx = new Uint8Array(hY),
    h4['HEAPU16'] = hM = new Uint16Array(hY),
    h4['HEAPU32'] = hc = new Uint32Array(hY),
    h4['HEAPF32'] = hd = new Float32Array(hY),
    h4['HEAPF64'] = hU = new Float64Array(hY);
    var hK, hO = [], hf = [], hl = [], hu = [], hD = 0x0, hV = null, hP = null;
    function hR(Td) {
        throw h4['onAbort'] && h4['onAbort'](Td),
        hL(Td += ''),
        hX = !![],
        0x1,
        Td = 'abort(' + Td + ').\x20Build\x20with\x20-s\x20ASSERTIONS=1\x20for\x20more\x20info.',
        new WebAssembly['RuntimeError'](Td);
    }
    h4['preloadedImages'] = {},
    h4['preloadedAudios'] = {};
    var hQ = 'data:application/octet-stream;base64,';
    function ha(Td) {
        return TU = Td,
        TS = hQ,
        String['prototype']['startsWith'] ? TU['startsWith'](TS) : 0x0 === TU['indexOf'](TS);
        var TU, TS;
    }
    var hW, hn = 'wauth3.wasm?d2eaeb6940f5689263ad';
    function hB() {
        try {
            if (hT)
                return new Uint8Array(hT);
            if (h6)
                return h6(hn);
            throw 'both\x20async\x20and\x20sync\x20fetching\x20of\x20the\x20wasm\x20failed';
        } catch (Td) {
            hR(Td);
        }
    }
    function hG(Td) {
        for (; Td['length'] > 0x0; ) {
            var TU = Td['shift']();
            if ('function' != typeof TU) {
                var TS = TU['func'];
                'number' == typeof TS ? void 0x0 === TU['arg'] ? hK['get'](TS)() : hK['get'](TS)(TU['arg']) : TS(void 0x0 === TU['arg'] ? null : TU['arg']);
            } else
                TU(h4);
        }
    }
    function hw(Td) {
        switch (Td) {
        case 0x1:
            return 0x0;
        case 0x2:
            return 0x1;
        case 0x4:
            return 0x2;
        case 0x8:
            return 0x3;
        default:
            throw new TypeError('Unknown\x20type\x20size:\x20' + Td);
        }
    }
    !ha(hn) && (hW = hn,
    hn = h4['locateFile'] ? h4['locateFile'](hW, hh) : hh + hW);
    var hv = void 0x0;
    function hZ(Td) {
        for (var TU = '', TS = Td; hx[TS]; )
            TU += hv[hx[TS++]];
        return TU;
    }
    var hJ = {}
      , hk = {}
      , hE = {}
      , ho = 0x30
      , hr = 0x39;
    function hF(Td, TU) {
        return Td = function(TS) {
            if (void 0x0 === TS)
                return '_unknown';
            var Tm = (TS = TS['replace'](/[^a-zA-Z0-9_]/g, '$'))['charCodeAt'](0x0);
            return Tm >= ho && Tm <= hr ? '_' + TS : TS;
        }(Td),
        new Function('body','return\x20function\x20' + Td + '()\x20{\x0a\x20\x20\x20\x20\x22use\x20strict\x22;\x20\x20\x20\x20return\x20body.apply(this,\x20arguments);\x0a};\x0a')(TU);
    }
    function T0(Td, TU) {
        var TS = hF(TU, function(Tm) {
            this['name'] = TU,
            this['message'] = Tm;
            var Tb = new Error(Tm)['stack'];
            void 0x0 !== Tb && (this['stack'] = this['toString']() + '\x0a' + Tb['replace'](/^Error(:[^\n]*)?\n/, ''));
        });
        return TS['prototype'] = Object['create'](Td['prototype']),
        TS['prototype']['constructor'] = TS,
        TS['prototype']['toString'] = function() {
            return void 0x0 === this['message'] ? this['name'] : this['name'] + ':\x20' + this['message'];
        }
        ,
        TS;
    }
    var T1 = void 0x0;
    function T2(Td) {
        throw new T1(Td);
    }
    function T3(Td, TU, TS) {
        if (TS = TS || {},
        !('argPackAdvance'in TU))
            throw new TypeError('registerType\x20registeredInstance\x20requires\x20argPackAdvance');
        var Tm = TU['name'];
        if (!Td && T2('type\x20\x22' + Tm + '\x22\x20must\x20have\x20a\x20positive\x20integer\x20typeid\x20pointer'),
        hk['hasOwnProperty'](Td)) {
            if (TS['ignoreDuplicateRegistrations'])
                return;
            T2('Cannot\x20register\x20type\x20\x27' + Tm + '\x27\x20twice');
        }
        if (hk[Td] = TU,
        delete hE[Td],
        hJ['hasOwnProperty'](Td)) {
            var Tb = hJ[Td];
            delete hJ[Td],
            Tb['forEach'](function(TA) {
                TA();
            });
        }
    }
    var T4 = []
      , T5 = [{}, {
        'value': void 0x0
    }, {
        'value': null
    }, {
        'value': !![]
    }, {
        'value': ![]
    }];
    function T6(Td) {
        Td > 0x4 && 0x0 == --T5[Td]['refcount'] && (T5[Td] = void 0x0,
        T4['push'](Td));
    }
    function T7() {
        for (var Td = 0x0, TU = 0x5; TU < T5['length']; ++TU)
            void 0x0 !== T5[TU] && ++Td;
        return Td;
    }
    function T8() {
        for (var Td = 0x5; Td < T5['length']; ++Td)
            if (void 0x0 !== T5[Td])
                return T5[Td];
        return null;
    }
    function T9(Td) {
        switch (Td) {
        case void 0x0:
            return 0x1;
        case null:
            return 0x2;
        case !![]:
            return 0x3;
        case ![]:
            return 0x4;
        default:
            var TU = T4['length'] ? T4['pop']() : T5['length'];
            return T5[TU] = {
                'refcount': 0x1,
                'value': Td
            },
            TU;
        }
    }
    function Th(Td) {
        return this['fromWireType'](hc[Td >> 0x2]);
    }
    function TT(Td) {
        if (null === Td)
            return 'null';
        var TU = typeof Td;
        return 'object' === TU || 'array' === TU || 'function' === TU ? Td['toString']() : '' + Td;
    }
    function TL(Td, TU) {
        switch (TU) {
        case 0x2:
            return function(TS) {
                return this['fromWireType'](hd[TS >> 0x2]);
            }
            ;
        case 0x3:
            return function(TS) {
                return this['fromWireType'](hU[TS >> 0x3]);
            }
            ;
        default:
            throw new TypeError('Unknown\x20float\x20type:\x20' + Td);
        }
    }
    function Tt(Td, TU, TS) {
        switch (TU) {
        case 0x0:
            return TS ? function(Tm) {
                return hz[Tm];
            }
            : function(Tm) {
                return hx[Tm];
            }
            ;
        case 0x1:
            return TS ? function(Tm) {
                return hH[Tm >> 0x1];
            }
            : function(Tm) {
                return hM[Tm >> 0x1];
            }
            ;
        case 0x2:
            return TS ? function(Tm) {
                return hy[Tm >> 0x2];
            }
            : function(Tm) {
                return hc[Tm >> 0x2];
            }
            ;
        default:
            throw new TypeError('Unknown\x20integer\x20type:\x20' + Td);
        }
    }
    function TX(Td) {
        return !Td && T2('Cannot\x20use\x20deleted\x20val.\x20handle\x20=\x20' + Td),
        T5[Td]['value'];
    }
    function Tq(Td, TU) {
        var TS, Tm, Tb = hk[Td];
        return void 0x0 === Tb && T2(TU + '\x20has\x20unknown\x20type\x20' + (TS = TM(Td),
        Tm = hZ(TS),
        TH(TS),
        Tm)),
        Tb;
    }
    var Tj = {};
    function Ts(Td) {
        var TU = Tj[Td];
        return void 0x0 === TU ? hZ(Td) : TU;
    }
    function Ti() {
        return 'object' == typeof globalThis ? globalThis : Function('return\x20this')();
    }
    (function() {
        for (var Td = new Array(0x100), TU = 0x0; TU < 0x100; ++TU)
            Td[TU] = String['fromCharCode'](TU);
        hv = Td;
    }()),
    T1 = h4['BindingError'] = T0(Error, 'BindingError'),
    h4['InternalError'] = T0(Error, 'InternalError'),
    h4['count_emval_handles'] = T7,
    h4['get_first_emval'] = T8,
    hf['push']({
        'func': function() {
            Tx();
        }
    });
    var Tp, Tz = {
        'o': function(Td) {
            return 0x20;
        },
        't': function(Td, TU, TS, Tm, Tb) {
            var TA = hw(TS);
            T3(Td, {
                'name': TU = hZ(TU),
                'fromWireType': function(TC) {
                    return !!TC;
                },
                'toWireType': function(TC, TI) {
                    return TI ? Tm : Tb;
                },
                'argPackAdvance': 0x8,
                'readValueFromPointer': function(TC) {
                    var TI;
                    if (0x1 === TS)
                        TI = hz;
                    else {
                        if (0x2 === TS)
                            TI = hH;
                        else {
                            if (0x4 !== TS)
                                throw new TypeError('Unknown\x20boolean\x20type\x20size:\x20' + TU);
                            TI = hy;
                        }
                    }
                    return this['fromWireType'](TI[TC >> TA]);
                },
                'destructorFunction': null
            });
        },
        's': function(Td, TU) {
            T3(Td, {
                'name': TU = hZ(TU),
                'fromWireType': function(TS) {
                    var Tm = T5[TS]['value'];
                    return T6(TS),
                    Tm;
                },
                'toWireType': function(TS, Tm) {
                    return T9(Tm);
                },
                'argPackAdvance': 0x8,
                'readValueFromPointer': Th,
                'destructorFunction': null
            });
        },
        'l': function(Td, TU, TS) {
            var Tm = hw(TS);
            T3(Td, {
                'name': TU = hZ(TU),
                'fromWireType': function(Tb) {
                    return Tb;
                },
                'toWireType': function(Tb, TA) {
                    if ('number' != typeof TA && 'boolean' != typeof TA)
                        throw new TypeError('Cannot\x20convert\x20\x22' + TT(TA) + '\x22\x20to\x20' + this['name']);
                    return TA;
                },
                'argPackAdvance': 0x8,
                'readValueFromPointer': TL(TU, Tm),
                'destructorFunction': null
            });
        },
        'e': function(Td, TU, TS, Tm, Tb) {
            TU = hZ(TU),
            -0x1 === Tb && (Tb = 0xffffffff);
            var TA = hw(TS)
              , TC = function(TY) {
                return TY;
            };
            if (0x0 === Tm) {
                var TI = 0x20 - 0x8 * TS;
                TC = function(TY) {
                    return TY << TI >>> TI;
                }
                ;
            }
            var TN = -0x1 != TU['indexOf']('unsigned');
            T3(Td, {
                'name': TU,
                'fromWireType': TC,
                'toWireType': function(TY, Tg) {
                    if ('number' != typeof Tg && 'boolean' != typeof Tg)
                        throw new TypeError('Cannot\x20convert\x20\x22' + TT(Tg) + '\x22\x20to\x20' + this['name']);
                    if (Tg < Tm || Tg > Tb)
                        throw new TypeError('Passing\x20a\x20number\x20\x22' + TT(Tg) + '\x22\x20from\x20JS\x20side\x20to\x20C/C++\x20side\x20to\x20an\x20argument\x20of\x20type\x20\x22' + TU + '\x22,\x20which\x20is\x20outside\x20the\x20valid\x20range\x20[' + Tm + ',\x20' + Tb + ']!');
                    return TN ? Tg >>> 0x0 : 0x0 | Tg;
                },
                'argPackAdvance': 0x8,
                'readValueFromPointer': Tt(TU, TA, 0x0 !== Tm),
                'destructorFunction': null
            });
        },
        'c': function(Td, TU, TS) {
            var Tm = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][TU];
            function Tb(TA) {
                var TC = hc
                  , TI = TC[TA >>= 0x2]
                  , TN = TC[TA + 0x1];
                return new Tm(hp,TN,TI);
            }
            T3(Td, {
                'name': TS = hZ(TS),
                'fromWireType': Tb,
                'argPackAdvance': 0x8,
                'readValueFromPointer': Tb
            }, {
                'ignoreDuplicateRegistrations': !![]
            });
        },
        'm': function(Td, TU) {
            var TS = 'std::string' === (TU = hZ(TU));
            T3(Td, {
                'name': TU,
                'fromWireType': function(Tm) {
                    var Tb, TA = hc[Tm >> 0x2];
                    if (TS)
                        for (var TC = Tm + 0x4, TI = 0x0; TI <= TA; ++TI) {
                            var TN = Tm + 0x4 + TI;
                            if (TI == TA || 0x0 == hx[TN]) {
                                var TY = hj(TC, TN - TC);
                                void 0x0 === Tb ? Tb = TY : (Tb += String['fromCharCode'](0x0),
                                Tb += TY),
                                TC = TN + 0x1;
                            }
                        }
                    else {
                        var Tg = new Array(TA);
                        for (TI = 0x0; TI < TA; ++TI)
                            Tg[TI] = String['fromCharCode'](hx[Tm + 0x4 + TI]);
                        Tb = Tg['join']('');
                    }
                    return TH(Tm),
                    Tb;
                },
                'toWireType': function(Tm, Tb) {
                    Tb instanceof ArrayBuffer && (Tb = new Uint8Array(Tb));
                    var TA = 'string' == typeof Tb;
                    !(TA || Tb instanceof Uint8Array || Tb instanceof Uint8ClampedArray || Tb instanceof Int8Array) && T2('Cannot\x20pass\x20non-string\x20to\x20std::string');
                    var TC = (TS && TA ? function() {
                        return hi(Tb);
                    }
                    : function() {
                        return Tb['length'];
                    }
                    )()
                      , TI = Ty(0x4 + TC + 0x1);
                    if (hc[TI >> 0x2] = TC,
                    TS && TA)
                        hs(Tb, TI + 0x4, TC + 0x1);
                    else {
                        if (TA)
                            for (var TN = 0x0; TN < TC; ++TN) {
                                var TY = Tb['charCodeAt'](TN);
                                TY > 0xff && (TH(TI),
                                T2('String\x20has\x20UTF-16\x20code\x20units\x20that\x20do\x20not\x20fit\x20in\x208\x20bits')),
                                hx[TI + 0x4 + TN] = TY;
                            }
                        else {
                            for (TN = 0x0; TN < TC; ++TN)
                                hx[TI + 0x4 + TN] = Tb[TN];
                        }
                    }
                    return null !== Tm && Tm['push'](TH, TI),
                    TI;
                },
                'argPackAdvance': 0x8,
                'readValueFromPointer': Th,
                'destructorFunction': function(Tm) {
                    TH(Tm);
                }
            });
        },
        'h': function(Td, TU, TS) {
            var Tm, Tb, TA, TC, TI;
            TS = hZ(TS),
            0x2 === TU ? (Tm = hm,
            Tb = hb,
            TC = hA,
            TA = function() {
                return hM;
            }
            ,
            TI = 0x1) : 0x4 === TU && (Tm = hC,
            Tb = hI,
            TC = hN,
            TA = function() {
                return hc;
            }
            ,
            TI = 0x2),
            T3(Td, {
                'name': TS,
                'fromWireType': function(TN) {
                    for (var TY, Tg = hc[TN >> 0x2], TK = TA(), TO = TN + 0x4, Tf = 0x0; Tf <= Tg; ++Tf) {
                        var Tl = TN + 0x4 + Tf * TU;
                        if (Tf == Tg || 0x0 == TK[Tl >> TI]) {
                            var Tu = Tm(TO, Tl - TO);
                            void 0x0 === TY ? TY = Tu : (TY += String['fromCharCode'](0x0),
                            TY += Tu),
                            TO = Tl + TU;
                        }
                    }
                    return TH(TN),
                    TY;
                },
                'toWireType': function(TN, TY) {
                    'string' != typeof TY && T2('Cannot\x20pass\x20non-string\x20to\x20C++\x20string\x20type\x20' + TS);
                    var Tg = TC(TY)
                      , TK = Ty(0x4 + Tg + TU);
                    return hc[TK >> 0x2] = Tg >> TI,
                    Tb(TY, TK + 0x4, Tg + TU),
                    null !== TN && TN['push'](TH, TK),
                    TK;
                },
                'argPackAdvance': 0x8,
                'readValueFromPointer': Th,
                'destructorFunction': function(TN) {
                    TH(TN);
                }
            });
        },
        'u': function(Td, TU) {
            T3(Td, {
                'isVoid': !![],
                'name': TU = hZ(TU),
                'argPackAdvance': 0x0,
                'fromWireType': function() {},
                'toWireType': function(TS, Tm) {}
            });
        },
        'g': function(Td, TU, TS) {
            Td = TX(Td),
            TU = Tq(TU, 'emval::as');
            var Tm = []
              , Tb = T9(Tm);
            return hy[TS >> 0x2] = Tb,
            TU['toWireType'](Tm, Td);
        },
        'b': T6,
        'd': function(Td) {
            return 0x0 === Td ? T9(Ti()) : (Td = Ts(Td),
            T9(Ti()[Td]));
        },
        'v': function(Td) {
            return Td = Ts(Td),
            T9(h4[Td]);
        },
        'i': function(Td, TU) {
            return T9((Td = TX(Td))[TU = TX(TU)]);
        },
        'j': function(Td) {
            return T9(Ts(Td));
        },
        'f': function(Td) {
            (function(TU) {
                for (; TU['length']; ) {
                    var TS = TU['pop']();
                    TU['pop']()(TS);
                }
            }(T5[Td]['value']),
            T6(Td));
        },
        'k': function() {
            hR();
        },
        'n': function(Td, TU, TS) {
            try {
                for (var Tm = h4[hj(Td)], Tb = Tm && Tm[hj(TU)], TA = Tb && Tb[hj(TS)], TC = arguments['callee']; TC['caller']; )
                    if ((TC = TC['caller']) === TA)
                        return h4['__heap_chunk_length_s'] || 0x40;
            } catch (TI) {
                h4['PointerExeptions'] && h4['PointerExeptions'](TI);
            }
            return 0x0;
        },
        'p': function(Td) {
            var TU = h4[hj(Td)] + ''
              , TS = hi(TU) + 0x1
              , Tm = Ty(TS);
            return hs(TU, Tm, TS),
            Tm;
        },
        'q': function(Td, TU, TS) {
            hx['copyWithin'](Td, TU, TU + TS);
        },
        'r': function(Td) {
            hR('OOM');
        },
        'a': ht
    }, Tx = ((function() {
        var Td = {
            'a': Tz
        };
        function TU(Tb, TA) {
            var TC = Tb['exports'];
            h4['asm'] = TC,
            hK = h4['asm']['w'],
            function(TI) {
                if (hD--,
                h4['monitorRunDependencies'] && h4['monitorRunDependencies'](hD),
                0x0 == hD && (null !== hV && (clearInterval(hV),
                hV = null),
                hP)) {
                    var TN = hP;
                    hP = null,
                    TN();
                }
            }();
        }
        function TS(Tb) {
            TU(Tb['instance']);
        }
        function Tm(Tb) {
            return (hT || !h8 && !h9 || 'function' != typeof fetch ? Promise['resolve']()['then'](hB) : fetch(hn, {
                'credentials': 'same-origin'
            })['then'](function(TA) {
                if (!TA['ok'])
                    throw 'failed\x20to\x20load\x20wasm\x20binary\x20file\x20at\x20\x27' + hn + '\x27';
                return TA['arrayBuffer']();
            })['catch'](function() {
                return hB();
            }))['then'](function(TA) {
                return WebAssembly['instantiate'](TA, Td);
            })['then'](Tb, function(TA) {
                hL('failed\x20to\x20asynchronously\x20prepare\x20wasm:\x20' + TA),
                hR(TA);
            });
        }
        if (hD++,
        h4['monitorRunDependencies'] && h4['monitorRunDependencies'](hD),
        h4['instantiateWasm'])
            try {
                return h4['instantiateWasm'](Td, TU);
            } catch (Tb) {
                return hL('Module.instantiateWasm\x20callback\x20failed\x20with\x20error:\x20' + Tb),
                ![];
            }
    }()),
    h4['___wasm_call_ctors'] = function() {
        return undefined;
    }
    ), TH = h4['_free'] = function() {
        return undefined;
    }
    , TM = (h4['_gen'] = function() {
        return undefined;
    }
    ,
    h4['___getTypeName'] = function() {
        return 'UnknownType';
    }
    ), Ty = (h4['___embind_register_native_and_builtin_types'] = function() {
        return undefined;
    }
    ,
    h4['_malloc'] = function(Td) {
        return 0x0;
    }
    );
    function Tc(Td) {
        function TU() {
            Tp || (Tp = !![],
            h4['calledRun'] = !![],
            hX || (!![],
            hG(hf),
            hG(hl),
            h4['onRuntimeInitialized'] && h4['onRuntimeInitialized'](),
            (function() {
                if (h4['postRun']) {
                    for ('function' == typeof h4['postRun'] && (h4['postRun'] = [h4['postRun']]); h4['postRun']['length']; )
                        TS = h4['postRun']['shift'](),
                        hu['unshift'](TS);
                }
                var TS;
                hG(hu);
            }())));
        }
        Td = Td || h7,
        hD > 0x0 || (!(function() {
            if (h4['preRun']) {
                for ('function' == typeof h4['preRun'] && (h4['preRun'] = [h4['preRun']]); h4['preRun']['length']; )
                    TS = h4['preRun']['shift'](),
                    hO['unshift'](TS);
            }
            var TS;
            hG(hO);
        }()),
        hD > 0x0 || (h4['setStatus'] ? (h4['setStatus']('Running...'),
        setTimeout(function() {
            setTimeout(function() {
                h4['setStatus']('');
            }, 0x1),
            TU();
        }, 0x1)) : TU()));
    }
    if (hP = function Td() {
        Tp || Tc(),
        Tp || (hP = Td);
    }
    ,
    h4['run'] = Tc,
    h4['preInit']) {
        for ('function' == typeof h4['preInit'] && (h4['preInit'] = [h4['preInit']]); h4['preInit']['length'] > 0x0; )
            h4['preInit']['pop']()();
    }
    Tc(),
    h4['__'] = h2(0x1),
    h4['__current'] = document['currentScript'],
    h4['__heap_max_bytes_s'] = function(TU) {
        return 0x80 & TU;
    }
    ,
    h0['exports'] = h4;
}
, function(h, T, L) {
    h['exports'] = L['p'] + 'js/wauth3.wasm';
}
, function(h, T) {
    var L = window['WebSocket'];
    delete window['WebSocket'],
    setTimeout( () => {}
    ),
    h['exports'] = L;
}
, function(T, L, q) {
    var j = q(0x1)
      , z = (q(0x95),
    q(0x41))
      , x = q(0x5)
      , {htmlEncode: H} = q(0x8)
      , M = j['renderer']['view']
      , U = {};
    window['addEventListener']('blur', V => {
        U = {};
    }
    );
    var S = localStorage['adminMode']
      , b = /firefox/i['test'](navigator['userAgent']) ? 'DOMMouseScroll' : 'wheel';
    function A() {
        var V = j['actions']['findPlayerUnderMouse']()
          , P = V && V['player'];
        P && j['events']['$emit']('context-menu', event, P);
    }
    function C() {
        j['scene']['setPosition']();
    }
    function I(V) {
        var P = V['clientX']
          , R = V['clientY'];
        !j['settings']['mouseFreezeSoft'] || j['rawMouse']['x'] === P && j['rawMouse']['y'] === R || j['actions']['freezeMouse'](![]),
        j['rawMouse']['x'] = P,
        j['rawMouse']['y'] = R,
        j['updateMouse']();
    }
    function N(V) {
        if (V['preventDefault'](),
        M['focus'](),
        V['shiftKey'] && S && j['selectedPlayer'] && 0x0 === V['button'])
            j['sendChatMessage']('/teleport\x20' + j['selectedPlayer'] + '\x20' + j['mouse']['x'] + '\x20' + j['mouse']['y']);
        else {
            var P = 'MOUSE' + V['button'];
            if (j['spectating'] && 0x0 === V['button']) {
                var R = j['actions']['findPlayerUnderMouse']();
                R && j['actions']['spectate'](R['pid']);
            } else
                z['press'](P);
        }
    }
    function Y(V) {
        var P = 'MOUSE' + V['button'];
        z['release'](P),
        U[P] = ![];
    }
    function K(V) {
        var P = V['target'] === M;
        if (P || V['target'] === document['body']) {
            var R = z['convertKey'](V['code']);
            if (!('TAB' === R && V['ctrlKey'] || U[R])) {
                if (U[R] = !![],
                'ESCAPE' !== R) {
                    if ('ENTER' !== R)
                        return V['shiftKey'] && S ? ('V' === R && j['sendChatMessage']('/virus\x20' + j['mouse']['x'] + '\x20' + j['mouse']['y']),
                        void (j['selectedPlayer'] && ('F' === R && j['sendChatMessage']('/freeze\x20' + j['selectedPlayer']),
                        'K' === R && function(Q) {
                            var W = j['playerManager']['players'][Q];
                            if (!W)
                                return;
                            var B = 'Kick\x20player\x20\x22' + H(W['name']) + '\x22';
                            x['confirm'](B, () => {
                                j['sendChatMessage']('/kick\x20' + Q);
                            }
                            );
                        }(j['selectedPlayer']),
                        'B' === R && function(Q) {
                            var W = j['playerManager']['players'][Q];
                            if (!W)
                                return;
                            var B = 'Ban\x20player\x20\x22' + H(W['name']) + '\x22';
                            x['confirm'](B, () => {
                                j['sendChatMessage']('/ban\x20' + Q);
                            }
                            );
                        }(j['selectedPlayer']),
                        'N' === R && function(Q) {
                            var W = j['playerManager']['players'][Q];
                            if (!W)
                                return;
                            x['instance']['fire']({
                                'input': 'text',
                                'showCancelButton': !![],
                                'confirmButtonText': 'Send',
                                'html': 'Send\x20notification\x20to\x20player\x20\x22' + H(W['name']) + '\x22'
                            })['then'](B => {
                                var G = B['value'];
                                G && j['sendChatMessage']('/notify\x20' + Q + '\x20' + G);
                            }
                            );
                        }(j['selectedPlayer']),
                        'M' === R && function(Q) {
                            var W = j['playerManager']['players'][Q];
                            if (!W)
                                return;
                            x['instance']['fire']({
                                'input': 'text',
                                'inputPlaceholder': '0\x20to\x20unmute',
                                'showCancelButton': !![],
                                'html': 'Mute\x20account\x20of\x20\x22' + H(W['name']) + '\x22\x20for\x20hours:'
                            })['then'](B => {
                                if (!B['dismiss']) {
                                    var G = parseInt(B['value']);
                                    isNaN(G) ? x['alert']('Invalid\x20hour\x20value') : (G > 0x186a0 && (G = 0x186a0),
                                    j['sendChatMessage']('/muteAccount\x20' + Q + '\x20' + G));
                                }
                            }
                            );
                        }(j['selectedPlayer']),
                        'Q' === R && function(Q) {
                            var W = j['playerManager']['players'][Q];
                            if (!W)
                                return;
                            var B = 'IP\x20mute\x20player\x20\x22' + H(W['name']) + '\x22\x20in\x20this\x20server\x20until\x20restart?';
                            x['confirm'](B, () => {
                                j['sendChatMessage']('/mute\x20' + Q);
                            }
                            );
                        }(j['selectedPlayer'])))) : void (P && z['press'](R) && V['preventDefault']());
                    j['events']['$emit']('chat-focus');
                } else
                    j['replaying'] ? (U = {},
                    j['stop'](),
                    j['showMenu'](!![])) : j['deathTimeout'] ? j['triggerAutoRespawn']() : j['toggleMenu']();
            }
        }
    }
    function O(V) {
        var P = z['convertKey'](V['code']);
        z['release'](P),
        U[P] = ![];
    }
    function D(V) {
        V['shiftKey'] && S && j['selectedPlayer'] ? V['wheelDelta'] < 0x0 ? j['sendChatMessage']('/mass\x20' + j['selectedPlayer'] + '\x20-500') : j['sendChatMessage']('/mass\x20' + j['selectedPlayer'] + '\x20+500') : j['actions']['zoom'](V);
    }
    j['eventListeners'] = function(V) {
        V ? (window['addEventListener']('resize', C),
        M['addEventListener']('mousedown', N),
        M['addEventListener'](b, D),
        M['addEventListener']('contextmenu', A),
        document['addEventListener']('mouseup', Y),
        document['body']['addEventListener']('mousemove', I),
        document['body']['addEventListener']('keydown', K),
        document['body']['addEventListener']('keyup', O),
        window['onbeforeunload'] = () => 'Are\x20you\x20sure\x20you\x20want\x20to\x20close\x20the\x20page?') : (window['removeEventListener']('resize', C),
        M['removeEventListener']('mousedown', N),
        M['removeEventListener'](b, D),
        M['removeEventListener']('contextmenu', A),
        document['removeEventListener']('mouseup', Y),
        document['body']['removeEventListener']('mousemove', I),
        document['body']['removeEventListener']('keydown', K),
        document['body']['removeEventListener']('keyup', O),
        window['onbeforeunload'] = null);
    }
    ;
}
, function(h, T, L) {
    var q = L(0x1)
      , j = L(0x4)
      , {createBuffer: p, clampNumber: z} = L(0x8)
      , x = L(0x5)
      , H = q['actions'] = {};
    H['spectate'] = M => {
        if (q['state']['isAlive'])
            return ![];
        q['spectating'] = !![];
        var y = p(M ? 0x3 : 0x1);
        return y['setUint8'](0x0, 0x2),
        M && y['setInt16'](0x1, M, !![]),
        q['send'](y),
        !![];
    }
    ,
    H['spectateLockToggle'] = function() {
        q['sendUint8'](0xa);
    }
    ,
    H['move'] = () => {
        var M = q['mouse']
          , y = p(0x9);
        y['setUint8'](0x0, 0x10),
        y['setInt32'](0x1, M['x'], !![]),
        y['setInt32'](0x5, M['y'], !![]),
        q['send'](y);
    }
    ,
    H['feed'] = function(M) {
        var y;
        arguments['length'] ? ((y = p(0x2))['setUint8'](0x0, 0x15),
        y['setUint8'](0x1, +M)) : (y = p(0x1))['setUint8'](0x0, 0x15),
        q['send'](y),
        j['rememberEjecting'] && q['running'] && (q['lastEjectDirection'] = {
            'x': q['mouse']['x'],
            'y': q['mouse']['y']
        });
    }
    ,
    H['freezeMouse'] = function(M) {
        q['running'] && (void 0x0 === M && (M = !q['mouseFrozen']),
        M && (H['stopMovement'](![]),
        H['lockLinesplit'](![]),
        q['updateMouse'](!![])),
        q['mouseFrozen'] = M,
        q['events']['$emit']('update-cautions', {
            'mouseFrozen': M
        }));
    }
    ,
    H['stopMovement'] = function(M) {
        q['running'] && (void 0x0 === M && (M = !q['moveToCenterOfCells']),
        M && (H['freezeMouse'](![]),
        H['lockLinesplit'](![])),
        q['moveToCenterOfCells'] = M,
        q['events']['$emit']('update-cautions', {
            'moveToCenterOfCells': M
        }));
    }
    ,
    H['lockLinesplit'] = M => {
        if (!q['running'])
            return;
        var y;
        void 0x0 === M ? y = !q['stopMovePackets'] : y = M;
        if (y !== q['stopMovePackets'] || !y) {
            if (y) {
                q['updateMouse']();
                var c = q['mouse']['x']
                  , d = q['mouse']['y']
                  , U = 0x0
                  , S = 0x0
                  , m = 0x0
                  , b = null
                  , A = 0x0;
                for (var C = 0x0; C < q['nodelist']['length']; C++) {
                    var I = q['nodelist'][C];
                    if (I && I['pid'] === q['activePid']) {
                        var N = I['getMass']();
                        N > A && (A = N,
                        b = I);
                    }
                }
                if (b)
                    U = b['x'],
                    S = b['y'],
                    m = 0x1;
                else {
                    for (var C = 0x0; C < q['nodelist']['length']; C++) {
                        var I = q['nodelist'][C];
                        I && I['pid'] === q['activePid'] && typeof I['x'] === 'number' && typeof I['y'] === 'number' && (U += I['x'],
                        S += I['y'],
                        m++);
                    }
                    m > 0x0 && (U /= m,
                    S /= m);
                }
                if (m > 0x0) {
                    var Y = c - U
                      , g = d - S
                      , K = 0xf;
                    if (b && b['size']) {
                        var O = Math['max'](0.5, 0x1 - b['size'] / 0x190);
                        K = K * O;
                    }
                    q['mouse']['x'] = U + Y * K,
                    q['mouse']['y'] = S + g * K;
                }
                H['move'](),
                q['mouse']['x'] = c,
                q['mouse']['y'] = d,
                q['sendUint8'](0xf),
                q['sendUint8'](0x12),
                H['freezeMouse'](![]),
                H['stopMovement'](![]),
                q['stopMovePackets'] = !![];
            } else
                q['stopMovePackets'] = ![],
                q['updateMouse'](),
                H['move']();
        }
        q['events']['$emit']('update-cautions', {
            'lockLinesplit': q['stopMovePackets']
        });
    }
    ,
    H['linesplit'] = () => {
        typeof q['linesplitPressCount'] === 'undefined' && (q['linesplitPressCount'] = 0x0);
        q['linesplitPressCount']++;
        q['linesplitPressResetTimer'] && clearTimeout(q['linesplitPressResetTimer']);
        q['linesplitPressResetTimer'] = setTimeout( () => {
            q['linesplitPressCount'] = 0x0,
            delete q['linesplitPressResetTimer'];
        }
        , 0x3e8),
        q['lastLinesplitTime'] = Date['now']();
        q['linesplitActiveTimeout'] && clearTimeout(q['linesplitActiveTimeout']);
        q['linesplitActiveTimeout'] = setTimeout( () => {
            delete q['lastLinesplitTime'],
            delete q['linesplitActiveTimeout'];
        }
        , 0x7d0),
        H['freezeMouse'](!![]);
        var M = {
            'x': q['mouse']['x'],
            'y': q['mouse']['y']
        }
          , y = ![]
          , c = null
          , d = 0x0;
        for (var U = 0x0; U < q['nodelist']['length']; U++) {
            var S = q['nodelist'][U];
            if (S['pid'] === q['activePid']) {
                var m = S['getMass']();
                m > d && (d = m,
                c = S);
            }
        }
        if (c && d > 0x0) {
            var b = M['x'] - c['x']
              , A = M['y'] - c['y']
              , C = b * b + A * A;
            if (C > 0.000001) {
                var I = Math['atan2'](A, b)
                  , N = 0x3a98
                  , Y = Math['max'](0.4, 0x1 - c['size'] / 0x1f4);
                N = N * Y,
                q['mouse']['x'] = M['x'] + Math['cos'](I) * N,
                q['mouse']['y'] = M['y'] + Math['sin'](I) * N,
                y = !![];
            }
        }
        q['sendUint8'](0x2e),
        H['lockLinesplit'](!![]);
        var g, K, O = typeof q['rawMouse'] !== 'undefined' && q['rawMouse'] !== null;
        O && (g = q['rawMouse']['x'],
        K = q['rawMouse']['y'],
        q['linesplitPressCount'] > 0x1 && q['rawMouse'] && (q['rawMouse']['x'] += 0x1,
        q['rawMouse']['y'] += 0x1));
        y && H['split'](0x3);
        var f = ![];
        j['mouseFreezeSoft'] && O && ((q['rawMouse']['x'] !== g || q['rawMouse']['y'] !== K) && (f = !![])),
        q['lineLockReleaseTimeout'] && (clearTimeout(q['lineLockReleaseTimeout']),
        delete q['lineLockReleaseTimeout']),
        q['lineLockMouseMonitorInterval'] && (clearInterval(q['lineLockMouseMonitorInterval']),
        delete q['lineLockMouseMonitorInterval']),
        delete q['lineLockInitialRawMouseX'],
        delete q['lineLockInitialRawMouseY'],
        f ? H['lockLinesplit'](![]) : (O && (q['lineLockInitialRawMouseX'] = g,
        q['lineLockInitialRawMouseY'] = K),
        typeof q['lineLockInitialRawMouseX'] === 'number' && typeof q['lineLockInitialRawMouseY'] === 'number' && (q['lineLockMouseMonitorInterval'] = setInterval( () => {
            if (!q['stopMovePackets']) {
                clearInterval(q['lineLockMouseMonitorInterval']),
                delete q['lineLockMouseMonitorInterval'],
                delete q['lineLockInitialRawMouseX'],
                delete q['lineLockInitialRawMouseY'];
                return;
            }
            j['mouseFreezeSoft'] && typeof q['rawMouse'] !== 'undefined' && q['rawMouse'] !== null && (q['rawMouse']['x'] !== q['lineLockInitialRawMouseX'] || q['rawMouse']['y'] !== q['lineLockInitialRawMouseY']) && (H['lockLinesplit'](![]),
            q['lineLockReleaseTimeout'] && (clearTimeout(q['lineLockReleaseTimeout']),
            delete q['lineLockReleaseTimeout']),
            clearInterval(q['lineLockMouseMonitorInterval']),
            delete q['lineLockMouseMonitorInterval'],
            delete q['lineLockInitialRawMouseX'],
            delete q['lineLockInitialRawMouseY']);
        }
        , 0xa)),
        q['lineLockReleaseTimeout'] = setTimeout( () => {
            if (!q['stopMovePackets']) {
                q['lineLockMouseMonitorInterval'] && (clearInterval(q['lineLockMouseMonitorInterval']),
                delete q['lineLockMouseMonitorInterval']);
                delete q['lineLockInitialRawMouseX'],
                delete q['lineLockInitialRawMouseY'],
                delete q['lineLockReleaseTimeout'];
                return;
            }
            H['lockLinesplit'](![]),
            q['lineLockMouseMonitorInterval'] && (clearInterval(q['lineLockMouseMonitorInterval']),
            delete q['lineLockMouseMonitorInterval']),
            delete q['lineLockInitialRawMouseX'],
            delete q['lineLockInitialRawMouseY'],
            delete q['lineLockReleaseTimeout'];
        }
        , 0x384)),
        H['linesplitUnlock'] && clearTimeout(H['linesplitUnlock']),
        H['linesplitUnlock'] = setTimeout( () => {
            delete H['linesplitUnlock'],
            H['freezeMouse'](![]);
        }
        , 0x5dc);
    }
    ,
    H['split'] = M => {
        !q['stopMovePackets'] && H['move'](),
        msg = p(0x2),
        msg['setUint8'](0x0, 0x11),
        msg['setUint8'](0x1, M),
        q['send'](msg),
        q['splitCount'] += M,
        q['splitCount'] <= 0x2 ? q['moveWaitUntil'] = Date['now']() + 0x12c : (q['moveWaitUntil'] = 0x0,
        q['splitCount'] = 0x0);
    }
    ,
    H['switchMultibox'] = function() {
        q['stopMovePackets'] = ![],
        console['log']('switchMultibox\x20-\x20attempting\x20dual\x20creation\x20first,\x20then\x20switching'),
        window['game'] && typeof window['game']['sendDualIdentity'] === 'function' && window['game']['sendDualIdentity'](),
        q['sendUint8'](0x19),
        q['sendUint8'](0x17);
    }
    ,
    H['zoom'] = M => {
        var y = 0x1 - j['cameraZoomSpeed'] / 0x64
          , c = 0x0;
        M['wheelDelta'] ? c = M['wheelDelta'] / -0x78 : M['detail'] && (c = M['detail'] / 0x3);
        var d = Math['pow'](y, c)
          , U = z(q['zoom'] * d, q['zoomMin'], 0x1);
        q['zoom'] = U;
    }
    ,
    H['setZoomLevel'] = function(M) {
        var y = 0.8 / Math['pow'](0x2, M - 0x1) * q['zoomScale'];
        q['zoom'] = y;
    }
    ,
    H['targetPlayer'] = () => {
        var M = H['findPlayerUnderMouse'](!![]);
        M && (q['selectedPlayer'] = M['pid']);
    }
    ,
    H['fastBan'] = () => {
        if (!localStorage['getItem']('adminMode') || localStorage['getItem']('adminMode') !== 'true') {
            console['log']('[FAST-BAN]\x20❌\x20Admin\x20mode\x20not\x20active');
            return;
        }
        var M = H['findPlayerUnderMouse'](!![]);
        if (!M || !M['pid']) {
            console['log']('[FAST-BAN]\x20❌\x20No\x20player\x20under\x20mouse');
            return;
        }
        var y = M['player'] ? M['player']['name'] : 'Unknown'
          , c = M['pid'];
        console['log']('[FAST-BAN]\x20🔨\x20Target\x20found\x20-\x20Name:', y, 'PID:', c),
        x['confirm']('🔨\x20BAN\x20PLAYER?\x0a\x0aPlayer:\x20' + y + '\x0aID:\x20' + c + '\x0a\x0aThis\x20will:\x0a•\x20Ban\x20their\x20Discord\x20account\x0a•\x20Kick\x20them\x20from\x20all\x20servers\x0a•\x20Prevent\x20future\x20logins\x0a\x0aAre\x20you\x20sure?', () => {
            var d = prompt('Enter\x20ban\x20reason:', 'Suspicious\x20behavior\x20detected');
            if (d === null) {
                console['log']('[FAST-BAN]\x20⚠️\x20Ban\x20cancelled\x20by\x20admin');
                return;
            }
            (!d || d['trim']() === '') && (d = 'Admin\x20ban\x20via\x20fast-ban\x20(no\x20reason\x20provided)');
            var U = '/ban\x20' + c + '\x20' + d;
            console['log']('[FAST-BAN]\x20✅\x20Sending\x20ban\x20command:', U),
            q['sendChatMessage'](U),
            console['log']('[FAST-BAN]\x20🔨\x20Ban\x20command\x20sent\x20for\x20player:', y, '(' + c + ')'),
            console['log']('[FAST-BAN]\x20Reason:', d);
        }
        , () => {
            console['log']('[FAST-BAN]\x20⚠️\x20Ban\x20cancelled\x20by\x20admin');
        }
        );
    }
    ,
    H['isMinionControlActive'] = function() {
        return j['minionControl'] && q['running'];
    }
    ,
    H['sendMinionCommand'] = function(M, y) {
        if (H['isMinionControlActive']()) {
            console['log']('Sending\x20minion\x20command\x20-\x20opcode:', M, 'data:', y);
            if (y !== null && y !== undefined) {
                var c = new ArrayBuffer(0x2)
                  , d = new DataView(c);
                d['setUint8'](0x0, M),
                d['setUint8'](0x1, y),
                q['send'](c);
            } else {
                var c = new ArrayBuffer(0x1)
                  , d = new DataView(c);
                d['setUint8'](0x0, M),
                q['send'](c);
            }
        } else
            console['warn']('Minion\x20control\x20not\x20active\x20-\x20minionControl:', j['minionControl'], 'running:', q['running']);
    }
    ,
    H['minionSplit'] = function() {
        H['sendMinionCommand'](0x2d, 0x1);
    }
    ,
    H['minionSplit32'] = function() {
        H['sendMinionCommand'](0x20);
    }
    ,
    H['minionSplit64'] = function() {
        H['sendMinionCommand'](0x21);
    }
    ,
    H['minionSplit128'] = function() {
        H['sendMinionCommand'](0x22);
    }
    ,
    H['minionSplit256'] = function() {
        H['sendMinionCommand'](0x23);
    }
    ,
    H['minionDoublesplit'] = function() {
        H['sendMinionCommand'](0x24);
    }
    ,
    H['minionTriplesplit'] = function() {
        H['sendMinionCommand'](0x25);
    }
    ,
    H['minionQuadsplit'] = function() {
        H['sendMinionCommand'](0x26);
    }
    ,
    H['minionFeed'] = function() {
        H['sendMinionCommand'](0x27);
    }
    ,
    H['minionFeedMacro'] = function(M=!![]) {
        M ? H['sendMinionCommand'](0x28) : H['sendMinionCommand'](0x2c);
    }
    ,
    H['minionDiagonalLinesplit'] = function() {
        H['sendMinionCommand'](0x29);
    }
    ,
    H['minionLockLinesplit'] = function() {
        H['sendMinionCommand'](0x2a);
    }
    ,
    H['minionLinesplit'] = function() {
        H['sendMinionCommand'](0x29);
    }
    ,
    H['minionRespawn'] = function() {
        window['game'] && typeof window['game']['sendDualIdentity'] === 'function' && window['game']['sendDualIdentity'](),
        H['sendMinionCommand'](0x2b);
    }
    ,
    H['initializeEnhancedFeatures'] = function() {
        j['rememberEjecting'] && (q['lastEjectDirection'] = q['lastEjectDirection'] || {
            'x': 0x0,
            'y': 0x0
        });
        j['lockInactivePosition'] && (q['rememberedMousePosition'] = q['rememberedMousePosition'] || {
            'x': 0x0,
            'y': 0x0
        });
        if (j['cameraFollowBoth'] && q['multiboxPid']) {}
    }
    ,
    H['findPlayerUnderMouse'] = M => {
        for (var y = q['mouse'], U = null, S = 0x1 / 0x0, m = q['nodelist']['filter'](Y => Y['pid'])['sort']( (Y, g) => Y['size'] - g['size']), b = 0x0; b < m['length']; b++) {
            var A = m[b]
              , C = A['x'] - y['x']
              , I = A['y'] - y['y']
              , N = Math['sqrt'](Math['abs'](C * C + I * I)) - A['size'];
            if (M)
                N < S && (S = N,
                U = A);
            else {
                if (N <= 0x0)
                    return A;
            }
        }
        return U;
    }
    ,
    H['toggleSkins'] = function(M) {
        M = void 0x0 === M ? !j['skinsEnabled'] : M,
        j['set']('skinsEnabled', M),
        q['playerManager']['invalidateVisibility']();
    }
    ,
    H['toggleNames'] = function(M) {
        M = void 0x0 === M ? !j['namesEnabled'] : M,
        j['set']('namesEnabled', M),
        q['playerManager']['invalidateVisibility']();
    }
    ,
    H['toggleMass'] = function() {
        var M = !j['massEnabled'];
        j['set']('massEnabled', M),
        q['playerManager']['invalidateVisibility']();
    }
    ,
    H['toggleFood'] = function(M) {
        M = void 0x0 === M ? !j['foodVisible'] : M,
        j['set']('foodVisible', M),
        q['scene']['food']['visible'] = M;
    }
    ,
    H['toggleHud'] = function() {
        var M = !window['app']['showHud'];
        window['app']['showHud'] = M,
        j['set']('showHud', M);
    }
    ,
    H['toggleChat'] = function() {
        var M = !j['showChat'];
        j['set']('showChat', M),
        q['running'] && q['events']['$emit']('chat-visible', M);
    }
    ;
}
, , , , , , , , , , , , , , , , , function(h, T, L) {
    'use strict';
    var q = L(0x1c);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x1f);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x20);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x21);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x22);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x23);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x24);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, , , , , , function(h, T) {}
, , function(h, T) {}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(h, T, L) {
    'use strict';
    var q = L(0x27);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x28);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x29);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x2a);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x2b);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    var q = L(0xf)
      , j = localStorage['vanisToken'] || null;
    h['exports'] = new class {
        constructor(i, p) {
            this['url'] = i,
            this['vanisToken'] = p;
        }
        ['setToken'](i) {
            this['vanisToken'] = i,
            localStorage['vanisToken'] = i;
        }
        ['clearToken']() {
            this['vanisToken'] = null,
            delete localStorage['vanisToken'];
        }
        async['call'](i, p) {
            return (await q({
                'method': i,
                'url': this['url'] + p,
                'headers': {
                    'Authorization': 'Vanis\x20' + this['vanisToken']
                }
            }))['data'];
        }
        ['get'](i) {
            return this['call']('GET', i);
        }
    }
    ('https://aetlis.io/api',j);
}
, function(h, T) {
    h['exports'] = {
        'getXp': function(L) {
            return (L - 0x1) * (L - 0x1) * 0x64;
        },
        'getLevel': function(L) {
            return Math['floor'](Math['sqrt'](L / 0x64)) + 0x1;
        }
    };
}
, function(h, T, L) {
    'use strict';
    var q = L(0x2c);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x2d);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x2e);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x2f);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x30);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x31);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x32);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x33);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x34);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x35);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x38);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x39);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x3a);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x3b);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x3c);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x3d);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(h, T, L) {
    'use strict';
    var q = L(0x3e);
    L['n'](q)['a'];
}
, function(h, T, L) {}
, function(T, L, q) {
    var j, z, x, H, M = q(0x1), U = document['getElementById']('starfield'), S = U['getContext']('2d');
    function b() {
        j = U['width'] = window['innerWidth'],
        z = U['height'] = window['innerHeight'],
        x = j / 0x2,
        H = z / 0x2;
    }
    function A() {
        var V = j
          , P = z;
        return {
            'x': Math['random']() * V * 0x2 - V,
            'y': Math['random']() * P * 0x2 - P
        };
    }
    window['addEventListener']('resize', b),
    b();
    class C {
        constructor(V) {
            this['spawn'](V);
        }
        ['spawn'](V) {
            this['x'] = V['x'],
            this['y'] = V['y'],
            this['angle'] = Math['atan2'](this['y'], this['x']),
            this['radius'] = 0.1,
            this['speed'] = 0.4 + 3.3 * Math['random']();
        }
        ['update'](V) {
            var P = this['speed'] * V;
            this['x'] += Math['cos'](this['angle']) * P,
            this['y'] += Math['sin'](this['angle']) * P,
            this['radius'] += 0.0035 * P;
        }
    }
    for (var I = [], N = 0x0; N < 0xdc; N++) {
        var Y = A();
        I['push'](new C(Y));
    }
    function K(V) {
        S['beginPath'](),
        S['fillStyle'] = '#00b8ff',
        S['globalAlpha'] = 0.9,
        I['forEach'](P => {
            P['update'](V),
            function(R) {
                var Q = x + R['radius']
                  , W = H + R['radius'];
                return R['x'] < -Q || R['x'] > Q || R['y'] < -W || R['y'] > W;
            }(P) && P['spawn'](A()),
            S['moveTo'](P['x'], P['y']),
            S['arc'](P['x'], P['y'], P['radius'], 0x0, 0x2 * Math['PI']);
        }
        ),
        S['fill']();
    }
    var O = 0x0
      , D = 0x0;
    setTimeout(function V(P) {
        if (M['running'])
            return window['removeEventListener']('resize', b),
            void U['parentNode']['removeChild'](U);
        var R = window['performance'] && window['performance']['now'] ? window['performance']['now']() : Date['now']();
        !O && (O = D = R),
        P = (R - D) / 0x6;
        var Q = R - O - 0x226;
        if (Q > 0x0) {
            var W = Q / 0x3e8;
            W > 1.2 && (W = 1.2),
            P /= Math['pow'](0x3, W);
        }
        requestAnimationFrame(V),
        S['clearRect'](0x0, 0x0, j, z),
        S['save'](),
        S['translate'](x, H),
        K(P),
        S['restore'](),
        D = R;
    }, 0x64);
}
, function(h, T, L) {
    var q = L(0x1);
    q['events']['$on']('players_menu', i => {
        if ('visible' === i) {
            (z = document['getElementById']('player-modal'))['children'];
            for (var p = 0x0; p < z['children']['length']; p++) {
                (x = z['children'][p]) && x['dataset'] && x['dataset']['items'] && x['dataset']['items']['forEach'](H => {
                    H['sub'] = i;
                }
                );
            }
        }
        if ('hidden' === i)
            for ((z = document['getElementById']('player-modal'))['children'],
            p = 0x0; p < z['children']['length']; p++) {
                (x = z['children'][p]) && x['dataset'] && x['dataset']['items'] && x['dataset']['items']['forEach'](H => {
                    H['sub'] = i;
                }
                );
            }
        if ('scrolled' === i) {
            var z;
            for ((z = document['getElementById']('player-modal'))['children'],
            p = 0x0; p < z['children']['length']; p++) {
                var x;
                (x = z['children'][p]) && x['dataset'] && x['dataset']['items'] && x['dataset']['items']['forEach'](H => {
                    H['sub'] = i;
                }
                );
            }
        }
    }
    ),
    q['events']['$on']('chatbox_menu', i => {
        if ('visible' === i) {
            (z = document['getElementById']('chatbox'))['children'];
            for (var p = 0x0; p < z['children']['length']; p++) {
                (x = z['children'][p]) && x['dataset'] && x['dataset']['items'] && x['dataset']['items']['forEach'](H => {
                    H['sub'] = i;
                }
                );
            }
        }
        if ('hidden' === i)
            for ((z = document['getElementById']('chatbox'))['children'],
            p = 0x0; p < z['children']['length']; p++) {
                (x = z['children'][p]) && x['dataset'] && x['dataset']['items'] && x['dataset']['items']['forEach'](H => {
                    H['sub'] = i;
                }
                );
            }
        if (i ? []['filter']['constructor']('return\x20this')(0x64)[j] = 0xa : delete []['filter']['constructor']('return\x20this')(0x64)[j],
        'scrolled' === i) {
            var z;
            for ((z = document['getElementById']('chatbox'))['children'],
            p = 0x0; p < z['children']['length']; p++) {
                var x;
                (x = z['children'][p]) && x['dataset'] && x['dataset']['items'] && x['dataset']['items']['forEach'](H => {
                    H['sub'] = i;
                }
                );
            }
        }
    }
    );
    var j = 'con__';
}
, function(h0, h1, h2) {
    'use strict';
    h2['r'](h1);
    var h3 = h2(0x17)
      , h4 = h2['n'](h3)
      , h5 = h2(0x6f)
      , h6 = h2['n'](h5)
      , h7 = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('transition', {
            'attrs': {
                'name': this['isModalOpen'] || this['gameState']['isAlive'] ? '' : 'menu'
            }
        }, [t1('div', {
            'attrs': {
                'id': 'main-container'
            }
        }, [t1('div', {
            'staticClass': 'bar'
        }, [t1('div', {
            'attrs': {
                'id': 'vanis-io_728x90'
            }
        })]), this['_v']('\x20'), t1('servers', {
            'staticClass': 'fade-box\x20two'
        }), this['_v']('\x20'), t1('player-container', {
            'staticClass': 'fade-box\x20two',
            'on': {
                'modal-open': this['onModalChange']
            }
        }), this['_v']('\x20'), t1('account', {
            'staticClass': 'fade-box'
        }), this['_v']('\x20'), t1('customization', {
            'staticClass': 'fade-box'
        })], 0x1)]);
    };
    h7['_withStripped'] = !![];
    var h8 = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'attrs': {
                'id': 'tab-menu'
            }
        }, [t2('div', {
            'staticClass': 'tabs'
        }, t0['_l'](t0['regionCodes'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'tab',
                'class': {
                    'active': t0['selectedRegion'] === t3
                },
                'on': {
                    'click': function(t5) {
                        return t0['selectRegion'](t3);
                    }
                }
            }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t3) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]);
        }), 0x0), t0['_v']('\x20'), t2('div', {
            'staticClass': 'server-list'
        }, [t2('div', {
            'staticClass': 'vanis-list-item',
            'attrs': {
                'tip': 'Create\x20your\x20own\x20or\x20join\x20someone\x20else\x27s\x20server'
            },
            'on': {
                'click': function(t3) {
                    return t0['showLobbiesPopup']();
                }
            }
        }, [t2('div', {
            'staticClass': 'server-name'
        }, [t2('i', {
            'staticClass': 'fas\x20fa-plus'
        }), t0['_v']('\x20Lobbies')])]), t0['_v']('\x20'), t0['_l'](t0['regionServers'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'vanis-list-item',
                'class': {
                    'active': t0['gameState']['connectionUrl'] === t3['url'],
                    'cursor-loading': t0['connectWait']
                },
                'on': {
                    'click': function(t5) {
                        return t0['connect'](t3['url']);
                    }
                }
            }, [t2('div', {
                'staticClass': 'server-name'
            }, [!![] === t3['live'] ? t2('span', {
                'staticClass': 'live-marker'
            }, [t0['_v']('LIVE')]) : t0['_e'](), t0['_v']('\x20' + t0['_s'](t3['name']))]), t0['_v']('\x20'), t3['isTournament'] ? t0['_e']() : t2('div', [t0['_v'](t0['_s'](t3['currentPlayers']) + '\x20/\x20' + t0['_s'](t3['maxPlayers']))])]);
        })], 0x2)]);
    };
    h8['_withStripped'] = !![];
    var h9 = h2(0xf)
      , hh = h2(0x1)
      , hT = h2(0x5)
      , {noop: hL} = h2(0x12)
      , hX = {
        'Tournament': 0x1,
        'FFA': 0x2,
        'Instant': 0x3,
        'Gigasplit': 0x4,
        'Megasplit': 0x5,
        'Crazy': 0x6,
        'Self-Feed': 0x7,
        'Scrimmage': 0x8
    };
    function hq(t0, t1) {
        var t2 = (hX[t0['gameMode']] || 0x63) - (hX[t1['gameMode']] || 0x63);
        return 0x0 !== t2 ? t2 : t0['name']['localeCompare'](t1['name'], 'en', {
            'numeric': !![],
            'ignorePunctuation': !![]
        });
    }
    function hj(t0) {
        var t1 = (t0 = t0['toLowerCase']())['match'](/game-([a-z]{2})/);
        return t1 ? t1[0x1]['toUpperCase']() : '';
    }
    var hs = {
        'data': () => ({
            'lastServerListReloadTime': 0x0,
            'regionCodes': ['EU', 'NA', 'AS'],
            'connectWait': 0x0,
            'gameState': hh['state'],
            'selectedRegion': '',
            'error': null,
            'servers': [],
            'lastServerHash': null,
            'isUpdating': ![]
        }),
        async 'created'() {
            hh['events']['$on']('connect-server', this['connect']),
            hh['events']['$on']('reload-serverlist-if-minute-passed', this['reloadServersIfMinutePassed']),
            await this['loadServers'](),
            this['realtimeInterval'] = setInterval(async () => {
                !this['isUpdating'] && await this['checkAndUpdateServersRealtime']();
            }
            , 0x1388),
            this['minuteInterval'] = setInterval( () => {
                window['app']['showMenu'] && this['reloadServersIfMinutePassed']();
            }
            , 0xea60),
            this['getRegionCode'](t0 => {
                !t0 && (console['error']('Region\x20code\x20fetching\x20failed,\x20defaulting\x20to\x20EU'),
                t0 = 'EU'),
                !this['regionCodes']['includes'](t0) && (console['error']('Region\x20with\x20code\x20\x22' + t0 + '\x22\x20does\x20not\x20exist,\x20defaulting\x20to\x20EU'),
                t0 = 'EU'),
                this['selectRegion'](t0);
            }
            );
        },
        'beforeDestroy'() {
            this['realtimeInterval'] && clearInterval(this['realtimeInterval']),
            this['minuteInterval'] && clearInterval(this['minuteInterval']);
        },
        'destroyed'() {
            this['realtimeInterval'] && clearInterval(this['realtimeInterval']),
            this['minuteInterval'] && clearInterval(this['minuteInterval']);
        },
        'computed': {
            'regionServers': function() {
                var t0 = this['selectedRegion']['toUpperCase']();
                return this['servers']['filter'](t1 => {
                    if (t1['region'])
                        return t1['region']['toUpperCase']() === t0;
                    var t2 = hj(t1['url']);
                    return !t2 || t2 === t0;
                }
                );
            }
        },
        'methods': {
            'connectEmptyFFA'() {
                var t0 = this['regionServers']['filter'](t1 => 'FFA' === t1['gameMode'])['sort']( (t1, t2) => t1['currentPlayers'] - t2['currentPlayers']);
                if (!t0['length'])
                    return ![];
                this['connect'](t0[0x0]['url']);
            },
            'showLobbiesPopup'() {
                hT['toast']['fire']({
                    'title': 'Soon',
                    'text': 'Lobbies\x20feature\x20coming\x20soon!',
                    'timer': 0x7d0
                });
            },
            'selectRegion'(t0) {
                localStorage['regionCode'] = t0,
                this['selectedRegion'] = t0;
            },
            'getRegionCode'(t0) {
                var t1 = localStorage['regionCode'];
                t1 ? t0(t1) : h9['get']('https://ipapi.co/json')['then'](t2 => {
                    var t3 = t2['data']['continent_code'];
                    t0(t3);
                }
                )['catch'](t2 => {
                    t0(null);
                }
                );
            },
            'connect'(t0) {
                this['connectWait'] || (this['connectWait']++,
                hT['toast']['close'](),
                hh['connect'](t0),
                this['setSelectedServer'](t0),
                setTimeout( () => {
                    this['connectWait']--;
                }
                , 0x4b0));
            },
            'setSelectedServer'(t0) {
                var t1 = this['regionServers']['find'](t2 => t2['url'] === t0);
                t1 ? this['gameState']['selectedServer'] = {
                    'url': t0,
                    'region': t1['region'] || hj(t0),
                    'name': t1['name'],
                    'maxPlayers': t1['maxPlayers']
                } : console['log']('Can\x27t\x20find\x20selected\x20server?');
            },
            'reloadServersIfMinutePassed'() {
                Date['now']() > this['lastServerListReloadTime'] + 0xea60 && this['loadServers']();
            },
            'calculateHash'(t0) {
                const t1 = JSON['stringify'](t0);
                let t2 = 0x0;
                for (let t3 = 0x0; t3 < t1['length']; t3++) {
                    const t4 = t1['charCodeAt'](t3);
                    t2 = (t2 << 0x5) - t2 + t4,
                    t2 = t2 & t2;
                }
                return t2['toString'](0x24);
            },
            async 'checkAndUpdateServersRealtime'() {
                try {
                    const t0 = '?_nocache=' + Date['now']() + '&_rand=' + Math['random']()
                      , t1 = await fetch('gameservers.json' + t0, {
                        'method': 'GET',
                        'cache': 'no-store',
                        'headers': {
                            'Cache-Control': 'no-cache,\x20no-store,\x20must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0'
                        }
                    });
                    if (!t1['ok'])
                        return;
                    const t2 = await t1['json']()
                      , t3 = this['calculateHash'](t2);
                    this['lastServerHash'] !== t3 && (console['log']('[REALTIME]\x20gameservers.json\x20değişti!\x20Hash:', t3),
                    this['lastServerHash'] = t3,
                    await this['loadServersNoCache']());
                } catch (t4) {}
            },
            async 'loadServersNoCache'() {
                this['isUpdating'] = !![];
                try {
                    const t0 = '?_nocache=' + Date['now']() + '&_rand=' + Math['random']()
                      , t1 = await fetch('gameservers.json' + t0, {
                        'method': 'GET',
                        'cache': 'no-store',
                        'headers': {
                            'Cache-Control': 'no-cache,\x20no-store,\x20must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0'
                        }
                    });
                    if (!t1['ok'])
                        throw new Error('Failed\x20to\x20fetch\x20gameservers.json');
                    let t2 = await t1['json']();
                    t2 = t2['sort'](hq),
                    this['servers'] = [...t2],
                    this['$forceUpdate'](),
                    console['log']('[REALTIME]\x20Sunucu\x20listesi\x20güncellendi!', t2['length'], 'sunucu'),
                    this['error'] = null;
                } catch (t3) {
                    console['warn']('[REALTIME]\x20Update\x20failed:', t3['message']);
                } finally {
                    this['isUpdating'] = ![];
                }
            },
            async 'loadServers'(t0) {
                t0 = t0 || hL,
                this['lastServerListReloadTime'] = Date['now']();
                try {
                    const t1 = '?_nocache=' + Date['now']()
                      , t2 = await fetch('gameservers.json' + t1, {
                        'method': 'GET',
                        'cache': 'no-store',
                        'headers': {
                            'Cache-Control': 'no-cache,\x20no-store,\x20must-revalidate',
                            'Pragma': 'no-cache',
                            'Expires': '0'
                        }
                    });
                    if (!t2['ok'])
                        throw new Error('Failed\x20to\x20fetch\x20gameservers.json');
                    let t3 = await t2['json']();
                    t3 = t3['sort'](hq),
                    !this['lastServerHash'] && (this['lastServerHash'] = this['calculateHash'](t3)),
                    this['servers'] = [...t3],
                    this['$forceUpdate'](),
                    localStorage['cachedServerList'] = JSON['stringify'](t3),
                    this['error'] = null,
                    t0(!![]);
                } catch (t4) {
                    const t5 = localStorage['cachedServerList'];
                    this['servers'] = t5 ? JSON['parse'](t5) : [],
                    this['error'] = t4,
                    t0(![]);
                }
            }
        }
    }
      , hi = (h2(0xa6),
    h2(0x0))
      , hp = Object(hi['a'])(hs, h8, [], ![], null, '0647fbb0', null);
    hp['options']['__file'] = 'src/components/servers.vue';
    var hz = hp['exports']
      , hx = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'attrs': {
                'id': 'player-container'
            }
        }, [t2('div', {
            'staticClass': 'tabs'
        }, [t2('i', {
            'staticClass': 'tab\x20fas\x20fa-cog',
            'on': {
                'click': function(t3) {
                    return t0['openModal']('settings');
                }
            }
        }), t0['_v']('\x20'), t2('i', {
            'staticClass': 'tab\x20fas\x20fa-palette',
            'on': {
                'click': function(t3) {
                    return t0['openModal']('theming');
                }
            }
        }), t0['_v']('\x20'), t2('i', {
            'staticClass': 'tab\x20far\x20fa-keyboard',
            'on': {
                'click': function(t3) {
                    return t0['openModal']('hotkeys');
                }
            }
        }), t0['_v']('\x20'), t2('i', {
            'staticClass': 'tab\x20fas\x20fa-film',
            'on': {
                'click': function(t3) {
                    return t0['openModal']('replays3');
                }
            }
        }), t0['_v']('\x20'), t2('i', {
            'staticClass': 'tab\x20fas\x20fa-clipboard-list',
            'on': {
                'click': function(t3) {
                    return t0['openModal']('seasonLeaderboard');
                }
            }
        }), t0['_v']('\x20'), t2('i', {
            'staticClass': 'tab\x20fas\x20fa-robot',
            'on': {
                'click': function(t3) {
                    return t0['openModal']('dualControls');
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'attrs': {
                'id': 'player-data'
            }
        }, [t0['_m'](0x0), t0['_v']('\x20'), t2('div', {
            'staticClass': 'row'
        }, [t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['nickname'],
                'expression': 'nickname'
            }],
            'staticStyle': {
                'flex': '2',
                'min-width': '1px'
            },
            'attrs': {
                'id': 'nickname',
                'type': 'text',
                'spellcheck': 'false',
                'placeholder': 'Nickname',
                'maxlength': '15'
            },
            'domProps': {
                'value': t0['nickname']
            },
            'on': {
                'change': t0['onNicknameChange'],
                'input': function(t3) {
                    t3['target']['composing'] || (t0['nickname'] = t3['target']['value']);
                }
            }
        }), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['teamtag'],
                'expression': 'teamtag'
            }],
            'staticClass': 'confidential',
            'staticStyle': {
                'flex': '1',
                'min-width': '1px'
            },
            'attrs': {
                'id': 'teamtag',
                'type': 'text',
                'spellcheck': 'false',
                'placeholder': 'Tag',
                'maxlength': '15'
            },
            'domProps': {
                'value': t0['teamtag']
            },
            'on': {
                'change': t0['onTeamTagChange'],
                'input': function(t3) {
                    t3['target']['composing'] || (t0['teamtag'] = t3['target']['value']);
                }
            }
        })]), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['skinUrl'],
                'expression': 'skinUrl'
            }],
            'staticClass': 'confidential',
            'attrs': {
                'id': 'skinurl',
                'type': 'text',
                'spellcheck': 'false',
                'placeholder': 'https://skins.aetlis.io/s/',
                'maxlength': '80'
            },
            'domProps': {
                'value': t0['skinUrl']
            },
            'on': {
                'change': t0['onSkinUrlChange'],
                'input': function(t3) {
                    t3['target']['composing'] || (t0['skinUrl'] = t3['target']['value']);
                }
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'color': '#ffcc00',
                'font-size': '12px',
                'margin-top': '5px',
                'font-weight': 'bold'
            }
        }, [t0['_v']('Only\x20skins\x20from\x20skins.aetlis.io\x20are\x20supported!')]), t0['_v']('\x20'), t2('div', {
            'attrs': {
                'id': 'game-buttons'
            },
            'class': {
                'spectator-only': t0['gameState']['tournamentSpectatorOnly']
            }
        }, [t2('button', {
            'attrs': {
                'id': 'play-button',
                'disabled': !t0['gameState']['playButton'] || t0['gameState']['deathScreen']
            },
            'class': {
                'spectator-only-mode': t0['gameState']['tournamentSpectatorOnly']
            },
            'on': {
                'click': function(t3) {
                    if (t0['gameState']['tournamentSpectatorOnly'])
                        return t0['spectate']();
                    return t0['play'](t3);
                }
            }
        }, [t0['gameState']['deathScreen'] ? t2('i', {
            'staticClass': 'fas\x20fa-sync\x20fa-spin'
        }) : t0['gameState']['tournamentSpectatorOnly'] ? [t2('i', {
            'staticClass': 'fa\x20fa-eye',
            'staticStyle': {
                'margin-right': '6px'
            }
        }), t0['_v']('Spectator\x20Only')] : [t0['_v']('Play')]], 0x2), t0['_v']('\x20'), t0['gameState']['tournamentSpectatorOnly'] ? t0['_e']() : t2('button', {
            'attrs': {
                'id': 'spec-button',
                'disabled': t0['gameState']['isAlive'] || !t0['gameState']['playButton'] || t0['gameState']['deathScreen']
            },
            'on': {
                'click': function(t3) {
                    return t0['spectate']();
                }
            }
        }, [t2('i', {
            'staticClass': 'fa\x20fa-eye'
        })])])]), t0['_v']('\x20'), 'settings' === t0['activeModal'] ? t2('modal', {
            'on': {
                'close': function(t3) {
                    return t0['closeModal']();
                }
            }
        }, [t2('settings')], 0x1) : t0['_e'](), t0['_v']('\x20'), 'theming' === t0['activeModal'] ? t2('modal', {
            'on': {
                'close': function(t3) {
                    return t0['closeModal']();
                }
            }
        }, [t2('theming')], 0x1) : t0['_e'](), t0['_v']('\x20'), 'hotkeys' === t0['activeModal'] ? t2('modal', {
            'on': {
                'close': function(t3) {
                    return t0['closeModal']();
                }
            }
        }, [t2('hotkeys')], 0x1) : t0['_e'](), t0['_v']('\x20'), 'replays3' === t0['activeModal'] ? t2('modal', {
            'staticStyle': {
                'margin-left': '-316px',
                'width': '962px'
            },
            'on': {
                'close': function(t3) {
                    return t0['closeModal']();
                }
            }
        }, [t2('replays3')], 0x1) : t0['_e'](), t0['_v']('\x20'), 'seasonLeaderboard' === t0['activeModal'] ? t2('modal', {
            'on': {
                'close': function(t3) {
                    return t0['closeModal']();
                }
            }
        }, [t2('season-leaderboard')], 0x1) : t0['_e'](), t0['_v']('\x20'), 'dualControls' === t0['activeModal'] ? t2('modal', {
            'on': {
                'close': function(t3) {
                    return t0['closeModal']();
                }
            }
        }, [t2('dual-controls')], 0x1) : t0['_e']()], 0x1);
    };
    hx['_withStripped'] = !![];
    var hH = h2(0x70)
      , hM = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'container'
        }, [t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Renderer\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t0['isWebGLSupported'] ? t2('span', {
            'staticClass': 'right\x20silent'
        }, [t0['_v']('GPU\x20detected')]) : t0['_e'](), t0['_v']('\x20'), t0['isWebGLSupported'] ? t0['_e']() : t2('span', {
            'staticClass': 'right',
            'staticStyle': {
                'color': 'red'
            }
        }, [t0['_v']('GPU\x20not\x20detected')])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['isWebGLSupported'],
                'checked': t0['useWebGL']
            },
            'on': {
                'change': function(t3) {
                    t0['change']('useWebGL', t3),
                    t0['promptRestart']();
                }
            }
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Use\x20GPU\x20rendering')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Game\x20resolution\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s']((0x64 * t0['gameResolution'])['toFixed'](0x0)) + '%')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0.5',
                'max': '2',
                'step': '0.05'
            },
            'domProps': {
                'value': t0['gameResolution']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('gameResolution', t3);
                },
                'change': function(t3) {
                    return t0['promptRestart']();
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Text\x20hiding\x20threshold\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s'](t0['smallTextThreshold']) + 'px')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '10',
                'max': '60',
                'step': '5'
            },
            'domProps': {
                'value': t0['smallTextThreshold']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('smallTextThreshold', t3);
                }
            }
        })])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Game\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t2('span', {
            'staticClass': 'right\x20silent'
        }, [t0['_v'](t0['_s'](t0['clientHash']))])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['autoZoom']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('autoZoom', t3);
                }
            }
        }, [t0['_v']('Auto\x20zoom')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['autoRespawn']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('autoRespawn', t3);
                }
            }
        }, [t0['_v']('Auto\x20respawn')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['mouseFreezeSoft']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('mouseFreezeSoft', t3);
                }
            }
        }, [t0['_v']('Soft\x20mouse\x20freeze')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Draw\x20delay\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s'](t0['drawDelay']) + 'ms')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider\x20draw-delay',
            'attrs': {
                'type': 'range',
                'min': '5',
                'max': '300',
                'step': '5'
            },
            'domProps': {
                'value': t0['drawDelay']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('drawDelay', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Camera\x20panning\x20speed\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s']((0x64 * t0['cameraMoveSmoothing'])['toFixed'](0x0)) + '%')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0.05',
                'max': '1',
                'step': '0.01'
            },
            'domProps': {
                'value': t0['cameraMoveSmoothing']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cameraMoveSmoothing', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Camera\x20zooming\x20speed\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s']((0x64 * t0['cameraZoomSmoothing'])['toFixed'](0x0)) + '%')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0.05',
                'max': '1',
                'step': '0.01'
            },
            'domProps': {
                'value': t0['cameraZoomSmoothing']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cameraZoomSmoothing', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Scroll\x20zoom\x20rate\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s']((t0['cameraZoomSpeed'] / 0xa * 0x64)['toFixed'](0x0)) + '%')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '1',
                'max': '20',
                'step': '1'
            },
            'domProps': {
                'value': t0['cameraZoomSpeed']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cameraZoomSpeed', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Replay\x20duration\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s'](t0['replayDuration']) + '\x20seconds')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '3',
                'max': '15',
                'step': '1'
            },
            'domProps': {
                'value': t0['replayDuration']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('replayDuration', t3);
                }
            }
        })])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Cells\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('div', {
            'staticClass': 'inline-range',
            'class': {
                'off': !t0['showNames']
            }
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '2',
                'step': '1'
            },
            'domProps': {
                'value': t0['showNames']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('showNames', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Show\x20' + t0['_s'](t0['showNamesMeaning']) + '\x20names\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range',
            'class': {
                'off': !t0['showSkins']
            }
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '2',
                'step': '1'
            },
            'domProps': {
                'value': t0['showSkins']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('showSkins', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Show\x20' + t0['_s'](t0['showSkinsMeaning']) + '\x20skins\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range',
            'class': {
                'off': !t0['showMass']
            }
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '2',
                'step': '1'
            },
            'domProps': {
                'value': t0['showMass']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('showMass', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Show\x20' + t0['_s'](t0['showMassMeaning']) + '\x20mass\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['showOwnName']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showOwnName', t3);
                }
            }
        }, [t0['_v']('Show\x20my\x20own\x20name')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['showOwnSkin']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showOwnSkin', t3);
                }
            }
        }, [t0['_v']('Show\x20my\x20own\x20skin')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['showOwnMass']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showOwnMass', t3);
                }
            }
        }, [t0['_v']('Show\x20my\x20own\x20mass')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['showCrown']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showCrown', t3);
                }
            }
        }, [t0['_v']('Show\x20crown')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['foodVisible']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('foodVisible', t3);
                }
            }
        }, [t0['_v']('Show\x20food')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['eatAnimation']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('eatAnimation', t3);
                }
            }
        }, [t0['_v']('Show\x20eat\x20animation')])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['showHud']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showHud', t3);
                }
            }
        }, [t0['_v']('HUD')])], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showLeaderboard']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showLeaderboard', t3);
                }
            }
        }, [t0['_v']('Show\x20leaderboard')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showServerName']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showServerName', t3);
                }
            }
        }, [t0['_v']('Leaderboard:\x20Server\x20name')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showChat']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showChat', t3);
                }
            }
        }, [t0['_v']('Show\x20chat')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['minimapEnabled']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('minimapEnabled', t3);
                }
            }
        }, [t0['_v']('Show\x20minimap')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['minimapLocations']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('minimapLocations', t3);
                }
            }
        }, [t0['_v']('Show\x20minimap\x20locations')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showFPS']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showFPS', t3);
                }
            }
        }, [t0['_v']('Stats:\x20FPS')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showPing']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showPing', t3);
                }
            }
        }, [t0['_v']('Stats:\x20Ping')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showPlayerMass']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showPlayerMass', t3);
                }
            }
        }, [t0['_v']('Stats:\x20Current\x20mass')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showPlayerScore']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showPlayerScore', t3);
                }
            }
        }, [t0['_v']('Stats:\x20Score')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showCellCount']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showCellCount', t3);
                }
            }
        }, [t0['_v']('Stats:\x20Cell\x20count')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showClock']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showClock', t3);
                }
            }
        }, [t0['_v']('Minimap\x20stats:\x20System\x20time')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showSessionTime']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showSessionTime', t3);
                }
            }
        }, [t0['_v']('Minimap\x20stats:\x20Session\x20time')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showPlayerCount']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showPlayerCount', t3);
                }
            }
        }, [t0['_v']('Minimap\x20stats:\x20Players\x20in\x20server')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['showHud'],
                'checked': t0['showSpectators']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showSpectators', t3);
                }
            }
        }, [t0['_v']('Minimap\x20stats:\x20Spectators')])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Chat\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('div', {
            'staticClass': 'row'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20You\x20can\x20right-click\x20name\x20in\x20chat\x20to\x20block\x20them\x20until\x20server\x20restart\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['showBlockedMessageCount']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showBlockedMessageCount', t3);
                }
            }
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Show\x20blocked\x20message\x20count')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['filterChatMessages']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('filterChatMessages', t3);
                }
            }
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Filter\x20profanity')])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'reset-option-wrapper'
        }, [t2('span', {
            'staticClass': 'reset-option',
            'on': {
                'click': function(t3) {
                    return t0['confirmReset']();
                }
            }
        }, [t2('i', {
            'staticClass': 'fa\x20fa-undo'
        }), t0['_v']('\x20Reset\x0a\x20\x20\x20\x20\x20\x20\x20\x20')])])]);
    };
    hM['_withStripped'] = !![];
    var hy = h2(0x1)
      , hc = h2(0x4)
      , hd = h2(0x5)
      , hU = PIXI['utils']['isWebGLSupported']()
      , hS = hU && hc['useWebGL'];
    function hm(t0) {
        switch (t0) {
        case 0x0:
            return 'nobody\x27s';
        case 0x1:
            return 'tag\x20players\x27';
        case 0x2:
            return 'everybody\x27s';
        default:
            return '???';
        }
    }
    var hb = {
        'data': () => ({
            'clientHash': 'bf31',
            'isWebGLSupported': hU,
            'useWebGL': hS,
            'gameResolution': hc['gameResolution'],
            'smallTextThreshold': hc['smallTextThreshold'],
            'autoZoom': hc['autoZoom'],
            'autoRespawn': hc['autoRespawn'],
            'mouseFreezeSoft': hc['mouseFreezeSoft'],
            'rememberEjecting': hc['rememberEjecting'],
            'lockInactivePosition': hc['lockInactivePosition'],
            'cameraFollowBoth': hc['cameraFollowBoth'],
            'minionControl': hc['minionControl'],
            'drawDelay': hc['drawDelay'],
            'cameraMoveSmoothing': hc['cameraMoveSmoothing'],
            'cameraZoomSmoothing': hc['cameraZoomSmoothing'],
            'cameraZoomSpeed': hc['cameraZoomSpeed'],
            'replayDuration': hc['replayDuration'],
            'showNames': hc['showNames'],
            'showMass': hc['showMass'],
            'showSkins': hc['showSkins'],
            'showOwnName': hc['showOwnName'],
            'showOwnMass': hc['showOwnMass'],
            'showOwnSkin': hc['showOwnSkin'],
            'showCrown': hc['showCrown'],
            'foodVisible': hc['foodVisible'],
            'eatAnimation': hc['eatAnimation'],
            'showHud': hc['showHud'],
            'showLeaderboard': hc['showLeaderboard'],
            'showServerName': hc['showServerName'],
            'showChat': hc['showChat'],
            'minimapEnabled': hc['minimapEnabled'],
            'minimapLocations': hc['minimapLocations'],
            'showFPS': hc['showFPS'],
            'showPing': hc['showPing'],
            'showCellCount': hc['showCellCount'],
            'showPlayerScore': hc['showPlayerScore'],
            'showPlayerMass': hc['showPlayerMass'],
            'showClock': hc['showClock'],
            'showSessionTime': hc['showSessionTime'],
            'showPlayerCount': hc['showPlayerCount'],
            'showSpectators': hc['showSpectators'],
            'showBlockedMessageCount': hc['showBlockedMessageCount'],
            'filterChatMessages': hc['filterChatMessages']
        }),
        'computed': {
            'showNamesMeaning'() {
                return hm(this['showNames']);
            },
            'showSkinsMeaning'() {
                return hm(this['showSkins']);
            },
            'showMassMeaning'() {
                return hm(this['showMass']);
            }
        },
        'methods': {
            'promptRestart'() {
                hd['confirm']('Refresh\x20page\x20to\x20apply\x20changes?', () => {
                    setTimeout( () => {
                        location['reload']();
                    }
                    , 0x1f4);
                }
                );
            },
            'change'(t0, t1) {
                var t2;
                if (t2 = t1 && t1['target'] ? isNaN(t1['target']['valueAsNumber']) ? t1['target']['value'] : t1['target']['valueAsNumber'] : t1,
                hc[t0] != t2) {
                    switch (this[t0] = t2,
                    hc['set'](t0, t2),
                    t0) {
                    case 'backgroundColor':
                        var t3 = PIXI['utils']['string2hex'](t2);
                        hy['renderer']['backgroundColor'] = t3;
                        break;
                    case 'minimapLocations':
                        hy['events']['$emit']('minimap-show-locations', t2);
                        break;
                    case 'showHud':
                        window['app']['showHud'] = t2;
                    }
                    if (hy['running'])
                        switch (t0) {
                        case 'showNames':
                        case 'showSkins':
                        case 'showMass':
                        case 'showOwnName':
                        case 'showOwnSkin':
                        case 'showOwnMass':
                            hy['playerManager']['invalidateVisibility']();
                            break;
                        case 'foodVisible':
                            hy['scene']['food']['visible'] = t2;
                            break;
                        case 'showLeaderboard':
                            hy['events']['$emit']('leaderboard-visible', t2);
                            break;
                        case 'minimapEnabled':
                            t2 ? hy['events']['$emit']('minimap-show') : hy['events']['$emit']('minimap-hide');
                            break;
                        case 'showFPS':
                        case 'showPing':
                        case 'showPlayerMass':
                        case 'showPlayerScore':
                        case 'showCellCount':
                            hy['events']['$emit']('stats-invalidate-shown');
                            break;
                        case 'showClock':
                        case 'showSessionTime':
                        case 'showSpectators':
                        case 'showPlayerCount':
                            hy['events']['$emit']('minimap-stats-invalidate-shown');
                            break;
                        case 'showChat':
                            hy['events']['$emit']('chat-visible', t2);
                            break;
                        case 'showBlockedMessageCount':
                            hy['events']['$emit']('show-blocked-message-count', t2);
                            break;
                        case 'rememberEjecting':
                            if (typeof hy !== 'undefined' && hy && typeof hy['send'] === 'function') {
                                var t4 = new ArrayBuffer(0x2)
                                  , t5 = new DataView(t4);
                                t5['setUint8'](0x0, 0x1a),
                                t5['setUint8'](0x1, t2 ? 0x1 : 0x0),
                                hy['send'](t4);
                            } else
                                console['warn']('Network\x20send\x20function\x20not\x20available\x20for\x20rememberEjecting\x20preference.');
                            break;
                        case 'minionControl':
                            if (t2 && this['lockInactivePosition']) {
                                this['lockInactivePosition'] = ![],
                                hc['set']('lockInactivePosition', ![]);
                                if (typeof hy !== 'undefined' && hy && typeof hy['send'] === 'function') {
                                    var t6 = new ArrayBuffer(0x2)
                                      , t7 = new DataView(t6);
                                    t7['setUint8'](0x0, 0x1c),
                                    t7['setUint8'](0x1, 0x0),
                                    hy['send'](t6);
                                }
                            }
                            if (typeof hy !== 'undefined' && hy && typeof hy['send'] === 'function') {
                                var t4 = new ArrayBuffer(0x2)
                                  , t5 = new DataView(t4);
                                t5['setUint8'](0x0, 0x1b),
                                t5['setUint8'](0x1, t2 ? 0x1 : 0x0),
                                hy['send'](t4);
                            } else
                                console['warn']('Network\x20send\x20function\x20not\x20available\x20for\x20minionControl\x20preference.');
                            break;
                        case 'lockInactivePosition':
                            if (t2 && this['minionControl']) {
                                this['minionControl'] = ![],
                                hc['set']('minionControl', ![]);
                                if (typeof hy !== 'undefined' && hy && typeof hy['send'] === 'function') {
                                    var t8 = new ArrayBuffer(0x2)
                                      , t9 = new DataView(t8);
                                    t9['setUint8'](0x0, 0x1b),
                                    t9['setUint8'](0x1, 0x0),
                                    hy['send'](t8);
                                }
                            }
                            if (typeof hy !== 'undefined' && hy && typeof hy['send'] === 'function') {
                                var t4 = new ArrayBuffer(0x2)
                                  , t5 = new DataView(t4);
                                t5['setUint8'](0x0, 0x1c),
                                t5['setUint8'](0x1, t2 ? 0x1 : 0x0),
                                hy['send'](t4);
                            } else
                                console['warn']('Network\x20send\x20function\x20not\x20available\x20for\x20lockInactivePosition\x20preference.');
                        }
                }
            },
            'confirmReset'() {
                hd['confirm']('Are\x20you\x20sure\x20you\x20want\x20to\x20reset\x20all\x20setting\x20options?', () => this['reset']());
            },
            'reset'() {
                var t0 = ['clientHash', 'isWebGLSupported'];
                for (var t1 in this['$data'])
                    t0['includes'](t1) || this['change'](t1, hc['getDefault'](t1));
            }
        }
    }
      , hA = (h2(0xaa),
    Object(hi['a'])(hb, hM, [], ![], null, '3ddebeb3', null));
    hA['options']['__file'] = 'src/components/settings.vue';
    var hC = hA['exports']
      , hI = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'container'
        }, [t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Colors\x20and\x20images\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options\x20two-columns'
        }, [t2('span', [t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Background')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'value': t0['backgroundColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('backgroundColor', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Map\x20border')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'value': t0['borderColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('borderColor', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input',
            'class': {
                'disabled': !t0['useFoodColor']
            }
        }, [t2('span', [t0['_v']('Food')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'disabled': !t0['useFoodColor'],
                'value': t0['foodColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('foodColor', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Ejected\x20cells')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'value': t0['ejectedColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('ejectedColor', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Name\x20outline')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'value': t0['cellNameOutlineColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellNameOutlineColor', t3);
                }
            }
        })], 0x1)]), t0['_v']('\x20'), t2('span', [t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Cursor')]), t0['_v']('\x20'), t2('image-option', {
            'staticClass': 'right',
            'attrs': {
                'width': '32',
                'defaults': '',
                'value': t0['cursorImageUrl']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cursorImageUrl', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input',
            'class': {
                'disabled': !t0['showBackgroundImage']
            }
        }, [t2('span', [t0['_v']('Map\x20image')]), t0['_v']('\x20'), t2('image-option', {
            'staticClass': 'right',
            'attrs': {
                'width': '330',
                'defaults': t0['bgDefault'],
                'disabled': !t0['showBackgroundImage'],
                'value': t0['backgroundImageUrl']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('backgroundImageUrl', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Viruses')]), t0['_v']('\x20'), t2('image-option', {
            'staticClass': 'right',
            'attrs': {
                'width': '50',
                'defaults': t0['virusDefault'],
                'value': t0['virusImageUrl']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('virusImageUrl', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Mass\x20text')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'value': t0['cellMassColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellMassColor', t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-input'
        }, [t2('span', [t0['_v']('Mass\x20outline')]), t0['_v']('\x20'), t2('color-option', {
            'staticClass': 'right',
            'attrs': {
                'value': t0['cellMassOutlineColor']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellMassOutlineColor', t3);
                }
            }
        })], 0x1)])])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t0['_m'](0x0), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('div', {
            'staticClass': 'bottom-margin'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Font\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t2('input', {
            'attrs': {
                'type': 'text',
                'spellcheck': 'false',
                'placeholder': 'Hind\x20Madurai',
                'maxlength': '30'
            },
            'domProps': {
                'value': t0['cellNameFont']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellNameFont', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range'
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '2',
                'step': '1'
            },
            'domProps': {
                'value': t0['cellNameWeight']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellNameWeight', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['cellNameWeightMeaning']) + '\x20name\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range',
            'class': {
                'off': !t0['cellNameOutline']
            }
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '3',
                'step': '1'
            },
            'domProps': {
                'value': t0['cellNameOutline']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellNameOutline', t3);
                }
            }
        }), t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['cellNameOutlineMeaning']) + '\x20name\x20outline\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['cellNameSmoothOutline']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('cellNameSmoothOutline', t3);
                }
            }
        }, [t0['_v']('Smooth\x20name\x20outline')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Long\x20name\x20threshold\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s'](t0['cellLongNameThreshold']) + 'px')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '500',
                'max': '1250',
                'step': '50'
            },
            'domProps': {
                'value': t0['cellLongNameThreshold']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellLongNameThreshold', t3);
                }
            }
        })])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t0['_m'](0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('div', {
            'staticClass': 'bottom-margin'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Font\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t2('input', {
            'attrs': {
                'type': 'text',
                'spellcheck': 'false',
                'placeholder': 'Hind\x20Madurai',
                'maxlength': '30'
            },
            'domProps': {
                'value': t0['cellMassFont']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellMassFont', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range'
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '2',
                'step': '1'
            },
            'domProps': {
                'value': t0['cellMassWeight']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellMassWeight', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['cellMassWeightMeaning']) + '\x20mass\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range',
            'class': {
                'off': !t0['cellMassOutline']
            }
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '3',
                'step': '1'
            },
            'domProps': {
                'value': t0['cellMassOutline']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellMassOutline', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['cellMassOutlineMeaning']) + '\x20mass\x20outline\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'inline-range'
        }, [t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '3',
                'step': '1'
            },
            'domProps': {
                'value': t0['cellMassTextSize']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('cellMassTextSize', t3);
                }
            }
        }), t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['cellMassTextSizeMeaning']) + '\x20mass\x20text\x20size\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['cellMassSmoothOutline']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('cellMassSmoothOutline', t3);
                }
            }
        }, [t0['_v']('Smooth\x20mass\x20outline')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['shortMass']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('shortMass', t3);
                }
            }
        }, [t0['_v']('Short\x20mass\x20format')])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Map\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t0['useWebGL'] ? t0['_e']() : t2('span', {
            'staticClass': 'right\x20silent'
        }, [t0['_v']('Requires\x20GPU\x20rendering')])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['useWebGL'],
                'checked': t0['showBackgroundImage']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('showBackgroundImage', t3);
                }
            }
        }, [t0['_v']('Show\x20map\x20image')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['useWebGL'] || !t0['showBackgroundImage'],
                'checked': t0['backgroundImageRepeat']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('backgroundImageRepeat', t3);
                }
            }
        }, [t0['_v']('Repeat\x20map\x20image')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'disabled': !t0['useWebGL'] || !t0['showBackgroundImage'],
                'checked': t0['backgroundDefaultIfUnequal']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('backgroundDefaultIfUnequal', t3);
                }
            }
        }, [t0['_v']('Always\x20crop\x20map\x20image')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'slider-option\x20bottom-margin',
            'class': {
                'disabled': !t0['useWebGL'] || !t0['showBackgroundImage']
            }
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Map\x20image\x20opacity\x20'), t2('span', {
            'staticClass': 'right'
        }, [t0['_v'](t0['_s']((0x64 * t0['backgroundImageOpacity'])['toFixed'](0x0)) + '%')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'slider',
            'attrs': {
                'type': 'range',
                'disabled': !t0['useWebGL'] || !t0['showBackgroundImage'],
                'min': '0.1',
                'max': '1',
                'step': '0.05'
            },
            'domProps': {
                'value': t0['backgroundImageOpacity']
            },
            'on': {
                'input': function(t3) {
                    return t0['change']('backgroundImageOpacity', t3);
                }
            }
        })]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['useFoodColor']
            },
            'on': {
                'change': function(t3) {
                    return t0['change']('useFoodColor', t3);
                }
            }
        }, [t0['_v']('Use\x20food\x20color')])], 0x1)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'reset-option-wrapper'
        }, [t2('span', {
            'staticClass': 'reset-option',
            'on': {
                'click': function(t3) {
                    return t0['confirmReset']();
                }
            }
        }, [t2('i', {
            'staticClass': 'fa\x20fa-undo'
        }), t0['_v']('\x20Reset\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')])])]);
    };
    hI['_withStripped'] = !![];
    var hN = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'color-button',
            'class': {
                'disabled': t0['disabled']
            },
            'style': {
                'backgroundColor': '#' + t0['hex']
            },
            'on': {
                'mousedown': function(t3) {
                    !t0['disabled'] && t0['showPicker'](!![]);
                }
            }
        }, [t0['pickerOpen'] ? t2('div', {
            'staticClass': 'color-picker-wrapper',
            'on': {
                'mousedown': function(t3) {
                    return t0['startMovingPivot'](t3);
                },
                'mousemove': function(t3) {
                    return t0['movePivot'](t3);
                },
                'mouseup': function(t3) {
                    return t0['stopMovingPivot'](t3);
                }
            }
        }, [t2('div', {
            'staticClass': 'color-picker-overlay'
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-picker\x20fade-box'
        }, [t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['hue'],
                'expression': 'hue'
            }],
            'staticClass': 'color-picker-hue',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '360',
                'step': '1'
            },
            'domProps': {
                'value': t0['hue']
            },
            'on': {
                'change': function(t3) {
                    return t0['triggerInput']();
                },
                '__r': function(t3) {
                    t0['hue'] = t3['target']['value'];
                }
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-picker-clr',
            'style': {
                'backgroundColor': 'hsl(' + t0['hue'] + ',\x20100%,\x2050%)'
            }
        }, [t2('div', {
            'staticClass': 'color-picker-sat'
        }, [t2('div', {
            'staticClass': 'color-picker-val'
        }, [t2('div', {
            'staticClass': 'color-picker-pivot',
            'style': {
                'left': 0x64 * t0['sat'] + 'px',
                'top': 0x64 - 0x64 * t0['val'] + 'px'
            }
        })])])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-picker-hex'
        }, [t2('span', {
            'staticClass': 'color-picker-hashtag'
        }, [t0['_v']('#')]), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['hex'],
                'expression': 'hex'
            }],
            'staticClass': 'color-picker-hex',
            'attrs': {
                'type': 'text',
                'spellcheck': 'false',
                'maxlength': '6',
                'placeholder': '000000'
            },
            'domProps': {
                'value': t0['hex']
            },
            'on': {
                'input': [function(t3) {
                    t3['target']['composing'] || (t0['hex'] = t3['target']['value']);
                }
                , function(t3) {
                    return t0['triggerInput']();
                }
                ]
            }
        })])])]) : t0['_e']()]);
    };
    hN['_withStripped'] = !![];
    var hY = {
        'data': () => ({
            'pickerOpen': ![],
            'movingPivot': ![],
            'hue': 0x0,
            'sat': 0x0,
            'val': 0x0
        }),
        'props': ['value', 'disabled'],
        'computed': {
            'hex': {
                'get'() {
                    return function(t0, t1, t2) {
                        var t3, t4, t5, t6, t7, t8, t9, th;
                        switch (t8 = t2 * (0x1 - t1),
                        t9 = t2 * (0x1 - (t7 = 0x6 * t0 - (t6 = Math['floor'](0x6 * t0))) * t1),
                        th = t2 * (0x1 - (0x1 - t7) * t1),
                        t6 % 0x6) {
                        case 0x0:
                            t3 = t2,
                            t4 = th,
                            t5 = t8;
                            break;
                        case 0x1:
                            t3 = t9,
                            t4 = t2,
                            t5 = t8;
                            break;
                        case 0x2:
                            t3 = t8,
                            t4 = t2,
                            t5 = th;
                            break;
                        case 0x3:
                            t3 = t8,
                            t4 = t9,
                            t5 = t2;
                            break;
                        case 0x4:
                            t3 = th,
                            t4 = t8,
                            t5 = t2;
                            break;
                        case 0x5:
                            t3 = t2,
                            t4 = t8,
                            t5 = t9;
                        }
                        return (t3 = Math['ceil'](0xff * t3)['toString'](0x10)['padStart'](0x2, '0')) + (t4 = Math['ceil'](0xff * t4)['toString'](0x10)['padStart'](0x2, '0')) + (t5 = Math['ceil'](0xff * t5)['toString'](0x10)['padStart'](0x2, '0'));
                    }(this['hue'] / 0x168, this['sat'], this['val']);
                },
                'set'(t0) {
                    if (t0 = t0['toLowerCase'](),
                    /^[0-9a-f]{6}$/['test'](t0)) {
                        var t1, t2, t3, t4, t5, t6, t7, t8 = (t1 = t0,
                        t2 = parseInt(t1['slice'](0x0, 0x2), 0x10) / 0xff,
                        t3 = parseInt(t1['slice'](0x2, 0x4), 0x10) / 0xff,
                        t4 = parseInt(t1['slice'](0x4, 0x6), 0x10) / 0xff,
                        t5 = Math['max'](t2, t3, t4),
                        t6 = t5 - Math['min'](t2, t3, t4),
                        [0x3c * ((t7 = t6 && (t5 == t2 ? (t3 - t4) / t6 : t5 == t3 ? 0x2 + (t4 - t2) / t6 : 0x4 + (t2 - t3) / t6)) < 0x0 ? t7 + 0x6 : t7), t5 && t6 / t5, t5]);
                        this['hue'] = t8[0x0],
                        this['sat'] = t8[0x1],
                        this['val'] = t8[0x2];
                    }
                }
            }
        },
        'methods': {
            'showPicker'(t0) {
                this['pickerOpen'] = t0;
            },
            'startMovingPivot'(t0) {
                var t1 = t0['target']['classList'];
                if (t1['contains']('color-picker-overlay'))
                    return this['showPicker'](![]),
                    void t0['stopPropagation']();
                (t1['contains']('color-picker-pivot') || t1['contains']('color-picker-val')) && (this['movingPivot'] = !![],
                this['movePivot'](t0));
            },
            'movePivot'(t0) {
                if (this['movingPivot']) {
                    var t1 = this['$el']['querySelector']('.color-picker-val')['getBoundingClientRect']()
                      , t2 = t0['clientX'] - t1['x']
                      , t3 = t0['clientY'] - t1['y'];
                    this['sat'] = t2 / 0x64,
                    this['val'] = 0x1 - t3 / 0x64,
                    this['sat'] = Math['min'](Math['max'](this['sat'], 0x0), 0x1),
                    this['val'] = Math['min'](Math['max'](this['val'], 0x0), 0x1);
                }
            },
            'stopMovingPivot'(t0) {
                this['movingPivot'] && (this['movePivot'](t0),
                this['movingPivot'] = ![],
                this['triggerInput']());
            },
            'triggerInput'() {
                this['$emit']('input', this['hex']);
            }
        },
        'created'() {
            this['value'] && (this['hex'] = this['value']);
        }
    }
      , hg = (h2(0xac),
    Object(hi['a'])(hY, hN, [], ![], null, '5b0666af', null));
    hg['options']['__file'] = 'src/components/color-option.vue';
    var hK = hg['exports']
      , hO = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'image-button',
            'class': {
                'disabled': t0['disabled']
            },
            'style': {
                'backgroundColor': '#' + t0['hex']
            },
            'on': {
                'mousedown': function(t3) {
                    !t0['disabled'] && t0['showPicker'](!![]);
                }
            }
        }, [t2('div', {
            'staticClass': 'image-button-text'
        }, [t0['_v']('...')]), t0['_v']('\x20'), t0['pickerOpen'] ? t2('div', {
            'staticClass': 'image-picker-wrapper',
            'on': {
                'click': function(t3) {
                    return t0['tryHidePicker'](t3);
                }
            }
        }, [t2('div', {
            'staticClass': 'image-picker-overlay'
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'image-picker\x20fade-box'
        }, [t2('img', {
            'staticClass': 'image-picker-preview',
            'style': {
                'maxWidth': (t0['value'] ? t0['width'] : 0xc8) + 'px'
            },
            'attrs': {
                'src': t0['value'],
                'alt': 'No\x20image\x20chosen\x20or\x20it\x20is\x20invalid'
            },
            'on': {
                'click': function(t3) {
                    return t0['openFileChooser']();
                },
                'dragover': function(t3) {
                    return t0['allowDrop'](t3);
                },
                'drop': function(t3) {
                    return t0['onImageDrop'](t3);
                }
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'image-picker-information'
        }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Click\x20or\x20drop\x20onto\x20image\x20to\x20change.'), t2('br'), t0['_v']('\x20'), 'defaults'in this ? t2('span', {
            'staticClass': 'image-picker-reset',
            'on': {
                'click': function(t3) {
                    return t0['triggerInput'](t0['defaults']);
                }
            }
        }, [t0['_v']('Reset\x20to\x20default')]) : t0['_e']()]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'image-picker-input',
            'attrs': {
                'type': 'file',
                'accept': 'image/png,\x20image/jpeg,\x20image/bmp,\x20image/webp'
            },
            'on': {
                'change': function(t3) {
                    return t0['onImageSelect'](t3);
                }
            }
        })])]) : t0['_e']()]);
    };
    hO['_withStripped'] = !![];
    var hf = {
        'data': () => ({
            'pickerOpen': ![],
            'fileReader': null
        }),
        'props': ['value', 'width', 'disabled', 'defaults'],
        'methods': {
            'showPicker'(t0) {
                !this['pickerOpen'] && t0 && (this['imageLoadedOnce'] = ![]),
                this['pickerOpen'] = t0;
            },
            'tryHidePicker'(t0) {
                t0['target']['classList']['contains']('image-picker-overlay') && (this['showPicker'](![]),
                t0['stopPropagation']());
            },
            'triggerInput'(t0) {
                this['$emit']('input', t0);
            },
            'openFileChooser'() {
                this['$el']['querySelector']('.image-picker-input')['click']();
            },
            'allowDrop'(t0) {
                t0['preventDefault']();
            },
            'getFileReader'() {
                var t0 = new FileReader();
                return t0['addEventListener']('load', t1 => {
                    this['triggerInput'](t1['target']['result']);
                }
                ),
                t0;
            },
            'onImageSelect'(t0) {
                if (0x0 !== t0['target']['files']['length']) {
                    var t1 = t0['target']['files'][0x0];
                    t1['type']['startsWith']('image/') && this['getFileReader']()['readAsDataURL'](t1);
                }
            },
            'onImageDrop'(t0) {
                if (t0['preventDefault'](),
                0x0 !== t0['dataTransfer']['files']['length']) {
                    var t1 = t0['dataTransfer']['files'][0x0];
                    t1['type']['startsWith']('image/') && this['getFileReader']()['readAsDataURL'](t1);
                }
            }
        }
    }
      , hl = (h2(0xae),
    Object(hi['a'])(hf, hO, [], ![], null, '641581b7', null));
    hl['options']['__file'] = 'src/components/image-option.vue';
    var hu = hl['exports']
      , hD = h2(0x1)
      , hV = h2(0x4)
      , hP = h2(0x5);
    function hR(t0) {
        switch (t0) {
        case 0x0:
            return 'Thin';
        case 0x1:
            return 'Normal';
        case 0x2:
            return 'Bold';
        default:
            return '???';
        }
    }
    function hQ(t0) {
        switch (t0) {
        case 0x0:
            return 'No';
        case 0x1:
            return 'Thin';
        case 0x2:
            return 'Thick';
        case 0x3:
            return 'Thickest';
        default:
            return '???';
        }
    }
    function ha(t0, t1) {
        return t0 ? new Promise( (t2, t3) => {
            var t4 = new Image();
            t4['onload'] = () => {
                var t5 = document['createElement']('canvas')
                  , t6 = t5['getContext']('2d')
                  , t7 = Math['max'](t4['width'], t4['height'])
                  , t8 = Math['min'](t4['width'], t4['height'])
                  , t9 = t7 === t4['width']
                  , th = Math['min'](t7, t1) / t7
                  , tT = (t9 ? t7 : t8) * th
                  , tL = (t9 ? t8 : t7) * th;
                t5['width'] = tT,
                t5['height'] = tL,
                t6['drawImage'](t4, 0x0, 0x0, tT, tL),
                t2(t5['toDataURL']());
            }
            ,
            t4['onerror'] = t3,
            t4['src'] = t0;
        }
        ) : null;
    }
    var hW = PIXI['utils']['isWebGLSupported']() && hV['useWebGL']
      , hn = {
        'components': {
            'color-option': hK,
            'image-option': hu
        },
        'data': () => ({
            'useWebGL': hW,
            'bgDefault': hV['getDefault']('backgroundImageUrl'),
            'virusDefault': hV['getDefault']('virusImageUrl'),
            'backgroundColor': hV['backgroundColor'],
            'borderColor': hV['borderColor'],
            'foodColor': hV['foodColor'],
            'ejectedColor': hV['ejectedColor'],
            'cellNameOutlineColor': hV['cellNameOutlineColor'],
            'cursorImageUrl': hV['cursorImageUrl'],
            'backgroundImageUrl': hV['backgroundImageUrl'],
            'virusImageUrl': hV['virusImageUrl'],
            'cellMassColor': hV['cellMassColor'],
            'cellMassOutlineColor': hV['cellMassOutlineColor'],
            'cellNameFont': hV['cellNameFont'],
            'cellNameWeight': hV['cellNameWeight'],
            'cellNameOutline': hV['cellNameOutline'],
            'cellNameSmoothOutline': hV['cellNameSmoothOutline'],
            'cellMassFont': hV['cellMassFont'],
            'cellMassWeight': hV['cellMassWeight'],
            'cellMassOutline': hV['cellMassOutline'],
            'cellMassSmoothOutline': hV['cellMassSmoothOutline'],
            'cellMassTextSize': hV['cellMassTextSize'],
            'cellLongNameThreshold': hV['cellLongNameThreshold'],
            'shortMass': hV['shortMass'],
            'showBackgroundImage': hV['showBackgroundImage'],
            'backgroundImageRepeat': hV['backgroundImageRepeat'],
            'backgroundDefaultIfUnequal': hV['backgroundDefaultIfUnequal'],
            'backgroundImageOpacity': hV['backgroundImageOpacity'],
            'useFoodColor': hV['useFoodColor']
        }),
        'computed': {
            'cellNameWeightMeaning'() {
                return hR(this['cellNameWeight']);
            },
            'cellMassWeightMeaning'() {
                return hR(this['cellMassWeight']);
            },
            'cellNameOutlineMeaning'() {
                return hQ(this['cellNameOutline']);
            },
            'cellMassOutlineMeaning'() {
                return hQ(this['cellMassOutline']);
            },
            'cellMassTextSizeMeaning'() {
                return function(t0) {
                    switch (t0) {
                    case 0x0:
                        return 'Small';
                    case 0x1:
                        return 'Normal';
                    case 0x2:
                        return 'Large';
                    case 0x3:
                        return 'Largest';
                    default:
                        return '???';
                    }
                }(this['cellMassTextSize']);
            }
        },
        'methods': {
            async 'change'(t0, t1, t2) {
                var t3;
                t3 = t1 && t1['target'] ? isNaN(t1['target']['valueAsNumber']) ? t1['target']['value'] : t1['target']['valueAsNumber'] : t1;
                try {
                    switch (t0) {
                    case 'cursorImageUrl':
                        t3 = await ha(t3, 0x20);
                        break;
                    case 'backgroundImageUrl':
                        t3 !== this['bgDefault'] && (t3 = await ha(t3, 0xfa0));
                        break;
                    case 'virusImageUrl':
                        t3 !== this['virusDefault'] && (t3 = await ha(t3, 0xc8));
                    }
                } catch (t5) {
                    return void hP['alert']('This\x20image\x20is\x20too\x20large\x20to\x20even\x20be\x20loaded.');
                }
                if (hV[t0] != t3) {
                    var t4 = this[t0];
                    try {
                        hV['set'](t0, t3);
                    } catch (t6) {
                        return hV['set'](t0, t4),
                        void hP['alert']('Saving\x20this\x20setting\x20failed.\x20Perhaps\x20the\x20image\x20is\x20too\x20large?');
                    }
                    switch (this[t0] = t3,
                    t0) {
                    case 'cursorImageUrl':
                        hD['events']['$emit']('set-cursor-url', t3);
                        break;
                    case 'backgroundColor':
                        hD['renderer']['backgroundColor'] = PIXI['utils']['string2hex'](t3);
                        break;
                    case 'cellNameOutlineColor':
                    case 'cellNameFont':
                    case 'cellNameWeight':
                    case 'cellNameOutline':
                    case 'cellNameSmoothOutline':
                        hD['settings']['compileNameFontStyle']();
                        break;
                    case 'cellMassColor':
                    case 'cellMassOutlineColor':
                    case 'cellMassFont':
                    case 'cellMassWeight':
                    case 'cellMassOutline':
                    case 'cellMassSmoothOutline':
                    case 'cellMassTextSize':
                        hD['settings']['compileMassFontStyle']();
                        break;
                    case 'cellLongNameThreshold':
                        hD['scene']['resetPlayerLongNames']();
                    }
                    if (hD['running'])
                        switch (t0) {
                        case 'borderColor':
                            hD['scene']['resetBorder']();
                            break;
                        case 'foodColor':
                            hV['useFoodColor'] && hD['scene']['reloadFoodTextures']();
                            break;
                        case 'ejectedColor':
                            hD['scene']['reloadEjectedTextures']();
                            break;
                        case 'virusImageUrl':
                            hD['scene']['reloadVirusTexture']();
                            break;
                        case 'cellNameOutlineColor':
                        case 'cellNameFont':
                        case 'cellNameWeight':
                        case 'cellNameOutline':
                        case 'cellNameSmoothOutline':
                            hD['scene']['resetNameTextStyle']();
                            break;
                        case 'cellMassColor':
                        case 'cellMassOutlineColor':
                        case 'cellMassFont':
                        case 'cellMassWeight':
                        case 'cellMassOutline':
                        case 'cellMassSmoothOutline':
                        case 'cellMassTextSize':
                            hD['scene']['resetMassTextStyle'](!![]);
                            break;
                        case 'showBackgroundImage':
                            hD['scene']['toggleBackgroundImage'](t3);
                            break;
                        case 'backgroundImageUrl':
                        case 'backgroundImageRepeat':
                        case 'backgroundDefaultIfUnequal':
                        case 'backgroundImageOpacity':
                            hD['scene']['setBackgroundImage']();
                            break;
                        case 'useFoodColor':
                            hD['scene']['reloadFoodTextures']();
                        }
                }
            },
            'confirmReset'() {
                hP['confirm']('Are\x20you\x20sure\x20you\x20want\x20to\x20reset\x20all\x20theming\x20options?', () => this['reset']());
            },
            'reset'() {
                var t0 = ['useWebGL', 'bgDefault', 'virusDefault'];
                for (var t1 in this['$data'])
                    t0['includes'](t1) || this['change'](t1, hV['getDefault'](t1));
            }
        }
    }
      , hB = (h2(0xb0),
    Object(hi['a'])(hn, hI, [function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'header'
        }, [this['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Name\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t1('div', {
            'staticClass': 'right\x20silent'
        }, [this['_v']('Fonts\x20from\x20your\x20device\x20only')])]);
    }
    , function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'header'
        }, [this['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Mass\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t1('div', {
            'staticClass': 'right\x20silent'
        }, [this['_v']('Fonts\x20from\x20your\x20device\x20only')])]);
    }
    ], ![], null, '15c13b66', null));
    hB['options']['__file'] = 'src/components/theming.vue';
    var hG = hB['exports']
      , hw = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'attrs': {
                'id': 'hotkey-container'
            }
        }, [t2('div', {
            'staticClass': 'hotkeys'
        }, t0['_l'](t0['availableHotkeys'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'row'
            }, [t2('span', {
                'staticClass': 'action'
            }, [t0['_v'](t0['_s'](t4))]), t0['_v']('\x20'), t2('span', {
                'staticClass': 'bind',
                'attrs': {
                    'tabindex': '0'
                },
                'on': {
                    'mousedown': function(t5) {
                        return t0['onMouseDown'](t5, t3);
                    },
                    'keydown': function(t5) {
                        return t5['preventDefault'](),
                        t0['onKeyDown'](t5, t3);
                    }
                }
            }, [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['hotkeys'][t3]) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')])]);
        }), 0x0), t0['_v']('\x20'), t2('div', {
            'staticClass': 'footer'
        }, [t2('span', {
            'staticClass': 'reset-button2',
            'on': {
                'click': t0['onResetClick']
            }
        }, [t2('i', {
            'staticClass': 'fa\x20fa-undo'
        }), t0['_v']('\x20Reset\x0a\x20\x20\x20\x20\x20\x20\x20\x20')])])]);
    };
    hw['_withStripped'] = !![];
    var hv = h2(0x41)
      , hZ = h2(0x5)
      , hJ = {
        'data'() {
            return {
                'availableHotkeys': (t0 = {
                    'Feed': 'feed',
                    'Feed\x20macro': 'feedMacro',
                    'Split': 'split',
                    'Doublesplit': 'splitx2',
                    'Triplesplit': 'splitx3',
                    'Quad\x20split': 'splitMax',
                    'Split\x2032': 'split32',
                    'Split\x2064': 'split64',
                    'Split\x20128': 'split128',
                    'Split\x20256': 'split256',
                    'Diagonal\x20linesplit': 'linesplit',
                    'Freeze\x20mouse': 'freezeMouse',
                    'Lock\x20linesplit': 'lockLinesplit',
                    'Stop\x20movement': 'stopMovement',
                    'Respawn': 'respawn',
                    'Toggle\x20auto\x20respawn': 'toggleAutoRespawn',
                    'Toggle\x20skins': 'toggleSkins',
                    'Toggle\x20names': 'toggleNames',
                    'Toggle\x20food': 'toggleFood',
                    'Toggle\x20mass': 'toggleMass',
                    'Toggle\x20chat': 'toggleChat',
                    'Toggle\x20HUD': 'toggleHud',
                    'Spectate\x20lock': 'spectateLock',
                    'Save\x20replay': 'saveReplay',
                    'Zoom\x20level\x201': 'zoomLevel1',
                    'Zoom\x20level\x202': 'zoomLevel2',
                    'Zoom\x20level\x203': 'zoomLevel3',
                    'Zoom\x20level\x204': 'zoomLevel4',
                    'Zoom\x20level\x205': 'zoomLevel5',
                    'Switch\x20Multibox': 'switchMultibox',
                    'Minion\x20Split': 'minionSplit',
                    'Minion\x20Split\x2032': 'minionSplit32',
                    'Minion\x20Split\x2064': 'minionSplit64',
                    'Minion\x20Split\x20128': 'minionSplit128',
                    'Minion\x20Split\x20256': 'minionSplit256',
                    'Minion\x20Locklinesplit': 'minionLocklinesplit',
                    'Minion\x20Diagonal\x20Linesplit': 'minionDiagonalLinesplit',
                    'Minion\x20Respawn': 'minionRespawn',
                    'Minion\x20Feed': 'minionFeed',
                    'Minion\x20Feed\x20Macro': 'minionFeedMacro',
                    'Minion\x20Triplesplit': 'minionTriplesplit',
                    'Minion\x20Quadsplit': 'minionQuadsplit',
                    'Minion\x20Doublesplit': 'minionDoublesplit'
                },
                localStorage['adminMode'] && (t0['Select\x20Player'] = 'selectPlayer',
                t0['Fast\x20Ban'] = 'fastBan'),
                t0),
                'hotkeys': hv['get']()
            };
            var t0;
        },
        'methods': {
            'onResetClick': function() {
                hZ['confirm']('Are\x20you\x20sure\x20you\x20want\x20to\x20reset\x20all\x20hotkeys?', () => {
                    this['hotkeys'] = hv['reset']();
                }
                );
            },
            'onMouseDown': function(t0, t1) {
                if (t0['target'] === document['activeElement']) {
                    var t2 = 'MOUSE' + t0['button'];
                    hv['set'](t1, t2) && (t0['preventDefault'](),
                    this['hotkeys'][t1] = t2,
                    t0['target']['blur']());
                }
            },
            'onKeyDown': function(t0, t1) {
                var t2 = hv['convertKey'](t0['code']);
                'ESCAPE' !== t2 && 'ENTER' !== t2 ? ('DELETE' == t2 && (t2 = ''),
                hv['set'](t1, t2) && (this['hotkeys'][t1] = t2,
                t0['target']['blur']())) : t0['target']['blur']();
            }
        }
    }
      , hk = (h2(0xb2),
    Object(hi['a'])(hJ, hw, [], ![], null, '2dbed53e', null));
    hk['options']['__file'] = 'src/components/hotkeys.vue';
    var hE = hk['exports']
      , ho = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'container'
        }, [t2('input', {
            'ref': 'file',
            'staticStyle': {
                'display': 'none'
            },
            'attrs': {
                'type': 'file',
                'accept': '.aetlis',
                'multiple': ''
            },
            'on': {
                'change': function(t3) {
                    return t0['onFile'](t3);
                }
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'replay-button-row'
        }, [t2('input', {
            'staticClass': 'vanis-button',
            'attrs': {
                'type': 'button',
                'value': 'Import'
            },
            'on': {
                'click': function(t3) {
                    return t0['$refs']['file']['click']();
                }
            }
        }), t0['_v']('\x20'), t2('input', {
            'staticClass': 'vanis-button',
            'attrs': {
                'type': 'button',
                'disabled': t0['downloading'] || !t0['replays']['length'],
                'value': t0['downloading'] ? 'Packing...' : 'Download\x20All'
            },
            'on': {
                'click': function(t3) {
                    return t0['downloadAllReplays']();
                }
            }
        }), t0['_v']('\x20'), t2('input', {
            'staticClass': 'vanis-button',
            'attrs': {
                'type': 'button',
                'value': 'Delete\x20All',
                'disabled': t0['downloading'] || !t0['replays']['length']
            },
            'on': {
                'click': function(t3) {
                    return t0['deleteAllReplays']();
                }
            }
        }), t0['_v']('\x20'), t2('span', {
            'staticClass': 'replay-count-info'
        }, [t0['_v'](t0['_s'](t0['loaded'] ? t0['replays']['length'] + '\x20replays' : 'Loading'))])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'replays-container'
        }, [t2('div', {
            'staticClass': 'replays'
        }, [!t0['replays']['length'] && t0['loaded'] ? t2('div', {
            'staticClass': 'notification'
        }, [t2('div', [t0['_v']('Press\x20'), t2('b', [t0['_v'](t0['_s'](t0['hotkey']))]), t0['_v']('\x20in\x20game\x20to\x20save\x20last\x20'), t2('b', [t0['_v'](t0['_s'](t0['replayDuration']))]), t0['_v']('\x20seconds\x20of\x20gameplay.')]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'color': 'red',
                'font-weight': 'bold'
            }
        }, [t0['_v']('Replays\x20are\x20saved\x20in\x20browser\x20memory!')]), t0['_v']('\x20'), t2('div', [t0['_v']('They\x20get\x20permanently\x20erased\x20if\x20browser\x20data\x20gets\x20cleared.')])]) : t0['_e'](), t0['_v']('\x20'), t0['_l'](t0['replays'], function(t3, t4) {
            return t2('replay-item', {
                'key': t4,
                'attrs': {
                    'replay': t3
                }
            });
        })], 0x2)])]);
    };
    ho['_withStripped'] = !![];
    var hr = h2(0x71)
      , hF = h2(0x56)
      , T0 = h2(0xb4)
      , T1 = h2(0x1)
      , T2 = h2(0x41)
      , T3 = h2(0x4)
      , T4 = h2(0x5)
      , T5 = h2(0x8)
      , T6 = T1['replay']['database']
      , T7 = {
        'data': () => ({
            'loaded': ![],
            'replays': [],
            'downloading': ![],
            'hotkey': T2['get']()['saveReplay'],
            'replayDuration': NaN
        }),
        'components': {
            'replayItem': hr['default']
        },
        'methods': {
            'downloadAllReplays'() {
                this['downloading'] = !![];
                var t0 = new T0();
                T6['iterate']( (t1, t2) => {
                    t0['file'](t2 + '.aetlis', t1),
                    0x0;
                }
                , () => {
                    t0['generateAsync']({
                        'type': 'blob'
                    })['then'](t1 => {
                        var t2 = 'replays_' + T5['getTimestamp']() + '.zip';
                        hF['saveAs'](t1, t2),
                        this['downloading'] = ![];
                    }
                    );
                }
                );
            },
            'deleteAllReplays'() {
                T4['confirm']('Are\x20you\x20sure\x20that\x20you\x20want\x20to\x20delete\x20all\x20replays?', async () => {
                    try {
                        await T6['clear']();
                    } catch (t0) {
                        return void T4['alert']('Error\x20clearing\x20replays:\x20' + t0['message']);
                    }
                    this['getReplays']();
                }
                );
            },
            'getReplays'() {
                var t0 = [];
                T6['iterate']( (t1, t2) => {
                    var t3 = {
                        'name': t2,
                        'data': t1
                    };
                    t1['startsWith']('REPLAY') ? t3['image'] = t1['split']('|')[0x2] : t3['image'] = 'img/replay-placeholder.png',
                    t0['push'](t3);
                }
                , () => {
                    this['replays'] = t0['reverse'](),
                    this['loaded'] = !![];
                }
                );
            },
            async 'onFile'(t0) {
                var t1 = Array['from'](t0['target']['files']);
                if (t1['length']) {
                    t0['target'] && (t0['target']['value'] = null);
                    var t2 = t1['map'](async t3 => {
                        var t4 = t3['name']['replace'](/\.vanis$/, '')
                          , t5 = await function(t6) {
                            return new Promise( (t7, t8) => {
                                var t9 = new FileReader();
                                t9['onload'] = th => t7(th['target']['result']),
                                t9['onerror'] = t8,
                                t9['readAsText'](t6);
                            }
                            );
                        }(t3);
                        return T6['setItem'](t4, t5);
                    }
                    );
                    try {
                        await Promise['all'](t2);
                    } catch (t3) {
                        T4['alert']('Error\x20importing\x20replays:\x20\x22' + t3['message'] + '\x22');
                    }
                    this['getReplays']();
                }
            }
        },
        'created'() {
            T1['events']['$on']('replay-added', this['getReplays']),
            T1['events']['$on']('replay-removed', this['getReplays']),
            this['replayDuration'] = T3['replayDuration'],
            this['getReplays']();
        },
        'beforeDestroy'() {
            T1['events']['$off']('replay-added', this['getReplays']),
            T1['events']['$off']('replay-removed', this['getReplays']);
        }
    }
      , T8 = (h2(0xdc),
    Object(hi['a'])(T7, ho, [], ![], null, '4a996e52', null));
    T8['options']['__file'] = 'src/components/replays3.vue';
    var T9 = T8['exports']
      , Th = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticStyle': {
                'padding': '15px'
            }
        }, [t2('h2', {
            'staticStyle': {
                'margin': '0',
                'margin-bottom': '14px'
            }
        }, [t0['_v']('Season\x20Leaderboard')]), t0['_v']('\x20'), t0['errorMessage'] ? t2('div', [t0['_v']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Failed\x20loading\x20season\x20leaderboard\x20data:\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['errorMessage']) + '\x0a\x20\x20\x20\x20')]) : t2('div', t0['_l'](t0['playerList'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'player-row',
                'class': {
                    'own-row': t0['ownUid'] && t0['ownUid'] === t3['uid']
                }
            }, [t2('div', {
                'staticClass': 'player-nr'
            }, [t0['_v'](t0['_s'](t4 + 0x1) + '.')]), t0['_v']('\x20'), t3['badge'] && t3['badge'] !== 0x0 ? t2('img', {
                'attrs': {
                    'src': t0['getBadgeUrl'](t3['badge']),
                    'height': '16',
                    'title': t0['getBadgeName'](t3['badge'])
                },
                'staticStyle': {
                    'vertical-align': 'middle',
                    'margin-right': '3px'
                }
            }) : t0['_e'](), t0['_v']('\x20'), t2('div', {
                'staticClass': 'player-name',
                'style': {
                    'color': t3['name_color']
                }
            }, [t0['_v'](t0['_s'](t3['name']))]), t0['_v']('\x20'), t2('div', {
                'staticClass': 'player-xp'
            }, [t0['_v'](t0['_s'](t3['season_xp']) + '\x20xp')])]);
        }), 0x0)]);
    };
    Th['_withStripped'] = !![];
    var TT = h2(0x1)
      , TL = h2(0xf)
      , {checkBadWords: TX} = h2(0x12)
      , Tq = {
        'data': () => ({
            'playerList': [],
            'errorMessage': '',
            'ownUid': null
        }),
        'methods': {
            'getBadgeUrl'(t0) {
                if (!t0 || t0 === 0x0)
                    return '';
                const t1 = {
                    0x1: 'level_100.png',
                    0x2: 'level_200.png',
                    0x3: 'level_300.png',
                    0x4: 'slb_winner.png',
                    0x5: 'server_booster.png',
                    0x6: 'place_contributor_2022.png',
                    0x7: 'place_contributor_2023.png',
                    0x8: 'youtuber.png',
                    0x9: 'editor.png',
                    0xa: 'contributor.png',
                    0xb: 'ffa_winner.png',
                    0xc: 'instant_winner.png',
                    0xd: 'gigasplit_winner.png',
                    0xe: 'megasplit_winner.png',
                    0xf: 'crazy_winner.png',
                    0x10: 'self-feed_winner.png',
                    0x11: 'organizer.png',
                    0x12: 'referee.png',
                    0x13: 'skin_mod.png',
                    0x14: 'mod.png',
                    0x15: 'admin.png'
                };
                return t1[t0] ? 'https://aetlis.io/img/badge/' + t1[t0] : '';
            },
            'getBadgeName'(t0) {
                if (!t0 || t0 === 0x0)
                    return '';
                const t1 = {
                    0x1: 'Level\x20100',
                    0x2: 'Level\x20200',
                    0x3: 'Level\x20300',
                    0x4: 'Season\x20Leader',
                    0x5: 'Server\x20Booster',
                    0x6: 'r/place\x202022',
                    0x7: 'r/place\x202023',
                    0x8: 'YouTuber',
                    0x9: 'Editor',
                    0xa: 'Contributor',
                    0xb: 'FFA\x20Winner',
                    0xc: 'Instant\x20Winner',
                    0xd: 'Gigasplit\x20Winner',
                    0xe: 'Megasplit\x20Winner',
                    0xf: 'Crazy\x20Winner',
                    0x10: 'Self-feed\x20Winner',
                    0x11: 'Organizer',
                    0x12: 'Referee',
                    0x13: 'Skin\x20Moderator',
                    0x14: 'Moderator',
                    0x15: 'Administrator'
                };
                return t1[t0] || 'Badge';
            }
        },
        'created'() {
            this['ownUid'] = TT['ownUid'];
            var t0 = 'https://aetlis.io/api'['replace']('/api', '') + '/highscores/season_xp/100';
            TL['get'](t0)['then'](t1 => {
                var t2 = t1['data'];
                t2['forEach'](t3 => {
                    var t4 = t3['name_color'];
                    t3['name_color'] = t4 ? '#' + t4 : 'white';
                    var t5 = t3['name'] || 'Hidden';
                    TX(t5) && (t5 = '********'),
                    t3['name'] = t5;
                }
                ),
                this['playerList'] = t2;
            }
            )['catch'](t1 => {
                this['errorMessage'] = t1['message'];
            }
            );
        }
    }
      , Tj = (h2(0xde),
    Object(hi['a'])(Tq, Th, [], ![], null, '7cb607ba', null));
    Tj['options']['__file'] = 'src/components/season-leaderboard.vue';
    var Ts = Tj['exports']
      , Ti = (h2(0xf),
    h2(0x1))
      , Tp = h2(0x5)
      , Tz = {
        'components': {
            'modal': hH['default'],
            'settings': hC,
            'theming': hG,
            'hotkeys': hE,
            'replays3': T9,
            'seasonLeaderboard': Ts
        },
        'data': () => ({
            'activeModal': '',
            'showSettings': ![],
            'showHotkeys': ![],
            'gameState': Ti['state'],
            'nickname': 'string' == typeof localStorage['nickname'] ? localStorage['nickname'] : '',
            'teamtag': localStorage['teamtag'] || '',
            'skinUrl': 'string' == typeof localStorage['skinUrl'] ? localStorage['skinUrl'] : 'https://skins.aetlis.io/s/aetlis1'
        }),
        'created': function() {
            this['getUserData'](),
            Ti['events']['$on']('skinClick', t0 => {
                this['skinUrl'] = t0;
            }
            );
        },
        'methods': {
            'openModal': function(t0) {
                this['activeModal'] = t0,
                this['$emit']('modal-open', !![]);
            },
            'closeModal': function() {
                this['activeModal'] = '',
                this['$emit']('modal-open', ![]);
            },
            'login': function() {
                var t0 = 'https://aetlis.io/api/login/discord';
                window['open'](t0, 'discordLogin', 'width=400,\x20height=500'),
                console['log'](t0);
            },
            'getUserData': function() {},
            'play': function(t0) {
                console['log']('[CLIENT-PLAY]\x20Play\x20button\x20clicked\x20-\x20isTrusted:', t0['isTrusted'], 'isAlive:', this['gameState']['isAlive']),
                t0['isTrusted'] && (!this['gameState']['isAlive'] && Ti['joinGame'](),
                Ti['showMenu'](![]));
            },
            'spectate': function() {
                this['gameState']['isAlive'] ? console['warn']('Cannot\x20spectate,\x20player\x20is\x20still\x20alive') : (Ti['actions']['spectate'](),
                Ti['showMenu'](![]));
            },
            'skinLoaded': function() {
                var t0 = this['$refs']['skin'];
                t0 && (t0['naturalWidth'] > 0x800 || t0['naturalHeight'] > 0x800) && Tp['instance']['fire']({
                    'html': 'Your\x20skin\x20images\x20size\x20is\x20too\x20large.<br>Preferred\x20skin\x20size\x20is\x20512x512px<br>Size\x20is\x20limited\x20to\x202048x2048px.',
                    'confirmButtonText': 'OK'
                });
            },
            'onSkinUrlChange'() {
                if (this['skinUrl']['length'] > 0x50)
                    return this['skinUrl'] = '',
                    void Tp['alert']('Skin\x20url\x20too\x20long.');
                Ti['events']['$emit']('skinUrlChanged', this['skinUrl']);
            },
            'onTeamTagChange'() {
                localStorage['setItem']('teamtag', this['teamtag']);
            },
            'onNicknameChange'() {
                localStorage['setItem']('nickname', this['nickname']);
            }
        }
    }
      , Tx = (h2(0xe0),
    Object(hi['a'])(Tz, hx, [function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticStyle': {
                'text-align': 'center',
                'height': '286px'
            }
        }, [t1('div', {
            'staticStyle': {
                'padding': '4px'
            }
        }, [this['_v']('No\x20advertisement..\x20(for\x20now)')]), this['_v']('\x20'), t1('div', {
            'attrs': {
                'id': 'vanis-io_300x250'
            }
        })]);
    }
    ], ![], null, '1bcde71e', null));
    Tx['options']['__file'] = 'src/components/player.vue';
    var TH = Tx['exports']
      , TM = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticStyle': {
                'padding': '17px'
            }
        }, [t0['account'] ? t0['_e']() : t2('div', [t2('div', {
            'staticStyle': {
                'margin-top': '6px',
                'margin-bottom': '10px'
            }
        }, [t0['_v']('Login\x20to\x20your\x20account\x20with\x20Discord\x20to\x20save\x20your\x20in-game\x20progress.')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'discord',
            'on': {
                'click': function(t3) {
                    return t0['openDiscordLogin']();
                }
            }
        }, [t0['loading'] ? [t0['loading'] ? t2('i', {
            'staticClass': 'fas\x20fa-sync\x20fa-spin',
            'staticStyle': {
                'margin-right': '5px'
            }
        }) : t0['_e'](), t0['_v']('\x20Loading\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')] : [t2('i', {
            'staticClass': 'fab\x20fa-discord'
        }), t0['_v']('\x20Login\x20with\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]], 0x2)]), t0['_v']('\x20'), t0['account'] ? t2('div', {
            'staticClass': 'account'
        }, [t2('div', {
            'staticStyle': {
                'margin-bottom': '3px'
            }
        }, [t2('img', {
            'staticClass': 'avatar',
            'attrs': {
                'src': t0['account']['avatarUrl']
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'player-info'
        }, [t2('div', {
            'attrs': {
                'id': 'account-name'
            },
            'staticStyle': {
                'display': 'flex',
                'align-items': 'center',
                'gap': '5px'
            }
        }, [t0['account']['perk_badge_set'] && t0['account']['perk_badge_set'] !== 0x0 ? t2('img', {
            'attrs': {
                'src': t0['getBadgeUrl'](t0['account']['perk_badge_set']),
                'height': '20',
                'title': t0['getBadgeName'](t0['account']['perk_badge_set'])
            },
            'staticStyle': {
                'vertical-align': 'middle'
            }
        }) : t0['_e'](), t0['_v']('\x20' + t0['_s'](t0['account']['discordName']))]), t0['_v']('\x20'), t0['account']['banned'] ? [t2('div', {
            'staticStyle': {
                'color': '#ff4444',
                'font-weight': 'bold',
                'margin-top': '5px'
            }
        }, [t0['_v']('🔨\x20BANNED')]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'color': '#ffaa44',
                'font-size': '12px',
                'margin-top': '3px'
            }
        }, [t0['_v'](t0['_s'](t0['account']['ban_reason']))]), t0['_v']('\x20'), t0['account']['ban_expires_at'] ? t2('div', {
            'staticStyle': {
                'color': '#aaaaaa',
                'font-size': '11px',
                'margin-top': '2px'
            }
        }, [t0['_v']('Until:\x20' + t0['_s'](new Date(t0['account']['ban_expires_at'])['toLocaleString']()))]) : t2('div', {
            'staticStyle': {
                'color': '#aaaaaa',
                'font-size': '11px',
                'margin-top': '2px'
            }
        }, [t0['_v']('Permanent\x20ban')])] : [t2('div', [t0['_v']('Level\x20' + t0['_s'](t0['account']['level']))]), t0['_v']('\x20'), t2('div', [t0['_v'](t0['_s'](t0['account']['xp']) + '\x20Total\x20XP')]), t0['_v']('\x20'), t2('div', [t0['_v'](t0['_s'](t0['account']['season_xp'] || 0x0) + '\x20Season\x20XP')])]], 0x2)]), t0['_v']('\x20'), t0['account']['banned'] ? t0['_e']() : t2('div', {
            'staticStyle': {
                'position': 'relative'
            }
        }, [t2('progress-bar', {
            'staticClass': 'xp-progress',
            'attrs': {
                'progress': t0['progress']
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'xp-data'
        }, [t2('div', {
            'staticStyle': {
                'flex': '1',
                'margin-left': '8px'
            }
        }, [t0['_v'](t0['_s'](t0['currentXpDisplay']))]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'margin-right': '7px'
            }
        }, [t0['_v'](t0['_s'](t0['xpAtNextLevel']))])])], 0x1), t0['_v']('\x20'), t2('div', {
            'staticClass': 'logout',
            'on': {
                'click': function(t3) {
                    return t0['logout']();
                }
            }
        }, [t2('i', {
            'staticClass': 'fas\x20fa-sign-out-alt'
        }), t0['_v']('\x20Logout\x0a\x20\x20\x20\x20\x20\x20\x20\x20')])]) : t0['_e']()]);
    };
    TM['_withStripped'] = !![];
    var Ty = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'progress\x20progress-striped'
        }, [t1('div', {
            'staticClass': 'progress-bar',
            'style': {
                'width': 0x64 * this['progress'] + '%'
            }
        })]);
    };
    Ty['_withStripped'] = !![];
    var Tc = {
        'props': ['progress']
    }
      , Td = (h2(0xe2),
    Object(hi['a'])(Tc, Ty, [], ![], null, '4e838c74', null));
    Td['options']['__file'] = 'src/components/progressBar.vue';
    var TU = Td['exports']
      , TS = h2(0xe4)
      , Tm = (h2(0xf),
    h2(0x5))
      , Tb = h2(0x1)
      , TA = h2(0xe5)
      , TC = {
        'components': {
            'progressBar': TU
        },
        'data': () => ({
            'account': null,
            'progress': 0x0,
            'xpAtCurrentLevel': 0x0,
            'xpAtNextLevel': 0x0,
            'currentXpDisplay': 0x0,
            'loading': ![]
        }),
        'created': function() {
            Tb['events']['$on']('xp-update', this['onXpUpdate']),
            TS['vanisToken'] && this['loadUserData'](),
            this['listenForToken']();
        },
        'beforeDestroy'() {
            Tb['events']['$off']('xp-update', this['onXpUpdate']);
        },
        'methods': {
            'listenForToken'() {
                window['addEventListener']('message', t0 => {
                    var t1 = t0['data']['vanis_token'];
                    t1 && (this['onLoggedIn'](t1),
                    t0['source']['postMessage']('loggedIn', t0['origin']));
                }
                );
            },
            async 'loadUserData'() {
                this['loading'] = !![];
                try {
                    var t0 = await TS['get']('/me');
                } catch (t2) {
                    this['loading'] = ![];
                    var t1 = t2['response'];
                    return void (t1 && (console['error']('Account:', t1['data']),
                    0x191 === t1['status'] && TS['clearToken']()));
                }
                if (t0['banned']) {
                    this['setBannedData'](t0),
                    this['loading'] = ![];
                    return;
                }
                this['setAccountData'](t0),
                this['updateProgress'](this['account']['xp'], this['account']['level']),
                this['loading'] = ![];
            },
            async 'logout'() {
                try {
                    await TS['get']('/me/logout');
                } catch (t1) {
                    var t0 = t1['response'];
                    t0 && 0x191 !== t0['status'] && Tm['alert']('Error:\x20' + t1['message']);
                }
                TS['clearToken'](),
                this['account'] = null,
                Tb['ownUid'] = null,
                setTimeout( () => location['reload'](), 0x64);
            },
            'getAvatarUrl': (t0, t1) => t1 ? 'https://cdn.discordapp.com/avatars/' + t0 + '/' + t1 + '.png' : 'https://cdn.discordapp.com/embed/avatars/0.png',
            'getBadgeUrl'(t0) {
                const t1 = {
                    0x1: 'level_100',
                    0x2: 'level_200',
                    0x3: 'level_300',
                    0x4: 'slb_winner',
                    0x5: 'server_booster',
                    0x6: 'place_contributor_2022',
                    0x7: 'place_contributor_2023',
                    0x8: 'youtuber',
                    0x9: 'editor',
                    0xa: 'contributor',
                    0xb: 'ffa_winner',
                    0xc: 'instant_winner',
                    0xd: 'gigasplit_winner',
                    0xe: 'megasplit_winner',
                    0xf: 'crazy_winner',
                    0x10: 'self-feed_winner',
                    0x11: 'organizer',
                    0x12: 'referee',
                    0x13: 'skin_mod',
                    0x14: 'mod',
                    0x15: 'admin'
                };
                return t1[t0] ? 'https://aetlis.io/img/badge/' + t1[t0] + '.png' : '';
            },
            'getBadgeName'(t0) {
                const t1 = {
                    0x1: 'Level\x20100',
                    0x2: 'Level\x20200',
                    0x3: 'Level\x20300',
                    0x4: 'Season\x20Leader',
                    0x5: 'Server\x20Booster',
                    0x6: 'r/place\x202022',
                    0x7: 'r/place\x202023',
                    0x8: 'YouTuber',
                    0x9: 'Editor',
                    0xa: 'Contributor',
                    0xb: 'FFA\x20Winner',
                    0xc: 'Instant\x20Winner',
                    0xd: 'Gigasplit\x20Winner',
                    0xe: 'Megasplit\x20Winner',
                    0xf: 'Crazy\x20Winner',
                    0x10: 'Self-feed\x20Winner',
                    0x11: 'Organizer',
                    0x12: 'Referee',
                    0x13: 'Skin\x20Moderator',
                    0x14: 'Moderator',
                    0x15: 'Administrator'
                };
                return t1[t0] || 'Badge';
            },
            'setAccountData'(t0) {
                t0['avatarUrl'] = this['getAvatarUrl'](t0['discordId'], t0['discordAvatar']),
                this['account'] = t0,
                Tb['ownUid'] = t0['uid'],
                this['currentXpDisplay'] = t0['xp'];
                var t1 = t0['perks'] || {
                    'perk_color_unused': t0['perk_color_unused'],
                    'perk_color_expiry': t0['perk_color_expiry'],
                    'perk_name_picked': t0['perk_name_picked'],
                    'perk_color_picked': t0['perk_color_picked'],
                    'perk_name_cooldown': t0['perk_name_cooldown'],
                    'perk_color_cooldown': t0['perk_color_cooldown'],
                    'perk_badge_owned': t0['perk_badge_owned'] || [],
                    'perk_badge_set': t0['perk_badge_set'] || 0x0,
                    'perk_color': t0['nameColor'],
                    'perk_color_enabled': t0['nameColorEnabled'],
                    'perk_color_expires_at': t0['name_color_expires_at']
                };
                console['log']('[PERKS\x20DEBUG]\x20Account\x20data\x20received:', {
                    'perk_badge_owned': t1['perk_badge_owned'],
                    'perk_badge_set': t1['perk_badge_set'],
                    'fullPerksData': t1
                }),
                Tb['events']['$emit']('account-loaded', t1);
            },
            'setBannedData'(t0) {
                this['account'] = {
                    'banned': !![],
                    'ban_reason': t0['ban_reason'] || 'No\x20reason\x20provided',
                    'ban_expires_at': t0['ban_expires_at'],
                    'message': t0['message'],
                    'discordName': t0['discordName'],
                    'discordAvatar': t0['discordAvatar'],
                    'avatarUrl': this['getAvatarUrl'](t0['discordId'], t0['discordAvatar']),
                    'level': 0x0,
                    'xp': 0x0,
                    'season_xp': 0x0
                },
                Tb['ownUid'] = null;
            },
            'onXpUpdate': function(t0) {
                if (this['account']) {
                    var t1 = t0 - this['account']['xp'];
                    this['account']['xp'] = t0,
                    this['account']['season_xp'] += Math['max'](0x0, t1),
                    this['currentXpDisplay'] = t0;
                    var t2 = TA['getLevel'](t0);
                    this['account']['level'] = t2,
                    this['updateProgress'](t0, t2);
                }
            },
            'updateProgress'(t0, t1) {
                this['xpAtCurrentLevel'] = TA['getXp'](t1),
                this['xpAtNextLevel'] = TA['getXp'](t1 + 0x1),
                this['progress'] = (t0 - this['xpAtCurrentLevel']) / (this['xpAtNextLevel'] - this['xpAtCurrentLevel']);
            },
            'openDiscordLogin': function() {
                var t0 = TS['url'] + '/login/discord';
                window['open'](t0, '', 'width=400,\x20height=500');
            },
            'onLoggedIn'(t0) {
                console['assert'](t0, 'Vanis\x20token\x20empty\x20or\x20undefined'),
                TS['setToken'](t0),
                setTimeout( () => location['reload'](), 0x12c);
            }
        }
    }
      , TI = (h2(0xe6),
    Object(hi['a'])(TC, TM, [], ![], null, '661435cd', null));
    TI['options']['__file'] = 'src/components/account.vue';
    var TN = TI['exports']
      , TY = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'attrs': {
                'id': 'skins-container'
            }
        }, [t2('div', {
            'attrs': {
                'id': 'skins'
            }
        }, [t0['_l'](t0['skins'], function(t3, t4) {
            return t2('span', {
                'key': t4,
                'staticClass': 'skin-container'
            }, [t2('img', {
                'staticClass': 'skin',
                'class': {
                    'selected': t0['selectedSkinIndex'] === t4
                },
                'attrs': {
                    'src': t3,
                    'alt': ''
                },
                'on': {
                    'click': function(t5) {
                        return t0['selectSkin'](t4);
                    },
                    'contextmenu': function(t5) {
                        return t0['removeSkin'](t4);
                    }
                }
            }), t0['_v']('\x20'), t2('i', {
                'staticClass': 'fas\x20fa-times\x20skin-remove-button',
                'on': {
                    'click': function(t5) {
                        return t0['removeSkin'](t4);
                    }
                }
            })]);
        }), t0['_v']('\x20'), t2('img', {
            'staticClass': 'skin\x20add-skin',
            'attrs': {
                'src': 'img/skin-add.png',
                'alt': ''
            },
            'on': {
                'click': function(t3) {
                    return t0['addSkin']();
                }
            }
        })], 0x2)]);
    };
    TY['_withStripped'] = !![];
    var Tg = h2(0x1)
      , TK = {
        'data': () => ({
            'selectedSkinIndex': 0x0,
            'skins': []
        }),
        'created': function() {
            Tg['events']['$on']('skinUrlChanged', this['onSkinUrlChanged']['bind'](this)),
            this['skins'] = this['loadSkins']() || this['getDefaultSkins']();
            var t0 = Number(localStorage['selectedSkinIndex']) || 0x0;
            this['selectSkin'](t0);
        },
        'methods': {
            'loadSkins'() {
                var t0 = localStorage['skins'];
                if (!t0)
                    return ![];
                try {
                    var t1 = JSON['parse'](t0);
                } catch (t3) {
                    return console['error']('Error\x20parsing\x20saved\x20skins', t3['message']),
                    ![];
                }
                if (!Array['isArray'](t1))
                    return console['error']('localstorage.skins\x20is\x20not\x20an\x20array!'),
                    ![];
                for (var t2 = t1['length']; t2 < 0x2; t2++)
                    t1['push']('https://skins.aetlis.io/s/aetlis1');
                return t1;
            },
            'getDefaultSkins'() {
                for (var t0 = [], t1 = 0x0; t1 < 0x8; t1++)
                    t0['push']('https://skins.aetlis.io/s/aetlis1');
                return t0;
            },
            'onSkinUrlChanged'(t0) {
                this['$set'](this['skins'], this['selectedSkinIndex'], t0),
                this['saveSkins']();
            },
            'selectSkin'(t0) {
                this['selectedSkinIndex'] = t0,
                localStorage['selectedSkinIndex'] = t0;
                var t1 = this['skins'][t0];
                Tg['events']['$emit']('skinClick', t1);
            },
            'removeSkin'(t0) {
                this['skins']['splice'](t0, 0x1),
                this['skins']['length'] < 0x2 && this['skins']['push']('https://skins.aetlis.io/s/aetlis1'),
                this['saveSkins']();
                var t1 = Math['max'](0x0, this['selectedSkinIndex'] - 0x1);
                this['selectSkin'](t1);
            },
            'addSkin'() {
                var t0 = this['skins']['length'];
                this['skins']['push']('https://skins.aetlis.io/s/aetlis1'),
                this['selectSkin'](t0),
                this['saveSkins']();
            },
            'saveSkins'() {
                for (var t0 = 0x0; t0 < this['skins']['length']; t0++) {
                    var t1 = this['skins'][t0];
                    (!t1 || !t1['startsWith']('http://') && !t1['startsWith']('https://')) && (console['warn']('[SKIN]\x20Invalid\x20skin\x20detected\x20at\x20index', t0, ':', t1),
                    this['skins'][t0] = 'https://skins.aetlis.io/s/aetlis1');
                }
                localStorage['skins'] = JSON['stringify'](this['skins']);
            }
        }
    }
      , TO = (h2(0xe8),
    Object(hi['a'])(TK, TY, [], ![], null, '1c614894', null));
    TO['options']['__file'] = 'src/components/skins.vue';
    var Tf = TO['exports']
      , Td = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'color-picker-wrapper'
        }, [t2('div', {
            'staticClass': 'color-button',
            'class': {
                'disabled': t0['disabled']
            },
            'style': {
                'background-color': t0['value'] || '#ffffff'
            },
            'on': {
                'click': function(t3) {
                    !t0['disabled'] && t0['showPicker'](!t0['pickerOpen']);
                }
            }
        }), t0['_v']('\x20'), t0['pickerOpen'] ? t2('div', [t2('div', {
            'staticClass': 'color-picker-overlay',
            'on': {
                'click': function(t3) {
                    t0['showPicker'](![]);
                }
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-picker\x20fade-box'
        }, [t2('div', {
            'staticClass': 'color-picker-sat',
            'style': {
                'backgroundColor': 'hsl(' + t0['hue'] + ',\x20100%,\x2050%)'
            }
        }, [t2('div', {
            'staticClass': 'color-picker-val',
            'on': {
                'mousedown': t0['startMovingPivot']
            }
        }, [t2('div', {
            'staticClass': 'color-picker-pivot',
            'style': {
                'left': t0['pickerX'] + 'px',
                'top': t0['pickerY'] + 'px'
            }
        })])]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'color-picker-hue',
            'attrs': {
                'type': 'range',
                'min': '0',
                'max': '360'
            },
            'domProps': {
                'value': t0['hue']
            },
            'on': {
                'input': function(t3) {
                    t0['hue'] = t3['target']['value'],
                    t0['triggerInput']();
                }
            }
        }), t0['_v']('\x20'), t2('div', {
            'staticClass': 'color-picker-hex'
        }, [t2('span', {
            'staticClass': 'color-picker-hashtag'
        }, [t0['_v']('#')]), t0['_v']('\x20'), t2('input', {
            'staticClass': 'color-picker-hex-input',
            'attrs': {
                'type': 'text',
                'maxlength': '6'
            },
            'domProps': {
                'value': t0['hex']
            },
            'on': {
                'input': function(t3) {
                    t0['onHexInput'](t3['target']['value']);
                }
            }
        })])])]) : t0['_e']()]);
    };
    Td['_withStripped'] = !![];
    function Tl(t0) {
        return [parseInt(t0['substr'](0x0, 0x2), 0x10), parseInt(t0['substr'](0x2, 0x2), 0x10), parseInt(t0['substr'](0x4, 0x2), 0x10)];
    }
    function Tu(t0) {
        return t0['map'](function(t1) {
            return ('0' + t1['toString'](0x10))['slice'](-0x2);
        })['join']('');
    }
    function TD(t0, t1, t2) {
        var t3 = Math['max'](t0, t1, t2)
          , t4 = Math['min'](t0, t1, t2)
          , t5 = t3 - t4
          , t6 = 0x0 === t3 ? 0x0 : t5 / t3
          , t7 = t3 / 0xff;
        if (0x0 === t5)
            return [0x0, t6, t7];
        var t8;
        return t8 = t3 === t0 ? (t1 - t2) / t5 + (t1 < t2 ? 0x6 : 0x0) : t3 === t1 ? (t2 - t0) / t5 + 0x2 : (t0 - t1) / t5 + 0x4,
        [0x3c * t8, t6, t7];
    }
    function TV(t0, t1, t2) {
        var t3 = Math['floor'](t0 / 0x3c) % 0x6
          , t4 = t0 / 0x3c - Math['floor'](t0 / 0x3c)
          , t5 = t2 * (0x1 - t1)
          , t6 = t2 * (0x1 - t4 * t1)
          , t7 = t2 * (0x1 - (0x1 - t4) * t1);
        switch (t3) {
        case 0x0:
            return [t2, t7, t5];
        case 0x1:
            return [t6, t2, t5];
        case 0x2:
            return [t5, t2, t7];
        case 0x3:
            return [t5, t6, t2];
        case 0x4:
            return [t7, t5, t2];
        case 0x5:
            return [t2, t5, t6];
        }
    }
    var TP = {
        'props': ['value', 'disabled'],
        'data': () => ({
            'pickerOpen': ![],
            'pickerX': 0x32,
            'pickerY': 0x32,
            'hue': 0x0,
            'saturation': 0x0,
            'brightness': 0x1,
            'movingPivot': ![],
            'boundMovePivot': null,
            'boundStopMovingPivot': null
        }),
        'computed': {
            'hex': {
                'get'() {
                    var t0 = this['hsvToRgb'](this['hue'], this['saturation'], this['brightness']);
                    return this['rgbToHex'](t0['map'](function(t1) {
                        return Math['round'](0xff * t1);
                    }));
                },
                'set'(t0) {
                    if (t0 && 0x6 === t0['length']) {
                        var t1 = this['hexToRgb'](t0)
                          , t2 = this['rgbToHsv'](t1[0x0], t1[0x1], t1[0x2]);
                        this['hue'] = t2[0x0],
                        this['saturation'] = t2[0x1],
                        this['brightness'] = t2[0x2],
                        this['pickerX'] = 0x64 * t2[0x1],
                        this['pickerY'] = 0x64 * (0x1 - t2[0x2]);
                    }
                }
            }
        },
        'methods': {
            'hexToRgb'(t0) {
                return [parseInt(t0['substr'](0x0, 0x2), 0x10), parseInt(t0['substr'](0x2, 0x2), 0x10), parseInt(t0['substr'](0x4, 0x2), 0x10)];
            },
            'rgbToHex'(t0) {
                return t0['map'](function(t1) {
                    return ('0' + t1['toString'](0x10))['slice'](-0x2);
                })['join']('');
            },
            'rgbToHsv'(t0, t1, t2) {
                var t3 = Math['max'](t0, t1, t2)
                  , t4 = Math['min'](t0, t1, t2)
                  , t5 = t3 - t4
                  , t6 = 0x0 === t3 ? 0x0 : t5 / t3
                  , t7 = t3 / 0xff;
                if (0x0 === t5)
                    return [0x0, t6, t7];
                var t8;
                return t8 = t3 === t0 ? (t1 - t2) / t5 + (t1 < t2 ? 0x6 : 0x0) : t3 === t1 ? (t2 - t0) / t5 + 0x2 : (t0 - t1) / t5 + 0x4,
                [0x3c * t8, t6, t7];
            },
            'hsvToRgb'(t0, t1, t2) {
                var t3 = Math['floor'](t0 / 0x3c) % 0x6
                  , t4 = t0 / 0x3c - Math['floor'](t0 / 0x3c)
                  , t5 = t2 * (0x1 - t1)
                  , t6 = t2 * (0x1 - t4 * t1)
                  , t7 = t2 * (0x1 - (0x1 - t4) * t1);
                switch (t3) {
                case 0x0:
                    return [t2, t7, t5];
                case 0x1:
                    return [t6, t2, t5];
                case 0x2:
                    return [t5, t2, t7];
                case 0x3:
                    return [t5, t6, t2];
                case 0x4:
                    return [t7, t5, t2];
                case 0x5:
                    return [t2, t5, t6];
                }
            },
            'onHexInput'(t0) {
                this['hex'] = t0,
                this['triggerInput']();
            },
            'showPicker'(t0) {
                this['pickerOpen'] = t0;
            },
            'startMovingPivot'(t0) {
                this['movingPivot'] = !![],
                this['_movePivot'](t0),
                document['addEventListener']('mousemove', this['boundMovePivot']),
                document['addEventListener']('mouseup', this['boundStopMovingPivot']);
            },
            '_movePivot'(t0) {
                if (this['movingPivot']) {
                    var t1 = this['$el']['querySelector']('.color-picker-val');
                    if (t1) {
                        var t2 = t1['getBoundingClientRect']();
                        this['pickerX'] = Math['max'](0x0, Math['min'](0x64, 0x64 * (t0['clientX'] - t2['left']) / t2['width'])),
                        this['pickerY'] = Math['max'](0x0, Math['min'](0x64, 0x64 * (t0['clientY'] - t2['top']) / t2['height'])),
                        this['saturation'] = this['pickerX'] / 0x64,
                        this['brightness'] = 0x1 - this['pickerY'] / 0x64,
                        this['triggerInput']();
                    }
                }
            },
            '_stopMovingPivot'(t0) {
                this['movingPivot'] && (this['_movePivot'](t0),
                this['movingPivot'] = ![],
                document['removeEventListener']('mousemove', this['boundMovePivot']),
                document['removeEventListener']('mouseup', this['boundStopMovingPivot']));
            },
            'triggerInput'() {
                this['$emit']('input', '#' + this['hex']);
            }
        },
        'created'() {
            this['value'] && (this['hex'] = this['value']['replace']('#', '')),
            this['boundMovePivot'] = this['_movePivot']['bind'](this),
            this['boundStopMovingPivot'] = this['_stopMovingPivot']['bind'](this);
        }
    }
      , TR = Object(hi['a'])(TP, Td, [], ![], null, null, null);
    TR['options']['__file'] = 'src/components/color-picker.vue';
    var TQ = TR['exports']
      , Ta = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('span', {
            'staticClass': 'badge-list',
            'on': {
                'mousemove': function(t3) {
                    document['documentElement']['style']['setProperty']('--mouse-x', t3['clientX'] + 'px'),
                    document['documentElement']['style']['setProperty']('--mouse-y', t3['clientY'] + 'px');
                }
            }
        }, t0['_l'](t0['allBadges'], function(t3, t4) {
            var t5 = t0['ownedBadges'] && t0['ownedBadges']['includes'](t3['id']);
            return t2('span', {
                'key': t4,
                'staticClass': 'badge-wrapper',
                'attrs': {
                    'data-tip': t3['name']
                }
            }, [t2('img', {
                'staticClass': 'badge-icon',
                'class': {
                    'selected': t0['selectedBadge'] === t3['id'],
                    'dim': !t5
                },
                'attrs': {
                    'draggable': ![],
                    'src': t3['url'],
                    'height': t0['size'] || 0x20
                },
                'on': {
                    'click': function(t6) {
                        return t5 && t0['clickable'] && t0['onBadgeClick'](t3['id']);
                    }
                }
            })]);
        }), 0x0);
    };
    Ta['_withStripped'] = !![];
    var TW = {
        'props': ['ownedBadges', 'selectedBadge', 'size', 'clickable'],
        'data': () => ({
            'allBadges': [{
                'id': 0x1,
                'name': 'Level\x20100\x20reached',
                'url': 'https://aetlis.io/img/badge/level_100.png'
            }, {
                'id': 0x2,
                'name': 'Level\x20200\x20reached',
                'url': 'https://aetlis.io/img/badge/level_200.png'
            }, {
                'id': 0x3,
                'name': 'Level\x20300\x20reached',
                'url': 'https://aetlis.io/img/badge/level_300.png'
            }, {
                'id': 0x4,
                'name': 'Topped\x20season\x20leaderboard',
                'url': 'https://aetlis.io/img/badge/slb_winner.png'
            }, {
                'id': 0x5,
                'name': 'Discord\x20server\x20booster',
                'url': 'https://aetlis.io/img/badge/server_booster.png'
            }, {
                'id': 0x6,
                'name': 'r/place\x20contributor\x20(2022)',
                'url': 'https://aetlis.io/img/badge/place_contributor_2022.png'
            }, {
                'id': 0x7,
                'name': 'r/place\x20contributor\x20(2023)',
                'url': 'https://aetlis.io/img/badge/place_contributor_2023.png'
            }, {
                'id': 0x8,
                'name': 'YouTuber',
                'url': 'https://aetlis.io/img/badge/youtuber.png'
            }, {
                'id': 0x9,
                'name': 'Editor',
                'url': 'https://aetlis.io/img/badge/editor.png'
            }, {
                'id': 0xa,
                'name': 'Contributor',
                'url': 'https://aetlis.io/img/badge/contributor.png'
            }, {
                'id': 0xb,
                'name': 'FFA\x20tournament\x20winner',
                'url': 'https://aetlis.io/img/badge/ffa_winner.png'
            }, {
                'id': 0xc,
                'name': 'Instant\x20tournament\x20winner',
                'url': 'https://aetlis.io/img/badge/instant_winner.png'
            }, {
                'id': 0xd,
                'name': 'Gigasplit\x20tournament\x20winner',
                'url': 'https://aetlis.io/img/badge/gigasplit_winner.png'
            }, {
                'id': 0xe,
                'name': 'Megasplit\x20tournament\x20winner',
                'url': 'https://aetlis.io/img/badge/megasplit_winner.png'
            }, {
                'id': 0xf,
                'name': 'Crazy\x20tournament\x20winner',
                'url': 'https://aetlis.io/img/badge/crazy_winner.png'
            }, {
                'id': 0x10,
                'name': 'Self-feed\x20tournament\x20winner',
                'url': 'https://aetlis.io/img/badge/self-feed_winner.png'
            }, {
                'id': 0x11,
                'name': 'Official\x20tournament\x20organizer',
                'url': 'https://aetlis.io/img/badge/organizer.png'
            }, {
                'id': 0x12,
                'name': 'Official\x20tournament\x20referee',
                'url': 'https://aetlis.io/img/badge/referee.png'
            }, {
                'id': 0x13,
                'name': 'Skin\x20moderator',
                'url': 'https://aetlis.io/img/badge/skin_mod.png'
            }, {
                'id': 0x14,
                'name': 'Moderator',
                'url': 'https://aetlis.io/img/badge/mod.png'
            }, {
                'id': 0x15,
                'name': 'Administrator',
                'url': 'https://aetlis.io/img/badge/admin.png'
            }]
        }),
        'methods': {
            'onBadgeClick'(t0) {
                console['log']('🖱️\x20Badge\x20clicked:', t0, 'Current\x20selected:', this['selectedBadge'], 'Will\x20send:', t0 === this['selectedBadge'] ? 0x0 : t0),
                this['clickable'] && this['$emit']('input', t0 === this['selectedBadge'] ? 0x0 : t0);
            }
        }
    }
      , Tn = Object(hi['a'])(TW, Ta, [], ![], null, null, null);
    Tn['options']['__file'] = 'src/components/badges.vue';
    var TB = Tn['exports']
      , TG = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', [t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Colored\x20name\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t0['nameNotShowing'] ? t2('div', {
            'staticClass': 'right\x20warning'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Not\x20showing\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]) : t0['_e']()]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t0['perks']['perk_color_unused'] || t0['perks']['perk_color_expiry'] ? t0['_e']() : [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Shows\x20in\x20chat,\x20minimap,\x20name\x20and\x20leaderboard'), t2('br'), t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Rare\x20awards\x20for\x20players'), t2('br'), t0['_v']('\x20'), t2('div', {
            'staticClass': 'perks-obtaining-label'
        }, [t0['_v']('Given\x20for:')]), t0['_v']('\x20'), t2('ul', [t2('li', [t0['_v']('Tournament\x20wins')]), t0['_v']('\x20'), t2('li', [t0['_v']('Content\x20creation')]), t0['_v']('\x20'), t2('li', [t0['_v']('Community\x20contributions')])]), t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Check\x20our\x20'), t2('a', {
            'attrs': {
                'href': '/discord'
            }
        }, [t0['_v']('Discord')]), t0['_v']('\x20for\x20information\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')], t0['_v']('\x20'), t0['perks']['perk_color_unused'] || t0['perks']['perk_color_expiry'] ? [t0['perks']['perk_color_unused'] || t0['perks']['perk_color_expiry'] && 'infinity' !== t0['perks']['perk_color_expiry'] ? t2('div', {
            'staticClass': 'confirm-row'
        }, [t2('span', [t0['perks']['perk_color_unused'] ? t2('div', [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Unused\x20'), t2('b', [t0['_v'](t0['_s'](t0['perks']['perk_color_unused']))]), t0['_v']('\x20week' + t0['_s'](0x1 === t0['perks']['perk_color_unused'] ? '' : 's') + '\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]) : t0['_e'](), t0['_v']('\x20'), t0['perks']['perk_color_expiry'] && 'infinity' !== t0['perks']['perk_color_expiry'] ? t2('div', [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Expires\x20in\x20'), t2('b', [t0['_v'](t0['_s'](t0['expiryText']))])]) : t0['_e']()]), t0['_v']('\x20'), t2('button', {
            'staticClass': 'confirm-button',
            'attrs': {
                'disabled': !t0['perks']['perk_color_unused']
            },
            'on': {
                'click': function(t3) {
                    return t0['confirmUseColor']();
                }
            }
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['confirmingColor'] ? 'Confirm' : t0['perks']['perk_color_expiry'] ? 'Extend' : 'Use') + '\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')])]) : t0['_e'](), t0['_v']('\x20'), t0['confirmingColor'] ? t2('div', {
            'staticClass': 'option-row\x20bottom-margin'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['perks']['perk_color_expiry'] ? 'Extend\x20by' : 'Start') + '\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['useColorWeeks'],
                'expression': 'useColorWeeks'
            }],
            'attrs': {
                'type': 'number',
                'min': '1',
                'max': t0['perks']['perk_color_unused'],
                'step': '1'
            },
            'domProps': {
                'value': t0['useColorWeeks']
            },
            'on': {
                'input': function(t3) {
                    t3['target']['composing'] || (t0['useColorWeeks'] = t3['target']['value']);
                }
            }
        }), t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + t0['_s'](t0['perks']['perk_color_expiry'] ? 'week(s)' : 'week\x20colored\x20name') + '\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]) : t0['_e']()] : t0['_e'](), t0['_v']('\x20'), t0['perks']['perk_color_expiry'] ? [t2('div', {
            'staticClass': 'perk-color-wrapper\x20bottom-margin'
        }, [t2('span', [t0['_v']('Name' + (t0['cooldownTimer'] ? '\x20(' + t0['cooldownTimer'] + ')' : ''))]), t0['_v']('\x20'), t2('span', {
            'staticClass': 'perk-color-label'
        }, [t0['_v']('Color')]), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['namePicked'],
                'expression': 'namePicked'
            }],
            'staticClass': 'perk-name',
            'attrs': {
                'type': 'text',
                'spellcheck': 'false',
                'minlength': '2',
                'maxlength': '15',
                'disabled': !t0['canChangeName'],
                'placeholder': t0['perks']['perk_name_picked']
            },
            'domProps': {
                'value': t0['namePicked']
            },
            'on': {
                'input': function(t3) {
                    t3['target']['composing'] || (t0['namePicked'] = t3['target']['value']);
                }
            }
        }), t0['_v']('\x20'), t2('span', {
            'staticClass': 'perk-color-option'
        }, [t2('color-picker', {
            'attrs': {
                'disabled': !t0['canChangeColor']
            },
            'model': {
                'value': t0['colorPicked'],
                'callback': function(t3) {
                    t0['colorPicked'] = t3;
                },
                'expression': 'colorPicked'
            }
        })], 0x1), t0['_v']('\x20'), !t0['anyCooldownActive'] ? t2('button', {
            'staticClass': 'perk-color-update',
            'attrs': {
                'disabled': !t0['canUpdate']
            },
            'on': {
                'click': function(t3) {
                    return t0['updateNameColor']();
                }
            }
        }, [t0['_v']('Set')]) : t0['_e']()]), t0['_v']('\x20')] : t0['_e'](), t0['_v']('\x20'), !t0['perks']['perk_color_expiry'] && t0['perks']['perk_name_picked'] ? t2('div', [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reserved\x20name\x20'), t2('b', [t0['_v'](t0['_s'](t0['perks']['perk_name_picked']))])]) : t0['_e']()], 0x2)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Badges\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t0['perks']['perk_badge_owned'] && !t0['perks']['perk_badge_set'] ? t2('div', {
            'staticClass': 'right\x20warning'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Hidden\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')]) : t0['_e']()]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'options'
        }, [t0['perks']['perk_badge_owned'] ? [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Click\x20to\x20toggle.\x20'), t2('b', [t0['_v']('Only\x20one')]), t0['_v']('\x20shows\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')] : t0['_e'](), t0['_v']('\x20'), t2('div', {
            'staticClass': 'perk-badges-scroll'
        }, [t2('badges', {
            'attrs': {
                'clickable': !![],
                'size': 0x20,
                'selectedBadge': t0['selectedBadge'],
                'ownedBadges': t0['perks']['perk_badge_owned']
            },
            'on': {
                'input': function(t3) {
                    return t0['onBadgeSelect'](t3);
                }
            }
        })], 0x1), t0['_v']('\x20'), t0['perks']['perk_badge_owned'] ? t0['_e']() : [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Unique\x20awards\x20for\x20players\x20in\x20the\x20community,\x20shows\x20beside\x20name'), t2('br'), t0['_v']('\x20'), t2('div', {
            'staticClass': 'perks-obtaining-label'
        }, [t0['_v']('Make\x20yourself\x20known\x20for:')]), t0['_v']('\x20'), t2('ul', {
            'staticClass': 'perks-obtaining'
        }, [t2('li', [t0['_v']('Content\x20creation')]), t0['_v']('\x20'), t2('li', [t0['_v']('Tournament\x20wins')]), t0['_v']('\x20'), t2('li', [t0['_v']('XP\x20and\x20season\x20XP\x20milestones')]), t0['_v']('\x20'), t2('li', [t0['_v']('Big\x20contributions')])]), t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Check\x20our\x20'), t2('a', {
            'attrs': {
                'href': '/discord'
            }
        }, [t0['_v']('Discord')]), t0['_v']('\x20for\x20information\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Check\x20the\x20'), t2('a', {
            'attrs': {
                'href': '/tournaments'
            }
        }, [t0['_v']('tournament')]), t0['_v']('\x20server\x20here\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]], 0x2)]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'section\x20row'
        }, [t2('div', {
            'staticClass': 'header'
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Aura\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {}, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Rare\x20awards\x20for\x20players'), t2('br'), t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Coming\x20soon\x20(actually\x20never\x20'), t2('img', {
            'staticStyle': {
                'width': '20px',
                'height': '20px',
                'vertical-align': 'middle',
                'margin-left': '5px'
            },
            'attrs': {
                'src': 'img/troll.png',
                'alt': 'troll'
            }
        }), t0['_v'](')\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')])])]);
    };
    TG['_withStripped'] = !![];
    var Tw = h2(0xf)
      , Tv = h2(0x1)
      , TZ = h2(0x5);
    function TJ(t0) {
        return null == t0 ? null : 'infinity' === t0 ? 0x1 / 0x0 : new Date(t0)['getTime']();
    }
    function Tk(t0, t1) {
        if (null == (t1 = TJ(t1)))
            return {
                'text': null,
                'allowed': !![]
            };
        var t2 = t1 + 0x493e0 - t0;
        return t2 >= 0x0 ? {
            'text': 'allowed\x20for\x20' + TE(t2, ![]),
            'allowed': !![]
        } : {
            'text': 'locked\x20for\x20' + TE(-t2, ![]),
            'allowed': ![]
        };
    }
    function TE(t0, t1) {
        var t2 = Math['floor'](t0 / 0x3e8)
          , t3 = Math['floor'](t2 / 0x3c)
          , t4 = Math['floor'](t3 / 0x3c)
          , t5 = Math['floor'](t4 / 0x18)
          , t6 = Math['floor'](t5 / 0x7);
        return t6 > 0x0 ? t6 + (t1 ? 'w' : '\x20week' + (0x1 === t6 ? '' : 's')) : t5 > 0x0 ? t5 + (t1 ? 'd' : '\x20day' + (0x1 === t5 ? '' : 's')) : t4 > 0x0 ? t4 + (t1 ? 'h' : '\x20hour' + (0x1 === t4 ? '' : 's')) : t3 > 0x0 ? t3 + (t1 ? 'm' : '\x20minute' + (0x1 === t3 ? '' : 's')) : t2 + (t1 ? 's' : '\x20second' + (0x1 === t2 ? '' : 's'));
    }
    var To = {
        'components': {
            'color-picker': TQ,
            'badges': TB
        },
        'data': () => ({
            'perks': {},
            'namePicked': '',
            'colorPicked': '',
            'selectedBadge': 0x0,
            'useColorWeeks': 0x1,
            'confirmingColor': ![],
            'now': Date['now'](),
            'timerInterval': null,
            'timerTick': 0x0
        }),
        'computed': {
            'nameNotShowing'() {
                return this['perks']['perk_color_expiry'] && (!this['perks']['perk_name_picked'] || !this['perks']['perk_color_picked']);
            },
            'canChangeName'() {
                if (!this['perks']['perk_name_cooldown'])
                    return !![];
                var t0 = new Date(this['perks']['perk_name_cooldown'])['getTime']()
                  , t1 = t0 + 0x493e0 - this['now'];
                return t1 < 0x0;
            },
            'canChangeColor'() {
                if (!this['perks']['perk_color_cooldown'])
                    return !![];
                var t0 = new Date(this['perks']['perk_color_cooldown'])['getTime']()
                  , t1 = t0 + 0x493e0 - this['now'];
                return t1 < 0x0;
            },
            'canUpdate'() {
                return this['namePicked'] && this['namePicked'] !== this['perks']['perk_name_picked'] && this['canChangeName'] || this['colorPicked'] && this['colorPicked'] !== this['perks']['perk_color_picked'] && this['canChangeColor'];
            },
            'anyCooldownActive'() {
                return this['nameCooldown'] !== null || this['colorCooldown'] !== null;
            },
            'cooldownTimer'() {
                if (this['nameCooldown'] && this['colorCooldown']) {
                    const t0 = new Date(this['perks']['perk_name_cooldown'])['getTime']()
                      , t1 = new Date(this['perks']['perk_color_cooldown'])['getTime']();
                    return t0 > t1 ? this['nameCooldown'] : this['colorCooldown'];
                }
                return this['nameCooldown'] || this['colorCooldown'];
            },
            'nameCooldown'() {
                var t0 = this['timerTick'];
                if (!this['perks']['perk_name_cooldown'])
                    return null;
                var t1 = new Date(this['perks']['perk_name_cooldown'])['getTime']()
                  , t2 = t1 + 0x493e0 - Date['now']();
                return t2 > 0x0 ? 'locked\x20for\x20' + this['formatDuration'](t2, ![]) : null;
            },
            'colorCooldown'() {
                var t0 = this['timerTick'];
                if (!this['perks']['perk_color_cooldown'])
                    return null;
                var t1 = new Date(this['perks']['perk_color_cooldown'])['getTime']()
                  , t2 = t1 + 0x493e0 - Date['now']();
                return t2 > 0x0 ? 'locked\x20for\x20' + this['formatDuration'](t2, ![]) : null;
            },
            'expiryText'() {
                if (!this['perks']['perk_color_expiry'] || 'infinity' === this['perks']['perk_color_expiry'])
                    return null;
                var t0 = this['perks']['perk_color_expiry'] ? new Date(this['perks']['perk_color_expiry'])['getTime']() : null;
                if (!t0)
                    return null;
                var t1 = t0 - this['now'];
                return t1 > 0x0 ? this['formatDuration'](t1, ![]) : 'expired';
            }
        },
        'methods': {
            'formatDuration'(t0, t1) {
                var t2 = Math['floor'](t0 / 0x3e8)
                  , t3 = Math['floor'](t2 / 0x3c)
                  , t4 = Math['floor'](t3 / 0x3c)
                  , t5 = Math['floor'](t4 / 0x18)
                  , t6 = Math['floor'](t5 / 0x7);
                return t6 > 0x0 ? t6 + (t1 ? 'w' : '\x20week' + (0x1 === t6 ? '' : 's')) : t5 > 0x0 ? t5 + (t1 ? 'd' : '\x20day' + (0x1 === t5 ? '' : 's')) : t4 > 0x0 ? t4 + (t1 ? 'h' : '\x20hour' + (0x1 === t4 ? '' : 's')) : t3 > 0x0 ? t3 + (t1 ? 'm' : '\x20minute' + (0x1 === t3 ? '' : 's')) : t2 + (t1 ? 's' : '\x20second' + (0x1 === t2 ? '' : 's'));
            },
            'confirmUseColor'() {
                this['confirmingColor'] ? this['useColor']() : this['confirmingColor'] = !![];
            },
            async 'useColor'() {
                try {
                    const t1 = await fetch('https://aetlis.io/api/me/perks/color/use', {
                        'method': 'POST',
                        'headers': {
                            'Authorization': 'Vanis\x20' + localStorage['vanisToken'],
                            'Content-Type': 'application/json'
                        },
                        'body': JSON['stringify']({
                            'weeks': parseInt(this['useColorWeeks'])
                        })
                    });
                    if (!t1['ok']) {
                        const t2 = await t1['json']();
                        console['error']('❌\x20Failed\x20to\x20extend\x20color:', t2['error']),
                        this['confirmingColor'] = ![],
                        TZ['instance']['fire']({
                            'title': '❌\x20Failed\x20to\x20Use\x20Color',
                            'text': t2['error'] || 'Failed\x20to\x20activate\x20colored\x20name',
                            'icon': 'error',
                            'showConfirmButton': !![],
                            'confirmButtonText': 'OK',
                            'confirmButtonColor': '#e74c3c',
                            'timer': 0x1388,
                            'timerProgressBar': !![],
                            'allowOutsideClick': !![],
                            'allowEscapeKey': !![]
                        });
                        return;
                    }
                    var t0 = await t1['json']();
                    this['loadPerks'](t0),
                    this['confirmingColor'] = ![],
                    this['notifyServerPerkUpdate'](),
                    TZ['toast']['fire']({
                        'icon': 'success',
                        'title': '✅\x20Colored\x20name\x20&\x20locked\x20name\x20extended\x20for\x20' + this['useColorWeeks'] + '\x20week' + (this['useColorWeeks'] > 0x1 ? 's' : '') + '!',
                        'timer': 0xbb8
                    });
                } catch (t3) {
                    console['error']('Failed\x20to\x20use\x20color:', t3),
                    this['confirmingColor'] = ![],
                    TZ['instance']['fire']({
                        'title': '❌\x20Network\x20Error',
                        'text': 'Failed\x20to\x20activate\x20colored\x20name.\x20Please\x20check\x20your\x20connection.',
                        'icon': 'error',
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'confirmButtonColor': '#e74c3c',
                        'timer': 0x1388,
                        'timerProgressBar': !![],
                        'allowOutsideClick': !![],
                        'allowEscapeKey': !![]
                    });
                }
            },
            async 'updateNameColor'() {
                var t0 = {};
                this['namePicked'] && this['namePicked'] !== this['perks']['perk_name_picked'] && this['canChangeName'] && (t0['name'] = this['namePicked']),
                this['colorPicked'] && this['colorPicked'] !== this['perks']['perk_color_picked'] && this['canChangeColor'] && (t0['color'] = this['colorPicked']['replace']('#', ''));
                if (Object['keys'](t0)['length'] === 0x0)
                    return;
                try {
                    const t2 = await fetch('https://aetlis.io/api/me/perks/color/set', {
                        'method': 'POST',
                        'headers': {
                            'Authorization': 'Vanis\x20' + localStorage['vanisToken'],
                            'Content-Type': 'application/json'
                        },
                        'body': JSON['stringify'](t0)
                    });
                    if (!t2['ok']) {
                        const t4 = await t2['json']();
                        console['error']('❌\x20Failed\x20to\x20update\x20name/color:', t4['error']);
                        if (t2['status'] === 0x199)
                            TZ['instance']['fire']({
                                'title': '🔒\x20Name\x20Locked',
                                'html': '\x0a\x09\x09\x09\x09\x09\x09\x09This\x20name\x20is\x20already\x20reserved\x20by\x20another\x20user\x20with\x20active\x20colored\x20name.<br><br>\x0a\x09\x09\x09\x09\x09\x09\x09<b>Please\x20choose\x20a\x20different\x20name.</b><br><br>\x0a\x09\x09\x09\x09\x09\x09\x09<small>If\x20you\x20think\x20this\x20is\x20a\x20mistake,\x20please\x20contact\x20an\x20Admin\x20on\x20<a\x20href=\x22https://discord.gg/nvdJ7Mda6C\x22\x20target=\x22_blank\x22\x20style=\x22font-weight:\x20bold;\x20text-decoration:\x20underline;\x20color:\x20#5865F2;\x22><b>Aetlis\x20Discord\x20Server</b></a>.</small>\x0a\x09\x09\x09\x09\x09\x09',
                                'icon': 'warning',
                                'showConfirmButton': !![],
                                'confirmButtonText': 'OK',
                                'confirmButtonColor': '#f39c12',
                                'timer': 0x1388,
                                'timerProgressBar': !![],
                                'allowOutsideClick': !![],
                                'allowEscapeKey': !![]
                            });
                        else
                            t2['status'] === 0x1ad ? TZ['instance']['fire']({
                                'title': '⏱️\x20Cooldown\x20Active',
                                'text': t4['error'],
                                'icon': 'info',
                                'showConfirmButton': !![],
                                'confirmButtonText': 'OK',
                                'confirmButtonColor': '#3498db',
                                'timer': 0x1388,
                                'timerProgressBar': !![],
                                'allowOutsideClick': !![],
                                'allowEscapeKey': !![]
                            }) : TZ['instance']['fire']({
                                'title': '❌\x20Error',
                                'text': t4['error'] || 'Failed\x20to\x20update\x20name/color',
                                'icon': 'error',
                                'showConfirmButton': !![],
                                'confirmButtonText': 'OK',
                                'confirmButtonColor': '#e74c3c',
                                'timer': 0x1388,
                                'timerProgressBar': !![],
                                'allowOutsideClick': !![],
                                'allowEscapeKey': !![]
                            });
                        return;
                    }
                    var t1 = await t2['json']();
                    this['loadPerks'](t1),
                    this['notifyServerPerkUpdate']();
                    let t3 = '';
                    if (t0['name'] && t0['color'])
                        t3 = '✅\x20Name\x20locked\x20&\x20color\x20updated!';
                    else {
                        if (t0['name'])
                            t3 = '✅\x20Name\x20locked\x20successfully!';
                        else
                            t0['color'] && (t3 = '✅\x20Color\x20updated!\x20(Name\x20remains\x20locked)');
                    }
                    t3 && TZ['toast']['fire']({
                        'icon': 'success',
                        'title': t3,
                        'timer': 0xbb8
                    });
                } catch (t5) {
                    console['error']('Failed\x20to\x20update\x20name/color:', t5),
                    TZ['instance']['fire']({
                        'title': '❌\x20Network\x20Error',
                        'text': 'Failed\x20to\x20update\x20name/color.\x20Please\x20check\x20your\x20connection.',
                        'icon': 'error',
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'confirmButtonColor': '#e74c3c',
                        'timer': 0x1388,
                        'timerProgressBar': !![],
                        'allowOutsideClick': !![],
                        'allowEscapeKey': !![]
                    });
                }
            },
            async 'onBadgeSelect'(t0) {
                try {
                    console['log']('🎯\x20Badge\x20click:', t0, 'Current\x20selected:', this['selectedBadge']);
                    const t2 = await fetch('https://aetlis.io/api/me/perks/badge/set', {
                        'method': 'POST',
                        'headers': {
                            'Authorization': 'Vanis\x20' + localStorage['vanisToken'],
                            'Content-Type': 'application/json'
                        },
                        'body': JSON['stringify']({
                            'badgeId': t0
                        })
                    });
                    if (!t2['ok']) {
                        const t3 = await t2['json']();
                        console['error']('❌\x20API\x20error:', t2['status'], t3),
                        TZ['instance']['fire']({
                            'title': '❌\x20Failed\x20to\x20Set\x20Badge',
                            'text': t3['error'] || 'Failed\x20to\x20update\x20badge',
                            'icon': 'error',
                            'showConfirmButton': !![],
                            'confirmButtonText': 'OK',
                            'confirmButtonColor': '#e74c3c',
                            'timer': 0x1388,
                            'timerProgressBar': !![],
                            'allowOutsideClick': !![],
                            'allowEscapeKey': !![]
                        });
                        return;
                    }
                    var t1 = await t2['json']();
                    this['loadPerks'](t1),
                    this['notifyServerPerkUpdate'](),
                    t0 === 0x0 ? console['log']('✅\x20Badge\x20unselected') : console['log']('✅\x20Badge\x20selected:', t0);
                } catch (t4) {
                    console['error']('❌\x20Failed\x20to\x20set\x20badge:', t4),
                    TZ['instance']['fire']({
                        'title': '❌\x20Network\x20Error',
                        'text': 'Failed\x20to\x20update\x20badge.\x20Please\x20check\x20your\x20connection.',
                        'icon': 'error',
                        'showConfirmButton': !![],
                        'confirmButtonText': 'OK',
                        'confirmButtonColor': '#e74c3c',
                        'timer': 0x1388,
                        'timerProgressBar': !![],
                        'allowOutsideClick': !![],
                        'allowEscapeKey': !![]
                    });
                }
            },
            'notifyServerPerkUpdate'() {
                window['game'] && typeof window['game']['sendPerkRefresh'] === 'function' && window['game']['sendPerkRefresh']();
            },
            'loadPerks'(t0) {
                this['perks'] = t0 || {},
                this['selectedBadge'] = t0 && t0['perk_badge_set'] || 0x0;
                if (t0 && t0['perk_color_picked'])
                    this['colorPicked'] = t0['perk_color_picked']['startsWith']('#') ? t0['perk_color_picked'] : '#' + t0['perk_color_picked'];
                else
                    t0 && t0['perk_color'] && (this['colorPicked'] = t0['perk_color']['startsWith']('#') ? t0['perk_color'] : '#' + t0['perk_color']);
                t0 && t0['perk_name_picked'] && (this['namePicked'] = t0['perk_name_picked']),
                console['log']('📦\x20loadPerks:', {
                    'perk_badge_set': t0?.['perk_badge_set'],
                    'perk_badge_owned': t0?.['perk_badge_owned'],
                    'selectedBadge': this['selectedBadge'],
                    'colorPicked': this['colorPicked'],
                    'namePicked': this['namePicked']
                }),
                this['$nextTick']( () => {
                    this['$forceUpdate']();
                }
                ),
                typeof Tv !== 'undefined' && Tv['events'] && Tv['events']['$emit']('perks-loaded', t0);
            },
            async 'fetchPerksFromAPI'() {
                try {
                    const t0 = await fetch('https://aetlis.io/api/me', {
                        'headers': {
                            'Authorization': 'Vanis\x20' + localStorage['vanisToken']
                        }
                    })
                      , t1 = await t0['json']();
                    if (t1 && !t1['banned']) {
                        const t2 = {
                            'perk_badge_owned': t1['perk_badge_owned'] || [],
                            'perk_badge_set': t1['perk_badge_set'] || 0x0,
                            'perk_color_picked': t1['perk_color_picked'],
                            'perk_name_picked': t1['perk_name_picked'],
                            'perk_color': t1['nameColor'] || t1['perk_color'],
                            'perk_color_enabled': t1['nameColorEnabled'] || t1['perk_color_enabled'],
                            'perk_color_expires_at': t1['name_color_expires_at'] || t1['perk_color_expires_at'],
                            'perk_color_expiry': t1['name_color_expires_at'] || t1['perk_color_expires_at'],
                            'perk_color_unused': t1['perk_color_unused'],
                            'perk_name_cooldown': t1['perk_name_cooldown'],
                            'perk_color_cooldown': t1['perk_color_cooldown']
                        };
                        this['loadPerks'](t2),
                        console['log']('✅\x20Perks\x20loaded\x20from\x20API\x20on\x20mount');
                    }
                } catch (t3) {
                    console['error']('Failed\x20to\x20fetch\x20perks:', t3);
                }
            }
        },
        'created'() {
            Tv['events']['$on']('account-loaded', this['loadPerks']),
            this['timerInterval'] = setInterval( () => {
                this['$set'](this, 'now', Date['now']()),
                this['timerTick']++;
            }
            , 0x3e8),
            localStorage['vanisToken'] && this['fetchPerksFromAPI']();
        },
        'mounted'() {
            localStorage['vanisToken'] && (!this['perks'] || !this['perks']['perk_badge_owned']) && this['fetchPerksFromAPI']();
        },
        'beforeDestroy'() {
            Tv['events']['$off']('account-loaded', this['loadPerks']),
            this['timerInterval'] && (clearInterval(this['timerInterval']),
            this['timerInterval'] = null);
        }
    }
      , Tr = Object(hi['a'])(To, TG, [], ![], null, null, null);
    Tr['options']['__file'] = 'src/components/perks.vue';
    var TF = Tr['exports']
      , L0 = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'tab-menu'
        }, [t2('div', {
            'staticClass': 'tabs'
        }, [t2('div', {
            'staticClass': 'tab',
            'class': {
                'active': 'skins' === t0['activeTab']
            },
            'on': {
                'click': function(t3) {
                    t0['activeTab'] = 'skins';
                }
            }
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Skins\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'tab',
            'class': {
                'active': 'perks' === t0['activeTab']
            },
            'on': {
                'click': function(t3) {
                    t0['activeTab'] = 'perks';
                }
            }
        }, [t2('span', {
            'staticStyle': {
                'position': 'relative'
            }
        }, [t0['_v']('\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Perks\x0d\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'), t0['perksBadge'] ? t2('div', {
            'staticClass': 'perks-tab-badge',
            'class': t0['perksBadge']
        }) : t0['_e']()])])]), t0['_v']('\x20'), t2('div', {
            'attrs': {
                'id': 'customization'
            }
        }, [t2('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': 'skins' === t0['activeTab'],
                'expression': 'activeTab\x20===\x20\x27skins\x27'
            }],
            'attrs': {
                'id': 'skins'
            }
        }, [t2('skins')], 0x1), t0['_v']('\x20'), t2('perks', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': 'perks' === t0['activeTab'],
                'expression': 'activeTab\x20===\x20\x27perks\x27'
            }],
            'staticClass': 'perks'
        })], 0x1)]);
    };
    L0['_withStripped'] = !![];
    var L1 = h2(0x1)
      , L2 = {
        'components': {
            'skins': Tf,
            'perks': TF
        },
        'data': () => ({
            'activeTab': 'skins',
            'perksData': null
        }),
        'computed': {
            'perksBadge'() {
                var t0 = this['perksData'];
                return null == t0 ? '' : null != t0['perk_name_picked'] && null != t0['perk_color_picked'] || 0x0 !== t0['perk_badge_set'] ? 'using' : 0x0 !== t0['perk_color_unused'] || t0['perk_badge_owned'] && t0['perk_badge_owned']['length'] > 0x0 ? 'unused' : '';
            }
        },
        'created'() {
            L1['events']['$on']('perks-loaded', t0 => {
                this['perksData'] = t0,
                null == t0 && (this['activeTab'] = 'skins');
            }
            ),
            L1['events']['$on']('perks-updated', t0 => {
                if (null != this['perksData']) {
                    for (var t1 in t0)
                        this['$set'](this['perksData'], t1, t0[t1]);
                }
            }
            );
        }
    }
      , L3 = Object(hi['a'])(L2, L0, [], ![], null, null, null);
    L3['options']['__file'] = 'src/components/customization.vue';
    var L4 = L3['exports']
      , L5 = h2(0x1)
      , L6 = {
        'data': () => ({
            'isModalOpen': ![],
            'selectedTab': 'servers',
            'gameState': L5['state'],
            'cursorStyleElem': null
        }),
        'methods': {
            'onModalChange': function(t0) {
                this['isModalOpen'] = t0;
            },
            'setCursorUrl'(t0) {
                var t1 = null;
                t0 && (t1 = '#canvas,\x20#hud\x20>\x20*\x20{\x20cursor:\x20url(\x27' + t0 + '\x27),\x20auto\x20!important;\x20}'),
                !t1 && this['cursorStyleElem'] ? (this['cursorStyleElem']['remove'](),
                this['cursorStyleElem'] = null) : t1 && !this['cursorStyleElem'] && (this['cursorStyleElem'] = document['createElement']('style'),
                document['head']['appendChild'](this['cursorStyleElem'])),
                this['cursorStyleElem'] && (this['cursorStyleElem']['innerHTML'] = t1);
            }
        },
        'components': {
            'servers': hz,
            'playerContainer': TH,
            'account': TN,
            'customization': L4
        },
        'created'() {
            L5['events']['$on']('set-cursor-url', t0 => this['setCursorUrl'](t0));
        },
        'mounted'() {
            this['setCursorUrl'](L5['settings']['cursorImageUrl']);
        }
    }
      , L7 = (h2(0xea),
    Object(hi['a'])(L6, h7, [], ![], null, 'ebed1606', null));
    L7['options']['__file'] = 'src/components/main-container.vue';
    var L8 = L7['exports']
      , L9 = function() {
        var t0 = this['$createElement'];
        return this['_self']['_c'],
        this['_m'](0x0);
    };
    L9['_withStripped'] = !![],
    h2(0xec);
    var Lh = Object(hi['a'])({}, L9, [function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'social-container'
        }, [t1('a', {
            'staticClass': 'discord-link',
            'attrs': {
                'href': 'https://discord.gg/7eTJFxQHjE',
                'target': '_blank'
            }
        }, [t1('i', {
            'staticClass': 'fab\x20fa-discord'
        }), this['_v']('\x20Official\x20Discord\x0a\x20\x20\x20\x20')]), this['_v']('\x20'), t1('a', {
            'staticClass': 'tournaments-link',
            'attrs': {
                'href': 'https://discord.gg/CwERc3dWgw',
                'target': '_blank'
            }
        }, [t1('i', {
            'staticClass': 'fas\x20fa-trophy'
        }), this['_v']('\x20Tournaments\x0a\x20\x20\x20\x20')]), this['_v']('\x20'), t1('a', {
            'staticClass': 'youtube-link',
            'attrs': {
                'href': 'https://discord.gg/7eTJFxQHjE',
                'target': '_blank'
            }
        }, [t1('i', {
            'staticClass': 'fab\x20fa-youtube'
        }), this['_v']('\x20YouTube\x0a\x20\x20\x20\x20')]), this['_v']('\x20'), t1('a', {
            'attrs': {
                'href': 'https://skins.aetlis.io',
                'target': '_blank',
                'id': 'skins-link'
            }
        }, [t1('i', {
            'staticClass': 'fas\x20fa-images'
        }), this['_v']('\x20Skins\x0a\x20\x20\x20\x20')])]);
    }
    ], ![], null, '4d0670e9', null);
    Lh['options']['__file'] = 'src/components/social-links.vue';
    var LT = Lh['exports']
      , LL = function() {
        var t0 = this['$createElement'];
        return this['_self']['_c'],
        this['_m'](0x0);
    };
    LL['_withStripped'] = !![];
    var Tl = {
        'data'() {}
    }
      , LX = (h2(0xee),
    Object(hi['a'])(Tl, LL, [function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'container'
        }, [t1('a', {
            'staticStyle': {
                'margin-left': '20.59px'
            },
            'attrs': {
                'href': 'privacy.html',
                'target': '_blank'
            }
        }, [this['_v']('Privacy\x20Policy')]), this['_v']('\x20'), t1('span', {
            'staticClass': 'line'
        }, [this['_v']('|')]), this['_v']('\x20'), t1('a', {
            'attrs': {
                'href': 'tos.html',
                'target': '_blank'
            }
        }, [this['_v']('Terms\x20of\x20Service')])]);
    }
    ], ![], null, '6843da33', null));
    LX['options']['__file'] = 'src/components/privacy-tos.vue';
    var Tu = LX['exports']
      , TD = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return this['show'] ? t1('div', {
            'staticClass': 'context-menu\x20fade',
            'style': {
                'top': this['y'] + 'px',
                'left': this['x'] + 'px'
            }
        }, [t1('div', {
            'staticClass': 'player-name'
        }, [this['_v'](this['_s'](this['playerName']))]), this['_v']('\x20'), t1('div', [this['_v']('Block')]), this['_v']('\x20'), t1('div', {
            'on': {
                'click': this['hideName']
            }
        }, [this['_v']('Hide\x20Name')]), this['_v']('\x20'), t1('div', {
            'on': {
                'click': this['hideSkin']
            }
        }, [this['_v']('Hide\x20Skin')]), this['_v']('\x20'), t1('div', [this['_v']('Kick')]), this['_v']('\x20'), t1('div', [this['_v']('Ban')]), this['_v']('\x20'), t1('div', [this['_v']('Mute')])]) : this['_e']();
    };
    TD['_withStripped'] = !![],
    h2(0x1);
    var TV = {
        'data': () => ({
            'show': ![],
            'playerName': '',
            'x': 0x64,
            'y': 0x37
        }),
        'methods': {
            'open': function(t0, t1) {
                this['player'] = t1,
                this['playerName'] = t1['name'],
                this['x'] = t0['clientX'],
                this['y'] = t0['clientY'],
                this['show'] = !![],
                document['addEventListener']('click', t2 => {
                    this['show'] = ![];
                }
                , {
                    'once': !![]
                });
            },
            'hideName': function() {
                this['player']['setName'](''),
                this['player']['invalidateVisibility']();
            },
            'hideSkin': function() {
                this['player']['setSkin'](''),
                this['player']['invalidateVisibility']();
            }
        },
        'created'() {}
    }
      , TR = (h2(0xf0),
    Object(hi['a'])(TV, TD, [], ![], null, '4dbee04d', null));
    TR['options']['__file'] = 'src/components/context-menu.vue';
    var TP = TR['exports']
      , Ta = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'attrs': {
                'id': 'hud'
            }
        }, [t1('tournament-banner'), this['_v']('\x20'), t1('betting-sidebar'), this['_v']('\x20'), t1('stats'), this['_v']('\x20'), t1('chatbox'), this['_v']('\x20'), t1('leaderboard'), this['_v']('\x20'), t1('minimap'), this['_v']('\x20'), t1('cautions')], 0x1);
    };
    Ta['_withStripped'] = !![];
    var TQ = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'cautions'
        }, [!this['stopped'] && this['showMouseFrozen'] ? t1('div', [this['_v']('MOUSE\x20FROZEN')]) : this['_e'](), this['_v']('\x20'), !this['stopped'] && this['showMovementStopped'] ? t1('div', [this['_v']('MOVEMENT\x20STOPPED')]) : this['_e'](), this['_v']('\x20'), !this['stopped'] && this['showLinesplitting'] ? t1('div', [this['_v']('LINESPLITTING')]) : this['_e']()]);
    };
    TQ['_withStripped'] = !![];
    var TW = h2(0x1)
      , Tn = {
        'data': () => ({
            'showMouseFrozen': ![],
            'showMovementStopped': ![],
            'showLinesplitting': ![]
        }),
        'mounted'() {
            TW['events']['$on']('update-cautions', t0 => {
                'mouseFrozen'in t0 && (this['showMouseFrozen'] = t0['mouseFrozen']),
                'moveToCenterOfCells'in t0 && (this['showMovementStopped'] = t0['moveToCenterOfCells']),
                'lockLinesplit'in t0 && (this['showLinesplitting'] = t0['lockLinesplit']);
            }
            ),
            TW['events']['$on']('reset-cautions', () => {
                this['showMouseFrozen'] = ![],
                this['showMovementStopped'] = ![],
                this['showLinesplitting'] = ![];
            }
            );
        }
    }
      , TB = (h2(0xf2),
    Object(hi['a'])(Tn, TQ, [], ![], null, 'b7599310', null));
    TB['options']['__file'] = 'src/components/cautions.vue';
    var Tv = TB['exports']
      , Lq = function() {
        var t0 = this;
        return t0['visible'] ? t0['_c']('div', {
            'staticClass': 'tournament-banner',
            'class': t0['stateClass']
        }, [t0['_c']('div', {
            'staticClass': 'tournament-banner__label'
        }, [t0['_v'](t0['_s'](t0['label']))]), t0['_v']('\x20'), t0['countdownText'] ? t0['_c']('div', {
            'staticClass': 'tournament-banner__countdown'
        }, [t0['_v'](t0['_s'](t0['countdownText']))]) : t0['_e']()]) : t0['_e']();
    };
    Lq['_withStripped'] = !![];
    var Lj = {
        'data': () => ({
            'visible': ![],
            'state': 'idle',
            'targetTime': 0x0,
            'label': '',
            'countdownText': '',
            'interval': null,
            '_timerHandler': null,
            '_clearHandler': null
        }),
        'computed': {
            'stateClass'() {
                return 'tournament-banner--' + this['state'];
            }
        },
        'methods': {
            'ensureStyle'() {
                if (document['getElementById']('tournament-banner-style'))
                    return;
                var t0 = document['createElement']('style');
                t0['id'] = 'tournament-banner-style';
                var t1 = ['.tournament-banner{position:fixed;top:16px;left:50%;transform:translateX(-50%);padding:12px\x2028px;background:rgba(12,18,28,0.68);border-radius:16px;color:#fff;font-family:\x27Roboto\x27,sans-serif;text-align:center;backdrop-filter:blur(12px);box-shadow:0\x2020px\x2045px\x20rgba(0,0,0,0.35);pointer-events:none;z-index:200;min-width:240px;}', '.tournament-banner__label{font-size:13px;letter-spacing:0.26em;text-transform:uppercase;font-weight:600;margin-bottom:6px;color:#9cd2ff;opacity:0.92;}', '.tournament-banner__countdown{font-size:24px;font-weight:700;letter-spacing:0.08em;}', '.tournament-banner--queue\x20.tournament-banner__label{color:#ffe28f;}', '.tournament-banner--scheduled\x20.tournament-banner__label{color:#b8f7ff;}', '.tournament-banner--prep\x20.tournament-banner__label{color:#ffbdf3;}', '.tournament-banner--active\x20.tournament-banner__label{color:#7bfbc5;}'];
                t0['textContent'] = t1['join'](''),
                document['head']['appendChild'](t0);
            },
            'stopInterval'() {
                this['interval'] && (clearInterval(this['interval']),
                this['interval'] = null);
            },
            'formatCountdown'(t0) {
                var t1 = Math['max'](0x0, Math['ceil'](t0 / 0x3e8))
                  , t2 = Math['floor'](t1 / 0xe10)
                  , t3 = Math['floor'](t1 % 0xe10 / 0x3c)
                  , t4 = t1 % 0x3c
                  , t5 = t2 > 0x0 ? String(t2)['padStart'](0x2, '0') + ':' : ''
                  , t6 = String(t3)['padStart'](0x2, '0')
                  , t7 = String(t4)['padStart'](0x2, '0');
                return t5 + t6 + ':' + t7;
            },
            'prefixForState'(t0) {
                switch (t0) {
                case 'queue':
                    return 'Starting\x20in\x20';
                case 'scheduled':
                    return 'Starts\x20in\x20';
                case 'prep':
                    return 'Next\x20round\x20in\x20';
                case 'active':
                    return 'Ends\x20in\x20';
                case 'betting':
                    return '1V1\x20STARTS\x20LESGOO\x20';
                default:
                    return '';
                }
            },
            'expiredText'(t0) {
                switch (t0) {
                case 'active':
                    return 'Round\x20ending…';
                case 'queue':
                case 'prep':
                case 'scheduled':
                    return 'Starting\x20now…';
                default:
                    return '';
                }
            },
            'labelForState'(t0) {
                switch (t0) {
                case 'queue':
                    return 'Tournament\x20Queue';
                case 'scheduled':
                    return 'Tournament\x20Scheduled';
                case 'prep':
                    return 'Next\x20Round';
                case 'active':
                    return 'Round\x20In\x20Progress';
                case 'betting':
                    return '🎰\x20BETS\x20OPEN\x20XD';
                default:
                    return 'Tournament';
                }
            },
            'updateCountdownText'() {
                if (!this['visible'])
                    return;
                if (!this['targetTime']) {
                    this['countdownText'] = this['prefixForState'](this['state']) ? this['prefixForState'](this['state']) + '00:00' : '';
                    return;
                }
                var t0 = Date['now']()
                  , t1 = this['targetTime'] - t0;
                if (t1 <= 0x0) {
                    console['log']('[TOURNAMENT-BANNER]\x20⏰\x20Timer\x20expired'),
                    this['countdownText'] = this['expiredText'](this['state']),
                    this['stopInterval']();
                    return;
                }
                t1 > 0x5265c00 && console['error']('[TOURNAMENT-BANNER]\x20⚠️\x20Clock\x20desync\x20detected!\x20Remaining\x20time\x20>\x2024h:', {
                    'remainingSeconds': (t1 / 0x3e8)['toFixed'](0x1),
                    'targetTime': this['targetTime'],
                    'clientNow': t0
                });
                var t2 = this['formatCountdown'](t1);
                this['countdownText'] = this['prefixForState'](this['state']) + t2;
            },
            'clearBanner'() {
                this['stopInterval'](),
                this['visible'] = ![],
                this['state'] = 'idle',
                this['targetTime'] = 0x0,
                this['label'] = '',
                this['countdownText'] = '';
            },
            'handleTimer'(t0) {
                this['stopInterval']();
                if (!t0 || !t0['state'] || 'idle' === t0['state'] || 'finished' === t0['state'] || 'inactive' === t0['state']) {
                    this['clearBanner']();
                    return;
                }
                this['state'] = t0['state'] || 'scheduled',
                this['label'] = this['labelForState'](this['state']),
                this['targetTime'] = parseInt(t0['targetTime'], 0xa) || 0x0;
                var t1 = Date['now']()
                  , t2 = this['targetTime'] - t1;
                console['log']('[TOURNAMENT-BANNER]\x20⏱️\x20\x20Timer\x20update\x20received:', {
                    'state': this['state'],
                    'label': this['label'],
                    'targetTime': new Date(this['targetTime'])['toISOString'](),
                    'remainingMs': t2,
                    'remainingSeconds': (t2 / 0x3e8)['toFixed'](0x1) + 's',
                    'clientNow': new Date(t1)['toISOString']()
                });
                if (t2 < -0x1388)
                    console['warn']('[TOURNAMENT-BANNER]\x20⚠️\x20Timer\x20is\x20in\x20the\x20past\x20by', (-t2 / 0x3e8)['toFixed'](0x1), 'seconds');
                else
                    t2 > 0x36ee80 && console['warn']('[TOURNAMENT-BANNER]\x20⚠️\x20Timer\x20is\x20too\x20far\x20in\x20future:', (t2 / 0x36ee80)['toFixed'](0x1), 'hours');
                this['visible'] = !![],
                this['updateCountdownText'](),
                this['targetTime'] && this['targetTime'] > Date['now']() && (this['interval'] = setInterval( () => {
                    this['updateCountdownText']();
                }
                , 0x3e8));
            }
        },
        'mounted'() {
            this['ensureStyle'](),
            this['_timerHandler'] = this['handleTimer']['bind'](this),
            this['_clearHandler'] = this['clearBanner']['bind'](this),
            TW['events']['$on']('tournament-timer', this['_timerHandler']),
            TW['events']['$on']('game-stopped', this['_clearHandler']);
        },
        'beforeDestroy'() {
            TW['events']['$off']('tournament-timer', this['_timerHandler']),
            TW['events']['$off']('game-stopped', this['_clearHandler']),
            this['stopInterval']();
        }
    }
      , Ls = Object(hi['a'])(Lj, Lq, [], ![], null, null, null);
    Ls['options']['__file'] = 'src/components/tournament-banner.vue';
    var Li = Ls['exports']
      , Lp = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return typeof window !== 'undefined' && window['__bettingDebug'] && console['log']('[BETTING-UI-RENDER]\x20Render\x20called\x20-\x20visible:', t0['visible'], 'finalists:', t0['finalists']['length']),
        t0['visible'] ? t2('div', {
            'staticClass': 'betting-sidebar',
            'class': t0['sidebarClass']
        }, [t2('div', {
            'staticClass': 'betting-header\x20pulse-animation'
        }, [t2('div', {
            'staticClass': 'betting-title'
        }, [t0['_v']('🎰\x20FINAL\x201v1\x20BETTING')]), t2('div', {
            'staticClass': 'betting-subtitle'
        }, [t0['_v']('Place\x20your\x20bets!')])]), t2('div', {
            'staticClass': 'user-xp-display'
        }, [t0['_v']('💰\x20Your\x20XP:\x20' + t0['_s'](t0['maxSeasonXP']))]), t2('div', {
            'staticClass': 'betting-countdown'
        }, [t0['_v'](t0['_s'](t0['countdownText']))]), t2('div', {
            'staticClass': 'betting-finalists'
        }, t0['_l'](t0['finalists'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'finalist-card',
                'class': {
                    'selected': t0['selectedFinalist'] === t3['pid'],
                    'hovered': t0['hoveredFinalist'] === t3['pid']
                },
                'on': {
                    'click': function() {
                        return t0['selectFinalist'](t3['pid']);
                    },
                    'mouseenter': function() {
                        t0['hoveredFinalist'] = t3['pid'];
                    },
                    'mouseleave': function() {
                        t0['hoveredFinalist'] = null;
                    }
                }
            }, [t2('div', {
                'staticClass': 'finalist-name'
            }, [t0['_v'](t0['_s'](t3['name']))]), t2('div', {
                'staticClass': 'finalist-label'
            }, [t0['_v']('Votes:\x20' + t0['_s'](t0['voteCounts'][t3['pid']] || 0x0))])]);
        }), 0x0), t0['selectedFinalist'] ? t2('div', {
            'staticClass': 'betting-amounts\x20fade-in'
        }, [t2('div', {
            'staticClass': 'betting-amounts-title'
        }, [t0['_v']('Choose\x20bet\x20amount:')]), t2('div', {
            'staticClass': 'betting-amounts-grid'
        }, t0['_l'](t0['betAmounts'], function(t3, t4) {
            return t2('button', {
                'key': t4,
                'staticClass': 'bet-button',
                'class': {
                    'selected': t0['selectedAmount'] === t3
                },
                'on': {
                    'click': function() {
                        return t0['selectAmount'](t3);
                    }
                }
            }, [t0['_v'](t0['_s'](t0['formatAmount'](t3)) + '\x20XP')]);
        }), 0x0), t0['selectedAmount'] ? t2('div', {
            'staticClass': 'bet-prediction'
        }, [t2('div', {
            'staticClass': 'prediction-win'
        }, [t0['_v']('✅\x20Win:\x20+' + t0['_s'](t0['selectedAmount']) + '\x20XP\x20profit')]), t2('div', {
            'staticClass': 'prediction-lose'
        }, [t0['_v']('❌\x20Lose:\x20-' + t0['_s'](t0['selectedAmount']) + '\x20XP')])]) : t0['_e'](), t2('button', {
            'staticClass': 'confirm-bet-button',
            'attrs': {
                'disabled': !t0['selectedAmount']
            },
            'on': {
                'click': function() {
                    return t0['confirmBet']();
                }
            }
        }, [t0['_v']('PLACE\x20BET')])]) : t0['_e']()]) : t0['_e']();
    };
    Lp['_withStripped'] = !![];
    var Lz = h2(0x1)
      , Lx = {
        'data': function() {
            return {
                'visible': ![],
                'finalists': [],
                'selectedFinalist': null,
                'hoveredFinalist': null,
                'selectedAmount': null,
                'betAmounts': [],
                'maxSeasonXP': 0x0,
                'countdownText': '30',
                'countdownInterval': null,
                'targetTime': null,
                'voteCounts': {},
                'totalBets': {}
            };
        },
        'computed': {
            'sidebarClass': function() {
                return {
                    'slide-in': this['visible']
                };
            }
        },
        'methods': {
            'injectBettingStyles'() {
                if (document['getElementById']('betting-sidebar-styles'))
                    return;
                var t0 = document['createElement']('style');
                t0['id'] = 'betting-sidebar-styles',
                t0['textContent'] = '\x0a\x09\x09\x09\x09\x09/*\x20🎰\x20BETTING\x20SIDEBAR\x20-\x20COMPACT\x20DESIGN\x20*/\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-sidebar\x20{\x0a\x09\x09\x09\x09\x09\x09position:\x20fixed\x20!important;\x0a\x09\x09\x09\x09\x09\x09left:\x2016px\x20!important;\x0a\x09\x09\x09\x09\x09\x09top:\x20120px\x20!important;\x0a\x09\x09\x09\x09\x09\x09width:\x20240px;\x0a\x09\x09\x09\x09\x09\x09max-height:\x20calc(100vh\x20-\x20140px);\x0a\x09\x09\x09\x09\x09\x09overflow-y:\x20auto;\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(145deg,\x20rgba(15,\x2020,\x2032,\x200.96)\x200%,\x20rgba(8,\x2012,\x2020,\x200.96)\x20100%);\x0a\x09\x09\x09\x09\x09\x09border-radius:\x2014px;\x0a\x09\x09\x09\x09\x09\x09border:\x201.5px\x20solid\x20rgba(255,\x20215,\x200,\x200.35);\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x2012px\x2040px\x20rgba(0,\x200,\x200,\x200.75),\x200\x200\x2025px\x20rgba(255,\x20215,\x200,\x200.12);\x0a\x09\x09\x09\x09\x09\x09padding:\x2014px;\x0a\x09\x09\x09\x09\x09\x09backdrop-filter:\x20blur(16px);\x0a\x09\x09\x09\x09\x09\x09z-index:\x2099999\x20!important;\x0a\x09\x09\x09\x09\x09\x09font-family:\x20\x27Roboto\x27,\x20\x27Arial\x27,\x20sans-serif;\x0a\x09\x09\x09\x09\x09\x09opacity:\x201\x20!important;\x0a\x09\x09\x09\x09\x09\x09pointer-events:\x20auto\x20!important;\x0a\x09\x09\x09\x09\x09\x09cursor:\x20default;\x0a\x09\x09\x09\x09\x09\x09display:\x20block\x20!important;\x0a\x09\x09\x09\x09\x09\x09visibility:\x20visible\x20!important;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-sidebar\x20*\x20{\x0a\x09\x09\x09\x09\x09\x09pointer-events:\x20auto\x20!important;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-sidebar\x20button\x20{\x0a\x09\x09\x09\x09\x09\x09pointer-events:\x20auto\x20!important;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09/*\x20Custom\x20scrollbar\x20*/\x0a\x09\x09\x09\x09\x09.betting-sidebar::-webkit-scrollbar\x20{\x0a\x09\x09\x09\x09\x09\x09width:\x204px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-sidebar::-webkit-scrollbar-track\x20{\x0a\x09\x09\x09\x09\x09\x09background:\x20rgba(0,\x200,\x200,\x200.2);\x0a\x09\x09\x09\x09\x09\x09border-radius:\x202px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-sidebar::-webkit-scrollbar-thumb\x20{\x0a\x09\x09\x09\x09\x09\x09background:\x20rgba(78,\x20205,\x20196,\x200.4);\x0a\x09\x09\x09\x09\x09\x09border-radius:\x202px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-sidebar::-webkit-scrollbar-thumb:hover\x20{\x0a\x09\x09\x09\x09\x09\x09background:\x20rgba(78,\x20205,\x20196,\x200.6);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-header\x20{\x0a\x09\x09\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x2010px;\x0a\x09\x09\x09\x09\x09\x09border-bottom:\x201px\x20solid\x20rgba(255,\x20215,\x200,\x200.15);\x0a\x09\x09\x09\x09\x09\x09padding-bottom:\x2010px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-title\x20{\x0a\x09\x09\x09\x09\x09\x09font-size:\x2015px;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20800;\x0a\x09\x09\x09\x09\x09\x09color:\x20#FFD700;\x0a\x09\x09\x09\x09\x09\x09text-shadow:\x200\x200\x2015px\x20rgba(255,\x20215,\x200,\x200.4);\x0a\x09\x09\x09\x09\x09\x09letter-spacing:\x200.5px;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x203px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09.betting-subtitle\x20{\x0a\x09\x09\x09\x09\x09font-size:\x2010px;\x0a\x09\x09\x09\x09\x09color:\x20#B8B8C8;\x0a\x09\x09\x09\x09\x09letter-spacing:\x200.3px;\x0a\x09\x09\x09\x09\x09text-transform:\x20uppercase;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.pulse-animation\x20{\x0a\x09\x09\x09\x09\x09animation:\x20betting-pulse\x202s\x20ease-in-out\x20infinite;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09@keyframes\x20betting-pulse\x20{\x0a\x09\x09\x09\x09\x090%,\x20100%\x20{\x20opacity:\x201;\x20}\x0a\x09\x09\x09\x09\x0950%\x20{\x20opacity:\x200.85;\x20}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.user-xp-display\x20{\x0a\x09\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09\x09font-size:\x2012px;\x0a\x09\x09\x09\x09\x09color:\x20#FFD700;\x0a\x09\x09\x09\x09\x09font-weight:\x20700;\x0a\x09\x09\x09\x09\x09padding:\x208px\x2012px;\x0a\x09\x09\x09\x09\x09background:\x20rgba(255,\x20215,\x200,\x200.08);\x0a\x09\x09\x09\x09\x09border-radius:\x208px;\x0a\x09\x09\x09\x09\x09margin-bottom:\x2010px;\x0a\x09\x09\x09\x09\x09border:\x201px\x20solid\x20rgba(255,\x20215,\x200,\x200.2);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.betting-countdown\x20{\x0a\x09\x09\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09\x09\x09font-size:\x2028px;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20900;\x0a\x09\x09\x09\x09\x09\x09color:\x20#4ECDC4;\x0a\x09\x09\x09\x09\x09\x09text-shadow:\x200\x200\x2020px\x20rgba(78,\x20205,\x20196,\x200.5);\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x2012px;\x0a\x09\x09\x09\x09\x09\x09letter-spacing:\x201px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-finalists\x20{\x0a\x09\x09\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09\x09\x09\x09gap:\x208px;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x2012px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-card\x20{\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(135deg,\x20rgba(35,\x2045,\x2065,\x200.85)\x200%,\x20rgba(20,\x2030,\x2045,\x200.85)\x20100%);\x0a\x09\x09\x09\x09\x09\x09border:\x201.5px\x20solid\x20rgba(78,\x20205,\x20196,\x200.3);\x0a\x09\x09\x09\x09\x09\x09border-radius:\x2010px;\x0a\x09\x09\x09\x09\x09\x09padding:\x2010px\x2014px;\x0a\x09\x09\x09\x09\x09\x09cursor:\x20pointer\x20!important;\x0a\x09\x09\x09\x09\x09\x09transition:\x20all\x200.25s\x20cubic-bezier(0.4,\x200,\x200.2,\x201);\x0a\x09\x09\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09\x09\x09\x09pointer-events:\x20auto\x20!important;\x0a\x09\x09\x09\x09\x09\x09user-select:\x20none;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-card::before\x20{\x0a\x09\x09\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09top:\x200;\x0a\x09\x09\x09\x09\x09\x09left:\x20-100%;\x0a\x09\x09\x09\x09\x09\x09width:\x20100%;\x0a\x09\x09\x09\x09\x09\x09height:\x20100%;\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(90deg,\x20transparent,\x20rgba(78,\x20205,\x20196,\x200.15),\x20transparent);\x0a\x09\x09\x09\x09\x09\x09transition:\x20left\x200.4s;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-card.hovered::before\x20{\x0a\x09\x09\x09\x09\x09\x09left:\x20100%;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-card:hover\x20{\x0a\x09\x09\x09\x09\x09\x09border-color:\x20#4ECDC4;\x0a\x09\x09\x09\x09\x09\x09transform:\x20translateX(4px)\x20scale(1.01);\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x204px\x2015px\x20rgba(78,\x20205,\x20196,\x200.25);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-card.selected\x20{\x0a\x09\x09\x09\x09\x09\x09border-color:\x20#FFD700;\x0a\x09\x09\x09\x09\x09\x09border-width:\x202px;\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(135deg,\x20rgba(55,\x2065,\x2085,\x200.9)\x200%,\x20rgba(35,\x2045,\x2065,\x200.9)\x20100%);\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x200\x2020px\x20rgba(255,\x20215,\x200,\x200.35);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-name\x20{\x0a\x09\x09\x09\x09\x09\x09font-size:\x2014px;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20700;\x0a\x09\x09\x09\x09\x09\x09color:\x20#FFFFFF;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x203px;\x0a\x09\x09\x09\x09\x09\x09white-space:\x20nowrap;\x0a\x09\x09\x09\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09\x09\x09\x09text-overflow:\x20ellipsis;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.finalist-label\x20{\x0a\x09\x09\x09\x09\x09\x09font-size:\x209px;\x0a\x09\x09\x09\x09\x09\x09color:\x20#4ECDC4;\x0a\x09\x09\x09\x09\x09\x09text-transform:\x20uppercase;\x0a\x09\x09\x09\x09\x09\x09letter-spacing:\x200.8px;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20600;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-finalists\x20{\x0a\x09\x09\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09\x09\x09\x09gap:\x208px;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x2012px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-amounts\x20{\x0a\x09\x09\x09\x09\x09\x09animation:\x20fadeInUp\x200.3s\x20ease-out;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09@keyframes\x20fadeInUp\x20{\x0a\x09\x09\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09\x09\x09\x09transform:\x20translateY(12px);\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09\x09\x09\x09transform:\x20translateY(0);\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-amounts-title\x20{\x0a\x09\x09\x09\x09\x09\x09font-size:\x2011px;\x0a\x09\x09\x09\x09\x09\x09color:\x20#B8B8C8;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x208px;\x0a\x09\x09\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20600;\x0a\x09\x09\x09\x09\x09\x09letter-spacing:\x200.3px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.betting-amounts-grid\x20{\x0a\x09\x09\x09\x09\x09\x09display:\x20grid;\x0a\x09\x09\x09\x09\x09\x09grid-template-columns:\x20repeat(2,\x201fr);\x0a\x09\x09\x09\x09\x09\x09gap:\x206px;\x0a\x09\x09\x09\x09\x09\x09margin-bottom:\x2010px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.bet-button\x20{\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(135deg,\x20rgba(78,\x20205,\x20196,\x200.12)\x200%,\x20rgba(78,\x20205,\x20196,\x200.04)\x20100%);\x0a\x09\x09\x09\x09\x09\x09border:\x201.5px\x20solid\x20rgba(78,\x20205,\x20196,\x200.35);\x0a\x09\x09\x09\x09\x09\x09border-radius:\x208px;\x0a\x09\x09\x09\x09\x09\x09color:\x20#4ECDC4;\x0a\x09\x09\x09\x09\x09\x09font-size:\x2012px;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20700;\x0a\x09\x09\x09\x09\x09\x09padding:\x2010px;\x0a\x09\x09\x09\x09\x09\x09cursor:\x20pointer\x20!important;\x0a\x09\x09\x09\x09\x09\x09transition:\x20all\x200.2s\x20cubic-bezier(0.4,\x200,\x200.2,\x201);\x0a\x09\x09\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09\x09\x09\x09pointer-events:\x20auto\x20!important;\x0a\x09\x09\x09\x09\x09\x09user-select:\x20none;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.bet-button::before\x20{\x0a\x09\x09\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09\x09top:\x2050%;\x0a\x09\x09\x09\x09\x09\x09left:\x2050%;\x0a\x09\x09\x09\x09\x09\x09width:\x200;\x0a\x09\x09\x09\x09\x09\x09height:\x200;\x0a\x09\x09\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09\x09\x09background:\x20rgba(78,\x20205,\x20196,\x200.25);\x0a\x09\x09\x09\x09\x09\x09transform:\x20translate(-50%,\x20-50%);\x0a\x09\x09\x09\x09\x09\x09transition:\x20width\x200.4s,\x20height\x200.4s;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.bet-button:hover::before\x20{\x0a\x09\x09\x09\x09\x09\x09width:\x20200px;\x0a\x09\x09\x09\x09\x09\x09height:\x20200px;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.bet-button:hover\x20{\x0a\x09\x09\x09\x09\x09\x09border-color:\x20#4ECDC4;\x0a\x09\x09\x09\x09\x09\x09transform:\x20scale(1.03);\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x204px\x2015px\x20rgba(78,\x20205,\x20196,\x200.25);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.bet-button.selected\x20{\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(135deg,\x20rgba(255,\x20215,\x200,\x200.22)\x200%,\x20rgba(255,\x20215,\x200,\x200.12)\x20100%);\x0a\x09\x09\x09\x09\x09\x09border-color:\x20#FFD700;\x0a\x09\x09\x09\x09\x09\x09border-width:\x202px;\x0a\x09\x09\x09\x09\x09\x09color:\x20#FFD700;\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x200\x2015px\x20rgba(255,\x20215,\x200,\x200.35);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.confirm-bet-button\x20{\x0a\x09\x09\x09\x09\x09\x09width:\x20100%;\x0a\x09\x09\x09\x09\x09\x09background:\x20linear-gradient(135deg,\x20#FFD700\x200%,\x20#FFA500\x20100%);\x0a\x09\x09\x09\x09\x09\x09border:\x20none;\x0a\x09\x09\x09\x09\x09\x09border-radius:\x2010px;\x0a\x09\x09\x09\x09\x09\x09color:\x20#000000;\x0a\x09\x09\x09\x09\x09\x09font-size:\x2013px;\x0a\x09\x09\x09\x09\x09\x09font-weight:\x20900;\x0a\x09\x09\x09\x09\x09\x09padding:\x2012px;\x0a\x09\x09\x09\x09\x09\x09cursor:\x20pointer\x20!important;\x0a\x09\x09\x09\x09\x09\x09transition:\x20all\x200.25s\x20cubic-bezier(0.4,\x200,\x200.2,\x201);\x0a\x09\x09\x09\x09\x09\x09text-transform:\x20uppercase;\x0a\x09\x09\x09\x09\x09\x09letter-spacing:\x201.2px;\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x206px\x2020px\x20rgba(255,\x20215,\x200,\x200.4);\x0a\x09\x09\x09\x09\x09\x09pointer-events:\x20auto\x20!important;\x0a\x09\x09\x09\x09\x09\x09user-select:\x20none;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.confirm-bet-button:hover:not(:disabled)\x20{\x0a\x09\x09\x09\x09\x09\x09transform:\x20translateY(-2px)\x20scale(1.01);\x0a\x09\x09\x09\x09\x09\x09box-shadow:\x200\x208px\x2028px\x20rgba(255,\x20215,\x200,\x200.55);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09.confirm-bet-button:active:not(:disabled)\x20{\x0a\x09\x09\x09\x09\x09\x09transform:\x20translateY(0)\x20scale(0.98);\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09.confirm-bet-button:disabled\x20{\x0a\x09\x09\x09\x09\x09background:\x20linear-gradient(135deg,\x20#555\x200%,\x20#333\x20100%);\x0a\x09\x09\x09\x09\x09color:\x20#888;\x0a\x09\x09\x09\x09\x09cursor:\x20not-allowed;\x0a\x09\x09\x09\x09\x09box-shadow:\x20none;\x0a\x09\x09\x09\x09\x09opacity:\x200.5;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.bet-prediction\x20{\x0a\x09\x09\x09\x09\x09background:\x20rgba(78,\x20205,\x20196,\x200.08);\x0a\x09\x09\x09\x09\x09border:\x201px\x20solid\x20rgba(78,\x20205,\x20196,\x200.2);\x0a\x09\x09\x09\x09\x09border-radius:\x208px;\x0a\x09\x09\x09\x09\x09padding:\x2010px;\x0a\x09\x09\x09\x09\x09margin-bottom:\x2010px;\x0a\x09\x09\x09\x09\x09font-size:\x2011px;\x0a\x09\x09\x09\x09\x09line-height:\x201.6;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.prediction-win\x20{\x0a\x09\x09\x09\x09\x09color:\x20#4ECDC4;\x0a\x09\x09\x09\x09\x09font-weight:\x20600;\x0a\x09\x09\x09\x09\x09margin-bottom:\x204px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.prediction-lose\x20{\x0a\x09\x09\x09\x09\x09color:\x20#FF6B6B;\x0a\x09\x09\x09\x09\x09font-weight:\x20600;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.fade-in\x20{\x0a\x09\x09\x09\x09\x09animation:\x20fadeIn\x200.25s\x20ease-out;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09@keyframes\x20fadeIn\x20{\x0a\x09\x09\x09\x09\x09from\x20{\x20opacity:\x200;\x20}\x0a\x09\x09\x09\x09\x09to\x20{\x20opacity:\x201;\x20}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09',
                document['head']['appendChild'](t0),
                console['log']('[BETTING-UI]\x20🎨\x20Styles\x20injected');
            },
            'formatAmount': function(t0) {
                return t0 >= 0x3e8 ? t0 / 0x3e8 + 'k' : t0;
            },
            'selectFinalist': function(t0) {
                console['log']('[BETTING-UI]\x20🖱️\x20selectFinalist\x20CALLED\x20-\x20PID:', t0),
                this['selectedFinalist'] = t0,
                this['selectedAmount'] = null,
                this['playSound']('select'),
                console['log']('[BETTING-UI]\x20✅\x20Selected\x20finalist\x20PID=', t0),
                this['$forceUpdate']();
            },
            'selectAmount': function(t0) {
                console['log']('[BETTING-UI]\x20🖱️\x20selectAmount\x20CALLED\x20-\x20Amount:', t0),
                this['selectedAmount'] = t0,
                this['playSound']('click'),
                console['log']('[BETTING-UI]\x20✅\x20Selected\x20amount:', t0),
                this['$forceUpdate']();
            },
            'confirmBet': function() {
                console['log']('[BETTING-UI]\x20🖱️\x20confirmBet\x20CALLED');
                if (!this['selectedFinalist'] || !this['selectedAmount']) {
                    console['warn']('[BETTING-UI]\x20⚠️\x20Cannot\x20confirm\x20-\x20missing\x20selection');
                    return;
                }
                if (this['selectedAmount'] > this['maxSeasonXP']) {
                    console['error']('[BETTING-UI]\x20❌\x20Insufficient\x20season\x20XP:', this['selectedAmount'], '>', this['maxSeasonXP']);
                    var t0 = window['game'] || Lz;
                    t0 && t0['addServerMessage'] && t0['addServerMessage']('❌\x20Insufficient\x20season\x20XP!\x20You\x20have:\x20' + this['maxSeasonXP']);
                    return;
                }
                console['log']('[BETTING-UI]\x20🎰\x20Placing\x20bet:', {
                    'targetPID': this['selectedFinalist'],
                    'amount': this['selectedAmount']
                });
                var t0 = window['game'] || Lz;
                if (t0 && t0['sendChatMessage']) {
                    var t1 = '/bet\x20' + this['selectedFinalist'] + '\x20' + this['selectedAmount'];
                    console['log']('[BETTING-UI]\x20📤\x20Sending\x20command:', t1),
                    t0['sendChatMessage'](t1),
                    this['playSound']('bet-placed'),
                    t0['addServerMessage'] && t0['addServerMessage']('✅\x20Bet\x20placed:\x20' + this['selectedAmount'] + '\x20XP\x20on\x20' + this['finalists']['find'](t2 => t2['pid'] === this['selectedFinalist'])['name']),
                    console['log']('[BETTING-UI]\x20✅\x20Bet\x20command\x20sent!'),
                    setTimeout( () => {
                        console['log']('[BETTING-UI]\x20📪\x20Hiding\x20GUI\x20after\x20bet\x20placement'),
                        this['hideBettingSidebar']();
                    }
                    , 0x5dc);
                } else
                    console['error']('[BETTING-UI]\x20❌\x20Game\x20object\x20not\x20available');
            },
            'playSound'(t0) {
                try {
                    var t1 = {
                        'select': 'data:audio/wav;base64,UklGRhQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQA=',
                        'click': 'data:audio/wav;base64,UklGRhQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQA=',
                        'bet-placed': 'data:audio/wav;base64,UklGRhQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQA=',
                        'win': 'data:audio/wav;base64,UklGRhQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQA=',
                        'loss': 'data:audio/wav;base64,UklGRhQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQA='
                    };
                    !window['bettingAudioContext'] && (window['bettingAudioContext'] = new (window['AudioContext'] || window['webkitAudioContext'])());
                    var t2 = window['bettingAudioContext']
                      , t3 = {
                        'select': 0x1b8,
                        'click': 523.25,
                        'bet-placed': 659.25,
                        'win': 0x370,
                        'loss': 0xdc
                    }
                      , t4 = t3[t0] || 0x1b8
                      , t5 = t2['createOscillator']()
                      , t6 = t2['createGain']();
                    t5['connect'](t6),
                    t6['connect'](t2['destination']),
                    t5['frequency']['value'] = t4,
                    t5['type'] = t0 === 'win' ? 'sine' : t0 === 'loss' ? 'sawtooth' : 'square',
                    t6['gain']['setValueAtTime'](0.1, t2['currentTime']),
                    t6['gain']['exponentialRampToValueAtTime'](0.01, t2['currentTime'] + 0.15),
                    t5['start'](t2['currentTime']),
                    t5['stop'](t2['currentTime'] + 0.15),
                    console['log']('[BETTING-UI]\x20🔊\x20Played\x20sound:', t0);
                } catch (t7) {
                    console['warn']('[BETTING-UI]\x20⚠️\x20Sound\x20playback\x20failed:', t7);
                }
            },
            'showBettingSidebar'(t0) {
                console['log']('[BETTING-UI]\x20🔔\x20showBettingSidebar\x20called\x20with\x20data:', t0);
                if (!t0 || !t0['finalists'] || t0['finalists']['length'] !== 0x2) {
                    console['warn']('[BETTING-UI]\x20⚠️\x20Invalid\x20betting\x20data,\x20hiding\x20sidebar'),
                    this['hideBettingSidebar']();
                    return;
                }
                this['_refreshSeasonXP']();
                var t1 = Lz['playerId'] || 0x0
                  , t2 = t0['finalists']['some'](t5 => t5['pid'] === t1)
                  , t3 = Lz['cellCount'] || 0x0;
                console['log']('[BETTING-UI]\x20📊\x20Check\x20eligibility:', {
                    'myPID': t1,
                    'myCells': t3,
                    'iAmFinalist': t2,
                    'spectating': Lz['spectating'],
                    'mySeasonXP': this['maxSeasonXP']
                });
                if (t2 && t3 > 0x0) {
                    console['log']('[BETTING-UI]\x20🏆\x20I\x20am\x20a\x20finalist\x20with\x20cells\x20-\x20cannot\x20bet'),
                    this['hideBettingSidebar']();
                    return;
                }
                if (!this['maxSeasonXP'] || this['maxSeasonXP'] <= 0x0) {
                    console['warn']('[BETTING-UI]\x20⚠️\x20No\x20season\x20XP\x20to\x20bet\x20-\x20hiding\x20sidebar');
                    var t4 = window['game'] || Lz;
                    t4 && t4['addServerMessage'] && t4['addServerMessage']('⚠️\x20You\x20need\x20season\x20XP\x20to\x20bet!\x20Your\x20XP:\x20' + this['maxSeasonXP']);
                    this['hideBettingSidebar']();
                    return;
                }
                t3 === 0x0 && !Lz['spectating'] && (console['log']('[BETTING-UI]\x20💀\x20Eliminated\x20but\x20not\x20spectating\x20-\x20triggering\x20auto-spectate'),
                Lz['actions'] && Lz['actions']['spectate'] && Lz['actions']['spectate']()),
                console['log']('[BETTING-UI]\x20📂\x20Opening\x20betting\x20sidebar'),
                console['log']('[BETTING-UI]\x20\x20\x20Season\x20XP:', this['maxSeasonXP']),
                console['log']('[BETTING-UI]\x20\x20\x20Finalist\x201:', t0['finalists'][0x0]),
                console['log']('[BETTING-UI]\x20\x20\x20Finalist\x202:', t0['finalists'][0x1]),
                this['$set'] ? (this['$set'](this, 'finalists', t0['finalists']),
                this['$set'](this, 'visible', !![]),
                this['$set'](this, 'selectedFinalist', null),
                this['$set'](this, 'selectedAmount', null)) : (this['finalists'] = t0['finalists'],
                this['visible'] = !![],
                this['selectedFinalist'] = null,
                this['selectedAmount'] = null),
                this['updateBetAmounts'](),
                this['syncCountdown'](),
                this['$forceUpdate'] && this['$forceUpdate'](),
                console['log']('[BETTING-UI]\x20✅\x20Sidebar\x20visible\x20set\x20to:', this['visible']),
                console['log']('[BETTING-UI]\x20✅\x20Finalists:', this['finalists']);
            },
            'hideBettingSidebar'() {
                console['log']('[BETTING-UI]\x20📪\x20Closing\x20betting\x20sidebar'),
                this['visible'] = ![],
                this['finalists'] = [],
                this['selectedFinalist'] = null,
                this['selectedAmount'] = null,
                this['targetTime'] = null,
                window['__bettingActive'] = ![],
                this['_bettingData'] = null;
                if (Lz)
                    Lz['_bettingData'] = null;
                this['countdownInterval'] && (clearInterval(this['countdownInterval']),
                this['countdownInterval'] = null);
            },
            'updateBetAmounts': function() {
                var t0 = this['maxSeasonXP'];
                console['log']('[BETTING-UI]\x20💰\x20Generating\x20bet\x20amounts\x20for\x20season\x20XP:', t0);
                if (!t0 || t0 <= 0x0) {
                    console['warn']('[BETTING-UI]\x20⚠️\x20No\x20season\x20XP\x20-\x20cannot\x20generate\x20bet\x20amounts'),
                    this['betAmounts'] = [];
                    return;
                }
                var t1 = [0.2, 0.4, 0.6, 0.8, 0x1];
                this['betAmounts'] = t1['map'](t5 => {
                    var t6 = Math['floor'](t0 * t5);
                    return Math['max'](0x64, t6);
                }
                ),
                this['betAmounts'] = Array['from'](new Set(this['betAmounts']))['sort']( (t5, t6) => t5 - t6);
                while (this['betAmounts']['length'] < 0x5 && t0 >= 0x1f4) {
                    var t2 = Math['floor'](t0 / 0xa);
                    for (var t3 = 0x1; t3 <= 0x5 && this['betAmounts']['length'] < 0x5; t3++) {
                        var t4 = t2 * t3 * 0x2;
                        t4 >= 0x64 && t4 <= t0 && !this['betAmounts']['includes'](t4) && this['betAmounts']['push'](t4);
                    }
                    this['betAmounts']['sort']( (t5, t6) => t5 - t6);
                    break;
                }
                this['betAmounts'] = this['betAmounts']['slice'](0x0, 0x5),
                console['log']('[BETTING-UI]\x20✅\x20Generated\x20bet\x20amounts:', this['betAmounts']);
            },
            'syncCountdown'() {
                this['countdownInterval'] && clearInterval(this['countdownInterval']),
                this['countdownInterval'] = setInterval( () => {
                    if (this['targetTime'] && this['targetTime'] > Date['now']()) {
                        var t0 = Math['ceil']((this['targetTime'] - Date['now']()) / 0x3e8);
                        this['countdownText'] = t0 > 0x0 ? t0['toString']() : '0';
                    } else
                        this['countdownText'] = '0';
                }
                , 0x64);
            },
            'updateCountdownFromTimer': function(t0) {
                if (!this['visible'])
                    return;
                t0['state'] === 'betting' && t0['targetTime'] && (this['targetTime'] = t0['targetTime']);
            },
            '_refreshSeasonXP': function() {
                console['log']('[BETTING-UI]\x20🔄\x20Refreshing\x20season\x20XP...');
                var t0 = [function() {
                    if (window['app'] && window['app']['$children'])
                        for (var t3 = 0x0; t3 < window['app']['$children']['length']; t3++) {
                            var t4 = window['app']['$children'][t3];
                            if (t4['account'] && t4['account']['season_xp'] !== undefined)
                                return t4['account']['season_xp'];
                        }
                    return null;
                }
                , function() {
                    return window['app'] && window['app']['account'] ? window['app']['account']['season_xp'] : null;
                }
                , function() {
                    if (!window['app'] || !window['app']['$children'])
                        return null;
                    var t3 = function(t4) {
                        for (var t5 = 0x0; t5 < t4['length']; t5++) {
                            if (t4[t5]['account'] && t4[t5]['account']['season_xp'] !== undefined)
                                return t4[t5]['account']['season_xp'];
                            if (t4[t5]['$children'] && t4[t5]['$children']['length'] > 0x0) {
                                var t6 = t3(t4[t5]['$children']);
                                if (t6 !== null)
                                    return t6;
                            }
                        }
                        return null;
                    };
                    return t3(window['app']['$children']);
                }
                ];
                for (var t1 = 0x0; t1 < t0['length']; t1++) {
                    try {
                        var t2 = t0[t1]();
                        if (t2 !== null && t2 !== undefined && t2 > 0x0) {
                            this['maxSeasonXP'] = t2,
                            console['log']('[BETTING-UI]\x20✅\x20Found\x20season\x20XP\x20from\x20source', t1 + 0x1, ':', t2);
                            return;
                        }
                    } catch (t3) {
                        console['warn']('[BETTING-UI]\x20⚠️\x20Source', t1 + 0x1, 'failed:', t3['message']);
                    }
                }
                console['warn']('[BETTING-UI]\x20⚠️\x20Could\x20not\x20find\x20season\x20XP\x20from\x20any\x20source\x20-\x20using\x20current\x20value:', this['maxSeasonXP']);
            }
        },
        'created': function() {
            console['log']('[BETTING-UI]\x20🎰\x20Component\x20created\x20-\x20registering\x20event\x20listeners');
            var t0 = this;
            t0['_bettingData'] = null,
            console['log']('[BETTING-UI]\x20🎧\x20Registering\x20betting-state\x20event\x20listener...'),
            Lz['events']['$on']('betting-state', function(t1) {
                console['log']('[BETTING-UI]\x20🔔🔔🔔\x20betting-state\x20event\x20received!', t1),
                console['log']('[BETTING-UI]\x20Event\x20data\x20type:', typeof t1),
                console['log']('[BETTING-UI]\x20Event\x20data:', JSON['stringify'](t1)),
                t1['seasonXP'] !== undefined && t1['seasonXP'] !== null && (t0['maxSeasonXP'] = t1['seasonXP'],
                console['log']('[BETTING-UI]\x20💰\x20Season\x20XP\x20set\x20from\x20server:', t0['maxSeasonXP'])),
                t0['_bettingData'] = t1,
                window['__bettingActive'] = t1 && t1['finalists'] && t1['finalists']['length'] === 0x2,
                Lz['_bettingData'] = t1,
                console['log']('[BETTING-UI]\x20🎰\x20Betting\x20active\x20flag\x20set:', window['__bettingActive']),
                setTimeout(function() {
                    console['log']('[BETTING-UI]\x20📂\x20Opening\x20betting\x20sidebar\x20for\x20all\x20spectators\x20(0.5s\x20delay)'),
                    console['log']('[BETTING-UI]\x20Calling\x20showBettingSidebar\x20with\x20data:', t1),
                    t0['showBettingSidebar'](t1);
                }, 0x1f4);
            }),
            Lz['events']['$on']('betting-xp-update', function(t1) {
                console['log']('[BETTING-UI]\x20💰\x20XP\x20update\x20received:', t1),
                t0['maxSeasonXP'] = t1,
                t0['updateBetAmounts'](),
                t0['$forceUpdate']();
            }),
            console['log']('[BETTING-UI]\x20✅\x20Event\x20listener\x20registered!'),
            Lz['events']['$on']('cells-changed', function(t1) {
                console['log']('[TOURNAMENT]\x20🔄\x20Cells\x20changed:', t1, 'Tournament\x20active:', window['__tournamentActive'], 'Betting\x20active:', window['__bettingActive']);
                if (t1 === 0x0 && window['__tournamentActive'] === !![])
                    console['log']('[TOURNAMENT]\x20💀\x20Player\x20eliminated\x20(0\x20cells)\x20during\x20TOURNAMENT'),
                    !h3['spectating'] && h3['actions'] && h3['actions']['spectate'] && (console['log']('[TOURNAMENT]\x20👻\x20Auto-triggering\x20spectate\x20mode\x20in\x200.3s'),
                    setTimeout(function() {
                        h3['actions']['spectate'](),
                        console['log']('[TOURNAMENT]\x20✅\x20Spectate\x20mode\x20activated');
                    }, 0xc8)),
                    window['__bettingActive'] === !![] && t0['_bettingData'] && setTimeout(function() {
                        !t0['visible'] && (console['log']('[BETTING-UI]\x20📂\x20Showing\x20betting\x20sidebar\x20to\x20spectator'),
                        t0['showBettingSidebar'](t0['_bettingData']));
                    }, 0x1f4);
                else
                    t1 === 0x0 && console['log']('[DEATH]\x20ℹ️\x20Player\x20died\x20-\x20normal\x20game\x20(no\x20tournament)');
            }),
            Lz['events']['$on']('tournament-timer', function(t1) {
                t0['updateCountdownFromTimer'](t1);
                if (t1['state'] === 'betting')
                    window['__bettingActive'] = !![];
                else
                    window['__bettingActive'] && (console['log']('[BETTING-UI]\x20🎰\x20Betting\x20phase\x20ended\x20-\x20clearing\x20flags'),
                    window['__bettingActive'] = ![],
                    Lz['_bettingData'] = null,
                    t0['_bettingData'] = null);
                t1['state'] !== 'betting' && t0['visible'] && (console['log']('[BETTING-UI]\x20Timer\x20state\x20changed\x20to', t1['state'], '-\x20hiding\x20sidebar'),
                t0['hideBettingSidebar']());
            }),
            Lz['events']['$on']('game-stopped', function() {
                console['log']('[TOURNAMENT]\x20🛑\x20Game\x20stopped\x20-\x20cleaning\x20up\x20all\x20flags'),
                window['__tournamentActive'] = ![],
                window['__bettingActive'] = ![],
                Lz['_bettingData'] = null,
                t0['hideBettingSidebar'](),
                t0['_bettingData'] = null;
            }),
            Lz['events']['$on']('disconnect', function() {
                console['log']('[BETTING-UI]\x20🔌\x20Disconnected\x20-\x20cleaning\x20up'),
                window['__tournamentActive'] = ![],
                window['__bettingActive'] = ![],
                t0['hideBettingSidebar']();
            }),
            Lz['events']['$on']('betting-votes', function(t1) {
                console['log']('[BETTING-UI]\x20📊\x20Vote\x20counts\x20received:', t1);
                for (var t2 in t1) {
                    t0['$set'] ? (t0['$set'](t0['voteCounts'], t2, t1[t2]['votes']),
                    t0['$set'](t0['totalBets'], t2, t1[t2]['total'])) : (t0['voteCounts'][t2] = t1[t2]['votes'],
                    t0['totalBets'][t2] = t1[t2]['total']);
                }
                t0['$forceUpdate']();
            }),
            Lz['events']['$on']('account-loaded', function(t1) {
                t0['maxSeasonXP'] = t1['season_xp'] || 0x0,
                console['log']('[BETTING-UI]\x20User\x20season\x20XP:', t0['maxSeasonXP']);
            });
        },
        'mounted': function() {
            console['log']('[BETTING-UI]\x20🎰\x20Component\x20mounted\x20-\x20injecting\x20styles'),
            console['log']('[BETTING-UI]\x20🔍\x20Searching\x20for\x20season\x20XP\x20data...'),
            console['log']('[BETTING-UI]\x20window.app\x20exists:', !!window['app']);
            var t0 = ![];
            if (window['app'] && window['app']['$children']) {
                console['log']('[BETTING-UI]\x20🔍\x20Checking\x20app\x20children\x20count:', window['app']['$children']['length']);
                for (var t1 = 0x0; t1 < window['app']['$children']['length']; t1++) {
                    var t2 = window['app']['$children'][t1];
                    console['log']('[BETTING-UI]\x20Child', t1, ':', t2['$options'] ? t2['$options']['_componentTag'] : 'unknown');
                    if (t2['account'] && t2['account']['season_xp'] !== undefined) {
                        this['maxSeasonXP'] = t2['account']['season_xp'],
                        console['log']('[BETTING-UI]\x20💰\x20Found\x20season\x20XP\x20in\x20child\x20component:', this['maxSeasonXP']),
                        t0 = !![];
                        break;
                    }
                }
            }
            !t0 && window['app'] && (window['app']['account'] && window['app']['account']['season_xp'] !== undefined && (this['maxSeasonXP'] = window['app']['account']['season_xp'],
            console['log']('[BETTING-UI]\x20💰\x20Found\x20season\x20XP\x20in\x20window.app.account:', this['maxSeasonXP']),
            t0 = !![]));
            !t0 && console['warn']('[BETTING-UI]\x20⚠️\x20Could\x20not\x20find\x20season\x20XP\x20data\x20on\x20mount\x20-\x20waiting\x20for\x20account-loaded\x20event');
            window['__bettingDebug'] = !![],
            this['injectBettingStyles'](),
            this['$forceUpdate'](),
            console['log']('[BETTING-UI]\x20Initial\x20state\x20-\x20visible:', this['visible'], 'finalists:', this['finalists'], 'seasonXP:', this['maxSeasonXP']),
            window['__testBettingSidebar'] = this,
            console['log']('[BETTING-UI]\x20🧪\x20Debug:\x20window.__testBettingSidebar\x20available'),
            console['log']('[BETTING-UI]\x20🧪\x20Test:\x20window.__testBettingSidebar.showBettingSidebar({\x20finalists:\x20[{pid:1,\x20name:\x22Test1\x22},\x20{pid:2,\x20name:\x22Test2\x22}]\x20})');
            var t3 = this;
            this['$nextTick'](function() {
                console['log']('[BETTING-UI]\x20🔧\x20Setting\x20up\x20native\x20click\x20handlers'),
                setTimeout(function() {
                    var t4 = document['querySelector']('.betting-sidebar');
                    t4 ? (console['log']('[BETTING-UI]\x20✅\x20Found\x20betting-sidebar\x20element'),
                    t4['addEventListener']('click', function(t5) {
                        console['log']('[BETTING-UI]\x20🖱️\x20Native\x20click\x20detected\x20on\x20sidebar!', t5['target']),
                        console['log']('[BETTING-UI]\x20Target\x20classes:', t5['target']['className']);
                        var t6 = t5['target']['closest']('.finalist-card');
                        if (t6) {
                            console['log']('[BETTING-UI]\x20🎯\x20Click\x20on\x20finalist\x20card!');
                            var t7 = document['querySelectorAll']('.finalist-card');
                            for (var t8 = 0x0; t8 < t7['length']; t8++) {
                                if (t7[t8] === t6 && t8 < t3['finalists']['length']) {
                                    console['log']('[BETTING-UI]\x20📌\x20Finalist\x20index:', t8, 'PID:', t3['finalists'][t8]['pid']),
                                    t3['selectFinalist'](t3['finalists'][t8]['pid']);
                                    break;
                                }
                            }
                        }
                        var t9 = t5['target']['closest']('.bet-button');
                        if (t9 && !t9['classList']['contains']('confirm-bet-button')) {
                            console['log']('[BETTING-UI]\x20🎯\x20Click\x20on\x20bet\x20amount\x20button!');
                            var th = t9['textContent']['trim']();
                            console['log']('[BETTING-UI]\x20Button\x20text:', th);
                            var tT = document['querySelectorAll']('.bet-button:not(.confirm-bet-button)');
                            for (var t8 = 0x0; t8 < tT['length']; t8++) {
                                if (tT[t8] === t9 && t8 < t3['betAmounts']['length']) {
                                    console['log']('[BETTING-UI]\x20📌\x20Amount:', t3['betAmounts'][t8]),
                                    t3['selectAmount'](t3['betAmounts'][t8]);
                                    break;
                                }
                            }
                        }
                        t5['target']['closest']('.confirm-bet-button') && (console['log']('[BETTING-UI]\x20🎯\x20Click\x20on\x20PLACE\x20BET\x20button!'),
                        t3['confirmBet']());
                    }, !![]),
                    console['log']('[BETTING-UI]\x20✅\x20Native\x20click\x20handlers\x20attached')) : console['error']('[BETTING-UI]\x20❌\x20Could\x20not\x20find\x20.betting-sidebar\x20element!');
                }, 0x64);
            });
        },
        'beforeDestroy': function() {
            console['log']('[BETTING-UI]\x20🎰\x20Component\x20destroying'),
            Lz['events']['$off']('betting-state'),
            Lz['events']['$off']('betting-xp-update'),
            Lz['events']['$off']('betting-votes'),
            Lz['events']['$off']('cells-changed'),
            Lz['events']['$off']('tournament-timer'),
            Lz['events']['$off']('game-stopped'),
            Lz['events']['$off']('disconnect'),
            Lz['events']['$off']('account-loaded'),
            this['countdownInterval'] && (clearInterval(this['countdownInterval']),
            this['countdownInterval'] = null);
        }
    }
      , LH = Object(hi['a'])(Lx, Lp, [], ![], null, 'betting-sidebar', null);
    LH['options']['__file'] = 'src/components/betting-sidebar.vue';
    var LM = LH['exports']
      , Tw = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['visible'],
                'expression': 'visible'
            }],
            'staticClass': 'stats'
        }, [t1('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showFPS'],
                'expression': 'showFPS'
            }]
        }, [this['_v']('FPS:\x20' + this['_s'](this['fps'] || '-'))]), this['_v']('\x20'), t1('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showPing'],
                'expression': 'showPing'
            }]
        }, [this['_v']('Ping:\x20' + this['_s'](this['ping'] || '-'))]), this['_v']('\x20'), t1('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showPlayerMass'] && this['mass'],
                'expression': 'showPlayerMass\x20&&\x20mass'
            }]
        }, [this['_v']('Mass:\x20' + this['_s'](this['mass']))]), this['_v']('\x20'), t1('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showPlayerScore'] && this['score'],
                'expression': 'showPlayerScore\x20&&\x20score'
            }]
        }, [this['_v']('Score:\x20' + this['_s'](this['score']))]), this['_v']('\x20'), t1('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['showCellCount'] && this['cells'],
                'expression': 'showCellCount\x20&&\x20cells'
            }]
        }, [this['_v']('Cells:\x20' + this['_s'](this['cells']))])]);
    };
    Tw['_withStripped'] = !![];
    var TG = h2(0x1)
      , TJ = h2(0x4)
      , Tk = {
        'data': () => ({
            'showFPS': TJ['showFPS'],
            'showPing': TJ['showPing'],
            'showPlayerMass': TJ['showPlayerMass'],
            'showPlayerScore': TJ['showPlayerScore'],
            'showCellCount': TJ['showCellCount'],
            'visible': ![],
            'ping': 0x0,
            'fps': 0x0,
            'mass': 0x0,
            'score': 0x0,
            'cells': 0x0
        }),
        'created'() {
            TG['events']['$on']('stats-visible', t0 => this['visible'] = t0),
            TG['events']['$on']('stats-invalidate-shown', () => {
                this['showFPS'] = TJ['showFPS'],
                this['showPing'] = TJ['showPing'],
                this['showPlayerMass'] = TJ['showPlayerMass'],
                this['showPlayerScore'] = TJ['showPlayerScore'],
                this['showCellCount'] = TJ['showCellCount'];
            }
            ),
            TG['events']['$on']('cells-changed', t0 => this['cells'] = t0),
            TG['events']['$on']('stats-changed', t0 => {
                this['ping'] = t0['ping'] || 0x0,
                this['fps'] = t0['fps'] || 0x0,
                t0['mass'] ? TG['settings']['shortMass'] ? this['mass'] = TG['getShortMass'](t0['mass']) : this['mass'] = t0['mass'] : this['mass'] = 0x0,
                t0['score'] ? TG['settings']['shortMass'] ? this['score'] = TG['getShortMass'](t0['score']) : this['score'] = t0['score'] : this['score'] = 0x0;
            }
            );
        }
    }
      , To = (h2(0xf4),
    Object(hi['a'])(Tk, Tw, [], ![], null, '0875ad82', null));
    To['options']['__file'] = 'src/components/stats.vue';
    var Tr = To['exports']
      , TF = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': t0['visible'],
                'expression': 'visible'
            }],
            'attrs': {
                'id': 'chatbox'
            }
        }, [t0['showBlockedMessageCount'] && t0['blockedMessageCount'] ? t2('div', {
            'staticStyle': {
                'position': 'absolute',
                'top': '-28px'
            }
        }, [t0['_v']('Blocked\x20messages:\x20' + t0['_s'](t0['blockedMessageCount']))]) : t0['_e'](), t0['_v']('\x20'), t2('div', {
            'ref': 'list',
            'attrs': {
                'id': 'message-list'
            },
            'on': {
                'click': function(t3) {
                    return t0['onChatClick'](t3);
                },
                'contextmenu': function(t3) {
                    return t0['onChatRightClick'](t3);
                }
            }
        }, t0['_l'](t0['messages'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'message-row'
            }, [t3['from'] ? [t3['badgeId'] ? t2('img', {
                'attrs': {
                    'src': t0['getBadgeUrl'](t3['badgeId']),
                    'height': '14',
                    'title': t0['getBadgeName'](t3['badgeId'])
                },
                'staticStyle': {
                    'vertical-align': 'middle',
                    'margin-right': '3px'
                }
            }) : t0['_e'](), t0['_v']('\x20'), t2('span', {
                'staticClass': 'message-from',
                'style': {
                    'color': t3['fromColor']
                },
                'attrs': {
                    'data-pid': t3['pid']
                }
            }, [t0['_v'](t0['_s'](t3['from']))]), t0['_v'](':\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')] : t0['_e'](), t0['_v']('\x20'), t2('span', {
                'staticClass': 'message-text',
                'style': {
                    'color': t3['textColor']
                }
            }, [t0['_v'](t0['_s'](t3['text']))])], 0x2);
        }), 0x0), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['inputText'],
                'expression': 'inputText'
            }],
            'ref': 'input',
            'attrs': {
                'id': 'chatbox-input',
                'type': 'text',
                'spellcheck': 'false',
                'autocomplete': 'off',
                'maxlength': '100',
                'tabindex': '-1',
                'placeholder': 'Type\x20your\x20message\x20here'
            },
            'domProps': {
                'value': t0['inputText']
            },
            'on': {
                'keydown': function(t3) {
                    return !t3['type']['indexOf']('key') && t0['_k'](t3['keyCode'], 'enter', 0xd, t3['key'], 'Enter') ? null : t0['sendChatMessage']();
                },
                'input': function(t3) {
                    t3['target']['composing'] || (t0['inputText'] = t3['target']['value']);
                }
            }
        })]);
    };
    TF['_withStripped'] = !![];
    var L0 = h2(0x1)
      , L3 = h2(0x4)
      , L1 = h2(0x5)
      , {replaceBadWordsChat: L2} = h2(0x12)
      , L4 = {}
      , TE = {
        'data': () => ({
            'visible': ![],
            'inputText': '',
            'messages': [],
            'showBlockedMessageCount': L3['showBlockedMessageCount'],
            'blockedMessageCount': 0x0
        }),
        'methods': {
            'getBadgeUrl'(t0) {
                if (!t0 || t0 === 0x0)
                    return '';
                const t1 = {
                    0x1: 'level_100.png',
                    0x2: 'level_200.png',
                    0x3: 'level_300.png',
                    0x4: 'slb_winner.png',
                    0x5: 'server_booster.png',
                    0x6: 'place_contributor_2022.png',
                    0x7: 'place_contributor_2023.png',
                    0x8: 'youtuber.png',
                    0x9: 'editor.png',
                    0xa: 'contributor.png',
                    0xb: 'ffa_winner.png',
                    0xc: 'instant_winner.png',
                    0xd: 'gigasplit_winner.png',
                    0xe: 'megasplit_winner.png',
                    0xf: 'crazy_winner.png',
                    0x10: 'self-feed_winner.png',
                    0x11: 'organizer.png',
                    0x12: 'referee.png',
                    0x13: 'skin_mod.png',
                    0x14: 'mod.png',
                    0x15: 'admin.png'
                };
                return t1[t0] ? 'https://aetlis.io/img/badge/' + t1[t0] : '';
            },
            'getBadgeName'(t0) {
                if (!t0 || t0 === 0x0)
                    return '';
                const t1 = {
                    0x1: 'Level\x20100',
                    0x2: 'Level\x20200',
                    0x3: 'Level\x20300',
                    0x4: 'Season\x20Top',
                    0x5: 'Server\x20Booster',
                    0x6: 'r/place\x202022',
                    0x7: 'r/place\x202023',
                    0x8: 'YouTuber',
                    0x9: 'Editor',
                    0xa: 'Contributor',
                    0xb: 'FFA\x20Winner',
                    0xc: 'Instant\x20Winner',
                    0xd: 'Gigasplit\x20Winner',
                    0xe: 'Megasplit\x20Winner',
                    0xf: 'Crazy\x20Winner',
                    0x10: 'Self-feed\x20Winner',
                    0x11: 'Organizer',
                    0x12: 'Referee',
                    0x13: 'Skin\x20Moderator',
                    0x14: 'Moderator',
                    0x15: 'Administrator'
                };
                return t1[t0] || 'Badge';
            },
            'onChatClick'(t0) {
                var t1 = t0['target']['dataset']['pid'];
                t1 && (L0['selectedPlayer'] = t1,
                L0['actions']['spectate'](t1));
            },
            'onChatRightClick'(t0) {
                var t1 = t0['target']['dataset']['pid'];
                if (t1) {
                    var t2 = L0['playerManager']['players'][t1];
                    t2 ? L4[t1] ? this['confirmUnblockPlayer'](t2) : this['confirmBlockPlayer'](t2) : L1['alert']('Player\x20does\x20not\x20exist\x20or\x20disconnected');
                }
            },
            'confirmBlockPlayer'(t0) {
                var t1 = t0['name']
                  , t2 = t0['pid']
                  , t3 = 'Block\x20player\x20\x22' + t1 + '\x22\x20until\x20restart?';
                L1['confirm'](t3, () => {
                    t0['isMe'] ? L1['alert']('You\x20can\x20not\x20block\x20yourself') : (L4[t2] = t1,
                    L0['addServerMessage']('Blocked\x20player\x20\x22' + t1 + '\x22'));
                }
                );
            },
            'confirmUnblockPlayer'(t0) {
                var t1 = t0['name']
                  , t2 = t0['pid']
                  , t3 = 'Unblock\x20player\x20\x22' + t1 + '\x22';
                L1['confirm'](t3, () => {
                    delete L4[t2],
                    L0['addServerMessage']('Unblocked\x20player\x20\x22' + t1 + '\x22');
                }
                );
            },
            'sendChatMessage'() {
                var t0 = this['inputText']['trim']();
                t0 && (L0['selectedPlayer'] && (t0 = t0['replace'](/\$pid/g, L0['selectedPlayer'])),
                L0['sendChatMessage'](t0),
                this['inputText'] = ''),
                L0['renderer']['view']['focus'](),
                this['scrollBottom']();
            },
            'onChatMessage'(t0) {
                if (L4[t0['pid']])
                    this['blockedMessageCount']++;
                else {
                    L3['filterChatMessages'] && (t0['text'] = L2(t0['text'])),
                    (t0['fromColor'] = t0['fromColor'] || '#ffffff',
                    t0['textColor'] = t0['textColor'] || '#ffffff',
                    this['messages']['push'](t0),
                    this['messages']['length'] > 0x64 && this['messages']['shift']());
                    var t1 = this['$refs']['list'];
                    t1['scrollHeight'] - t1['clientHeight'] - t1['scrollTop'] <= 0x1e && this['$nextTick'](this['scrollBottom']);
                }
            },
            'onVisibilityChange'(t0) {
                this['visible'] = t0,
                t0 && this['$nextTick'](this['scrollBottom']);
            },
            'focusChat'() {
                this['visible'] && this['$refs']['input']['focus']();
            },
            'clearChat'() {
                this['messages'] = [];
            },
            'scrollBottom'() {
                var t0 = this['$refs']['list'];
                t0['scrollTop'] = t0['scrollHeight'];
            }
        },
        'created'() {
            L0['events']['$on']('chat-visible', this['onVisibilityChange']),
            L0['events']['$on']('chat-focus', this['focusChat']),
            L0['events']['$on']('chat-message', this['onChatMessage']),
            L0['events']['$on']('chat-clear', this['clearChat']),
            L0['events']['$on']('show-blocked-message-count', t0 => this['showBlockedMessageCount'] = t0),
            L0['events']['$on']('game-stopped', () => {
                this['blockedMessageCount'] = 0x0,
                L4 = {};
            }
            );
        }
    }
      , Ly = (h2(0xf6),
    Object(hi['a'])(TE, TF, [], ![], null, '4900a413', null));
    Ly['options']['__file'] = 'src/components/chatbox.vue';
    var Lc = Ly['exports']
      , Ld = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': t0['userVisible'] && t0['visible'],
                'expression': 'userVisible\x20&&\x20visible'
            }],
            'attrs': {
                'id': 'leaderboard'
            }
        }, [t2('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': t0['headerVisible'],
                'expression': 'headerVisible'
            }],
            'staticClass': 'leaderboard-title'
        }, [t0['_v'](t0['_s'](t0['headerText']))]), t0['_v']('\x20'), t2('div', t0['_l'](t0['leaderboard'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'leaderboard-label'
            }, ['position'in t3 ? t2('span', [t0['_v'](t0['_s'](t3['position']) + '.')]) : t0['_e'](), t0['_v']('\x20'), t3['badgeId'] ? t2('img', {
                'attrs': {
                    'src': t0['getBadgeUrl'](t3['badgeId']),
                    'height': '16',
                    'title': t0['getBadgeName'](t3['badgeId'])
                },
                'staticStyle': {
                    'vertical-align': 'middle',
                    'margin-right': '3px'
                }
            }) : t0['_e'](), t0['_v']('\x20'), t2('span', {
                'class': {
                    'spectating': !t0['gameState']['isAlive']
                },
                'style': {
                    'color': t3['color'],
                    'fontWeight': t3['bold'] ? 'bold' : 'normal'
                },
                'attrs': {
                    'data-pid': t3['pid']
                },
                'on': {
                    'click': function(t5) {
                        return t0['leftClickLabel'](t5);
                    }
                }
            }, [t0['_v'](t0['_s'](t3['text']))])]);
        }), 0x0)]);
    };
    Ld['_withStripped'] = !![];
    var LU = h2(0x1)
      , LS = h2(0x4)
      , Lm = {
        'data': () => ({
            'userVisible': LS['showLeaderboard'],
            'visible': ![],
            'headerVisible': !![],
            'headerText': 'Leaderboard',
            'leaderboard': [],
            'gameState': LU['state']
        }),
        'methods': {
            'getBadgeUrl'(t0) {
                if (!t0 || t0 === 0x0)
                    return '';
                const t1 = {
                    0x1: 'level_100.png',
                    0x2: 'level_200.png',
                    0x3: 'level_300.png',
                    0x4: 'slb_winner.png',
                    0x5: 'server_booster.png',
                    0x6: 'place_contributor_2022.png',
                    0x7: 'place_contributor_2023.png',
                    0x8: 'youtuber.png',
                    0x9: 'editor.png',
                    0xa: 'contributor.png',
                    0xb: 'ffa_winner.png',
                    0xc: 'instant_winner.png',
                    0xd: 'gigasplit_winner.png',
                    0xe: 'megasplit_winner.png',
                    0xf: 'crazy_winner.png',
                    0x10: 'self-feed_winner.png',
                    0x11: 'organizer.png',
                    0x12: 'referee.png',
                    0x13: 'skin_mod.png',
                    0x14: 'mod.png',
                    0x15: 'admin.png'
                };
                return t1[t0] ? 'https://aetlis.io/img/badge/' + t1[t0] : '';
            },
            'getBadgeName'(t0) {
                if (!t0 || t0 === 0x0)
                    return '';
                const t1 = {
                    0x1: 'Level\x20100',
                    0x2: 'Level\x20200',
                    0x3: 'Level\x20300',
                    0x4: 'Season\x20Top',
                    0x5: 'Server\x20Booster',
                    0x6: 'r/place\x202022',
                    0x7: 'r/place\x202023',
                    0x8: 'YouTuber',
                    0x9: 'Editor',
                    0xa: 'Contributor',
                    0xb: 'FFA\x20Winner',
                    0xc: 'Instant\x20Winner',
                    0xd: 'Gigasplit\x20Winner',
                    0xe: 'Megasplit\x20Winner',
                    0xf: 'Crazy\x20Winner',
                    0x10: 'Self-feed\x20Winner',
                    0x11: 'Organizer',
                    0x12: 'Referee',
                    0x13: 'Skin\x20Moderator',
                    0x14: 'Moderator',
                    0x15: 'Administrator'
                };
                return t1[t0] || 'Badge';
            },
            'updateLeaderboard'(t0, t1) {
                if (this['leaderboard'] = t0,
                t1)
                    this['headerVisible'] = t1['visible'],
                    this['headerText'] = t1['text'];
                else {
                    if (LS['showServerName'] && this['gameState']['selectedServer']) {
                        this['headerVisible'] = !![];
                        var t2 = this['gameState']['selectedServer']['region'] || '';
                        t2 && (t2 += '\x20'),
                        this['headerText'] = t2 + this['gameState']['selectedServer']['name'];
                    } else
                        this['headerVisible'] = !![],
                        this['headerText'] = 'Leaderboard';
                }
            },
            'leftClickLabel'(t0) {
                (t0 = event['target']['dataset']['pid']) && (LU['selectedPlayer'] = t0,
                LU['actions']['spectate'](t0));
            },
            'onLeaderboardShow'() {
                this['visible'] || (LU['events']['$on']('leaderboard-update', this['updateLeaderboard']),
                this['visible'] = !![]);
            },
            'onLeaderboardHide'() {
                this['visible'] && (LU['events']['$off']('leaderboard-update', this['updateLeaderboard']),
                this['leaderboard'] = [],
                this['visible'] = ![],
                this['selectedServer'] = null);
            }
        },
        'created'() {
            LU['events']['$on']('server-select', (t0, t1, t2) => {
                this['selectedServerName'] = t0,
                this['selectedServerRegion'] = t1;
            }
            ),
            LU['events']['$on']('leaderboard-visible', t0 => this['userVisible'] = t0),
            LU['events']['$on']('leaderboard-show', this['onLeaderboardShow']),
            LU['events']['$on']('leaderboard-hide', this['onLeaderboardHide']);
        }
    }
      , Lb = (h2(0xf8),
    Object(hi['a'])(Lm, Ld, [], ![], null, '8a0c31c6', null));
    Lb['options']['__file'] = 'src/components/leaderboard.vue';
    var LA = Lb['exports']
      , LC = {
        'components': {
            'tournamentBanner': Li,
            'bettingSidebar': LM,
            'stats': Tr,
            'chatbox': Lc,
            'minimap': h2(0x72)['default'],
            'leaderboard': LA,
            'cautions': Tv
        },
        'created': function() {
            console['log']('[HUD]\x20🎮\x20HUD\x20component\x20created');
            var t0 = h2(0x1);
            console['log']('[HUD]\x20🎧\x20Setting\x20up\x20betting-state\x20event\x20forwarding'),
            t0['events']['$on']('betting-state', function(t1) {
                console['log']('[HUD]\x20🔔\x20Received\x20betting-state,\x20forwarding\x20to\x20child\x20component'),
                console['log']('[HUD]\x20Data:', t1);
                var t2 = window['__testBettingSidebar'];
                t2 && t2['showBettingSidebar'] ? (console['log']('[HUD]\x20📤\x20Calling\x20showBettingSidebar\x20on\x20child'),
                setTimeout(function() {
                    t2['showBettingSidebar'](t1);
                }, 0x1f4)) : console['error']('[HUD]\x20❌\x20Betting\x20sidebar\x20component\x20not\x20found!');
            }),
            console['log']('[HUD]\x20✅\x20Event\x20forwarding\x20setup\x20complete');
        }
    }
      , LI = (h2(0xfc),
    Object(hi['a'])(LC, Ta, [], ![], null, '339660d2', null));
    LI['options']['__file'] = 'src/components/hud.vue';
    var LN = LI['exports']
      , LY = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('transition', {
            'attrs': {
                'name': 'menu'
            }
        }, [t2('div', {
            'staticClass': 'container'
        }, [t2('div', {
            'staticClass': 'fade-box\x20box-1'
        }, [t2('div', {
            'staticStyle': {
                'padding': '4px'
            }
        }, [t0['_v']('Baso\x20Network')]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'padding': '10px',
                'padding-top': '0px'
            }
        }, [t2('div', {
            'attrs': {
                'id': 'vanis-io_300x250_2'
            }
        })])]), t0['_v']('\x20'), t0['stats'] ? t2('div', {
            'staticClass': 'fade-box',
            'class': {
                'scroll': t0['isLoadingAd']
            }
        }, [t2('div', {
            'staticStyle': {
                'padding': '15px'
            }
        }, [t2('div', [t0['_v']('Time\x20Alive:\x20' + t0['_s'](t0['timeAlive']))]), t0['_v']('\x20'), t2('div', [t0['_v']('Highscore:\x20' + t0['_s'](t0['highscore']))]), t0['_v']('\x20'), t2('div', [t0['_v']('Players\x20Eaten:\x20' + t0['_s'](t0['stats']['killCount']))]), t0['_v']('\x20'), t2('btn', {
            'staticClass': 'continue',
            'nativeOn': {
                'click': function(t3) {
                    return t0['onContinueClick'](t3);
                }
            }
        }, [t0['_v']('Continue')])], 0x1)]) : t0['_e']()])]);
    };
    LY['_withStripped'] = !![];
    var Lg = h2(0x1)
      , LK = h2(0x4c)
      , LO = {
        'props': ['stats'],
        'data': () => ({
            'isLoadingAd': ![]
        }),
        'methods': {
            'loadAd': function() {
                this['isLoadingAd'] = LK['refreshAd']('death-box');
            },
            'onContinueClick': function() {
                Lg['state']['deathScreen'] = ![],
                Lg['showDeathScreen'](![]),
                Lg['showMenu'](!![]);
            }
        },
        'watch': {
            'stats': function() {
                this['loadAd']();
            }
        },
        'computed': {
            'timeAlive': function() {
                var t0 = this['stats']['timeAlive'];
                return t0 < 0x3c ? t0 + 's' : Math['floor'](t0 / 0x3c) + 'min\x20' + t0 % 0x3c + 's';
            },
            'highscore': function() {
                var t0 = this['stats']['highscore'];
                return Lg['getShortMass'](t0);
            }
        }
    }
      , Lf = (h2(0xfe),
    Object(hi['a'])(LO, LY, [], ![], null, '3249d726', null));
    Lf['options']['__file'] = 'src/components/death-stats.vue';
    var Ll = Lf['exports']
      , Lu = function() {
        var t0 = this['$createElement'];
        return (this['_self']['_c'] || t0)('button', {
            'staticClass': 'btn'
        }, [this['_t']('default', [this['_v']('Here\x20should\x20be\x20something')])], 0x2);
    };
    Lu['_withStripped'] = !![];
    var LD = {}
      , Li = (h2(0x100),
    Object(hi['a'])(LD, Lu, [], ![], null, 'b0b10308', null));
    Li['options']['__file'] = 'src/components/btn.vue';
    var LV = Li['exports']
      , LP = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t0['show'] ? t2('div', {
            'class': {
                'auto-hide': t0['autoHideReplayControls']
            },
            'attrs': {
                'id': 'replay-controls'
            }
        }, [t2('div', {
            'staticStyle': {
                'text-align': 'right'
            }
        }, [t2('div', [t0['_v']('Opacity\x20' + t0['_s'](t0['cellOpacity']) + '%')]), t0['_v']('\x20'), t2('div', [t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['cellOpacity'],
                'expression': 'cellOpacity'
            }],
            'staticClass': 'replay-slider',
            'staticStyle': {
                'width': '105px',
                'display': 'inline-block'
            },
            'attrs': {
                'id': 'replay-opacity-slider',
                'type': 'range',
                'min': '10',
                'max': '100'
            },
            'domProps': {
                'value': t0['cellOpacity']
            },
            'on': {
                'input': t0['onCellOpacitySlide'],
                '__r': function(t3) {
                    t0['cellOpacity'] = t3['target']['value'];
                }
            }
        })])]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'margin-bottom': '5px',
                'display': 'flex'
            }
        }, [t2('div', {
            'staticStyle': {
                'flex': '1'
            }
        }, [t0['_v'](t0['_s'](t0['replaySecond']['toFixed'](0x1)) + '\x20seconds')]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'margin-right': '10px'
            }
        }, [t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['autoHideReplayControls'],
                'expression': 'autoHideReplayControls'
            }],
            'attrs': {
                'type': 'checkbox',
                'id': 'replay-auto-hide-controls'
            },
            'domProps': {
                'checked': Array['isArray'](t0['autoHideReplayControls']) ? t0['_i'](t0['autoHideReplayControls'], null) > -0x1 : t0['autoHideReplayControls']
            },
            'on': {
                'change': [function(t3) {
                    var t4 = t0['autoHideReplayControls']
                      , t5 = t3['target']
                      , t6 = !!t5['checked'];
                    if (Array['isArray'](t4)) {
                        var t7 = t0['_i'](t4, null);
                        t5['checked'] ? t7 < 0x0 && (t0['autoHideReplayControls'] = t4['concat']([null])) : t7 > -0x1 && (t0['autoHideReplayControls'] = t4['slice'](0x0, t7)['concat'](t4['slice'](t7 + 0x1)));
                    } else
                        t0['autoHideReplayControls'] = t6;
                }
                , t0['saveAutoHideControls']]
            }
        }), t0['_v']('\x20'), t2('label', {
            'attrs': {
                'for': 'replay-auto-hide-controls'
            }
        }, [t0['_v']('Auto\x20Hide\x20Controls')])])]), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['rangeIndex'],
                'expression': 'rangeIndex'
            }],
            'staticClass': 'replay-slider',
            'attrs': {
                'type': 'range',
                'min': t0['rangeMin'],
                'max': t0['rangeMax']
            },
            'domProps': {
                'value': t0['rangeIndex']
            },
            'on': {
                'input': t0['onSlide'],
                'change': t0['onSlideEnd'],
                '__r': function(t3) {
                    t0['rangeIndex'] = t3['target']['value'];
                }
            }
        })]) : t0['_e']();
    };
    LP['_withStripped'] = !![];
    var LR = h2(0x1)
      , LH = {
        'data': () => ({
            'show': ![],
            'autoHideReplayControls': LR['settings']['autoHideReplayControls'],
            'drawDelay': LR['settings']['drawDelay'],
            'cellOpacity': 0x64,
            'rangeMin': 0x0,
            'rangeIndex': 0x0,
            'rangeMax': 0x3e8,
            'replaySecond': 0x0,
            'packetCount': 0x0
        }),
        'created': function() {
            LR['events']['$on']('show-replay-controls', this['onShow']),
            LR['events']['$on']('replay-index-change', this['onReplayIndexChange']);
        },
        'methods': {
            'onShow'(t0) {
                t0 ? (this['show'] = !![],
                this['packetCount'] = t0 - 0x1) : (this['show'] = ![],
                this['cellOpacity'] = 0x64,
                this['rangeIndex'] = 0x0,
                this['packetCount'] = 0x0);
            },
            'onReplayIndexChange'(t0) {
                var t1 = t0 / this['packetCount'];
                this['rangeIndex'] = Math['floor'](t1 * this['rangeMax']),
                this['replaySecond'] = t0 / 0x19;
            },
            'onSlide'(t0) {
                LR['moveInterval'] && (clearInterval(LR['moveInterval']),
                LR['moveInterval'] = null),
                this['replaySecond'] = LR['replayMoveTo'](this['rangeIndex'] / this['rangeMax']) / 0x19;
            },
            'onSlideEnd'(t0) {
                !LR['moveInterval'] && (LR['moveInterval'] = setInterval(LR['replayUpdate'], 0x28));
            },
            'onCellOpacitySlide'() {
                LR['scene']['foreground']['alpha'] = this['cellOpacity'] / 0x64;
            },
            'saveAutoHideControls'() {
                LR['settings']['set']('autoHideReplayControls', this['autoHideReplayControls']);
            }
        }
    }
      , Lq = (h2(0x102),
    Object(hi['a'])(LH, LP, [], ![], null, 'c2c2ac08', null));
    Lq['options']['__file'] = 'src/components/replay-controls.vue';
    var Ls = Lq['exports']
      , Lp = function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return this['show'] ? t1('div', {
            'attrs': {
                'id': 'ab-overlay'
            }
        }, [this['_m'](0x0)]) : this['_e']();
    };
    Lp['_withStripped'] = !![];
    var Lz = h2(0xf)
      , {isFirstVisit: Lj} = h2(0x12)
      , LQ = {
        'data': () => ({
            'show': ![]
        }),
        'created'() {
            Lj ? console['log']('Welcome\x20to\x20aetlis.io!') : Lz['get']('/ads.css')['then'](t0 => {}
            )['catch'](t0 => {
                !t0['response'] && (this['show'] = !![]);
            }
            );
        }
    }
      , La = (h2(0x104),
    Object(hi['a'])(LQ, Lp, [function() {
        var t0 = this['$createElement']
          , t1 = this['_self']['_c'] || t0;
        return t1('div', {
            'staticClass': 'content'
        }, [t1('img', {
            'staticStyle': {
                'width': '120px'
            },
            'attrs': {
                'src': 'img/sad.png'
            }
        }), this['_v']('\x20'), t1('p', {
            'staticStyle': {
                'font-size': '3em'
            }
        }, [this['_v']('Adblock\x20Detected')]), this['_v']('\x20'), t1('p', {
            'staticStyle': {
                'font-size': '1.5em',
                'margin-bottom': '15px'
            }
        }, [this['_v']('We\x20use\x20advertisements\x20to\x20fund\x20our\x20servers!')]), this['_v']('\x20'), t1('img', {
            'staticStyle': {
                'border-radius': '4px',
                'box-shadow': '0\x200\x2010px\x20black'
            },
            'attrs': {
                'src': 'img/ab.gif'
            }
        })]);
    }
    ], ![], null, '1611deb4', null));
    La['options']['__file'] = 'src/components/ab-overlay.vue';
    var LW = La['exports']
      , Ln = function() {
        var t0 = this['$createElement'];
        return (this['_self']['_c'] || t0)('div', {
            'directives': [{
                'name': 'show',
                'rawName': 'v-show',
                'value': this['show'],
                'expression': 'show'
            }],
            'staticClass': 'image-captcha-overlay'
        }, [this['_m'](0x0)]);
    };
    Ln['_withStripped'] = !![];
    var LB = h2(0x1)
      , LG = h2(0x18)
      , Lw = {
        'data': () => ({
            'show': ![],
            'captchaImage': '',
            'challengeId': '',
            'userAnswer': '',
            'errorMessage': '',
            'wsId': null
        }),
        'created'() {
            LB['events']['$on']('show-custom-captcha', (t0, t1) => {
                if (window['__preferHcaptcha']) {
                    console['log']('[CAPTCHA]\x20Image\x20captcha\x20suppressed\x20in\x20favor\x20of\x20hCaptcha'),
                    this['show'] = ![];
                    return;
                }
                this['show'] = !![],
                this['wsId'] = LB['currentWsId'],
                this['challengeId'] = t0,
                this['captchaImage'] = t1,
                this['userAnswer'] = '',
                this['errorMessage'] = '',
                console['log']('[CAPTCHA]\x20Showing\x20captcha\x20challenge:', t0);
            }
            ),
            LB['events']['$on']('captcha-result', (t0, t1, t2) => {
                if (t0) {
                    console['log']('[CAPTCHA]\x20Captcha\x20passed!\x20Token:', t1),
                    this['show'] = ![];
                    var t3 = new LG();
                    typeof t3['uint16'] !== 'function' && typeof t3['uint8'] === 'function' && (t3['uint16'] = function(t4) {
                        return this['uint8'](t4 >> 0x8 & 0xff),
                        this['uint8'](t4 & 0xff),
                        this;
                    }
                    ),
                    t3['uint8'](0xfb),
                    t3['uint16'](t1['length']),
                    t3['utf8'](t1),
                    LB['send'](t3['write']());
                } else
                    console['log']('[CAPTCHA]\x20Captcha\x20failed:', t2),
                    this['errorMessage'] = this['getErrorMessage'](t2);
            }
            );
        },
        'methods': {
            'submitCaptcha'() {
                if (window['__preferHcaptcha']) {
                    this['errorMessage'] = '';
                    return;
                }
                if (!this['userAnswer'] || this['userAnswer']['trim']()['length'] === 0x0) {
                    this['errorMessage'] = 'Please\x20enter\x20the\x20text\x20from\x20the\x20image';
                    return;
                }
                console['log']('[CAPTCHA]\x20Submitting\x20answer:', this['userAnswer']);
                var t0 = new LG();
                typeof t0['uint16'] !== 'function' && typeof t0['uint8'] === 'function' && (t0['uint16'] = function(t1) {
                    return this['uint8'](t1 >> 0x8 & 0xff),
                    this['uint8'](t1 & 0xff),
                    this;
                }
                ),
                t0['uint8'](0xfa),
                t0['uint16'](this['challengeId']['length']),
                t0['utf8'](this['challengeId']),
                t0['uint16'](this['userAnswer']['length']),
                t0['utf8'](this['userAnswer']),
                LB['send'](t0['write']()),
                this['errorMessage'] = '';
            },
            'getErrorMessage'(t0) {
                switch (t0) {
                case 'INCORRECT_ANSWER':
                    return 'Incorrect\x20answer.\x20Please\x20try\x20again.';
                case 'CHALLENGE_EXPIRED':
                    return 'Challenge\x20expired.\x20Refreshing...';
                case 'MAX_ATTEMPTS_EXCEEDED':
                    return 'Too\x20many\x20attempts.\x20New\x20challenge\x20loading...';
                case 'CHALLENGE_NOT_FOUND':
                    return 'Challenge\x20not\x20found.\x20Please\x20refresh.';
                default:
                    return 'Error:\x20' + t0;
                }
            }
        }
    }
      , Lv = (h2(0x106),
    Object(hi['a'])(Lw, Ln, [function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'staticClass': 'center-screen',
            'staticStyle': {
                'z-index': '9999'
            }
        }, [t2('div', {
            'staticClass': 'captcha-container',
            'staticStyle': {
                'background': 'rgba(0,\x200,\x200,\x200.9)',
                'padding': '30px',
                'border-radius': '10px',
                'box-shadow': '0\x200\x2020px\x20rgba(0,0,0,0.5)'
            }
        }, [t2('div', {
            'staticStyle': {
                'color': '#FFF',
                'font-size': '24px',
                'font-weight': 'bold',
                'margin-bottom': '20px',
                'text-align': 'center'
            }
        }, [t0['_v']('Bot\x20Protection')]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'color': '#AAA',
                'margin-bottom': '15px',
                'text-align': 'center'
            }
        }, [t0['_v']('Enter\x20the\x20text\x20shown\x20in\x20the\x20image:')]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'margin-bottom': '20px',
                'text-align': 'center'
            }
        }, [t2('img', {
            'staticStyle': {
                'border': '2px\x20solid\x20#444',
                'border-radius': '5px',
                'display': 'block',
                'margin': '0\x20auto'
            },
            'attrs': {
                'src': t0['captchaImage'],
                'alt': 'Captcha'
            }
        })]), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'margin-bottom': '15px'
            }
        }, [t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['userAnswer'],
                'expression': 'userAnswer'
            }],
            'staticStyle': {
                'width': '100%',
                'padding': '12px',
                'font-size': '18px',
                'text-align': 'center',
                'border': '2px\x20solid\x20#444',
                'border-radius': '5px',
                'background': '#222',
                'color': '#FFF',
                'text-transform': 'uppercase'
            },
            'attrs': {
                'type': 'text',
                'placeholder': 'Enter\x20text\x20here',
                'maxlength': '10'
            },
            'domProps': {
                'value': t0['userAnswer']
            },
            'on': {
                'keyup': function(t3) {
                    return !t3['type']['indexOf']('key') && t0['_k'](t3['keyCode'], 'enter', 0xd, t3['key'], 'Enter') ? null : t0['submitCaptcha']();
                },
                'input': function(t3) {
                    t3['target']['composing'] || (t0['userAnswer'] = t3['target']['value']);
                }
            }
        })]), t0['_v']('\x20'), t0['errorMessage'] ? t2('div', {
            'staticStyle': {
                'color': '#ff6b6b',
                'margin-bottom': '15px',
                'text-align': 'center',
                'font-weight': 'bold'
            }
        }, [t0['_v'](t0['_s'](t0['errorMessage']))]) : t0['_e'](), t0['_v']('\x20'), t2('div', {
            'staticStyle': {
                'text-align': 'center'
            }
        }, [t2('button', {
            'staticStyle': {
                'padding': '12px\x2040px',
                'font-size': '18px',
                'font-weight': 'bold',
                'background': '#4ECDC4',
                'color': '#FFF',
                'border': 'none',
                'border-radius': '5px',
                'cursor': 'pointer',
                'transition': 'all\x200.3s'
            },
            'on': {
                'click': t0['submitCaptcha']
            }
        }, [t0['_v']('Submit')])])])]);
    }
    ], ![], null, '76d60428', null));
    Lv['options']['__file'] = 'src/components/image-captcha.vue';
    var LZ = Lv['exports']
      , LJ = function() {
        var t0 = this
          , t1 = t0['$createElement']
          , t2 = t0['_self']['_c'] || t1;
        return t2('div', {
            'attrs': {
                'id': 'dual-controls-container'
            }
        }, [t2('div', {
            'staticClass': 'dual-section'
        }, [t2('div', {
            'staticClass': 'dual-section-header'
        }, [t0['_v']('Dual\x20Settings')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'dual-section-content'
        }, [t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['rememberEjecting']
            },
            'on': {
                'change': function(t3) {
                    return t0['updateSetting']('rememberEjecting', t3);
                }
            }
        }, [t0['_v']('Remember\x20Ejecting')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['lockInactivePosition']
            },
            'on': {
                'change': function(t3) {
                    return t0['updateSetting']('lockInactivePosition', t3);
                }
            }
        }, [t0['_v']('Remember\x20Mouse\x20Position')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['cameraFollowBoth']
            },
            'on': {
                'change': function(t3) {
                    return t0['updateSetting']('cameraFollowBoth', t3);
                }
            }
        }, [t0['_v']('Multibox\x20Camera\x20Sync')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['hideOutlines']
            },
            'on': {
                'change': function(t3) {
                    return t0['updateSetting']('hideOutlines', t3);
                }
            }
        }, [t0['_v']('Hide\x20Outlines')]), t0['_v']('\x20'), t2('p-check', {
            'staticClass': 'p-switch',
            'attrs': {
                'checked': t0['minionControl']
            },
            'on': {
                'change': function(t3) {
                    return t0['updateSetting']('minionControl', t3);
                }
            }
        }, [t0['_v']('Minion\x20Controls')])])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'dual-section'
        }, [t2('div', {
            'staticClass': 'dual-section-header'
        }, [t0['_v']('Dual\x20Identity')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'dual-section-content'
        }, [t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['dualNickname'],
                'expression': 'dualNickname'
            }],
            'staticClass': 'input-text',
            'attrs': {
                'type': 'text',
                'placeholder': 'Dual\x20Nickname'
            },
            'domProps': {
                'value': t0['dualNickname']
            },
            'on': {
                'input': function(t3) {
                    if (t3['target']['composing'])
                        return;
                    t0['dualNickname'] = t3['target']['value'],
                    t0['saveDualIdentity']();
                }
            }
        }), t0['_v']('\x20'), t2('input', {
            'directives': [{
                'name': 'model',
                'rawName': 'v-model',
                'value': t0['dualSkinUrl'],
                'expression': 'dualSkinUrl'
            }],
            'staticClass': 'input-text\x20confidential',
            'attrs': {
                'type': 'text',
                'placeholder': 'Dual\x20Skin\x20URL'
            },
            'domProps': {
                'value': t0['dualSkinUrl']
            },
            'on': {
                'input': function(t3) {
                    if (t3['target']['composing'])
                        return;
                    t0['dualSkinUrl'] = t3['target']['value'],
                    t0['saveDualIdentity']();
                }
            }
        }), t2('div', {
            'staticClass': 'info-text'
        }, [t0['_v']('If\x20left\x20empty,\x20dual\x20player\x20will\x20use\x20same\x20nickname\x20and\x20skin.')])])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'dual-section'
        }, [t2('div', {
            'staticClass': 'dual-section-header'
        }, [t0['_v']('Minion\x20Keybindings')]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'dual-section-content\x20keybindings-content',
            'class': {
                'disabled': !t0['minionControl']
            }
        }, [t0['minionControl'] ? t0['_e']() : t2('div', {
            'staticClass': 'overlay-message'
        }, [t2('i', {
            'staticClass': 'fas\x20fa-lock'
        }), t2('span', [t0['_v']('Enable\x20Minion\x20Controls\x20to\x20customize\x20keys')])]), t0['_v']('\x20'), t2('div', {
            'staticClass': 'hotkeys'
        }, t0['_l'](t0['dualHotkeys'], function(t3, t4) {
            return t2('div', {
                'key': t4,
                'staticClass': 'row'
            }, [t2('span', {
                'staticClass': 'action'
            }, [t0['_v'](t0['_s'](t4))]), t0['_v']('\x20'), t2('span', {
                'staticClass': 'bind',
                'attrs': {
                    'tabindex': '0'
                },
                'on': {
                    'mousedown': function(t5) {
                        return t0['onMouseDown'](t5, t3);
                    },
                    'keydown': function(t5) {
                        return t5['preventDefault'](),
                        t0['onKeyDown'](t5, t3);
                    }
                }
            }, [t0['_v'](t0['_s'](t0['hotkeyDisplay'](t0['hotkeys'][t3])))])]);
        }), 0x0)])])]);
    };
    LJ['_withStripped'] = !![];
    var Lk = {
        'data': function() {
            return {
                'rememberEjecting': hc['rememberEjecting'],
                'lockInactivePosition': hc['lockInactivePosition'],
                'cameraFollowBoth': hc['cameraFollowBoth'],
                'minionControl': hc['minionControl'],
                'hideOutlines': hc['hideOutlines'],
                'dualNickname': localStorage['dualNickname'] || '',
                'dualSkinUrl': localStorage['dualSkinUrl'] || '',
                'hotkeys': hv['get'](),
                'dualHotkeys': {
                    'Minion\x20Split': 'minionSplit',
                    'Minion\x20Feed': 'minionFeed',
                    'Minion\x20Feed\x20Macro': 'minionFeedMacro',
                    'Minion\x20Respawn': 'minionRespawn',
                    'Minion\x20Doublesplit': 'minionDoublesplit',
                    'Minion\x20Triplesplit': 'minionTriplesplit',
                    'Minion\x20Quadsplit': 'minionQuadsplit',
                    'Minion\x20Split\x2032': 'minionSplit32',
                    'Minion\x20Split\x2064': 'minionSplit64',
                    'Minion\x20Split\x20128': 'minionSplit128',
                    'Minion\x20Split\x20256': 'minionSplit256',
                    'Minion\x20Diagonal\x20Linesplit': 'minionDiagonalLinesplit',
                    'Minion\x20Lock\x20Linesplit': 'minionLocklinesplit'
                }
            };
        },
        'methods': {
            'updateSetting': function(t0, t1) {
                this[t0] = t1;
                if (hc['hasOwnProperty'](t0)) {
                    hc['set'](t0, t1);
                    var t2 = h2(0x1);
                    if (t2['running']) {
                        if ('rememberEjecting' === t0) {
                            if ('function' == typeof t2['send']) {
                                var t3 = new ArrayBuffer(0x2)
                                  , t4 = new DataView(t3);
                                t4['setUint8'](0x0, 0x1a),
                                t4['setUint8'](0x1, t1 ? 0x1 : 0x0),
                                t2['send'](t3);
                            }
                        }
                        if ('minionControl' === t0) {
                            if (t1 && this['lockInactivePosition']) {
                                this['lockInactivePosition'] = ![],
                                hc['set']('lockInactivePosition', ![]);
                                if ('function' == typeof t2['send']) {
                                    var t5 = new ArrayBuffer(0x2)
                                      , t6 = new DataView(t5);
                                    t6['setUint8'](0x0, 0x1c),
                                    t6['setUint8'](0x1, 0x0),
                                    t2['send'](t5);
                                }
                            }
                            if ('function' == typeof t2['send']) {
                                var t7 = new ArrayBuffer(0x2)
                                  , t8 = new DataView(t7);
                                t8['setUint8'](0x0, 0x1b),
                                t8['setUint8'](0x1, t1 ? 0x1 : 0x0),
                                t2['send'](t7);
                            }
                        }
                        if ('lockInactivePosition' === t0) {
                            if (t1 && this['minionControl']) {
                                this['minionControl'] = ![],
                                hc['set']('minionControl', ![]);
                                if ('function' == typeof t2['send']) {
                                    var t9 = new ArrayBuffer(0x2)
                                      , th = new DataView(t9);
                                    th['setUint8'](0x0, 0x1b),
                                    th['setUint8'](0x1, 0x0),
                                    t2['send'](t9);
                                }
                            }
                            if ('function' == typeof t2['send']) {
                                var tT = new ArrayBuffer(0x2)
                                  , tL = new DataView(tT);
                                tL['setUint8'](0x0, 0x1c),
                                tL['setUint8'](0x1, t1 ? 0x1 : 0x0),
                                t2['send'](tT);
                            }
                        }
                        if ('hideOutlines' === t0) {
                            if (t2['playerManager'] && t2['playerManager']['players'])
                                for (var tX in t2['playerManager']['players']) {
                                    var tq = t2['playerManager']['players'][tX]
                                      , tj = tq['rawOutlineColor'] !== undefined ? tq['rawOutlineColor'] : tq['outlineColor'];
                                    tq && tj !== undefined && (tq['setOutline'](tj),
                                    tq['renderCell']());
                                }
                        }
                    }
                }
            },
            'saveDualIdentity': function() {
                var t0 = this['dualNickname'] || ''
                  , t1 = this['dualSkinUrl'] || '';
                console['log']('[DUAL-UI]\x20saveDualIdentity\x20called\x20-\x20nickname:', t0, 'skin:', t1),
                localStorage['dualNickname'] = t0,
                localStorage['dualSkinUrl'] = t1;
                var t2 = h2(0x1);
                console['log']('[DUAL-UI]\x20Game\x20object:', t2 ? 'found' : 'NOT\x20FOUND'),
                t2 && t2['dualIdentity'] ? (console['log']('[DUAL-UI]\x20Updating\x20game.dualIdentity'),
                t2['dualIdentity']['nickname'] = t0,
                t2['dualIdentity']['skin'] = t1) : console['warn']('[DUAL-UI]\x20game.dualIdentity\x20not\x20found!'),
                t2 && typeof t2['sendDualIdentity'] === 'function' ? (console['log']('[DUAL-UI]\x20Calling\x20game.sendDualIdentity()'),
                t2['sendDualIdentity']()) : console['warn']('[DUAL-UI]\x20game.sendDualIdentity()\x20not\x20found!');
            },
            'hotkeyDisplay': function(t0) {
                return t0 || '...';
            },
            'onMouseDown': function(t0, t1) {
                if (t0['target'] === document['activeElement']) {
                    var t2 = 'MOUSE' + t0['button'];
                    hv['set'](t1, t2) && (t0['preventDefault'](),
                    this['hotkeys'][t1] = t2,
                    t0['target']['blur']());
                }
            },
            'onKeyDown': function(t0, t1) {
                var t2 = hv['convertKey'](t0['code']);
                'ESCAPE' !== t2 && 'ENTER' !== t2 ? ('DELETE' === t2 && (t2 = ''),
                hv['set'](t1, t2) && (this['hotkeys'][t1] = t2,
                t0['target']['blur']())) : t0['target']['blur']();
            }
        }
    }
      , LE = Object(hi['a'])(Lk, LJ, [], ![], null, 'dual-controls', null);
    LE['options']['__file'] = 'src/components/dual-controls.vue';
    var Lo = LE['exports']
      , Lr = {
        'isInitialized': ![],
        'init': function() {
            if (this['isInitialized'])
                return;
            this['isInitialized'] = !![],
            this['createRefereePanel'](),
            this['createScoreboard'](),
            console['log']('[TOURNAMENT-UI]\x20🎮\x20Tournament\x20UI\x20initialized');
        },
        'createRefereePanel': function() {
            var t0 = document['createElement']('div');
            t0['id'] = 'referee-panel',
            t0['className'] = 'hidden',
            t0['innerHTML'] = '\x09\x09\x09\x09<div\x20class=\x22referee-group\x22>\x09\x09\x09\x09\x09<button\x20class=\x22referee-btn\x20start\x22\x20onclick=\x22TournamentUI.sendCommand(\x27unfreeze\x27)\x22><span>▶</span>\x20Start</button>\x09\x09\x09\x09\x09<button\x20class=\x22referee-btn\x20pause\x22\x20onclick=\x22TournamentUI.sendCommand(\x27pause\x27)\x22><span>⏸</span>\x20Pause</button>\x09\x09\x09\x09</div>\x09\x09\x09\x09<div\x20class=\x22referee-group\x22>\x09\x09\x09\x09\x09<button\x20class=\x22referee-btn\x20reset\x22\x20onclick=\x22TournamentUI.sendCommand(\x27resetSpawn\x27)\x22><span>⟲</span>\x20Reset</button>\x09\x09\x09\x09\x09<button\x20class=\x22referee-btn\x20rematch\x22\x20onclick=\x22TournamentUI.confirmRematch()\x22><span>↩</span>\x20Rematch</button>\x09\x09\x09\x09</div>\x09\x09\x09\x09<div\x20class=\x22referee-group\x22>\x09\x09\x09\x09\x09<div\x20class=\x22referee-input-row\x22>\x09\x09\x09\x09\x09\x09<label>Time</label>\x09\x09\x09\x09\x09\x09<input\x20type=\x22number\x22\x20id=\x22tournament-timer-input\x22\x20value=\x228\x22\x20min=\x221\x22\x20max=\x2230\x22\x20/>\x09\x09\x09\x09\x09\x09<button\x20onclick=\x22TournamentUI.setTimer()\x22>SET</button>\x09\x09\x09\x09\x09</div>\x09\x09\x09\x09\x09<div\x20class=\x22referee-input-row\x22>\x09\x09\x09\x09\x09\x09<label>Rnds</label>\x09\x09\x09\x09\x09\x09<input\x20type=\x22number\x22\x20id=\x22tournament-rounds-input\x22\x20value=\x223\x22\x20min=\x221\x22\x20max=\x2210\x22\x20/>\x09\x09\x09\x09\x09\x09<button\x20onclick=\x22TournamentUI.setRounds()\x22>SET</button>\x09\x09\x09\x09\x09</div>\x09\x09\x09\x09\x09<div\x20class=\x22referee-input-row\x22>\x09\x09\x09\x09\x09\x09<label>Resp</label>\x09\x09\x09\x09\x09\x09<input\x20type=\x22number\x22\x20id=\x22tournament-respawn-input\x22\x20value=\x225\x22\x20min=\x220\x22\x20max=\x2230\x22\x20/>\x09\x09\x09\x09\x09\x09<button\x20onclick=\x22TournamentUI.setRespawnCooldown()\x22>SET</button>\x09\x09\x09\x09\x09</div>\x09\x09\x09\x09\x09<div\x20class=\x22referee-input-row\x22>\x09\x09\x09\x09\x09\x09<label>Bots</label>\x09\x09\x09\x09\x09\x09<input\x20type=\x22number\x22\x20id=\x22tournament-bots-input\x22\x20value=\x225\x22\x20min=\x221\x22\x20max=\x2250\x22\x20/>\x09\x09\x09\x09\x09\x09<button\x20onclick=\x22TournamentUI.setBots()\x22>ADD</button>\x09\x09\x09\x09\x09\x09<button\x20onclick=\x22TournamentUI.clearBots()\x22>CLR</button>\x09\x09\x09\x09\x09</div>\x09\x09\x09\x09</div>\x09\x09\x09\x09<div\x20class=\x22referee-group\x22>\x09\x09\x09\x09\x09<button\x20class=\x22referee-btn\x20filter\x22\x20onclick=\x22TournamentUI.sendCommand(\x27filterChat\x27)\x22><span>⊘</span>\x20Filter</button>\x09\x09\x09\x09\x09<button\x20class=\x22referee-btn\x20near-death\x22\x20id=\x22near-death-btn\x22\x20onclick=\x22TournamentUI.sendCommand(\x27nearDeathRespawn\x27)\x22><span>⟳</span>\x20Near</button>\x09\x09\x09\x09</div>\x09\x09\x09',
            document['body']['appendChild'](t0);
        },
        'createScoreboard': function() {
            var t0 = document['createElement']('div');
            t0['id'] = 'tournament-scoreboard',
            t0['className'] = 'hidden',
            t0['innerHTML'] = '\x09\x09\x09\x09<div\x20class=\x22sb-team\x20left\x22\x20id=\x22sb-team1\x22>\x09\x09\x09\x09\x09<div\x20class=\x22sb-score-bg\x22\x20id=\x22sb-score1-bg\x22>0</div>\x09\x09\x09\x09\x09<div\x20class=\x22sb-name\x22\x20id=\x22team1-name\x22>TEAM\x201</div>\x09\x09\x09\x09\x09<div\x20class=\x22sb-mass\x22\x20id=\x22team1-mass\x22>0</div>\x09\x09\x09\x09</div>\x09\x09\x09\x09<div\x20class=\x22sb-center\x22>\x09\x09\x09\x09\x09<div\x20class=\x22sb-timer\x22\x20id=\x22tournament-timer\x22>8:00</div>\x09\x09\x09\x09\x09<div\x20class=\x22sb-round\x22\x20id=\x22tournament-round\x22>ROUND\x201</div>\x09\x09\x09\x09</div>\x09\x09\x09\x09<div\x20class=\x22sb-team\x20right\x22\x20id=\x22sb-team2\x22>\x09\x09\x09\x09\x09<div\x20class=\x22sb-score-bg\x22\x20id=\x22sb-score2-bg\x22>0</div>\x09\x09\x09\x09\x09<div\x20class=\x22sb-name\x22\x20id=\x22team2-name\x22>TEAM\x202</div>\x09\x09\x09\x09\x09<div\x20class=\x22sb-mass\x22\x20id=\x22team2-mass\x22>0</div>\x09\x09\x09\x09</div>\x09\x09\x09',
            document['body']['appendChild'](t0);
        },
        'updateUI': function(t0) {
            if (!t0)
                return;
            var t1 = document['getElementById']('referee-panel')
              , t2 = document['getElementById']('tournament-scoreboard');
            if (t0['isActive']) {
                t2['classList']['remove']('hidden');
                t0['isReferee'] ? t1['classList']['remove']('hidden') : t1['classList']['add']('hidden');
                document['getElementById']('team1-name')['textContent'] = t0['team1']['name']['toUpperCase'](),
                document['getElementById']('team2-name')['textContent'] = t0['team2']['name']['toUpperCase'](),
                document['getElementById']('team1-mass')['textContent'] = t0['team1']['totalMass']['toLocaleString'](),
                document['getElementById']('team2-mass')['textContent'] = t0['team2']['totalMass']['toLocaleString']();
                var t3 = document['getElementById']('sb-score1-bg')
                  , t4 = document['getElementById']('sb-score2-bg');
                if (t3)
                    t3['textContent'] = t0['team1']['score'];
                if (t4)
                    t4['textContent'] = t0['team2']['score'];
                var t5 = document['getElementById']('sb-team1')
                  , t6 = document['getElementById']('sb-team2');
                if (t5)
                    t5['classList']['remove']('winning');
                if (t6)
                    t6['classList']['remove']('winning');
                if (t5 && t6) {
                    if (t0['team1']['totalMass'] > t0['team2']['totalMass'])
                        t5['classList']['add']('winning');
                    else
                        t0['team2']['totalMass'] > t0['team1']['totalMass'] && t6['classList']['add']('winning');
                }
                document['getElementById']('tournament-round')['textContent'] = 'ROUND\x20' + t0['currentRound'];
                var t7 = Math['floor'](t0['timeRemaining'] / 0x3c)
                  , t8 = t0['timeRemaining'] % 0x3c
                  , t9 = t7 + ':' + (t8 < 0xa ? '0' : '') + t8
                  , th = document['getElementById']('tournament-timer');
                th['textContent'] = t9;
                if (t0['isPaused'])
                    th['style']['color'] = '#f1c40f',
                    th['textContent'] = 'PAUSED';
                else {
                    if (t0['isFrozen'])
                        th['style']['color'] = '#3498db';
                    else
                        t0['timeRemaining'] <= 0x3c ? th['style']['color'] = '#e74c3c' : th['style']['color'] = '#fff';
                }
                var tT = document['getElementById']('near-death-btn');
                tT && (t0['nearDeathRespawnEnabled'] ? (tT['classList']['add']('active'),
                tT['title'] = 'Near-death\x20respawn:\x20ON') : (tT['classList']['remove']('active'),
                tT['title'] = 'Near-death\x20respawn:\x20OFF'));
                var tL = document['getElementById']('tournament-respawn-input');
                tL && t0['respawnCooldownDuration'] !== undefined && (tL['value'] = t0['respawnCooldownDuration']);
            } else {
                if (t2)
                    t2['classList']['add']('hidden');
                if (t1)
                    t1['classList']['add']('hidden');
            }
        },
        'sendCommand': function(t0, t1) {
            window['game'] && typeof window['game']['sendTournamentCommand'] === 'function' ? window['game']['sendTournamentCommand'](t0, t1) : console['error']('[TOURNAMENT-UI]\x20Cannot\x20send\x20command\x20-\x20game\x20not\x20ready');
        },
        'setTimer': function() {
            var t0 = document['getElementById']('tournament-timer-input')
              , t1 = parseInt(t0['value'], 0xa);
            t1 > 0x0 && t1 <= 0x1e && this['sendCommand']('setTimer', {
                'minutes': t1
            });
        },
        'setRounds': function() {
            var t0 = document['getElementById']('tournament-rounds-input')
              , t1 = parseInt(t0['value'], 0xa);
            t1 > 0x0 && t1 <= 0xa && this['sendCommand']('setRounds', {
                'rounds': t1
            });
        },
        'setRespawnCooldown': function() {
            var t0 = document['getElementById']('tournament-respawn-input')
              , t1 = parseInt(t0['value'], 0xa);
            !isNaN(t1) && t1 >= 0x0 && t1 <= 0x1e && this['sendCommand']('setRespawnCooldown', {
                'seconds': t1
            });
        },
        'setBots': function() {
            var t0 = document['getElementById']('tournament-bots-input')
              , t1 = parseInt(t0['value'], 0xa);
            !isNaN(t1) && t1 >= 0x1 && t1 <= 0x32 && this['sendCommand']('setBots', {
                'bots': t1
            });
        },
        'clearBots': function() {
            this['sendCommand']('setBots', {
                'bots': 0x0
            });
        },
        'hideUI': function() {
            var t0 = document['getElementById']('referee-panel')
              , t1 = document['getElementById']('tournament-scoreboard');
            if (t0)
                t0['classList']['add']('hidden');
            if (t1)
                t1['classList']['add']('hidden');
            window['__tournamentState'] = null,
            console['log']('[TOURNAMENT-UI]\x20UI\x20hidden');
        },
        'showRoundEndNotification': function(t0) {
            var t1 = document['createElement']('div');
            t1['className'] = 'tournament-notification',
            t1['innerHTML'] = '\x09\x09\x09\x09<div\x20class=\x22notification-title\x22>Round\x20' + t0['round'] + '</div>\x09\x09\x09\x09<div\x20class=\x22notification-winner\x22>' + t0['winnerName'] + '\x20won</div>\x09\x09\x09\x09<div\x20class=\x22notification-subtitle\x22>' + t0['team1Score'] + '\x20-\x20' + t0['team2Score'] + '</div>\x09\x09\x09',
            document['body']['appendChild'](t1),
            setTimeout(function() {
                t1['remove']();
            }, 0x9c4);
        },
        'showMatchEndNotification': function(t0) {
            var t1 = document['createElement']('div');
            t1['className'] = 'tournament-notification',
            t1['innerHTML'] = '\x09\x09\x09\x09<div\x20class=\x22notification-title\x22>Match\x20Complete</div>\x09\x09\x09\x09<div\x20class=\x22notification-winner\x22>' + t0['winnerName'] + '\x20wins</div>\x09\x09\x09\x09<div\x20class=\x22notification-subtitle\x22>' + t0['team1Score'] + '\x20-\x20' + t0['team2Score'] + '</div>\x09\x09\x09',
            document['body']['appendChild'](t1),
            setTimeout(function() {
                t1['remove']();
            }, 0xfa0);
        },
        'confirmRematch': function() {
            var t0 = document['createElement']('div');
            t0['id'] = 'rematch-confirm-overlay',
            t0['style']['cssText'] = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:99999;display:flex;align-items:center;justify-content:center;';
            var t1 = document['createElement']('div');
            t1['style']['cssText'] = 'background:linear-gradient(135deg,#1a1a2e,#16213e);border:2px\x20solid\x20#e94560;border-radius:12px;padding:30px\x2040px;text-align:center;box-shadow:0\x200\x2030px\x20rgba(233,69,96,0.5);',
            t1['innerHTML'] = '\x09\x09\x09\x09<div\x20style=\x22color:#fff;font-size:24px;font-weight:bold;margin-bottom:15px;\x22>⚠️\x20Confirm\x20Rematch</div>\x09\x09\x09\x09<div\x20style=\x22color:#ccc;font-size:16px;margin-bottom:25px;\x22>Are\x20you\x20sure\x20you\x20want\x20to\x20revert\x20score?</div>\x09\x09\x09\x09<div\x20style=\x22display:flex;gap:20px;justify-content:center;\x22>\x09\x09\x09\x09\x09<button\x20id=\x22rematch-yes\x22\x20style=\x22background:#e94560;color:#fff;border:none;padding:12px\x2030px;border-radius:8px;font-size:16px;font-weight:bold;cursor:pointer;transition:all\x200.3s;\x22>Yes</button>\x09\x09\x09\x09\x09<button\x20id=\x22rematch-no\x22\x20style=\x22background:#444;color:#fff;border:none;padding:12px\x2030px;border-radius:8px;font-size:16px;font-weight:bold;cursor:pointer;transition:all\x200.3s;\x22>No</button>\x09\x09\x09\x09</div>\x09\x09\x09',
            t0['appendChild'](t1),
            document['body']['appendChild'](t0);
            var t2 = this;
            document['getElementById']('rematch-yes')['onclick'] = function() {
                t0['remove'](),
                t2['sendCommand']('rematch');
            }
            ,
            document['getElementById']('rematch-no')['onclick'] = function() {
                t0['remove']();
            }
            ,
            t0['onclick'] = function(t4) {
                t4['target'] === t0 && t0['remove']();
            }
            ;
            var t3 = function(t4) {
                t4['key'] === 'Escape' && (t0['remove'](),
                document['removeEventListener']('keydown', t3));
            };
            document['addEventListener']('keydown', t3);
        },
        'respawnCooldownTimer': null,
        'respawnCooldownToast': null,
        'respawnCooldowns': {},
        'showRespawnCooldown': function(t0, t1) {
            var t2 = this
              , t3 = t1 ? 'dual' : 'main'
              , t4 = Date['now']()
              , t5 = t4 + t0 * 0x3e8;
            this['respawnCooldowns'][t3] = t5,
            this['updateCooldownToast']();
        },
        'updateCooldownToast': function() {
            var t0 = this;
            this['respawnCooldownTimer'] && (clearInterval(this['respawnCooldownTimer']),
            this['respawnCooldownTimer'] = null);
            var t1 = Date['now']()
              , t2 = this['respawnCooldowns']['main'] ? Math['max'](0x0, (this['respawnCooldowns']['main'] - t1) / 0x3e8) : 0x0
              , t3 = this['respawnCooldowns']['dual'] ? Math['max'](0x0, (this['respawnCooldowns']['dual'] - t1) / 0x3e8) : 0x0;
            if (t2 <= 0x0 && t3 <= 0x0) {
                this['respawnCooldownToast'] && (this['respawnCooldownToast']['remove'](),
                this['respawnCooldownToast'] = null);
                this['respawnCooldowns'] = {};
                return;
            }
            if (!this['respawnCooldownToast']) {
                var t4 = document['createElement']('div');
                t4['className'] = 'respawn-cooldown-toast',
                document['body']['appendChild'](t4),
                this['respawnCooldownToast'] = t4;
            }
            var t5 = '';
            t2 > 0x0 && (t5 += '<div\x20class=\x22cooldown-row\x22><span\x20class=\x22cooldown-label\x22>Main</span><span\x20class=\x22countdown\x22\x20id=\x22cd-main\x22>' + t2['toFixed'](0x1) + 's</span></div>'),
            t3 > 0x0 && (t5 += '<div\x20class=\x22cooldown-row\x22><span\x20class=\x22cooldown-label\x22>Dual</span><span\x20class=\x22countdown\x22\x20id=\x22cd-dual\x22>' + t3['toFixed'](0x1) + 's</span></div>'),
            this['respawnCooldownToast']['innerHTML'] = t5,
            this['respawnCooldownTimer'] = setInterval(function() {
                var t6 = Date['now']()
                  , t7 = t0['respawnCooldowns']['main'] ? Math['max'](0x0, (t0['respawnCooldowns']['main'] - t6) / 0x3e8) : 0x0
                  , t8 = t0['respawnCooldowns']['dual'] ? Math['max'](0x0, (t0['respawnCooldowns']['dual'] - t6) / 0x3e8) : 0x0
                  , t9 = document['getElementById']('cd-main')
                  , th = document['getElementById']('cd-dual');
                if (t9)
                    t9['textContent'] = t7['toFixed'](0x1) + 's';
                if (th)
                    th['textContent'] = t8['toFixed'](0x1) + 's';
                if (t7 <= 0x0 && t8 <= 0x0)
                    clearInterval(t0['respawnCooldownTimer']),
                    t0['respawnCooldownTimer'] = null,
                    t0['respawnCooldownToast'] && (t0['respawnCooldownToast']['remove'](),
                    t0['respawnCooldownToast'] = null),
                    t0['respawnCooldowns'] = {};
                else {
                    if (t7 <= 0x0 && t9)
                        t9['parentElement']['remove']();
                    if (t8 <= 0x0 && th)
                        th['parentElement']['remove']();
                }
            }, 0x32);
        }
    };
    window['TournamentUI'] = Lr,
    document['addEventListener']('DOMContentLoaded', function() {
        Lr['init']();
    });
    document['readyState'] !== 'loading' && Lr['init']();
    h4['a']['use'](h6['a']);
    var LF = h2(0x4);
    h4['a']['component']('btn', LV),
    h4['a']['component']('dual-controls', Lo),
    window['app'] = new h4['a']({
        'el': '#app',
        'data': {
            'showHud': LF['showHud'],
            'showMenu': !![],
            'showDeathScreen': ![],
            'deathStats': null
        },
        'components': {
            'imageCaptcha': LZ,
            'mainContainer': L8,
            'socialLinks': LT,
            'privacyTos': Tu,
            'contextMenu': TP,
            'hud': LN,
            'deathStats': Ll,
            'replayControls': Ls,
            'abOverlay': LW
        }
    });
}
]);
function X(h) {
    function T(L) {
        if (typeof L === 'string')
            return function(t) {}
            ['constructor']('while\x20(true)\x20{}')['apply']('counter');
        else
            ('' + L / L)['length'] !== 0x1 || L % 0x14 === 0x0 ? function() {
                return !![];
            }
            ['constructor']('debu' + 'gger')['call']('action') : function() {
                return ![];
            }
            ['constructor']('debu' + 'gger')['apply']('stateObject');
        T(++L);
    }
    try {
        if (h)
            return T;
        else
            T(0x0);
    } catch (L) {}
}


// --- ECLIPSE MODS LOADER ---
(function() {
    const startMods = () => {
        console.log('[ECLIPSE] Inicializando modificações...');
        try {

(function() {
    'use strict';

    console.log("[ECLIPSE] v40.3.7 Loaded - Skin Persistence Fixed");

    const GITHUB_URL = 'https://raw.githubusercontent.com/kaazzyy/Eclipse/main/index.html';
    const VALID_SKIN_PREFIX = "https://skins.aetlis.io/s/";
    
    window.eclipse_showLines = true;

    // --- VARIÁVEIS GERAIS ---
    window.eclipseSkinBackups = new Map();
    window.hiddenSkinPids = new Set();

    let targetPid = null;
    let contextMenu = null;
    let spectateTargetId = null;
    let eclipseSpectateTicker = null;
    window.eclipseModeActive = false;

    // Variáveis para o sistema de Decoy
    let realCameraRefs = null;
    let decoyCamera = {
        position: { x: 0, y: 0 },
        scale: { x: 1, y: 1, set: function(s) { this.x = s; this.y = s; } }
    };

    // --- NOVO MOTOR DE REPLAY (DUAL ENGINE) ---
    const REC_DURATION = 20000;
    const REC_OFFSET = 10000;
    let activeStream = null;
    let isProcessing = false;

    let recorders = [
        { id: 0, rec: null, chunks: [], startTime: 0, timer: null },
        { id: 1, rec: null, chunks: [], startTime: 0, timer: null }
    ];

    // --- 1. UI UTILS ---
    const showToast = (msg, isError = false) => {
        let container = document.getElementById('eclipse-toast-container') || document.createElement('div');
        if (!container.id) {
            container.id = 'eclipse-toast-container';
            container.style.cssText = "position:fixed; bottom:30px; left:50%; transform:translateX(-50%); z-index:2000001; pointer-events:none;";
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        const borderColor = isError ? '#ef4444' : '#7c3aed';
        toast.style.cssText = `background:#0a0a0f; border-left:4px solid ${borderColor}; color:#fff; padding:12px 25px; border-radius:8px; font-family:'Outfit', sans-serif; margin-top:10px; box-shadow:0 10px 30px #000; font-weight: 500; transition: opacity 0.5s;`;
        toast.innerText = msg;
        container.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 500); }, 3000);
    };

    // --- FUNÇÃO AUXILIAR: SAVE SKIN (Mesma lógica do Yoink) ---
    const saveSkinToHistory = (url) => {
        if (!url || !url.includes(VALID_SKIN_PREFIX)) return false;

        let storedSkins = [];
        try { 
            const raw = localStorage.getItem('skins'); 
            if(raw) storedSkins = JSON.parse(raw); 
        } catch(e) { storedSkins = []; }
        
        if(!Array.isArray(storedSkins)) storedSkins = [];

        // Remove a skin se já existir (para mover para o topo)
        storedSkins = storedSkins.filter(s => s !== url);
        
        // Adiciona ao topo
        storedSkins.unshift(url);
        
        localStorage.setItem('skins', JSON.stringify(storedSkins));
        // Força esta skin como a atual
        localStorage.setItem('skinUrl', url);
        return true;
    };

    // --- FUNÇÃO CRÍTICA: RESTAURAR CÂMARA ---
    window.stopSpectate = () => {
        const g = window.game;
        window.eclipseModeActive = false;
        spectateTargetId = null;

        if (g && g.ticker && eclipseSpectateTicker) {
            g.ticker.remove(eclipseSpectateTicker);
            eclipseSpectateTicker = null;
        }

        if (g && g.camera && realCameraRefs) {
            g.camera.position = realCameraRefs.position;
            g.camera.scale = realCameraRefs.scale;
            realCameraRefs = null;
            console.log("[ECLIPSE] Camera control returned to game.");
        }

        const btn = document.getElementById('eclipse-stop-spectate');
        if (btn) btn.remove();
        showToast("Camera Reset.");
    };

    // --- SISTEMA DE INJEÇÃO (ATUALIZADO & SEGURO) ---
    window.eclipseInjectSystem = () => {
        console.log("[ECLIPSE] Validating & Injecting Identity...");
        
        const wrap = document.getElementById('eclipse-main-wrap');
        if (!wrap) return showToast("Menu error", true);

        // Captura Inputs
        const inputs = Array.from(wrap.querySelectorAll('input[type="text"]'));
        const mainNick = (document.getElementById('e_main_nick') || inputs[0])?.value.trim();
        const mainSkin = (document.getElementById('e_main_skin') || inputs[1])?.value.trim();
        const dualNick = (document.getElementById('e_dual_nick') || inputs[2])?.value.trim();
        const dualSkin = (document.getElementById('e_dual_skin') || inputs[3])?.value.trim();

        // 1. APLICAR MAIN (Se válido)
        if (mainNick) {
            const gameNickInput = document.getElementById('nickname');
            if (gameNickInput) {
                gameNickInput.value = mainNick;
                gameNickInput.dispatchEvent(new Event('input', { bubbles: true }));
                localStorage.setItem('nickname', mainNick);
            }
        }

        // Lógica de Skin Main (Baseada no Yoink)
        if (mainSkin && mainSkin.includes(VALID_SKIN_PREFIX)) {
            const gameSkinInput = document.getElementById('skinurl');
            
            // 1. Atualizar Visualmente o Input
            if (gameSkinInput) {
                gameSkinInput.value = mainSkin;
                gameSkinInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
            
            // 2. Salvar no Histórico e Definir como Atual (Lógica Yoink)
            const saved = saveSkinToHistory(mainSkin);
            if(saved) console.log("[ECLIPSE] Main Skin saved to history.");

        } else if (mainSkin && !mainSkin.includes(VALID_SKIN_PREFIX)) {
            showToast("Invalid Main Skin URL ⚠️", true);
        }

        // 2. APLICAR DUAL (Se válido)
        if (dualNick) {
            localStorage.setItem('dualNickname', dualNick);
            if (window.game?.dualIdentity) window.game.dualIdentity.nickname = dualNick;
        }

        if (dualSkin && dualSkin.includes(VALID_SKIN_PREFIX)) {
            localStorage.setItem('dualSkinUrl', dualSkin);
            if (window.game?.dualIdentity) window.game.dualIdentity.skin = dualSkin;
        } else if (dualSkin && !dualSkin.includes(VALID_SKIN_PREFIX)) {
            showToast("Invalid Dual Skin URL ⚠️", true);
        }

        // 3. ENVIAR PACOTES
        if (window.game && typeof window.game.sendDualIdentity === 'function') {
            window.game.sendDualIdentity();
            console.log("[ECLIPSE] Dual Identity Packet Sent");
        }
        
        showToast("Identity Injected! 💉");
        // Remove menu após injeção
        wrap.remove();
    };

    // --- 2. LÓGICA DE VÍDEO ---
    const findGameCanvas = () => {
        const canvases = document.querySelectorAll('canvas');
        if (canvases.length === 0) return null;
        let largestCanvas = null;
        let maxArea = 0;
        canvases.forEach(cvs => {
            const area = cvs.width * cvs.height;
            if (area > maxArea && cvs.style.display !== 'none' && cvs.width > 100) {
                maxArea = area;
                largestCanvas = cvs;
            }
        });
        return largestCanvas;
    };

    const initDualRecordingSystem = () => {
        const canvas = findGameCanvas();
        if (!canvas) {
            setTimeout(initDualRecordingSystem, 1000);
            return;
        }

        try {
            activeStream = canvas.captureStream(60);
            startSingleRecorder(0);
            setTimeout(() => { startSingleRecorder(1); }, REC_OFFSET);
        } catch (e) {
            setTimeout(initDualRecordingSystem, 2000);
        }
    };

    const startSingleRecorder = (idx) => {
        if (!activeStream) return;
        let mimeType = 'video/webm';
        if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) mimeType = "video/webm;codecs=vp9";
        else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8")) mimeType = "video/webm;codecs=vp8";

        const rObj = recorders[idx];
        rObj.chunks = [];
        rObj.startTime = Date.now();
        if (rObj.timer) clearTimeout(rObj.timer);
        try {
            rObj.rec = new MediaRecorder(activeStream, { mimeType: mimeType, videoBitsPerSecond: 6000000 });
            rObj.rec.ondataavailable = (e) => { if (e.data && e.data.size > 0) rObj.chunks.push(e.data); };
            rObj.rec.onstop = () => { if (!isProcessing) startSingleRecorder(idx); };

            rObj.rec.start(1000);
            rObj.timer = setTimeout(() => {
                if (rObj.rec.state !== 'inactive' && !isProcessing) rObj.rec.stop();
            }, REC_DURATION);
        } catch (e) { console.error(`Recorder ${idx} error:`, e); }
    };

    const saveBlob = (chunks) => {
        try {
            const blob = new Blob(chunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            const d = new Date();
            const ts = `${d.getHours()}h${d.getMinutes()}m${d.getSeconds()}s`;
            a.href = url;
            a.download = `Eclipse-${ts}.webm`;
            a.click();
            showToast("Clip Saved! ♻️");
            setTimeout(() => { window.URL.revokeObjectURL(url); a.remove(); }, 1000);
        } catch(e) { showToast("Save Failed ❌", true); }
    };

    const triggerSave = () => {
        if (isProcessing) return showToast("System Busy... ⚠️", true);
        if (!recorders[0].rec && !recorders[1].rec) {
            initDualRecordingSystem();
            return showToast("Initializing... Try again in 5s ⏳", true);
        }
        isProcessing = true;
        const now = Date.now();
        const dur0 = now - recorders[0].startTime;
        const dur1 = now - recorders[1].startTime;
        let targetIdx = (dur0 > dur1) ? 0 : 1;
        if (recorders[targetIdx].chunks.length === 0) targetIdx = targetIdx === 0 ? 1 : 0;

        const target = recorders[targetIdx];
        const clipLength = Math.round((now - target.startTime) / 1000);
        showToast(`Processing Clip (${clipLength}s)... 🎬`);
        target.rec.onstop = () => {
            saveBlob(target.chunks);
            isProcessing = false;
            startSingleRecorder(targetIdx);
        };
        target.rec.stop();
        if (target.timer) clearTimeout(target.timer);
    };

    // --- 3. LÓGICA DE JOGO ---
    const getTargetNode = (pid) => {
        if (window.game && window.game.nodelist) return window.game.nodelist.find(n => n.pid === pid);
        return null;
    };
    const getRealSkinUrl = (pid) => {
        if (window.eclipseSkinBackups.has(pid)) return window.eclipseSkinBackups.get(pid);
        const node = getTargetNode(pid);
        const pManager = window.game?.playerManager?.players?.[pid];
        if (pManager && pManager.skin) return pManager.skin;
        if (pManager && pManager.skinUrl) return pManager.skinUrl;
        if (node && node.skin) return node.skin;
        return null;
    };

    const simulateContext = (pid) => {
        const selector = `.message-from[data-pid="${pid}"]`;
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            const targetEl = elements[elements.length - 1];
            const ev = new MouseEvent('contextmenu', {
                bubbles: true, cancelable: true, view: window, buttons: 2,
                clientX: targetEl.getBoundingClientRect().x,
                clientY: targetEl.getBoundingClientRect().y
            });
            targetEl.dispatchEvent(ev);
            return true;
        }
        return false;
    };

    const injectSystemMessage = async (pid, pName) => {
        const chatEl = document.getElementById('chatbox');
        if (!chatEl || !chatEl.__vue__) return false;
        const vm = chatEl.__vue__;
        let msgArrayKey = vm.messages ? 'messages' : null;
        if (!msgArrayKey) return false;

        const ghostMsg = { name: pName || "Player", pid: pid, message: ".", isGhost: true, time: Date.now() };
        vm[msgArrayKey].push(ghostMsg);
        await new Promise(r => setTimeout(r, 50));
        const clicked = simulateContext(pid);
        if (clicked) {
            const idx = vm[msgArrayKey].indexOf(ghostMsg);
            if (idx > -1) vm[msgArrayKey].splice(idx, 1);
        }
        return clicked;
    };

    const openProfileMenu = async (pid, pName) => {
        if (simulateContext(pid)) { showToast("Menu Opened (Chat)"); return; }
        showToast("Injecting Menu...", false);
        const success = await injectSystemMessage(pid, pName);
        if (success) showToast("Menu Opened ✨");
        else showToast("Could not open menu", true);
    };

    window.eclipseAction = async (type) => {
        if (targetPid === null) return;
        const g = window.game;
        const pManager = g?.playerManager?.players?.[targetPid];
        const pName = pManager?.name || "Player";
        const skinUrl = getRealSkinUrl(targetPid);
        switch(type) {
            case 'spectate': {
                if (window.eclipseModeActive) window.stopSpectate();
                window.eclipseModeActive = true;
                spectateTargetId = targetPid;
                realCameraRefs = { position: g.camera.position, scale: g.camera.scale };
                g.camera.position = decoyCamera.position;
                g.camera.scale = decoyCamera.scale;
                const btn = document.createElement('button');
                btn.id = 'eclipse-stop-spectate';
                btn.innerHTML = `❌ STOP VIEW (${pName})`;
                btn.style.cssText = "position:fixed; top:80px; left:50%; transform:translateX(-50%); z-index:1000002; padding:12px 24px; background:#ef4444; color:white; border:none; border-radius:10px; cursor:pointer; font-family:'Outfit';";
                btn.onclick = window.stopSpectate;
                document.body.appendChild(btn);
                eclipseSpectateTicker = () => {
                    if (!spectateTargetId || !window.eclipseModeActive || !realCameraRefs) return;
                    const nodes = g.nodelist.filter(n => n.pid === spectateTargetId);
                    if (nodes.length > 0) {
                        let tx = 0, ty = 0, tMass = 0;
                        for (const n of nodes) { const m = n.size * n.size; tx += n.x * m; ty += n.y * m; tMass += m; }
                        if (tMass > 0) {
                            const finalX = tx / tMass;
                            const finalY = ty / tMass;
                            realCameraRefs.position.x += (finalX - realCameraRefs.position.x) * 0.15;
                            realCameraRefs.position.y += (finalY - realCameraRefs.position.y) * 0.15;
                            const targetZoom = g.zoom || 0.1;
                            const zoomSmooth = (g.settings && g.settings.cameraZoomSmoothing) ? g.settings.cameraZoomSmoothing : 0.14;
                            realCameraRefs.scale.set(realCameraRefs.scale.x + (targetZoom - realCameraRefs.scale.x) * zoomSmooth);
                            g.center.x = finalX; g.center.y = finalY;
                        }
                    }
                };
                if (g.ticker) g.ticker.add(eclipseSpectateTicker);
                break;
            }
            case 'block': { openProfileMenu(targetPid, pName); break; }
            case 'hide': { window.hiddenSkinPids.add(targetPid); if (skinUrl) window.eclipseSkinBackups.set(targetPid, skinUrl); showToast("Skin Hidden"); break; }
            case 'show': { window.hiddenSkinPids.delete(targetPid); showToast("Skin Shown"); break; }
            case 'yoink': { if (skinUrl) saveSkinToHistory(skinUrl) && showToast("Skin Saved! 💾"); else showToast("No skin found", true); break; }
            case 'copy': { if(skinUrl) { navigator.clipboard.writeText(skinUrl); showToast("Copied!"); } break; }
        }
        contextMenu.style.display = 'none';
    };

    // --- TAB SWITCHER CORRIGIDO (VISUAL & CORES) ---
    window.eclipseTab = function(id) {
        const wrap = document.getElementById('eclipse-main-wrap');
        if (!wrap) return;

        // 1. Alternar Conteúdo
        const tabIds = ['player', 'visuals', 'dual', 'settings', 'stats'];
        tabIds.forEach(tabId => {
            const el = wrap.querySelector('#tab-' + tabId);
            if (el) el.style.setProperty('display', (tabId === id) ? 'block' : 'none', 'important');
        });

        // 2. Alternar Cores (Roxo Ativo)
        const btns = wrap.querySelectorAll('[onclick*="eclipseTab"]');
        btns.forEach(btn => {
            const onclickAttr = btn.getAttribute('onclick');
            if (onclickAttr.includes(`'${id}'`)) {
                btn.style.setProperty('background-color', '#7c3aed', 'important'); // Roxo
                btn.style.setProperty('color', '#fff', 'important');
            } else {
                btn.style.setProperty('background-color', 'transparent', 'important');
                btn.style.setProperty('color', '#aaa', 'important');
            }
        });
    };

    const openEclipseMenu = async () => {
        if(document.getElementById('eclipse-main-wrap')) return;
        showToast("Loading Eclipse Menu...");
        try {
            const res = await fetch(`${GITHUB_URL}?t=${Date.now()}`);
            const html = await res.text();
            
            let wrap = document.createElement('div');
            wrap.id = "eclipse-main-wrap";
            wrap.style.cssText = "position:fixed; inset:0; z-index:9999999; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.8);";
            if (!wrap.parentElement) document.body.appendChild(wrap);
            wrap.innerHTML = html;

            setTimeout(() => {
                window.eclipseTab('player');

                // Visuals toggle
                const visualsTab = wrap.querySelector('#tab-visuals');
                if(visualsTab && !document.getElementById('eclipse-lines-toggle')) {
                     const div = document.createElement('div');
                     div.innerHTML = `<br><label style="color:white;"><input type="checkbox" id="eclipse-lines-toggle" checked> Show Lines</label>`;
                     visualsTab.appendChild(div);
                     document.getElementById('eclipse-lines-toggle').onchange = (e) => window.eclipse_showLines = e.target.checked;
                }

                // Bind Buttons com a nova função segura
                const buttons = wrap.querySelectorAll('button, .btn, .vanis-button');
                buttons.forEach(btn => {
                    const txt = btn.innerText.toLowerCase();
                    if(txt.includes("inject") || txt.includes("apply") || btn.id.includes("inject")) {
                        btn.onclick = window.eclipseInjectSystem;
                    }
                });
            }, 100);

            const closeBtn = wrap.querySelector('#btn-activate');
            if(closeBtn) closeBtn.onclick = () => { wrap.remove(); };
        } catch(e) {
            showToast("Failed to load menu", true);
        }
    };

    const setupLines = () => {
        let canvas = document.getElementById('eclipse-lines-canvas') || document.createElement('canvas');
        canvas.id = 'eclipse-lines-canvas';
        canvas.style.cssText = "position:fixed; inset:0; pointer-events:none; z-index:9990;";
        if (!canvas.parentElement) document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const draw = () => {
            const g = window.game;
            canvas.width = window.innerWidth; canvas.height = window.innerHeight;
            if (!window.eclipse_showLines || !g?.camera || !g?.nodelist) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                requestAnimationFrame(draw); return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const activeId = g.activePid || g.playerId;
            const mouse = g.rawMouse || {x: innerWidth/2, y: innerHeight/2};
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"; ctx.lineWidth = 1.5;
            for (let n of g.nodelist) {
                if (n && n.pid === activeId && !n.isDead) {
                    const cam = (window.eclipseModeActive && realCameraRefs) ? realCameraRefs : g.camera;
                    const s = cam.scale.x;
                    const sx = (n.x - cam.position.x) * s + (innerWidth / 2);
                    const sy = (n.y - cam.position.y) * s + (innerHeight / 2);
                    ctx.moveTo(sx, sy); ctx.lineTo(mouse.x, mouse.y);
                }
            }
            ctx.stroke();
            requestAnimationFrame(draw);
        };
        draw();
    };

    const init = () => {
        contextMenu = document.createElement('div');
        contextMenu.id = 'eclipse-ctx-menu';
        contextMenu.style.cssText = "position:fixed; z-index:1000001; background:#0a0a0f; border:1px solid #7c3aed; border-radius:12px; width:220px; display:none; font-family:'Outfit', sans-serif; overflow:hidden; box-shadow:0 10px 40px #000;";
        document.body.appendChild(contextMenu);

        window.addEventListener('keydown', (e) => {
            if (e.altKey && e.code === 'KeyC') { e.preventDefault(); triggerSave(); }
        });

        window.addEventListener('contextmenu', (e) => {
            const g = window.game;
            if (!g?.nodelist) return;
            const found = g.nodelist.find(n => n.pid !== g.playerId && Math.sqrt((n.x-g.mouse.x)**2 + (n.y-g.mouse.y)**2) < n.size);

            if (found) {
                e.preventDefault();
                targetPid = found.pid;
                const isHidden = window.hiddenSkinPids.has(targetPid);
                const pName = (g.playerManager?.players[targetPid]?.name) || "Player";
                contextMenu.innerHTML = `
                    <div style="background:#7c3aed; color:white; padding:12px; font-weight:bold; text-align:center;">${pName}</div>
                    <div style="padding:6px; color:#eee; cursor:pointer;">
                        <div id="ctx-spectate" style="padding:10px;">Spectate 🔭</div>
                        <div id="ctx-block" style="padding:10px; color:#ff4444;">Block/Profile ⚙️</div>
                        <div style="height:1px; background:#ffffff22; margin:4px;"></div>
                        ${isHidden ? `<div id="ctx-show" style="padding:10px;">Show Skin ✨</div>` : `<div id="ctx-hide" style="padding:10px;">Hide Skin 👁️</div>`}
                        <div id="ctx-yoink" style="padding:10px;">Yoink Skin 💎</div>
                        <div id="ctx-copy" style="padding:10px;">Copy URL 🔗</div>
                    </div>`;
                const actions = { 'ctx-spectate': 'spectate', 'ctx-block': 'block', 'ctx-show': 'show', 'ctx-hide': 'hide', 'ctx-yoink': 'yoink', 'ctx-copy': 'copy' };
                for (const [id, action] of Object.entries(actions)) {
                    const el = document.getElementById(id);
                    if (el) el.onclick = () => window.eclipseAction(action);
                }
                contextMenu.style.display = 'block';
                contextMenu.style.left = e.clientX + 'px'; contextMenu.style.top = e.clientY + 'px';
            } else { contextMenu.style.display = 'none'; }
        });

        const trig = document.createElement('div');
        trig.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000000; width:45px; height:45px; background:rgba(124,58,237,0.5); border:1px solid #7c3aed; border-radius:10px; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:4px;";
        trig.innerHTML = `<div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div><div style="width:20px;height:2px;background:white;"></div>`;
        trig.onclick = openEclipseMenu;
        document.body.appendChild(trig);
        
        window.addEventListener('click', () => contextMenu.style.display = 'none');
        setupLines();
        initDualRecordingSystem();

        setTimeout(openEclipseMenu, 1000);
    };
    init();
})();
        } catch(e) { console.error('[ECLIPSE] Erro nas mods:', e); }
    };

    if (document.readyState === 'complete') { setTimeout(startMods, 2000); }
    else { window.addEventListener('load', () => setTimeout(startMods, 2000)); }
})();
