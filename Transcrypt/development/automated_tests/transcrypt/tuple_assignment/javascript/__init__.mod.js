	__nest__ (
		__all__,
		'tuple_assignment', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var run = function (autoTester) {
						var __left0__ = tuple ([tuple ([1, 2]), 'santa-claus', new set ([3, 4]), 5]);
						var a = __left0__[0][0];
						var b = __left0__[0][1];
						var santa = __left0__[1];
						var c = __left0__[2][0];
						var d = __left0__[2][1];
						var e = __left0__[3];
						autoTester.store (a, b, c, d, e, santa);
						var __iter0__ = enumerate (tuple ([0.5, 1.5, 2.5, 3.5]));
						for (var __index0__ = 0; __index0__ < __iter0__.length; __index0__++) {
							var __left0__ = __iter0__ [__index0__] ;
							var i = __left0__[0];
							var x = __left0__[1];
							autoTester.store (i, x);
						}
						;
						var __left0__ = tuple ([3.14, 2.74]);
						var e = __left0__[0];
						var pi = __left0__[1];
						var __left0__ = tuple ([pi, e]);
						var e = __left0__[0];
						var pi = __left0__[1];
						autoTester.store (e, pi);
					};
					//<all>
					__all__.run = run;
					//</all>
				}
			}
		}
	);
