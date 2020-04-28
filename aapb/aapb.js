
	  function PA() { //素対空
	    var pa = parseInt(document.getElementById("kanmusu_taikuchi").value);
  	}
		function L() { //運
		  var luck = parseInt(document.getElementById("kanmusu_luck").value);
		}
		function S2() { //装備種。これよりも後で装備倍率に変換する都合上preを付けている。
			var pemf2 = parseInt(document.getElementById("soubishu2").value);
			var pemf3 = parseInt(document.getElementById("soubishu3").value);
			var pemf4 = parseInt(document.getElementById("soubishu4").value);
			var pemf5 = parseInt(document.getElementById("soubishu5").value);
			var pemf6 = parseInt(document.getElementById("soubishu6").value);
		}
		function T() { //装備の対空値
			var ea2 = parseInt(document.getElementById("taikuchi2").value);
			var ea3 = parseInt(document.getElementById("taikuchi3").value);
			var ea4 = parseInt(document.getElementById("taikuchi4").value);
			var ea5 = parseInt(document.getElementById("taikuchi5").value);
			var ea6 = parseInt(document.getElementById("taikuchi6").value);
		}
		function K() { //改修値
			var r1 = parseInt(document.getElementById("soubi_kaishuchi1").value);
			var r2 = parseInt(document.getElementById("soubi_kaishuchi2").value);
			var r3 = parseInt(document.getElementById("soubi_kaishuchi3").value);
			var r4 = parseInt(document.getElementById("soubi_kaishuchi4").value);
			var r5 = parseInt(document.getElementById("soubi_kaishuchi5").value);
			var r6 = parseInt(document.getElementById("soubi_kaishuchi6").value);
		}

		function RES() {
			var pa = parseInt(document.getElementById("kanmusu_taikuchi").value);
		  var luck = parseInt(document.getElementById("kanmusu_luck").value);
			var pemf2 = parseInt(document.getElementById("soubishu2").value);
			var pemf3 = parseInt(document.getElementById("soubishu3").value);
			var pemf4 = parseInt(document.getElementById("soubishu4").value);
			var pemf5 = parseInt(document.getElementById("soubishu5").value);
			var pemf6 = parseInt(document.getElementById("soubishu6").value);
		  var ea2 = parseInt(document.getElementById("taikuchi2").value);
			var ea3 = parseInt(document.getElementById("taikuchi3").value);
			var ea4 = parseInt(document.getElementById("taikuchi4").value);
			var ea5 = parseInt(document.getElementById("taikuchi5").value);
      var ea6 = parseInt(document.getElementById("taikuchi6").value);
		  var r1 = parseInt(document.getElementById("soubi_kaishuchi1").value);
			var r2 = parseInt(document.getElementById("soubi_kaishuchi2").value);
			var r3 = parseInt(document.getElementById("soubi_kaishuchi3").value);
			var r4 = parseInt(document.getElementById("soubi_kaishuchi4").value);
		  var r5 = parseInt(document.getElementById("soubi_kaishuchi5").value);
			var r6 = parseInt(document.getElementById("soubi_kaishuchi6").value);

			var Cb = 0;
			if(document.AAPB.isegata.checked) Cb = 25; //伊勢型ボーナスの部分。

    //選択された装備種→装備倍率への変換 pemf→emf
		var emp2 = 0; var emp3 = 0; var emp4 = 0; var emp5 = 0; var emp6 = 0; //装備倍率
		 if (pemf2==1) { emf2 = 6;} else if (pemf2==2||pemf2==3) { emf2 = 4;} else if (pemf2==4) { emf2 = 3;} else { emf2 = 0;}
		 if (pemf3==1) { emf3 = 6;} else if (pemf3==2||pemf3==3) { emf3 = 4;} else if (pemf3==4) { emf3 = 3;} else { emf3 = 0;}
		 if (pemf4==1) { emf4 = 6;} else if (pemf4==2||pemf4==3) { emf4 = 4;} else if (pemf4==4) { emf4 = 3;} else { emf4 = 0;}
		 if (pemf5==1) { emf5 = 6;} else if (pemf5==2||pemf5==3) { emf5 = 4;} else if (pemf5==4) { emf5 = 3;} else { emf5 = 0;}
		 if (pemf6==1) { emf6 = 6;} else if (pemf6==2||pemf6==3) { emf6 = 4;} else if (pemf6==4) { emf6 = 3;} else { emf6 = 0;}

    //選択された装備→改修係数への変換 pemf→rc
    var rc2 = 0; var rc3 = 0; var rc4 = 0; var rc5 = 0; var rc6 = 0; //改修係数
		 if (pemf2==1) { rc2 = 4;} else if (pemf2==2) { rc2 = 3;} else if (pemf2==3) { rc2 = 2;} else { rc2 = 0;}
		 if (pemf3==1) { rc3 = 4;} else if (pemf3==2) { rc3 = 3;} else if (pemf3==3) { rc3 = 2;} else { rc3 = 0;}
		 if (pemf4==1) { rc4 = 4;} else if (pemf4==2) { rc4 = 3;} else if (pemf4==3) { rc4 = 2;} else { rc4 = 0;}
		 if (pemf5==1) { rc5 = 4;} else if (pemf5==2) { rc5 = 3;} else if (pemf5==3) { rc5 = 2;} else { rc5 = 0;}
		 if (pemf6==1) { rc6 = 4;} else if (pemf6==2) { rc6 = 3;} else if (pemf6==3) { rc6 = 2;} else { rc6 = 0;}

		//e1r~e6r 各装備 装備倍率emf*対空値ea+改修係数rc*(√改修値r) 計算後は加重対空値に入れる
		 var e1r = 0;
		  e1r = 6 * 8 + 4 * Math.sqrt(r1);
		 var e2r = 0;
		  e2r = emf2 * ea2 + rc2 * Math.sqrt(r2);
		 var e3r = 0;
 		  e3r = emf3 * ea3 + rc3 * Math.sqrt(r3);
		 var e4r = 0;
 		  e4r = emf4 * ea4 + rc4 * Math.sqrt(r4);
 		 var e5r = 0;
  		e5r = emf5 * ea5 + rc5 * Math.sqrt(r5);
		 var e6r = 0;
	 	  e6r = emf6 * ea6 + rc6 * Math.sqrt(r6);

		//aa 加重対空値
		 var aa = 0;
		  aa = 2 * Math.floor((pa +(e1r+e2r+e3r+e4r+e5r+e6r))/ 2)

		//trp (噴進弾幕)発動率 (1-1)は現状ロケラン1個にしか対応できていないため。
		 var trp = 0;
		  trp = (((aa + (0.9*luck))/281)* 100) + (((1-1)* 15))+ Cb;

		 trp = Math.round(trp * 100) / 100;
		 document.getElementById("aapb").value = trp;
	 }
