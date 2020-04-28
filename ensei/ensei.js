
    function E_func() {
      var ensei = parseInt(document.getElementById("choose").value);

      var shunyu_n = 0;
        if (ensei==0) {
          shunyu_n = 0;
        } else if (ensei==3) {
          shunyu_n = 30;
        } else if (ensei==5) {
          shunyu_n = 200;
        } else if (ensei==9) {
          shunyu_n = 350;
        } else if (ensei==16) {
          shunyu_n = 500;
        } else if (ensei==21) {
          shunyu_n = 320;
        } else if (ensei==24) {
          shunyu_n = 500;
        } else if (ensei==42) {
          shunyu_n = 800;
        } else if (ensei==43) {
          shunyu_n = 2000;
        } else if (ensei==36) {
          shunyu_n = 480;
        } else if (ensei==38) {
          shunyu_n = 420;
        } else {
          shunyu_n = 0;
        }

      var shunyu_d = 0;
        if (ensei==0) {
          shunyu_d = 0;
        } else if (ensei==2) {
          shunyu_d = 100;
        } else if (ensei==3) {
          shunyu_d = 30;
        } else if (ensei==5) {
          shunyu_d = 200;
        } else if (ensei==16) {
          shunyu_d = 500;
        } else if (ensei==21) {
          shunyu_d = 270;
        } else if (ensei==44) {
          shunyu_d = 200;
        } else if (ensei==37) {
          shunyu_d = 380;
        } else {
          shunyu_d = 0;
        }

        var shunyu_k = 0;
          if (ensei==0) {
            shunyu_k = 0;
          } else if (ensei==2) {
            shunyu_k = 30;
          } else if (ensei==3) {
            shunyu_k = 40;
          } else if (ensei==5) {
            shunyu_k = 20;
          } else if (ensei==15) {
            shunyu_k = 300;
          } else if (ensei==16) {
            shunyu_k = 200;
          } else if (ensei==35) {
            shunyu_k = 240;
          } else if (ensei==36) {
            shunyu_k = 200;
          } else if (ensei==37) {
            shunyu_k = 270;
          } else if (ensei==38) {
            shunyu_k = 200;
          } else {
            shunyu_k = 0;
          }

        var shunyu_b = 0;
          if (ensei==0) {
            shunyu_b = 0;
          } else if (ensei==5) {
            shunyu_b = 20;
          } else if (ensei==6) {
            shunyu_b = 80;
          } else if (ensei==11) {
            shunyu_b = 250;
          } else if (ensei==15) {
            shunyu_b = 400;
          } else if (ensei==16) {
            shunyu_b = 200;
          } else if (ensei==24) {
            shunyu_b = 150;
          } else if (ensei==42) {
            shunyu_b = 200;
          } else if (ensei==43) {
            shunyu_b = 400;
          } else if (ensei==44) {
            shunyu_b = 800;
          } else if (ensei==35) {
            shunyu_b = 280;
          } else if (ensei==36) {
            shunyu_b = 200;
          } else {
            shunyu_b = 0;
          }

      document.getElementById("shunyu1").value = shunyu_n;
      document.getElementById("shunyu2").value = shunyu_d;
      document.getElementById("shunyu3").value = shunyu_k;
      document.getElementById("shunyu4").value = shunyu_b;
    }


    function D_func() {
			var baq1 = parseInt(document.getElementById("shunyu1").value);
			var baq2 = parseInt(document.getElementById("shunyu2").value);
			var baq3 = parseInt(document.getElementById("shunyu3").value);
			var baq4 = parseInt(document.getElementById("shunyu4").value);
			var e = parseInt(document.getElementById("es").value);
			var d = parseInt(document.getElementById("ds").value);
			  if(document.calculator.kinukaini.checked) d = d + 1; //鬼怒改二の固有能力分。改修値平均では対象から外す計算を別途する。
			var h = parseInt(document.getElementById("hs").value);
			var k = parseInt(document.getElementById("ks").value);
			var rf1 = parseInt(document.getElementById("rfa").value);
			var rf2 = parseInt(document.getElementById("rfb").value);
			var rf3 = parseInt(document.getElementById("rfc").value);
			var rf4 = parseInt(document.getElementById("rfd").value);
			var rf5 = parseInt(document.getElementById("rfe").value);
			var rf6 = parseInt(document.getElementById("rff").value);
			var rf7 = parseInt(document.getElementById("rfg").value);
			var rf8 = parseInt(document.getElementById("rfh").value);
			var rf9 = parseInt(document.getElementById("rfi").value);
			var rf10 = parseInt(document.getElementById("rfj").value);
			var rf11 = parseInt(document.getElementById("rfk").value);
			var rf12 = parseInt(document.getElementById("rfl").value);

			var suc = 1;
			  if(document.calculator.success.checked) suc = 1.2;

			var s_dc = 0;
			  s_dc = 0.05 *(e+d) + 0.02 * h + 0.01 * k;
			  if(s_dc>0.2) s_dc = 0.2;

			var a_rf = 0;
			  var kaini = 0;
				if(document.calculator.kinukaini.checked) kaini = 1;
			  if (kaini==1&&e+d+h+k==1) {
					a_rf = 0;
				} else if (kaini==0&&e+d+h+k==0) {
					a_rf = 0;
				} else if (kaini==1) {
					a_rf = ( rf1 + rf2 + rf3 + rf4 + rf5 + rf6 + rf7 + rf8 + rf9 + rf10 + rf11 + rf12) /(e + d - 1 + h + k);
				} else {
					a_rf = ( rf1 + rf2 + rf3 + rf4 + rf5 + rf6 + rf7 + rf8 + rf9 + rf10 + rf11 + rf12) /(e + d + h + k);
				}

			var extra_dc_fc = 0;
			  extra_dc_fc = e * 10 + d;

			var extra_dc = 0;
			  if (extra_dc_fc<10) {
					extra_dc = 0;
				} else if (extra_dc_fc<20) {
					extra_dc = 0.02;
				} else if (extra_dc_fc<30) {
					extra_dc = 0.04;
				} else if (extra_dc_fc<32) {
					extra_dc = 0.05;
				} else if (extra_dc_fc==32) {
					extra_dc = 0.052;
				} else if (extra_dc_fc<40) {
					extra_dc = 0.054;
				} else if (extra_dc_fc%10==0) {
					extra_dc = 0.054;
				} else if (extra_dc_fc%10==1) {
					extra_dc = 0.056;
				} else if (extra_dc_fc%10==2) {
					extra_dc = 0.058;
				} else if (extra_dc_fc%10==3) {
					extra_dc = 0.059;
				} else {
					extra_dc = 0.06;
				}

			var AQ1 = 0; var AQ2 = 0; var AQ3 = 0; var AQ4 = 0;
			  if (s_dc==0) {
					AQ1 = baq1;
				} else {
					AQ1 = Math.floor( baq1 *((1 + s_dc ) + 0.01 * s_dc * a_rf )* suc ) + Math.floor( baq1 * extra_dc * suc );
				}

				if (s_dc==0) {
					AQ2 = baq2;
				} else {
					AQ2 = Math.floor( baq2 *((1 + s_dc ) + 0.01 * s_dc * a_rf )* suc ) + Math.floor( baq2 * extra_dc * suc );
				}

				if (s_dc==0) {
					AQ3 = baq3;
				} else {
					AQ3 = Math.floor( baq3 *((1 + s_dc ) + 0.01 * s_dc * a_rf )* suc ) + Math.floor( baq3 * extra_dc * suc );
				}

				if (s_dc==0) {
					AQ4 = baq4;
				} else {
					AQ4 = Math.floor( baq4 *((1 + s_dc ) + 0.01 * s_dc * a_rf )* suc ) + Math.floor( baq4 * extra_dc * suc );
				}

			document.getElementById("nenryo").value = AQ1;
			document.getElementById("danyaku").value = AQ2;
			document.getElementById("kozai").value = AQ3;
			document.getElementById("bauxite").value = AQ4;

			var plus = 0;
			  if (s_dc==0) {
					plus = 0;
				} else {
					plus = Math.floor(( s_dc + 0.01 * s_dc * a_rf + extra_dc ) * 100000 ) / 1000; // /1000=/100000*100
				}
			document.getElementById("zoshu").value = plus;

		}
